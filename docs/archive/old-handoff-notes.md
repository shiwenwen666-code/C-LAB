# Cyan Design System Handoff

Updated: 2026-07-01

## Project Location

Original project folder:

```txt
C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1
```

Project name:

```txt
cyan-design-system
```

Main local preview URL when the dev server is running:

```txt
http://127.0.0.1:5173/
```

Current known blocker:

```txt
pnpm dev -- --host 127.0.0.1
```

recently failed with:

```txt
'node' is not recognized as an internal or external command
```

This means the site files still exist, but the local Node runtime is not on PATH for that command session.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router

Do not add:

- WebGL
- Three.js
- CMS
- Sound button
- Heavy loading animation

## Original Product Direction

Cyan Design System is a personal editorial portfolio for a visual designer / AIGC workflow builder.

The site should feel:

- clean
- editorial
- smooth
- structured
- content-rich
- not too minimal
- not flashy

Visual references:

- Haoqi.design-like grid structure, strong typography, light-mode freshness
- Palmer / Akihiko-like dark editorial portfolio rhythm

Default settings:

- Default language: EN
- Default theme: Dark
- Theme switch: Light / Dark
- Language switch: EN / CH

## Routes

Expected routes:

```txt
/                  Home
/work              Work
/work/:slug        Project Detail
/practice          Practice
/articles          Articles
/awards            Awards
/about             About
/contact           Contact
```

## Core Data Files

The site is intended to be data-driven. Main content lives under:

```txt
src/data/site.ts
src/data/projects.ts
src/data/practice.ts
src/data/articles.ts
src/data/awards.ts
src/data/works.ts
```

Observed newer work used `src/data/works.ts` for homepage Selected Works.

Content should support EN / CH:

```ts
title: {
  en: "",
  zh: ""
},
summary: {
  en: "",
  zh: ""
}
```

## Homepage Structure

Homepage sections:

1. Hero
2. Selected Works
3. Practice Preview
4. Articles Preview
5. Awards Preview
6. Footer / Contact

Hero copy direction:

```txt
Cyan Design System
Visual Design & AI Workflow
I bring craft & taste
to digital work.
```

or:

```txt
Visual Design
& AI Workflow
```

Footer line:

```txt
Let's build something useful, visual, and alive.
```

Chinese footer was adjusted to:

```txt
一起做点有用、好看，
并且鲜活的东西。
```

## Selected Works

Initial placeholder works:

- AIGC Advertising Workflow
- Prompt Generator System / Prompt Generator Tool
- Yacht Poster Template System
- Visual Experiments

Later actual work items found in `works.ts` include:

- `aigc-merchant-advertising`
- `alibaba-social-visual-system`
- `new-power-awards-2025`
- `merchant-alliance-filming-project`
- `prompt-generator-tool`
- `yacht-poster-template-tool`

Prompt Generator Tool card should route to:

```txt
/work/prompt-generator-tool
```

## Prompt Generator Tool Detail Page

Dedicated route:

```txt
/work/prompt-generator-tool
```

Project positioning:

```txt
Prompt Generator Tool
A structured prompt tool for commercial image generation.
面向商业视觉生成的结构化提示词工具。
Vibe Coding / Prompt System / AIGC Workflow
Year: 2026
```

Real links added:

```txt
Live Tool:
https://shiwenwen666-code.github.io/Cyan-lab/

GitHub:
https://github.com/shiwenwen666-code/Cyan-lab
```

Required sections:

- Hero
- Overview
- Why I Built It
- What It Does
- Interface Preview
- Output Gallery
- Role / Tools
- Links
- Next Project placeholder

Overview copy:

```txt
Prompt Generator Tool is a self-built prompt system designed to help generate structured, bilingual prompts for commercial visual production.
```

```txt
Prompt Generator Tool 是一个自建提示词工具，用于辅助生成面向商业视觉生产的结构化双语提示词。
```

Why copy:

```txt
During AIGC commercial visual production, prompt writing often became repetitive, inconsistent, and difficult to reuse. I built this tool to turn scattered prompt experience into a reusable interface and workflow.
```

```txt
在 AIGC 商业视觉生产中，提示词编写经常重复、分散且难以复用。我搭建这个工具，是为了把零散的提示词经验转化为一个可复用的界面和工作流。
```

Features:

- Industry and category selection
- Scene and visual style control
- Material and composition options
- Chinese / English prompt output
- Reusable prompt structure
- Batch prompt generation

Chinese features:

- 行业与品类选择
- 场景与视觉风格控制
- 材质与构图选项
- 中英文提示词输出
- 可复用提示词结构
- 批量提示词生成

Image placeholders:

```txt
/public/images/works/prompt-generator/interface-01.jpg
/public/images/works/prompt-generator/interface-02.jpg
/public/images/works/prompt-generator/output-01.jpg
/public/images/works/prompt-generator/output-02.jpg
/public/images/works/prompt-generator/output-03.jpg
/public/images/works/prompt-generator/output-04.jpg
/public/images/works/prompt-generator/output-05.jpg
/public/images/works/prompt-generator/output-06.jpg
```

Role:

```txt
Visual Designer / Prompt System Designer / Vibe Coding Builder
视觉设计师 / 提示词系统设计 / Vibe Coding 搭建者
```

Tools:

- Codex
- React
- AIGC Workflow
- Prompt Engineering
- ComfyUI / RunningHub

## Important Design Feedback To Preserve

The user repeatedly corrected typography and layout issues. Treat these as standing rules:

- Chinese large headings must use comfortable semantic line breaks.
- Do not force everything into one line if it makes typography cramped.
- Do not leave one lonely Chinese character on its own line.
- Do not split words like `模板工具` into awkward partial lines.
- Use manual line breaks for Chinese hero/card/detail headings when needed.
- Self-check typography, alignment, scale, and line breaks before handing off.
- Gallery cards should align cleanly; do not add decorative offsets that break baseline alignment unless clearly intentional and polished.
- If a row is meant to align, all cards in that row should align.

Specific fixes already made in the other thread:

- Chinese Selected Work card titles were reduced several times.
- `Yacht Poster Generator` Chinese title was set as:

```txt
一键生成游艇海报
模板工具
```

- Chinese WorkCard received `lang-zh` class so Chinese title styles can differ from English.
- Chinese card text uses `word-break: keep-all` and avoids hard word splitting.
- Prompt Generator detail page role copy was changed to slash-based semantic line breaks.
- Links section Chinese text was changed to:

```txt
打开在线工具进行体验，
或查看 GitHub 项目仓库
```

- Output Gallery bottom vertical images were aligned after the user noted they were not aligned.
- `提示词生成工具` Chinese heading was kept on one line on desktop, with mobile allowed to wrap.

## Files Touched In Recent Work

Main files changed in the other thread:

```txt
src/pages/ProjectDetail.tsx
src/data/works.ts
src/data/site.ts
src/components/WorkCard.tsx
src/components/Footer.tsx
src/styles.css
```

## Running Notes

Normal intended commands:

```txt
pnpm dev -- --host 127.0.0.1
pnpm build
```

Known issue as of 2026-07-01:

- Dev server did not start because `node` was not recognized.
- Earlier successful preview URL was `http://127.0.0.1:5173/`.
- The project has `node_modules`, `.pnpm-store`, `dist`, and lockfiles in place, so this is likely a runtime PATH/session issue rather than missing source files.

## What To Do Next

If continuing from the current thread:

1. Re-open or copy the project from:

```txt
C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1
```

2. Fix Node runtime access for that folder.
3. Start the local preview server.
4. Verify:

- Homepage loads.
- Light / Dark switch works.
- EN / CH switch works.
- `/work/prompt-generator-tool` loads.
- Live Tool and GitHub links open externally.
- Chinese typography does not create orphan characters or awkward word splits.
- Gallery alignment is clean on desktop and mobile.

