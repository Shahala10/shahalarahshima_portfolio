import { useReveal } from "@/hooks/use-reveal";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  useReveal();
  return (
    <main className="relative pt-32 pb-16">
      <div className="gradient-orb -top-20 -left-20 h-72 w-72 bg-champagne/40" />
      <div className="gradient-orb top-40 right-0 h-80 w-80 bg-lavender/40" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="reveal">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-champagne" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance font-display text-5xl leading-[1.05] md:text-7xl">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">{intro}</p>
          )}
        </div>

        <div className="mt-16">{children}</div>
      </section>
    </main>
  );
}
