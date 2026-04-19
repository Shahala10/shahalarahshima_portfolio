import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shahala Rahshima A" },
      {
        name: "description",
        content: "Get in touch with Shahala Rahshima A for collaborations, projects, or a chat.",
      },
      { property: "og:title", content: "Let's Connect — Shahala Rahshima A" },
      {
        property: "og:description",
        content: "I would love to connect, collaborate, and create meaningful technology together.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        toast.error(data.error || "Could not send message. Please try again.");
        return;
      }
      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageShell
      eyebrow="Let's Connect"
      title="Say hello."
      intro="I would love to connect, collaborate, and create meaningful technology together."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          className="reveal glass rounded-3xl p-8 shadow-soft lg:col-span-3"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-champagne"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-champagne"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or just say hi…"
                rows={6}
                className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-champagne"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send size={14} />
            </button>
          </div>
        </form>

        <div className="reveal space-y-4 lg:col-span-2">
          <div className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Reach me at</p>
            <a
              href="mailto:shahalarahshimaa@gmail.com"
              className="mt-3 flex items-start gap-3 text-sm transition-colors hover:text-champagne"
            >
              <Mail size={16} className="mt-0.5 shrink-0 text-champagne" />
              <span className="break-all">shahalarahshimaa@gmail.com</span>
            </a>
            <div className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="mt-0.5 shrink-0 text-champagne" />
              The Nilgiris, India
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Find me on</p>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/shahala-rahshima"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-champagne hover:bg-champagne hover:text-champagne-foreground"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Shahala10"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <p className="font-display text-lg italic leading-snug">
              “Let's build something quietly beautiful together.”
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
