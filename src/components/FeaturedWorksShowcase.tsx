import { useRef, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import { featuredWorkProjects, type FeaturedWorkProject } from "../data/featuredWorks";

function FeaturedMedia({ project }: { project: FeaturedWorkProject }) {
  if (project.mediaType === "video") {
    return <video className="featured-showcase-asset" src={project.cover} autoPlay muted loop playsInline />;
  }

  return (
    <img
      className="featured-showcase-asset"
      src={project.cover}
      alt=""
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function FeaturedWorkCard({
  project,
  index,
  total,
  timelineUnits,
  stageHeight,
  progress,
}: {
  project: FeaturedWorkProject;
  index: number;
  total: number;
  timelineUnits: number;
  stageHeight: number;
  progress: MotionValue<number>;
}) {
  const { locale } = useAppSettings();
  const activeStart = index * 2;
  const enterStart = Math.max(0, activeStart - 1);
  const enterEnd = activeStart;
  const stayEnd = activeStart + 1;
  const exitEnd = activeStart + 2;
  const toProgress = (unit: number) => Math.min(1, unit / timelineUnits);
  const inputRange = index === 0
    ? [0, toProgress(stayEnd), toProgress(exitEnd)]
    : [
        toProgress(enterStart),
        toProgress(enterEnd),
        toProgress(stayEnd),
        toProgress(exitEnd),
      ];
  const yRange = index === 0
    ? [0, 0, -80]
    : [stageHeight, 0, 0, -80];
  const scaleRange = index === 0
    ? [1, 1, 0.95]
    : [0.95, 1, 1, 0.95];
  const opacityRange = index === 0
    ? [1, 1, 0.94]
    : [0, 1, 1, 0.94];

  const rawY = useTransform(progress, inputRange, yRange);
  const rawScale = useTransform(progress, inputRange, scaleRange);
  const rawOpacity = useTransform(progress, inputRange, opacityRange);
  const pointerEvents = useTransform(progress, (value) => {
    const currentUnit = value * timelineUnits;
    const visibleStart = index === 0 ? 0 : enterStart;
    const visibleEnd = exitEnd;

    return currentUnit >= visibleStart && currentUnit <= visibleEnd ? "auto" : "none";
  });
  const y = useSpring(rawY, { stiffness: 105, damping: 28, mass: 0.82 });
  const scale = useSpring(rawScale, { stiffness: 105, damping: 28, mass: 0.82 });
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 30, mass: 0.72 });
  const details = project.details[locale];

  return (
    <motion.div
      className="featured-showcase-item"
      style={{ y, scale, opacity, pointerEvents, zIndex: index + 1 } as MotionStyle}
    >
      <article className="featured-showcase-card" style={{ "--gallery-accent": project.accent } as CSSProperties}>
        <Link className="featured-showcase-link" to={project.link} aria-label={project.title[locale]}>
          <div className="featured-showcase-media" aria-hidden="true">
            <FeaturedMedia project={project} />
          </div>

          <div className="featured-showcase-content">
            <div className="featured-showcase-meta-row">
              <span>{project.meta[locale]}</span>
              <span>{project.category[locale]}</span>
            </div>
            <div className="featured-showcase-divider" />
            <div className="featured-showcase-title-row">
              <div className="featured-showcase-copy">
                <h3>{project.title[locale]}</h3>
                <p>{project.description[locale]}</p>
              </div>
              <ul className="featured-showcase-details" aria-label={locale === "en" ? "Project details" : "项目标签"}>
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </article>
    </motion.div>
  );
}

function ToolProjectCard({ project }: { project: FeaturedWorkProject }) {
  const { locale } = useAppSettings();

  return (
    <Link className="selected-tool-card" to={project.link} style={{ "--gallery-accent": project.accent } as CSSProperties}>
      <div className="selected-tool-media" aria-hidden="true">
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="selected-tool-copy">
        <span>{project.category[locale]}</span>
        <h3>{project.title[locale]}</h3>
        <p>{project.description[locale]}</p>
      </div>
    </Link>
  );
}

export function FeaturedWorksShowcase() {
  const { locale } = useAppSettings();
  const mainProjects = featuredWorkProjects.filter((project) => project.scale === "main");
  const toolProjects = featuredWorkProjects.filter((project) => project.scale === "experiment");
  const timelineUnits = Math.max(1, mainProjects.length * 2);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const [stageHeight, setStageHeight] = useState(720);
  const [scrollBounds, setScrollBounds] = useState({ start: 0, end: 1 });
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(
    scrollY,
    [scrollBounds.start, scrollBounds.end],
    [0, 1],
    { clamp: true },
  );

  useEffect(() => {
    const updateSceneMetrics = () => {
      const stickyOffset = window.innerWidth < 768 ? 64 : 72;
      const nextStageHeight = Math.max(1, window.innerHeight - stickyOffset);
      const scene = sceneRef.current;

      setStageHeight(nextStageHeight);

      if (scene) {
        const start = scene.getBoundingClientRect().top + window.scrollY - stickyOffset;
        const distance = Math.max(1, scene.offsetHeight - nextStageHeight);
        setScrollBounds({ start, end: start + distance });
      }
    };

    const frame = window.requestAnimationFrame(updateSceneMetrics);
    const resizeObserver = new ResizeObserver(updateSceneMetrics);

    if (sceneRef.current) {
      resizeObserver.observe(sceneRef.current);
    }

    window.addEventListener("load", updateSceneMetrics);
    window.addEventListener("resize", updateSceneMetrics);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("load", updateSceneMetrics);
      window.removeEventListener("resize", updateSceneMetrics);
    };
  }, []);

  return (
    <section className="selected-gallery-section" id="selected-works" aria-labelledby="selected-works-title">
      <div className="selected-gallery-head">
        <div>
          <p>{locale === "en" ? "Featured Cases" : "核心案例"}</p>
          <h2 id="selected-works-title">Featured Works</h2>
        </div>
        <span>
          {locale === "en"
            ? "Five core cases unfold as cinematic project chapters. Smaller AI tools are collected below."
            : "五个核心项目以电影式章节呈现，小型 AI 工具在下方单独收束。"}
        </span>
      </div>

      <div ref={sceneRef} className="featured-showcase-list" style={{ height: `${timelineUnits * 90}vh` }}>
        <div className="featured-showcase-stage">
          {mainProjects.map((project, index) => (
            <FeaturedWorkCard
              key={project.id}
              project={project}
              index={index}
              total={mainProjects.length}
              timelineUnits={timelineUnits}
              stageHeight={stageHeight}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      <section className="selected-tools-section" aria-labelledby="selected-tools-title">
        <div className="selected-tools-head">
          <p>AI Tools / Vibe Coding</p>
          <h2 id="selected-tools-title">AI Tools / Vibe Coding</h2>
          <span>
            {locale === "en"
              ? "Small tools and experiments that support visual production, QA, and workflow building."
              : "辅助视觉生产、验图和工作流搭建的小型工具实验，不与核心 Case 使用同一视觉等级。"}
          </span>
        </div>
        <div className="selected-tool-grid">
          {toolProjects.map((project) => (
            <ToolProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
}
