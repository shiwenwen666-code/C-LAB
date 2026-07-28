import { AestheticSectionHeader } from "./AestheticSectionHeader";

export type PlatformLink = {
  name: string;
  handle: string;
  href: string;
  muted?: boolean;
};

type PlatformLinksProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  platforms: PlatformLink[];
};

export function PlatformLinks({ id, eyebrow, title, description, platforms }: PlatformLinksProps) {
  return (
    <section className="aesthetic-section aesthetic-platform-section" id={id}>
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-platform-grid">
          {platforms.map((platform) => (
            <a className={`aesthetic-platform-card ${platform.muted ? "is-muted" : ""}`} href={platform.href} key={platform.name}>
              <span>{platform.name.slice(0, 2)}</span>
              <strong>{platform.name}</strong>
              <p>{platform.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
