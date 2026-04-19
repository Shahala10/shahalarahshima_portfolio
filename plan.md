# Shahala Rahshima — Premium Portfolio Website

A luxury, dark-themed personal portfolio with glassmorphism, neon accents, and cinematic motion. Designed to feel like a $500+ template — Apple meets luxury fashion meets tech.

## Design Direction

**Aesthetic:** Dark luxury with royal purple + lavender accents, glassmorphism cards, subtle neon glow, generous whitespace.

**Palette (HSL tokens in `index.css`):**
- Deep black background `#0A0A0F`
- Charcoal surface `#13131A`
- Royal purple primary `#7C3AED`
- Soft lavender accent `#C4B5FD`
- Silver/white text
- Purple + blue neon glow used sparingly on hover/CTAs

**Typography:**
- Headings: **Playfair Display** (elegant serif) for hero, **Syne** for section titles
- Body: **Inter**
- Loaded via Google Fonts in `index.html`

**Motion:** Framer Motion for fade-in, stagger, parallax; CSS for hover glow & gradient shimmer; floating particle background in hero (lightweight canvas, no heavy libs).

## Page Structure (single-page, smooth scroll)

1. **Loading screen** — animated initials "SR" with gradient ring, fades out after ~1.2s
2. **Sticky glass navbar** — logo left, nav links center (Home, About, Skills, Projects, Experience, Contact), theme toggle + "Resume" CTA right; mobile sheet menu
3. **Scroll progress bar** — thin gradient line at top
4. **Custom animated cursor** — soft glowing dot + trailing ring (desktop only, disabled on touch)
5. **Hero** — full viewport
   - Floating particles + radial gradient glow
   - Eyebrow: "Turning Dreams Into Code."
   - H1: "Hi, I'm Shahala Rahshima" (clickable for easter egg — 5 clicks triggers a confetti + secret message overlay)
   - Subhead + emotional intro paragraph
   - Italic quote card: *"She believed she could learn tech, so she did."*
   - CTAs: **View My Work** (primary glow) + **Download Resume** (ghost)
   - Circular profile placeholder with rotating gradient glow border
6. **About Me** — two-column glass card: story on the left, values chips (Creativity, Leadership, Problem Solving, Continuous Learning, Confidence) on the right; vertical journey timeline below
7. **My Vision** — large quote-style section explaining AI + design + impact mission
8. **Skills** — 5 category glass cards (Programming, AI & ML, Web Dev, Design, Tools), each with icon, skill chips and animated progress bars on scroll
9. **Projects** — filterable grid (All / AI / Web / Design); 5 project cards with image placeholder, tags, description, Demo + GitHub buttons, tilt/glow hover
10. **Experience & Achievements** — alternating timeline of 6 milestones with icons and dates
11. **Testimonials** — 3 glass cards (Teacher, Classmate, Mentor) with avatar initials, quote, role
12. **Resume** — preview card with quick details (email, LinkedIn, GitHub, location) + Download button
13. **Contact** — validated form (zod + react-hook-form, name/email/message), social icons, closing line "Let's build something meaningful together."
14. **Footer** — name, quote *"From zero knowledge to building my future in tech."*, socials, copyright

## Interactions & Polish

- Framer Motion `whileInView` fade + slide for every section
- Hover glow on buttons, cards, project tiles
- Parallax on hero blob and about image
- Dark/light mode toggle (dark default; light keeps lavender accents)
- Smooth scroll via CSS `scroll-behavior` + anchor links
- Toast confirmation on contact submit (no backend — front-end only with success state)
- Form validation with friendly inline errors
- Easter egg: 5 clicks on hero name → fullscreen overlay "✨ You found the secret! Keep believing." with sparkles, dismissible

## Tech & File Plan

- Update `index.css` with new HSL tokens, gradients, glass utilities, glow shadows, custom keyframes (float, shimmer, pulse-glow)
- Update `tailwind.config.ts` with font families, new animations, custom box-shadows
- Update `index.html` to load Google Fonts
- New components in `src/components/portfolio/`: `Navbar`, `Loader`, `Cursor`, `ScrollProgress`, `Particles`, `Hero`, `About`, `Vision`, `Skills`, `Projects`, `Experience`, `Testimonials`, `Resume`, `Contact`, `Footer`, `EasterEgg`
- Replace `src/pages/Index.tsx` to compose the portfolio
- Install `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`
- Use existing shadcn `button`, `card`, `input`, `textarea`, `badge`, `sheet`, `sonner`, `tabs` (for project filter)
- Profile image and resume use placeholder assets (`/placeholder.svg` + a sample PDF link); Shahala can swap later

## Notes for Shahala (after build)
- Best profile photo: soft studio lighting, dark background, looking confident/slight smile, shoulders-up — pairs perfectly with the gradient glow ring
- Replace project images with real screenshots in `public/projects/`
- Drop your real resume PDF at `public/resume.pdf`























## Goal
Make your contact form actually deliver submissions to **shahalarahshimaa@gmail.com** — for free.

## Free tools compared

| Tool | Free tier | Setup effort | How it works | Best for |
|---|---|---|---|---|
| **Lovable Email (built-in)** | Generous, no signup | Lowest — already part of Lovable Cloud | Server route → queued → sent from your verified domain | Pro look (`from: you@yourdomain.com`), best deliverability |
| **Resend** (already connected) | 3,000 emails/mo, 100/day | Low — connector already linked | Server route calls Resend API via gateway | Quick start, can use `onboarding@resend.dev` without a domain |
| **Web3Forms** | 250 submissions/mo | Lowest — no backend at all | Form POSTs directly to their API, they email you | Pure static sites, zero code |
| **Formspree** | 50 submissions/mo | Lowest — no backend | Same as Web3Forms | Very low volume |
| **EmailJS** | 200 emails/mo | Low — client-side SDK | Browser SDK sends via your Gmail/SMTP | Personal sites, but exposes keys client-side |
| **Zapier Webhook → Gmail** | 100 tasks/mo | Medium — needs a Zap | Webhook triggers a Gmail "send" Zap | If you already use Zapier |

## My recommendation: Resend (already connected)

Since **Resend is already linked to your project** from the previous setup, the cleanest path is to finish wiring it up. No new accounts, no DNS setup needed — you can send to your Gmail using `onboarding@resend.dev` as the sender immediately, and switch to a custom domain later if you want.

## What I'll build

1. **Server route** `src/routes/api.contact.ts`
   - Accepts `{ name, email, message }` POST
   - Validates input (non-empty, valid email, length caps)
   - Saves submission to existing `contact_messages` table (backup)
   - Calls Resend via the gateway (`https://connector-gateway.lovable.dev/resend/emails`) with:
     - `from: "Portfolio Contact <onboarding@resend.dev>"`
     - `to: ["shahalarahshimaa@gmail.com"]`
     - `reply_to: <visitor's email>` ← so you can hit Reply directly
     - `subject: "New portfolio message from {name}"`
     - Nicely formatted HTML body with name, email, message
   - Returns `{ ok: true }` or error JSON

2. **Update `src/routes/contact.tsx`**
   - Replace the fake `setTimeout` with `fetch("/api/contact", …)`
   - Keep existing toast + clear-form UX
   - Show real error toast on failure

3. **Verify end-to-end**
   - Check the route deploys, send a test submission, confirm email lands in your Gmail

## Notes
- No DNS or Lovable Email domain setup required for this path.
- Free tier (3k/month) is far more than a personal portfolio will ever use.
- If you later want emails to come from `contact@shahalarahshima.com` instead of `onboarding@resend.dev`, you'd verify a domain in Resend — but that's optional.

