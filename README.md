# Sadaf Zahoor — Personal Portfolio Website

A modern, responsive, and accessible personal portfolio built with **Next.js 14 (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- Sticky, responsive navigation bar with active-section highlighting
- Premium hero section with an animated "typing" code card and profile image
- About, Skills, Projects, Services, Education, and Contact sections
- Fully working contact form (client-side validation + `/api/contact` route)
- Dark / Light mode with no flash-of-wrong-theme on load
- Glassmorphism cards, hover effects, and scroll-reveal animations
- Scroll-to-top button and a short initial page-load animation
- SEO metadata, Open Graph tags, JSON-LD structured data, sitemap & robots.txt
- Auto-generated favicon and Apple touch icon
- Fully typed with TypeScript, organized into reusable components

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   ├── projects/              # Project preview images (SVG placeholders)
│   ├── profile-placeholder.svg
│   ├── og-image.svg
│   └── resume-placeholder.pdf # Replace with your real resume
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Contact form API endpoint
│   │   ├── layout.tsx             # Root layout, fonts, metadata, providers
│   │   ├── page.tsx               # Home page (assembles all sections)
│   │   ├── globals.css
│   │   ├── icon.tsx               # Generated favicon
│   │   ├── apple-icon.tsx         # Generated Apple touch icon
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/            # All UI components (Navbar, Hero, About, ...)
│   ├── data/                  # Content data (skills, projects, services, education)
│   ├── lib/utils.ts           # Small helpers (class merge, email validation)
│   └── types/index.ts         # Shared TypeScript types
├── tailwind.config.ts
├── next.config.mjs
├── package.json
└── .env.example
```

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18.17+ and npm installed.

1. Open a terminal in the `portfolio` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional but recommended) Copy the environment file and fill in your email credentials so the contact form can actually send emails:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your SMTP details (see **Contact Form Setup** below). If you skip this step, the site still works — form submissions are just logged on the server instead of emailed.
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build locally:
```bash
npm run build
npm run start
```

---

## 📧 Contact Form Setup

The contact form posts to `src/app/api/contact/route.ts`, which sends an email via **Nodemailer** using SMTP credentials from environment variables.

1. Copy `.env.example` to `.env.local`.
2. Fill in:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`
   - `SMTP_USER`, `SMTP_PASS` (for Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your normal password)
   - `CONTACT_RECEIVER_EMAIL` — the inbox that should receive messages
3. Restart the dev server after adding/changing `.env.local`.

Prefer **EmailJS** instead? You can swap the `fetch("/api/contact")` call inside `src/components/Contact.tsx` for the EmailJS SDK (`emailjs.send(...)`) using your own Service ID, Template ID, and Public Key from [emailjs.com](https://www.emailjs.com/).

---

## 🖊 Personalizing Your Content

Before publishing, update these placeholders:

| What                     | Where                                              |
|--------------------------|-----------------------------------------------------|
| GitHub / LinkedIn / Email links | `src/components/Contact.tsx`, `src/components/Footer.tsx`, `src/app/page.tsx` (JSON-LD) |
| Resume PDF               | Replace `public/resume-placeholder.pdf` with your real resume (keep the same filename, or update the link in `src/components/Hero.tsx`) |
| Profile image            | Replace `public/profile-placeholder.svg` with a real photo (`.jpg`/`.png`), and update the `src` in `Hero.tsx` and `About.tsx` |
| Project details & images | `src/data/projects.ts` and `public/projects/*.svg` |
| Skills                   | `src/data/skills.ts` |
| Services                 | `src/data/services.ts` |
| Education history        | `src/data/education.ts` |
| Site URL / SEO metadata  | `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` (replace `sadaf-zahoor-portfolio.vercel.app` with your real domain once deployed) |

---

## 📤 Upload the Project to GitHub

1. Create a new repository on [github.com/new](https://github.com/new) (e.g. `portfolio-website`) — don't initialize it with a README.
2. In your terminal, inside the `portfolio` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
   git push -u origin main
   ```

---

## ▲ Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New → Project**.
3. Import the GitHub repository you just pushed.
4. Vercel auto-detects Next.js — leave the default build settings as-is.
5. Under **Environment Variables**, add the same variables from your `.env.local` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_RECEIVER_EMAIL`) so the live contact form can send emails.
6. Click **Deploy**. After a minute, you'll get a live URL like `https://portfolio-website.vercel.app`.

---

## 🔄 Updating the Website Later

Whenever you want to change content or design:

1. Edit the relevant files locally (e.g. `src/data/projects.ts` to add a new project).
2. Test it locally with `npm run dev`.
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Update projects section"
   git push
   ```
4. Vercel automatically detects the new push to `main` and redeploys your site within a minute — no extra steps needed.

---

## 🧰 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Nodemailer](https://nodemailer.com/) (contact form email delivery)

---

## 📄 License

This project is free to use and modify as your personal portfolio.
