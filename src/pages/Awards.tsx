import { useAppSettings } from "../App";
import { Reveal } from "../components/Motion";
import { SectionHeader } from "../components/SectionHeader";
import { awards } from "../data/awards";

export function Awards() {
  const { locale } = useAppSettings();

  return (
    <section className="page-wrap">
      <SectionHeader kicker={{ en: "Awards", zh: "奖项" }} title={{ en: "Outcomes, recognitions, and published traces.", zh: "成果、认可与发表记录。" }} />
      <div className="grid gap-4">
        {awards.map((award) => (
          <Reveal key={award.title.en} className="surface grid gap-5 rounded-lg p-6 md:grid-cols-[0.5fr_1.4fr_1fr]">
            <p className="eyebrow">{award.year}</p>
            <h2 className="text-3xl font-semibold">{award.title[locale]}</h2>
            <div>
              <p className="eyebrow">{award.category[locale]}</p>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">{award.summary[locale]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
