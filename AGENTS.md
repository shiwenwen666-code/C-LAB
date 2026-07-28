# AGENTS.md

Read this first in every new AI thread.

## Project Root

Real project root:

`C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1`

This is the actual Vite React portfolio. Do not treat `hello/outputs` or archived static files as the active site.

## First Steps

1. Read `HANDOFF.md`.
2. Confirm the user's current scope.
3. If the task is docs-only, do not modify `src/`, `public/`, routes, or visual components.
4. If the task is visual/content work, keep edits tightly scoped to the requested page or component.

## Hard Rules

- Do not change the homepage Hero main title or final Hero layout unless explicitly requested.
- Do not refactor the whole site for a small task.
- Do not modify routing, global theme logic, or locale logic unless explicitly requested.
- Keep Chinese / English and Light / Dark mode working.
- Preserve `OrbitWorksShowcase` and the 3-circle work effect.
- Do not delete existing user-confirmed modules.
- Do not invent project case content. Use the user's supplied text, Figma, screenshots, PDFs, or HTML files.

## Design Rules

- Overall direction: editorial portfolio, restrained, clean, visual-led.
- Avoid dashboard/SaaS styling unless the specific tool page requires it.
- Avoid excessive `font-black`, huge headings, heavy shadows, bright gradients, and random cyan accents.
- Chinese line breaks matter: avoid orphan punctuation, one-character dangling lines, and awkward title wrapping.
- Buttons, labels, metadata, cards, and image radii should stay consistent with the existing site.

## Run / Verify

Preferred dev command:

```powershell
pnpm run dev
```

If Node/pnpm are not available:

```powershell
$env:PATH='C:\Users\施文文\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
.\node_modules\.bin\vite.cmd --host 127.0.0.1 --port 5173
```

Build command:

```powershell
pnpm run build
```

If Vite cannot read config because of sandbox restrictions, request permission to run the dev/build command outside the sandbox.

## Editing Safety

- Prefer `rg` for searching.
- Use small targeted edits.
- Do not run destructive commands.
- Work with any dirty tree; never revert user changes unless explicitly asked.
- Global `src/styles.css` is broad and risky. Check impact carefully before editing it.
