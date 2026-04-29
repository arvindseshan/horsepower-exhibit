import { sources } from "@/data/exhibit";

function byNum(n: number) {
  return sources.find((s) => s.num === n);
}

export function CiteGroup({ nums }: { nums: readonly number[] | number[] }) {
  if (nums.length === 0) return null;
  return (
    <span className="whitespace-nowrap text-[0.82em] text-[var(--accent)]">
      {nums.map((n) => {
        const s = byNum(n);
        if (!s) return null;
        return (
          <a
            key={n}
            className="cite-link ml-0.5 font-sans font-medium tabular-nums"
            href={`#source-${n}`}
            title={s.shortLabel}
          >
            [{n}]
          </a>
        );
      })}
    </span>
  );
}
