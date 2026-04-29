"use client";

import { useCitationContext } from "@/components/CitationContext";

type CitationLinkProps = {
  ids: readonly number[];
};

export function CitationLink({ ids }: CitationLinkProps) {
  const { setActiveCitation } = useCitationContext();

  return (
    <>
      {ids.map((id) => (
        <button
          key={id}
          type="button"
          className="citation-link"
          onClick={() => {
            setActiveCitation(id);
            const target = document.getElementById(`reference-${id}`);
            target?.scrollIntoView({ behavior: "smooth", block: "center" });
            target?.classList.add("reference-pulse");
            window.setTimeout(() => target?.classList.remove("reference-pulse"), 1600);
          }}
          aria-label={`Open citation ${id}`}
        >
          [{id}]
        </button>
      ))}
    </>
  );
}
