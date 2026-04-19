import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "shahalarahshimaa@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        let payload: { name?: unknown; email?: unknown; message?: unknown };
        try {
          payload = await request.json();
        } catch {
          return jsonResponse({ ok: false, error: "Invalid JSON" }, 400);
        }

        const name = typeof payload.name === "string" ? payload.name.trim() : "";
        const email = typeof payload.email === "string" ? payload.email.trim() : "";
        const message = typeof payload.message === "string" ? payload.message.trim() : "";

        if (name.length < 1 || name.length > 120) {
          return jsonResponse({ ok: false, error: "Invalid name" }, 400);
        }
        if (email.length < 3 || email.length > 254 || !EMAIL_RE.test(email)) {
          return jsonResponse({ ok: false, error: "Invalid email" }, 400);
        }
        if (message.length < 1 || message.length > 4000) {
          return jsonResponse({ ok: false, error: "Invalid message" }, 400);
        }

        // Persist (best-effort backup)
        try {
          await supabaseAdmin.from("contact_messages").insert({ name, email, message });
        } catch (err) {
          console.error("contact_messages insert failed", err);
        }

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          return jsonResponse(
            { ok: false, error: "Email service not configured" },
            500,
          );
        }

        const html = `
          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
            <h2 style="margin:0 0 16px;font-size:18px">New portfolio message</h2>
            <p style="margin:4px 0"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin:4px 0"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
            <p style="white-space:pre-wrap;line-height:1.5;margin:0">${escapeHtml(message)}</p>
          </div>
        `;

        try {
          const res = await fetch(`${GATEWAY_URL}/emails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({
              from: "Portfolio Contact <onboarding@resend.dev>",
              to: [TO_EMAIL],
              reply_to: email,
              subject: `New portfolio message from ${name}`,
              html,
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error("Resend send failed", res.status, text);
            return jsonResponse(
              { ok: false, error: "Failed to send email" },
              502,
            );
          }
        } catch (err) {
          console.error("Resend request error", err);
          return jsonResponse({ ok: false, error: "Email send error" }, 502);
        }

        return jsonResponse({ ok: true });
      },
    },
  },
});
