import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import { HeroContra } from "../components/HeroContra";
import { Reveal, item, stagger } from "../components/Motion";
import { practiceItems } from "../data/practice";
import { showcaseItems } from "../data/showcase";

const ease = [0.22, 1, 0.36, 1] as const;

function ContraAboutPreview() {
  const { locale } = useAppSettings();

  return (
    <section className="contra-section contra-about">
      <Reveal className="contra-section-kicker">{locale === "en" ? "About" : "关于我"}</Reveal>
      <div className="contra-about-grid">
        <Reveal>
          <h2>
            {locale === "en"
              ? "A visual designer shaping calm systems for modern creative production."
              : "用平静、清晰的系统感，组织现代创意生产。"}
          </h2>
        </Reveal>
        <Reveal className="contra-about-copy">
          <p>
            {locale === "en"
              ? "I work across commercial imagery, AI-assisted workflows, prompt systems, and lightweight creative tools."
              : "我围绕商业图像、AI 辅助工作流、提示词系统和轻量创意工具进行设计与探索。"}
          </p>
          <div className="contra-pill-row">
            {["Visual Design", "AI Workflow", "Prompt Systems", "Creative Tools"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContraWorksShowcase() {
  const { locale } = useAppSettings();
  const loopItems = [...showcaseItems, ...showcaseItems];

  return (
    <section className="contra-showcase">
      <div className="contra-showcase-heading">
        <p className="contra-section-kicker">Preview</p>
        <h2>{locale === "en" ? "Work fragments in motion." : "流动中的作品片段。"}</h2>
      </div>
      <div className="contra-marquee">
        <div className="contra-marquee-track">
          {loopItems.map((work, index) => (
            <motion.div
              key={`${work.id}-${index}`}
              className={`contra-preview contra-preview-${work.aspect}`}
              whileHover={{ y: -6, scale: 1.012 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <span
                className="contra-preview-media"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(13,15,14,0), rgba(13,15,14,0.14)), url(${work.src}), linear-gradient(135deg, #F5F3EE, #DCEDEF 46%, #111111)`,
                }}
              />
              <span className="contra-preview-label">{work.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContraPracticePreview() {
  const { locale } = useAppSettings();

  return (
    <section className="contra-section contra-practice">
      <div className="contra-practice-heading">
        <p className="contra-section-kicker">Practice</p>
        <h2>{locale === "en" ? "Methods for visual systems." : "视觉系统的方法练习。"}</h2>
        <Link to="/practice">View practice</Link>
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="contra-practice-list"
      >
        {practiceItems.slice(0, 4).map((practice, index) => (
          <motion.article key={practice.title.en} variants={item} className="contra-practice-item">
            <span>0{index + 1}</span>
            <h3>{practice.title[locale]}</h3>
            <p>{practice.summary[locale]}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export function HomeContra() {
  return (
    <motion.div
      className="contra-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      <HeroContra />
      <ContraAboutPreview />
      <ContraWorksShowcase />
      <ContraPracticePreview />
    </motion.div>
  );
}
