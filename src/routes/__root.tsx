import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shahala Rahshima A — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shahala Rahshima A — Python Developer, AI Engineer Aspirant, and UI/UX Enthusiast.",
      },
      { name: "author", content: "Shahala Rahshima A" },
      { property: "og:title", content: "Shahala Rahshima A — Portfolio" },
      {
        property: "og:description",
        content: "Python Developer · AI Engineer Aspirant · UI/UX Enthusiast",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shahala Rahshima A — Portfolio" },
      { name: "description", content: "A modern, elegant portfolio showcasing Shahala Rahshima A's journey as a tech professional." },
      { property: "og:description", content: "A modern, elegant portfolio showcasing Shahala Rahshima A's journey as a tech professional." },
      { name: "twitter:description", content: "A modern, elegant portfolio showcasing Shahala Rahshima A's journey as a tech professional." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7a09c99-c878-4e1c-8b24-a3dca7e4bdef/id-preview-82bc1a95--6591083b-acbd-4b39-8ce5-6c38e604736f.lovable.app-1776610869007.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7a09c99-c878-4e1c-8b24-a3dca7e4bdef/id-preview-82bc1a95--6591083b-acbd-4b39-8ce5-6c38e604736f.lovable.app-1776610869007.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <Outlet />
      <SiteFooter />
      <Toaster />
    </div>
  );
}
