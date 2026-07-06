import { useState } from "react";
import { experienceLogos, toolLogos, type LogoLoopItem } from "../data/logoLoop";

function LogoGlyph({ item, compact = false }: { item: LogoLoopItem; compact?: boolean }) {
  const [missing, setMissing] = useState(false);
  const initials = item.name
    .split(/\s+|\.|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  if (missing) {
    return <span className={compact ? "logo-loop-fallback is-compact" : "logo-loop-fallback"}>{initials}</span>;
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
  const loopItems = [...items, ...items];

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
