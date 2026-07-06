import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import { site } from "../data/site";

export function Footer() {
  const { locale } = useAppSettings();

  return (
    <footer className="site-footer border-t border-neutral-950/10 px-4 py-12 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="eyebrow">{site.name}</p>
          <h2 className="mt-3 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-5xl md:leading-[1.02]">
            Stay curious,
            <br />
            become infinite.
          </h2>
        </div>
        <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
          <p>Email</p>
          <a className="text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p>{locale === "en" ? "Social links placeholder" : "社交链接占位"}</p>
          <p>{locale === "en" ? "Resume placeholder" : "简历链接占位"}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400 md:items-end">
          <Link className="text-link" to="/work">
            {locale === "en" ? "Work" : "作品"}
          </Link>
          <Link className="text-link" to="/articles">
            {locale === "en" ? "Articles" : "文章"}
          </Link>
          <p className="mt-4">© 2026 Cyan Design System</p>
        </div>
      </div>
    </footer>
  );
}
