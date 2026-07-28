# Project Audit

Updated: 2026-07-14

## Purpose

This audit records the current portfolio structure, maintenance risks, resource status, and recommended next steps. It is documentation-only and does not change site visuals or runtime behavior.

## Active Project

- Name: Cyan Design System
- Real root: `C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1`
- Framework: Vite + React + TypeScript
- Styling: Tailwind CSS + global `src/styles.css`
- Animation: Framer Motion and CSS animations
- Routing: React Router

## Main Pages / Routes

- `/` - homepage with intro, Hero, About preview, Orbit works, logo loop, selected works
- `/work` - works overview
- `/work/:slug` - shared project detail template
- `/work/aesthetic-intelligence-bureau` - dedicated Aesthetic Intelligence Bureau page
- `/about` - full about page
- `/contact` - contact page
- `/practice`, `/articles`, `/awards` - supporting sections

## Core Components

- `Navigation` - global navigation, locale and theme controls
- `Footer` - global footer/contact area
- `CustomCursor` - custom cursor layer
- `LemniscateLoader` - bottom-right infinity loader
- `HeroCountIntro` - homepage opening count-up
- `OrbitWorksShowcase` - 3-circle / dispersed works section
- `WorkCard` and `ProjectCard` - works grid/list card UI
- Aesthetic case components under `src/components/aesthetic/`

## Data Files

- `src/data/works.ts` - works cards and list data
- `src/data/projects.ts` - project detail metadata/content
- `src/data/site.ts` - shared site content

## Current Asset Status

Checked `public/` and `src/assets/` for obviously large resources.

- No oversized public/assets files were found.
- Largest public asset observed: `public/images/profile/profile.jpg` at about 229 KB, which is reasonable.
- Work SVG placeholders are tiny.
- Several empty placeholder directories are intentional and useful for future assets:
  - `public/images/hero/`
  - `public/images/showcase/`
  - `public/images/float/`
  - `src/assets/floating/`

No assets were deleted.

## Archived During Cleanup

Moved historical static output from:

- `outputs/data.js`
- `outputs/index.html`
- `outputs/script.js`
- `outputs/style.css`

To:

- `docs/archive/legacy-static-output/`

Also backed up the previous full handoff to:

- `docs/archive/HANDOFF-before-2026-07-14.md`

## Possible Legacy Files To Review Later

These root-level files may be historical static artifacts, but they were not moved because their purpose should be confirmed first:

- `data.js`
- `script.js`
- `style.css`
- old dev/build logs
- TypeScript build info files

Recommendation: review them in a separate cleanup pass after confirming they are not referenced by deployment, scripts, or archived work.

## Risk Points

1. `src/pages/ProjectDetail.tsx` carries many project detail variants. It works, but future edits can accidentally affect multiple cases.
2. `src/styles.css` is broad and global. A small selector change can affect unrelated pages.
3. Some case pages are still in progress and depend on user-provided source material. Avoid inventing narrative details.
4. Terminal output may show Chinese text incorrectly due to encoding. Do not edit Chinese copy based only on garbled terminal output.
5. Git may report dubious ownership for this repository path. Avoid global Git configuration changes unless the user explicitly requests them.
6. Local startup can be slower if system Node/pnpm are unavailable. Use the bundled Codex runtime path when needed.
7. `package.json` contains a `pnpm.onlyBuiltDependencies` field that may produce a warning in newer pnpm versions. This is low priority and does not block the site.

## Recommended Next Steps

- Keep `AGENTS.md` as the first-read lightweight rule file for new AI threads.
- Keep `HANDOFF.md` short and update it only when routes, core components, or hard rules change.
- In a future refactor-only session, consider splitting large project detail cases into smaller page/content modules.
- In a future cleanup-only session, verify whether root-level legacy static files can be archived.
- Maintain an asset inventory per major case page before adding many images.
- For each new case study, record source-of-truth files and image folder paths in the relevant page/data comments or docs.
