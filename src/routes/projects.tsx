import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Utensils, Bot, Smartphone } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shahala Rahshima A" },
      {
        name: "description",
        content:
          "Featured projects: Food Booking System, RAG-based College Chatbot, and a Mobile App UI/UX design.",
      },
      { property: "og:title", content: "Featured Projects — Shahala Rahshima A" },
      { property: "og:description", content: "A selection of academic and design projects." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    icon: Utensils,
    title: "Food Booking System",
    type: "Academic Project",
    desc: "A web-based food booking system created to simplify food ordering and management.",
    tags: ["Web", "Python", "Database"],
    gradient: "from-champagne/40 via-champagne/10 to-transparent",
  },
  {
    icon: Bot,
    title: "RAG-Based College Chatbot",
    type: "AI Project",
    desc: "An AI-powered chatbot that answers college-related questions using Retrieval-Augmented Generation.",
    tags: ["AI", "Python", "RAG"],
    gradient: "from-lavender/50 via-lavender/10 to-transparent",
  },
  {
    icon: Smartphone,
    title: "UI/UX Mobile App Design",
    type: "Design Project",
    desc: "A modern mobile application interface designed with a focus on user experience and clean visuals.",
    tags: ["UI/UX", "Figma", "Mobile"],
    gradient: "from-foreground/15 via-foreground/5 to-transparent",
  },
];

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Featured Projects"
      title="Selected work."
      intro="Three projects that mark different chapters — academic foundations, AI exploration, and design craft."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="reveal group glass relative flex flex-col overflow-hidden rounded-3xl shadow-soft transition-all hover:-translate-y-1"
          >
            <div
              className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}
            >
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-background/70 text-foreground backdrop-blur-sm transition-transform group-hover:scale-110">
                  <p.icon size={28} />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.type}</p>
              <h3 className="mt-2 font-display text-xl leading-tight">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
                >
                  View Project <ArrowUpRight size={12} />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary"
                >
                  Learn More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
