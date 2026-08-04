import "./CaseFiveShootingPresentation.css";

type Locale = "en" | "zh";

type PhotoSlot = {
  id: string;
  label: { en: string; zh: string };
  ratio: string;
  className: string;
  src?: string;
  position?: string;
};

const photoSlots: PhotoSlot[] = [
  {
    id: "01",
    label: { en: "Shooting scene", zh: "拍摄现场" },
    ratio: "21:9",
    className: "is-hero",
    src: "/images/works/merchant-alliance-filming/photos/1.jpg",
    position: "center 55%",
  },
  {
    id: "02",
    label: { en: "Textile factory overview", zh: "纺织工厂全景" },
    ratio: "16:10",
    className: "is-category-wide",
    src: "/images/works/merchant-alliance-filming/photos/2.jpg",
    position: "center center",
  },
  {
    id: "03",
    label: { en: "Textile process details", zh: "纺织生产细节" },
    ratio: "1:1",
    className: "is-category-square",
    src: "/images/works/merchant-alliance-filming/photos/3.jpg",
    position: "center center",
  },
  {
    id: "04",
    label: { en: "Behind the scenes", zh: "幕后花絮" },
    ratio: "3:4",
    className: "is-portrait-one",
    src: "/images/works/merchant-alliance-filming/photos/13.jpg",
    position: "center 44%",
  },
  {
    id: "05",
    label: { en: "On-set communication", zh: "片场沟通" },
    ratio: "3:4",
    className: "is-portrait-two",
    src: "/images/works/merchant-alliance-filming/photos/14.jpg",
    position: "center 42%",
  },
  {
    id: "09",
    label: { en: "Textile workers", zh: "纺织生产现场" },
    ratio: "3:4",
    className: "is-category-tall",
    src: "/images/works/merchant-alliance-filming/photos/4.jpg",
    position: "center center",
  },
  {
    id: "10",
    label: { en: "Steel structure overview", zh: "钢铁架构全景" },
    ratio: "16:10",
    className: "is-category-wide",
    src: "/images/works/merchant-alliance-filming/photos/5.jpg",
    position: "center 60%",
  },
  {
    id: "11",
    label: { en: "English collaboration 1", zh: "英文协同沟通1" },
    ratio: "3:4",
    className: "is-chat",
    src: "/images/works/merchant-alliance-filming/photos/11.png",
    position: "center top",
  },
  {
    id: "12",
    label: { en: "English collaboration 2", zh: "英文协同沟通2" },
    ratio: "3:4",
    className: "is-chat",
    src: "/images/works/merchant-alliance-filming/photos/12.png",
    position: "center top",
  },
  {
    id: "13",
    label: { en: "Steel workshop details", zh: "钢构车间细节" },
    ratio: "1:1",
    className: "is-category-square",
    src: "/images/works/merchant-alliance-filming/photos/6.jpg",
    position: "center center",
  },
  {
    id: "14",
    label: { en: "Heavy industry scene", zh: "重工业生产现场" },
    ratio: "3:4",
    className: "is-category-tall",
    src: "/images/works/merchant-alliance-filming/photos/7.jpg",
    position: "center 58%",
  },
  {
    id: "15",
    label: { en: "Founder interview scene 1", zh: "创始人专访现场1" },
    ratio: "16:10",
    className: "is-category-wide",
    src: "/images/works/merchant-alliance-filming/photos/8.jpg",
    position: "center 56%",
  },
  {
    id: "16",
    label: { en: "Founder interview scene 2", zh: "创始人专访现场2" },
    ratio: "1:1",
    className: "is-category-square",
    src: "/images/works/merchant-alliance-filming/photos/9.jpg",
    position: "center 56%",
  },
];

const copy = {
  zh: {
    eyebrow: "CASE 05 / 拍摄统筹 / 2026",
    title: "商家力拍摄项目",
    intro: "面向商家内容生产的中英双语对接、片场协作与视觉交付。",
    role: "拍摄统筹",
    collaboration: "双语协作",
    sectionOne: "工厂拍摄监制：从需求到成片落地",
    sectionOneEn: "CGS FACTORY SHOOTING SUPERVISION",
    sectionOneBody: "参与商家能力宣传视频项目，负责从需求沟通、拍摄方案确认到现场执行与素材审核的协同管理，确保拍摄任务完成并按时交付。",
    sectionTwo: "跨语言协作：连接不同团队的信息桥梁",
    sectionTwoEn: "BILINGUAL COLLABORATION",
    sectionTwoBody: "与海外及本地团队进行双语沟通，减少信息差异，推动需求、现场执行与反馈流程准确落地。",
    factoryTitle: "工厂环境与拍摄现场",
    factoryTitleEn: "FACTORY ENVIRONMENTS",
    factoryBody: "从轻工业生产线到重工业钢铁架构，再到企业创始人专访，以不同尺度的现场影像记录真实商业生产环境。",
    factoryQuote: "上得了厅堂，下得了工厂；玩得转AI，说得溜洋话",
    textile: "轻工业 · 纺织业",
    steel: "重工业 · 钢铁架构",
    founder: "企业创始人专访",
    sectionThree: "超越设计执行，推动项目落地",
    sectionThreeEn: "BEYOND DESIGN EXECUTION",
    sectionThreeBody: "把设计判断延伸到沟通、统筹与现场执行，在真实生产环境中建立更完整的项目能力。",
  },
  en: {
    eyebrow: "CASE 05 / PRODUCTION / 2026",
    title: "Merchant Alliance Filming Project",
    intro: "Bilingual coordination, on-set production support, and visual delivery for merchant content.",
    role: "Production Coordination",
    collaboration: "Bilingual Collaboration",
    sectionOne: "From brief to final delivery",
    sectionOneEn: "CGS FACTORY SHOOTING SUPERVISION",
    sectionOneBody: "Participated in a merchant capability promotion video project, coordinating production requirements, shooting plans, on-set execution, and material review to support timely delivery.",
    sectionTwo: "Connecting teams across languages",
    sectionTwoEn: "BILINGUAL COLLABORATION",
    sectionTwoBody: "Coordinated bilingual communication between local and overseas teams, reducing information gaps across requirements, production, and feedback.",
    factoryTitle: "Factory environments and production scenes",
    factoryTitleEn: "FACTORY ENVIRONMENTS",
    factoryBody: "Documenting real commercial production environments across textile manufacturing, heavy steel structures, and founder interviews.",
    factoryQuote: "From the boardroom to the factory floor; fluent in AI and fluent across languages.",
    textile: "Light industry · Textiles",
    steel: "Heavy industry · Steel structures",
    founder: "Founder interviews",
    sectionThree: "Moving beyond visual execution",
    sectionThreeEn: "BEYOND DESIGN EXECUTION",
    sectionThreeBody: "Extended design judgment into communication, coordination, and on-set execution to build a more complete production practice.",
  },
};

const processSteps = {
  zh: ["需求沟通", "拍摄方案确认", "现场执行监制", "素材审核", "后期反馈优化"],
  en: ["Brief alignment", "Shooting plan", "On-set supervision", "Material review", "Post feedback"],
};

type ProcessIconName = "brief" | "plan" | "camera" | "review" | "feedback" | "execute";

function ProcessIcon({ name }: { name: ProcessIconName }) {
  const paths: Record<ProcessIconName, React.ReactNode> = {
    brief: (
      <>
        <path d="M5 6.5h14v10H9l-4 3v-13Z" />
        <path d="M8.5 10h7M8.5 13h4.5" />
      </>
    ),
    plan: (
      <>
        <rect x="4.5" y="6" width="15" height="14" rx="2" />
        <path d="M8 3.5V8M16 3.5V8M4.5 10h15M8 14h3M8 17h6" />
      </>
    ),
    camera: (
      <>
        <rect x="3.5" y="7" width="12.5" height="11" rx="2" />
        <path d="m16 11 4.5-2.5v8L16 14M7 7l1.2-2h3.6L13 7" />
      </>
    ),
    review: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8 12.2 2.6 2.6 5.7-6" />
      </>
    ),
    feedback: (
      <>
        <path d="M7 8H4V5M4.5 8A8 8 0 1 1 5 17" />
        <path d="M8 12h8M8 15h5" />
      </>
    ),
    execute: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.5 12 2.2 2.2L16 9M12 3.5V1.8M20.5 12h1.7" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function PhotoPlaceholder({
  photo,
  locale,
}: {
  photo: PhotoSlot;
  locale: Locale;
}) {
  return (
    <div
      className={`case-five-photo ${photo.className}`}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.label[locale]}
          style={{ objectPosition: photo.position ?? "center center" }}
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      ) : null}
      <span className="case-five-photo__grid" aria-hidden="true" />
      <span className="case-five-photo__label">{photo.label[locale]}</span>
    </div>
  );
}

export function CaseFiveShootingPresentation({ locale }: { locale: Locale }) {
  const text = copy[locale];

  const findPhoto = (id: string) => photoSlots.find((photo) => photo.id === id)!;
  const processIcons: ProcessIconName[] = ["brief", "plan", "camera", "review", "feedback"];

  return (
    <article className="case-five">
      <main className="case-five-content">
        <section className="case-five-section case-five-section--intro">
          <div className="case-five-section__heading">
            <p className="case-five-section__eyebrow">{text.eyebrow}</p>
            <h2 className="is-two-line">
              <span>CGS FACTORY</span>
              <span>SHOOTING SUPERVISION</span>
            </h2>
            <h3>{text.sectionOne}</h3>
          </div>
          <p className="case-five-section__body case-five-section__body--split">
            {locale === "zh" ? (
              <>
                <span>参与商家能力宣传视频项目，负责从需求沟通、拍摄方案确认到现场执行与素材审核的协同管理，</span>
                <span>确保拍摄任务完成并按时交付。</span>
              </>
            ) : (
              <>
                <span>Participated in a merchant capability promotion video project, coordinating production requirements, shooting plans, on-set execution, and material review.</span>
                <span>Ensured smooth project execution and timely delivery.</span>
              </>
            )}
          </p>
          <PhotoPlaceholder photo={findPhoto("01")} locale={locale} />
          <ol className="case-five-process">
            {processSteps[locale].map((step, index) => (
              <li key={step}>
                <div className="case-five-process__icon">
                  <ProcessIcon name={processIcons[index]} />
                </div>
                <div className="case-five-process__caption">
                  <strong>{step}</strong>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-five-section case-five-section--factory">
          <div className="case-five-section__heading">
            <h2 className="is-two-line">
              <span>FACTORY</span>
              <span>ENVIRONMENTS</span>
            </h2>
            <h3>{text.factoryTitle}</h3>
            <p>{text.factoryBody}</p>
          </div>
          <blockquote className="case-five-factory-quote">
            {locale === "zh" ? (
              <>
                <span>上得了厅堂，下得了工厂；</span>
                <span>玩得转AI，说得溜洋话</span>
              </>
            ) : (
              <>
                <span>From the boardroom to the factory floor;</span>
                <span>fluent in AI and fluent across languages.</span>
              </>
            )}
          </blockquote>

          <div className="case-five-factory-category">
            <div className="case-five-factory-category__heading">
              <span>01 / LIGHT INDUSTRY</span>
              <h3>{text.textile}</h3>
            </div>
            <div className="case-five-factory-category__grid">
              {["02", "03", "09"].map((id) => (
                <PhotoPlaceholder key={id} photo={findPhoto(id)} locale={locale} />
              ))}
            </div>
          </div>

          <div className="case-five-factory-category">
            <div className="case-five-factory-category__heading">
              <span>02 / HEAVY INDUSTRY</span>
              <h3>{text.steel}</h3>
            </div>
            <div className="case-five-factory-category__grid">
              {["10", "13", "14"].map((id) => (
                <PhotoPlaceholder key={id} photo={findPhoto(id)} locale={locale} />
              ))}
            </div>
          </div>

          <div className="case-five-factory-category is-founder">
            <div className="case-five-factory-category__heading">
              <span>03 / FOUNDER INTERVIEW</span>
              <h3>{text.founder}</h3>
            </div>
            <div className="case-five-factory-category__grid">
              {["15", "16"].map((id) => (
                <PhotoPlaceholder key={id} photo={findPhoto(id)} locale={locale} />
              ))}
            </div>
            <p className="case-five-founder-note">
              {locale === "zh" ? "真实人物 · 真实产业 · 真实故事 / 2026" : "REAL PEOPLE · REAL INDUSTRY · REAL STORIES / 2026"}
            </p>
          </div>
        </section>

        <section className="case-five-section case-five-section--collaboration">
          <div className="case-five-section__heading">
            <h2>{text.sectionTwoEn}</h2>
            <h3>{text.sectionTwo}</h3>
            <p>{text.sectionTwoBody}</p>
          </div>
          <div className="case-five-chat-grid">
            {["11", "12"].map((id) => (
              <PhotoPlaceholder key={id} photo={findPhoto(id)} locale={locale} />
            ))}
          </div>
          <div className="case-five-mini-flow" aria-label={text.sectionTwo}>
            <div className="case-five-mini-flow__step">
              <ProcessIcon name="brief" />
              <div className="case-five-mini-flow__caption">
                <strong>{locale === "zh" ? "英文沟通" : "English brief"}</strong>
              </div>
            </div>
            <i>→</i>
            <div className="case-five-mini-flow__step">
              <ProcessIcon name="execute" />
              <div className="case-five-mini-flow__caption">
                <strong>{locale === "zh" ? "项目执行" : "Execution"}</strong>
              </div>
            </div>
            <i>→</i>
            <div className="case-five-mini-flow__step">
              <ProcessIcon name="feedback" />
              <div className="case-five-mini-flow__caption">
                <strong>{locale === "zh" ? "反馈优化" : "Feedback"}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="case-five-section case-five-section--value">
          <div className="case-five-section__heading">
            <h2>{text.sectionThreeEn}</h2>
            <h3>{text.sectionThree}</h3>
            <p>{text.sectionThreeBody}</p>
          </div>
          <div className="case-five-value-notes">
            <div>
              <span>01</span>
              <strong>{locale === "zh" ? "为团队带来的价值" : "Value for the team"}</strong>
              <p>{locale === "zh" ? "降低跨语言沟通成本，让拍摄需求在现场准确执行。" : "Reduced communication friction and supported accurate on-set execution."}</p>
            </div>
            <div>
              <span>02</span>
              <strong>{locale === "zh" ? "对个人成长的意义" : "Personal growth"}</strong>
              <p>{locale === "zh" ? "从视觉设计延伸至沟通、统筹与生产协作。" : "Expanded visual practice into communication, coordination, and production."}</p>
            </div>
          </div>
          <PhotoPlaceholder photo={findPhoto("04")} locale={locale} />
          <PhotoPlaceholder photo={findPhoto("05")} locale={locale} />
        </section>

      </main>

    </article>
  );
}
