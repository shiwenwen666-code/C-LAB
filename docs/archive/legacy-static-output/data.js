const flatIndustryData = {
  "家居装饰": {
    categories: ["不限定具体品类 / 通用行业氛围", "香薰摆件", "花瓶", "靠枕", "地毯", "墙面装饰", "桌面收纳", "装饰灯", "相框画框"],
    scenes: ["客厅", "卧室", "边柜", "书房", "样板间"],
    materials: ["木质", "陶瓷", "玻璃", "棉麻", "藤编", "暖色灯光"],
    visualKeywords: ["高级留白", "温暖生活方式", "干净舒适", "自然质感", "精致软装"]
  },
  "节庆派对用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "派对餐具", "气球装饰", "彩带挂饰", "蛋糕装饰", "节日礼盒", "桌面摆件", "派对帽", "礼品袋"],
    scenes: ["节日餐桌", "生日派对", "节庆布置", "派对背景墙", "礼品陈列"],
    materials: ["珠光气球", "亮片纸材", "金属箔", "彩纸", "丝带", "香槟金装饰"],
    visualKeywords: ["欢庆氛围", "整洁有序", "高级派对感", "节日仪式感", "明亮轻盈"]
  },
  "母婴用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "婴儿推车", "奶瓶", "安抚玩具", "儿童餐具", "纸尿裤", "婴儿床", "早教玩具", "母婴收纳"],
    scenes: ["母婴友好型空间", "柔和育儿环境", "婴儿护理收纳区", "无人物家庭育儿空间", "明亮棚拍"],
    materials: ["亲肤棉料", "食品级硅胶", "柔软绒毛", "磨砂塑料", "圆润边角", "浅色木纹"],
    visualKeywords: ["安全温和", "柔软亲肤", "干净明亮", "育儿环境气质", "可信赖感"]
  },
  "浴室用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "花洒", "浴室柜", "毛巾", "香氛沐浴露", "牙刷杯", "置物架", "浴室镜", "地垫"],
    scenes: ["现代浴室", "酒店浴室", "大理石台面", "清晨洗漱空间", "湿润水汽场景"],
    materials: ["哑光金属", "通透玻璃", "亮面陶瓷", "柔软棉织物", "水珠质感", "大理石纹理"],
    visualKeywords: ["洁净清爽", "高级卫浴感", "水润光泽", "秩序收纳", "舒适放松"]
  },
  "智能家居": {
    categories: ["不限定具体品类 / 通用行业氛围", "智能音箱", "智能门锁", "扫地机器人", "智能灯具", "智能摄像头", "温控面板", "智能插座", "传感器"],
    scenes: ["未来感客厅", "智能玄关", "夜间家居场景", "极简桌面", "现代公寓空间"],
    materials: ["哑光塑料", "玻璃面板", "阳极氧化金属", "LED 光效", "细腻磨砂表面", "隐藏式屏幕"],
    visualKeywords: ["科技秩序感", "未来生活方式", "智能联动", "极简高级", "安静高效"]
  },
  "医疗器械和用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "血压计", "制氧机", "护理床", "医用口罩", "康复护具", "体温计", "急救包", "雾化器"],
    scenes: ["洁净医疗空间", "家庭护理场景", "诊疗室台面", "专业产品棚拍", "康复训练空间"],
    materials: ["医用无纺布", "抗菌塑料", "金属结构", "透明软管", "洁净白色表面", "硅胶触感"],
    visualKeywords: ["专业可信", "洁净安全", "医疗级质感", "清晰功能表达", "理性安心"]
  },
  "箱包旅行用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "拉杆箱", "双肩包", "旅行收纳袋", "护照夹", "登机包", "户外背包", "洗漱包", "行李牌"],
    scenes: ["机场候机区", "酒店房间", "城市街头", "户外旅行场景", "干净棚拍背景"],
    materials: ["防泼水尼龙", "皮革纹理", "拉丝金属", "耐磨织带", "硬壳磨砂材质", "细密拉链"],
    visualKeywords: ["轻便耐用", "旅行秩序", "城市探索", "精致收纳", "可靠质感"]
  },
  "美妆个护": {
    categories: ["不限定具体品类 / 通用行业氛围", "精华液", "面霜", "口红", "香水", "洗发水", "身体乳", "美容仪", "化妆刷"],
    scenes: ["梳妆台", "浴室台面", "高级棚拍", "晨间护理场景", "礼盒陈列"],
    materials: ["玻璃瓶身", "金属瓶盖", "柔雾塑料", "膏体质感", "水润光泽", "丝绒背景"],
    visualKeywords: ["精致高级", "洁净美感", "柔和光泽", "护肤仪式感", "品牌质感"]
  },
  "宠物用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "宠物窝", "宠物碗", "牵引绳", "猫砂盆", "宠物玩具", "宠物清洁用品", "宠物背包", "喂食器"],
    scenes: ["温馨客厅", "宠物角落", "户外遛宠场景", "阳台休闲区", "干净棚拍"],
    materials: ["柔软绒布", "耐咬橡胶", "不锈钢", "透气网布", "环保塑料", "防水面料"],
    visualKeywords: ["温暖空间感", "干净可爱", "安全耐用", "生活方式感", "轻松治愈"]
  },
  "食品饮料": {
    categories: ["不限定具体品类 / 通用行业氛围", "咖啡", "茶饮", "果汁", "饼干零食", "调味酱", "烘焙食品", "健康饮品", "礼盒食品"],
    scenes: ["餐桌", "厨房台面", "咖啡馆场景", "野餐布置", "棚拍陈列"],
    materials: ["玻璃杯", "纸质包装", "木质托盘", "新鲜水果", "液体高光", "烘焙纹理"],
    visualKeywords: ["新鲜诱人", "食欲感", "自然健康", "明亮干净", "品牌陈列感"]
  },
  "厨房用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "锅具", "刀具", "餐具套装", "保鲜盒", "砧板", "调料罐", "咖啡器具", "厨房收纳"],
    scenes: ["现代厨房", "料理台面", "餐桌备餐", "开放式厨房", "干净棚拍"],
    materials: ["不锈钢", "原木", "耐热玻璃", "硅胶", "陶瓷釉面", "哑光塑料"],
    visualKeywords: ["高效料理", "干净秩序", "实用美学", "耐用品质", "现代厨房感"]
  },
  "办公文具": {
    categories: ["不限定具体品类 / 通用行业氛围", "笔记本", "签字笔", "文件夹", "桌面收纳", "便签纸", "办公灯", "日程本", "计算器"],
    scenes: ["办公桌面", "书房工作区", "会议桌", "校园书桌", "极简棚拍"],
    materials: ["纸张纹理", "金属笔夹", "磨砂塑料", "皮革封面", "木质桌面", "透明亚克力"],
    visualKeywords: ["清晰高效", "理性秩序", "学习工作感", "简洁专业", "桌面美学"]
  },
  "运动户外": {
    categories: ["不限定具体品类 / 通用行业氛围", "瑜伽垫", "运动水杯", "露营灯", "登山杖", "护膝", "健身器材", "户外帐篷", "骑行配件"],
    scenes: ["健身房", "户外营地", "山地徒步", "城市运动场", "清晨公园"],
    materials: ["防滑橡胶", "轻量铝合金", "防水面料", "透气织物", "高强度塑料", "反光细节"],
    visualKeywords: ["活力健康", "户外探索", "坚固耐用", "运动机能", "清爽动感"]
  },
  "服饰配件": {
    categories: ["不限定具体品类 / 通用行业氛围", "帽子", "围巾", "腰带", "太阳镜", "袜子", "手套", "发饰", "领带"],
    scenes: ["穿搭陈列", "衣帽间", "街拍背景", "精品店陈列", "棚拍背景"],
    materials: ["棉织物", "皮革", "金属扣件", "针织纹理", "镜面镜片", "丝绸质感"],
    visualKeywords: ["时尚搭配", "精致细节", "轻奢气质", "季节氛围", "造型完整度"]
  },
  "珠宝饰品": {
    categories: ["不限定具体品类 / 通用行业氛围", "项链", "戒指", "耳环", "手链", "胸针", "发夹", "首饰礼盒", "珍珠饰品"],
    scenes: ["珠宝台面", "礼盒陈列", "丝绒背景", "高级棚拍", "梳妆台"],
    materials: ["黄金光泽", "银色金属", "珍珠", "宝石切面", "丝绒", "镜面反射"],
    visualKeywords: ["精致闪耀", "高级礼赠感", "奢华但克制", "细节清晰", "优雅质感"]
  },
  "3C 数码配件": {
    categories: ["不限定具体品类 / 通用行业氛围", "手机壳", "充电器", "数据线", "耳机保护套", "键盘", "鼠标", "支架", "移动电源"],
    scenes: ["极简桌面", "科技工作台", "游戏桌面", "通勤包内场景", "产品棚拍"],
    materials: ["硅胶", "铝合金", "编织线材", "透明塑料", "磨砂表面", "LED 指示灯"],
    visualKeywords: ["科技清晰", "精密细节", "高效便携", "现代数码感", "整洁桌面"]
  },
  "汽车用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "车载香薰", "手机支架", "脚垫", "座椅靠垫", "车载收纳", "清洁套装", "遮阳挡", "行车记录仪"],
    scenes: ["车内中控台", "驾驶座空间", "后备箱收纳", "洗车场景", "户外停车场"],
    materials: ["碳纤维纹理", "皮革", "金属夹扣", "防滑橡胶", "透明塑料", "柔软织物"],
    visualKeywords: ["车内秩序", "安全实用", "精致驾驶感", "耐用可靠", "清爽整洁"]
  },
  "清洁用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "清洁喷雾", "洗衣凝珠", "拖把", "抹布", "刷具", "收纳桶", "消毒湿巾", "空气清新剂"],
    scenes: ["明亮厨房", "浴室清洁场景", "洗衣房", "家政收纳区", "棚拍陈列"],
    materials: ["透明瓶身", "泡沫质感", "超细纤维", "塑料喷头", "无纺布", "水珠高光"],
    visualKeywords: ["洁净焕新", "清爽明亮", "高效去污", "家庭安心", "秩序收纳"]
  },
  "园艺用品": {
    categories: ["不限定具体品类 / 通用行业氛围", "花盆", "园艺剪", "浇水壶", "种植工具", "营养土", "植物支架", "园艺手套", "户外灯"],
    scenes: ["阳台花园", "户外庭院", "温室角落", "园艺工作台", "自然棚拍"],
    materials: ["陶土", "金属工具", "木柄", "绿色植被", "粗陶纹理", "防水布料"],
    visualKeywords: ["自然生长感", "清新治愈", "户外生活", "手作园艺", "生态质感"]
  },
  "玩具礼品": {
    categories: ["不限定具体品类 / 通用行业氛围", "毛绒玩具", "积木", "盲盒", "益智玩具", "礼品盒", "手办摆件", "儿童礼物", "拼图"],
    scenes: ["儿童房", "礼物陈列", "生日桌面", "玩具收纳区", "明亮棚拍"],
    materials: ["柔软绒毛", "彩色塑料", "纸质礼盒", "木质积木", "透明展示盒", "丝带包装"],
    visualKeywords: ["趣味可爱", "礼赠氛围", "色彩明快", "童真想象", "整洁陈列"]
  }
};

const englishTerms = {
  "不限定具体场景 / 通用行业氛围": "general industry atmosphere",
  "不限定具体品类 / 通用行业氛围": "general category atmosphere",
  "不限定具体品类 / 通用场景氛围": "general scene atmosphere",
  "家居装饰": "home decor", "节庆派对用品": "festival and party supplies", "母婴用品": "nursery care goods", "育儿护理用品": "nursery care goods", "浴室用品": "bathroom products", "智能家居": "smart home products", "医疗器械和用品": "medical devices and healthcare supplies", "箱包旅行用品": "bags and travel goods", "美妆个护": "beauty and personal care", "宠物用品": "pet supplies", "食品饮料": "food and beverage", "厨房用品": "kitchenware", "办公文具": "office stationery", "运动户外": "sports and outdoor gear", "服饰配件": "fashion accessories", "珠宝饰品": "jewelry and accessories", "3C 数码配件": "consumer electronics accessories", "汽车用品": "automotive accessories", "清洁用品": "cleaning supplies", "园艺用品": "gardening supplies", "玩具礼品": "toys and gifts",
  "香薰摆件": "aroma decor objects", "花瓶": "vases", "靠枕": "throw pillows", "地毯": "rugs", "墙面装饰": "wall decor", "桌面收纳": "desktop organizers", "装饰灯": "decorative lamps", "相框画框": "photo and art frames",
  "派对餐具": "party tableware", "气球装饰": "balloon decorations", "彩带挂饰": "ribbon and streamer decorations", "蛋糕装饰": "cake decorations", "节日礼盒": "holiday gift boxes", "桌面摆件": "tabletop decorations", "派对帽": "party hats", "礼品袋": "gift bags",
  "婴儿推车": "baby strollers", "奶瓶": "baby bottles", "安抚玩具": "soothing toys", "儿童餐具": "children's tableware", "纸尿裤": "diapers", "婴儿床": "baby cribs", "早教玩具": "early learning toys", "母婴收纳": "baby care organizers",
  "花洒": "shower heads", "浴室柜": "bathroom cabinets", "毛巾": "towels", "香氛沐浴露": "scented body wash", "牙刷杯": "toothbrush cups", "置物架": "storage racks", "浴室镜": "bathroom mirrors", "地垫": "bath mats",
  "智能音箱": "smart speakers", "智能门锁": "smart door locks", "扫地机器人": "robot vacuum cleaners", "智能灯具": "smart lighting", "智能摄像头": "smart cameras", "温控面板": "climate control panels", "智能插座": "smart plugs", "传感器": "smart sensors",
  "血压计": "blood pressure monitors", "制氧机": "oxygen concentrators", "护理床": "care beds", "医用口罩": "medical masks", "康复护具": "rehabilitation braces", "体温计": "thermometers", "急救包": "first-aid kits", "雾化器": "nebulizers",
  "拉杆箱": "suitcases", "双肩包": "backpacks", "旅行收纳袋": "travel packing organizers", "护照夹": "passport holders", "登机包": "carry-on bags", "户外背包": "outdoor backpacks", "洗漱包": "toiletry bags", "行李牌": "luggage tags",
  "精华液": "facial serum", "面霜": "face cream", "口红": "lipstick", "香水": "perfume", "洗发水": "shampoo", "身体乳": "body lotion", "美容仪": "beauty device", "化妆刷": "makeup brushes",
  "宠物窝": "pet beds", "宠物碗": "pet bowls", "牵引绳": "pet leashes", "猫砂盆": "cat litter boxes", "宠物玩具": "pet toys", "宠物清洁用品": "pet grooming supplies", "宠物背包": "pet carrier backpacks", "喂食器": "pet feeders",
  "咖啡": "coffee", "茶饮": "tea drinks", "果汁": "juice", "饼干零食": "cookies and snacks", "调味酱": "sauces", "烘焙食品": "bakery products", "健康饮品": "healthy drinks", "礼盒食品": "food gift boxes",
  "锅具": "cookware", "刀具": "kitchen knives", "餐具套装": "tableware sets", "保鲜盒": "food storage containers", "砧板": "cutting boards", "调料罐": "spice jars", "咖啡器具": "coffee brewing tools", "厨房收纳": "kitchen organizers",
  "笔记本": "notebooks", "签字笔": "pens", "文件夹": "folders", "便签纸": "sticky notes", "办公灯": "desk lamps", "日程本": "planners", "计算器": "calculators",
  "瑜伽垫": "yoga mats", "运动水杯": "sports bottles", "露营灯": "camping lanterns", "登山杖": "trekking poles", "护膝": "knee supports", "健身器材": "fitness equipment", "户外帐篷": "outdoor tents", "骑行配件": "cycling accessories",
  "帽子": "hats", "围巾": "scarves", "腰带": "belts", "太阳镜": "sunglasses", "袜子": "socks", "手套": "gloves", "发饰": "hair accessories", "领带": "ties",
  "项链": "necklaces", "戒指": "rings", "耳环": "earrings", "手链": "bracelets", "胸针": "brooches", "发夹": "hair clips", "首饰礼盒": "jewelry gift boxes", "珍珠饰品": "pearl jewelry",
  "手机壳": "phone cases", "充电器": "chargers", "数据线": "charging cables", "耳机保护套": "earbud cases", "键盘": "keyboards", "鼠标": "mice", "支架": "device stands", "移动电源": "power banks",
  "车载香薰": "car fragrance diffusers", "手机支架": "phone mounts", "脚垫": "car floor mats", "座椅靠垫": "seat cushions", "车载收纳": "car organizers", "清洁套装": "cleaning kits", "遮阳挡": "sun shades", "行车记录仪": "dash cameras",
  "清洁喷雾": "cleaning spray", "洗衣凝珠": "laundry pods", "拖把": "mops", "抹布": "cleaning cloths", "刷具": "brushes", "收纳桶": "storage buckets", "消毒湿巾": "disinfectant wipes", "空气清新剂": "air fresheners",
  "花盆": "plant pots", "园艺剪": "garden shears", "浇水壶": "watering cans", "种植工具": "planting tools", "营养土": "potting soil", "植物支架": "plant supports", "园艺手套": "gardening gloves", "户外灯": "outdoor lights",
  "毛绒玩具": "plush toys", "积木": "building blocks", "盲盒": "blind box toys", "益智玩具": "educational toys", "礼品盒": "gift boxes", "手办摆件": "collectible figures", "儿童礼物": "children's gifts", "拼图": "puzzles",
  "客厅": "living room", "卧室": "bedroom", "边柜": "sideboard setting", "书房": "study room", "样板间": "showroom interior", "节日餐桌": "holiday dining table", "生日派对": "birthday party", "节庆布置": "festive setup", "派对背景墙": "party backdrop wall", "礼品陈列": "gift display", "儿童房": "soft child-friendly room", "母婴友好型空间": "baby-care-friendly space", "柔和育儿环境": "soft nursery-care environment", "婴儿护理收纳区": "nursery-care storage area", "无人物家庭育儿空间": "no-people home nursery atmosphere", "外出育儿场景": "outdoor nursery-care setting", "明亮棚拍": "bright studio setup", "现代浴室": "modern bathroom", "酒店浴室": "hotel bathroom", "大理石台面": "marble countertop", "清晨洗漱空间": "morning washroom setting", "湿润水汽场景": "misty bathroom scene", "未来感客厅": "futuristic living room", "智能玄关": "smart entryway", "夜间家居场景": "nighttime home scene", "极简桌面": "minimal desktop", "现代公寓空间": "modern apartment", "洁净医疗空间": "clean medical space", "家庭护理场景": "home care scene", "诊疗室台面": "clinic tabletop", "专业产品棚拍": "professional product studio shot", "康复训练空间": "rehabilitation training space", "机场候机区": "airport lounge", "酒店房间": "hotel room", "城市街头": "urban street", "户外旅行场景": "outdoor travel scene", "干净棚拍背景": "clean studio background", "梳妆台": "vanity table", "浴室台面": "bathroom counter", "高级棚拍": "premium studio shot", "晨间护理场景": "morning care routine", "礼盒陈列": "gift box display", "温馨客厅": "cozy living room", "宠物角落": "pet corner", "户外遛宠场景": "outdoor pet walking scene", "阳台休闲区": "balcony lounge", "干净棚拍": "clean studio shot", "餐桌": "dining table", "厨房台面": "kitchen counter", "咖啡馆场景": "cafe scene", "野餐布置": "picnic setup", "棚拍陈列": "studio product display", "现代厨房": "modern kitchen", "料理台面": "cooking countertop", "餐桌备餐": "meal prep table", "开放式厨房": "open kitchen", "办公桌面": "office desk", "书房工作区": "study workspace", "会议桌": "meeting table", "校园书桌": "student desk", "极简棚拍": "minimal studio shot", "健身房": "gym", "户外营地": "outdoor campsite", "山地徒步": "mountain hiking scene", "城市运动场": "urban sports court", "清晨公园": "morning park", "穿搭陈列": "outfit display", "衣帽间": "wardrobe room", "街拍背景": "street style backdrop", "精品店陈列": "boutique display", "棚拍背景": "studio background", "珠宝台面": "jewelry tabletop", "丝绒背景": "velvet backdrop", "科技工作台": "tech workstation", "游戏桌面": "gaming desktop", "通勤包内场景": "commuter bag scene", "产品棚拍": "product studio shot", "车内中控台": "car dashboard", "驾驶座空间": "driver seat area", "后备箱收纳": "trunk organization", "洗车场景": "car cleaning scene", "户外停车场": "outdoor parking area", "明亮厨房": "bright kitchen", "浴室清洁场景": "bathroom cleaning scene", "洗衣房": "laundry room", "家政收纳区": "home cleaning storage area", "阳台花园": "balcony garden", "户外庭院": "outdoor courtyard", "温室角落": "greenhouse corner", "园艺工作台": "gardening workbench", "自然棚拍": "natural studio shot", "礼物陈列": "gift display", "生日桌面": "birthday tabletop", "玩具收纳区": "toy storage area",
  "木质": "wood texture", "陶瓷": "ceramic", "玻璃": "glass", "棉麻": "cotton-linen fabric", "藤编": "rattan weave", "暖色灯光": "warm lighting", "珠光气球": "pearl-finish balloons", "亮片纸材": "glitter paper", "金属箔": "metallic foil", "彩纸": "colored paper", "丝带": "ribbons", "香槟金装饰": "champagne gold decor", "亲肤棉料": "skin-friendly cotton", "食品级硅胶": "food-grade silicone", "柔软绒毛": "soft plush", "磨砂塑料": "matte plastic", "圆润边角": "rounded edges", "浅色木纹": "light wood grain", "哑光金属": "matte metal", "通透玻璃": "clear glass", "亮面陶瓷": "glossy ceramic", "柔软棉织物": "soft cotton textile", "水珠质感": "water droplets", "大理石纹理": "marble texture", "玻璃面板": "glass panel", "阳极氧化金属": "anodized metal", "LED 光效": "LED light effect", "细腻磨砂表面": "fine matte surface", "隐藏式屏幕": "hidden display", "医用无纺布": "medical non-woven fabric", "抗菌塑料": "antibacterial plastic", "金属结构": "metal structure", "透明软管": "transparent tubing", "洁净白色表面": "clean white surface", "硅胶触感": "silicone touch", "防泼水尼龙": "water-resistant nylon", "皮革纹理": "leather texture", "拉丝金属": "brushed metal", "耐磨织带": "durable webbing", "硬壳磨砂材质": "matte hard-shell material", "细密拉链": "fine zipper detail", "玻璃瓶身": "glass bottle", "金属瓶盖": "metal cap", "柔雾塑料": "soft matte plastic", "膏体质感": "cream texture", "水润光泽": "hydrated glossy finish", "丝绒背景": "velvet backdrop", "耐咬橡胶": "chew-resistant rubber", "不锈钢": "stainless steel", "透气网布": "breathable mesh", "环保塑料": "eco-friendly plastic", "防水面料": "waterproof fabric", "玻璃杯": "glassware", "纸质包装": "paper packaging", "木质托盘": "wooden tray", "新鲜水果": "fresh fruit", "液体高光": "liquid highlights", "烘焙纹理": "baked texture", "原木": "natural wood", "耐热玻璃": "heat-resistant glass", "硅胶": "silicone", "陶瓷釉面": "ceramic glaze", "哑光塑料": "matte plastic", "纸张纹理": "paper texture", "金属笔夹": "metal pen clip", "皮革封面": "leather cover", "木质桌面": "wooden desktop", "透明亚克力": "clear acrylic", "防滑橡胶": "non-slip rubber", "轻量铝合金": "lightweight aluminum alloy", "防水面料": "waterproof fabric", "透气织物": "breathable fabric", "高强度塑料": "high-strength plastic", "反光细节": "reflective details", "棉织物": "cotton fabric", "皮革": "leather", "金属扣件": "metal buckles", "针织纹理": "knitted texture", "镜面镜片": "mirror lenses", "丝绸质感": "silk texture", "黄金光泽": "golden shine", "银色金属": "silver metal", "珍珠": "pearls", "宝石切面": "gemstone facets", "丝绒": "velvet", "镜面反射": "mirror reflection", "铝合金": "aluminum alloy", "编织线材": "braided cable", "透明塑料": "transparent plastic", "碳纤维纹理": "carbon fiber texture", "金属夹扣": "metal clamp", "防滑橡胶": "anti-slip rubber", "柔软织物": "soft textile", "透明瓶身": "transparent bottle", "泡沫质感": "foam texture", "超细纤维": "microfiber", "塑料喷头": "plastic trigger spray", "无纺布": "non-woven fabric", "水珠高光": "water-drop highlights", "陶土": "terracotta", "金属工具": "metal tools", "木柄": "wooden handle", "绿色植被": "green plants", "粗陶纹理": "rustic ceramic texture", "防水布料": "waterproof cloth", "彩色塑料": "colorful plastic", "纸质礼盒": "paper gift box", "木质积木": "wooden blocks", "透明展示盒": "clear display box", "丝带包装": "ribbon packaging",
  "高级留白": "premium negative space", "温暖生活方式": "warm lifestyle mood", "干净舒适": "clean and comfortable", "自然质感": "natural tactile quality", "精致软装": "refined soft furnishing", "欢庆氛围": "celebratory atmosphere", "整洁有序": "neat and organized", "高级派对感": "premium party mood", "节日仪式感": "festive ritual feeling", "明亮轻盈": "bright and airy", "安全温和": "safe and gentle", "柔软亲肤": "soft and skin-friendly", "干净明亮": "clean and bright", "育儿环境气质": "soft nursery-care atmosphere", "可信赖感": "trustworthy feeling", "洁净清爽": "clean and refreshing", "高级卫浴感": "premium bathroom feel", "水润光泽": "fresh watery gloss", "秩序收纳": "organized storage", "舒适放松": "comfortable and relaxing", "科技秩序感": "technological order", "未来生活方式": "future lifestyle", "智能联动": "smart connected living", "极简高级": "minimal and premium", "安静高效": "quiet efficiency", "专业可信": "professional and trustworthy", "洁净安全": "clean and safe", "医疗级质感": "medical-grade quality", "清晰功能表达": "clear functional expression", "理性安心": "rational reassurance", "轻便耐用": "lightweight and durable", "旅行秩序": "organized travel", "城市探索": "urban exploration", "精致收纳": "refined organization", "可靠质感": "reliable quality", "精致高级": "refined and premium", "洁净美感": "clean beauty aesthetic", "柔和光泽": "soft glow", "护肤仪式感": "skincare ritual mood", "品牌质感": "brand quality", "温暖空间感": "warm spatial mood", "干净可爱": "clean and cute", "安全耐用": "safe and durable", "生活方式感": "lifestyle feeling", "轻松治愈": "relaxed and comforting", "新鲜诱人": "fresh and appetizing", "食欲感": "appetizing appeal", "自然健康": "natural and healthy", "明亮干净": "bright and clean", "品牌陈列感": "branded display feel", "高效料理": "efficient cooking", "干净秩序": "clean order", "实用美学": "functional aesthetics", "耐用品质": "durable quality", "现代厨房感": "modern kitchen feeling", "清晰高效": "clear and efficient", "理性秩序": "rational order", "学习工作感": "study and work mood", "简洁专业": "simple and professional", "桌面美学": "desktop aesthetics", "活力健康": "active and healthy", "户外探索": "outdoor exploration", "坚固耐用": "sturdy and durable", "运动机能": "sport performance", "清爽动感": "fresh and dynamic", "时尚搭配": "fashion styling", "精致细节": "refined details", "轻奢气质": "quiet luxury mood", "季节氛围": "seasonal atmosphere", "造型完整度": "complete styling", "精致闪耀": "delicate sparkle", "高级礼赠感": "premium gifting mood", "奢华但克制": "luxurious yet restrained", "细节清晰": "clear details", "优雅质感": "elegant texture", "科技清晰": "clean technology feel", "精密细节": "precise details", "高效便携": "efficient and portable", "现代数码感": "modern digital mood", "整洁桌面": "tidy desktop", "车内秩序": "organized car interior", "安全实用": "safe and practical", "精致驾驶感": "refined driving feel", "耐用可靠": "durable and reliable", "清爽整洁": "fresh and tidy", "洁净焕新": "clean and renewed", "清爽明亮": "fresh and bright", "高效去污": "efficient cleaning power", "家庭安心": "home reassurance", "自然生长感": "natural growth feeling", "清新治愈": "fresh and soothing", "户外生活": "outdoor lifestyle", "手作园艺": "hands-on gardening", "生态质感": "organic ecological texture", "趣味可爱": "playful and cute", "礼赠氛围": "gift-giving atmosphere", "色彩明快": "bright colors", "童真想象": "childlike imagination", "整洁陈列": "neat display"
};

const abstractCuesByIndustry = {
  "家居装饰": ["柔和室内留白", "木质与织物层次", "暖光空间氛围", "抽象软装轮廓", "安静舒适色块"],
  "节庆派对用品": ["节日色彩光斑", "抽象彩纸层次", "轻盈飘带轮廓", "柔和庆典背景", "香槟金高光"],
  "母婴用品": ["母婴友好型空间氛围", "柔和安心的育儿环境", "安全温和的浅色空间", "柔软亲肤的环境气质", "无人物家庭育儿空间氛围"],
  "浴室用品": ["水汽渐变背景", "洁净瓷面反光", "柔和水珠高光", "清爽空间留白", "湿润材质层次"],
  "智能家居": ["冷白科技光带", "极简空间秩序", "玻璃与磨砂材质层次", "抽象智能联动光效", "现代家居轮廓"],
  "医疗器械和用品": ["洁净白色空间", "理性蓝白光影", "抗菌材质质感", "专业秩序背景", "安全可信的环境气质"],
  "箱包旅行用品": ["旅行场景色块", "耐磨织物纹理", "城市通勤背景", "有序收纳轮廓", "轻便可靠的材质关系"],
  "美妆个护": ["柔雾渐变背景", "水润高光", "玻璃质感层次", "精致品牌色彩", "护肤仪式感氛围"],
  "宠物用品": ["温暖居家角落", "柔软织物氛围", "安全耐用材质", "轻松治愈色彩", "无人物生活空间"],
  "食品饮料": ["新鲜色彩层次", "食欲感光影", "自然健康背景", "液体高光", "干净餐桌氛围"],
  "厨房用品": ["现代厨房光影", "不锈钢与木质层次", "干净料理空间", "实用秩序背景", "耐用材质关系"],
  "办公文具": ["清晰桌面秩序", "纸张纹理层次", "理性留白", "专业工作空间", "极简光影背景"],
  "运动户外": ["清爽动感光影", "户外自然色块", "机能材质纹理", "远景运动空间", "活力健康氛围"],
  "服饰配件": ["时尚色块陈列", "织物纹理层次", "轻奢配色", "季节氛围背景", "精致造型轮廓"],
  "珠宝饰品": ["柔和金属光泽", "丝绒质感", "细腻高光", "轻奢色彩", "抽象闪耀感", "柔和棚拍渐变背景"],
  "3C 数码配件": ["现代数码光影", "磨砂材质层次", "精密线条轮廓", "极简科技背景", "冷白高光"],
  "汽车用品": ["车内秩序光影", "皮革与金属质感", "驾驶空间轮廓", "耐用材质关系", "清爽整洁背景"],
  "清洁用品": ["洁净焕新光感", "透明材质高光", "清爽明亮空间", "水珠与泡沫质感", "家庭清洁秩序"],
  "园艺用品": ["绿色植被层次", "自然生长氛围", "陶土与木柄质感", "户外庭院光影", "生态色彩背景"],
  "玩具礼品": ["明快色彩背景", "礼赠氛围光影", "童真想象色块", "柔和陈列关系", "整洁趣味空间"]
};

Object.keys(flatIndustryData).forEach((industry) => {
  flatIndustryData[industry].abstractCues = abstractCuesByIndustry[industry] || [
    "行业材质氛围",
    "品牌背景色彩",
    "抽象空间关系",
    "柔和光影层次",
    "类目视觉底图"
  ];
});

const GENERAL_SCENE_NAME = "不限定具体场景 / 通用行业氛围";
const GENERAL_SCENE_CATEGORY = "不限定具体品类 / 通用场景氛围";

const industryData = Object.fromEntries(
  Object.entries(flatIndustryData).map(([industry, data]) => {
    const categories = [
      GENERAL_SCENE_CATEGORY,
      ...data.categories.filter((category) => !category.includes("不限定具体品类"))
    ];

    const sceneEntries = [GENERAL_SCENE_NAME, ...data.scenes];
    const scenes = Object.fromEntries(
      sceneEntries.map((scene) => [
        scene,
        {
          categories,
          materials: data.materials,
          visualKeywords: data.visualKeywords
        }
      ])
    );

    return [
      industry,
      {
        abstractCues: data.abstractCues,
        scenes
      }
    ];
  })
);

const b2bIndustryData = {
  "农业与养殖": {
    abstractCues: ["农田层次线条", "温室柔光", "自然生长色彩", "水培与土壤质感", "现代农业设施轮廓"],
    scenes: {
      "智慧农业温室": {
        categories: [GENERAL_SCENE_CATEGORY, "温室大棚结构", "水肥一体化设备", "环境监测传感器", "补光灯系统", "育苗盘与栽培槽"],
        materials: ["透明薄膜", "镀锌钢架", "营养液管线", "湿润土壤", "LED 补光"],
        visualKeywords: ["现代农业", "清洁高效", "自然生长", "科技种植", "设施秩序"]
      },
      "规模化养殖场": {
        categories: [GENERAL_SCENE_CATEGORY, "自动喂料系统", "养殖栏位", "通风降温设备", "水线饮水设备", "环境消毒设备"],
        materials: ["不锈钢", "耐腐塑料", "混凝土地面", "通风管道", "防潮涂层"],
        visualKeywords: ["规模化管理", "洁净养殖", "安全防疫", "设备秩序", "高效生产"]
      },
      "农产品采后处理": {
        categories: [GENERAL_SCENE_CATEGORY, "分拣输送线", "清洗设备", "冷藏周转箱", "农产品包装台", "称重检测设备"],
        materials: ["食品级不锈钢", "塑料周转箱", "水洗表面", "冷链金属板", "纸质标签"],
        visualKeywords: ["新鲜供应", "标准化处理", "冷链秩序", "干净明亮", "供应链效率"]
      }
    }
  },
  "食品饮料与生鲜供应": {
    abstractCues: ["冷链蓝白光影", "新鲜食材色块", "透明包装层次", "供应链陈列关系", "洁净加工空间"],
    scenes: {
      "食品加工车间": {
        categories: [GENERAL_SCENE_CATEGORY, "灌装生产线", "杀菌设备", "食品输送带", "包装封口机", "金属检测机"],
        materials: ["食品级不锈钢", "透明管道", "防滑地面", "白色墙面", "液体高光"],
        visualKeywords: ["食品安全", "洁净生产", "标准化加工", "高效流水线", "品质可控"]
      },
      "生鲜冷链仓配": {
        categories: [GENERAL_SCENE_CATEGORY, "冷藏货架", "保温周转箱", "冷链运输箱", "生鲜分拣台", "温控显示设备"],
        materials: ["保温泡沫", "冷藏金属板", "透明塑料箱", "防潮标签", "低温雾气"],
        visualKeywords: ["新鲜保供", "低温稳定", "快速周转", "清洁仓配", "供应链可靠"]
      },
      "饮料与瓶装水供应": {
        categories: [GENERAL_SCENE_CATEGORY, "瓶装水产线", "饮料灌装机", "瓶胚与瓶盖", "贴标设备", "箱装堆码区"],
        materials: ["PET 透明瓶", "铝制轨道", "纸箱包装", "液体反光", "塑料瓶盖"],
        visualKeywords: ["清爽透明", "批量供应", "高效灌装", "品牌陈列", "洁净明亮"]
      }
    }
  },
  "能源电力与设施": {
    abstractCues: ["高压线性结构", "蓝白电力光感", "设施矩阵秩序", "金属与绝缘材料", "能源流动感"],
    scenes: {
      "变电站与配电设施": {
        categories: [GENERAL_SCENE_CATEGORY, "开关柜", "变压器", "配电箱", "绝缘子", "母线槽"],
        materials: ["喷涂金属", "绝缘陶瓷", "铜排", "警示标识", "灰色混凝土"],
        visualKeywords: ["电力安全", "设施秩序", "工业可靠", "高压场景", "清晰结构"]
      },
      "新能源发电场": {
        categories: [GENERAL_SCENE_CATEGORY, "光伏组件", "逆变器", "储能柜", "风电塔筒", "汇流箱"],
        materials: ["深色玻璃", "铝合金边框", "白色金属柜", "电缆线束", "户外涂层"],
        visualKeywords: ["清洁能源", "绿色低碳", "户外设施", "规模化阵列", "未来能源"]
      },
      "能源运维监测": {
        categories: [GENERAL_SCENE_CATEGORY, "巡检终端", "监控屏幕", "电缆桥架", "传感采集器", "安全警示牌"],
        materials: ["磨砂塑料", "金属支架", "屏幕玻璃", "电缆橡胶", "反光标识"],
        visualKeywords: ["智能运维", "实时监测", "安全管理", "设施可视化", "系统稳定"]
      }
    }
  },
  "家居生活": {
    abstractCues: ["柔和居家光影", "织物与木质层次", "生活空间留白", "温暖色彩关系", "安静陈列秩序"],
    scenes: {
      "现代居家空间": {
        categories: [GENERAL_SCENE_CATEGORY, "沙发组合", "茶几边柜", "照明灯具", "收纳柜", "装饰摆件"],
        materials: ["棉麻织物", "原木纹理", "哑光金属", "玻璃台面", "暖色灯光"],
        visualKeywords: ["温暖舒适", "现代简洁", "生活方式", "空间质感", "高级留白"]
      },
      "家庭收纳整理": {
        categories: [GENERAL_SCENE_CATEGORY, "收纳箱", "置物架", "衣物整理盒", "抽屉分隔件", "标签系统"],
        materials: ["半透明塑料", "棉布", "竹木", "白色金属", "纸质标签"],
        visualKeywords: ["整洁有序", "高效收纳", "干净明亮", "家庭秩序", "实用美学"]
      },
      "居家清洁护理": {
        categories: [GENERAL_SCENE_CATEGORY, "扫拖工具", "清洁喷瓶", "地面护理用品", "家用香氛", "空气净化设备"],
        materials: ["透明瓶身", "柔软纤维", "亮面塑料", "水珠高光", "浅色地面"],
        visualKeywords: ["清爽洁净", "家庭安心", "焕新空间", "舒适环境", "明亮通透"]
      }
    }
  },
  "厨房与餐饮用品": {
    abstractCues: ["厨房金属高光", "餐桌秩序构图", "烹饪空间光影", "陶瓷与木质关系", "干净料理氛围"],
    scenes: {
      "商用厨房后厨": {
        categories: [GENERAL_SCENE_CATEGORY, "商用灶台", "不锈钢操作台", "排烟系统", "保温餐车", "厨房置物架"],
        materials: ["拉丝不锈钢", "防滑地砖", "耐热玻璃", "黑色炉面", "金属管线"],
        visualKeywords: ["专业后厨", "高效出餐", "洁净耐用", "工业秩序", "餐饮供应"]
      },
      "餐厅桌面服务": {
        categories: [GENERAL_SCENE_CATEGORY, "餐具套装", "调味瓶罐", "桌面菜单架", "餐巾盒", "托盘"],
        materials: ["陶瓷釉面", "玻璃", "木质托盘", "不锈钢", "棉麻餐巾"],
        visualKeywords: ["餐饮氛围", "桌面秩序", "干净服务", "品牌餐桌", "舒适用餐"]
      },
      "食品备餐与打包": {
        categories: [GENERAL_SCENE_CATEGORY, "打包餐盒", "封口膜", "备餐盒", "保温袋", "一次性餐具"],
        materials: ["食品级塑料", "牛皮纸", "铝箔", "透明盖", "防油纸"],
        visualKeywords: ["标准化备餐", "外卖供应", "清洁包装", "快速出餐", "安全卫生"]
      }
    }
  },
  "工业机械": {
    abstractCues: ["重型金属结构", "机械线条层次", "车间冷光", "设备矩阵秩序", "钢铁质感"],
    scenes: {
      "重型加工车间": {
        categories: [GENERAL_SCENE_CATEGORY, "数控机床", "车床", "铣床", "磨床", "加工中心"],
        materials: ["铸铁机身", "切削液反光", "金属导轨", "工业漆面", "钢屑纹理"],
        visualKeywords: ["精密加工", "重工业质感", "稳定可靠", "车间秩序", "机械力量"]
      },
      "工程机械场景": {
        categories: [GENERAL_SCENE_CATEGORY, "液压挖掘部件", "履带底盘", "起重臂结构", "工程轮胎", "液压油缸"],
        materials: ["黄色工业漆", "黑色橡胶", "高强度钢", "液压管路", "耐磨涂层"],
        visualKeywords: ["工程力量", "户外施工", "耐用可靠", "重载能力", "机械结构"]
      },
      "机械维护检修": {
        categories: [GENERAL_SCENE_CATEGORY, "检修平台", "润滑系统", "轴承组件", "工具推车", "机械防护罩"],
        materials: ["油膜金属", "警示黄黑", "橡胶垫", "钢制平台", "透明防护板"],
        visualKeywords: ["设备维护", "安全检修", "工业秩序", "可靠运行", "专业服务"]
      }
    }
  },
  "工业设备与零部件": {
    abstractCues: ["精密零件阵列", "金属反射层次", "装配线秩序", "工业灰蓝色调", "标准件纹理"],
    scenes: {
      "标准件与紧固件": {
        categories: [GENERAL_SCENE_CATEGORY, "螺栓螺母", "垫圈", "铆钉", "弹簧", "销轴"],
        materials: ["镀锌金属", "不锈钢", "黑色氧化层", "拉丝表面", "油封包装"],
        visualKeywords: ["标准化供应", "精密细节", "工业可靠", "批量陈列", "金属质感"]
      },
      "传动与轴承组件": {
        categories: [GENERAL_SCENE_CATEGORY, "轴承", "齿轮", "链条", "同步带轮", "联轴器"],
        materials: ["抛光钢", "润滑油膜", "黑色橡胶", "齿面纹理", "精密倒角"],
        visualKeywords: ["传动效率", "精密配合", "耐磨可靠", "机械细节", "工业核心"]
      },
      "气动与液压元件": {
        categories: [GENERAL_SCENE_CATEGORY, "气缸", "液压阀", "接头", "过滤器", "压力调节器"],
        materials: ["阳极氧化铝", "透明滤杯", "黄铜接头", "黑色密封圈", "金属铭牌"],
        visualKeywords: ["流体控制", "模块化装配", "稳定输出", "精密工业", "系统可靠"]
      }
    }
  },
  "制造与定制加工": {
    abstractCues: ["生产线节奏", "定制工艺纹理", "样品陈列关系", "加工光影", "材料转化过程"],
    scenes: {
      "金属定制加工": {
        categories: [GENERAL_SCENE_CATEGORY, "钣金件", "CNC 加工件", "焊接结构件", "冲压件", "喷涂件"],
        materials: ["冷轧钢板", "铝合金", "焊缝纹理", "喷粉涂层", "切削纹路"],
        visualKeywords: ["来图定制", "工艺精度", "工业制造", "批量加工", "质量稳定"]
      },
      "塑胶与模具制造": {
        categories: [GENERAL_SCENE_CATEGORY, "注塑件", "模具型腔", "硅胶件", "塑料外壳", "橡胶密封件"],
        materials: ["工程塑料", "镜面模具钢", "硅胶", "磨砂表面", "半透明材料"],
        visualKeywords: ["模具精度", "批量成型", "结构定制", "材料稳定", "制造效率"]
      },
      "包装与印刷定制": {
        categories: [GENERAL_SCENE_CATEGORY, "纸盒彩盒", "标签贴纸", "软包装袋", "说明书", "展示纸架"],
        materials: ["铜版纸", "牛皮纸", "覆膜表面", "油墨色块", "瓦楞纸板"],
        visualKeywords: ["品牌包装", "印刷工艺", "批量交付", "色彩准确", "商业展示"]
      }
    }
  },
  "建筑工程": {
    abstractCues: ["施工结构线条", "混凝土灰调", "工程现场秩序", "脚手架几何", "安全标识色块"],
    scenes: {
      "施工现场设施": {
        categories: [GENERAL_SCENE_CATEGORY, "脚手架", "临边护栏", "施工围挡", "塔吊基础", "安全通道"],
        materials: ["镀锌钢管", "混凝土", "防护网", "警示黄黑", "金属扣件"],
        visualKeywords: ["施工安全", "工程秩序", "结构清晰", "现场管理", "耐用设施"]
      },
      "建筑结构施工": {
        categories: [GENERAL_SCENE_CATEGORY, "钢筋笼", "模板系统", "预制构件", "混凝土构件", "连接件"],
        materials: ["钢筋纹理", "木模板", "混凝土表面", "钢制连接板", "湿润砂浆"],
        visualKeywords: ["结构强度", "工程质量", "施工节点", "标准化建造", "稳固可靠"]
      },
      "机电安装工程": {
        categories: [GENERAL_SCENE_CATEGORY, "桥架", "风管", "消防管线", "配电箱", "支吊架"],
        materials: ["镀锌板", "红色管道", "电缆线束", "金属支架", "绝缘涂层"],
        visualKeywords: ["机电集成", "管线秩序", "工程安装", "空间协调", "系统可靠"]
      }
    }
  },
  "建材与房地产": {
    abstractCues: ["建筑立面光影", "材料样板矩阵", "空间尺度感", "现代楼宇线条", "质感墙面层次"],
    scenes: {
      "建筑材料展示": {
        categories: [GENERAL_SCENE_CATEGORY, "瓷砖", "石材板", "木地板", "涂料样板", "装饰板"],
        materials: ["大理石纹理", "木纹", "哑光墙面", "陶瓷釉面", "岩板质感"],
        visualKeywords: ["材料质感", "空间升级", "样板展示", "品质住宅", "现代建筑"]
      },
      "楼盘公共空间": {
        categories: [GENERAL_SCENE_CATEGORY, "入户大堂", "景观铺装", "电梯厅", "标识系统", "公共座椅"],
        materials: ["石材地面", "金属线条", "玻璃幕墙", "暖色灯带", "木饰面"],
        visualKeywords: ["地产质感", "公共空间", "高级秩序", "通透明亮", "品牌空间"]
      },
      "门窗幕墙系统": {
        categories: [GENERAL_SCENE_CATEGORY, "铝合金门窗", "玻璃幕墙", "遮阳百叶", "密封胶条", "五金执手"],
        materials: ["铝型材", "中空玻璃", "黑色密封条", "金属拉手", "反射玻璃"],
        visualKeywords: ["建筑外立面", "节能系统", "通透光感", "结构精密", "现代质感"]
      }
    }
  },
  "通信与网络设备": {
    abstractCues: ["蓝色数据光路", "机柜阵列", "网络线缆秩序", "信号波纹感", "科技基础设施"],
    scenes: {
      "数据中心机房": {
        categories: [GENERAL_SCENE_CATEGORY, "服务器机柜", "网络交换机", "配线架", "光纤跳线", "机房冷通道"],
        materials: ["黑色金属机柜", "蓝色光纤", "LED 指示灯", "网孔面板", "防静电地板"],
        visualKeywords: ["数据基础设施", "高速连接", "机房秩序", "稳定可靠", "科技冷光"]
      },
      "通信基站设施": {
        categories: [GENERAL_SCENE_CATEGORY, "基站天线", "射频模块", "通信机柜", "馈线", "抱杆支架"],
        materials: ["白色玻璃钢", "镀锌支架", "黑色线缆", "户外金属柜", "防水接头"],
        visualKeywords: ["信号覆盖", "户外通信", "稳定传输", "设施可靠", "现代网络"]
      },
      "企业网络布线": {
        categories: [GENERAL_SCENE_CATEGORY, "网线模块", "弱电箱", "理线架", "POE 交换机", "无线 AP"],
        materials: ["蓝色网线", "白色面板", "金属桥架", "塑料线槽", "磨砂外壳"],
        visualKeywords: ["清晰布线", "办公网络", "高效连接", "弱电秩序", "易维护"]
      }
    }
  },
  "仓储物流设备": {
    abstractCues: ["货架透视线条", "仓库高位空间", "物流路径色块", "托盘堆码关系", "工业照明秩序"],
    scenes: {
      "仓库货架系统": {
        categories: [GENERAL_SCENE_CATEGORY, "重型货架", "阁楼货架", "托盘货位", "料箱货架", "仓储标识牌"],
        materials: ["喷涂钢材", "木质托盘", "塑料料箱", "混凝土地面", "黄色护角"],
        visualKeywords: ["高效仓储", "空间利用", "货位管理", "整齐堆码", "工业秩序"]
      },
      "搬运与分拣": {
        categories: [GENERAL_SCENE_CATEGORY, "输送线", "分拣滑槽", "周转箱", "手动液压车", "扫码设备"],
        materials: ["滚筒金属", "橡胶皮带", "蓝色塑料箱", "电子屏幕", "贴纸标签"],
        visualKeywords: ["快速分拣", "物流效率", "批量流转", "自动化动线", "清晰标识"]
      },
      "包装与发货区": {
        categories: [GENERAL_SCENE_CATEGORY, "打包台", "封箱机", "快递纸箱", "打包带", "称重台秤"],
        materials: ["瓦楞纸箱", "透明胶带", "金属台面", "塑料打包带", "标签纸"],
        visualKeywords: ["发货效率", "包装标准", "订单处理", "干净工位", "供应链执行"]
      }
    }
  },
  "五金工具": {
    abstractCues: ["金属工具轮廓", "硬朗工业光影", "工具墙秩序", "橡胶握柄质感", "耐用金属反光"],
    scenes: {
      "维修工具陈列": {
        categories: [GENERAL_SCENE_CATEGORY, "扳手", "螺丝刀", "钳子", "套筒组", "工具箱"],
        materials: ["铬钒钢", "黑色橡胶", "喷砂金属", "红色塑料", "泡棉内衬"],
        visualKeywords: ["耐用可靠", "维修场景", "工具秩序", "金属质感", "专业操作"]
      },
      "切削与打磨": {
        categories: [GENERAL_SCENE_CATEGORY, "钻头", "砂轮片", "锯片", "磨头", "开孔器"],
        materials: ["合金钢", "金刚砂", "钨钢涂层", "黑色氧化层", "切削纹路"],
        visualKeywords: ["锋利耐磨", "加工效率", "工业细节", "硬质材料", "精密切削"]
      },
      "紧固安装耗材": {
        categories: [GENERAL_SCENE_CATEGORY, "膨胀螺丝", "自攻螺钉", "膨胀管", "挂钩", "角码"],
        materials: ["镀锌钢", "尼龙塑料", "不锈钢", "纸盒包装", "金属孔位"],
        visualKeywords: ["安装稳定", "标准耗材", "批量供应", "结构连接", "实用可靠"]
      }
    }
  },
  "电气电工": {
    abstractCues: ["线缆色彩秩序", "电气柜冷光", "铜线与绝缘层", "模块化电工结构", "安全标识关系"],
    scenes: {
      "配电控制空间": {
        categories: [GENERAL_SCENE_CATEGORY, "断路器", "接触器", "继电器", "配电柜", "端子排"],
        materials: ["阻燃塑料", "铜导体", "喷涂钢板", "透明保护盖", "警示标识"],
        visualKeywords: ["电气安全", "模块化控制", "清晰接线", "可靠供电", "工业标准"]
      },
      "线缆与桥架": {
        categories: [GENERAL_SCENE_CATEGORY, "电力电缆", "线槽", "电缆桥架", "接线端子", "扎带"],
        materials: ["PVC 绝缘层", "镀锌钢板", "铜芯线", "尼龙扎带", "橡胶护套"],
        visualKeywords: ["布线秩序", "强弱电管理", "耐用绝缘", "施工规范", "安全清晰"]
      },
      "照明与开关面板": {
        categories: [GENERAL_SCENE_CATEGORY, "LED 工矿灯", "开关插座", "防水插头", "照明控制器", "应急灯"],
        materials: ["PC 面板", "铝散热片", "磨砂灯罩", "防水胶圈", "白色塑料"],
        visualKeywords: ["明亮稳定", "电工安装", "节能照明", "安全防护", "现代面板"]
      }
    }
  },
  "仪器仪表": {
    abstractCues: ["精密刻度线条", "数字显示光感", "金属探头细节", "实验测量氛围", "校准秩序"],
    scenes: {
      "测量检测台": {
        categories: [GENERAL_SCENE_CATEGORY, "万用表", "测温仪", "测厚仪", "水分仪", "电子秤"],
        materials: ["黑色塑料外壳", "LCD 屏幕", "金属探针", "橡胶按键", "校准砝码"],
        visualKeywords: ["精密测量", "数据可信", "检测场景", "清晰读数", "专业仪器"]
      },
      "工业在线监测": {
        categories: [GENERAL_SCENE_CATEGORY, "压力表", "流量计", "液位计", "温湿度传感器", "数据采集器"],
        materials: ["不锈钢壳体", "玻璃表盘", "黄铜接口", "线缆接头", "防爆外壳"],
        visualKeywords: ["实时监测", "工业数据", "稳定运行", "管线系统", "安全可控"]
      },
      "实验分析仪器": {
        categories: [GENERAL_SCENE_CATEGORY, "移液器", "离心机", "显微镜", "酸度计", "分光光度计"],
        materials: ["白色机身", "透明试管", "玻璃镜片", "金属转子", "蓝色屏幕"],
        visualKeywords: ["实验精度", "分析检测", "洁净台面", "科研质感", "数据分析"]
      }
    }
  },
  "自动化与机器人": {
    abstractCues: ["机械臂轨迹线", "自动化蓝光", "生产节拍秩序", "传感器节点", "智能制造空间"],
    scenes: {
      "自动化产线": {
        categories: [GENERAL_SCENE_CATEGORY, "输送线模块", "视觉检测设备", "PLC 控制柜", "工业相机", "扫码模组"],
        materials: ["铝型材", "黑色传送带", "玻璃镜头", "金属机架", "LED 指示灯"],
        visualKeywords: ["智能制造", "高效节拍", "自动检测", "产线秩序", "稳定运行"]
      },
      "工业机器人工作站": {
        categories: [GENERAL_SCENE_CATEGORY, "六轴机械臂", "末端夹具", "安全围栏", "机器人底座", "示教器"],
        materials: ["喷涂金属", "黑色电缆", "透明防护板", "橡胶护套", "铝合金支架"],
        visualKeywords: ["机器人协作", "柔性生产", "安全防护", "精密动作", "工业未来感"]
      },
      "智能仓储机器人": {
        categories: [GENERAL_SCENE_CATEGORY, "AGV 小车", "AMR 机器人", "充电桩", "二维码地标", "调度屏幕"],
        materials: ["磨砂外壳", "橡胶轮", "LED 灯带", "金属货架", "防静电地面"],
        visualKeywords: ["智能搬运", "无人仓储", "路径规划", "高效调度", "科技物流"]
      }
    }
  },
  "环保设备": {
    abstractCues: ["绿色低碳色彩", "过滤层次结构", "水处理光感", "洁净排放氛围", "设备管线秩序"],
    scenes: {
      "污水处理设施": {
        categories: [GENERAL_SCENE_CATEGORY, "过滤罐", "曝气设备", "加药装置", "沉淀池组件", "污水泵"],
        materials: ["玻璃钢", "不锈钢管道", "水面反光", "蓝色阀门", "防腐涂层"],
        visualKeywords: ["水处理", "环保设施", "洁净排放", "系统治理", "绿色工程"]
      },
      "空气净化与废气处理": {
        categories: [GENERAL_SCENE_CATEGORY, "除尘器", "活性炭箱", "废气处理塔", "风机", "过滤棉"],
        materials: ["镀锌板", "活性炭颗粒", "滤材纤维", "灰色金属壳", "管道接口"],
        visualKeywords: ["清洁空气", "工业环保", "过滤净化", "排放治理", "安全运行"]
      },
      "固废回收设备": {
        categories: [GENERAL_SCENE_CATEGORY, "压缩打包机", "分选输送线", "回收箱", "破碎机", "磁选设备"],
        materials: ["重型钢板", "橡胶输送带", "彩色分类标识", "金属刀辊", "塑料料片"],
        visualKeywords: ["循环利用", "分类回收", "绿色低碳", "资源再生", "设备效率"]
      }
    }
  },
  "管道阀门与泵": {
    abstractCues: ["管线几何秩序", "阀门金属高光", "流体路径暗示", "工业接口关系", "压力系统结构"],
    scenes: {
      "工业管道系统": {
        categories: [GENERAL_SCENE_CATEGORY, "法兰管件", "弯头三通", "不锈钢管", "补偿器", "管道支架"],
        materials: ["不锈钢", "碳钢喷漆", "密封垫片", "焊缝纹理", "保温层"],
        visualKeywords: ["管线秩序", "工业流体", "系统连接", "耐压可靠", "工程安装"]
      },
      "阀门控制场景": {
        categories: [GENERAL_SCENE_CATEGORY, "球阀", "蝶阀", "闸阀", "电动执行器", "调节阀"],
        materials: ["铸钢壳体", "红色手轮", "黄铜阀体", "橡胶密封", "金属铭牌"],
        visualKeywords: ["流体控制", "压力调节", "安全可靠", "工业接口", "清晰结构"]
      },
      "泵站与给排水": {
        categories: [GENERAL_SCENE_CATEGORY, "离心泵", "潜水泵", "增压泵", "泵控制柜", "水管接头"],
        materials: ["蓝色泵体", "铸铁", "不锈钢叶轮", "电缆橡胶", "水面高光"],
        visualKeywords: ["稳定输送", "给排水系统", "动力设备", "设施运转", "工程可靠"]
      }
    }
  },
  "实验室与化工用品": {
    abstractCues: ["实验台洁净留白", "透明玻璃器皿", "化学液体色层", "蓝白科研光感", "安全标签秩序"],
    scenes: {
      "实验室耗材台": {
        categories: [GENERAL_SCENE_CATEGORY, "试管", "烧杯", "培养皿", "移液枪头", "离心管"],
        materials: ["硼硅玻璃", "透明塑料", "蓝色盖帽", "白色实验台", "刻度线"],
        visualKeywords: ["洁净实验", "科研耗材", "标准化操作", "透明质感", "精密分析"]
      },
      "化工储存与转运": {
        categories: [GENERAL_SCENE_CATEGORY, "化工桶", "试剂瓶", "危化标签", "防泄漏托盘", "密封盖"],
        materials: ["HDPE 塑料", "棕色玻璃", "防腐涂层", "标签纸", "黄色托盘"],
        visualKeywords: ["安全储存", "化工供应", "规范标识", "防泄漏", "材料稳定"]
      },
      "实验室设备": {
        categories: [GENERAL_SCENE_CATEGORY, "通风柜", "恒温箱", "磁力搅拌器", "超净工作台", "实验室水槽"],
        materials: ["白色金属", "透明视窗", "耐腐台面", "不锈钢水槽", "数字屏幕"],
        visualKeywords: ["实验安全", "洁净科研", "设备可靠", "专业分析", "规范空间"]
      }
    }
  },
  "安全防护用品": {
    abstractCues: ["警示色块关系", "防护材质纹理", "工业安全空间", "反光条高光", "规范陈列秩序"],
    scenes: {
      "工业个人防护": {
        categories: [GENERAL_SCENE_CATEGORY, "安全帽", "防护眼镜", "防尘口罩", "劳保手套", "防护鞋"],
        materials: ["ABS 外壳", "透明镜片", "无纺布滤材", "丁腈橡胶", "反光材料"],
        visualKeywords: ["安全防护", "工业规范", "耐用可靠", "清晰警示", "专业装备"]
      },
      "消防与应急": {
        categories: [GENERAL_SCENE_CATEGORY, "灭火器", "消防箱", "应急灯", "安全出口标识", "消防水带"],
        materials: ["红色金属", "反光标识", "透明面罩", "橡胶水带", "白色灯罩"],
        visualKeywords: ["应急保障", "消防安全", "醒目标识", "快速响应", "设施规范"]
      },
      "现场安全管理": {
        categories: [GENERAL_SCENE_CATEGORY, "警示围栏", "反光锥", "安全标识牌", "防坠网", "隔离带"],
        materials: ["红白塑料", "反光膜", "尼龙网", "镀锌支架", "PVC 标识板"],
        visualKeywords: ["现场秩序", "风险隔离", "醒目安全", "工程防护", "规范管理"]
      }
    }
  }
};

Object.assign(industryData, b2bIndustryData);

Object.assign(englishTerms, {
  "农业与养殖": "agriculture and aquaculture",
  "食品饮料与生鲜供应": "food, beverage, and fresh supply",
  "能源电力与设施": "energy, power, and facilities",
  "家居生活": "home living",
  "厨房与餐饮用品": "kitchen and catering supplies",
  "工业机械": "industrial machinery",
  "工业设备与零部件": "industrial equipment and components",
  "制造与定制加工": "manufacturing and custom fabrication",
  "建筑工程": "construction engineering",
  "建材与房地产": "building materials and real estate",
  "通信与网络设备": "telecommunications and network equipment",
  "仓储物流设备": "warehousing and logistics equipment",
  "五金工具": "hardware tools",
  "电气电工": "electrical and electrician supplies",
  "仪器仪表": "instruments and meters",
  "自动化与机器人": "automation and robotics",
  "环保设备": "environmental protection equipment",
  "管道阀门与泵": "pipes, valves, and pumps",
  "实验室与化工用品": "laboratory and chemical supplies",
  "安全防护用品": "safety and protective equipment",
  "不限定具体品类 / 通用场景氛围": "general scene atmosphere"
});

window.industryData = industryData;
window.englishTerms = englishTerms;
