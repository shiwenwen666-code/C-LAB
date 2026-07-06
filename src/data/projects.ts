import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "aigc-advertising-workflow",
    title: { en: "AIGC Advertising Workflow", zh: "AIGC 广告视觉工作流" },
    summary: {
      en: "A modular workflow for generating campaign-ready commercial visuals.",
      zh: "用于生成商业广告视觉的模块化 AIGC 流程。",
    },
    year: "2026",
    category: { en: "Workflow System", zh: "工作流系统" },
    tags: ["AIGC", "Advertising", "Visual System"],
    cover: "linear-gradient(135deg, #1B2B36, #6CD6E8)",
    role: { en: "Workflow Builder / Visual Designer", zh: "工作流搭建 / 视觉设计" },
    tools: ["Midjourney", "ComfyUI", "Photoshop", "Figma"],
    gallery: [
      { en: "Campaign key visual", zh: "广告主视觉" },
      { en: "Prompt matrix", zh: "提示词矩阵" },
      { en: "Output board", zh: "出图看板" },
    ],
  },
  {
    slug: "prompt-generator-system",
    title: { en: "Prompt Generator System", zh: "提示词生成系统" },
    summary: {
      en: "A structured prompt tool for bilingual visual production.",
      zh: "面向中英双语视觉生产的结构化提示词工具。",
    },
    year: "2026",
    category: { en: "Tool Prototype", zh: "工具原型" },
    tags: ["Prompt", "Tool", "Design Ops"],
    cover: "linear-gradient(135deg, #20242B, #8EA7C7)",
    role: { en: "Product Thinking / Frontend Prototype", zh: "产品思考 / 前端原型" },
    tools: ["HTML", "CSS", "JavaScript", "Rules Engine"],
    gallery: [
      { en: "Prompt builder", zh: "提示词构建器" },
      { en: "Option taxonomy", zh: "选项分类结构" },
      { en: "Export formats", zh: "导出格式" },
    ],
  },
  {
    slug: "visual-qa-workbench",
    title: { en: "Visual QA Workbench", zh: "视觉验图台" },
    summary: {
      en: "A local visual QA workbench for checking image assets, safe margins, composition guides, and export-ready review results.",
      zh: "一个用于辅助检查图片素材、安全边距、构图参考线和导出检测结果的本地视觉检查工作台。",
    },
    year: "2026",
    category: { en: "Vibe Coding / Visual QA Tool", zh: "Vibe Coding / 视觉检查工具" },
    tags: ["Visual QA", "Tool", "Image Review"],
    cover: "linear-gradient(135deg, #171A1E, #5F7784)",
    role: { en: "Tool Design / Frontend Prototype", zh: "工具设计 / 前端原型" },
    tools: ["HTML", "CSS", "JavaScript", "Image Review Rules"],
    gallery: [
      { en: "Safe margin check", zh: "安全边距检查" },
      { en: "Composition guides", zh: "构图参考线" },
      { en: "Export review", zh: "导出结果检测" },
    ],
  },
  {
    slug: "yacht-poster-template-system",
    title: { en: "Yacht Poster Template System", zh: "游艇海报模板系统" },
    summary: {
      en: "A browser-based poster template tool for Shanghai Yacht Rental Club's Rednote visuals.",
      zh: "为上海游艇租赁俱乐部制作的小红书海报模板工具。",
    },
    year: "2025",
    category: { en: "Template System / Efficiency Tool", zh: "模板系统 / 提效工具" },
    tags: ["Poster", "Template", "Luxury"],
    cover: "linear-gradient(135deg, #111418, #2A7C91)",
    role: { en: "Template System Design / Frontend Prototype", zh: "模板系统设计 / 前端原型" },
    tools: ["HTML", "CSS", "JavaScript", "Photoshop"],
    gallery: [
      { en: "Poster family", zh: "海报系列" },
      { en: "Type scale", zh: "字体层级" },
      { en: "Image treatments", zh: "图片处理方式" },
    ],
  },
  {
    slug: "visual-experiments",
    title: { en: "Visual Experiments", zh: "视觉实验" },
    summary: {
      en: "A running archive of image-making tests, styles, and workflow notes.",
      zh: "持续记录图像实验、风格测试和工作流笔记的档案。",
    },
    year: "2026",
    category: { en: "Creative Practice", zh: "创作实践" },
    tags: ["Research", "Image", "Systems"],
    cover: "linear-gradient(135deg, #181B20, #C9D7DE)",
    role: { en: "Visual Researcher", zh: "视觉研究" },
    tools: ["AIGC", "Figma", "Photoshop"],
    gallery: [
      { en: "Style tests", zh: "风格测试" },
      { en: "Material studies", zh: "材质实验" },
      { en: "Composition notes", zh: "构图记录" },
    ],
  },
];
