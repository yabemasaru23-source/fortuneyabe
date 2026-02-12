/* 大森さんの命式データ - 正確な鑑定結果 */

// 大森玲さんの基本情報
const OMORI_PERSONAL_INFO = {
    name: "大森玲",
    birthDate: "1977年11月11日",
    birthTime: "17時00分",
    gender: "男性",
    birthPlace: "甲府付近",
    generationDate: "2025/02/07 19:21"
};

// 正確な四柱（大森さんの命式）
const OMORI_FOUR_PILLARS = {
    hour: {
        pillar: "己酉",        // 時柱
        heavenlyStem: "己",    // 天干
        earthlyBranch: "酉",   // 地支
        yinYang: "-",        // 陰陽
        element: "土",       // 五行
        number: 6            // 番号
    },
    day: {
        pillar: "辛亥",        // 日柱
        heavenlyStem: "辛",    // 天干
        earthlyBranch: "亥",   // 地支
        yinYang: "-",        // 陰陽
        element: "水",       // 五行
        number: 8            // 番号
    },
    month: {
        pillar: "壬申",        // 月柱
        heavenlyStem: "壬",    // 天干
        earthlyBranch: "申",   // 地支
        yinYang: "+",        // 陰陽
        element: "金",       // 五行
        number: 9            // 番号
    },
    year: {
        pillar: "丁巳",        // 年柱
        heavenlyStem: "丁",    // 天干
        earthlyBranch: "巳",   // 地支
        yinYang: "-",        // 陰陽
        element: "火",       // 五行
        number: 4            // 番号
    }
};

// 蔵干と通変星（正確なデータ）
const OMORI_HIDDEN_STEMS = {
    hour: {
        branch: "酉",
        hiddenStems: ["辛"],
        transformationStars: ["正官"],
        lifeStage: "沐浴"
    },
    day: {
        branch: "亥",
        hiddenStems: ["壬", "甲"],
        transformationStars: ["印綬", "偏印"],
        lifeStage: "長生"
    },
    month: {
        branch: "申",
        hiddenStems: ["庚", "戊", "壬"],
        transformationStars: ["偏官", "偏官", "偏官"],
        lifeStage: "建禄"
    },
    year: {
        branch: "巳",
        hiddenStems: ["丙", "戊", "庚"],
        transformationStars: ["正財", "偏官", "偏官"],
        lifeStage: "絶"
    }
};

// 大運（正確なデータ）
const OMORI_BIG_LUCK = [
    {
        age: "0歳0カ月〜",
        pillar: "辛亥",
        transformationStar: "印綬",
        lifeStage: "建禄",
        relation: "大運天中殺",
        isTenchu: true
    },
    {
        age: "1歳4カ月〜",
        pillar: "庚戌",
        transformationStar: "偏印",
        lifeStage: "冠帯",
        relation: "大運天中殺",
        isTenchu: true
    },
    {
        age: "11歳4カ月〜",
        pillar: "己酉",
        transformationStar: "正官",
        lifeStage: "沐浴",
        relation: "",
        isTenchu: false
    },
    {
        age: "21歳4カ月〜",
        pillar: "戊申",
        transformationStar: "偏官",
        lifeStage: "長生",
        relation: "",
        isTenchu: false
    },
    {
        age: "31歳4カ月〜",
        pillar: "丁未",
        transformationStar: "正財",
        lifeStage: "養",
        relation: "",
        isTenchu: false
    },
    {
        age: "41歳4カ月〜",
        pillar: "丙午",
        transformationStar: "偏財",
        lifeStage: "胎",
        relation: "",
        isTenchu: false
    },
    {
        age: "51歳4カ月〜",
        pillar: "乙巳",
        transformationStar: "傷官",
        lifeStage: "絶",
        relation: "",
        isTenchu: false
    },
    {
        age: "61歳4カ月〜",
        pillar: "甲辰",
        transformationStar: "食神",
        lifeStage: "墓",
        relation: "",
        isTenchu: false
    },
    {
        age: "71歳4カ月〜",
        pillar: "癸卯",
        transformationStar: "劫財",
        lifeStage: "死",
        relation: "",
        isTenchu: false
    },
    {
        age: "81歳4カ月〜",
        pillar: "壬寅",
        transformationStar: "比肩",
        lifeStage: "病",
        relation: "",
        isTenchu: false
    },
    {
        age: "91歳4カ月〜",
        pillar: "辛丑",
        transformationStar: "印綬",
        lifeStage: "衰",
        relation: "",
        isTenchu: false
    }
];

// 特殊情報
const OMORI_SPECIAL_INFO = {
    tenchuKilling: {
        hasTenchu: true,
        affectedPillars: ["年柱", "月柱", "日柱", "時柱"],
        description: "天中殺があります"
    },
    monthlyKilling: {
        hasMonthlyKill: true,
        description: "生月中殺があります。"
    },
    bigLuckTenchu: {
        hasTenchuInBigLuck: true,
        affectedAges: ["0歳0カ月〜", "1歳4カ月〜"],
        description: "大運天中殺"
    }
};

// 日柱の分析（日主）
const OMORI_DAY_MASTER = {
    stem: "辛",
    element: "金",
    yinYang: "陰",
    season: "秋", // 1977年11月は秋から冬の移り変わり
    strength: "中和", // 月柱の申（金）により強くなる
    favorableElements: ["水", "木"],
    unfavorableElements: ["火", "土"]
};

// 命式の総合分析
const OMORI_ANALYSIS = {
    fiveElementsBalance: {
        wood: 1,    // 日柱の亥に甲木が蔵干
        fire: 2,    // 年柱の丁、年柱の巳に丙火が蔵干
        earth: 3,   // 時柱の己、月柱の申に戊土が蔵干、年柱の巳に戊土が蔵干
        metal: 4,   // 日柱の辛、時柱の酉、月柱の申に庚金が蔵干、年柱の巳に庚金が蔵干
        water: 3    // 月柱の壬、日柱の亥、月柱の申に壬水が蔵干
    },
    characteristics: {
        strengths: ["論理的思考力", "判断力", "実行力"],
        weaknesses: ["頑固さ", "情熱の欠如"],
        personality: "金気が強く、論理的で現実的な性格。水の影響で柔軟性もあり、申月生まれで直感力も備える。"
    },
    lifePath: {
        earlyYears: "大運天中殺により幼少期は波乱あり",
        middleYears: "31歳から正財運で安定した生活",
        laterYears: "71歳から劫財運で人間関係に注目"
    }
};

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        OMORI_PERSONAL_INFO,
        OMORI_FOUR_PILLARS,
        OMORI_HIDDEN_STEMS,
        OMORI_BIG_LUCK,
        OMORI_SPECIAL_INFO,
        OMORI_DAY_MASTER,
        OMORI_ANALYSIS
    };
}