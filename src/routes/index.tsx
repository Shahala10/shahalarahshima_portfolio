import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shahala Rahshima A — Portfolio" },
      {
        name: "description",
        content:
          "Python Developer · AI Engineer Aspirant · UI/UX Enthusiast. Turning creativity into technology.",
      },
      { property: "og:title", content: "Shahala Rahshima A — Portfolio" },
      {
        property: "og:description",
        content: "Python Developer · AI Engineer Aspirant · UI/UX Enthusiast.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  const role = useTypewriter([
    "Python Developer",
    "AI Engineer Aspirant",
    "Web Designer",
    "UI/UX Enthusiast",
  ]);

  return (
    <main className="relative overflow-hidden">
      <div className="gradient-orb -top-20 -left-32 h-[28rem] w-[28rem] bg-champagne/40" />
      <div className="gradient-orb top-1/3 -right-32 h-[26rem] w-[26rem] bg-lavender/40" />
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="particle absolute h-1 w-1 rounded-full bg-champagne/60"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-32 pb-20 lg:flex-row lg:gap-16">
        <div className="reveal flex-1">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles size={12} className="text-champagne" />
            Portfolio · 2026
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight">
            Shahala
            <br />
            <span className="italic text-champagne">Rahshima</span> A
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Python Developer · AI Engineer Aspirant · UI/UX Enthusiast
          </p>

          <div className="mt-6 flex h-8 items-center text-2xl font-medium">
            <span className="caret">{role}</span>
          </div>

          <p className="mt-6 max-w-lg text-balance text-base text-muted-foreground">
            Passionate about turning creativity into technology and inspiring beginners in tech.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
            >
              Contact Me
            </Link>
          </div>

          <p className="mt-10 max-w-md border-l-2 border-champagne pl-4 text-sm italic text-muted-foreground">
            “I started with zero coding knowledge. Today, I am building my future through
            technology.”
          </p>
        </div>

        <div className="reveal relative mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-champagne/40 via-transparent to-lavender/40 blur-2xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={profileImg}
                alt="Shahala Rahshima A"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 shadow-soft">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Located in</p>
              <p className="font-display text-lg">The Nilgiris, India</p>
            </div>
            <div className="glass absolute -top-4 -right-4 grid h-16 w-16 place-items-center rounded-full shadow-soft">
              <Sparkles className="text-champagne" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="reveal mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Explore
            </p>
            <h2 className="font-display text-4xl md:text-5xl">A glimpse of the journey.</h2>
          </div>
          <Link
            to="/about"
            className="hidden shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Read story <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { to: "/about" as const, eyebrow: "01", title: "About", desc: "From zero to AI." },
            {
              to: "/projects" as const,
              eyebrow: "02",
              title: "Projects",
              desc: "Selected work.",
            },
            {
              to: "/contact" as const,
              eyebrow: "03",
              title: "Contact",
              desc: "Let's create together.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group reveal glass relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-xs text-muted-foreground">{c.eyebrow}</p>
              <h3 className="mt-2 font-display text-3xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <ArrowRight
                size={18}
                className="mt-8 transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
