import type { CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSettings } from "../App";
import { Reveal } from "../components/Motion";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { works } from "../data/works";

const promptProject = works.find((item) => item.slug === "prompt-generator-tool");

const promptCopy = {
  overview: {
    en: "Prompt Generator Tool is a self-built prompt system designed to help generate structured, bilingual prompts for commercial visual production.",
    zh: "Prompt Generator Tool 是一个自建提示词工具，用于辅助生成面向商业视觉生产的结构化双语提示词。",
  },
  why: {
    en: "During AIGC commercial visual production, prompt writing often became repetitive, inconsistent, and difficult to reuse. I built this tool to turn scattered prompt experience into a reusable interface and workflow.",
    zh: "在 AIGC 商业视觉生产中，提示词编写经常重复、分散且难以复用。我搭建这个工具，是为了把零散的提示词经验转化为一个可复用的界面和工作流。",
  },
  features: {
    en: [
      "Industry and category selection",
      "Scene and visual style control",
      "Material and composition options",
      "Chinese / English prompt output",
      "Reusable prompt structure",
      "Batch prompt generation",
    ],
    zh: [
      "行业与品类选择",
      "场景与视觉风格控制",
      "材质与构图选项",
      "中英文提示词输出",
      "可复用提示词结构",
      "批量提示词生成",
    ],
  },
  role: {
    en: "Visual Designer / Prompt System Designer / Vibe Coding Builder",
    zh: "视觉设计师 / 提示词系统设计 / Vibe Coding 搭建者",
  },
  tools: {
    en: ["Codex", "React", "AIGC Workflow", "Prompt Engineering", "ComfyUI / RunningHub"],
    zh: ["Codex", "React", "AIGC 工作流", "提示词工程", "ComfyUI / RunningHub"],
  },
};

const interfaceImages = [
  "/images/works/prompt-generator/interface-01.jpg",
  "/images/works/prompt-generator/interface-02.jpg",
];

const outputImages = [
  "/images/works/prompt-generator/output-01.jpg",
  "/images/works/prompt-generator/output-02.jpg",
  "/images/works/prompt-generator/output-03.jpg",
  "/images/works/prompt-generator/output-04.jpg",
  "/images/works/prompt-generator/output-05.jpg",
  "/images/works/prompt-generator/output-06.jpg",
];

const yachtPosterCopy = {
  title: {
    en: "Yacht Poster Template System",
    zh: "游艇海报模板系统",
  },
  category: {
    en: "Template System / Efficiency Tool",
    zh: "模板系统 / 提效工具",
  },
  summary: {
    en: "A browser-based poster template tool for Shanghai Yacht Rental Club's Rednote visuals.",
    zh: "为上海游艇租赁俱乐部制作的小红书海报模板工具。",
  },
  overview: {
    en: "A web-based poster template tool built for Shanghai Yacht Rental Club. It is used to generate yacht event poster images and social media visuals for Rednote publishing. Instead of repeatedly opening Photoshop to adjust titles, logos, images, and layout details, users can edit content, switch templates, and generate poster drafts directly in the browser.",
    zh: "这是为上海游艇租赁俱乐部公司制作的网页海报模板工具，用于生成游艇活动海报图片，并投放到小红书社媒。过去类似海报需要反复打开 Photoshop 修改标题、Logo、图片位置和版式细节；现在可以通过网页端快速替换内容、选择模板并生成海报模板，降低操作门槛，也减少重复排版时间。",
  },
  why: {
    en: "The goal was to turn a repetitive poster layout workflow into a lightweight tool, so users could generate basic event visuals without opening professional design software.",
    zh: "这个项目的目标是把重复性的海报排版流程工具化，让非设计软件环境下的用户也能快速完成基础视觉生成。",
  },
  outcome: {
    en: "The workflow reduces the need to repeatedly edit posters in Photoshop. A basic poster draft can be generated and previewed in about five minutes, lowering the operation barrier and improving efficiency for recurring visual requests.",
    zh: "原本需要在 Photoshop 中反复编辑的海报，现在可以在网页端完成基础生成。单张海报从修改到预览大约 5 分钟即可完成，降低了使用门槛，也提升了重复视觉需求的处理效率。",
  },
  features: {
    en: [
      "Switch between yacht poster templates",
      "Edit headline text",
      "Select logo options",
      "Upload and adjust images",
      "Preview poster layouts quickly",
      "Run locally in the browser",
    ],
    zh: [
      "支持不同游艇海报模板切换",
      "支持标题文案替换",
      "支持 Logo 方案选择",
      "支持图片上传与位置调整",
      "支持快速预览海报效果",
      "支持本地浏览器端运行",
    ],
  },
  labels: {
    back: { en: "Back to Work", zh: "返回作品" },
    overview: { en: "Overview", zh: "概览" },
    role: { en: "Role", zh: "角色" },
    category: { en: "Category", zh: "类别" },
    tools: { en: "Tools", zh: "工具" },
    year: { en: "Year", zh: "年份" },
    background: { en: "Background", zh: "项目背景" },
    features: { en: "Features", zh: "功能" },
    outcome: { en: "Outcome", zh: "结果" },
    interface: { en: "Interface Preview", zh: "界面预览" },
    posters: { en: "Generated Posters", zh: "成品展示" },
    links: { en: "Links", zh: "项目链接" },
    why: { en: "Why I Built It", zh: "为什么做" },
  },
  highlights: ["5 min / poster", "No Photoshop required", "Browser-based editing", "Reusable templates"],
};

const yachtInterfaceImages = [
  "/images/works/yacht-poster/interface-01.jpg",
  "/images/works/yacht-poster/interface-02.jpg",
];

const yachtPosterImages = [
  "/images/works/yacht-poster/poster-01.jpg",
  "/images/works/yacht-poster/poster-02.jpg",
  "/images/works/yacht-poster/poster-03.jpg",
  "/images/works/yacht-poster/poster-04.jpg",
];

const socialCaseCopy = {
  accounts: [
    ["#01", "Rednote Official Account", "小红书官号"],
    ["#02", "Wechat Official Account", "微信公众号"],
    ["#03", "Wechat Video Account", "微信视频号"],
    ["#04", "Overseas Social Media", "海外社媒"],
  ],
  metrics: [
    { value: "x12", label: { en: "Interaction growth", zh: "互动增长" }, detail: { en: "Likes, comments and saves increased 12x.", zh: "点赞、评论、收藏总数提升 12 倍。" } },
    { value: "6000+", label: { en: "Reading uplift", zh: "阅读增量" }, detail: { en: "Average reads per post increased by 6000+.", zh: "单篇笔记平均阅读量提升 6000+。" } },
    { value: "+40%", label: { en: "Follower conversion", zh: "粉丝转化" }, detail: { en: "Follower acquisition efficiency increased by 40%.", zh: "单篇笔记获粉能力提升 40%。" } },
  ],
  problems: [
    { title: { en: "Blurred brand recognition", zh: "品牌识别模糊" }, text: { en: "The visual system lacked a unified VI logic and felt fragmented across channels.", zh: "缺乏统一的 VI 系统，跨平台视觉呈现较为碎片化。" } },
    { title: { en: "Loose content structure", zh: "内容架构松散" }, text: { en: "Content categories and cover logic were not easy to repeat at scale.", zh: "内容分类与封面逻辑不够清晰，难以稳定复用。" } },
    { title: { en: "Tone mismatch", zh: "调性偏差" }, text: { en: "Some visual treatments felt too consumer-oriented for a B2B business context.", zh: "部分风格偏 C 端化，与 B 端业务专业属性不够匹配。" } },
    { title: { en: "Low information efficiency", zh: "信息传达低效" }, text: { en: "Professional content needed stronger hierarchy and faster reading cues.", zh: "专业内容的可视化不足，影响阅读与理解效率。" } },
  ],
  v2Challenges: [
    { title: { en: "Brand synergy challenge", zh: "品牌关联度挑战" }, text: { en: "The existing visual system still felt weakly connected to the Alibaba.com master brand.", zh: "现有视觉体系与“阿里国际站”母品牌的强关联感仍显薄弱，亟需在极简主义中融入更高阶的品牌基因。" } },
    { title: { en: "CTR bottleneck", zh: "市场点击率瓶颈" }, text: { en: "In an overloaded social environment, covers needed stronger visual grip for precise traffic.", zh: "信息爆炸的社媒环境下，传统美化手段已触达审美疲劳期，需要更具“视觉抓力”的封面吸引精准流量。" } },
    { title: { en: "AI-driven innovation", zh: "技术代差降维打击" }, text: { en: "AIGC was not only an efficiency upgrade, but a dimensional upgrade of visual storytelling.", zh: "AIGC 浪潮已至，引入 AI 工具不仅是效率的指数级提升，更是对视觉叙事能力的一次全维度升维。" } },
  ],
  timeline: [
    { stage: "Start", title: { en: "Project launch", zh: "项目启动" }, details: { en: ["Kickoff"], zh: ["项目启动"] } },
    { stage: "week0-1", title: { en: "Research & positioning", zh: "市场调研与用户定位" }, details: { en: ["Market research", "User positioning"], zh: ["市场调研", "用户定位"] } },
    { stage: "week1", title: { en: "Strategy & concept", zh: "制定策略与创意构思" }, details: { en: ["Strategy planning", "Creative concept"], zh: ["制定策略", "创意构思"] } },
    { stage: "week2-3", title: { en: "Template design", zh: "模板制定与设计实施" }, details: { en: ["Template system", "Design execution"], zh: ["制定模板", "设计实施"] } },
    { stage: "week4-5", title: { en: "Outcome validation", zh: "成果验证与反馈收集" }, details: { en: ["Outcome validation", "Feedback collection"], zh: ["成果验证", "收集反馈"] } },
    { stage: "week5-8", title: { en: "AIGC enablement", zh: "AIGC 赋能与 V2.0 升级" }, details: { en: ["AIGC enablement", "V2.0 upgrade"], zh: ["AIGC 赋能", "V2.0 升级"] } },
    { stage: "Continue...", title: { en: "Workflow automation", zh: "Workflow 自动化与持续升级" }, details: { en: ["Workflow automation", "Continuous upgrade"], zh: ["workflow 自动化", "持续升级"] } },
  ],
  strategy: [
    { title: { en: "Trend Insight", zh: "趋势洞察" }, text: { en: "Define an atmospheric, concise and easy-to-read social tone based on global social-media trends.", zh: "立足全球社媒趋势，确立“大气、简洁、易懂”的视觉基调，构建高辨识度的品牌记忆点。" } },
    { title: { en: "Business Color System", zh: "商务蓝紫规范" }, text: { en: "Translate aesthetic standards into reusable visual rules and establish a professional B2B texture.", zh: "定义“商务蓝紫”视觉规范，将审美标准转化为可复用的视觉框架，确立 B 端专业质感。" } },
    { title: { en: "Design Agility", zh: "即效方案" }, text: { en: "Rebuild information hierarchy and data presentation to improve commercial communication efficiency.", zh: "深度梳理文本逻辑，重构文字层级与数据呈现，实现复杂商业信息的高效视觉传达。" } },
    { title: { en: "Asset Refinement", zh: "素材精修" }, text: { en: "Refine and recreate raw materials to repair visual defects and protect the overall brand quality.", zh: "对需求方原始素材进行深度美化与二次创作，修复视觉瑕疵，捍卫品牌整体视觉高度。" } },
  ],
  systemMedia: [
    { label: "Design Strategy", caption: { en: "Trend insight, business color rules, information hierarchy and asset refinement.", zh: "趋势洞察、商务蓝紫规范、信息层级重构与素材精修。" }, className: "is-strategy" },
    { label: "Template Design", caption: { en: "Cover templates: people, platform events, platform functions and IP collaborations.", zh: "封面模板：人物、平台事件、平台功能、IP 联名。" }, className: "is-template" },
    { label: "Inner Page Template", caption: { en: "Inner templates: data display, topic discussion and feature explanation.", zh: "内页模板：数据展示、话题讨论、功能点详解。" }, className: "is-template" },
  ],
  v1Results: [
    { value: "+30%", label: { en: "Engagement uplift", zh: "互动提升" } },
    { value: "+15%", label: { en: "Follower conversion uplift", zh: "粉丝转化提升" } },
    { value: "0-1", label: { en: "Business blue-purple system", zh: "从零构建商务蓝紫视觉规范" } },
    { value: "+1600", label: { en: "High-stickiness professional users", zh: "建立高粘性专业社群用户" } },
  ],
  outputs: [
    { label: "Work with AI agent", caption: { en: "The design work moves from manual retouching to algorithmic aesthetics.", zh: "从“手工修饰”进入“算法美学”的协作方式。" }, className: "is-agent" },
    { label: "GIF Layout", caption: { en: "Reserved position for the original GIF layout source.", zh: "GIF 制作（Layout）原始动效位置预留。" }, className: "is-portrait is-gif" },
    { label: "Animated Poster", caption: { en: "Animated poster output for V2.0 social communication.", zh: "Animated Poster：V2.0 社媒动效海报输出。" }, className: "is-portrait" },
    { label: "Color Design 2.0", caption: { en: "Rebuild the orange brand asset through proportion, gradient and restraint.", zh: "通过色彩配比重构橙色品牌资产，保留辨识度并提升高级感。" }, className: "is-color" },
    { label: "V2.0 Cover System", caption: { en: "Final cover system with stronger brand equity and scalable production.", zh: "V2.0 终局封面系统：强化品牌心智并支持规模化生产。" }, className: "is-portrait is-gif" },
    { label: "WeChat Banner / Content Matrix", caption: { en: "Cross-channel assets for WeChat, Rednote and overseas social media.", zh: "覆盖微信、小红书与海外社媒的跨渠道内容资产。" }, className: "is-banner" },
  ],
  compareRows: [
    { dimension: "内容产出频次 (Efficiency)", v2: "5 篇 / 周 (工业化量产)", v1: "2 篇 / 周 (初步规范视觉)", original: "1 篇 / 周 (纯人工/非专业瓶颈)" },
    { dimension: "视觉资产沉淀 (Scalability)", v2: "ComfyUI workflow (自动化产出)", v1: "多套基础模板 (开始沉淀 SOP)", original: "0 (单次交付，无资产)" },
    { dimension: "品牌心智辨识度 (Brand Equity)", v2: "极高 ★★★★★ (适配高质感橙色)", v1: "中 ★★★ (追逐 B 端调性导致失焦)", original: "低 ★ (调性不符 / 辨识度低)" },
    { dimension: "全粉丝转化率 (Growth)", v2: "+40% (视觉 / 心智双重爆发)", v1: "+15% (视觉提升引发关注)", original: "— (增长停滞)" },
    { dimension: "私域 / 增量用户群 (User Base)", v2: "+6000 (全域声量回响)", v1: "+2500 (单点突破)", original: "基准数据" },
  ],
};

const newPowerCopy = {
  meta: [
    ["ROLE", "参与设计师"],
    ["MY DELIVERABLES", "KV · 周边 · AI数字人像"],
    ["TEAM", "BRAND SQUAD · 多人协作"],
    ["PERIOD", "2025 · Q1"],
  ],
  heritage: [
    ["已有资产", "CUBE / 立方体"],
    ["主题色", "BLUE + ORANGE"],
    ["气质", "国际 / 轻盈 / 科技感"],
    ["LOGO", "FIXED · 已固定"],
    ["已沉淀", "2 SEASONS · 2届历史"],
  ],
  sloganSteps: [
    ["01 Insight", "跨境业务的每一个环节正在被AI重构。"],
    ["02 Strategy", "不止是把AI当工具，而是将AI作为这一届的「定义性」变量。"],
    ["03 Slogan", "重思商业，突破边界，AI同行"],
  ],
  colors: [
    ["#030D6D", "真牛蓝"],
    ["#021DA9", "深海蓝"],
    ["#FF6600", "阿里橙"],
    ["#F3C1F7", "轻盈粉紫"],
    ["#1DCAFF", "科技青"],
    ["#144CFF", "高亮蓝"],
    ["#55FFA6", "增长绿"],
    ["#FFFF5C", "能量黄"],
  ],
  merch: [
    ["工作证 · Work Card", "ratio-card"],
    ["纪念币 · Commemorative Coin", "ratio-square-ish"],
    ["钥匙扣 · Key Chain", "ratio-merch-soft"],
    ["贴纸 · Stickers", "ratio-merch-soft"],
    ["气囊支架 · PopSocket", "ratio-square"],
    ["贴纸 · Stickers", "ratio-square"],
    ["挂件 · Pendant", "ratio-square"],
  ],
  trophy: [
    {
      label: "奖杯提案 · Trophy Proposal",
      title: "解构立方体：金属&玻璃质感结合",
      text: "呼应品牌立方体语言，解构形式体现「Breaking Through」的视觉动势。",
      ratio: "ratio-trophy-large",
    },
  ],
  workflow: [
    ["Input", "原始照片"],
    ["Prompt", "4K 商务职业半身照、面部保持一致、正面柔光、黑色西装、白衬衫、黑领带。"],
    ["Trigger", "转换职业照 → 规范尺寸+绿幕 → 首尾帧连接动作 → 视频转 GIF"],
    ["Output", "32 组定制化资产、动态竞技叙事、线下盛典大屏适配。"],
  ],
  numbers: [
    ["96.25%", "设计满意度", "现场分发 300+ 份纸质问卷，设计视觉体验斩获核心高分反馈。"],
    ["97.5%", "品牌心智提升", "绝大多数观众认为视觉完美传达了主题，显著拉升品牌好感度与现场氛围。"],
    ["0.29元", "单 UV 获取成本", "用高质感的视觉语言降本增效，大幅提升每一分预算的商业转化 ROI。"],
    ["512W", "整场直播观看", "同比 +73%，开播仅 1 小时即打平 2024 全年总数据。"],
    ["1500W+", "线上传播总量", "同比 +147%，盛典引爆全网声量，长尾效应显著。"],
    ["690.6W+", "互动点赞总量", "同比 +147%，用户粘性呈爆发式增长。"],
    ["20.9W", "全网评论总量", "同比 +118%，打破单向观看壁垒。"],
    ["4.9W", "全链路协同效率", "同比 +101%，将盛典瞬时流量转化为平台长期私域资产。"],
  ],
  scenePhotos: [
    ["活动现场照片 01 · Competition Photo"],
    ["活动现场照片 02 · Competition Photo"],
    ["活动现场照片 03 · Competition Photo"],
  ],
};

function CaseMedia({
  label,
  caption,
  className = "",
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`social-case-media ${className}`} tabIndex={0}>
      <span>{label}</span>
      {caption ? <p>{caption}</p> : null}
    </div>
  );
}

function AwardMedia({
  label,
  caption,
  ratio = "ratio-wide",
  index,
}: {
  label: string;
  caption?: string;
  ratio?: string;
  index?: string;
}) {
  return (
    <div className={`award-case-media ${ratio}`} tabIndex={0}>
      {index ? <span className="award-case-media-index">{index}</span> : null}
      <div>
        <strong>{label}</strong>
        {caption ? <p>{caption}</p> : null}
      </div>
    </div>
  );
}

function NewPowerAwardsDetail() {
  const { locale } = useAppSettings();

  return (
    <article className={`award-case-detail ${locale === "zh" ? "is-zh" : "is-en"}`}>
      <div className="award-case-wrap">
        <div className="award-case-back">
          <Link className="text-link" to="/work">
            {locale === "en" ? "Back to Work" : "返回作品"}
          </Link>
        </div>

        <header className="award-case-hero">
          <Reveal className="award-case-kicker">
            <span>02 / Featured Project - Brand × Event × AI</span>
            <span>Case 02 / 05</span>
          </Reveal>
          <div className="award-case-hero-grid">
            <Reveal className="award-case-hero-copy">
              <p>NEW POWER AWARD 2025</p>
              <h1>
                {locale === "en" ? (
                  <>
                    <span>Brand Visual System</span>
                    <span>for New Power Award</span>
                  </>
                ) : (
                  <>
                    <span>数字外贸真牛奖</span>
                    <span>品牌视觉构建</span>
                  </>
                )}
              </h1>
              <small>Rethinking Business · Breaking Through · AI</small>
              <em>
                {locale === "en"
                  ? "Injecting AI as the defining variable into the annual award’s visual narrative."
                  : "把 AI 作为时代变量注入年度奖项的视觉与叙事。"}
              </em>
            </Reveal>
            <Reveal className="award-case-hero-visual">
              <AwardMedia label="KV - HERO . PNG" caption="Figma 原始首屏主视觉位置，方形 1:1。" ratio="ratio-square" />
            </Reveal>
          </div>
          <div className="award-case-meta">
            {newPowerCopy.meta.map(([label, value]) => (
              <Reveal key={label} className="award-case-meta-item">
                <span>{label}</span>
                <strong>{value}</strong>
              </Reveal>
            ))}
          </div>
        </header>

        <section className="award-case-brief">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Brief & Heritage —— 命题与既有资产</p>
            <h2>
              {locale === "en" ? "A design answer inside an inherited brand system." : "这是一篇命题作文"}
            </h2>
            <p>
              {locale === "en"
                ? "The 2025 brief was to keep the award’s established visual equity while responding to the biggest variable in global trade: AI."
                : "2025 这一届命题：在不破坏前几届沉淀的视觉系统前提下，让品牌呼应当下贸易最大的变量 —— AI。"}
            </p>
          </Reveal>
          <Reveal className="award-case-heritage">
            <p>Years of Brand Heritage</p>
            {newPowerCopy.heritage.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </Reveal>
          <Reveal className="award-case-statement">
            如果说过去的「新势力」是规模，那 2025 的「新势力」就是突破 × AI.
          </Reveal>
        </section>

        <section className="award-case-slogan">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Slogan Deduction</p>
            <h2>
              {locale === "en"
                ? "Turning a complex strategic brief into one brand formula."
                : "把复杂 Brief 提炼成一个品牌公式"}
            </h2>
          </Reveal>
          <div className="award-case-slogan-grid">
            {newPowerCopy.sloganSteps.map(([step, text]) => (
              <Reveal key={step} className="award-case-slogan-card">
                <span>{step}</span>
                <strong>{text}</strong>
              </Reveal>
            ))}
          </div>
          <Reveal className="award-case-slogan-final">
            <span>The Slogan</span>
            <strong>Rethinking Business · Breaking Through · AI</strong>
            <p>重思商业 · 突破边界 · AI同行</p>
          </Reveal>
        </section>

        <section className="award-case-colors">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Visual Strategy</p>
            <h2>
              {locale === "en" ? "Let the cube move with lightness." : "视觉答卷：用立方体跳一支轻盈的舞"}
            </h2>
            <p>
              {locale === "en"
                ? "On top of the inherited cube, blue and orange language, the visual system adds motion, geometric momentum and AI cues to grow a more technological future tone."
                : "在既有的「立方体 + 蓝色 + 橙色」视觉语言上，加入视觉流、几何动势和 AI 元素，在商业感基础上生长出科技未来感。"}
            </p>
          </Reveal>
          <div className="award-case-color-layout">
            <Reveal className="award-case-swatches">
              {newPowerCopy.colors.map(([hex, name]) => (
                <div key={hex} style={{ "--swatch": hex } as CSSProperties}>
                  <span>{hex}</span>
                  <strong>{name}</strong>
                </div>
              ))}
            </Reveal>
            <Reveal className="award-case-color-copy">
              <h3>思辨对撞 & 全球视野</h3>
              <p>
                色彩逻辑以“真牛蓝”作为品牌叙事的深邃基调，与核心“阿里橙”构成强烈的互补色轴线，直观呈现辩论赛制的竞技张力与思维对撞；同时引入高明度、低饱和的多元点缀色，为 B 端商业语境注入国际化的年轻态活力。
              </p>
            </Reveal>
          </div>
        </section>

        <section className="award-case-kv">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Key Visual System</p>
            <h2>
              {locale === "en"
                ? "Final key visual and AI figure system."
                : "主视觉与 AI 数字人像系统"}
            </h2>
          </Reveal>
          <Reveal className="award-case-kv-main">
            <AwardMedia
              label={locale === "en" ? "Final Key Visual Application" : "主视觉应用 · Key Visual Effect"}
              caption={locale === "en" ? "A large hero placement reserved for the final campaign visual." : "网页版保留最终成品主视觉大图位置，弱化过程稿，突出漂亮成品图。"}
              ratio="ratio-kv-wide"
            />
          </Reveal>
          <div className="award-case-ai-grid">
            <Reveal>
              <AwardMedia
                label="全球化人物脸谱 · Globalized Figure Profile"
                caption={locale === "en" ? "AI-generated global debater portraits." : "AIGC 驱动全球数字辩手群像。"}
                ratio="ratio-ai-figure"
              />
            </Reveal>
            <Reveal className="award-case-ai-copy">
              <p className="eyebrow">Generated via ComfyUI Nodes</p>
              <h3>{locale === "en" ? "AI-generated global debater portraits" : "AIGC 驱动全球数字辩手群像"}</h3>
              <p>
                {locale === "en"
                  ? "A customized workflow was built to generate diverse global business figures with consistent quality."
                  : "搭建定制化工作流，实现全球跨地域特征的精准 AI 数字人生成。"}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="award-case-merch">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Merchandise System</p>
            <h2>
              {locale === "en" ? "Merchandise built from the cube language." : "物料体系：立方体的解构与延展"}
            </h2>
            <p>
              {locale === "en"
                ? "The merchandise system extends the cube as the core geometric language across cards, coins, key chains, stickers and trophies."
                : "周边设计深度锚定核心视觉元素“立方体”，将其作为贯穿始终的几何语言。通过对正方形维度的拆解与重组，使物料在方寸间紧扣“思辨与重构”的主题内核。"}
            </p>
          </Reveal>
          <div className="award-case-merch-grid">
            {newPowerCopy.merch.map(([label, ratio]) => (
              <Reveal key={label}>
                <AwardMedia label={label} ratio={ratio} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="award-case-trophy">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Designer Story</p>
            <h2>{locale === "en" ? "Deconstructing the cube into a trophy proposal." : "解构立方体：奖杯提案"}</h2>
          </Reveal>
          <div className="award-case-trophy-grid">
            {newPowerCopy.trophy.map((item) => (
              <Reveal key={item.label} className="award-case-trophy-item">
                <AwardMedia label={item.label} ratio={item.ratio} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="award-case-animation">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">Digital Animation</p>
            <h2>
              {locale === "en"
                ? "From static portraits to stage-ready motion."
                : "参赛选手动效流：静态人像到动态竞技展演"}
            </h2>
          </Reveal>
          <div className="award-case-workflow">
            <Reveal>
              <AwardMedia label="e.g. 参赛嘉宾动效转换 WORK FLOW" caption="视频 / GIF 动效素材位。" ratio="ratio-video" />
            </Reveal>
            <div className="award-case-workflow-steps">
              {newPowerCopy.workflow.map(([label, text]) => (
                <Reveal key={label} className="award-case-workflow-step">
                  <span>{label}</span>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="award-case-projection-grid">
            <Reveal>
              <AwardMedia label="投屏动画展示 01 · Screen Projection Animation" ratio="ratio-projection-strip" />
            </Reveal>
            <Reveal>
              <AwardMedia label="投屏动画展示 02 · Screen Projection Animation" ratio="ratio-projection-strip" />
            </Reveal>
          </div>
          <div className="award-case-scene-grid">
            {newPowerCopy.scenePhotos.map(([label]) => (
              <Reveal key={label}>
                <AwardMedia label={label} ratio="ratio-scene" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <AwardMedia label="城市户外样机 · City Billboard Mockup" ratio="ratio-mockup-wide" />
          </Reveal>
        </section>

        <section className="award-case-numbers">
          <Reveal className="award-case-section-head">
            <p className="eyebrow">The Numbers Behind the Show</p>
            <h2>
              {locale === "en" ? "The numbers behind the show." : "数字会说话"}
            </h2>
            <p>
              {locale === "en"
                ? "From design satisfaction to traffic impact, the visual system helped turn the award into a business event with measurable reach."
                : "从「设计满意」到「流量爆发」：用克制且高级的 orthodox 电影感视听，撬动真牛奖全域商业价值的全面回响。"}
            </p>
          </Reveal>
          <div className="award-case-number-grid">
            {newPowerCopy.numbers.map(([value, label, text]) => (
              <Reveal key={label} className="award-case-number">
                <strong>{value}</strong>
                <span>{label}</span>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="award-case-reflection">
          <Reveal>
            <p className="eyebrow">Reflection · 我的思考</p>
            <h2>{locale === "en" ? "Pushing boundaries within constraints." : "在有限里推动什么"}</h2>
            <blockquote>
              {locale === "en"
                ? "This project taught me that a designer’s value is not limited to creating from scratch, but rather pushing boundaries within constraints. Working with a strict brief is not the opposite of creativity; it is the reality of the profession."
                : "这个项目教会我，设计师的价值不局限于“从零创造一切”，也可以是“在有限里推动什么”。命题作文不是创作的对立面，是真实的工作常态。设计从不是异想天开的艺术化创作，而是在严苛的商业约束与多方需求下，寻找最精确的解题方案。"}
            </blockquote>
            <p>
              This project taught me that a designer’s value is not limited to creating from scratch, but rather pushing boundaries within constraints.
            </p>
          </Reveal>
        </section>
      </div>
    </article>
  );
}

function ProjectImageBlock({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`prompt-project-image ${className}`}
      style={{ "--project-image": `url("${src}")` } as CSSProperties}
    >
      <span>{label}</span>
    </div>
  );
}

function ProjectButton({ href, children }: { href: string; children: string }) {
  return (
    <a className="prompt-project-button" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

function YachtImageFrame({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`yacht-image-frame ${className}`}
      style={{ "--yacht-image": `url("${src}")` } as CSSProperties}
    >
      <span>{label}</span>
    </div>
  );
}

function YachtPosterDetail() {
  const { locale } = useAppSettings();
  const copy = yachtPosterCopy;
  const labels = copy.labels;

  return (
    <article className={`yacht-project-detail ${locale === "zh" ? "is-zh" : "is-en"}`}>
      <div className="yacht-project-wrap">
        <div className="yacht-project-back">
          <Link className="text-link" to="/work">
            {labels.back[locale]}
          </Link>
        </div>

        <header className="yacht-project-hero">
          <Reveal className="yacht-project-hero-copy">
            <p className="eyebrow">{copy.category[locale]} / 2025</p>
            <h1>{copy.title[locale]}</h1>
            <p>{copy.summary[locale]}</p>
            <div className="yacht-project-actions">
              <ProjectButton href="https://shiwenwen666-code.github.io/yacht-poster-tool/">Live Tool</ProjectButton>
            </div>
          </Reveal>
          <Reveal className="yacht-project-hero-media">
            <YachtImageFrame src={yachtInterfaceImages[0]} label={labels.interface[locale]} className="is-interface is-hero" />
          </Reveal>
        </header>

        <section className="yacht-project-meta" aria-label={locale === "en" ? "Project meta" : "项目元信息"}>
          {[
            [labels.year[locale], "2025"],
            [labels.role[locale], locale === "en" ? "Template System Design / Frontend Prototype" : "模板系统设计 / 前端原型"],
            [labels.category[locale], copy.category[locale]],
            [labels.tools[locale], "HTML / CSS / JavaScript / Photoshop"],
          ].map(([label, value]) => (
            <Reveal key={label} className="yacht-project-meta-item">
              <span>{label}</span>
              <strong>{value}</strong>
            </Reveal>
          ))}
        </section>

        <section className="yacht-project-overview">
          <Reveal className="yacht-project-section-head">
            <p className="eyebrow">{labels.background[locale]}</p>
            <h2>{labels.overview[locale]}</h2>
          </Reveal>
          <Reveal className="yacht-project-text">
            <p>{copy.overview[locale]}</p>
          </Reveal>
          <Reveal className="yacht-project-text">
            <p className="eyebrow">{labels.why[locale]}</p>
            <p>{copy.why[locale]}</p>
          </Reveal>
        </section>

        <section className="yacht-project-interface">
          <Reveal className="yacht-project-section-head">
            <p className="eyebrow">{labels.interface[locale]}</p>
            <h2>{locale === "en" ? "Browser-based editing surface." : "网页端编辑界面。"}</h2>
          </Reveal>
          <div className="yacht-project-interface-grid">
            {yachtInterfaceImages.map((src, index) => (
              <Reveal key={src}>
                <YachtImageFrame src={src} label={`Interface 0${index + 1}`} className="is-interface" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="yacht-project-gallery">
          <Reveal className="yacht-project-section-head">
            <p className="eyebrow">{labels.posters[locale]}</p>
            <h2>{locale === "en" ? "Generated poster outputs." : "快速生成的海报成品。"}</h2>
          </Reveal>
          <div className="yacht-project-poster-grid">
            {yachtPosterImages.map((src, index) => (
              <Reveal key={src}>
                <YachtImageFrame src={src} label={`Poster 0${index + 1}`} className="is-poster" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="yacht-project-efficiency">
          <Reveal className="yacht-project-section-head">
            <p className="eyebrow">{labels.features[locale]} / {labels.outcome[locale]}</p>
            <h2>{locale === "en" ? "A lighter workflow for recurring poster requests." : "把重复排版变成可复用工具。"}</h2>
          </Reveal>
          <div className="yacht-project-feature-grid">
            <Reveal className="yacht-project-feature-card">
              <p className="eyebrow">{labels.features[locale]}</p>
              <ul>
                {copy.features[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="yacht-project-feature-card">
              <p className="eyebrow">{labels.outcome[locale]}</p>
              <p>{copy.outcome[locale]}</p>
            </Reveal>
          </div>
          <div className="yacht-project-highlights">
            {copy.highlights.map((item) => (
              <Reveal key={item} className="yacht-project-highlight">
                <strong>{item}</strong>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="yacht-project-links">
          <Reveal>
            <p className="eyebrow">{labels.links[locale]}</p>
            <h2>{locale === "en" ? "Open the tool or view the repository." : "打开工具，或查看项目仓库。"}</h2>
            <div className="yacht-project-actions">
              <ProjectButton href="https://shiwenwen666-code.github.io/yacht-poster-tool/">Live Tool</ProjectButton>
            </div>
          </Reveal>
        </section>
      </div>
    </article>
  );
}

function AlibabaSocialDetail() {
  const { locale } = useAppSettings();

  return (
    <article className={`social-case-detail ${locale === "zh" ? "is-zh" : "is-en"}`}>
      <div className="social-case-wrap">
        <div className="social-case-back">
          <Link className="text-link" to="/work">
            {locale === "en" ? "Back to Work" : "返回作品"}
          </Link>
        </div>

        <header className="social-case-hero">
          <Reveal className="social-case-kicker">
            <span>Portfolio / Cyan / 01 / Alibaba UED</span>
            <span>Case 01 / 05</span>
          </Reveal>
          <Reveal className="social-case-title-block">
            <p>{locale === "en" ? "Alibaba.com" : "阿里国际站"}</p>
            <h1>
              {locale === "en" ? (
                <>
                  <span>Social Visual</span>
                  <span>System Upgrade</span>
                </>
              ) : (
                <>
                  <span>社媒形象</span>
                  <span>统一与升级</span>
                </>
              )}
            </h1>
            <span>
              {locale === "en"
                ? "Role / UED visual design · Cycle / 8 weeks · V1 to V2"
                : "角色 / UED 视觉设计 · 周期 / 8 weeks · V1 → V2 两阶段"}
            </span>
          </Reveal>
          <Reveal className="social-case-hero-media">
            <CaseMedia
              label="联合海报 / Social account visual arc"
              caption={locale === "en" ? "Hero visual for the four-account social upgrade scope." : "用于承接小红书、公众号、视频号与海外社媒四类账号的首屏联合海报。"}
              className="is-hero"
            />
          </Reveal>
          <div className="social-case-accounts">
            {socialCaseCopy.accounts.map(([id, en, zh]) => (
              <Reveal key={id} className="social-case-account">
                <span>{id}</span>
                <strong>{locale === "en" ? en : zh}</strong>
                <small>{locale === "en" ? zh : en}</small>
              </Reveal>
            ))}
          </div>
        </header>

        <section className="social-case-achievement">
          <Reveal className="social-case-phone">
            <CaseMedia
              label="V2.0 Performance / Mobile social feed"
              caption={locale === "en" ? "Performance scene with mobile feed and verified 2025 marketing data." : "对应 Figma 中 V2.0 Performance 成果大图：手机信息流与 2025 年度市场部实测数据。"}
              className="is-phone"
            />
          </Reveal>
          <div className="social-case-achievement-copy">
            <p className="eyebrow">V2.0 Performance</p>
            <div className="social-case-metrics">
              {socialCaseCopy.metrics.map((metric) => (
                <Reveal key={metric.value} className="social-case-metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label[locale]}</span>
                  <p>{metric.detail[locale]}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <span className="social-case-watermark">Achievement</span>
        </section>

        <section className="social-case-thinking">
          <Reveal className="social-case-intro">
            <p className="eyebrow">Brand Thinking</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>V2.0 was not a sudden visual refresh.</span>
                  <span>It was built on the bottlenecks of V1.0.</span>
                </>
              ) : (
                <>
                  <span>V2.0 不是一蹴而就的，</span>
                  <span>它建立在 V1.0 的瓶颈之上。</span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal className="social-case-circles">
            {["Strategy", "Design", "Growth"].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </Reveal>
          <div className="social-case-problems">
            {socialCaseCopy.problems.map((problem, index) => (
              <Reveal key={problem.title.en} className="social-case-problem">
                <span>{index + 1}</span>
                <h3>{problem.title[locale]}</h3>
                <p>{problem.text[locale]}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="social-case-timeline">
          <Reveal className="social-case-section-head">
            <p className="eyebrow">Project Timeline</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>From diagnosis</span>
                  <span>to scalable visual production.</span>
                </>
              ) : (
                <>
                  <span>从早期诊断</span>
                  <span>到可规模化的视觉生产。</span>
                </>
              )}
            </h2>
          </Reveal>
          <div className="social-case-timeline-line">
            {socialCaseCopy.timeline.map((item) => (
              <Reveal key={item.stage} className="social-case-timeline-item">
                <span>{item.stage}</span>
                <strong>{item.title[locale]}</strong>
                <ul>
                  {item.details[locale].map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="social-case-system">
          <Reveal className="social-case-section-head">
            <p className="eyebrow">{locale === "en" ? "Visual System V1.0" : "视觉体系构建 V1.0"}</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>A repeatable social language</span>
                  <span>across covers, templates, type, and rhythm.</span>
                </>
              ) : (
                <>
                  <span>建立可复用的社媒语言，</span>
                  <span>覆盖封面、模板、字体和视觉节奏。</span>
                </>
              )}
            </h2>
          </Reveal>
          <div className="social-case-strategy-grid">
            {socialCaseCopy.strategy.map((item, index) => (
              <Reveal key={item.title.en} className="social-case-strategy-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title[locale]}</h3>
                <p>{item.text[locale]}</p>
              </Reveal>
            ))}
          </div>
          <div className="social-case-system-grid">
            {socialCaseCopy.systemMedia.map((item) => (
              <Reveal key={item.label}>
                <CaseMedia label={item.label} caption={item.caption[locale]} className={item.className} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="social-case-v1">
          <Reveal className="social-case-section-head">
            <p className="eyebrow">V1.0 Performance</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>Reshaping norms.</span>
                  <span>Elevating quality.</span>
                </>
              ) : (
                <>
                  <span>重塑规范，</span>
                  <span>质感破局。</span>
                </>
              )}
            </h2>
            <p className="social-case-section-copy">
              {locale === "en"
                ? "V1.0 deposited visual brand assets while improving production efficiency and user engagement."
                : "V1.0 实践成果：沉淀品牌视觉资产的同时，实现生产效率与用户互动的双重上涨。"}
            </p>
          </Reveal>
          <div className="social-case-v1-grid">
            {socialCaseCopy.v1Results.map((item) => (
              <Reveal key={item.value} className="social-case-v1-stat">
                <strong>{item.value}</strong>
                <span>{item.label[locale]}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="social-case-however">
          <Reveal className="social-case-section-head">
            <p className="eyebrow">However</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>V1.0 solved the rules.</span>
                  <span>It did not solve attraction.</span>
                </>
              ) : (
                <>
                  <span>V1.0 解决了规范问题，</span>
                  <span>但没解决吸引力问题。</span>
                </>
              )}
            </h2>
          </Reveal>
          <div className="social-case-problems is-v2">
            {socialCaseCopy.v2Challenges.map((problem, index) => (
              <Reveal key={problem.title.en} className="social-case-problem">
                <span>{index + 1}</span>
                <h3>{problem.title[locale]}</h3>
                <p>{problem.text[locale]}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="social-case-v2-statement">
            <p className="eyebrow">{locale === "en" ? "Visual System V2.0" : "视觉体系构建 V2.0"}</p>
            <h3>
              {locale === "en"
                ? "Break the comfort zone: the self-game of V2.0."
                : "打破舒适区：V2.0 的自我博弈。"}
            </h3>
            <blockquote>
              {locale === "en"
                ? "If I only make templates prettier, I will be replaced by another person who can draw in three months. But if I connect AI into the workflow, I become the designer who directs AI."
                : "如果我只是把模板做得更好看，3 个月后我就会被另一个会画图的人代替。但如果我把 AI 接进来，我就成了那个“指挥 AI 的设计师”。"}
            </blockquote>
          </Reveal>
        </section>

        <section className="social-case-showcase">
          <Reveal className="social-case-section-head">
            <p className="eyebrow">GIF / Animated Poster</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>Motion positions are preserved.</span>
                  <span>Original GIF files can replace these frames later.</span>
                </>
              ) : (
                <>
                  <span>动效位置已保留。</span>
                  <span>后续可用原始 GIF 文件替换。</span>
                </>
              )}
            </h2>
          </Reveal>
          <div className="social-case-output-grid">
            {socialCaseCopy.outputs.map((item) => (
              <Reveal key={item.label}>
                <CaseMedia label={item.label} caption={item.caption[locale]} className={item.className} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="social-case-compare">
          <Reveal className="social-case-section-head">
            <p className="eyebrow">Compare Table</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>From manual delivery</span>
                  <span>to automated visual assets.</span>
                </>
              ) : (
                <>
                  <span>从人工单次交付，</span>
                  <span>到自动化视觉资产沉淀。</span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal className="social-case-compare-table">
            <div className="social-case-compare-row is-head">
              <span>业务维度 / Dimensions</span>
              <span>V2.0 终局版</span>
              <span>V1.0 破局版</span>
              <span>原始版本</span>
            </div>
            {socialCaseCopy.compareRows.map((row) => (
              <div className="social-case-compare-row" key={row.dimension}>
                <strong>{row.dimension}</strong>
                <span>{row.v2}</span>
                <span>{row.v1}</span>
                <span>{row.original}</span>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="social-case-reflection">
          <Reveal>
            <p className="eyebrow">Reflection · 我的思考</p>
            <h2>
              {locale === "en" ? (
                <>
                  <span>Good design is not an isolated visual game.</span>
                  <span>It is strategy, brand armor, and a repeatable engine for growth.</span>
                </>
              ) : (
                <>
                  <span>好设计从不是孤立的视觉游戏。</span>
                  <span>它是策略的骨肉、品牌的铠甲，</span>
                  <span>也是驱动业务增长的确定性引擎。</span>
                </>
              )}
            </h2>
            <p>
              From early diagnosis to aesthetic restructuring and scalable content production,
              this case proves how a social visual system can turn fragmented content into a
              recognizable, repeatable communication method.
            </p>
          </Reveal>
        </section>
      </div>
    </article>
  );
}

function PromptGeneratorDetail() {
  const { locale } = useAppSettings();
  const project = promptProject;

  if (!project) return null;

  const tags = ["Vibe Coding", "Prompt System", "AIGC Workflow"];

  return (
    <article className="prompt-project-detail">
      <div className="prompt-project-wrap">
        <div className="prompt-project-back">
          <Link className="text-link" to="/work">
            {locale === "en" ? "Back to Work" : "返回作品"}
          </Link>
        </div>

        <header className="prompt-project-hero">
          <Reveal className={`prompt-project-hero-copy ${locale === "zh" ? "is-zh" : "is-en"}`}>
            <p className="eyebrow">{project.year ?? "2026"} / Vibe Coding / Prompt System</p>
            <h1>{project.title[locale]}</h1>
            <p>{project.subtitle[locale]}</p>
            <div className="prompt-project-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="prompt-project-actions">
              <ProjectButton href="#interface-preview">{locale === "en" ? "View Details" : "查看详情"}</ProjectButton>
            </div>
          </Reveal>

          <Reveal className="prompt-project-cover">
            <ProjectImageBlock
              src={project.coverImage}
              label={locale === "en" ? "Cover / Prompt System" : "封面 / 提示词系统"}
            />
          </Reveal>
        </header>

        <section className="prompt-project-two-column">
          <Reveal className="prompt-project-copy-card">
            <p className="eyebrow">{locale === "en" ? "Overview" : "概览"}</p>
            <p>{promptCopy.overview[locale]}</p>
          </Reveal>
          <Reveal className="prompt-project-copy-card">
            <p className="eyebrow">{locale === "en" ? "Why I Built It" : "为什么搭建它"}</p>
            <p>{promptCopy.why[locale]}</p>
          </Reveal>
        </section>

        <section className="prompt-project-section" id="interface-preview">
          <Reveal className="prompt-project-section-head">
            <p className="eyebrow">{locale === "en" ? "What It Does" : "功能结构"}</p>
            <h2>{locale === "en" ? "From prompt habits to reusable systems." : "把提示词经验变成可复用系统。"}</h2>
          </Reveal>
          <div className="prompt-project-feature-grid">
            {promptCopy.features[locale].map((feature, index) => (
              <Reveal key={feature} className="prompt-project-feature">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="prompt-project-section">
          <Reveal className="prompt-project-section-head align-right">
            <p className="eyebrow">{locale === "en" ? "Interface Preview" : "界面预览"}</p>
            <h2>{locale === "en" ? "A clean interface for repeatable prompt control." : "用于稳定控制提示词结构的工具界面。"}</h2>
          </Reveal>
          <div className="prompt-interface-grid">
            {interfaceImages.map((image, index) => (
              <Reveal key={image}>
                <ProjectImageBlock src={image} label={locale === "en" ? `Interface 0${index + 1}` : `界面 0${index + 1}`} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="prompt-project-section">
          <Reveal className="prompt-project-section-head align-right">
            <p className="eyebrow">{locale === "en" ? "Output Gallery" : "输出展示"}</p>
            <h2>{locale === "en" ? "Visual directions reserved for real generated outputs." : "为真实生成结果预留的视觉展示区。"}</h2>
          </Reveal>
          <div className="prompt-output-gallery">
            {outputImages.map((image, index) => (
              <Reveal key={image}>
                <ProjectImageBlock
                  src={image}
                  label={locale === "en" ? `Output 0${index + 1}` : `输出 0${index + 1}`}
                  className={`is-output-${index + 1}`}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section className={`prompt-project-role ${locale === "zh" ? "is-zh" : "is-en"}`}>
          <Reveal>
            <p className="eyebrow">{locale === "en" ? "Role" : "角色"}</p>
            <h3>
              {locale === "en" ? (
                promptCopy.role.en
              ) : (
                <>
                  视觉设计师 /
                  <br />
                  提示词系统设计 /
                  <br />
                  Vibe Coding 搭建者
                </>
              )}
            </h3>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{locale === "en" ? "Tools" : "工具"}</p>
            <div className="prompt-project-tool-list">
              {promptCopy.tools[locale].map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className={`prompt-project-links ${locale === "zh" ? "is-zh" : "is-en"}`}>
          <Reveal>
            <p className="eyebrow">Links</p>
            <h2>
              {locale === "en" ? (
                "Open the live tool or view the build repository."
              ) : (
                <>
                  打开在线工具进行体验，
                  <br />
                  或查看 GitHub 项目仓库
                </>
              )}
            </h2>
            <div className="prompt-project-actions">
              <ProjectButton href={project.liveUrl ?? "#"}>{locale === "en" ? "Open Live Tool" : "点击体验"}</ProjectButton>
              <ProjectButton href={project.githubUrl ?? "#"}>{locale === "en" ? "View GitHub" : "查看 GitHub"}</ProjectButton>
            </div>
          </Reveal>
        </section>

        <section className="prompt-project-next">
          <p className="eyebrow">{locale === "en" ? "Next Project" : "下一个项目"}</p>
          <h2>{locale === "en" ? "Next case study placeholder." : "下一个项目占位。"}</h2>
        </section>
      </div>
    </article>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const { locale } = useAppSettings();

  if (slug === "prompt-generator-tool") {
    return <PromptGeneratorDetail />;
  }

  if (slug === "alibaba-social-visual-system") {
    return <AlibabaSocialDetail />;
  }

  if (slug === "new-power-awards-2025") {
    return <NewPowerAwardsDetail />;
  }

  if (slug === "yacht-poster-template-system") {
    return <YachtPosterDetail />;
  }

  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  const moreWorks = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const detailLabels = {
    back: { en: "Back to Work", zh: "返回作品" },
    year: { en: "Year", zh: "年份" },
    role: { en: "Role", zh: "角色" },
    category: { en: "Category", zh: "类别" },
    tools: { en: "Tools", zh: "工具" },
    overview: { en: "Overview", zh: "概览" },
    heroVisual: { en: "Hero image placeholder / case study visual area", zh: "项目主视觉占位 / 案例展示区域" },
    narrative: [
      { en: "Challenge", zh: "挑战" },
      { en: "Process", zh: "过程" },
      { en: "Outcome", zh: "结果" },
    ],
    placeholder: {
      en: "This placeholder detail page is designed for future case studies. Add the story, constraints, process notes, and final assets here when each project is ready.",
      zh: "这里是为后续项目详情预留的占位内容。等项目素材准备好后，可以补充项目背景、限制条件、过程记录和最终成果。",
    },
    narrativePlaceholder: {
      en: "Placeholder copy for the project narrative. Replace this with specific decisions, constraints, and measurable output when real content is ready.",
      zh: "这里预留项目叙事内容。后续可以替换为具体决策、限制条件和可衡量的产出结果。",
    },
    gallery: { en: "Gallery", zh: "图像展示" },
    moreWorks: { en: "More Works", zh: "更多作品" },
  };

  return (
    <article className="page-wrap">
      <div className="mb-8">
        <Link className="text-link" to="/work">{detailLabels.back[locale]}</Link>
      </div>

      <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">{project.category[locale]} / {project.year}</p>
          <h1 className={`project-detail-title mt-4 ${locale === "zh" ? "is-zh" : "is-en"}`}>{project.title[locale]}</h1>
        </div>
        <div className="flex items-end">
          <p className="max-w-xl text-xl leading-8 text-neutral-700 dark:text-neutral-300">{project.summary[locale]}</p>
        </div>
      </header>

      <section className="meta-grid mt-10">
        <div>
          <p className="meta-label">{detailLabels.year[locale]}</p>
          <p className="meta-value">{project.year}</p>
        </div>
        <div>
          <p className="meta-label">{detailLabels.role[locale]}</p>
          <p className="meta-value">{project.role[locale]}</p>
        </div>
        <div>
          <p className="meta-label">{detailLabels.category[locale]}</p>
          <p className="meta-value">{project.category[locale]}</p>
        </div>
        <div>
          <p className="meta-label">{detailLabels.tools[locale]}</p>
          <p className="meta-value">{project.tools.join(" / ")}</p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="surface rounded-lg p-6">
          <p className="eyebrow">{detailLabels.overview[locale]}</p>
          <p className="mt-8 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            {detailLabels.placeholder[locale]}
          </p>
        </Reveal>
        <Reveal>
          <div className="project-card min-h-[560px]">
            <div className="absolute inset-0" style={{ background: project.cover }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/10 to-white/20" />
            <div className="relative z-10 flex h-full items-end p-7 text-white">
              <p className="max-w-md text-2xl font-semibold leading-tight">{detailLabels.heroVisual[locale]}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {detailLabels.narrative.map((label) => (
          <Reveal key={label.en} className="surface rounded-lg p-6">
            <p className="eyebrow">{label[locale]}</p>
            <p className="mt-10 leading-7 text-neutral-600 dark:text-neutral-400">
              {detailLabels.narrativePlaceholder[locale]}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-5 border-t border-neutral-950/10 pt-5 dark:border-white/10">
          <p className="eyebrow">{detailLabels.gallery[locale]}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {project.gallery.map((image) => (
            <Reveal key={image.en} className="surface flex aspect-[4/3] items-end rounded-lg p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">{image[locale]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-5 border-t border-neutral-950/10 pt-5 dark:border-white/10">
          <p className="eyebrow">{detailLabels.moreWorks[locale]}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {moreWorks.map((work) => (
            <ProjectCard key={work.slug} project={work} />
          ))}
        </div>
      </section>
    </article>
  );
}
