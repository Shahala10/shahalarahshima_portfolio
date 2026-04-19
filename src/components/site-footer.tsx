import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <div>
          <p className="font-display text-lg">Shahala Rahshima A</p>
          <p className="text-sm text-muted-foreground">
            Designed with passion by Shahala Rahshima A
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/shahala-rahshima"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Shahala10"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:shahalarahshimaa@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <Mail size={16} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}