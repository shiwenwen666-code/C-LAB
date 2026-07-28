# Project Handoff

Updated: 2026-07-24

## Project Root

`C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1`

This is the active Vite + React portfolio. Read `AGENTS.md`, then `HANDOFF.md`, before making changes.

## Run And Verify

```powershell
pnpm run dev
```

Local development URL: `http://127.0.0.1:5173/`

```powershell
pnpm run build
pnpm run preview
```

## Core Structure

- `src/App.tsx`: routes, language and theme state, shared shell.
- `src/pages/Home.tsx`: homepage composition.
- `src/pages/Work.tsx`: works overview.
- `src/pages/ProjectDetail.tsx`: shared case-study detail page.
- `src/pages/AestheticIntelligenceBureau.tsx`: dedicated Aesthetic Intelligence Bureau case.
- `src/components/`: reusable visual and interaction modules.
- `src/data/`: portfolio, award, logo-loop, and project data.
- `public/`: images, logos, videos, and future case media.
- `src/styles.css`: global styles; high-impact file, edit carefully.

## Homepage Modules

1. Count-up intro and main Hero.
2. About preview with portrait and typing signature.
3. `OrbitWorksShowcase`: preserved 3-circle work universe with scroll-released project cards and ambient video.
4. `LogoLoopSection`: two continuous logo tracks.
5. `FeaturedWorksShowcase`: primary case storytelling plus separate tool cards.
6. `AwardsSection`: continuously moving certificate archive with drag, hover, and modal preview.
7. Shared Footer and fixed Lemniscate loader.

## Featured Works Animation

Files:

- `src/components/FeaturedWorksShowcase.tsx`
- `src/data/featuredWorks.ts`

The primary five cases use a sticky viewport stage. Scroll progress is calculated from the real stage bounds so each card has a complete enter, hold, and exit period:

- A current case holds at full scale in the stage.
- The following case rises from below only after the prior case begins leaving.
- The previous card shifts upward, scales down slightly, and remains visible only during the transition.
- The five-case order is fixed in `featuredWorks.ts`; tool projects render afterward as a separate small-card group.

Do not change this timing model, the case order, stage sizing, or the core card motion without an explicit request and visual verification.

## Completed Work

- Chinese is the default locale; dark is the default theme when no saved preference exists.
- Homepage Hero, 3-circle work universe, logo loop, About preview, Featured Works, and Awards archive are active.
- Case pages exist for social visual systems, Zhenniu Awards, AIGC marketing, Aesthetic Intelligence Bureau, yacht poster templates, and smaller tools.
- Public logo images and current placeholder media are intentionally retained and referenced from data or components.

## Do Not Change Without Explicit Approval

- Homepage Hero title or final composition.
- `OrbitWorksShowcase` structure, 3-circle logic, or project-card release sequence.
- `FeaturedWorksShowcase` sticky scroll storytelling logic.
- Global locale and theme logic in `src/App.tsx`.
- Header, Footer, routes, or confirmed homepage section order.
- Existing project copy unless the user provides replacement text.

## Next Safe Directions

- Replace case placeholders with user-supplied final images, GIFs, or videos while preserving their declared aspect ratios.
- Add real award images under `public/images/awards/`.
- Continue individual case-study content only from user-provided Figma, PDF, screenshot, or approved copy.
- Verify responsive behavior after any visual work at desktop and mobile widths.

## Maintenance Notes

- `node_modules/.vite` is a small local Vite cache. Keep it for faster repeat starts; it is regenerated automatically if cleared.
- No oversized public resource currently needs removal. The largest public asset is under 0.4 MB.
- The existing `docs/archive/` folder contains retired notes and legacy static output. Keep it as historical reference rather than serving it.
