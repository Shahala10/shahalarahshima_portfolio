import { createFileRoute, Link } from "@tanstack/react-router";
import { Layers, ArrowUpRight, Check, Code, Bot, Terminal, Palette } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shahala Rahshima A" },
      {
        name: "description",
        content: "Web design, AI projects, mentorship, and tech services with a focus on clean, modern, and responsive experiences.",
      },
      { property: "og:title", content: "Services — Shahala Rahshima A" },
      { property: "og:description", content: "Modern web design, AI-powered experiences, mentorship, and Python projects." },
    ],
  }),
  component: ServicesPage,
});

interface Service {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Layers,
    title: "Web Design",
    description: "Designing modern, responsive, and visually appealing websites with a focus on clean layouts, user experience, and creativity. Each project is treated as a small piece of craft — not a template.",
    features: [
      "Responsive layouts (mobile, tablet, desktop)",
      "Clean, modern typography & spacing",
      "User-centred experience flows",
      "Smooth motion and micro-interactions",
    ],
  },
  {
    icon: Code,
    title: "Beginner Tech Mentorship",
    description: "Helping students and beginners who are starting their journey in coding, AI, web development, and design.",
    features: [
      "Beginner-friendly guidance",
      "Coding and learning roadmaps",
      "Career and portfolio advice",
      "Support for girls and students in tech",
    ],
  },
  {
    icon: Bot,
    title: "AI-Powered Web Experiences",
    description: "Creating websites and applications that combine modern design with AI features such as smart recommendations, chatbots, personalized content, and automation.",
    features: [
      "AI chatbot integration",
      "Personalized user experiences",
      "Smart recommendation systems",
      "AI-assisted automation features",
    ],
  },
  {
    icon: Terminal, // Perfect for Python & AI projects
    title: "Python & AI Projects",
    description: "Building beginner-friendly and creative AI projects using Python, machine learning, automation, and data analysis.",
    features: [
      "Python-based AI mini projects",
      "Machine learning prototypes",
      "Automation tools and scripts",
      "Data analysis and visualization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing elegant, user-friendly interfaces and digital experiences that are modern, intuitive, and visually engaging.",
    features: [
      "Wireframes and layouts",
      "Portfolio and landing page design",
      "User flow and interface design",
      "Modern and aesthetic visuals",
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="What I help with."
      intro="Multiple services, each offered with full attention."
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={`${service.title}-${index}`}
              className="reveal group glass relative overflow-hidden rounded-3xl p-10 shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-champagne/25 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-foreground text-background">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-4xl">{service.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-champagne/20 text-champagne">
                        <Check size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Start a project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}