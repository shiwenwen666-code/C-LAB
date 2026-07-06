import { useAppSettings } from "../App";
import { Reveal } from "../components/Motion";
import { SectionHeader } from "../components/SectionHeader";
import { articles } from "../data/articles";

export function Articles() {
  const { locale } = useAppSettings();

  return (
    <section className="page-wrap">
      <SectionHeader kicker={{ en: "Articles", zh: "文章" }} title={{ en: "Notes, analysis, and production writing.", zh: "笔记、分析与生产写作。" }} />
      <div className="divide-y divide-neutral-950/10 border-y border-neutral-950/10 dark:divide-white/10 dark:border-white/10">
        {articles.map((article) => (
          <Reveal key={article.title.en}>
            <a href={article.externalLink} className="grid gap-5 py-8 md:grid-cols-[1fr_2fr_1fr]">
              <p className="eyebrow">{article.date}</p>
              <div>
                <h2 className="text-3xl font-semibold">{article.title[locale]}</h2>
                <p className="mt-3 text-lg leading-8 text-neutral-600 dark:text-neutral-400">{article.summary[locale]}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
                {locale === "en" ? article.language : "文章"} · {article.category[locale]}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
