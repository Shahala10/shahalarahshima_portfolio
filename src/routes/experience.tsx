import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Shahala Rahshima A" },
      {
        name: "description",
        content: "Internship and professional experience as a Python Developer.",
      },
      { property: "og:title", content: "Experience — Shahala Rahshima A" },
      { property: "og:description", content: "Python Developer Intern at the High Court of Kerala." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell eyebrow="Experience" title="Where theory met practice.">
      <div className="mx-auto max-w-3xl">
        <div className="reveal glass relative overflow-hidden rounded-3xl p-8 shadow-soft">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-champagne/20 blur-3xl" />
          <div className="flex items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
              <Briefcase size={20} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} /> July 2025 · 10 days
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Kerala, India
                </span>
              </div>
              <h3 className="mt-3 font-display text-3xl leading-tight">
                Python Developer Intern
              </h3>
              <p className="mt-1 text-base font-medium text-foreground/80">
                High Court of Kerala
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Worked as a Python Developer Intern, gaining practical exposure to Python
                programming and real-world development workflows. Collaborated alongside
                experienced developers, learning version control, code review etiquette, and how
                production-grade systems are structured.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Backend", "Version Control", "Team Workflow"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="reveal mt-10 text-center text-sm italic text-muted-foreground">
          More chapters being written — stay tuned.
        </p>
      </div>
    </PageShell>
  );
}
