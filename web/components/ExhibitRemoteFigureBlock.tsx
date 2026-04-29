import Image from "next/image";
import type { ExhibitRemoteFigure } from "@/data/exhibit";

export function ExhibitRemoteFigureBlock({ fig }: { fig: ExhibitRemoteFigure }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-stone-300/80 bg-stone-100/90">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${fig.width} / ${fig.height}` }}
      >
        <Image
          src={fig.src}
          width={fig.width}
          height={fig.height}
          alt={fig.alt}
          className="h-full w-full object-contain object-center"
          style={fig.trimInset ? { clipPath: `inset(${fig.trimInset})` } : undefined}
          sizes="(min-width: 1024px) 640px, 100vw"
        />
      </div>
      <figcaption className="border-t border-stone-200/90 px-3 py-2.5 font-sans text-xs leading-snug text-stone-600">
        {fig.caption}{" "}
        <a className="text-[var(--accent)] underline-offset-2 hover:underline" href={fig.commonsHref} target="_blank" rel="noreferrer">
          Wikimedia Commons
        </a>
        .
      </figcaption>
    </figure>
  );
}
