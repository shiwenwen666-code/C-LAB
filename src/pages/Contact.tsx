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
        <div className="space-y-7 text-neutral-700 dark:text-neutral-300">
          <div className="space-y-2">
            <p className="text-sm">Email</p>
            <a className="text-link break-all text-xl md:text-2xl" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm">{locale === "en" ? "Phone / WeChat" : "电话 / 微信"}</p>
            <a className="text-link text-xl md:text-2xl" href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm">Base</p>
            <p className="text-xl text-neutral-950 dark:text-white md:text-2xl">{site.location[locale]}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
