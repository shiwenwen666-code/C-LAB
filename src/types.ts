export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  year: string;
  category: LocalizedText;
  tags: string[];
  cover: string;
  role: LocalizedText;
  tools: string[];
  gallery: LocalizedText[];
};

export type PracticeItem = {
  title: LocalizedText;
  summary: LocalizedText;
  category: LocalizedText;
};

export type Article = {
  title: LocalizedText;
  summary: LocalizedText;
  date: string;
  category: LocalizedText;
  language: string;
  externalLink: string;
};

export type Award = {
  title: LocalizedText;
  summary: LocalizedText;
  year: string;
  category: LocalizedText;
};

export type ShowcaseItem = {
  id: string;
  title: string;
  type: "image" | "gif";
  src: string;
  aspect: "square" | "portrait" | "landscape" | "wide";
};
