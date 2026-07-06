import type { Article } from "../types";

export const articles: Article[] = [
  {
    title: { en: "Why Did YUY IP Become Popular?", zh: "小玉 IP 为什么火了？" },
    summary: {
      en: "A short analysis of YUY's IP design strategy.",
      zh: "一篇关于小玉 IP 设计策略的简短分析。",
    },
    date: "2026-04-18",
    category: { en: "WeChat Article", zh: "公众号文章" },
    language: "中文",
    externalLink: "#",
  },
  {
    title: { en: "Building Reusable Prompt Taxonomies", zh: "如何搭建可复用提示词分类" },
    summary: {
      en: "Notes on turning scattered image prompts into a usable system.",
      zh: "把零散图像提示词整理成可用系统的笔记。",
    },
    date: "2026-03-21",
    category: { en: "Practice Note", zh: "实践笔记" },
    language: "EN / 中文",
    externalLink: "#",
  },
  {
    title: { en: "Editorial Visuals in AI Production", zh: "AI 生产中的编辑式视觉" },
    summary: {
      en: "How layout discipline helps generated assets feel intentional.",
      zh: "版式秩序如何让生成图像更像有意图的设计。",
    },
    date: "2026-02-12",
    category: { en: "Essay", zh: "随笔" },
    language: "EN",
    externalLink: "#",
  },
];
