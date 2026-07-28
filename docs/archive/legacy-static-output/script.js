const commonOptions = {
  scopes: ["通用行业氛围", "场景导向", "品类导向"],
  concreteness: ["极致氛围", "远景弱相关", "抽象氛围", "轻度暗示", "明确产品"],
  lighting: ["柔和自然光", "清晨侧光", "高端棚拍布光", "明亮均匀光", "低调氛围光", "暖色节日灯光", "冷白科技光"],
  lens: ["正面平视镜头", "45 度俯拍镜头", "近景特写镜头", "广角空间镜头", "浅景深产品镜头", "低角度仰拍镜头"],
  styleTone: ["现代简洁", "高级商业摄影", "温暖生活方式", "极简留白", "科技感", "轻奢质感", "节日氛围", "医疗级洁净感"],
  composition: ["主体居左", "主体居中", "主体居右", "三分法构图", "居中对称构图", "偏移构图"],
  ratios: ["1:1", "2:3", "3:2", "4:5", "5:4", "16:9", "9:16", "21:9", "自定义尺寸"],
  batchSizes: ["1 张", "2 张", "3 张", "4 张"],
  promptCounts: ["1 条", "2 条", "3 条"]
};

const englishOptionTerms = {
  "通用行业氛围": "general industry atmosphere",
  "场景导向": "scene-driven",
  "品类导向": "category-driven",
  "极致氛围": "pure atmosphere",
  "远景弱相关": "distant weak relevance",
  "抽象氛围": "abstract atmosphere",
  "轻度暗示": "subtle product suggestion",
  "明确产品": "clear product focus",
  "柔和自然光": "soft natural light",
  "清晨侧光": "morning side light",
  "高端棚拍布光": "premium studio lighting",
  "明亮均匀光": "bright even lighting",
  "低调氛围光": "low-key atmospheric lighting",
  "暖色节日灯光": "warm festive lighting",
  "冷白科技光": "cool white technology lighting",
  "正面平视镜头": "front-facing eye-level camera angle",
  "45 度俯拍镜头": "45-degree overhead product angle",
  "近景特写镜头": "close-up detail shot",
  "广角空间镜头": "wide-angle spatial shot",
  "浅景深产品镜头": "shallow-depth-of-field product shot",
  "低角度仰拍镜头": "low-angle hero shot",
  "现代简洁": "modern minimal style",
  "高级商业摄影": "premium commercial photography",
  "温暖生活方式": "warm lifestyle photography",
  "极简留白": "minimal negative-space composition",
  "科技感": "clean technology aesthetic",
  "轻奢质感": "quiet luxury visual tone",
  "节日氛围": "festive visual atmosphere",
  "医疗级洁净感": "medical-grade clean aesthetic"
};

const compositionText = {
  "主体居左": {
    zh: "主体物位于画面左侧，右侧留出适当空间，构图平衡，视觉重点明确。",
    en: "The main subject is positioned on the left side of the frame, leaving clean negative space on the right for layout flexibility."
  },
  "主体居中": {
    zh: "主体物位于画面中央，构图稳定集中，视觉焦点明确。",
    en: "The main subject is centered in the frame, creating a stable composition with a clear visual focus."
  },
  "主体居右": {
    zh: "主体物位于画面右侧，左侧保留留白，画面节奏干净利落。",
    en: "The main subject is positioned on the right side of the frame, with refined negative space on the left and a clean visual rhythm."
  },
  "三分法构图": {
    zh: "主体沿三分法视觉线布局，画面层次自然，留白和辅助元素形成稳定引导。",
    en: "The subject follows a rule-of-thirds layout, with natural depth, balanced negative space, and subtle supporting elements."
  },
  "居中对称构图": {
    zh: "采用居中对称构图，左右视觉重量均衡，适合形成高级、稳定、正式的商业画面。",
    en: "Use a centered symmetrical composition with balanced visual weight on both sides, creating a premium and formal commercial image."
  },
  "偏移构图": {
    zh: "主体略微偏离画面中心，形成更自然的视觉动线，同时保持商业画面的整洁和秩序。",
    en: "Place the subject slightly off-center to create a natural visual flow while keeping the commercial layout clean and organized."
  }
};

const categoryDetails = {
  "派对餐具": {
    zh: "明确呈现餐盘、纸杯、刀叉、餐巾等派对餐具组合，强调套装完整度和节日桌面陈列效果",
    en: "clearly show plates, paper cups, cutlery, napkins, and a coordinated party tableware set with a complete festive tabletop display"
  },
  "气球装饰": {
    zh: "突出气球拱门、气球束和背景墙层次，形成完整派对布置视觉",
    en: "feature balloon arches, balloon clusters, and layered backdrop decor for a complete party setup"
  },
  "智能门锁": {
    zh: "突出门锁面板、指纹识别区域和安装在玄关门体上的真实使用状态",
    en: "highlight the lock panel, fingerprint area, and realistic installation on an entry door"
  },
  "精华液": {
    zh: "突出瓶身、滴管、透明液体质感和护肤仪式感",
    en: "highlight the bottle, dropper, transparent serum texture, and skincare ritual mood"
  },
  "拉杆箱": {
    zh: "突出箱体轮廓、拉杆、滚轮和旅行场景中的耐用质感",
    en: "highlight the suitcase shell, handle, wheels, and durable travel-ready finish"
  }
};

const negativePrompts = {
  zh: "低清晰度，模糊，畸形，脏乱背景，过度曝光，过度锐化，廉价质感，杂乱构图，多余文字，水印，logo，人物畸变，产品变形，材质不真实，人物，儿童，婴儿，成人，手部，手指，肢体，面部，皮肤，人体局部，人物剪影，人物互动",
  en: "low resolution, blurry, distorted objects, messy background, overexposed, oversharpened, cheap texture, cluttered composition, unwanted text, watermark, logo, deformed people, distorted product, unrealistic materials, people, child, baby, adult, hands, fingers, limbs, face, skin, body parts, human silhouette, human interaction"
};

const noPeopleConstraint = {
  zh: "画面中不出现人物，不出现手部、手指、肢体、面部、皮肤、人体局部或人物剪影，不包含任何真人互动元素，主体仅由空间、材质、光影、抽象形态与陈列关系构成。",
  en: "No people should appear in the image. Do not include hands, fingers, limbs, faces, skin, body parts, or human silhouettes. The scene should contain no human interaction elements, and should be constructed only through space, materials, lighting, abstract forms, and display relationships."
};

const zhVariation = {
  openers: [
    "生成一张适合商业视觉设计使用的 AI 生图画面",
    "创作一张面向品牌视觉和快速出图场景的商业级 AI 画面",
    "输出一张可用于电商、社媒和品牌延展的高质量商业视觉"
  ],
  atmosphere: [
    "整体画面干净克制，视觉层次清晰，具备真实摄影质感",
    "画面需要兼顾设计感与可落地性，信息组织清楚，细节可信",
    "整体呈现成熟商业广告质感，背景不喧宾夺主，主体识别度高"
  ],
  commercial: [
    "适合电商、社媒、海报和品牌视觉延展",
    "便于后续叠加标题、卖点文案和促销信息",
    "适合作为通用商业素材底图，便于后续延展为不同视觉物料"
  ]
};

const enVariation = {
  openers: [
    "Create an AI image suitable for commercial visual design",
    "Generate a premium AI image for fast commercial visual production",
    "Produce a polished brand-ready image for ecommerce, social media, and campaign visuals"
  ],
  atmosphere: [
    "The image should feel clean, controlled, and realistic, with clear visual hierarchy.",
    "Balance strong design taste with practical commercial usability, keeping the scene readable and credible.",
    "Aim for mature commercial photography quality, with a refined background and a clearly recognizable subject."
  ],
  commercial: [
    "Suitable for e-commerce, social media, posters, and brand visual extensions.",
    "Leave enough flexibility for headline typography, selling points, and campaign copy.",
    "Suitable as a versatile commercial visual background and adaptable commercial asset."
  ]
};

let expressionSeed = 0;
let currentPrompts = [];

const elements = {
  primaryIndustry: document.querySelector("#primaryIndustry"),
  secondaryScene: document.querySelector("#secondaryScene"),
  tertiaryCategory: document.querySelector("#tertiaryCategory"),
  generationScope: document.querySelector("#generationScope"),
  productConcreteness: document.querySelector("#productConcreteness"),
  lighting: document.querySelector("#lighting"),
  materials: document.querySelector("#materials"),
  lens: document.querySelector("#lens"),
  styleTone: document.querySelector("#styleTone"),
  composition: document.querySelector("#composition"),
  batchSize: document.querySelector("#batchSize"),
  promptCount: document.querySelector("#promptCount"),
  ratioGroup: document.querySelector("#ratioGroup"),
  customWidth: document.querySelector("#customWidth"),
  customHeight: document.querySelector("#customHeight"),
  extraKeywords: document.querySelector("#extraKeywords"),
  promptList: document.querySelector("#promptList"),
  batchInfo: document.querySelector("#batchInfo"),
  copyStatus: document.querySelector("#copyStatus"),
  negativeZhOutput: document.querySelector("#negativeZhOutput"),
  negativeEnOutput: document.querySelector("#negativeEnOutput")
};

function fillSelect(select, options) {
  select.innerHTML = "";
  options.forEach((option) => {
    const node = document.createElement("option");
    node.value = option;
    node.textContent = option;
    select.appendChild(node);
  });
}

function init() {
  fillSelect(elements.primaryIndustry, Object.keys(industryData));
  fillSelect(elements.generationScope, commonOptions.scopes);
  fillSelect(elements.productConcreteness, commonOptions.concreteness);
  fillSelect(elements.lighting, commonOptions.lighting);
  fillSelect(elements.lens, commonOptions.lens);
  fillSelect(elements.styleTone, commonOptions.styleTone);
  fillSelect(elements.composition, commonOptions.composition);
  fillSelect(elements.batchSize, commonOptions.batchSizes);
  fillSelect(elements.promptCount, commonOptions.promptCounts);

  commonOptions.ratios.forEach((ratio, index) => {
    const label = document.createElement("label");
    label.className = "ratio-option";
    label.innerHTML = `
      <input type="radio" name="ratio" value="${ratio}" ${index === 0 ? "checked" : ""}>
      <span>${ratio}</span>
    `;
    elements.ratioGroup.appendChild(label);
  });

  elements.negativeZhOutput.value = negativePrompts.zh;
  elements.negativeEnOutput.value = negativePrompts.en;
  updateIndustryFields();
  bindEvents();
  generatePrompts();
}

function bindEvents() {
  elements.primaryIndustry.addEventListener("change", () => {
    updateIndustryFields();
    generatePrompts();
  });

  elements.secondaryScene.addEventListener("change", () => {
    updateSceneFields();
    generatePrompts();
  });
  elements.tertiaryCategory.addEventListener("change", syncScopeWithCategory);
  elements.generationScope.addEventListener("change", () => {
    applyDefaultConcreteness();
  });
  document.querySelector("#generateBtn").addEventListener("click", () => generatePrompts());
  document.querySelector("#shuffleBtn").addEventListener("click", () => {
    expressionSeed += 7;
    generatePrompts();
  });
  document.querySelector("#resetBtn").addEventListener("click", resetForm);
  document.querySelector("#copyNegativeZhBtn").addEventListener("click", () => copyText(elements.negativeZhOutput.value, "中文负面词已复制"));
  document.querySelector("#copyNegativeEnBtn").addEventListener("click", () => copyText(elements.negativeEnOutput.value, "English negative copied"));

  [elements.customWidth, elements.customHeight].forEach((input) => {
    input.addEventListener("input", () => {
      const customRadio = document.querySelector("input[name='ratio'][value='自定义尺寸']");
      if (customRadio) customRadio.checked = true;
    });
  });

  elements.ratioGroup.addEventListener("change", () => {
    const ratio = getSelectedRatio();
    if (!isCustomSizeRatio(ratio)) {
      elements.customWidth.value = "";
      elements.customHeight.value = "";
    }
  });
}

function updateIndustryFields() {
  const data = industryData[elements.primaryIndustry.value];
  fillSelect(elements.secondaryScene, Object.keys(data.scenes));
  updateSceneFields();
}

function getCurrentSceneData() {
  const data = industryData[elements.primaryIndustry.value];
  return data.scenes[elements.secondaryScene.value] || Object.values(data.scenes)[0];
}

function updateSceneFields() {
  const sceneData = getCurrentSceneData();
  fillSelect(elements.tertiaryCategory, sceneData.categories);
  fillSelect(elements.materials, sceneData.materials);

  Array.from(elements.materials.options).slice(0, 2).forEach((option) => {
    option.selected = true;
  });

  syncScopeWithCategory();
}

function syncScopeWithCategory() {
  if (isGeneralCategory(elements.tertiaryCategory.value)) {
    elements.generationScope.value = "通用行业氛围";
  }
  applyDefaultConcreteness();
}

function applyDefaultConcreteness() {
  const defaults = {
    "通用行业氛围": "极致氛围",
    "场景导向": "轻度暗示",
    "品类导向": "明确产品"
  };
  elements.productConcreteness.value = defaults[elements.generationScope.value] || "轻度暗示";
}

function getSelectedMaterials() {
  return Array.from(elements.materials.selectedOptions).map((option) => option.value);
}

function getPromptCount() {
  return Number.parseInt(elements.promptCount.value, 10) || 1;
}

function getBatchNumber() {
  return Number.parseInt(elements.batchSize.value, 10) || 1;
}

function getSelectedRatio() {
  const selected = document.querySelector("input[name='ratio']:checked");
  return selected ? selected.value : "";
}

function isCustomSizeRatio(ratio) {
  return ratio === "自定义尺寸" || ratio === "自定义比例";
}

function isGeneralCategory(category) {
  return !category || category === "不限定具体品类 / 通用行业氛围" || category === "不限定具体品类 / 通用场景氛围";
}

function isGenericMode(category, scope) {
  return isGeneralCategory(category) || scope === "通用行业氛围";
}

function isPureAtmosphere(concreteness) {
  return concreteness === "极致氛围";
}

function isDistantWeak(concreteness) {
  return concreteness === "远景弱相关";
}

function isAbstractMode(category, scope, concreteness) {
  return concreteness === "抽象氛围";
}

function isHintMode(concreteness) {
  return concreteness === "轻度暗示";
}

function shouldAvoidCategoryLead(category, scope, concreteness) {
  return isGenericMode(category, scope) || isPureAtmosphere(concreteness) || isDistantWeak(concreteness);
}

function en(term) {
  return englishTerms[term] || englishOptionTerms[term] || "selected visual element";
}

function getDisplayIndustryName(industry) {
  return industry === "母婴用品" ? "育儿护理用品" : industry;
}

function pick(list, seed) {
  return list[Math.abs(seed) % list.length];
}

function pickMany(list, count, seed) {
  const source = [...list];
  const result = [];
  for (let i = 0; i < count && source.length; i += 1) {
    const index = Math.abs(seed + i * 3) % source.length;
    result.push(source.splice(index, 1)[0]);
  }
  return result;
}

function getAbstractCues(data, seed) {
  const fallback = [
    "柔和渐变背景",
    "抽象陈列关系",
    "局部轮廓",
    "空间留白",
    "材质高光",
    "色彩层次",
    "品牌氛围",
    "低对比阴影"
  ];
  return pickMany(data.abstractCues || fallback, 3, seed);
}

function getEnglishAbstractCues(seed) {
  return pickMany([
    "soft material highlights",
    "abstract display relationships",
    "spatial negative space",
    "layered brand colors",
    "subtle background outlines",
    "soft gradient studio lighting",
    "category-level atmosphere",
    "refined commercial background"
  ], 3, seed);
}

function getOrientationByNumbers(width, height) {
  if (width > height) return { zh: "横向构图", en: "horizontal composition" };
  if (width < height) return { zh: "竖向构图", en: "vertical composition" };
  return { zh: "方形构图", en: "square composition" };
}

function getTargetSize() {
  const width = Number(elements.customWidth.value);
  const height = Number(elements.customHeight.value);
  return width > 0 && height > 0 ? { width, height } : null;
}

function getDecimalRatio(width, height) {
  return Number((width / height).toFixed(2));
}

function formatDecimalRatio(width, height) {
  return `${getDecimalRatio(width, height)}:1`;
}

function getCustomOrientationInfo(width, height) {
  const decimalRatio = getDecimalRatio(width, height);

  if (decimalRatio >= 2.4) {
    return {
      zh: "超宽横向画幅",
      en: "ultra-wide horizontal aspect ratio",
      param: "ultra-wide horizontal",
      zhUse: "横幅海报、品牌视觉延展和多平台裁切使用",
      enUse: "banner layouts, brand visual extensions, and multi-platform cropping"
    };
  }

  if (decimalRatio > 1.1) {
    return {
      zh: "横向画幅",
      en: "horizontal aspect ratio",
      param: "horizontal",
      zhUse: "电商横图、社媒头图、品牌视觉延展和后期裁切使用",
      enUse: "landscape e-commerce visuals, social media headers, brand visual extensions, and post-production cropping"
    };
  }

  if (decimalRatio < 0.42) {
    return {
      zh: "超高竖向画幅",
      en: "extra-tall vertical aspect ratio",
      param: "extra-tall vertical",
      zhUse: "竖版长图、移动端视觉、信息流延展和后期裁切使用",
      enUse: "long vertical visuals, mobile layouts, feed extensions, and post-production cropping"
    };
  }

  if (decimalRatio < 0.9) {
    return {
      zh: "竖向画幅",
      en: "vertical aspect ratio",
      param: "vertical",
      zhUse: "移动端海报、详情页首屏、社媒竖图和后期裁切使用",
      enUse: "mobile posters, detail-page hero visuals, social media vertical images, and post-production cropping"
    };
  }

  return {
    zh: "方形画幅",
    en: "square aspect ratio",
    param: "square",
    zhUse: "电商主视觉、社媒封面、通用商业素材和后期裁切使用",
    enUse: "e-commerce key visuals, social media covers, versatile commercial assets, and post-production cropping"
  };
}

function getCustomRatioDescription(width, height) {
  const ratioText = formatDecimalRatio(width, height);
  const orientation = getCustomOrientationInfo(width, height);
  return {
    zh: `目标导出尺寸为 ${width}×${height}，约 ${ratioText} ${orientation.zh}，适合${orientation.zhUse}。`,
    en: `Target export size: ${width}×${height}, approximately ${ratioText} ${orientation.en}, suitable for ${orientation.enUse}.`
  };
}

function getRatioDescription() {
  const targetSize = getTargetSize();
  const ratio = getSelectedRatio();

  if (targetSize) {
    return getCustomRatioDescription(targetSize.width, targetSize.height);
  }

  if (isCustomSizeRatio(ratio)) {
    return {
      zh: "",
      en: ""
    };
  }

  const [w, h] = ratio.split(":").map(Number);
  if (w > h) return { zh: `横向画幅比例 ${ratio}。`, en: `Horizontal aspect ratio ${ratio}.` };
  if (w < h) return { zh: `竖向画幅比例 ${ratio}。`, en: `Vertical aspect ratio ${ratio}.` };
  return { zh: `方形画幅比例 ${ratio}。`, en: `Square aspect ratio ${ratio}.` };
}

function getAspectRatioParam() {
  const targetSize = getTargetSize();
  if (targetSize) {
    return formatDecimalRatio(targetSize.width, targetSize.height);
  }
  const ratio = getSelectedRatio();
  return ratio && !isCustomSizeRatio(ratio) ? ratio : "1:1";
}

function getGenerationParams() {
  const targetSize = getTargetSize();
  const orientation = targetSize ? getCustomOrientationInfo(targetSize.width, targetSize.height).param : "";
  return {
    imageCount: getBatchNumber(),
    aspectRatio: getAspectRatioParam(),
    targetWidth: targetSize ? targetSize.width : "",
    targetHeight: targetSize ? targetSize.height : "",
    targetAspectRatio: targetSize ? formatDecimalRatio(targetSize.width, targetSize.height) : "",
    orientation
  };
}

function formatGenerationParams() {
  const params = getGenerationParams();
  const lines = [
    `image_count: ${params.imageCount}`,
    `aspect_ratio: ${params.aspectRatio}`
  ];

  if (params.targetWidth && params.targetHeight) {
    lines.push(`target_width: ${params.targetWidth}`);
    lines.push(`target_height: ${params.targetHeight}`);
    lines.push(`target_aspect_ratio: ${params.targetAspectRatio}`);
    lines.push(`orientation: ${params.orientation}`);
  }

  return lines.join("\n");
}

function hasIncompleteCustomSize() {
  return isCustomSizeRatio(getSelectedRatio()) && !getTargetSize();
}

function getCompositionDescription(key, genericMode) {
  if (!genericMode) {
    return compositionText[key];
  }

  const neutralText = {
    "主体居左": {
      zh: "主要视觉重心位于画面左侧，右侧保留干净留白，便于后续排版和品牌信息延展。",
      en: "Place the main visual weight on the left side of the frame, leaving clean negative space on the right for layout flexibility."
    },
    "主体居中": {
      zh: "主要视觉重心位于画面中央，整体秩序稳定，适合形成清晰的品牌氛围底图。",
      en: "Keep the main visual weight centered, creating a stable and clear brand atmosphere background."
    },
    "主体居右": {
      zh: "主要视觉重心位于画面右侧，左侧保留留白，画面节奏干净利落。",
      en: "Place the main visual weight on the right side, leaving refined negative space on the left with a clean visual rhythm."
    },
    "三分法构图": {
      zh: "沿三分法安排空间、光影和抽象形态，画面层次自然，适合作为类目视觉底图。",
      en: "Arrange space, light, shadow, and abstract forms along a rule-of-thirds structure for a natural category-level visual background."
    },
    "居中对称构图": {
      zh: "采用居中对称构图，左右视觉重量均衡，形成稳定、高级、正式的品牌背景画面。",
      en: "Use a centered symmetrical composition with balanced visual weight, creating a stable and premium brand background."
    },
    "偏移构图": {
      zh: "视觉重心略微偏离画面中心，形成自然动线，同时保持商业背景图的整洁和秩序。",
      en: "Shift the visual weight slightly off-center to create a natural flow while keeping the commercial background clean and organized."
    }
  };

  return neutralText[key] || compositionText[key];
}

function getFocusText(industry, category, scope, concreteness) {
  if (isPureAtmosphere(concreteness)) {
    return {
      zh: "产品具象度为极致氛围：画面以行业氛围图、品牌背景图和类目视觉底图为核心，不出现具体产品名，不出现明确商品主体，也不让某个产品成为画面主角。通过材质、色彩、空间、光影、抽象形态和陈列关系表达行业气质。",
      en: "Product concreteness: pure atmosphere. The image should function primarily as an industry atmosphere visual, a brand background, and a category-level visual base. Do not include specific product names, a clear sellable hero object, or a dominant product subject. Convey the industry through materials, color, space, lighting, abstract forms, and display relationships."
    };
  }

  if (isDistantWeak(concreteness)) {
    return {
      zh: "产品具象度为远景弱相关：画面整体以通用氛围和品牌视觉为核心，可在远景、背景或非主视觉区域加入少量行业相关元素作为弱提示，但这些元素不能清晰、不能具体、不能成为主体，也不能明显落向某一个三级品类。",
      en: "Product concreteness: distant weak relevance. The image should remain primarily atmospheric and brand-oriented. A small amount of industry-related visual cues may appear only in the distance, background, or non-primary areas as weak references, but they must remain indistinct, non-dominant, and should not point too clearly to any single tertiary category."
    };
  }

  if (isAbstractMode(category, scope, concreteness)) {
    return {
      zh: `产品具象度为抽象氛围：以${industry}行业氛围图、品牌背景图和类目视觉底图为核心，不出现具体产品名，不出现明确商品主体，也不让某个产品成为画面主角。通过行业材质、色彩、空间、光影、抽象形态、局部轮廓和陈列关系表达行业气质，适合通用背景图、类目页和 KV 延展。`,
      en: `Product concreteness: abstract atmosphere. Focus on a ${en(industry)} industry atmosphere image, brand background, and category-level visual base. Do not mention specific product names, do not show a clear sellable product subject, and do not make any product the hero. Express the industry through materials, color, space, lighting, abstract forms, partial contours, and display relationships.`
    };
  }

  if (isGenericMode(category, scope)) {
    return {
      zh: `当前为通用行业氛围或通用场景氛围：以${industry}的行业气质、场景氛围、材质关系、空间光影和品牌背景感为核心，不把三级品类作为主导生成依据，不生成具体产品主角。`,
      en: `Current mode is general industry or general scene atmosphere. Focus on the ${en(industry)} industry mood, scene atmosphere, material relationships, spatial lighting, and brand background quality. Do not use the tertiary category as the leading prompt input, and do not generate a specific product hero.`
    };
  }

  if (isHintMode(concreteness)) {
    return {
      zh: `产品具象度为轻度暗示：可以出现少量${industry}相关元素，但这些元素只作为辅助氛围和场景线索，不能成为唯一主角。画面更适合品牌氛围图、社媒背景和商业素材底图。`,
      en: `Product concreteness: subtle suggestion. A few ${en(industry)}-related elements may appear, but only as supporting atmosphere and scene cues, never as the sole hero. The image should work as a brand mood visual, social media background, and commercial visual asset.`
    };
  }

  if (scope === "场景导向" && concreteness !== "明确产品") {
    return {
      zh: `以真实使用场景和生活方式氛围为主，${category}可以自然融入画面，轻微暗示功能属性和使用关系。`,
      en: `Build the prompt around a realistic usage scene and lifestyle atmosphere, with ${en(category)} naturally integrated and its function subtly suggested.`
    };
  }

  const detail = categoryDetails[category];
  return {
    zh: detail ? `产品具象度为明确产品：${detail.zh}。` : `产品具象度为明确产品：可以出现具体商品，明确突出${category}作为产品主体，强调品类、功能、材质、细节和商业展示效果，适合电商主图和产品展示图。`,
    en: detail ? `Product concreteness: clear product focus. ${detail.en}.` : `Product concreteness: clear product focus. Specific products may appear; clearly feature ${en(category)} as the main subject, emphasizing category recognition, function, material, detail, and commercial presentation.`
  };
}

function buildPrompt(index) {
  const industry = elements.primaryIndustry.value;
  const displayIndustry = getDisplayIndustryName(industry);
  const scene = elements.secondaryScene.value;
  const category = elements.tertiaryCategory.value;
  const scope = elements.generationScope.value;
  const concreteness = elements.productConcreteness.value;
  const lighting = elements.lighting.value;
  const materials = getSelectedMaterials();
  const lens = elements.lens.value;
  const styleTone = elements.styleTone.value;
  const pureMode = isPureAtmosphere(concreteness);
  const distantMode = isDistantWeak(concreteness);
  const abstractMode = isAbstractMode(category, scope, concreteness);
  const hintMode = isHintMode(concreteness);
  const avoidCategoryLead = shouldAvoidCategoryLead(category, scope, concreteness);
  const genericAtmosphereMode = avoidCategoryLead && !pureMode && !distantMode && !abstractMode;
  const genericMode = avoidCategoryLead || abstractMode;
  const composition = getCompositionDescription(elements.composition.value, genericMode);
  const sizeText = getRatioDescription();
  const data = industryData[industry];
  const sceneData = getCurrentSceneData();
  const selectedKeywords = pickMany(sceneData.visualKeywords, 3, expressionSeed + index);
  const selectedAbstractCues = getAbstractCues(data, expressionSeed + index);
  const selectedEnglishAbstractCues = getEnglishAbstractCues(expressionSeed + index);
  const selectedMaterials = materials.length ? materials : sceneData.materials.slice(0, 2);
  const focus = getFocusText(displayIndustry, category, scope, concreteness);
  const seed = expressionSeed + index * 5;
  const extra = elements.extraKeywords.value.trim();
  const zhIntro = avoidCategoryLead || abstractMode
    ? `${pick(zhVariation.openers, seed)}，一级行业为${displayIndustry}，生成范围为${scope}，产品具象度为${concreteness}。`
    : `${pick(zhVariation.openers, seed)}，一级行业为${displayIndustry}，三级品类为${category}，生成范围为${scope}，产品具象度为${concreteness}。`;
  const zhScene = pureMode
    ? `画面可参考${scene}的空间氛围，抽象线索包括${selectedAbstractCues.join("、")}，整体只表现行业气质、品牌感、留白、空间层次和类目视觉底图，不默认落到某一个三级品类。`
    : distantMode
      ? `画面整体以${scene}的通用氛围和品牌视觉为核心，抽象线索包括${selectedAbstractCues.join("、")}。如需行业相关元素，只能作为远景弱提示、背景中的轻微轮廓、非主角的小比例元素或模糊化辅助暗示。`
    : abstractMode
      ? `画面可参考${scene}的空间氛围，视觉关键词包括${selectedKeywords.join("、")}，整体更偏行业氛围图、品牌背景图和类目视觉底图，呈现${pick(zhVariation.atmosphere, seed + 1)}。`
    : genericAtmosphereMode
      ? `画面以${scene}的通用场景氛围为核心，优先使用抽象线索、视觉关键词、材质关系和空间光影来组织画面：${selectedAbstractCues.join("、")}、${selectedKeywords.join("、")}。不要把三级品类作为主导依据，不出现具体产品主角。`
    : hintMode || genericMode
      ? `画面场景设定在${scene}，视觉关键词包括${selectedKeywords.join("、")}，可以用少量行业相关元素辅助建立氛围，但视觉重心仍应落在空间、情绪和品牌气质上。`
    : `画面场景设定在${scene}，视觉关键词包括${selectedKeywords.join("、")}，整体需要呈现${pick(zhVariation.atmosphere, seed + 1)}。`;
  const zhMaterialLine = pureMode
    ? `采用${lighting}，让空间、色彩、材质高光、抽象形态和阴影关系清晰可控；重点表现${selectedMaterials.join("、")}等行业材质气质，不写具体产品名，不列商品清单，不出现明显可售卖产品。`
    : distantMode
      ? `采用${lighting}，让远景层次、背景轮廓、材质高光和阴影关系清晰可控；重点表现${selectedMaterials.join("、")}等材质气质，行业元素必须保持不清晰、非主导、不可一眼识别为具体三级品类。`
    : abstractMode
      ? `采用${lighting}，让空间层次、局部轮廓、抽象形态、材质高光和阴影关系清晰可控；重点表现${selectedMaterials.join("、")}等行业材质气质，避免出现具体商品清单或明确产品主角。`
    : genericAtmosphereMode
      ? `采用${lighting}，突出${selectedMaterials.join("、")}等材质、色彩层次、空间留白和光影氛围；画面更像品牌背景图、行业氛围图和类目视觉底图，而不是商品展示图。`
    : hintMode || genericMode
      ? `采用${lighting}，让环境层次、辅助元素、材质高光和阴影关系清晰可控；重点表现${selectedMaterials.join("、")}等材质纹理，产品元素只作为氛围线索。`
    : `采用${lighting}，让主体轮廓、表面高光和阴影层次清晰可控；重点表现${selectedMaterials.join("、")}等材质纹理，细节真实，触感明确。`;

  const zh = [
    noPeopleConstraint.zh,
    zhIntro,
    focus.zh,
    zhScene,
    zhMaterialLine,
    `镜头语言使用${lens}，整体风格为${styleTone}。${composition.zh}`,
    `${sizeText.zh}${pick(zhVariation.commercial, seed + 2)}，画面具有商业质感、品牌完整度和快速出图可用性。`,
    extra ? `补充关键词：${extra}。` : ""
  ].filter(Boolean).join("");

  const enMaterials = selectedMaterials.map(en).join(", ");
  const enKeywords = selectedKeywords.map(en).join(", ");
  const enAbstractKeywords = selectedEnglishAbstractCues.join(", ");
  const enCategoryLine = avoidCategoryLead || abstractMode
    ? `Primary industry: ${en(industry)}. Generation scope: ${en(scope)}. Product concreteness: ${en(concreteness)}.`
    : `Primary industry: ${en(industry)}. Tertiary product category: ${en(category)}. Generation scope: ${en(scope)}. Product concreteness: ${en(concreteness)}.`;
  const enScene = pureMode
    ? `Use the atmosphere of a ${en(scene)} as a spatial reference, with abstract cues such as ${enAbstractKeywords}. Keep the image focused only on industry mood, brand feeling, negative space, spatial depth, and a category-level visual base; do not default to any tertiary product category.`
    : distantMode
      ? `Keep the image primarily atmospheric and brand-oriented within a ${en(scene)} mood. Abstract cues include ${enAbstractKeywords}. Any industry-related cues may appear only as distant weak references, slight background outlines, small non-hero elements, or blurred supporting hints.`
    : abstractMode
      ? `Use the atmosphere of a ${en(scene)} as a spatial reference, with visual qualities such as ${enKeywords}. Keep it closer to an industry mood image, brand background, and category-level visual base. ${pick(enVariation.atmosphere, seed + 1)}`
    : genericAtmosphereMode
      ? `Use the general atmosphere of a ${en(scene)} as the core direction. Prioritize abstract cues, visual keywords, material relationships, spatial atmosphere, and lighting: ${enAbstractKeywords}, ${enKeywords}. Do not use the tertiary category as the leading prompt input, and do not create a specific product hero.`
    : hintMode || genericMode
      ? `Set the image in a ${en(scene)} with visual qualities such as ${enKeywords}. A few industry-related elements may support the mood, but the visual focus should stay on space, emotion, and brand atmosphere.`
    : `Set the image in a ${en(scene)} with visual qualities such as ${enKeywords}. ${pick(enVariation.atmosphere, seed + 1)}`;
  const enMaterialLine = pureMode
    ? `Use ${en(lighting)} to shape space, color, material highlights, abstract forms, and shadow relationships. Emphasize industry material moods including ${enMaterials}; do not mention product names, do not list products, and do not show obvious sellable products.`
    : distantMode
      ? `Use ${en(lighting)} to shape distant depth, background outlines, material highlights, and shadow relationships. Emphasize material moods including ${enMaterials}; all industry cues must remain indistinct, non-dominant, and not immediately recognizable as one tertiary category.`
    : abstractMode
      ? `Use ${en(lighting)} to shape spatial depth, partial contours, abstract forms, material highlights, and shadow relationships. Emphasize industry material moods including ${enMaterials}, while avoiding product lists or any clear product hero.`
    : genericAtmosphereMode
      ? `Use ${en(lighting)} to emphasize ${enMaterials}, layered color, spatial negative space, and lighting atmosphere. The image should read as a brand background, industry atmosphere visual, and category-level visual base rather than a product display image.`
    : hintMode || genericMode
      ? `Use ${en(lighting)} to shape environmental depth, supporting elements, material highlights, and shadow relationships. Emphasize material textures including ${enMaterials}; product elements should remain atmospheric cues only.`
    : `Use ${en(lighting)} to create controlled highlights, readable shadows, and a clear subject silhouette. Emphasize material details including ${enMaterials}, with realistic tactile texture.`;

  const enPrompt = [
    noPeopleConstraint.en,
    `${pick(enVariation.openers, seed)}. ${enCategoryLine}`,
    focus.en,
    enScene,
    enMaterialLine,
    `Camera language: ${en(lens)}. Visual style: ${en(styleTone)}. ${composition.en}`,
    `${sizeText.en} ${pick(enVariation.commercial, seed + 2)} The result should feel commercially polished, brand-ready, and practical for rapid image generation.`,
    extra ? `Additional keywords: ${extra}.` : ""
  ].filter(Boolean).join(" ");

  return {
    zh,
    en: enPrompt
  };
}

function generatePrompts() {
  if (hasIncompleteCustomSize()) {
    currentPrompts = [];
    elements.promptList.innerHTML = "";
    elements.batchInfo.textContent = "请先输入目标导出宽度和高度。";
    showStatus("请先输入目标导出宽度和高度。");
    return;
  }

  currentPrompts = [];
  const count = getPromptCount();
  for (let i = 0; i < count; i += 1) {
    currentPrompts.push(buildPrompt(i));
  }
  renderPrompts();
}

function renderPrompts() {
  elements.promptList.innerHTML = "";
  elements.batchInfo.textContent = formatGenerationParams();

  currentPrompts.forEach((prompt, index) => {
    const card = document.createElement("article");
    card.className = "prompt-card";

    const header = document.createElement("div");
    header.className = "prompt-card-header";

    const titleWrap = document.createElement("div");
    titleWrap.className = "prompt-card-title";
    const indexBadge = document.createElement("span");
    indexBadge.className = "prompt-index";
    indexBadge.textContent = String(index + 1);
    const title = document.createElement("h3");
    title.textContent = `Prompt ${index + 1}`;
    titleWrap.appendChild(indexBadge);
    titleWrap.appendChild(title);

    header.appendChild(titleWrap);

    const grid = document.createElement("div");
    grid.className = "prompt-stack";

    const zhBlock = createPromptBlock("中文提示词", prompt.zh, "zh-textarea");

    const enBlock = createPromptBlock("English Prompt", prompt.en, "en-textarea");
    const actionWrap = createPromptActions(card, index);

    grid.appendChild(zhBlock);
    grid.appendChild(enBlock);
    card.appendChild(header);
    card.appendChild(grid);
    card.appendChild(actionWrap);
    elements.promptList.appendChild(card);
  });

  showStatus("已生成");
}

function createPromptBlock(title, value, className) {
  const block = document.createElement("div");
  block.className = "prompt-block";

  const titleRow = document.createElement("div");
  titleRow.className = "prompt-block-title";
  const heading = document.createElement("h3");
  heading.textContent = title;
  titleRow.appendChild(heading);

  const textarea = document.createElement("textarea");
  textarea.className = `prompt-textarea ${className}`;
  textarea.spellcheck = false;
  textarea.value = value;
  textarea.addEventListener("input", () => autoGrowTextarea(textarea));

  block.appendChild(titleRow);
  block.appendChild(textarea);
  const schedule = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 0));
  schedule(() => autoGrowTextarea(textarea));
  return block;
}

function createPromptActions(card, index) {
  const actionWrap = document.createElement("div");
  actionWrap.className = "prompt-actions prompt-actions-bottom";

  const zhButton = document.createElement("button");
  zhButton.type = "button";
  zhButton.textContent = "复制中文提示词";
  zhButton.addEventListener("click", () => {
    copyText(card.querySelector(".zh-textarea").value, `Prompt ${index + 1} 中文已复制`);
  });

  const enButton = document.createElement("button");
  enButton.type = "button";
  enButton.textContent = "Copy English Prompt";
  enButton.addEventListener("click", () => {
    copyText(card.querySelector(".en-textarea").value, `Prompt ${index + 1} English copied`);
  });

  const paramsButton = document.createElement("button");
  paramsButton.type = "button";
  paramsButton.textContent = "复制通用生成参数";
  paramsButton.addEventListener("click", () => {
    copyText(formatGenerationParams(), "通用生成参数已复制");
  });

  const groupButton = document.createElement("button");
  groupButton.type = "button";
  groupButton.textContent = "复制整组";
  groupButton.addEventListener("click", () => copyGroup(index));

  actionWrap.appendChild(zhButton);
  actionWrap.appendChild(enButton);
  actionWrap.appendChild(paramsButton);
  actionWrap.appendChild(groupButton);
  return actionWrap;
}

function autoGrowTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight + 2}px`;
}

function copyGroup(index) {
  const card = elements.promptList.children[index];
  const zh = card.querySelector(".zh-textarea").value;
  const enPrompt = card.querySelector(".en-textarea").value;
  const text = [
    "【中文提示词】",
    zh,
    "",
    "【English Prompt】",
    enPrompt,
    "",
    "【通用生成参数】",
    formatGenerationParams()
  ].join("\n");
  copyText(text, `Prompt ${index + 1} 整组已复制`);
}

async function copyText(text, message) {
  if (!text.trim()) {
    showStatus("暂无内容");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showStatus(message);
  } catch (error) {
    const temporary = document.createElement("textarea");
    temporary.value = text;
    document.body.appendChild(temporary);
    temporary.select();
    document.execCommand("copy");
    temporary.remove();
    showStatus(message);
  }
}

function resetForm() {
  document.querySelector("#promptForm").reset();
  document.querySelector("input[name='ratio'][value='1:1']").checked = true;
  expressionSeed = 0;
  updateIndustryFields();
  generatePrompts();
  showStatus("已重置");
}

function showStatus(message) {
  elements.copyStatus.textContent = message;
  window.clearTimeout(showStatus.timer);
  showStatus.timer = window.setTimeout(() => {
    elements.copyStatus.textContent = "";
  }, 1800);
}

init();
