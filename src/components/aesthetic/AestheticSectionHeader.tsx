type AestheticSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function AestheticSectionHeader({ eyebrow, title, description }: AestheticSectionHeaderProps) {
  return (
    <div className="aesthetic-section-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </div>
  );
}
