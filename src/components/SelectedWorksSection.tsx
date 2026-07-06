import { useAppSettings } from "../App";
import { works } from "../data/works";
import { WorkCard } from "./WorkCard";

export function SelectedWorksSection() {
  const { locale } = useAppSettings();

  return (
    <section className="selected-works-section" aria-labelledby="selected-works-title">
      <div className="selected-works-head">
        <p>{locale === "en" ? "Projects / Case Studies" : "项目 / 案例研究"}</p>
        <h2 id="selected-works-title">{locale === "en" ? "Selected Works" : "精选项目"}</h2>
      </div>

      <div className="selected-works-grid">
        {works.map((work, index) => (
          <WorkCard work={work} index={index} key={work.slug} />
        ))}
      </div>
    </section>
  );
}
