**Development Plan: Premium Portfolio Website**
A luxury, dark-themed personal portfolio featuring glassmorphism, neon accents, and cinematic motion. This architecture follows a "luxury tech" aesthetic with a focus on high-performance animations and seamless user experience.



**🎨 Design Direction**
**Visual Identity**
- **Theme:** Deep luxury dark mode.
- **Background:** #0A0A0F (Deep Space) with #13131A (Charcoal Surface) cards.
- **Accents:** Primary Royal Purple (#7C3AED) and Soft Lavender (#C4B5FD).
- **Effects:** * Glassmorphism: High background blur (12px+) with thin semi-transparent borders.
       . Neon Glow: Subtle outer shadows using primary accent colors for interactive elements.


**Typography & Motion**

**-Headlines:** Playfair Display (Serif) for elegance; Syne (Geometric) for section titles.
**-Body: Inter** (Sans-serif) for high legibility.
**-Interactions:** Custom animated cursor (glowing dot + trailing ring) and parallax scroll reveals.


**🛠️ Technical Stack**

**-Frontend:** React + TypeScript + Vite.
**-Styling:** Tailwind CSS (utilizing HSL tokens for dynamic theming).
**-Animations:** Framer Motion (for physics-based transitions).
**-Email Engine:** Resend (Server-side integration via API routes).
**-Database:** Supabase (for contact message backups).


**🏗️ Architecture (Single-Page)**

**1. Navigation & Global**
   . Loading Screen: High-end entrance animation with "SR" logo fade-in.
   . Sticky Navbar: Glassmorphic blur effect with a scroll-progress indicator top-bar.
   . Custom Cursor: A reactive dot that expands/glows when hovering over links.

**2. Core Sections**
   . Hero: Cinematic intro with a radial glow background and "View Work" CTA.
   . About: Two-column layout; left for narrative, right for "Value Chips" (Identity/Philosophy).
   . Skills: Categorized glass cards (e.g., Development, Design, AI) with staggered entrance animations.
   . Projects: Responsive grid featuring hover-tilt effects and tech-stack badges.
   . Experience: Minimalist vertical timeline with animated connecting nodes.
   . Contact: Functional glass form with real-time validation and success/error toasts.🚀

**Implementation Roadmap**

Phase,Focus,Key Deliverables
Phase 1,System Setup,Define Tailwind HSL tokens and global Typography.
Phase 2,Core Shell,"Develop Navigation, Hero, and Footer components."
Phase 3,Data Layers,Build Project/Skill cards and populate content.
Phase 4,Motion,Implement Framer Motion scroll reveals and Custom Cursor.
Phase 5,Integration,Connect Resend API for the contact form and finalize mobile responsiveness.

**🛡️ Success Metrics**

- Performance: Fluid 60fps animations across desktop and mobile.
- UX: Zero-friction contact flow with immediate feedback.
- Aesthetic: Consistent use of glassmorphism and "glow" depth.


##💡 Secret Feature (Easter Egg)

- Trigger: 5 consecutive clicks on the Hero Name.
- Effect: Toggle "Neon Mode" (Intensifies all glows and triggers a subtle confetti particle burst).
