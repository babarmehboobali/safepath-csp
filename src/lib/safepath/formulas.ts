export type Formula = {
  slug: string;
  name: string;
  expression: string;
  when: string;
  pitfall: string;
  example: string;
};

export const FORMULAS: Formula[] = [
  {
    slug: "trir",
    name: "TRIR",
    expression: "(N × 200,000) / EH",
    when: "Compare recordable rate across sites or years.",
    pitfall: "Using headcount or 100,000 hours instead of 200,000.",
    example: "4 recordables, 250,000 hours → 3.2.",
  },
  {
    slug: "dart",
    name: "DART",
    expression: "(DART cases × 200,000) / EH",
    when: "Severity-flavored rate when TRIR hides restricted duty.",
    pitfall: "Counting first aid as DART.",
    example: "2 DART cases, 250,000 hours → 1.6.",
  },
  {
    slug: "twa",
    name: "TWA",
    expression: "Σ(Ci × Ti) / 8",
    when: "Combine partial-shift samples into an 8-hour TWA.",
    pitfall: "Dividing by elapsed time when the standard is an 8-hour TWA.",
    example: "80 ppm × 3 h + 40 ppm × 5 h → 55 ppm.",
  },
  {
    slug: "noise",
    name: "OSHA 5 vs NIOSH 3",
    expression: "OSHA T = 8 / 2^((L−90)/5) · NIOSH T = 8 / 2^((L−85)/3)",
    when: "Allowed duration at a constant A-weighted level.",
    pitfall: "Mixing 5 dB exchange with an 85 dB criterion.",
    example: "OSHA 95 dBA → T = 4 h.",
  },
  {
    slug: "qva",
    name: "Q = VA",
    expression: "Q = V × A",
    when: "Duct, capture, or dilution flow.",
    pitfall: "Using diameter as radius. Inches left as inches.",
    example: "12-inch round at 2000 fpm → about 1,571 cfm.",
  },
  {
    slug: "rwl",
    name: "NIOSH RWL",
    expression: "RWL = 51 × HM × VM × DM × AM × FM × CM",
    when: "Two-handed lifting recommended weight limit.",
    pitfall: "Treating 51 lb as the RWL when a multiplier is open.",
    example: "HM = 0.50, others 1 → RWL = 25.5 lb.",
  },
  {
    slug: "ppm",
    name: "ppm ↔ mg/m³",
    expression: "mg/m³ = (ppm × MW) / 24.45 at 25 °C",
    when: "Gas or vapor unit conversion at NTP.",
    pitfall: "Using 22.4 when the stem is 25 °C.",
    example: "CO MW 28 at 50 ppm → 57.3 mg/m³.",
  },
  {
    slug: "roi",
    name: "ROI",
    expression: "ROI = (Gain − Cost) / Cost",
    when: "Simple return on a control spend.",
    pitfall: "Calling payback years an ROI percent.",
    example: "Avoided 80k on 20k spend → 300%.",
  },
  {
    slug: "rpn",
    name: "FMEA RPN",
    expression: "S × O × D",
    when: "Rank FMEA rows. Not an FTA probability.",
    pitfall: "Using RPN on a fault tree.",
    example: "8 × 4 × 5 = 160.",
  },
  {
    slug: "dike",
    name: "Dike volume",
    expression: "L × W × H, then × 7.48 for gallons",
    when: "Secondary containment capacity.",
    pitfall: "Ignoring freeboard or tank displacement in the last sentence.",
    example: "40 × 30 × 1.5 ft → 1,800 ft³.",
  },
];
