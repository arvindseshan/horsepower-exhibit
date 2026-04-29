import type { ExhibitBlock } from "@/data/exhibit";
import { CiteGroup } from "./Cite";

export function ExhibitBodyBlocks({
  blocks,
  variant = "default",
}: {
  blocks: readonly ExhibitBlock[];
  variant?: "default" | "card";
}) {
  const pClass =
    variant === "card"
      ? "text-sm leading-relaxed text-stone-700 md:text-[0.95rem] md:leading-7"
      : "text-lg leading-8 text-stone-800";
  const ulClass =
    variant === "card"
      ? "my-1 list-disc space-y-1.5 pl-6 text-sm leading-relaxed text-stone-700 marker:text-stone-500 md:text-[0.95rem] md:leading-7"
      : "my-1 list-disc space-y-1.5 pl-8 marker:text-stone-500";

  return (
    <div className={variant === "card" ? "space-y-3" : "space-y-4"}>
      {blocks.map((b, i) => {
        if (b.type === "p") {
          return (
            <p key={i} className={pClass}>
              {b.text}
              {b.citeNums?.length ? <CiteGroup nums={b.citeNums} /> : null}
            </p>
          );
        }
        return (
          <ul key={i} className={ulClass}>
            {b.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
