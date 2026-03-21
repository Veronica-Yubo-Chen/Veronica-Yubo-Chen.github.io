# Yubo (Veronica) Chen — Portfolio

[**Live site →** veronica-yubo-chen.github.io](https://veronica-yubo-chen.github.io)

Personal portfolio for **Yubo (Veronica) Chen** — Applied AI/ML Engineer based in Brisbane, Australia. Built with React 19, themed around *The Little Prince*, and featuring an animated starfield, day/night toggle, and fully data-driven content architecture.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Theme System](#theme-system)
- [Starfield Animation](#starfield-animation)
- [Accessibility](#accessibility)
- [Sections & Content](#sections--content)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Night / Day theme toggle** with persistent preference (localStorage)
- **Animated cosmic background** — 140 twinkling stars + periodic shooting stars, respects `prefers-reduced-motion`
- **Floating quick-nav bar** with IntersectionObserver-driven active-section highlighting
- **Fully data-driven** — all portfolio content lives in a single data file; components render from structured objects
- **Responsive design** — mobile-first layout with accordion skill groups on smaller screens
- **Skip-to-main link** and ARIA attributes for screen-reader accessibility
- **Automatic CI/CD** — GitHub Actions builds and deploys on every push to `main`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 with `@vitejs/plugin-react` |
| Styling | CSS custom properties (night + day palettes) |
| State Management | React Context API (theme), hooks (active section) |
| Animations | CSS keyframes + JS-driven shooting stars |
| Deployment | GitHub Actions → GitHub Pages |
| Node | v20 (CI) |

---

## Project Structure

```
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD pipeline
├── public/
│   ├── profile-photo.png       # Profile image
│   └── Yubo_Chen_Resume.pdf    # Downloadable CV
├── src/
│   ├── main.jsx                # React entry point — mounts <App /> into #root
│   ├── App.jsx                 # Top-level layout & component composition
│   ├── style.css               # All styling (~1 550 lines, night + day themes)
│   ├── data/
│   │   └── portfolioData.js    # All portfolio content as structured JS objects
│   ├── hooks/
│   │   ├── useTheme.jsx        # ThemeProvider context + useTheme() hook
│   │   └── useActiveSection.js # IntersectionObserver-based section tracker
│   └── components/
│       ├── Cosmos.jsx           # Starfield background (stars, shooting stars, planets)
│       ├── QuickNav.jsx         # Floating navigation bar with active highlighting
│       ├── ThemeToggle.jsx      # Day/Night toggle button
│       ├── Header.jsx           # Profile photo, name, subtitle, contact links
│       ├── AboutSection.jsx     # Pillars, values, metrics, sidebar facts & skills
│       ├── SidebarSkillGroup.jsx # Collapsible skill group (mobile accordion)
│       ├── SummarySection.jsx   # Professional summary
│       ├── SkillsSection.jsx    # 6 technical skill domains
│       ├── ExperienceSection.jsx # Work timeline with rotation sub-headings
│       ├── EducationSection.jsx # Degrees, awards, research topics
│       ├── PublicationsSection.jsx # Published papers with links
│       ├── ProjectsSection.jsx  # Project cards with tags & bullet points
│       ├── AwardsSection.jsx    # Awards & scholarships list
│       └── Footer.jsx           # Copyright footer
├── index.html                   # Vite HTML shell with <div id="root">
├── vite.config.js               # Vite config (React plugin, base: '/')
├── package.json                 # Dependencies & scripts
└── .gitignore
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 18 and npm.

```bash
# Clone the repository
git clone https://github.com/Veronica-Yubo-Chen/Veronica-Yubo-Chen.github.io.git
cd Veronica-Yubo-Chen.github.io

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173 with hot-module replacement
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |

---

## Architecture

```
ThemeProvider (React Context)
├── Cosmos            ← animated starfield background (aria-hidden)
├── skip-to-main link ← accessibility shortcut
├── QuickNav          ← floating nav, highlights active section
├── ThemeToggle       ← day/night switch
├── Header            ← identity & contact
└── <main>
    ├── AboutSection
    ├── SummarySection
    ├── SkillsSection
    ├── ExperienceSection
    ├── EducationSection
    ├── PublicationsSection
    ├── ProjectsSection
    └── AwardsSection
```

**Data flow:** `portfolioData.js` exports structured arrays/objects → section components import and render them. Content updates require editing only the data file — no component changes needed.

---

## Theme System

The day/night toggle is powered by `useTheme.jsx`:

- **Night mode** (default) — dark cosmic palette with gold accents and rose-petal highlights
- **Day mode** — light warm palette with deep red highlights and brown accents
- Theme is applied via a `data-theme="day"` attribute on `<html>`; night mode uses the absence of the attribute
- User preference persists in `localStorage` under the key `lp-theme`
- All colours are defined as CSS custom properties, so the entire palette swaps with a single attribute change

---

## Starfield Animation

`Cosmos.jsx` renders the background:

- **140 static stars** with randomised size (1–3 px), opacity (0.4–0.9), and twinkle duration (6–14 s)
- **Shooting stars** spawn every 6.5–9.5 s from the top-left quadrant and fade after 1.9 s
- **Two decorative planets** positioned via CSS
- All animations are CSS-driven for GPU efficiency
- When `prefers-reduced-motion: reduce` is active, shooting stars are paused automatically

---

## Accessibility

- **Skip-to-main link** — hidden until focused, jumps keyboard users past navigation
- **`aria-hidden="true"`** on decorative elements (starfield, planets)
- **`role="main"` + `tabIndex={-1}`** on the `<main>` element for focus management
- **Reduced-motion support** — cosmic animations respect the OS accessibility preference
- **Semantic HTML** — sections, headings, lists, and landmark roles throughout

---

## Sections & Content

| Section | Description |
|---------|-------------|
| **About** | 4 professional pillars, 6 core values, key metrics, quick-fact sidebar, skill groups, "currently exploring" list |
| **Summary** | Professional summary highlighting core tech stack and career focus |
| **Skills** | 6 domains — LLM/GenAI, ML Engineering, Backend, Cloud/Infra, ML Frameworks, Bonus & Languages |
| **Experience** | 4 roles — Rio Tinto Graduate Engineer (3 rotations: Applied ML, Optimisation R&D, Software Engineering), QUT Research Assistant, QUT Sessional Tutor, She Codes Plus |
| **Education** | MPhil in Biomedical Engineering & CS, BEng Software (First Class Honours) — both at QUT |
| **Publications** | 3 peer-reviewed papers in medical imaging AI & deep learning |
| **Projects** | Endoscopic abnormality detection, autonomous UAV target detection, wildlife species recognition |
| **Awards** | MPhil full scholarship, Best Poster award, She Codes Plus scholarship |

---

## Deployment

The site is deployed automatically via **GitHub Actions → GitHub Pages**.

### How it works

1. A push to `main` (or manual `workflow_dispatch`) triggers the pipeline
2. The workflow checks out the repo, installs dependencies (`npm ci`), and builds (`npm run build`)
3. The `dist/` folder is uploaded as a Pages artifact and deployed with `actions/deploy-pages@v4`

### First-time setup

1. Go to **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow will handle the rest

---

## License

© 2026 Yubo Chen (Veronica). All rights reserved.
