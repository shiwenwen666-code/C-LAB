import { motion } from "framer-motion";
import type { CSSProperties, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import type { WorkCase } from "../data/works";

export function WorkCard({ work, index }: { work: WorkCase; index: number }) {
  const { locale } = useAppSettings();

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--grid-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--grid-y", `${event.clientY - rect.top}px`);
  }

  return (
    <motion.article
      className={`selected-work-card is-${work.size} tone-${work.tone} lang-${locale}`}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.72, delay: Math.min(index * 0.045, 0.22), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={work.href}
        className="selected-work-link"
        aria-label={`View ${work.title.en}`}
        onMouseMove={handleMove}
      >
        <div
          className="selected-work-cover"
          style={{ "--work-cover": `url("${work.coverImage}")` } as CSSProperties}
        >
          <div className="selected-work-visual-mark" aria-hidden="true">
            {work.id}
          </div>
        </div>

        <div className="selected-work-default">
          <div>
            <p>{work.category[locale]}</p>
            <h3>{work.title[locale]}</h3>
          </div>
          <span>({work.id})</span>
        </div>

        <div className="selected-work-overlay">
          <div className="selected-work-overlay-top">
            <span>{work.category[locale]}</span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="selected-work-overlay-copy">
            <h3>{work.title[locale]}</h3>
            <p className="selected-work-subtitle">{work.subtitle[locale]}</p>
            <p>{work.description[locale]}</p>
          </div>
          <span className="selected-work-cta">{locale === "en" ? "View" : "查看"}</span>
        </div>
      </Link>
    </motion.article>
  );
}
