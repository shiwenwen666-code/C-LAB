import "./AestheticPlatformLinks.css";

type AestheticPlatformLinksProps = {
  locale: "en" | "zh";
};

type PlatformKey = "rednote" | "wechat" | "youtube" | "channels";

type Platform = {
  key: PlatformKey;
  name: string;
  handle: string;
  description: string;
  href?: string;
  qr?: string;
};

const platformCopy = {
  zh: {
    eyebrow: "关注与连接",
    title: "在不同平台继续探索",
    description: "关注审美情报局的视觉研究、内容实验与创作动态。",
    visit: "访问主页",
    pending: "扫码关注",
    platforms: [
      {
        key: "rednote",
        name: "小红书",
        handle: "审美情报局",
        description: "视觉研究、知识卡片与内容实验",
        href: "https://www.xiaohongshu.com/user/profile/596f8f5d5e87e767a39b06af",
      },
      {
        key: "youtube",
        name: "YouTube",
        handle: "@CyansLab",
        description: "视频内容与创意实验",
        href: "https://www.youtube.com/@CyansLab",
      },
      {
        key: "wechat",
        name: "微信公众号",
        handle: "审美创意局",
        description: "长文、设计观察与品牌故事",
        qr: "/images/works/aesthetic-intelligence-bureau/platforms/wechat-official-account-qr.jpg",
      },
      {
        key: "channels",
        name: "微信视频号",
        handle: "审美情报局",
        description: "短视频与视觉内容更新",
        qr: "/images/works/aesthetic-intelligence-bureau/platforms/wechat-channels-qr.jpg",
      },
    ] satisfies Platform[],
  },
  en: {
    eyebrow: "FOLLOW & CONNECT",
    title: "Continue exploring across platforms",
    description: "Follow Aesthetic Intelligence Bureau for visual research, content experiments, and creative updates.",
    visit: "VISIT PROFILE",
    pending: "SCAN QR CODE",
    platforms: [
      {
        key: "rednote",
        name: "REDnote",
        handle: "Aesthetic Intelligence Bureau",
        description: "Visual research, knowledge cards, and content experiments",
        href: "https://www.xiaohongshu.com/user/profile/596f8f5d5e87e767a39b06af",
      },
      {
        key: "youtube",
        name: "YouTube",
        handle: "@CyansLab",
        description: "Video content and creative experiments",
        href: "https://www.youtube.com/@CyansLab",
      },
      {
        key: "wechat",
        name: "WeChat Official Account",
        handle: "Aesthetic Creative Bureau",
        description: "Essays, design observations, and brand stories",
        qr: "/images/works/aesthetic-intelligence-bureau/platforms/wechat-official-account-qr.jpg",
      },
      {
        key: "channels",
        name: "WeChat Channels",
        handle: "Aesthetic Intelligence Bureau",
        description: "Short videos and visual content updates",
        qr: "/images/works/aesthetic-intelligence-bureau/platforms/wechat-channels-qr.jpg",
      },
    ] satisfies Platform[],
  },
};

function PlatformLogo({ platform }: { platform: PlatformKey }) {
  if (platform === "rednote") {
    return (
      <span className="aesthetic-platform-logo is-rednote" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/xiaohongshu/FFFFFF" alt="" />
      </span>
    );
  }

  if (platform === "wechat") {
    return (
      <span className="aesthetic-platform-logo is-wechat" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/wechat/FFFFFF" alt="" />
      </span>
    );
  }

  if (platform === "youtube") {
    return (
      <span className="aesthetic-platform-logo is-youtube" aria-hidden="true">
        <img src="https://cdn.simpleicons.org/youtube/FFFFFF" alt="" />
      </span>
    );
  }

  return (
    <span className="aesthetic-platform-logo is-channels" aria-hidden="true">
      <img
        className="aesthetic-platform-logo__channels-source"
        src="/images/works/aesthetic-intelligence-bureau/platforms/wechat-channels-qr.jpg"
        alt=""
      />
    </span>
  );
}

export function AestheticPlatformLinks({ locale }: AestheticPlatformLinksProps) {
  const copy = platformCopy[locale];
  const platforms: Platform[] = copy.platforms;

  return (
    <section className="aesthetic-social-section" id="platforms">
      <div className="aesthetic-social-inner">
        <div className="aesthetic-social-heading">
          <p>{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <span>{copy.description}</span>
        </div>
        <div className="aesthetic-social-grid">
          {platforms.map((platform) => {
            const content = (
              <>
                <div className="aesthetic-social-card-top">
                  <PlatformLogo platform={platform.key} />
                  {platform.qr ? (
                    <a
                      className="aesthetic-platform-qr"
                      href={platform.qr}
                      rel="noreferrer"
                      target="_blank"
                      title={copy.pending}
                    >
                      <img src={platform.qr} alt={`${platform.name} ${copy.pending}`} />
                    </a>
                  ) : null}
                </div>
                <div className="aesthetic-social-card-copy">
                  <p>{platform.name}</p>
                  <h3>{platform.handle}</h3>
                  <span>{platform.description}</span>
                </div>
                <strong>{platform.href ? copy.visit : copy.pending}</strong>
              </>
            );

            return platform.href ? (
              <a
                className="aesthetic-social-card is-live"
                href={platform.href}
                key={platform.key}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <div className="aesthetic-social-card is-pending" key={platform.key}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
