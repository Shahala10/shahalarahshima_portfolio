Since you are building a premium portfolio, your `README.md` should serve as the "High-End Documentation" for your code. It needs to be scannable, professional, and visually structured.

Here is a structured template in **GitHub Markdown** format. You can copy this directly into your `README.md`.

-----

# 🌌 Shahala Rahshima | Premium Portfolio

A luxury, dark-themed personal portfolio showcasing high-end web development and design. Built with a focus on cinematic motion, glassmorphism, and seamless user experience.

[**Live Demo**](https://shahalarahshimaportfolio.vercel.app) | [**Report Bug**](https://github.com/Shahala10/shahalarahshima_portfolio/issues)

-----

## ✨ Highlights

  * **Luxury Aesthetic:** Deep space theme with royal purple and lavender neon accents.
  * **Motion Design:** Physics-based animations using Framer Motion and custom parallax effects.
  * **Performance:** Optimized for high-speed loading and smooth 60fps scrolling.
  * **Responsive:** Fully adaptive glassmorphic UI across all device sizes.
  * **Functional:** Integrated contact system via Resend and real-time form validation.

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS (HSL tokens), Lucide Icons |
| **Animation** | Framer Motion |
| **Backend/API** | Resend (Email), Supabase |
| **Deployment** | Vercel |

## 🚀 Getting Started

### Prerequisites

  * [Node.js](https://nodejs.org/) (v18 or higher)
  * [Bun](https://bun.sh/) or NPM

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shahala10/shahalarahshima_portfolio.git
    cd shahalarahshima_portfolio
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    # or
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your keys:

    ```env
    VITE_RESEND_API_KEY=your_api_key
    VITE_SUPABASE_URL=your_url
    VITE_SUPABASE_ANON_KEY=your_key
    ```

4.  **Run the development server:**

    ```bash
    bun dev
    ```

## 📂 Project Structure

```text
├── public/          # Static assets (logos, images)
├── src/
│   ├── components/  # Reusable UI components (Glass cards, Buttons)
│   ├── hooks/       # Custom React hooks (Scroll logic, Cursor)
│   ├── sections/    # Main page sections (Hero, About, Projects)
│   ├── styles/      # Tailwind & Global CSS
│   └── types/       # TypeScript definitions
├── supabase/        # Database migrations and config
└── plan.md          # Project roadmap and design vision
```

## 🎨 Core Design Principles

> "Luxury is in each detail."

  * **Glassmorphism:** All containers use a background blur of `12px` and a `0.5px` border opacity to simulate real glass.
  * **Subtle Glows:** Interactive elements utilize a `box-shadow` with a `7C3AED` (Royal Purple) spread to create a neon-depth effect.
  * **Staggered Loading:** Content does not just appear; it breathes into view using staggered Framer Motion variants.

-----

## 👤 Author

**Shahala Rahshima A**

  * **GitHub:** [@Shahala10](https://github.com/Shahala10)
  * **Portfolio:** [Live Demo ✨](https://shahalarahshimaportfolio.shahalashazz10.workers.dev/)

-----

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
