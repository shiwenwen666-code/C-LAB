import { Reveal } from "../components/Motion";
import { useAppSettings } from "../App";
import { site } from "../data/site";

export function Contact() {
  const { locale } = useAppSettings();

  return (
    <section className="page-wrap">
      <Reveal className="contact-panel grid min-h-[58vh] items-end gap-8 border-x border-neutral-950/10 px-4 py-10 dark:border-white/10 md:grid-cols-[1.18fr_0.82fr] md:px-8">
        <div>
          <p className="eyebrow">{locale === "en" ? "Contact" : "联系"}</p>
          <h1 className="contact-slogan mt-4 font-semibold">
            Stay curious,
            <br />
            become infinite.
          </h1>
        </div>
        <div className="space-y-5 text-lg text-neutral-700 dark:text-neutral-300">
          <p>Email</p>
          <a className="text-link text-2xl" href={`mailto:${site.email}`}>{site.email}</a>
          <p>{locale === "en" ? "Social links placeholder" : "社交链接占位"}</p>
          <p>{locale === "en" ? "Resume placeholder" : "简历链接占位"}</p>
        </div>
      </Reveal>
    </section>
  );
}
