import { createFileRoute } from "@tanstack/react-router";
import { Brain, Code2, Palette, Sparkles, Layers } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shahala Rahshima A" },
      {
        name: "description",
        content:
          "The story of a Multimedia & Web Technology student turning curiosity into a career in AI, design, and development.",
      },
      { property: "og:title", content: "About — Shahala Rahshima A" },
      {
        property: "og:description",
        content: "From zero coding knowledge to aspiring AI Engineer.",
      },
    ],
  }),
  component: AboutPage,
});

const chips = [
  { icon: Brain, label: "Aspiring AI Engineer" },
  { icon: Code2, label: "Python Developer" },
  { icon: Layers, label: "Web Designer" },
  { icon: Palette, label: "UI/UX Designer" },
  { icon: Sparkles, label: "ML Enthusiast" },
];

function AboutPage() {
  return (
    <PageShell eyebrow="About" title="A journey from curiosity to craft.">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="reveal lg:col-span-3">
          <p className="text-lg leading-relaxed text-foreground/90">
            Dedicated Multimedia and Web Technology student with a keen interest in software
            development, AI, and web technologies. Equipped with programming skills and practical
            experience through projects and internships.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Seeking an opportunity to enhance technical expertise and contribute effectively in the
            IT field.
          </p>

          <blockquote className="reveal mt-10 rounded-3xl border-l-2 border-champagne bg-secondary/40 p-6">
            <p className="font-display text-2xl italic leading-snug">
              “I believe the best technology is created when curiosity, creativity, 
              and determination come together to solve real problems.”
            </p>
          </blockquote>
        </div>

        <div className="lg:col-span-2">
          <div className="reveal grid grid-cols-2 gap-3">
            {chips.map((c) => (
              <div
                key={c.label}
                className="glass group flex flex-col gap-3 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-champagne/15 text-champagne transition-colors group-hover:bg-champagne group-hover:text-champagne-foreground">
                  <c.icon size={18} />
                </div>
                <p className="text-sm font-medium leading-tight">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal glass mt-6 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Now</p>
            <p className="mt-2 font-display text-2xl">Building. Learning. Sharing.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Every project is a step closer to becoming the AI engineer I dream of being.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
