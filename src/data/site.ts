import type { LocalizedText } from "../types";

export const site = {
  name: "Cyan Design System",
  email: "hello@cyan.design",
  location: "GMT+8 / CN",
  role: {
    en: "Visual Designer",
    zh: "视觉设计师",
  } satisfies LocalizedText,
  workflowRole: {
    en: "AI Workflow Builder",
    zh: "AI 工作流搭建者",
  } satisfies LocalizedText,
  heroKicker: {
    en: "Visual Design & Creative Systems",
    zh: "视觉设计与创意系统",
  } satisfies LocalizedText,
  heroTitle: {
    en: "Visual systems\nfor AI-era work.",
    zh: "Visual systems\nfor AI-era work.",
  } satisfies LocalizedText,
  heroSubtitle: {
    en: "Designing visual systems for AI-era work.",
    zh: "为 AI 时代的工作设计视觉系统。",
  } satisfies LocalizedText,
  heroIntro: {
    en: "I design commercial visuals, AI workflows, and creative tools.",
    zh: "我围绕商业视觉、AI 工作流和创意工具进行设计与探索。",
  } satisfies LocalizedText,
  footerLine: {
    en: "Let's build something useful, visual, and alive.",
    zh: "一起做点有用、好看，\n并且鲜活的东西。",
  } satisfies LocalizedText,
};
