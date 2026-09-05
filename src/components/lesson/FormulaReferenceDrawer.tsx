const BLOCKS = [
  {
    title: "Ventilation",
    lines: [
      "Q = V × A  (cfm = fpm × ft²)",
      "Capture / dilution: keep units consistent. Do not mix m/s with fpm on the same line.",
      "Dilution (teaching): Q = (403 × SG × ER) / (MW × PEL)",
      "C is the target concentration (often PEL or a fraction of PEL). SG specific gravity, ER evaporation rate, MW molecular weight.",
    ],
  },
  {
    title: "Noise",
    lines: [
      "Dose D = 100 × Σ (Ci / Ti)",
      "OSHA: criterion 90 dBA, q = 5.  T = 8 / 2^((L − 90)/5)",
      "NIOSH: criterion 85 dBA, q = 3.  T = 8 / 2^((L − 85)/3)",
      "Do not mix the 5 dB and 3 dB tables on one line.",
    ],
  },
  {
    title: "Rigging",
    lines: [
      "Tension in a sling ≈ (Load / n) / sin(θ)",
      "θ is the angle from horizontal unless the stem says otherwise. Lower angle → higher tension.",
      "DEG mode unless the stem requires radians.",
    ],
  },
  {
    title: "Industrial hygiene",
    lines: [
      "TWA = Σ (Ci × Ti) / 8",
      "Mixture TLV (teaching): Σ (Ci / TLVi) ≤ 1 when effects add.",
      "Le Chatelier LFL mix: 100 / Σ (yi / LFLi)  (yi = mole % of component i)",
    ],
  },
  {
    title: "Financial and rates",
    lines: [
      "ROI = (benefit − cost) / cost",
      "Payback = cost / annual savings",
      "TRIR = (N × 200,000) / hours worked",
      "DART uses DART cases in the same 200,000 hours frame.",
      "EMR is experience modification — insurance, not a hierarchy row.",
    ],
  },
];

export function FormulaReferenceDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="exam-ref-drawer">
      <div className="exam-ref-head">
        <p>Study formulas</p>
        <button type="button" className="exam-header-btn" onClick={onClose}>Close</button>
      </div>
      <p className="exam-fine">
        Teaching identities for this sitting. Not Pearson software and not a BCSP formula sheet. Confirm symbols against the current reference you are allowed to use.
      </p>
      {BLOCKS.map((block) => (
        <section key={block.title} className="exam-ref-block">
          <h2>{block.title}</h2>
          <ul>
            {block.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
