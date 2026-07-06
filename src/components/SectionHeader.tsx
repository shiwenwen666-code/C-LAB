import type { LocalizedText } from "../types";
import { useAppSettings } from "../App";
import type { ReactNode } from "react";

export function SectionHeader({
  kicker,
  title,
  action,
}: {
  kicker: string | LocalizedText;
  title: LocalizedText;
  action?: ReactNode;
}) {
  const { locale } = useAppSettings();
  const label = typeof kicker === "string" ? kicker : kicker[locale];

  return (
    <div className="mb-8 flex flex-col justify-between gap-4 border-t border-neutral-950/10 pt-5 dark:border-white/10 md:flex-row md:items-end">
      <div>
        <p className="eyebrow">{label}</p>
        <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl">{title[locale]}</h2>
      </div>
      {action}
    </div>
  );
}
