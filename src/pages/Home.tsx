import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import { AwardsSection } from "../components/AwardsSection";
import { AbilityCard } from "../components/AbilityCard";
import { FeaturedWorksShowcase } from "../components/FeaturedWorksShowcase";
import { HeroCountIntro } from "../components/HeroCountIntro";
import { LogoLoopSection } from "../components/LogoLoopSection";
import { OrbitWorksShowcase } from "../components/OrbitWorksShowcase";
import { VisualDustField } from "../components/VisualDustField";
import { personalAbilities, type Ability } from "../data/abilities";

const ease = [0.22, 1, 0.36, 1] as const;

const aboutPreviewCopy = {
  en: {
    label: "(About) / Personal intro",
    title: "The Evolution of a Mosquito",
    tagline: ["At ease in the studio and on factory floors,", "fluent in AI and English."],
    body: [
      "I am a visual designer working across commercial visual design, AIGC workflow building, and Vibe Coding.",
      "I enjoy creative work and can move quickly from ideas to visual execution. I am curious about new tools and new challenges, and I work well with teams to turn shared goals into real outcomes.",
      "In short, I am a hands-on builder with both ideas and execution.",
    ],
    cta: "Read more",
  },
  zh: {
    label: "（关于我）/ 个人介绍",
    title: "一只蚊子的进化论",
    tagline: ["上得了厅堂，下得了厂房，", "玩得转 AI，说得溜洋话。"],
    body: [
      "我是一名视觉设计师，关注商业视觉设计、AIGC 工作流搭建和 Vibe Coding。",
      "我擅长创意性工作，能够高效完成创意设计与视觉制作；也乐于接触新事物，喜欢迎接挑战和机会。性格积极乐观，擅长在团队协作中推进目标落地。",
      "简单来说，我是一个思想与实践并存的铁血小将。",
    ],
    cta: "了解更多",
  },
};

function splitInlineText(text: string, locale: "en" | "zh") {
  if (locale === "en") {
    return text.split(/(\s+)/).map((part) => ({
      text: part,
      isSpace: /^\s+$/.test(part),
    }));
  }

  const punctuation = /^[，。；、！？：,.?:;]$/;
  const tokens: Array<{ text: string; isSpace: boolean }> = [];

  Array.from(text).forEach((char) => {
    if (punctuation.test(char) && tokens.length > 0) {
      tokens[tokens.length - 1].text += char;
      return;
    }

    tokens.push({ text: char, isSpace: false });
  });

  return tokens;

  return text
    .split(/([，。；、,.])/)
    .filter(Boolean)
    .flatMap((part) => {
      if (/^[，。；、,.]$/.test(part)) {
        return [{ text: part, isSpace: false }];
      }

      const chunks = part.match(/./g) ?? [part];
      return chunks.map((chunk) => ({ text: chunk, isSpace: false }));
    });
}

function AboutTextToken({
  children,
  index,
  total,
  progress,
}: {
  children: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = 0.16 + (index / Math.max(total - 1, 1)) * 0.38;
  const end = start + 0.32;
  const rawY = useTransform(progress, [start, end], [64, 0]);
  const y = useSpring(rawY, { stiffness: 62, damping: 19, mass: 0.86 });
  const opacity = useTransform(progress, [start, start + 0.16], [0, 1]);
  const blur = useTransform(progress, [start, end], [10, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.span className="split-token" style={{ y, opacity, filter }}>
      {children}
    </motion.span>
  );
}

function AboutGlowText({ text, locale, progress }: { text: string; locale: "en" | "zh"; progress: MotionValue<number> }) {
  function handleMove(event: MouseEvent<HTMLParagraphElement>) {
    event.currentTarget.querySelectorAll<HTMLElement>(".split-token").forEach((token) => {
      const rect = token.getBoundingClientRect();
      token.style.setProperty("--token-mx", `${event.clientX - rect.left}px`);
      token.style.setProperty("--token-my", `${event.clientY - rect.top}px`);
    });
  }

  const tokens = splitInlineText(text, locale);
  const animatedTokenCount = tokens.filter((token) => !token.isSpace).length;
  let tokenIndex = -1;

  return (
    <p
      className={`about-glow-text ${locale === "zh" ? "is-zh" : "is-en"}`}
      onMouseMove={handleMove}
    >
      {tokens.map((token, index) => {
        if (token.isSpace) {
          return (
            <span className="split-space" key={`space-${index}`}>
              {token.text}
            </span>
          );
        }

        tokenIndex += 1;

        return (
          <AboutTextToken progress={progress} index={tokenIndex} total={animatedTokenCount} key={`${token.text}-${index}`}>
            {token.text}
          </AboutTextToken>
        );
      })}
    </p>
  );
}

function HolaLetter({ letter, index, progress }: { letter: string; index: number; progress: MotionValue<number> }) {
  const rawY = useTransform(progress, [0.02 + index * 0.055, 0.58 + index * 0.055], [-260, 0]);
  const y = useSpring(rawY, { stiffness: 72, damping: 18, mass: 0.75 });
  const opacity = useTransform(progress, [0.02 + index * 0.055, 0.34 + index * 0.055], [0, 1]);
  const blur = useTransform(progress, [0.02 + index * 0.055, 0.5 + index * 0.055], [18, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.span className="hola-letter-shell" style={{ y, opacity, filter }} transition={{ ease }}>
      <span className="hola-pressure-letter">{letter}</span>
    </motion.span>
  );
}

function HolaFloat({ progress }: { progress: MotionValue<number> }) {
  function handleMove(event: MouseEvent<HTMLHeadingElement>) {
    const letters = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(".hola-pressure-letter"));

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(event.clientX - center);
      const pressure = Math.max(0, 1 - distance / 170);
      letter.style.setProperty("--pressure", pressure.toFixed(3));
    });
  }

  function handleLeave(event: MouseEvent<HTMLHeadingElement>) {
    event.currentTarget.querySelectorAll<HTMLElement>(".hola-pressure-letter").forEach((letter) => {
      letter.style.setProperty("--pressure", "0");
    });
  }

  return (
    <h2 className="hola-float is-pressure" aria-label="HOLA!" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {"HOLA!".split("").map((letter, index) => (
        <HolaLetter key={`${letter}-${index}`} letter={letter} index={index} progress={progress} />
      ))}
    </h2>
  );
}

function ProfileSignature({ locale }: { locale: "en" | "zh" }) {
  const text = locale === "en" ? "This is Cyan speaking..." : "你好，我是施文文...";
  const chars = Array.from(text);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeoutId: number;

    function tick(nextCount: number) {
      setVisibleCount(nextCount);

      if (nextCount < chars.length) {
        timeoutId = window.setTimeout(() => tick(nextCount + 1), 95);
        return;
      }

      timeoutId = window.setTimeout(() => tick(0), 2200);
    }

    tick(0);

    return () => window.clearTimeout(timeoutId);
  }, [chars.length]);

  return (
    <motion.p
      key={locale}
      className={`profile-signature ${locale === "zh" ? "is-zh" : "is-en"}`}
      style={
        {
          "--signature-chars": text.length,
          "--signature-width": locale === "en" ? "23ch" : "12.5em",
        } as CSSProperties
      }
      initial={{ opacity: 1, y: 0 }}
      aria-label={text}
    >
      <span className="signature-type-loop" aria-hidden="true">
        {chars.map((char, index) => (
          <span
            className={`signature-char ${index < visibleCount ? "is-visible" : ""}`}
            key={`${char}-${index}`}
          >
            {char}
          </span>
        ))}
      </span>
    </motion.p>
  );
}

function AboutIntroSection() {
  const { locale } = useAppSettings();
  const copy = aboutPreviewCopy[locale];
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null);
  const [abilityOrigin, setAbilityOrigin] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 92%", "start 12%"] });
  const profileY = useSpring(useTransform(scrollYProgress, [0.1, 0.72], [168, 0]), { stiffness: 70, damping: 20, mass: 0.9 });
  const profileRotate = useSpring(useTransform(scrollYProgress, [0.1, 0.72], [12, 0]), { stiffness: 70, damping: 20, mass: 0.9 });
  const profileScale = useSpring(useTransform(scrollYProgress, [0.1, 0.72], [0.91, 1]), { stiffness: 75, damping: 20, mass: 0.85 });
  const profileOpacity = useTransform(scrollYProgress, [0.14, 0.42], [0, 1]);
  const profileBlur = useTransform(scrollYProgress, [0.14, 0.58], [12, 0]);
  const profileFilter = useTransform(profileBlur, (value) => `blur(${value}px)`);
  const copyY = useSpring(useTransform(scrollYProgress, [0.12, 0.86], [220, 0]), { stiffness: 56, damping: 19, mass: 1.05 });
  const copyOpacity = useTransform(scrollYProgress, [0.16, 0.56], [0, 1]);
  const copyBlur = useTransform(scrollYProgress, [0.16, 0.72], [18, 0]);
  const copyFilter = useTransform(copyBlur, (value) => `blur(${value}px)`);

  function handleBodyGlow(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--about-body-mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--about-body-my", `${event.clientY - rect.top}px`);
  }

  return (
    <section ref={sectionRef} className="about-intro-section">
      <div className="about-intro-grid">
        <div className="about-left">
          <HolaFloat progress={scrollYProgress} />
          <motion.div
            className="profile-card"
            style={{ y: profileY, rotateX: profileRotate, scale: profileScale, opacity: profileOpacity, filter: profileFilter }}
          >
            <div className="profile-photo" />
            <ProfileSignature locale={locale} />
          </motion.div>
        </div>

        <motion.div
          className="about-right"
          style={{ y: copyY, opacity: copyOpacity, filter: copyFilter }}
        >
          <p className="about-kicker">
            {copy.label}
          </p>
          <h2 className="about-preview-title">{copy.title}</h2>
          <p className="about-preview-tagline">
            {copy.tagline.map((line, index) => (
              <span className={index === 1 ? "is-offset" : undefined} key={line}>
                {line}
                {index === copy.tagline.length - 1 ? (
                  <span className="quote-close" aria-hidden="true">
                    ”
                  </span>
                ) : null}
              </span>
            ))}
          </p>
          <div className="about-preview-body" onMouseMove={handleBodyGlow}>
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="about-preview-link" to="/about">
            {copy.cta}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="tag-field-label"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.72, ease }}
      >
        {locale === "en" ? "Personal Tags" : "个人标签"}
      </motion.div>

      <motion.div
        className="about-tags"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.78, ease }}
      >
        {personalAbilities.map((ability) => (
          <button
            key={ability.id}
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setAbilityOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
              setSelectedAbility(ability);
            }}
            type="button"
          >
            #{ability.tag[locale]}
          </button>
        ))}
      </motion.div>
      <AbilityCard
        ability={selectedAbility}
        locale={locale}
        onClose={() => setSelectedAbility(null)}
        origin={abilityOrigin}
      />
    </section>
  );
}

export function Home() {
  const { locale, theme } = useAppSettings();
  const [isHeroStarted, setIsHeroStarted] = useState(false);
  const [isHeroIntroVisible, setIsHeroIntroVisible] = useState(true);
  const handleRevealHero = useCallback(() => setIsHeroStarted(true), []);
  const handleCompleteHeroIntro = useCallback(() => setIsHeroIntroVisible(false), []);

  return (
    <>
      <section className="stavros-home">
        {isHeroIntroVisible ? (
          <HeroCountIntro
            onRevealHero={handleRevealHero}
            onComplete={handleCompleteHeroIntro}
          />
        ) : null}

        {isHeroStarted ? (
          <>
            {theme === "dark" ? (
              <div className="stavros-galaxy-backdrop" aria-hidden="true">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/videos/home/hero-galaxy.webm" type="video/webm" />
                </video>
              </div>
            ) : null}
            <VisualDustField />

            <div className="stavros-hero-shell">
              <motion.p
                className="stavros-kicker"
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.15, ease }}
              >
                Visual Designer / AIGC Workflow Builder
              </motion.p>

              <motion.h1
                className="stavros-title"
                initial={{ opacity: 0, y: 132, filter: "blur(14px)", scale: 0.965 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.62, delay: 0.12, ease }}
              >
                PORTFOLIO
              </motion.h1>

              <motion.div
                className="stavros-copy"
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.04, delay: 0.34, ease }}
              >
                <p>
                  {locale === "en"
                    ? "I design commercial visuals, AI workflows, and creative tools."
                    : "围绕商业视觉、AI 工作流和创意工具进行设计与探索。"}
                </p>
                <span>{locale === "en" ? "Based in Hangzhou / Portfolio 2026" : "现居地 杭州 / 作品集 2026"}</span>
              </motion.div>
            </div>
          </>
        ) : null}
      </section>
      <AboutIntroSection />
      <OrbitWorksShowcase />
      <LogoLoopSection />
      <FeaturedWorksShowcase />
      <AwardsSection />
    </>
  );
}
