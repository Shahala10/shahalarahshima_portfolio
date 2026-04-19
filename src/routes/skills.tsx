import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Database,
  Brain,
  Cpu,
  Layers,
  Palette,
  MessagesSquare,
  Sparkles,
  Users,
  Crown,
  Briefcase,
  Zap,
  Rocket,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Shahala Rahshima A" },
      {
        name: "description",
        content:
          "Technical skills, AI & technology focus areas, and soft skills of Shahala Rahshima A.",
      },
      { property: "og:title", content: "Skills — Shahala Rahshima A" },
      {
        property: "og:description",
        content: "Python, SQL, MongoDB, AI, ML, UI/UX and the soft skills that bind them.",
      },
    ],
  }),
  component: SkillsPage,
});

const technical = [
  { icon: Code2, label: "Python" },
  { icon: Code2, label: "C" },
  { icon: Layers, label: "HTML" },
  { icon: Palette, label: "CSS" },
  { icon: Code2, label: "JavaScript" },
  { icon: Database, label: "SQL" },
  { icon: Database, label: "MongoDB" },
];

const aiTech = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Layers, label: "Web Development" },
  { icon: Palette, label: "UI/UX Design" },
];

const soft = [
  { icon: MessagesSquare, label: "Communication" },
  { icon: Sparkles, label: "Adaptability" },
  { icon: Users, label: "Teamwork" },
  { icon: Crown, label: "Leadership" },
  { icon: Briefcase, label: "Team Management" },
  { icon: Zap, label: "Quick Learner" },
  { icon: Rocket, label: "Eager to Learn New Tech" },
];

function SkillCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: { icon: React.ComponentType<{ size?: number }>; label: string }[];
}) {
  return (
    <div className="reveal glass flex h-full flex-col rounded-3xl p-6 shadow-soft">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-champagne">{subtitle}</p>
        <h3 className="mt-1 font-display text-2xl">{title}</h3>
      </div>
      <ul className="mt-6 flex flex-1 flex-wrap content-start gap-2">
        {items.map((s) => (
          <li
            key={s.label}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-champagne/60 hover:bg-champagne/10"
          >
            <s.icon size={14} />
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills & Expertise"
      title="The toolkit, the mindset."
      intro="A blend of technology I love to build with, the ideas that excite me, and the human qualities I bring to every team."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <SkillCard title="Technical Skills" subtitle="Build" items={technical} />
        <SkillCard title="AI & Technology" subtitle="Explore" items={aiTech} />
        <SkillCard title="Soft Skills" subtitle="Collaborate" items={soft} />
      </div>
    </PageShell>
  );
}
