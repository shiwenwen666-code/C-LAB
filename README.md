# 中文 AI 生图提示词生成器

在线体验：
https://shiwenwen666-code.github.io/Cyan-lab/

面向视觉设计师、商业视觉快速出图和本地工作流的纯前端中英双语提示词生成器。

## 🌐 在线体验

https://shiwenwen666-code.github.io/Cyan-lab/

## 这是一个什么工具

这是一个面向视觉设计师、商业视觉工作流和 AI 生图场景的本地提示词生成器。用户可以选择行业、场景、产品具象度、材质、光线、构图和尺寸，快速生成中文提示词、English Prompt 和通用生成参数。

工具完全基于本地前端规则生成，不调用 API，不上传用户输入，适合用于电商主图、社媒视觉、海报底图、品牌氛围图和类目视觉延展。

## 项目截图

> 截图待补充。建议上传页面截图到仓库后，在这里替换为图片链接。

```text
项目截图展示区域
```

## 功能特点

- 纯前端实现：HTML、CSS、JavaScript
- 不调用 API，不上传用户输入
- 支持一级行业、二级场景、三级品类联动
- 支持产品具象度、生成范围、材质、光线、镜头、风格和构图控制
- 支持中文提示词与 English Prompt 同时生成
- 支持多条提示词版本、复制中文、复制英文、复制整组
- 支持通用生成参数、目标导出尺寸和近似画幅比例
- 内置中英双语负面提示词

## 使用方法

直接双击 `index.html` 打开，或使用任意静态服务器运行。

基本流程：

1. 选择一级行业、二级场景和三级品类。
2. 选择生成范围、产品具象度、材质、光线、镜头和风格。
3. 设置画幅比例或目标导出尺寸。
4. 点击“生成提示词”。
5. 复制中文提示词、English Prompt 或整组参数到生图工具中使用。

## 本地运行

方式一：直接打开

```text
index.html
```

方式二：本地静态服务

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 项目结构

```text
.
├── index.html   # 页面结构
├── style.css    # 页面样式
├── script.js    # 交互与提示词生成逻辑
├── data.js      # 行业、场景、品类、材质和英文词库
├── README.md    # 项目说明
├── LICENSE      # 开源许可证
├── .gitignore   # Git 忽略规则
└── .nojekyll    # GitHub Pages 静态发布配置
```

## 部署

这是一个静态网页项目，可以直接部署到：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

部署目录使用项目根目录即可，入口文件为 `index.html`。

## 上传 GitHub

建议上传以下文件：

```text
index.html
style.css
script.js
data.js
README.md
LICENSE
.gitignore
.nojekyll
```

`outputs/` 和 `work/` 是本地工作目录，不需要上传。

## 隐私说明

本工具为纯前端本地规则生成，不调用 OpenAI API，不调用翻译 API，不连接后端服务，不上传用户输入。所有输入、选择和生成结果都只在当前浏览器页面中处理。

## 扩充行业数据

行业、场景、品类、材质和视觉关键词集中维护在：

```text
data.js
```

后续需要扩充行业数据时，优先修改 `data.js`。

## 版本

v1.0.0
