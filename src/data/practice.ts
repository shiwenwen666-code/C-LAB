import type { PracticeItem } from "../types";

export const practiceItems: PracticeItem[] = [
  {
    title: { en: "AIGC Experiments", zh: "AIGC 实验" },
    summary: { en: "Testing visual languages, prompt structures, and production limits.", zh: "测试视觉语言、提示词结构和生产边界。" },
    category: { en: "Research", zh: "研究" },
  },
  {
    title: { en: "Prompt Systems", zh: "提示词系统" },
    summary: { en: "Turning creative intuition into repeatable generation frameworks.", zh: "把创作直觉整理成可复用的生成框架。" },
    category: { en: "System", zh: "系统" },
  },
  {
    title: { en: "Workflow Studies", zh: "工作流研究" },
    summary: { en: "Mapping how ideas move from brief to asset library.", zh: "梳理创意从需求到素材库的流动方式。" },
    category: { en: "Method", zh: "方法" },
  },
  {
    title: { en: "Tool Prototypes", zh: "工具原型" },
    summary: { en: "Small interfaces for faster decisions and clearer production.", zh: "用小工具提升判断速度和生产清晰度。" },
    category: { en: "Prototype", zh: "原型" },
  },
];
