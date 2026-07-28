export type AbilityLocale = "en" | "zh";

export type Ability = {
  id: string;
  tag: Record<AbilityLocale, string>;
  title: Record<AbilityLocale, string>;
  description: Record<AbilityLocale, string>;
  cardLabel: string;
  image: string;
  imageLabel: Record<AbilityLocale, string>;
};

// Replace these image paths whenever the final ability-card images are ready.
export const personalAbilities: Ability[] = [
  {
    id: "aigc-workflow-builder",
    tag: { zh: "AIGC驱动力", en: "AIGC Driver" },
    title: { zh: "AIGC 工作流搭建", en: "AI Workflow Builder" },
    description: {
      zh: "把创意判断整理成可复用、可迭代的视觉工作流。",
      en: "Turning creative judgment into reusable, evolving visual workflows.",
    },
    image: "/images/abilities/1.png",
    cardLabel: "Generative Momentum",
    imageLabel: { zh: "AI 工作流图像", en: "AI workflow visual" },
  },
  {
    id: "aesthetic-curator",
    tag: { zh: "审美守门员", en: "Aesthetic Gatekeeper" },
    title: { zh: "审美内容策展", en: "Aesthetic Curator" },
    description: {
      zh: "从视觉线索中辨认秩序，并把审美判断转译为清晰表达。",
      en: "Finding visual order and translating aesthetic judgment into clear ideas.",
    },
    image: "/images/abilities/2.png",
    cardLabel: "Visual Sense",
    imageLabel: { zh: "审美情报局封面", en: "Aesthetic Intelligence Bureau cover" },
  },
  {
    id: "bilingual-communicator",
    tag: { zh: "中英双语沟通者", en: "Bilingual Communicator" },
    title: { zh: "中英双语沟通者", en: "Bilingual Communicator" },
    description: {
      zh: "跨越语言与文化，让想法被准确理解和继续推进。",
      en: "Connecting ideas across languages and cultures.",
    },
    image: "/images/abilities/3.png",
    cardLabel: "Language Bridge",
    imageLabel: { zh: "雅思证书", en: "IELTS certificate" },
  },
  {
    id: "on-site-executor",
    tag: { zh: "现场执行派", en: "On-site Executor" },
    title: { zh: "现场执行派", en: "On-site Executor" },
    description: {
      zh: "进入真实现场，把概念落实为看得见、能落地的结果。",
      en: "Turning concepts into real-world results.",
    },
    image: "/images/abilities/4.png",
    cardLabel: "Make It Real",
    imageLabel: { zh: "拍摄或工厂现场", en: "Shooting or factory visit" },
  },
  {
    id: "system-builder",
    tag: { zh: "系统构建者", en: "System Builder" },
    title: { zh: "系统构建者", en: "System Builder" },
    description: {
      zh: "用设计与 AI 构建可复用的创意系统。",
      en: "Building reusable creative systems with design and AI.",
    },
    image: "/images/abilities/5.png",
    cardLabel: "Systems Thinking",
    imageLabel: { zh: "Cyan Lab 与工具", en: "Cyan Lab and tools" },
  },
];
