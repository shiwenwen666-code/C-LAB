export type FeaturedMediaType = "image" | "video" | "gif";
export type FeaturedProjectScale = "main" | "experiment";

export type FeaturedWorkProject = {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  category: {
    en: string;
    zh: string;
  };
  meta: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  details: {
    en: string[];
    zh: string[];
  };
  cover: string;
  coverPosition?: string;
  mediaType: FeaturedMediaType;
  link: string;
  scale: FeaturedProjectScale;
  accent: string;
  placeholder?: boolean;
};

export const featuredWorkProjects: FeaturedWorkProject[] = [
  {
    id: "01",
    title: {
      en: "Alibaba.com Social Visual System",
      zh: "阿里国际站社媒视觉系统升级",
    },
    category: {
      en: "Social Visual System",
      zh: "社媒视觉系统",
    },
    meta: {
      en: "CASE 01 / SOCIAL VISUAL / 2025",
      zh: "CASE 01 / 社媒视觉 / 2025",
    },
    description: {
      en: "A unified visual language upgrade for Alibaba.com social media communication.",
      zh: "面向阿里国际站社媒内容传播的统一视觉语言升级。",
    },
    details: {
      en: ["2025", "Social Visual", "Brand System"],
      zh: ["2025", "社媒视觉", "品牌系统"],
    },
    cover: "/media/featured-cases/01-alibaba-social-visual-system/cover.mp4",
    coverPosition: "center center",
    mediaType: "video",
    link: "/work/alibaba-social-visual-system",
    scale: "main",
    accent: "#4F7DFF",
  },
  {
    id: "02",
    title: {
      en: "New Power Awards 2025",
      zh: "数字外贸真牛奖2025",
    },
    category: {
      en: "Brand Campaign",
      zh: "活动品牌视觉",
    },
    meta: {
      en: "CASE 02 / BRAND CAMPAIGN / 2025",
      zh: "CASE 02 / 活动视觉 / 2025",
    },
    description: {
      en: "Event identity and visual communication for the Alibaba.com New Power Awards.",
      zh: "阿里国际站数字外贸真牛奖活动视觉与传播设计。",
    },
    details: {
      en: ["2025", "Brand Design", "Event Visual"],
      zh: ["2025", "品牌设计", "活动视觉"],
    },
    cover: "/images/works/new-power-awards/gifs/1.webp",
    coverPosition: "center center",
    mediaType: "gif",
    link: "/work/new-power-awards-2025",
    scale: "main",
    accent: "#144CFF",
  },
  {
    id: "03",
    title: {
      en: "AIGC Marketing Visual System",
      zh: "AIGC 营销视觉系统",
    },
    category: {
      en: "AI Commercial Visuals",
      zh: "AI 商业视觉",
    },
    meta: {
      en: "CASE 03 / AI VISUAL SYSTEM / 2026",
      zh: "CASE 03 / AI 视觉系统 / 2026",
    },
    description: {
      en: "A modular AIGC production system for merchant growth and commercial campaigns.",
      zh: "面向商家增长场景的模块化 AIGC 商业视觉生产系统。",
    },
    details: {
      en: ["2026", "AI Workflow", "Campaign System"],
      zh: ["2026", "AI 工作流", "营销系统"],
    },
    cover: "/media/featured-cases/03-aigc-marketing-visual-system/cover.webp",
    coverPosition: "center center",
    mediaType: "image",
    link: "/work/aigc-merchant-advertising",
    scale: "main",
    accent: "#B8FF2C",
  },
  {
    id: "04",
    title: {
      en: "Aesthetic Intelligence Bureau",
      zh: "审美情报局",
    },
    category: {
      en: "Content Brand System",
      zh: "内容品牌系统",
    },
    meta: {
      en: "CASE 04 / CONTENT BRAND / 2026",
      zh: "CASE 04 / 内容品牌 / 2026",
    },
    description: {
      en: "A designer-led content system for visual signals, aesthetic judgment, and creative thinking.",
      zh: "用设计师视角收集视觉线索、整理审美判断的内容实验频道。",
    },
    details: {
      en: ["2026", "Content Brand", "Visual Research"],
      zh: ["2026", "内容品牌", "视觉研究"],
    },
    cover: "/media/featured-cases/04-aesthetic-intelligence-bureau/cover.webp",
    coverPosition: "center center",
    mediaType: "image",
    link: "/work/aesthetic-intelligence-bureau",
    scale: "main",
    accent: "#D4A853",
  },
  {
    id: "05",
    title: {
      en: "Merchant Alliance Filming Project",
      zh: "商家力拍摄项目",
    },
    category: {
      en: "Production Coordination",
      zh: "拍摄统筹",
    },
    meta: {
      en: "CASE 05 / PRODUCTION / 2026",
      zh: "CASE 05 / 拍摄统筹 / 2026",
    },
    description: {
      en: "Bilingual coordination, on-site production support, and visual delivery for merchant content.",
      zh: "面向商家内容生产的中英双语对接、片场协作与视觉交付。",
    },
    details: {
      en: ["2026", "Production", "Bilingual Coordination"],
      zh: ["2026", "拍摄统筹", "双语协作"],
    },
    cover: "/media/featured-cases/05-merchant-alliance-filming/cover.webp",
    coverPosition: "center center",
    mediaType: "image",
    link: "/work/merchant-alliance-filming-project",
    scale: "main",
    accent: "#C9CDD4",
  },
  {
    id: "T01",
    title: {
      en: "Prompt Generator",
      zh: "提示词生成工具",
    },
    category: {
      en: "Vibe Coding / Prompt Tool",
      zh: "Vibe Coding / 提示词工具",
    },
    meta: {
      en: "AI TOOL / 2026",
      zh: "AI 工具 / 2026",
    },
    description: {
      en: "A structured prompt tool for bilingual commercial visual production.",
      zh: "面向中英双语视觉生产的结构化提示词工具。",
    },
    details: {
      en: ["2026", "Prompt Tool"],
      zh: ["2026", "提示词工具"],
    },
    cover: "/images/works/prompt-generator/outputs/1.webp",
    mediaType: "image",
    link: "/work/prompt-generator-tool",
    scale: "experiment",
    accent: "#E8D8B0",
  },
  {
    id: "T02",
    title: {
      en: "Visual QA Board",
      zh: "视觉验图台",
    },
    category: {
      en: "Vibe Coding / Visual QA Tool",
      zh: "Vibe Coding / 视觉检查工具",
    },
    meta: {
      en: "AI TOOL / 2026",
      zh: "AI 工具 / 2026",
    },
    description: {
      en: "A local workbench for safe margins, image assets, composition guides, and export review.",
      zh: "用于辅助检查图片素材、安全边距、构图参考线和导出检测结果的本地工作台。",
    },
    details: {
      en: ["2026", "Visual QA"],
      zh: ["2026", "视觉检查"],
    },
    cover: "/images/works/visual-qa-workbench/outputs/5.webp",
    mediaType: "image",
    link: "/work/visual-qa-workbench",
    scale: "experiment",
    accent: "#9EB8FF",
  },
  {
    id: "T03",
    title: {
      en: "Yacht Poster Template System",
      zh: "游艇海报模板系统",
    },
    category: {
      en: "Template System / Efficiency Tool",
      zh: "模板系统 / 提效工具",
    },
    meta: {
      en: "AI TOOL / 2025",
      zh: "AI 工具 / 2025",
    },
    description: {
      en: "An editable poster generation tool for high-end yacht event visuals.",
      zh: "服务于高端游艇传播素材的编辑式海报生成工具。",
    },
    details: {
      en: ["2025", "Template Tool"],
      zh: ["2025", "模板工具"],
    },
    cover: "/images/works/yacht-poster/5.png",
    mediaType: "image",
    link: "/work/yacht-poster-template-system",
    scale: "experiment",
    accent: "#E8D8B0",
  },
  {
    id: "T04",
    title: {
      en: "Other Vibe Coding Experiments",
      zh: "其他 Vibe Coding 实验",
    },
    category: {
      en: "Vibe Coding / Creative Tools",
      zh: "Vibe Coding / 创意工具",
    },
    meta: {
      en: "AI TOOL / 2026",
      zh: "AI 工具 / 2026",
    },
    description: {
      en: "Small experiments that turn recurring creative needs into lightweight tools.",
      zh: "把重复性的创意需求转化成轻量工具的一组小实验。",
    },
    details: {
      en: ["2026", "Creative Tools"],
      zh: ["2026", "创意工具"],
    },
    cover: "",
    mediaType: "image",
    link: "/work",
    scale: "experiment",
    accent: "#C8D0C2",
    placeholder: true,
  },
];
