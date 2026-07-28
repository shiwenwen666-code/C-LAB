import type { Award, LocalizedText } from "../types";

export type AwardCard = {
  id: string;
  title: LocalizedText;
  year: string;
  image: string;
  category: LocalizedText;
};

export const awards: Award[] = [
  {
    title: { en: "Internal Workflow Innovation", zh: "内部工作流创新项目" },
    summary: { en: "Recognized for improving visual production efficiency.", zh: "因提升视觉生产效率获得内部认可。" },
    year: "2026",
    category: { en: "Internal Project", zh: "内部项目" },
  },
  {
    title: { en: "Commercial Visual Research Archive", zh: "商业视觉研究档案" },
    summary: { en: "A published archive of campaign layout and image-making studies.", zh: "商业传播版式与图像研究的发布型档案。" },
    year: "2025",
    category: { en: "Publication", zh: "发表" },
  },
  {
    title: { en: "AIGC Methods Paper", zh: "AIGC 方法论文" },
    summary: { en: "Placeholder for research output, paper, or conference material.", zh: "用于放置研究成果、论文或会议材料的占位内容。" },
    year: "2025",
    category: { en: "Research", zh: "研究" },
  },
];

export const awardCards: AwardCard[] = Array.from({ length: 20 }, (_, index) => {
  const order = String(index + 1).padStart(2, "0");

  return {
    id: `award-${order}`,
    title: {
      en: `Award / Certificate ${order}`,
      zh: `获奖证书 ${order}`,
    },
    year: String(2026 - (index % 4)),
    image: `/images/awards/award-${order}.jpg`,
    category: {
      en: index % 3 === 0 ? "Award" : index % 3 === 1 ? "Certificate" : "Recognition",
      zh: index % 3 === 0 ? "奖项" : index % 3 === 1 ? "证书" : "认可",
    },
  };
});
