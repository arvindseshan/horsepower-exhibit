import { CitationLink } from "@/components/CitationLink";
import type { ContentBlock, InlinePart } from "@/data/exhibit";

function InlineContent({ parts }: { parts: InlinePart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        part.type === "text" ? (
          <span key={`${part.value.slice(0, 16)}-${index}`}>{part.value} </span>
        ) : (
          <CitationLink key={`cite-${part.ids.join("-")}-${index}`} ids={part.ids} />
        )
      )}
    </>
  );
}

export function RichParagraph({ block }: { block: ContentBlock }) {
  return (
    <div className="space-y-2">
      {block.title ? (
        <h3 className="text-lg font-semibold tracking-[0.02em] text-stone-900">
          {block.title}
        </h3>
      ) : null}
      <p className="text-[1.02rem] leading-8 text-stone-700">
        <InlineContent parts={block.parts} />
      </p>
    </div>
  );
}
