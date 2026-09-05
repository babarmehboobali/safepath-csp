export type GlossLang = "en" | "ar" | "ur" | "es" | "fr" | "pt" | "zh" | "hi" | "de" | "tr" | "id" | "ru";

export type GlossEntry = { en: string } & Partial<Record<GlossLang, string>>;

export const GLOSSARY: Record<string, GlossEntry> = {
  hierarchy: {
    en: "Forced ranking of controls from the source: elimination, substitution, engineering, administrative, PPE.",
    ar: "ترتيب إجباري للضوابط من المصدر: إزالة، استبدال، هندسة، إداري، معدات وقاية شخصية.",
    ur: "کنٹرول کی لازمی ترتیب ماخذ سے: خاتمہ، متبادل، انجینیئرنگ، انتظامی، پی پی ای۔",
  },
  elimination: {
    en: "Remove the hazard so the energy or chemical never arrives.",
    ar: "إزالة الخطر بحيث لا يصل مصدر الطاقة أو المادة أصلاً.",
    ur: "خطرے کو ختم کرنا تاکہ توانائی یا کیمیکل آئے ہی نہ۔",
  },
  substitution: {
    en: "Trade the hazard for a lesser one that still does the work.",
    ar: "استبدال الخطر بخطر أقل مع بقاء العمل ممكناً.",
    ur: "خطرے کو کم خطرے والے عمل سے بدلنا۔",
  },
  engineering: {
    en: "Hardware that works if the person is tired: guards, ventilation, interlocks.",
    ar: "عتاد يعمل حتى مع التعب: حواجز، تهوية، أقفال تداخل.",
    ur: "ہارڈویئر جو تھکے ہوئے شخص کے باوجود کام کرے۔",
  },
  administrative: {
    en: "Paper and people: permits, rotation, training, signs. Not a substitute for an open higher row.",
    ar: "ورق وأشخاص: تصاريح، تناوب، تدريب. لا يغني عن صف أعلى ما زال مفتوحاً.",
    ur: "کاغذ اور لوگ: پرمٹ، گردش، تربیت۔ کھلی اونچی قطار کا بدل نہیں۔",
  },
  ppe: {
    en: "Last barrier on the body. Respirators, gloves, glasses. Not the first answer if design is still open.",
    ar: "آخر حاجز على الجسم. ليس الجواب الأول إذا بقي التصميم مفتوحاً.",
    ur: "جسم پر آخری رکاوٹ۔ اگر ڈیزائن کھلا ہو تو پہلا جواب نہیں۔",
  },
  ptd: {
    en: "Prevention through Design: move control to concept and design, not to late add-on PPE.",
    ar: "الوقاية بالتصميم: نقل الضبط إلى مرحلة المفهوم لا إلى معدات متأخرة.",
    ur: "ڈیزائن کے ذریعے بچاؤ: کنٹرول تصور اور ڈیزائن پر، دیر سے پی پی ای پر نہیں۔",
  },
  loto: {
    en: "Lockout/tagout: isolate energy, lock it, try-out before work.",
    ar: "قفل ووسم: عزل الطاقة ثم القفل ثم التجريب قبل العمل.",
    ur: "لاک آؤٹ/ٹیگ آؤٹ: توانائی الگ کریں، تالا، پھر ٹرائی آؤٹ۔",
  },
  pel: {
    en: "Permissible Exposure Limit. OSHA legal limit. Not the same as TLV or REL.",
    ar: "حد التعرض المسموح. حد قانوني لدى OSHA. ليس TLV أو REL.",
    ur: "قابلِ اجازت نمائش حد۔ OSHA قانونی حد۔ TLV/REL نہیں۔",
  },
  tlv: {
    en: "Threshold Limit Value. ACGIH advisory. Do not call it the OSHA PEL.",
    ar: "قيمة الحد العتبي. استشارية من ACGIH. ليست حد OSHA.",
    ur: "عتبہ حد۔ ACGIH مشورتی۔ OSHA PEL نہ کہیں۔",
  },
  rel: {
    en: "Recommended Exposure Limit. NIOSH health recommendation, not a citation limit.",
    ar: "حد التعرض الموصى به من NIOSH. ليس حد مخالفة.",
    ur: "تجویز کردہ نمائش حد۔ NIOSH صحت سفارش، سٹیشن حد نہیں۔",
  },
  twa: {
    en: "Time-Weighted Average over a work shift, usually eight hours.",
    ar: "متوسط مرجح بالزمن لنوبة عمل، عادة ثماني ساعات.",
    ur: "وقت وزنی اوسط، عموماً آٹھ گھنٹے۔",
  },
  stel: {
    en: "Short-Term Exposure Limit, typically 15 minutes.",
    ar: "حد التعرض القصير، عادة خمس عشرة دقيقة.",
    ur: "قلیل مدتی نمائش حد، عموماً پندرہ منٹ۔",
  },
  osha: {
    en: "U.S. Occupational Safety and Health Administration. Legal standards such as 1910 and 1926.",
    ar: "إدارة السلامة والصحة المهنية الأمريكية. معايير قانونية مثل 1910 و1926.",
    ur: "امریکی پیشہ ورانہ حفاظت انتظامیہ۔ قانونی معیارات 1910/1926۔",
  },
  niosh: {
    en: "U.S. National Institute for Occupational Safety and Health. Research and RELs, not citations.",
    ar: "المعهد الوطني الأمريكي للسلامة. أبحاث وحدود موصى بها لا مخالفات.",
    ur: "NIOSH تحقیق اور REL، سٹیشن نہیں۔",
  },
  moc: {
    en: "Management of Change: assess the change before, during, and after it hits the field.",
    ar: "إدارة التغيير: تقييم التغيير قبل وأثناء وبعد الميدان.",
    ur: "تبدیلی کا انتظام: میدان سے پہلے، دوران، بعد۔",
  },
  jha: {
    en: "Job Hazard Analysis: task, hazard, control. If the last step is still PPE, walk the pyramid again.",
    ar: "تحليل مخاطر العمل: مهمة، خطر، ضبط.",
    ur: "جاب ہیزرڈ تجزیہ: کام، خطرہ، کنٹرول۔",
  },
  jsa: {
    en: "Job Safety Analysis. Same idea as JHA: steps, hazards, controls.",
    ar: "تحليل سلامة العمل. نفس منطق تحليل المخاطر.",
    ur: "جاب سیفٹی تجزیہ۔ JHA جیسا۔",
  },
  pha: {
    en: "Process Hazard Analysis: HAZOP, What-If, checklist on a process.",
    ar: "تحليل مخاطر العملية: هازوب أو ماذا-لو على عملية.",
    ur: "عملیاتی خطرہ تجزیہ۔",
  },
  hazop: {
    en: "Hazard and Operability study. Guide words on deviations (no flow, more pressure).",
    ar: "دراسة المخاطر وقابلية التشغيل. كلمات دليل على الانحرافات.",
    ur: "ہیزرڈ اینڈ آپریبلٹی۔ انحراف پر گائیڈ ورڈز۔",
  },
  fmea: {
    en: "Failure Modes and Effects Analysis. Severity, occurrence, detection — not a license to skip substitution.",
    ar: "تحليل أنماط الفشل وآثاره.",
    ur: "فیلور موڈز اور اثرات کا تجزیہ۔",
  },
  ics: {
    en: "Incident Command System. One commander. Span of control about 3–7.",
    ar: "نظام قيادة الحوادث. قائد واحد. نطاق 3 إلى 7.",
    ur: "حادثہ کمانڈ نظام۔ ایک کمانڈر۔",
  },
  nfpa: {
    en: "National Fire Protection Association. Consensus fire and life-safety codes.",
    ar: "الجمعية الوطنية للحماية من الحرائق.",
    ur: "قومی آگ حفاظت انجمن۔",
  },
  rwl: {
    en: "Recommended Weight Limit from the NIOSH lifting equation. A zero multiplier collapses RWL.",
    ar: "الوزن الموصى به من معادلة الرفع NIOSH.",
    ur: "NIOSH لفٹ مساوات کی تجویز کردہ وزن حد۔",
  },
  wbgt: {
    en: "Wet Bulb Globe Temperature. Heat stress index used with work-rest cycles.",
    ar: "حرارة الكرة الرطبة. مؤشر إجهاد حراري.",
    ur: "وٹ بلگ گلوب درجہ حرارت۔ حرارت تناؤ اشاریہ۔",
  },
  ghs: {
    en: "Globally Harmonized System for classifying and labeling chemicals.",
    ar: "النظام العالمي المنسق لتصنيف ووسم الكيماويات.",
    ur: "کیمیکل درجہ بندی اور لیبل کا عالمی نظام۔",
  },
  sds: {
    en: "Safety Data Sheet. Sixteen-section chemical information. Not a substitute for controls.",
    ar: "ورقة بيانات السلامة. ليست بديلاً عن الضوابط.",
    ur: "سیفٹی ڈیٹا شیٹ۔ کنٹرول کا بدل نہیں۔",
  },
  rcra: {
    en: "U.S. hazardous waste statute (Resource Conservation and Recovery Act).",
    ar: "قانون النفايات الخطرة الأمريكي.",
    ur: "امریکی خطرناک فضلہ قانون۔",
  },
  iso: {
    en: "International Organization for Standardization. 45001 is OH&S management systems.",
    ar: "المنظمة الدولية للتقييس. 45001 لأنظمة السلامة.",
    ur: "بین الاقوامی معیاری تنظیم۔ 45001 صحت و حفاظت نظام۔",
  },
  pdca: {
    en: "Plan-Do-Check-Act cycle in Z10 and ISO management systems.",
    ar: "خطط-نفذ-افحص-صحح في أنظمة زِد10 وISO.",
    ur: "پلان ڈو چیک ایکٹ چکر۔",
  },
  sif: {
    en: "Serious Injury and Fatality potential. Manuele: control high-energy events, not only recordables.",
    ar: "إمكانية الإصابة الجسيمة أو الوفاة. السيطرة على الطاقة العالية.",
    ur: "شدید چوٹ/اموات کا امکان۔ اونچی توانائی پر کنٹرول۔",
  },
  leading: {
    en: "Leading indicator: a measure before the loss (inspections closed, observations).",
    ar: "مؤشر قائد: قياس قبل الخسارة.",
    ur: "لیڈنگ اشاریہ: نقصان سے پہلے۔",
  },
  lagging: {
    en: "Lagging indicator: a measure after the loss (TRIR, DART, claims).",
    ar: "مؤشر متأخر: قياس بعد الخسارة.",
    ur: "لیگنگ اشاریہ: نقصان کے بعد۔",
  },
  trir: {
    en: "Total Recordable Incident Rate. OSHA 300 math. A lagging rate.",
    ar: "معدل الحوادث المسجلة. مؤشر متأخر.",
    ur: "کل ریکارڈ ایبل شرح۔ پیچھے رہنے والا اشاریہ۔",
  },
  confined: {
    en: "Space not designed for continuous occupancy with limited entry. Atmosphere before anyone crosses the plane.",
    ar: "مكان غير مصمم للإشغال المستمر. الجو قبل عبور المستوى.",
    ur: "مسلسل رہائش کے لیے نہ بنا ہوا مقام۔ داخلے سے پہلے ماحول۔",
  },
  excavation: {
    en: "Cut in the earth. Slope, shore, or shield before anyone stands in the cut.",
    ar: "حفر في الأرض. ميل أو تدعيم أو درع قبل الوقوف فيه.",
    ur: "کھدائی۔ ڈھلان، سہارا یا شیلڈ پہلے۔",
  },
  dose: {
    en: "Noise dose is time fractions Ci/Ti, not an average of decibels.",
    ar: "جرعة الضوضاء كسور زمن لا متوسط ديسيبل.",
    ur: "شور ڈوز وقت کے کسر، ڈیسیبل اوسط نہیں۔",
  },
  exchange: {
    en: "Exchange rate: OSHA 5 dB, NIOSH 3 dB. Do not mix tables.",
    ar: "معدل التبادل: OSHA خمسة، NIOSH ثلاثة. لا تخلط الجداول.",
    ur: "ایکسچینج ریٹ: OSHA 5، NIOSH 3۔ جدول نہ ملائیں۔",
  },
  residual: {
    en: "Risk left after higher controls are honestly closed. Allowed. Not an excuse to skip a still-open row.",
    ar: "خطر متبقٍ بعد إغلاق الصفوف الأعلى بصدق.",
    ur: "اونچے کنٹرول بند ہونے کے بعد بچا خطرہ۔",
  },
};

const ALIAS: Record<string, string> = {
  "lockout": "loto",
  "tagout": "loto",
  "lockout/tagout": "loto",
  "permit-required": "confined",
  "hazwoper": "rcra",
  "acgih": "tlv",
  "1910": "osha",
  "1926": "osha",
  "45001": "iso",
  "z10": "pdca",
  "ansi": "pdca",
  "niosh": "niosh",
  "respirator": "ppe",
  "cartridge": "ppe",
  "guard": "engineering",
  "interlock": "engineering",
  "permit": "administrative",
  "training": "administrative",
  "pyramid": "hierarchy",
  "controls": "hierarchy",
};

export function lookupTerm(raw: string): { key: string; entry: GlossEntry } | null {
  const word = raw.toLowerCase().replace(/[^a-z0-9/+\-]/g, "");
  if (!word || word.length < 3) return null;
  if (GLOSSARY[word]) return { key: word, entry: GLOSSARY[word]! };
  const alias = ALIAS[word];
  if (typeof alias === "string" && GLOSSARY[alias]) return { key: alias, entry: GLOSSARY[alias]! };
  return null;
}

export const LANG_META: Record<GlossLang, { label: string; dir: "ltr" | "rtl" }> = {
  en: { label: "English", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
  ur: { label: "اردو", dir: "rtl" },
  es: { label: "Español", dir: "ltr" },
  fr: { label: "Français", dir: "ltr" },
  pt: { label: "Português", dir: "ltr" },
  zh: { label: "中文", dir: "ltr" },
  hi: { label: "हिन्दी", dir: "ltr" },
  de: { label: "Deutsch", dir: "ltr" },
  tr: { label: "Türkçe", dir: "ltr" },
  id: { label: "Bahasa Indonesia", dir: "ltr" },
  ru: { label: "Русский", dir: "ltr" },
};

export function sense(entry: GlossEntry, lang: GlossLang) {
  return entry[lang] || entry.en;
}

export function missingNative(entry: GlossEntry, lang: GlossLang) {
  return !entry[lang];
}
