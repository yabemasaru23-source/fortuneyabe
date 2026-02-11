/* 四柱推命データ定義 */

// 天干（10干）
const HEAVENLY_STEMS = [
    { kanji: '甲', yinYang: 'yang', element: 'wood', number: 1 },
    { kanji: '乙', yinYang: 'yin', element: 'wood', number: 2 },
    { kanji: '丙', yinYang: 'yang', element: 'fire', number: 3 },
    { kanji: '丁', yinYang: 'yin', element: 'fire', number: 4 },
    { kanji: '戊', yinYang: 'yang', element: 'earth', number: 5 },
    { kanji: '己', yinYang: 'yin', element: 'earth', number: 6 },
    { kanji: '庚', yinYang: 'yang', element: 'metal', number: 7 },
    { kanji: '辛', yinYang: 'yin', element: 'metal', number: 8 },
    { kanji: '壬', yinYang: 'yang', element: 'water', number: 9 },
    { kanji: '癸', yinYang: 'yin', element: 'water', number: 10 }
];

// 地支（12支）
const EARTHLY_BRANCHES = [
    { kanji: '子', animal: 'rat', element: 'water', number: 1 },
    { kanji: '丑', animal: 'ox', element: 'earth', number: 2 },
    { kanji: '寅', animal: 'tiger', element: 'wood', number: 3 },
    { kanji: '卯', animal: 'rabbit', element: 'wood', number: 4 },
    { kanji: '辰', animal: 'dragon', element: 'earth', number: 5 },
    { kanji: '巳', animal: 'snake', element: 'fire', number: 6 },
    { kanji: '午', animal: 'horse', element: 'fire', number: 7 },
    { kanji: '未', animal: 'sheep', element: 'earth', number: 8 },
    { kanji: '申', animal: 'monkey', element: 'metal', number: 9 },
    { kanji: '酉', animal: 'rooster', element: 'metal', number: 10 },
    { kanji: '戌', animal: 'dog', element: 'earth', number: 11 },
    { kanji: '亥', animal: 'pig', element: 'water', number: 12 }
];

// 通変星（10神）
const TRANSFORMATION_STARS = {
    '比肩': 'Friend',
    '劫財': 'Rob Wealth',
    '食神': 'Eating God',
    '傷官': 'Hurting Officer',
    '偏財': 'Indirect Wealth',
    '正財': 'Direct Wealth',
    '偏官': 'Indirect Officer',
    '正官': 'Direct Officer',
    '印綬': 'Direct Resource',
    '偏印': 'Indirect Resource'
};

// 十二運星（长生十二宫）
const LIFE_STAGES = [
    '絶', '胎', '養', '長生', '沐浴', '冠帯', '建禄', '帝旺', '衰', '病', '死', '墓'
];

// 蔵干（地支に含まれる天干）
const HIDDEN_STEMS = {
    '子': ['癸'],
    '丑': ['己', '癸', '辛'],
    '寅': ['甲', '丙', '戊'],
    '卯': ['乙'],
    '辰': ['戊', '乙', '癸'],
    '巳': ['丙', '戊', '庚'],
    '午': ['丁', '己'],
    '未': ['己', '丁', '乙'],
    '申': ['庚', '戊', '壬'],
    '酉': ['辛'],
    '戌': ['戊', '辛', '丁'],
    '亥': ['壬', '甲']
};

// 六十干支（六十甲子）
const SEXAGENARY_CYCLE = [
    '甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉',
    '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未',
    '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳',
    '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯',
    '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑',
    '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'
];

// 五行の相関関係
const ELEMENTAL_RELATIONSHIPS = {
    'wood': { generates: 'fire', controls: 'earth', generatedBy: 'water', controlledBy: 'metal' },
    'fire': { generates: 'earth', controls: 'metal', generatedBy: 'wood', controlledBy: 'water' },
    'earth': { generates: 'metal', controls: 'water', generatedBy: 'fire', controlledBy: 'wood' },
    'metal': { generates: 'water', controls: 'wood', generatedBy: 'earth', controlledBy: 'fire' },
    'water': { generates: 'wood', controls: 'fire', generatedBy: 'metal', controlledBy: 'earth' }
};

// 天中殺の定義（特定の干支の組み合わせ）
const TEN_CHU_KILLING = [
    '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未',
    '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳',
    '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯',
    '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑',
    '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'
];

// 月柱の計算用（節入り日）
const SOLAR_TERMS = [
    { name: '小寒', month: 12 },
    { name: '大寒', month: 12 },
    { name: '立春', month: 1 },
    { name: '雨水', month: 2 },
    { name: '啓蟄', month: 3 },
    { name: '春分', month: 3 },
    { name: '清明', month: 4 },
    { name: '穀雨', month: 4 },
    { name: '立夏', month: 5 },
    { name: '小満', month: 5 },
    { name: '芒種', month: 6 },
    { name: '夏至', month: 6 },
    { name: '小暑', month: 7 },
    { name: '大暑', month: 7 },
    { name: '立秋', month: 8 },
    { name: '処暑', month: 8 },
    { name: '白露', month: 9 },
    { name: '秋分', month: 9 },
    { name: '寒露', month: 10 },
    { name: '霜降', month: 10 },
    { name: '立冬', month: 11 },
    { name: '小雪', month: 11 },
    { name: '大雪', month: 12 },
    { name: '冬至', month: 12 }
];

// 大運の計算用（月柱からの順送り・逆送り）
const BIG_LUCK_FORWARD = [
    '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥',
    '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉',
    '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未',
    '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳',
    '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑', '甲寅', '乙卯',
    '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥', '甲子', '乙丑'
];

const BIG_LUCK_BACKWARD = [
    '壬寅', '辛丑', '庚子', '己亥', '戊戌', '丁酉', '丙申', '乙未', '甲午', '癸巳',
    '壬辰', '辛卯', '庚寅', '己丑', '戊子', '丁亥', '丙戌', '乙酉', '甲申', '癸未',
    '壬午', '辛巳', '庚辰', '己卯', '戊寅', '丁丑', '丙子', '乙亥', '甲戌', '癸酉',
    '壬申', '辛未', '庚午', '己巳', '戊辰', '丁卯', '丙寅', '乙丑', '甲子', '癸亥',
    '壬戌', '辛酉', '庚申', '己未', '戊午', '丁巳', '丙辰', '乙卯', '甲寅', '癸丑',
    '壬子', '辛亥', '庚戌', '己酉', '戊申', '丁未', '丙午', '乙巳', '甲辰', '癸卯'
];