import { useMemo, useState } from "react";
import { experienceLogos, toolLogos, type LogoLoopItem } from "../data/logoLoop";

const LOOP_COPIES = 6;

function LogoGlyph({ item, compact = false }: { item: LogoLoopItem; compact?: boolean }) {
  const [missing, setMissing] = useState(false);

  if (missing || !item.logo) {
    return <span className={compact ? "logo-loop-fallback is-compact" : "logo-loop-fallback"} aria-hidden="true" />;
  }

  return (
    <img
      src={item.logo}
      alt=""
      className={compact ? "logo-loop-img is-compact" : "logo-loop-img"}
      loading="lazy"
      onError={() => setMissing(true)}
    />
  );
}

function LogoLoopRow({
  items,
  variant,
}: {
  items: LogoLoopItem[];
  variant: "experience" | "tools";
}) {
  const loopItems = useMemo(
    () => Array.from({ length: LOOP_COPIES }, () => items).flat(),
    [items],
  );

  return (
    <div className={`logo-loop-row is-${variant}`}>
      <div className="logo-loop-marquee">
        <div className="logo-loop-track">
          {loopItems.map((item, index) => (
            <div className="logo-loop-item" key={`${variant}-${item.name}-${index}`}>
              <LogoGlyph item={item} compact={variant === "tools"} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LogoLoopSection() {
  return (
    <section className="logo-loop-section" aria-label="Projects, experience, tools and skills">
      <LogoLoopRow items={experienceLogos} variant="experience" />
      <LogoLoopRow items={toolLogos} variant="tools" />
    </section>
  );
}