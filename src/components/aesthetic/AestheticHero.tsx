import { AestheticParticles } from "./AestheticParticles";

type AestheticHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  englishName: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
};

export function AestheticHero({
  badge,
  title,
  subtitle,
  englishName,
  description,
  primaryAction,
  secondaryAction,
}: AestheticHeroProps) {
  return (
    <section className="aesthetic-hero">
      <AestheticParticles />
      <div className="aesthetic-hero-inner">
        <p className="aesthetic-badge">{badge}</p>
        <h1>{title}</h1>
        <p className="aesthetic-hero-subtitle">{subtitle}</p>
        <p className="aesthetic-hero-name">{englishName}</p>
        <p className="aesthetic-hero-desc">{description}</p>
        <div className="aesthetic-hero-actions">
          <a href="#visual-notes">{primaryAction}</a>
          <a href="#platforms">{secondaryAction}</a>
        </div>
      </div>
    </section>
  );
}
