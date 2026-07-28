type AestheticFounderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  name: string;
  role: string;
  body: string[];
  tags: string[];
};

export function AestheticFounder({ eyebrow, title, subtitle, name, role, body, tags }: AestheticFounderProps) {
  return (
    <section className="aesthetic-founder-section">
      <div className="aesthetic-founder-heading">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      <div className="aesthetic-founder-inner">
        <div className="aesthetic-founder-avatar" aria-label={name}>
          <div className="aesthetic-founder-orbit" aria-hidden="true">
            <span />
          </div>
          <div className="aesthetic-founder-photo">
            <img
              src="/images/works/aesthetic-intelligence-bureau/avatar.jpg"
              alt={name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <strong>审美<br />情报局</strong>
          </div>
        </div>
        <div className="aesthetic-founder-copy">
          <h3>{name}</h3>
          <p className="aesthetic-founder-role">{role}</p>
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="aesthetic-founder-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
