import "./AestheticFeaturedCases.css";

type AestheticFeaturedCasesProps = {
  locale: "en" | "zh";
};

const featuredCases = [
  {
    type: { zh: "公众号文章", en: "WECHAT ARTICLE" },
    title: "8 部电影，正在偷偷提高你的审美",
    description: {
      zh: "从八部电影中提取值得反复观看的构图、色彩与视觉叙事。",
      en: "Eight films explored through composition, color, and visual storytelling.",
    },
    author: { zh: "审美创意局", en: "Aesthetic Creative Bureau" },
    image: "/images/works/aesthetic-intelligence-bureau/featured/eight-films-cover.jpg",
    imagePosition: "center center",
    href: "https://mp.weixin.qq.com/s/XcjzzhJtNvwynUrgl6K2cg",
    action: { zh: "阅读原文", en: "OPEN ARTICLE" },
  },
  {
    type: { zh: "公众号长文", en: "WECHAT ARTICLE" },
    title: "蓝白红三部曲｜用国旗的颜色 · 拍出整个法国灵魂",
    description: {
      zh: "从蓝、白、红三种颜色进入基耶斯洛夫斯基的影像与法国精神。",
      en: "The Three Colours trilogy explored through color, cinema, and the French spirit.",
    },
    author: { zh: "审美创意局", en: "Aesthetic Creative Bureau" },
    image: "/images/works/aesthetic-intelligence-bureau/featured/three-colours-cover-new.png",
    imagePosition: "center 36%",
    href: "https://mp.weixin.qq.com/s/OtOAnllslI0iNtESCrFe5A",
    action: { zh: "阅读原文", en: "OPEN ARTICLE" },
  },
  {
    type: { zh: "公众号图文贴", en: "WECHAT VISUAL POST" },
    title: "王虹｜我很荣幸，能成为第三位获奖的女性",
    description: {
      zh: "聚焦设计师王虹的经历、判断与持续创造的力量。",
      en: "A story about designer Wang Hong, her perspective, and the power of sustained creation.",
    },
    author: { zh: "审美创意局", en: "Aesthetic Creative Bureau" },
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Cab3wTCPpAWZW5OQpE3XDPPpgwgdLLibNgVeXtyAibeS8ibaIPqToF2a86xMibwqZZOsj6S7QV4BDE2fPPiaaydnJZia4sI66EY7KZznVa4Skzqib8/0?wx_fmt=jpeg",
    imagePosition: "center 32%",
    href: "https://mp.weixin.qq.com/s/ing7-IbiOHuayXtFEwMHXg",
    action: { zh: "阅读原文", en: "OPEN ARTICLE" },
  },
  {
    type: { zh: "小红书图文", en: "REDNOTE POST" },
    title: "小玉｜5分钟卖空的雀斑小天使，凭什么？",
    description: {
      zh: "从视觉设计与角色叙事出发，拆解国产 IP 小玉的走红逻辑。",
      en: "A visual and narrative breakdown of the Chinese character IP YUY.",
    },
    author: { zh: "审美情报局", en: "Aesthetic Intelligence Bureau" },
    image: "/images/works/aesthetic-intelligence-bureau/featured/xiaoyu-cover.png",
    imagePosition: "center 31%",
    href: "https://www.xiaohongshu.com/discovery/item/6a3cf7ea0000000011005d01?source=webshare&xhsshare=pc_web&xsec_token=AB1U6MK-ZrGlGSwEgpJkxzMNqZmorGWyCJZdFy6fYAijw=&xsec_source=pc_share",
    action: { zh: "查看图文", en: "OPEN POST" },
  },
  {
    type: { zh: "小红书图文", en: "REDNOTE POST" },
    title: "10部小众夏日电影｜冷门却发光🌊",
    description: {
      zh: "十部适合夏天观看的小众电影，收集海风、阳光与缓慢情绪。",
      en: "Ten lesser-known summer films filled with sea breeze, sunlight, and quiet emotion.",
    },
    author: { zh: "审美情报局", en: "Aesthetic Intelligence Bureau" },
    image: "/images/works/aesthetic-intelligence-bureau/featured/summer-films-cover.png",
    imagePosition: "center 25%",
    href: "https://www.xiaohongshu.com/discovery/item/6a3391c9000000000f0311d9?source=webshare&xhsshare=pc_web&xsec_token=ABS2Ru-dk3ZIpLx3EamFCrkJps0aFlKTXwYDvKRyezg5A=&xsec_source=pc_share",
    action: { zh: "查看图文", en: "OPEN POST" },
  },
  {
    type: { zh: "小红书视频", en: "REDNOTE VIDEO" },
    title: "82岁的山本耀司，为什么还在反抗“完美”？",
    description: {
      zh: "从不完美、反秩序与黑色美学中理解山本耀司的设计哲学。",
      en: "Yohji Yamamoto's philosophy explored through imperfection, resistance, and black.",
    },
    author: { zh: "审美情报局", en: "Aesthetic Intelligence Bureau" },
    image: "/images/works/aesthetic-intelligence-bureau/featured/yohji-yamamoto-cover.png",
    imagePosition: "center 18%",
    href: "https://www.xiaohongshu.com/discovery/item/6a5f432c000000000f014c29?source=webshare&xhsshare=pc_web&xsec_token=AB3T1iMKod_Wur2hR61XXnRbXUA50xS359kCo4unruAq8=&xsec_source=pc_share",
    action: { zh: "观看视频", en: "WATCH VIDEO" },
  },
];

const copy = {
  zh: {
    eyebrow: "CASE VIEW",
    title: "案例查看",
    description: "点击卡片跳转至对应的文章或视频。",
  },
  en: {
    eyebrow: "CASE VIEW",
    title: "Selected cases",
    description: "Select a card to open the corresponding article or video.",
  },
};

export function AestheticFeaturedCases({ locale }: AestheticFeaturedCasesProps) {
  const sectionCopy = copy[locale];

  return (
    <section className="aesthetic-featured-section" id="featured-cases">
      <div className="aesthetic-featured-inner">
        <div className="aesthetic-featured-heading">
          <p>{sectionCopy.eyebrow}</p>
          <h2>{sectionCopy.title}</h2>
          <span>{sectionCopy.description}</span>
        </div>
        <div className="aesthetic-featured-grid">
          {featuredCases.map((item) => (
            <a
              className="aesthetic-featured-card"
              href={item.href}
              key={item.href}
              rel="noreferrer"
              target="_blank"
            >
              <div className="aesthetic-featured-media">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: item.imagePosition }}
                />
                <span>{item.type[locale]}</span>
              </div>
              <div className="aesthetic-featured-copy">
                <p>{item.author[locale]}</p>
                <h3>{item.title}</h3>
                <span>{item.description[locale]}</span>
                <strong>{item.action[locale]} ↗</strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
