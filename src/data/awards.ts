import type { Award, LocalizedText } from "../types";

export type AwardCard = {
  id: string;
  title: LocalizedText;
  year: string;
  image: string;
  source: string;
  category: LocalizedText;
  orientation: "portrait" | "landscape";
};

export const awards: Award[] = [];

const certificateRoot = "/images/awards/certificates";

const awardCardsByRank: AwardCard[] = [
  {
    id: "award-01",
    title: { en: "Milan Design Week China — National Finals, Second Prize", zh: "米兰设计周中国高校设计学科师生优秀作品展·全国决赛二等奖" },
    year: "2024",
    image: `${certificateRoot}/1.png`, source: `${certificateRoot}/1.png`,
    category: { en: "Second Prize", zh: "二等奖" }, orientation: "portrait",
  },
  {
    id: "award-02",
    title: { en: "Milan Design Week China — Shanghai Division, First Prize", zh: "米兰设计周中国高校设计学科师生优秀作品展·上海赛区一等奖" },
    year: "2024",
    image: `${certificateRoot}/2.png`, source: `${certificateRoot}/2.png`,
    category: { en: "First Prize", zh: "一等奖" }, orientation: "portrait",
  },
  {
    id: "award-03",
    title: { en: "Milan Design Week China — Shanghai Division, Third Prize", zh: "米兰设计周中国高校设计学科师生优秀作品展·上海赛区三等奖" },
    year: "2023",
    image: `${certificateRoot}/3.jpg`, source: `${certificateRoot}/3.jpg`,
    category: { en: "Third Prize", zh: "三等奖" }, orientation: "portrait",
  },
  {
    id: "award-04",
    title: { en: "Beautiful China Graduate Innovation Design Competition — National Third Prize", zh: "首届中国研究生“美丽中国”创新设计大赛·国赛三等奖" },
    year: "2023",
    image: `${certificateRoot}/previews/4.webp`, source: `${certificateRoot}/4.pdf`,
    category: { en: "National Third Prize", zh: "国赛三等奖" }, orientation: "portrait",
  },
  {
    id: "award-05",
    title: { en: "New Overseas Chinese Cup — First Prize", zh: "第二届“新侨杯”海派文化创意设计大赛·一等奖" },
    year: "2023",
    image: `${certificateRoot}/5.jpg`, source: `${certificateRoot}/5.jpg`,
    category: { en: "First Prize", zh: "一等奖" }, orientation: "landscape",
  },
  {
    id: "award-06",
    title: { en: "Future Designer NCDA — Shanghai Division, Third Prize", zh: "第12届未来设计师·全国高校数字艺术设计大赛·上海赛区三等奖" },
    year: "2024",
    image: `${certificateRoot}/previews/6.webp`, source: `${certificateRoot}/6.pdf`,
    category: { en: "Third Prize", zh: "三等奖" }, orientation: "portrait",
  },
  {
    id: "award-07",
    title: { en: "Future Designer NCDA — Shanghai Division, Third Prize", zh: "第11届未来设计师·全国高校数字艺术设计大赛·上海赛区三等奖" },
    year: "2023",
    image: `${certificateRoot}/previews/7.webp`, source: `${certificateRoot}/7.pdf`,
    category: { en: "Third Prize", zh: "三等奖" }, orientation: "portrait",
  },
  {
    id: "award-08",
    title: { en: "Orient Star Design Award — Shanghai Division, Silver Award", zh: "第四届东方创意之星设计大赛·上海赛区银奖" },
    year: "2023",
    image: `${certificateRoot}/previews/8.webp`, source: `${certificateRoot}/8.pdf`,
    category: { en: "Silver Award", zh: "银奖" }, orientation: "landscape",
  },
  {
    id: "award-09",
    title: { en: "Orient Star Design Award — National Finals, Excellence Award", zh: "第四届东方创意之星设计大赛·国赛总决赛优秀奖" },
    year: "2023",
    image: `${certificateRoot}/previews/9.webp`, source: `${certificateRoot}/9.pdf`,
    category: { en: "Excellence Award", zh: "优秀奖" }, orientation: "landscape",
  },
  {
    id: "award-10",
    title: { en: "Orient Star Design Award — Shanghai Division, Bronze Award", zh: "第四届东方创意之星设计大赛·上海赛区铜奖" },
    year: "2023",
    image: `${certificateRoot}/previews/10.webp`, source: `${certificateRoot}/10.pdf`,
    category: { en: "Bronze Award", zh: "铜奖" }, orientation: "landscape",
  },
  {
    id: "award-11",
    title: { en: "National Advertising Art Design Competition for College Students — Excellence Award", zh: "第15届全国大学生广告艺术大赛·优秀奖" },
    year: "2023",
    image: `${certificateRoot}/11.png`, source: `${certificateRoot}/11.png`,
    category: { en: "Excellence Award", zh: "优秀奖" }, orientation: "portrait",
  },
  {
    id: "award-12",
    title: { en: "Maoming Lychee Packaging Design Competition — Second Prize", zh: "2024年度茂名荔枝包装设计大赛·二等奖" },
    year: "2024",
    image: `${certificateRoot}/12.jpg`, source: `${certificateRoot}/12.jpg`,
    category: { en: "Second Prize", zh: "二等奖" }, orientation: "landscape",
  },
  {
    id: "award-13",
    title: { en: "Beautiful China Graduate Innovation Design Competition — National Excellence Award", zh: "首届中国研究生“美丽中国”创新设计大赛·国赛优胜奖" },
    year: "2023",
    image: `${certificateRoot}/previews/13.webp`, source: `${certificateRoot}/13.pdf`,
    category: { en: "National Excellence Award", zh: "国赛优胜奖" }, orientation: "portrait",
  },
  {
    id: "award-14",
    title: { en: "Shanghai Universities Industry Design Competition — Third Prize", zh: "2024上海市大学生工业设计大赛·三等奖" },
    year: "2024",
    image: `${certificateRoot}/14.jpg`, source: `${certificateRoot}/14.jpg`,
    category: { en: "Third Prize", zh: "三等奖" }, orientation: "portrait",
  },
  {
    id: "award-15",
    title: { en: "Orient Star Design Award — Shanghai Division, Silver Award", zh: "第五届东方创意之星创新设计大赛·上海赛区银奖" },
    year: "2024",
    image: `${certificateRoot}/previews/15.webp`, source: `${certificateRoot}/15.pdf`,
    category: { en: "Silver Award", zh: "银奖" }, orientation: "landscape",
  },
  {
    id: "award-16",
    title: { en: "Orient Star Design Award — Shanghai Division, Bronze Award", zh: "第五届东方创意之星创新设计大赛·上海赛区铜奖" },
    year: "2024",
    image: `${certificateRoot}/previews/16.webp`, source: `${certificateRoot}/16.pdf`,
    category: { en: "Bronze Award", zh: "铜奖" }, orientation: "landscape",
  },
  {
    id: "award-17",
    title: { en: "Shanghai College Student Creativity Festival — Nominee Prize", zh: "第五届大学生创意节·入围奖" },
    year: "2024",
    image: `${certificateRoot}/17.jpg`, source: `${certificateRoot}/17.jpg`,
    category: { en: "Nominee Prize", zh: "入围奖" }, orientation: "portrait",
  },
  {
    id: "award-18",
    title: { en: "National Advertising Art Design Competition for College Students — Shanghai Excellence Award", zh: "第15届全国大学生广告艺术大赛·上海赛区优秀奖" },
    year: "2023",
    image: `${certificateRoot}/18.jpg`, source: `${certificateRoot}/18.jpg`,
    category: { en: "Excellence Award", zh: "优秀奖" }, orientation: "portrait",
  },
  {
    id: "award-19",
    title: { en: "Yangtze River Delta Cybersecurity Poster Exhibition — Second Prize", zh: "2023长三角网络安全海报设计展·二等奖" },
    year: "2023",
    image: `${certificateRoot}/19.jpg`, source: `${certificateRoot}/19.jpg`,
    category: { en: "Second Prize", zh: "二等奖" }, orientation: "portrait",
  },
  {
    id: "award-20",
    title: { en: "National College Student Anti-Smuggling Creative Competition — Excellence Award", zh: "2022全国大学生反走私创作大赛·优秀奖" },
    year: "2022",
    image: `${certificateRoot}/20.jpg`, source: `${certificateRoot}/20.jpg`,
    category: { en: "Excellence Award", zh: "优秀奖" }, orientation: "portrait",
  },
];

export const awardCards: AwardCard[] = [
  ...awardCardsByRank.filter((award) => award.orientation === "portrait"),
  ...awardCardsByRank.filter((award) => award.orientation === "landscape"),
];
