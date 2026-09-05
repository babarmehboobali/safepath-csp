import { CLASS_PACKS } from "@/content/classes";
import { CATALOG } from "@/lib/safepath/catalog";

export type StudyCard = {
  id: number;
  title: string;
  front: string;
  back: string;
};

export function classCards(): StudyCard[] {
  return CATALOG.flatMap((row) => {
    const fields = CLASS_PACKS[row.id]?.classFields;
    if (!fields?.cardFront) return [];
    return [
      {
        id: row.id,
        title: row.title,
        front: fields.cardFront,
        back: fields.cardBack || fields.rule,
      },
    ];
  });
}
