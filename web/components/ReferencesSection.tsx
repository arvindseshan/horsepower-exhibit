import type { ReactNode } from "react";
import { sources } from "@/data/exhibit";

function byNum(a: (typeof sources)[number], b: (typeof sources)[number]) {
  return a.num - b.num;
}

/** MLA italics in data are marked with *asterisks* (not present in URLs). */
function mlaEm(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part ? <span key={i}>{part}</span> : null;
  });
}

function SourceList({
  items,
  borderClass,
}: {
  items: typeof sources;
  borderClass: string;
}) {
  return (
    <ol className="mt-4 list-none space-y-4 text-stone-800">
      {items.map((s) => (
        <li key={s.id} id={`source-${s.num}`} className={`scroll-mt-28 border-l-4 pl-4 ${borderClass}`}>
          <span className="font-sans text-sm font-bold text-stone-500">[{s.num}]</span>{" "}
          <span className="text-base leading-7">{mlaEm(s.full)}</span>
        </li>
      ))}
    </ol>
  );
}

export function ReferencesSection() {
  const primary = sources.filter((s) => s.listSection === "primary").sort(byNum);
  const peer = sources.filter((s) => s.listSection === "peer-reviewed").sort(byNum);
  const other = sources.filter((s) => s.listSection === "other").sort(byNum);

  return (
    <section id="sources" className="scroll-mt-20 rounded-[2rem] border border-stone-300/80 bg-[#f3ece3]/90 p-6 md:p-10">
      <h2 className="font-serif text-2xl font-semibold text-stone-900 md:text-3xl">Works Cited</h2>

      <h3 className="mt-8 font-sans text-sm font-bold uppercase tracking-[0.2em] text-stone-500">Primary sources</h3>
      <SourceList items={primary} borderClass="border-stone-400/40" />

      <h3 className="mt-10 font-sans text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
        Peer-reviewed sources (books &amp; articles)
      </h3>
      <SourceList items={peer} borderClass="border-[var(--accent)]/35" />

      <h3 className="mt-10 font-sans text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
        Other sources (web, journalism, etc.)
      </h3>
      <SourceList items={other} borderClass="border-stone-400/40" />
    </section>
  );
}
