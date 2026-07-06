# Cyan Design System Handoff

Updated: 2026-07-01

## Project Overview

Cyan Design System is a personal editorial portfolio for a visual designer / AIGC workflow builder. The site should feel clean, structured, editorial, visual, and content-rich without becoming flashy or over-engineered.

This document is the short handoff for future Codex threads. Read this before making changes.

## Real Project Root

```txt
C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1
```

This is the real website project root. It contains:

- `package.json`
- `src/`
- `public/`
- `index.html`
- `vite.config.ts`

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router

Do not introduce WebGL, Three.js, CMS, sound controls, or heavy loading animations.

## How To Run

Use the bundled Codex Node / pnpm runtime if system `node` is not on PATH.

Normal command from the project root:

```txt
pnpm exec vite --host 127.0.0.1
```

The local URL is usually:

```txt
http://127.0.0.1:5173/
```

If `5173` is occupied, Vite may choose `5174`, `5175`, etc. On 2026-07-01 the site successfully opened at:

```txt
http://127.0.0.1:5175/
```

If startup fails with `node is not recognized`, use the Codex bundled Node path before starting Vite.

## Current Homepage Sections

- Hero
- Selected Works
- Practice Preview
- Articles Preview
- Awards Preview
- Footer / Contact

Keep Light / Dark mode and EN / CH language switching.

## Key Files And Components

Core content/data:

- `src/data/site.ts`
- `src/data/works.ts`
- `src/data/projects.ts`
- `src/data/practice.ts`
- `src/data/articles.ts`
- `src/data/awards.ts`

Core UI and pages:

- `src/App.tsx`
- `src/pages/Home.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/components/WorkCard.tsx`
- `src/components/Footer.tsx`
- `src/styles.css`

Prompt Generator Tool route:

```txt
/work/prompt-generator-tool
```

Prompt Generator Tool real links:

```txt
Live Tool: https://shiwenwen666-code.github.io/Cyan-lab/
GitHub: https://github.com/shiwenwen666-code/Cyan-lab
```

## Confirmed Visual Direction

The site should be:

- editorial, not a generic resume
- clean but not empty
- visual and structured
- smooth but not showy
- content-ready and data-driven

Reference direction:

- Haoqi.design-like clarity, grid structure, and strong typography
- Palmer / Akihiko-like dark editorial rhythm
- Current next section reference: Wolverine brands floating image field

Primary reference for the next task:

```txt
https://wolverineworldwide.com/brands
```

Typography rules to preserve:

- Chinese large headings need comfortable semantic line breaks.
- Do not leave a single orphan Chinese character on its own line.
- Do not force every heading into one line when it becomes cramped.
- Do not split terms awkwardly, such as breaking `模板工具` apart.
- Do not use `font-black` casually or make typography heavy without reason.
- Self-check alignment, scale, line breaks, and mobile readability before handing off.

## Things NOT To Change

- Do not refactor the whole site.
- Do not redesign the whole homepage.
- Do not modify the homepage Hero main title.
- Do not remove Light / Dark mode.
- Do not remove EN / CH language switching.
- Do not modify already confirmed sections unless the user explicitly asks.
- Do not delete the old 3-circle radial / spreading works effect. It should be preserved and encapsulated so it can be reused or restored later.
- Do not turn the portfolio into a SaaS landing page or dashboard.
- Do not add WebGL, Three.js, sound, CMS, or complex loaders.

## Current Known Issues

- Local dev server may need the Codex bundled Node runtime because system `node` may not be available on PATH.
- Vite may choose a higher port if `5173` is already occupied.
- Some older notes had console encoding/mojibake problems; rely on this cleaned handoff instead of old raw chat logs.
- Homepage work display is in transition: the old center-spreading works effect should be kept, but the visible homepage direction is changing.

## Current Next Task

Replace the homepage's old center-spreading works display with a Wolverine `/brands` style floating image field.

Task constraints:

- Do not change the homepage Hero main title.
- Do not refactor the whole homepage.
- Do not delete the old 3-circle spreading effect; encapsulate and preserve it.
- Build only the placeholder framework in this round.
- Do not import real images yet.
- The future real image system should support batch import rather than manually writing every image path one by one.
- Preserve Light / Dark mode.
- Preserve confirmed modules outside the targeted homepage works display.

Implementation direction:

- Study the current homepage works display first.
- Identify and isolate the old 3-circle / radial spreading effect into a reusable or archived component.
- Add a new floating image field inspired by `https://wolverineworldwide.com/brands`.
- Use placeholder image frames/cards for now.
- Keep motion smooth and restrained.
- Verify desktop and mobile layout before handing off.

## Archived Notes

The previous verbose handoff was archived at:

```txt
docs/archive/old-handoff-notes.md
```

Use the archive only when historical context is needed. Future threads should start from this `HANDOFF.md`.
