import { useAppSettings } from "../App";
import { Reveal } from "../components/Motion";
import { SectionHeader } from "../components/SectionHeader";

const aboutGrowthCopy = {
  en: `2025 to 2026 was the year I moved from being a student creator to becoming a professional designer.

In the past, I relied more on inspiration and expression. Now, I have started to understand the constraints, standards, efficiency, and delivery requirements within real business contexts. Visual design is no longer only about looking good - it needs to serve goals, adapt to scenarios, and respond to real needs.

This year, I learned to place ideas into systems and turn aesthetic judgment into executable methods. The change is still ongoing, and I am becoming a more stable and clear-minded creator.`,
  zh: `2025 到 2026，是我从学生创作者走向职业设计者的一年。

过去我更相信灵感和表达，现在开始理解真实业务中的限制、规范、效率和落地要求。视觉不再只是好看，而是要服务目标、适配场景、回应需求。

这一年，我学会把想法放进系统里，把审美转化成可执行的方法。变化还在继续，而我也正在成为更稳定、更清醒的创作者。`,
};

export function About() {
  const { locale } = useAppSettings();

  return (
    <section className="page-wrap">
      <SectionHeader
        kicker={{ en: "About", zh: "关于" }}
        title={{ en: "A designer building systems for visual production.", zh: "为视觉生产搭建系统的设计师。" }}
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="surface rounded-lg p-6">
          <p className="whitespace-pre-line text-2xl leading-10 text-neutral-800 dark:text-neutral-200">
            {aboutGrowthCopy[locale]}
          </p>
        </Reveal>
        <Reveal className="surface rounded-lg p-6">
          <p className="eyebrow">{locale === "en" ? "Focus" : "关注方向"}</p>
          <ul className="mt-8 space-y-4 text-lg text-neutral-700 dark:text-neutral-300">
            {(locale === "en"
              ? ["Commercial Visual Design", "AIGC Workflow Building", "Prompt & Image Systems", "Vibe Coding", "Harness Engineering"]
              : ["商业视觉设计", "AIGC 工作流搭建", "提示词与图像系统", "Vibe Coding", "Harness Engineering"]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
