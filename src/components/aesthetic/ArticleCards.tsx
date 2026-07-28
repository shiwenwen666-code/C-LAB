import { AestheticSectionHeader } from "./AestheticSectionHeader";

export type AestheticArticle = {
  title: string;
  meta: string;
  excerpt: string;
};

type ArticleCardsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  articles: AestheticArticle[];
  variant?: "compact" | "feature";
};

export function ArticleCards({ eyebrow, title, description, articles, variant = "compact" }: ArticleCardsProps) {
  return (
    <section className="aesthetic-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className={`aesthetic-article-grid is-${variant}`}>
          {articles.map((article) => (
            <article className="aesthetic-article-card" key={article.title}>
              <p>{article.meta}</p>
              <h3>{article.title}</h3>
              <span>{article.excerpt}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
