# Cyan Design System Handoff

Updated: 2026-07-14

## Start Here

- Read `AGENTS.md` first, then this file.
- Real project root: `C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1`
- This is a Vite React portfolio site. Do not work inside the old `hello/outputs` folder.
- Current default experience: Chinese language + dark mode.
- For docs-only or audit tasks, do not edit `src/`, `public/`, routes, or visual components.

## Project Overview

Cyan Design System is a personal editorial portfolio for Shiwenwen / Cyan. It presents commercial visual design, AIGC workflows, content experiments, vibe coding tools, and project case studies.

The desired feel is clean, restrained, editorial, portfolio/gallery-like, and visual-led. Avoid generic AI template styling, dashboard-heavy layouts, or unnecessary rewrites.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- lucide-react

## How To Run

From the real project root:

```powershell
pnpm run dev
```

If the system cannot find Node/pnpm, use the bundled Codex runtime path first:

```powershell
$env:PATH='C:\Users\施文文\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
.\node_modules\.bin\vite.cmd --host 127.0.0.1 --port 5173
```

Common local URL: `http://127.0.0.1:5173/`

If port 5173 is busy, Vite may use 5174 or later. If sandboxing blocks Vite config access, request permission to start the dev server outside the sandbox.

## Main Routes

- `/` Home
- `/work` Works overview
- `/work/:slug` Shared project detail route
- `/work/aesthetic-intelligence-bureau` Dedicated Aesthetic Intelligence Bureau case page
- `/about` About
- `/contact` Contact
- `/practice` Practice
- `/articles` Articles
- `/awards` Awards

## Current Homepage Sections

1. Hero intro / count-up opening
2. Main homepage Hero
3. About preview with portrait card
4. `OrbitWorksShowcase` 3-circle / dispersed work cards section
5. Logo loop
6. Selected Works
7. Footer / contact area

## Key Files

- `src/App.tsx` - routes, theme, locale, global wrappers
- `src/pages/Home.tsx` - homepage composition
- `src/pages/Work.tsx` - works overview
- `src/pages/ProjectDetail.tsx` - shared project detail pages
- `src/pages/AestheticIntelligenceBureau.tsx` - dedicated Case 4 page
- `src/pages/About.tsx` - about page
- `src/components/OrbitWorksShowcase.tsx` - 3-circle work section
- `src/components/WorkCard.tsx` / `src/components/ProjectCard.tsx` - work card displays
- `src/components/HeroCountIntro.tsx` - homepage intro count-up
- `src/components/LemniscateLoader.tsx` - bottom-right infinity loader
- `src/components/Navigation.tsx` / `src/components/Footer.tsx`
- `src/data/works.ts` - work card data
- `src/data/projects.ts` - project detail data
- `src/data/site.ts` - site copy / shared content
- `src/styles.css` - global styles and many page-specific styles

## Rules Not To Break

- Do not modify the homepage Hero main title or final Hero layout unless the user explicitly asks.
- Do not refactor the whole site during small visual/content tasks.
- Keep Chinese / English and Light / Dark mode working.
- Preserve the old 3-circle / orbit works effect. It is currently active on the homepage.
- Do not delete confirmed modules or reorder major homepage sections without explicit instruction.
- Do not invent case-study content. Use the user's Figma/PDF/screenshots/text as source of truth.
- Be careful with Chinese typography: avoid single orphan punctuation/characters at line starts or awkward one-character line breaks.
- Avoid overusing `font-black`, giant headings, heavy shadows, gradients, or dashboard-like cards.

## Current Content Notes

- Aesthetic Intelligence Bureau has its own dark black/gold editorial case page.
- AIGC Advertising Workflow and other case pages are still being iterated against user-supplied PDF/Figma references.
- Yacht Poster Template System has a live tool link: `https://shiwenwen666-code.github.io/yacht-poster-tool/`
- Visual QA Workbench replaced the old UED newsletter card in works data.

## Maintenance Notes

- `public/` and `src/assets/` currently do not contain oversized assets. The largest public asset is the profile photo, which is reasonable.
- Historical static output from `outputs/` was archived to `docs/archive/legacy-static-output/`.
- Root-level legacy static files such as `data.js`, `script.js`, and `style.css` may be old generated artifacts, but they were not moved in this cleanup.
- `git status` may fail because Git reports dubious ownership for this path. Do not run global Git config changes unless the user asks.
- PowerShell may display Chinese text as garbled output. Do not rewrite Chinese copy based only on terminal mojibake.
