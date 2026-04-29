"use client";

import { citations } from "@/data/citations";
import { useCitationContext } from "@/components/CitationContext";

export function CitationPanel() {
  const { activeCitation, setActiveCitation } = useCitationContext();
  const citation = citations.find((item) => item.id === activeCitation) ?? citations[0];

  return (
    <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] xl:block">
      <div className="panel-shell h-full overflow-hidden rounded-[1.75rem] border border-stone-300/80 bg-[rgba(250,246,238,0.92)] p-5">
        <div className="flex items-start justify-between gap-4 border-b border-stone-300/80 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Citation Panel
            </p>
            <h2 className="mt-2 text-lg font-semibold text-stone-900">
              Footnotes and source details
            </h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-stone-300 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-600 transition hover:border-stone-500 hover:text-stone-900"
            onClick={() => setActiveCitation(null)}
          >
            Clear
          </button>
        </div>
        <div className="mt-5 space-y-4">
          <div className="rounded-2xl bg-stone-900 px-4 py-3 text-stone-50">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-300">
              Active Citation
            </p>
            <p className="mt-2 text-2xl font-semibold">[{citation.id}]</p>
            <p className="mt-2 text-sm text-stone-200">{citation.short}</p>
          </div>
          <p className="text-sm leading-7 text-stone-700">{citation.full}</p>
          {citation.note ? (
            <div className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
              {citation.note}
            </div>
          ) : null}
          <p className="text-xs leading-6 text-stone-500">
            Clicking any in-text footnote also scrolls to the full references section.
          </p>
        </div>
      </div>
    </aside>
  );
}
