import type { QrFormData } from "./types";

export const initialFormData: QrFormData = {
  text: "",
  format: "png",
  size: "150",
  margin: "4",
  bgColor: "#ffffff",
  qrColor: "#000000",
  imageUrl: "",
  imageRatio: "0.3",
  centerImageWidth: "",
  centerImageHeight: "",
  caption: "",
  fontFamily: "FreeSans",
  fontSize: "10",
};

export const imageRatioValue = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
];

export const regex = /^https?:\/\/[^\s]+$/i;

export const fonts = [
  {
    font_family: "DejaVu Serif",
    styles: ["Bold", "Bold Italic", "Book", "Italic"],
  },
  {
    font_family: "Noto Sans Thai",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Modi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Pahawh Hmong",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Old North Arabian,Noto Sans OldNorArab",
    styles: ["Regular"],
  },
  {
    font_family: "DejaVu Sans Mono",
    styles: ["Book", "Oblique", "Bold Oblique", "Bold"],
  },
  {
    font_family: "Noto Sans Cypriot",
    styles: ["Regular"],
  },
  {
    font_family: "DejaVu Sans",
    styles: ["Oblique", "Bold Oblique", "Book", "Bold"],
  },
  {
    font_family: "Noto Sans Psalter Pahlavi,Noto Sans PsaPahlavi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Warang Citi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Lisu",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Mongolian",
    styles: ["Regular"],
  },
  {
    font_family: "Tinos",
    styles: ["Italic", "Regular", "Bold Italic", "Bold"],
  },
  {
    font_family: "DejaVu Sans,DejaVu Sans Condensed",
    styles: [
      "Condensed Oblique,Oblique",
      "Condensed,Book",
      "Condensed Bold Italic,Bold Italic",
      "Condensed Bold Oblique,Bold Oblique",
      "Condensed Bold,Bold",
    ],
  },
  {
    font_family: "Noto Sans Limbu",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Ugaritic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Mono",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Khmer",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Armenian",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Gujarati",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "FreeSans",
    styles: [
      "Bold,получерен,negreta,tučné,fed,Fett,Έντονα,Negrita,Lihavoitu,Gras,Félkövér,Grassetto,Vet,Halvfet,Pogrubiony,Negrito,gros,Полужирный,Fet,Kalın,huruf tebal,жирний,Krepko,treknraksts,pusjuodis,đậm,Lodia,धृष्ट",
      "Regular,нормален,Normal,obyčejné,Mittel,µεσαία,Normaali,Normál,Medio,Gemiddeld,Odmiana Zwykła,Обычный,Normálne,menengah,прямій,Navadno,vidējs,normalusis,vừa,Arrunta,सामान्य",
      "Bold Oblique,получерен наклонен,negreta cursiva,tučné kurzíva,fed kursiv,Fett-Kursiv,Έντονη Πλάγια,Negrita Cursiva,Lihavoitu Kursivoi,Gras Italique,Félkövér dőlt,Grassetto Corsivo,Vet Cursief,Halvfet Kursiv,Pogrubiona kursywa,Negrito Itálico,gros oblic,Обычный Курсив,Tučná kurzíva,Fet Kursiv,Kalın İtalik,huruf tebal miring,жирний похилий,polkrepko ležeče,treknais slīpraksts,pusjuodis pasvirasis,nghiêng đậm,Lodi etzana,धृष्ट-तिरछा",
      "Oblique,наклонен,negreta cursiva,kurzíva,kursiv,Πλάγια,Cursiva,Kursivoitu,Italique,Dőlt,Corsivo,Cursief,kursywa,Itálico,oblic,Курсив,İtalik,huruf miring,похилий,Ležeče,slīpraksts,pasvirasis,nghiêng,Etzana,तिरछा",
    ],
  },
  {
    font_family: "Liberation Sans Narrow",
    styles: ["Italic", "Regular", "Bold Italic", "Bold"],
  },
  {
    font_family: "Noto Sans Oriya",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "DejaVu Serif,DejaVu Serif Condensed",
    styles: [
      "Condensed Bold Italic,Bold Italic",
      "Condensed,Book",
      "Condensed Italic,Italic",
      "Condensed Bold,Bold",
    ],
  },
  {
    font_family: "Noto Sans Caucasian Albanian,Noto Sans CaucAlban",
    styles: ["Regular"],
  },
  {
    font_family: "DejaVu Sans,DejaVu Sans Light",
    styles: ["ExtraLight"],
  },
  {
    font_family: "Noto Serif Hebrew",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Cousine",
    styles: ["Italic", "Bold Italic", "Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Inscriptional Parthian,Noto Sans InsParthi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Takri",
    styles: ["Regular"],
  },
  {
    font_family: "Carlito",
    styles: ["Bold", "Bold Italic", "Italic", "Regular"],
  },
  {
    font_family: "Noto Naskh Arabic",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Serif Telugu",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Cuneiform",
    styles: ["Regular"],
  },
  {
    font_family: "FreeSerif",
    styles: [
      "Bold Italic,получерен курсивен,negreta cursiva,tučné kurzíva,fed kursiv,Fett-Kursiv,Negrita Cursiva,Lihavoitu Kursivoi,Gras Italique,Félkövér dőlt,Grassetto Corsivo,Vet Cursief,Halvfet Kursiv,Pogrubiona kursywa,Negrito Itálico,gros cursiv,Обычный Курсив,Tučná kurzíva,Fet Kursiv,ตัวเอียงหนา,Kalın İtalik,huruf tebal kursif,жирний курсив,Polkrepko Pežeče,treknais kursīvs,pusjuodis kursyvas,nghiêng đậm,Lodi etzana,धृष्ट-तिरछा",
      "Regular,нормален,normal,obyčejné,Mittel,µεσαία,Normaali,Normál,Normale,Gemiddeld,odmiana zwykła,Обычный,Normálne,ปกติ,menengah,прямій,Navadno,vidējs,normalusis,عادی,vừa,Arrunta,सामान्य",
      "Bold,получерен,negreta,tučné,fed,Fett,Negrita,Lihavoitu,Gras,Félkövér,Grassetto,Vet,Halvfet,Pogrubiony,Negrito,gros,Обычный,Fet,ตัวหนา,Kalın,huruf tebal,жирний,Polkrepko,treknraksts,pusjuodis,ضخیم,đậm,Lodia,धृष्ट",
      "Italic,курсивен,cursiva,kurzíva,kursiv,Λειψίας,Kursivoitu,Italique,Dőlt,Corsivo,Cursief,kursywa,Itálico,cursiv,Курсив,ตัวเอียง,İtalik,kursif,Ležeče,kursīvs,kursivas,nghiêng,Etzana,तिरछा",
    ],
  },
  {
    font_family: "Noto Sans Syriac Eastern",
    styles: ["Regular"],
  },
  {
    font_family: "FreeMono",
    styles: [
      "Bold Oblique,получерен наклонен,Negreta cursiva,tučné kurzíva,fed kursiv,Fett-Kursiv,Έντονα Πλάγια,Negrita Cursiva,Lihavoitu Kursivoi,Gras Italique,Félkövér dőlt,Grassetto Corsivo,Vet Cursief,Halvfet Kursiv,Pogrubiona kursywa,Negrito Itálico,gros oblic,Полужирный Курсив,Tučná kurzíva,Fet Kursiv,Kalın İталik,huruf tebal miring,жирний похилий,polkrepko ležeče,treknais slīpraksts,pusjuodis pasvirasis,Lodi etzana,धृष्ट-तिरछा",
      "Oblique,наклонен,cursiva,kurzíva,kursiv,Πλάγια,Kursivoitu,Italique,Dőlt,Corsivo,Cursief,Kursywa,Itálico,oblic,Курсив,İtalik,huruf miring,похилий,ležeče,slīpraksts,pasvirasis,nghiêng,Etzana,तिरछा",
      "Regular,нормален,normal,obyčejné,Standard,µεσαία,Normaali,Normál,Normale,Standaard,Normalny,Обычный,Normálne,menengah,прямій,navadno,vidējs,normalusis,thường,Arrunta,सामान्य",
      "Bold,получерен,negreta,tučné,fed,Fett,Έντονα,Negrita,Lihavoitu,Gras,Félkövér,Grassetto,Vet,Halvfet,Pogrubiony,Negrito,gros,Полужирный,Fet,Kalın,huruf tebal,жирний,polkrepko,treknraksts,pusjuodis,đậm,Lodia,धृष्ट",
    ],
  },
  {
    font_family: "Liberation Sans",
    styles: ["Regular", "Italic", "Bold Italic", "Bold"],
  },
  {
    font_family: "Noto Serif Tamil",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Tibetan",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Syriac",
    styles: ["Regular"],
  },
  {
    font_family: "Arimo",
    styles: ["Regular", "Bold Italic", "Italic", "Bold"],
  },
  {
    font_family: "Liberation Mono",
    styles: ["Bold Italic", "Bold", "Regular", "Italic"],
  },
  {
    font_family: "Noto Sans Tifinagh",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Display",
    styles: ["Bold Italic", "Regular", "Italic", "Bold"],
  },
  {
    font_family: "Noto Serif Balinese",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Myanmar",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Liberation Serif",
    styles: ["Italic", "Bold", "Bold Italic", "Regular"],
  },
  {
    font_family: "Noto Serif Gurmukhi",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Marchen",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Saurashtra",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Ahom",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Runic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans New Tai Lue",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Kufi Arabic",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans NKo,Noto Sans N'Ko",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Gujarati",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "WenQuanYi Zen Hei,文泉驛正黑,文泉驿正黑",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Armenian",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Canadian Aboriginal,Noto Sans CanAborig",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans",
    styles: ["Bold", "Italic", "Bold Italic", "Regular"],
  },
  {
    font_family: "WenQuanYi Zen Hei Sharp,文泉驛點陣正黑,文泉驿点阵正黑",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Bhaiksuki",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Javanese",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Malayalam",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Display",
    styles: ["Italic", "Regular", "Bold Italic", "Bold"],
  },
  {
    font_family: "Noto Sans Kannada",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Lycian",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Shavian",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Bengali",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Khudawadi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Yi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Linear A",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Ol Chiki",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Inscriptional Pahlavi,Noto Sans InsPahlavi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Lydian",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Tagalog",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Osmanya",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Hanunoo",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Bamum",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Devanagari",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Old South Arabian,Noto Sans OldSouArab",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Elbasan",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Myanmar",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Georgian",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Caladea",
    styles: ["Regular", "Italic", "Bold Italic,Italic", "Bold"],
  },
  {
    font_family: "Noto Sans Grantha",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Bassa Vah",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Ethiopic",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Gurmukhi",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Serif Sinhala",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Kharoshthi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Rejang",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Meetei Mayek",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif",
    styles: ["Regular", "Italic", "Bold Italic", "Bold"],
  },
  {
    font_family: "Noto Serif Devanagari",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Tai Viet",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Duployan",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Buhid",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Thaana",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Mro",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Tamil",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Deseret",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Syriac Estrangela",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Adlam Unjoined",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Osage",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Cham",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Serif Tamil Slanted",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Lepcha",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Lao",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Miao",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Georgian",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Old Turkic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Lao",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Newa",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Music",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Egyptian Hieroglyphs,Noto Sans EgyptHiero",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Imperial Aramaic,Noto Sans ImpAramaic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Sora Sompeng,Noto Sans SoraSomp",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Tirhuta",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Buginese",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Khmer",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Old Italic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Thai",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Syloti Nagri",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Avestan",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Sinhala",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Old Permic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Palmyrene",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Malayalam",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Sundanese",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Nastaliq Urdu",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Pau Cin Hau",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Gothic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Samaritan",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Coptic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Kaithi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Tagbanwa",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Meroitic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Kannada",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Arabic",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Old Persian",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Anatolian Hieroglyphs,Noto Sans AnatoHiero",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Symbols2",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Manichaean",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Batak",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Sharada",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Tai Tham",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Hatran",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Multani",
    styles: ["Regular"],
  },
  {
    font_family: "WenQuanYi Zen Hei Mono,文泉驛等寬正黑,文泉驿等宽正黑",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Carian",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Chakma",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Tibetan",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Cherokee",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Brahmi",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Symbols",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Mende Kikakui",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Serif Bengali",
    styles: ["Bold", "Regular"],
  },
  {
    font_family: "Noto Sans Vai",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Hebrew",
    styles: ["Regular", "Bold"],
  },
  {
    font_family: "Noto Sans Mandaic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Syriac Western",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Kayah Li",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Mahajani",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Old Hungarian,Noto Sans OldHung",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Ogham",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Tai Le",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans PhagsPa",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Phoenician",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Glagolitic",
    styles: ["Regular"],
  },
  {
    font_family: "Noto Sans Nabataean",
    styles: ["Regular"],
  },
];
