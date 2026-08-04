# CYAN LAB PORTFOLIO｜交接文档

> 更新时间：2026-08-04  
> 当前基线：本网站现状即最新版本，新对话应在此基础上继续，不要重做或回退。

## 1. 项目与预览

- 项目目录：`C:\Users\施文文\Documents\Codex\2026-06-12\ai-html-css-javascript-1-1`
- 技术：React + TypeScript + Vite
- 本地网址：`http://localhost:5173/`
- 启动：进入项目目录后执行 `pnpm run dev -- --host 127.0.0.1`
- 构建检查：`pnpm run build`
- 路由入口：`src/App.tsx`
- 页面：`src/pages/`
- 样式：`src/styles.css`
- 项目数据：`src/data/works.ts`、`src/data/featuredWorks.ts`

## 2. 必须保留

- 不改全局设计系统、Header、Footer、主题切换、语言切换和既有路由。
- 不重做已经完成的 Case，不删除用户已放入的图片、GIF、视频和 PDF。
- 修改时保留当前桌面端视觉，并兼顾响应式。
- 工作区可能包含大量未提交的用户成果；禁止 reset、checkout 或批量覆盖。

## 3. 当前已完成状态

### 首页

- Hero 原有标题、互动点阵球保留。
- Hero 背景使用用户提供的 Galaxy WebM，底色与页面衔接已完成。
- Work、Awards、About、Contact 与中英文 / Light-Dark 均保持现状。

### Case01–Case03

- Case01 Alibaba 社媒视觉、Case02 数字外贸真牛奖、Case03 AIGC 广告均已完成静态 PDF 长卷接入。
- 真牛奖 4 张 GIF 已放入对应位置。
- AIGC 广告 2 张 GIF 已放入对应位置。
- AIGC 页面两个绿色 `LIVE TOOL` 按钮已接入外部工具链接。

### Case04 审美情报局

- 保留首页 Hero 与主理人介绍，文案和中英文标签已调整。
- `06.pdf` 高清静态内容接在主理人板块之后。
- 精选案例为一排 6 张卡片，已配置公众号 / 小红书外链与封面。
- 底部平台顺序：小红书、YouTube、视频号二维码、公众号“审美创意局”二维码。
- PDF 内 GitHub Skill 区域已增加可点击跳转：`https://github.com/shiwenwen666-code/visual-dictionary`。

### Case05 商家力拍摄项目

- 已改为定制长页，年份为 2026。
- 已完成拍摄流程、英文协同、轻工业、重工业、创始人专访等图文结构。
- 图片已经接入，保留卡片 Hover 动效，不使用点击放大。

### Vibe Coding｜Prompt Generator

- 路由：`/work/prompt-generator-tool`
- 图片目录：`public/images/works/prompt-generator/outputs/`
- `1.png`：外部卡片封面和详情页 Hero。
- `2.png`、`3.png`：详情界面图；`4–9`：输出成品图。
- 详情图片支持点击放大。
- 下一个项目已链接到 Visual QA Board。

### Vibe Coding｜Visual QA Board

- 图片目录：`public/images/works/visual-qa-workbench/outputs/`
- `1–4` 用于内页，`5` 用作外部作品卡片封面。
- 项目介绍已补充批量验图、尺寸 / 比例 / 格式 / 大小、规则预设、CSV 导出、减少人工核验和零误差价值。
- 内页图片铺满展示并支持点击放大。

### Vibe Coding｜游艇海报模板系统

- 路由：`/work/yacht-poster-template-system`
- 图片目录：`public/images/works/yacht-poster/`
- `1.png`：详情页 Hero。
- `2.png`、`3.png`：网页编辑界面。
- `4.png`、`5.png`、`6.jpg`、`7.jpg`：海报成品。
- 外部作品卡片封面使用 `5.png`。
- 卡片尺寸保持原版；图片使用 `contain` 完整适配，不应再裁切内容。
- 所有图片支持点击放大、点击遮罩关闭和 `Esc` 关闭。
- 深色模式有单独背景声明，`background-size: cover, contain, cover, cover` 必须放在深色声明之后，避免被覆盖。

### Awards

- 页面已接入 20 张奖状 / 证书，按用户编号代表的奖项优先级整理。
- 图片目录：`public/images/awards/certificates/`。
- PDF 首页预览：`public/images/awards/certificates/previews/`。
- 已从证书画面整理奖项名称、等级和年份。
- 展示顺序：所有竖向证书在前，所有横向证书集中在后。
- 5、12 以及其他实际横版证书使用横向卡片和横向放大层；其余使用竖向比例。
- 支持横向自动滚动、拖拽和点击放大。

## 4. 最近修改文件

- `src/pages/ProjectDetail.tsx`
- `src/styles.css`
- `src/data/works.ts`
- `src/data/featuredWorks.ts`
- `src/data/awards.ts`
- `src/components/AwardsSection.tsx`
- `src/pages/Awards.tsx`
- Case PDF / Shooting / Aesthetic 相关组件

## 5. 新对话开始方式

先阅读本文档，再查看用户指定页面。默认沿用 `http://localhost:5173/`，只修改用户点名的局部内容。完成后运行构建检查；涉及视觉尺寸时，应在浏览器中实际查看，不能只看代码判断。
