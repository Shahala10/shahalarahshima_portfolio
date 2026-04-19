import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, School } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Shahala Rahshima A" },
      {
        name: "description",
        content:
          "Academic journey: B.Sc. Multimedia & Web Technology, Diploma in AI & Robotics, and schooling.",
      },
      { property: "og:title", content: "Education — Shahala Rahshima A" },
      { property: "og:description", content: "Academic background and qualifications." },
    ],
  }),
  component: EducationPage,
});

const items = [
  {
    icon: GraduationCap,
    year: "2026",
    degree: "B.Sc. Multimedia & Web Technology",
    place: "Nilgiri College of Arts and Science (NCAS), Bharathiar University",
    desc: "Foundation in design, programming, and modern web technologies.",
  },
  {
    icon: BookOpen,
    year: "Diploma",
    degree: "Professional Diploma in AI and Robotics",
    place: "Specialised training in artificial intelligence & automation",
    desc: "Hands-on exposure to AI fundamentals, ML workflows, and robotics concepts.",
  },
  {
    icon: School,
    year: "2022 — 23",
    degree: "Higher Secondary Education",
    place: "Government Model School, The Nilgiris",
    desc: "Completed schooling with curiosity for technology and design.",
  },
];

function EducationPage() {
  return (
    <PageShell eyebrow="Education" title="Where the foundations were laid.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <ul className="space-y-10">
          {items.map((it, idx) => (
            <li
              key={it.degree}
              className={`reveal relative flex flex-col gap-4 md:flex-row md:items-start ${
                idx % 2 === 0 ? "md:justify-start" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-champagne ring-4 ring-background md:left-1/2" />

              <div
                className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-14 md:pl-0`}
              >
                <div className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-soft">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-champagne/15 text-champagne">
                      <it.icon size={18} />
                    </div>
                    <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {it.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl leading-tight">{it.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{it.place}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
