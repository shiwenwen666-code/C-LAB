import { AestheticParticles } from "./AestheticParticles";

type AestheticHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  englishName: string;
  description: string;
};

export function AestheticHero({
  badge,
  title,
  subtitle,
  englishName,
  description,
}: AestheticHeroProps) {
  return (
    <section className="aesthetic-hero">
      <AestheticParticles />
      <div className="aesthetic-hero-inner">
        <p className="aesthetic-badge">{badge}</p>
        <h1>{title}</h1>
        <p className="aesthetic-hero-subtitle">{subtitle}</p>
        {englishName ? <p className="aesthetic-hero-name">{englishName}</p> : null}
        <p className="aesthetic-hero-desc">{description}</p>
      </div>
    </section>
  );
}
