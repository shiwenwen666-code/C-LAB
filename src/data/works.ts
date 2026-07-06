export type WorkSize = "large" | "wide" | "medium" | "small";

export type WorkCase = {
  id: string;
  slug: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  category: { en: string; zh: string };
  description: { en: string; zh: string };
  coverImage: string;
  hoverImage?: string;
  year?: string;
  liveUrl?: string;
  githubUrl?: string;
  size: WorkSize;
  href: string;
  tone: string;
};

export const works: WorkCase[] = [
  {
    id: "01",
    slug: "aigc-merchant-advertising",
    title: { en: "AIGC Merchant Advertising", zh: "AIGC 商家力广告项目" },
    subtitle: {
      en: "AI-assisted commercial visual production for Alibaba.com merchant growth",
      zh: "服务 Alibaba.com 商家增长的 AI 辅助商业广告视觉生产",
    },
    category: { en: "Alibaba.com / AIGC Advertising", zh: "Alibaba.com / AIGC 广告视觉" },
    description: {
      en: "A modular AIGC advertising workflow built for merchant-facing commercial visuals, covering prompt structure, image generation, refinement, and controlled output for scalable campaign use.",
      zh: "面向 Alibaba.com 商家力广告场景搭建的模块化 AIGC 视觉流程，覆盖提示词结构、图像生成、细化控制与可规模化输出。",
    },
    coverImage: "/images/works/aigc-workflows.jpg",
    size: "large",
    href: "/work/aigc-merchant-advertising",
    tone: "cyan",
  },
  {
    id: "02",
    slug: "alibaba-social-visual-system",
    title: { en: "Alibaba.com Social Visual System", zh: "阿里国际站社媒形象统一与升级" },
    subtitle: {
      en: "A unified social visual language for Alibaba.com content communication",
      zh: "面向阿里国际站社媒内容传播的统一视觉语言升级",
    },
    category: { en: "Alibaba.com / Social Media", zh: "Alibaba.com / 社媒视觉" },
    description: {
      en: "A social media visual upgrade for Alibaba.com, strengthening content recognition, brand consistency, and repeatable design rules across platform communication.",
      zh: "围绕阿里国际站社媒内容进行视觉统一与升级，强化内容识别度、品牌一致性与可复用的传播视觉规则。",
    },
    coverImage: "/images/works/alibaba-social-visual.jpg",
    size: "wide",
    href: "/work/alibaba-social-visual-system",
    tone: "blue",
  },
  {
    id: "03",
    slug: "new-power-awards-2025",
    title: { en: "New Power Awards 2025", zh: "数字外贸真牛奖 2025" },
    subtitle: {
      en: "Campaign and event visual design for Alibaba.com New Power Awards",
      zh: "阿里国际站数字外贸真牛奖活动视觉与传播设计",
    },
    category: { en: "Alibaba.com / Campaign Visual", zh: "Alibaba.com / 活动视觉" },
    description: {
      en: "A campaign visual project for New Power Awards 2025, including key visual direction, event atmosphere, communication materials, and visual consistency across touchpoints.",
      zh: "为 2025 数字外贸真牛奖打造活动主视觉、品牌氛围与传播物料，并维护多触点视觉表达的一致性。",
    },
    coverImage: "/images/works/zhenniu-awards-2025.jpg",
    size: "medium",
    href: "/work/new-power-awards-2025",
    tone: "gold",
  },
  {
    id: "04",
    slug: "merchant-alliance-filming-project",
    title: { en: "Merchant Alliance Filming Project", zh: "商家力领航拍摄项目" },
    subtitle: {
      en: "Bilingual coordination, on-set production support, and visual execution",
      zh: "双语对接、片场统筹支持与商业内容视觉执行",
    },
    category: { en: "Alibaba.com / Production Coordination", zh: "Alibaba.com / 拍摄统筹" },
    description: {
      en: "A content production project for Alibaba.com merchant storytelling, involving bilingual communication, cross-functional coordination, shooting support, and visual delivery.",
      zh: "面向阿里国际站商家内容的拍摄统筹项目，涉及中英双语对接、跨团队沟通、片场协作与视觉交付。",
    },
    coverImage: "/images/works/merchant-alliance-filming.jpg",
    size: "medium",
    href: "/work/merchant-alliance-filming-project",
    tone: "slate",
  },
  {
    id: "05",
    slug: "aesthetic-intelligence-bureau",
    title: { en: "Aesthetic Intelligence Bureau", zh: "审美情报局" },
    subtitle: {
      en: "A personal media account for visual research and aesthetic observation",
      zh: "围绕视觉趋势、审美观察与设计判断的个人自媒体账号",
    },
    category: { en: "Personal Media / Visual Research", zh: "个人自媒体 / 视觉研究" },
    description: {
      en: "A self-initiated content project that collects visual signals, translates aesthetic trends, and turns design observation into a continuous research and storytelling practice.",
      zh: "一个个人发起的视觉研究型自媒体项目，用于收集审美信号、转译视觉趋势，并把设计观察沉淀为持续输出的内容实践。",
    },
    coverImage: "/images/works/aesthetic-intelligence-bureau.jpg",
    size: "medium",
    href: "/work/aesthetic-intelligence-bureau",
    tone: "mint",
  },
  {
    id: "06",
    slug: "visual-qa-workbench",
    title: { en: "Visual QA Workbench", zh: "视觉验图台" },
    subtitle: {
      en: "A local visual QA workbench for image asset checking.",
      zh: "一个用于图片素材检查的本地视觉验图工作台。",
    },
    category: { en: "Vibe Coding / Visual QA Tool", zh: "Vibe Coding / 视觉检查工具" },
    description: {
      en: "A local visual QA workbench for checking image assets, safe margins, composition guides, and export-ready review results.",
      zh: "一个用于辅助检查图片素材、安全边距、构图参考线和导出检测结果的本地视觉检查工作台。",
    },
    coverImage: "/images/works/visual-qa-workbench/cover.jpg",
    year: "2026",
    liveUrl: "#",
    githubUrl: "#",
    size: "small",
    href: "/work/visual-qa-workbench",
    tone: "ink",
  },
  {
    id: "07",
    slug: "prompt-generator-tool",
    title: { en: "Prompt Generator Tool", zh: "提示词生成工具" },
    subtitle: {
      en: "A structured prompt tool for commercial image generation.",
      zh: "面向商业视觉生成的结构化提示词工具。",
    },
    category: { en: "Vibe Coding / Prompt System", zh: "Vibe Coding / 提示词系统" },
    description: {
      en: "A self-built prompt generation tool designed for bilingual commercial visual production, supporting scene selection, industry classification, material control, and reusable prompt structures.",
      zh: "一个自建提示词生成工具，支持双语商业视觉生产、场景选择、行业分类、材质控制与可复用提示词结构。",
    },
    coverImage: "/images/works/prompt-generator/cover.jpg",
    year: "2026",
    liveUrl: "https://shiwenwen666-code.github.io/Cyan-lab/",
    githubUrl: "https://github.com/shiwenwen666-code/Cyan-lab",
    size: "small",
    href: "/work/prompt-generator-tool",
    tone: "ink",
  },
  {
    id: "08",
    slug: "yacht-poster-template-system",
    title: { en: "Yacht Poster Generator", zh: "一键生成游艇海报\n模板工具" },
    subtitle: {
      en: "A fast poster template system for Shanghai Yacht Rental Club",
      zh: "为上海游艇租赁俱乐部搭建的快速海报模板系统",
    },
    category: { en: "Shanghai Yacht Rental Club / Template Tool", zh: "上海游艇租赁俱乐部 / 模板工具" },
    description: {
      en: "A one-click poster template tool for yacht party and birthday campaign visuals, supporting reusable layouts, title options, logo options, and faster visual production.",
      zh: "面向游艇派对与生日活动视觉的一键海报生成工具，支持复用版式、标题选项、logo 选项与快速出图。",
    },
    coverImage: "/images/works/yacht-poster-template-tool.jpg",
    size: "small",
    href: "/work/yacht-poster-template-system",
    tone: "sea",
  },
];
