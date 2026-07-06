import { useAppSettings } from "../App";
import { Reveal } from "../components/Motion";
import { SectionHeader } from "../components/SectionHeader";
import { practiceItems } from "../data/practice";

export function Practice() {
  const { locale } = useAppSettings();

  return (
    <section className="page-wrap">
      <SectionHeader kicker={{ en: "Practice", zh: "实践" }} title={{ en: "A living lab for creative production.", zh: "一个持续生长的创意生产实验室。" }} />
      <div className="grid gap-4 md:grid-cols-2">
        {practiceItems.map((item) => (
          <Reveal key={item.title.en} className="surface rounded-lg p-6">
            <p className="eyebrow">{item.category[locale]}</p>
            <h2 className="mt-16 text-4xl font-semibold">{item.title[locale]}</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-400">{item.summary[locale]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
