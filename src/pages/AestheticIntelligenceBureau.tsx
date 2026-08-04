import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import { CaseFourPdfPresentation } from "../components/CaseFourPdfPresentation";
import { AestheticFeaturedCases } from "../components/aesthetic/AestheticFeaturedCases";
import { AestheticFounder } from "../components/aesthetic/AestheticFounder";
import { AestheticHero } from "../components/aesthetic/AestheticHero";
import { AestheticPlatformLinks } from "../components/aesthetic/AestheticPlatformLinks";

const copy = {
  en: {
    back: "Back to Work",
    hero: {
      badge: "CASE 04 / CONTENT SYSTEM",
      title: "Aesthetic Intelligence Bureau",
      subtitle: "Seeing the beauty of the world through a designer's eyes.",
      englishName: "",
      description:
        "An aesthetic research and content experiment initiated by a designer.\nIt extracts visual patterns from design, branding, art, and culture,\nand transforms perception into shareable methods\nthrough content, tools, and AI workflows.",
    },
    founder: {
      eyebrow: "ABOUT",
      title: "CREATOR",
      subtitle: "",
      name: "Shiwenwen / Cyan",
      role: "VISUAL DESIGNER · BRAND DESIGNER · AIGC EXPLORER",
      body: [
        "Aesthetic Intelligence Bureau began as a private visual archive for recording signals found in film, branding, art, and everyday life.",
        "As the archive continued to grow, it evolved into a personal aesthetic research system: observing trends, decoding design logic, and using AI tools to turn fragmented inspiration into structured visual content.",
        "It not only records what is beautiful, but also explores why it is beautiful and how beauty can be created.",
      ],
      tags: [
        "VISUAL RESEARCH",
        "BRAND STORYTELLING",
        "CONTENT SYSTEM",
        "EDITORIAL DESIGN",
        "AI CREATIVE WORKFLOW",
      ],
    },
    origin: {
      eyebrow: "02 Origin",
      title: "From private visual archive to content system",
      description:
        "The project started as a designer's habit of collecting inspiration and visual clues. Over time, the archive became a production method.",
      steps: ["Observe", "Decode", "Translate", "Publish"],
      insight:
        "The value is not only in posting content. It is in building a repeatable way to turn aesthetic judgment into content assets.",
    },
    workflow: {
      eyebrow: "03 Aesthetic Intelligence Workflow",
      title: "A circular system for producing visual knowledge",
      description:
        "Each topic moves through a controlled loop, from visual signal to public-facing content. The loop keeps the channel from becoming random inspiration collecting.",
      steps: [
        { number: "01", title: "Capture", subtitle: "Catch visual signals" },
        { number: "02", title: "Research", subtitle: "Collect context and references" },
        { number: "03", title: "Decode", subtitle: "Break down design logic" },
        { number: "04", title: "Translate", subtitle: "Turn insight into readable content" },
        { number: "05", title: "Publish", subtitle: "Release on WeChat and Rednote" },
        { number: "06", title: "Iterate", subtitle: "Refine through feedback" },
      ],
    },
    lines: {
      eyebrow: "04 Content System",
      title: "Four content lines, one aesthetic lens",
      description:
        "The channel is organized as a content system. Each line has a clear role, format, and audience rhythm.",
      items: [
        {
          code: "A Line",
          title: "Designers Watch Films",
          subtitle: "Visual Analysis",
          description: "Decode visual language from films, photography, art, and image composition.",
          topics: ["Film", "Photography", "Visual Language"],
        },
        {
          code: "B Line",
          title: "Long-form Articles",
          subtitle: "Deep Research",
          description: "Discuss branding, IP, design trends, and commercial aesthetics in longer writing.",
          topics: ["Brand", "IP", "Trends"],
        },
        {
          code: "C Line",
          title: "Visual Dictionary",
          subtitle: "Core Column",
          description: "Turn complex design ideas into 3:4 visual cards for Rednote and WeChat distribution.",
          topics: ["Concept", "Cards", "Shareable"],
          lab: true,
        },
        {
          code: "D Line",
          title: "Design Masters Philosophy",
          subtitle: "Philosophy Decoding",
          description: "Decode the design philosophy behind Issey Miyake, Yohji Yamamoto, Rei Kawakubo, Kenya Hara, and Naoto Fukasawa.",
          topics: ["Masters", "Philosophy", "Aesthetic Logic"],
        },
      ],
    },
    production: {
      eyebrow: "05 Content Production Skill",
      title: "A production method for turning taste into assets",
      description:
        "The skill behind this case is not simply writing posts. It is extracting ideas, structuring them, and packaging them into repeatable visual formats.",
      steps: [
        "Popular article / design case",
        "Core idea extraction",
        "Structured breakdown",
        "3:4 visual card production",
        "WeChat / Rednote publishing",
        "Feedback-based refinement",
      ],
      highlight:
        "This is an aesthetic knowledge production system: a way to turn observation, judgment, and visual language into reusable content assets.",
    },
    outputs: {
      eyebrow: "06 Output Gallery",
      title: "Outputs designed for reading, saving, and sharing",
      description:
        "The output structure prioritizes Rednote visual cards and WeChat posts, while shorts remain a supporting format rather than the main focus.",
      items: [
        { type: "Rednote Cards", title: "3:4 Visual Dictionary Cards", description: "A set of compact visual cards designed for saving and reposting.", ratio: "portrait" },
        { type: "WeChat Posts", title: "Image-led Public Account Posts", description: "Longer image essays with a clearer narrative structure.", ratio: "wide" },
        { type: "Article Covers", title: "Long-form Research Covers", description: "Editorial covers for deeper research pieces.", ratio: "square" },
        { type: "Shorts", title: "Lightweight Visual Explanations", description: "Short videos placed later in the system as quick concept explainers.", ratio: "portrait" },
      ],
    },
    platforms: {
      eyebrow: "07 Platforms",
      title: "External channels for the content system",
      description: "Platform links are placeholders and can be replaced with real URLs later.",
      items: [
        { name: "WeChat", handle: "Aesthetic Intelligence Bureau", href: "#" },
        { name: "Rednote", handle: "@Aesthetic Intelligence Bureau", href: "#" },
        { name: "X / Twitter", handle: "@cyanlabs", href: "#" },
        { name: "Jike", handle: "Aesthetic Intelligence Bureau", href: "#" },
        { name: "Bilibili", handle: "@Aesthetic Intelligence Bureau", href: "#", muted: true },
      ],
    },
  },
  zh: {
    back: "返回作品",
    hero: {
      badge: "CASE 04 / CONTENT SYSTEM",
      title: "审美情报局",
      subtitle: "用设计的眼睛，看懂世界的美。",
      englishName: "",
      description:
        "一个由设计师发起的审美研究与内容实验项目。\n从设计、品牌、艺术与文化中提取视觉规律，\n并通过内容、工具与 AI 工作流，\n将感知转化为可传播的方法。",
    },
    founder: {
      eyebrow: "ABOUT",
      title: "CREATOR",
      subtitle: "",
      name: "施文文 / Cyan",
      role: "VISUAL DESIGNER · BRAND DESIGNER · AIGC EXPLORER",
      body: [
        "审美情报局最初只是一个私人视觉档案，用于记录电影、品牌、艺术与日常生活中的视觉线索。",
        "随着持续积累，它逐渐演变为一个个人审美研究系统：通过观察趋势、拆解设计逻辑，并结合 AI 工具，将碎片化的灵感转化为结构化的视觉内容。",
        "它不仅记录“什么是美”，也探索“为什么美，以及如何创造美”。",
      ],
      tags: [
        "视觉研究",
        "品牌叙事",
        "内容系统",
        "编辑设计",
        "AI 创意工作流",
      ],
    },
    origin: {
      eyebrow: "02 起源",
      title: "从私人灵感档案，到审美内容系统",
      description:
        "这个项目最初只是设计师记录灵感和视觉观察的私人档案。随着内容不断积累，它开始从零散收藏变成一套稳定的方法。",
      steps: ["观察", "拆解", "转译", "发布"],
      insight:
        "它的价值不只是做内容，而是建立一种把审美判断转化成内容资产的方式。",
    },
    workflow: {
      eyebrow: "03 Aesthetic Intelligence Workflow",
      title: "一套循环生产视觉知识的工作流",
      description:
        "每个选题都经过一套相对稳定的循环，从视觉信号进入，到大众可理解的内容输出。它让频道不只是灵感收集，而是持续生长的知识系统。",
      steps: [
        { number: "01", title: "Capture", subtitle: "捕捉视觉信号" },
        { number: "02", title: "Research", subtitle: "收集资料与背景" },
        { number: "03", title: "Decode", subtitle: "拆解设计逻辑" },
        { number: "04", title: "Translate", subtitle: "转译为大众可理解的内容" },
        { number: "05", title: "Publish", subtitle: "发布到小红书 / 微信公众号" },
        { number: "06", title: "Iterate", subtitle: "根据反馈优化" },
      ],
    },
    lines: {
      eyebrow: "04 Content System",
      title: "四条内容线，共用同一种审美视角",
      description:
        "审美情报局不是把内容随机堆在一起，而是把不同题材拆成清晰栏目：每条线都有自己的叙事位置、内容形态和传播节奏。",
      items: [
        {
          code: "A Line",
          title: "设计师看电影",
          subtitle: "Visual Analysis",
          description: "从电影、摄影、艺术中拆解视觉语言，观察构图、色彩、情绪和叙事秩序。",
          topics: ["电影", "摄影", "视觉语言"],
        },
        {
          code: "B Line",
          title: "公众号长文",
          subtitle: "Deep Research",
          description: "深入讨论品牌、IP、设计趋势和商业审美，沉淀更完整的长文观点。",
          topics: ["品牌", "IP", "商业审美"],
        },
        {
          code: "C Line",
          title: "视觉辞典",
          subtitle: "Visual Dictionary",
          description: "把复杂设计概念拆解成 8 张左右 3:4 图文卡片，适配小红书和微信传播。",
          topics: ["概念", "图文卡片", "传播"],
          lab: true,
        },
        {
          code: "D Line",
          title: "设计大师哲学拆解",
          subtitle: "Design Masters Philosophy",
          description: "重点不是介绍人物，而是拆解三宅一生、山本耀司、川久保玲、原研哉、深泽直人背后的设计哲学。",
          topics: ["三宅一生", "山本耀司", "原研哉"],
        },
      ],
    },
    production: {
      eyebrow: "05 Content Production Skill",
      title: "把审美判断转化成内容资产的方法",
      description:
        "这个项目背后的能力不是单纯写文章或发图，而是把外部案例、热门文章和设计观点转化成可复用的内容结构。",
      steps: ["热门文章 / 设计案例", "核心思想提炼", "结构化拆解", "3:4 图文生成", "公众号 / 小红书发布", "数据反馈优化"],
      highlight:
        "它是一套审美知识生产系统：把观察、判断和视觉语言，转化成可持续积累的内容资产。",
    },
    outputs: {
      eyebrow: "06 Output Gallery",
      title: "为阅读、收藏与传播设计的内容成果",
      description:
        "输出优先级以小红书图文卡片和微信公众号图文为主，长文章封面作为深度内容入口，短视频暂时放在后面。",
      items: [
        { type: "小红书图文", title: "3:4 视觉辞典卡片", description: "面向收藏和转发的图文卡片组，强调概念拆解和视觉记忆点。", ratio: "portrait" },
        { type: "公众号图文", title: "图像驱动的公众号内容", description: "用更完整的叙事解释品牌、电影和设计案例。", ratio: "wide" },
        { type: "长文章封面", title: "深度研究内容入口", description: "为长文建立更稳定的编辑式封面系统。", ratio: "square" },
        { type: "短视频", title: "轻量视觉概念解释", description: "短视频作为补充格式，用来快速解释一个视觉概念。", ratio: "portrait" },
      ],
    },
    platforms: {
      eyebrow: "07 Platform",
      title: "内容系统的外部发布入口",
      description: "底部保留外部平台跳转，链接先占位，后续替换真实地址。",
      items: [
        { name: "微信公众号", handle: "审美情报局", href: "#" },
        { name: "小红书", handle: "@审美情报局", href: "#" },
        { name: "X", handle: "@cyanlabs", href: "#" },
        { name: "即刻", handle: "审美情报局", href: "#" },
        { name: "Bilibili", handle: "@审美情报局", href: "#", muted: true },
      ],
    },
  },
};

export function AestheticIntelligenceBureau() {
  const { locale } = useAppSettings();
  const page = copy[locale];

  return (
    <article className={`aesthetic-page is-${locale}`}>
      <Link className="aesthetic-back" to="/work">
        {page.back}
      </Link>
      <AestheticHero {...page.hero} />
      <AestheticFounder {...page.founder} />
      <AestheticFeaturedCases locale={locale} />
      <CaseFourPdfPresentation />
      <AestheticPlatformLinks locale={locale} />
    </article>
  );
}
