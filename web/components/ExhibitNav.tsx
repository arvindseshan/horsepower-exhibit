import { nav } from "@/data/exhibit";

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {nav.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="group block rounded-2xl border border-transparent px-3 py-2.5 text-sm text-stone-600 transition hover:border-stone-300/90 hover:bg-white/50 hover:text-stone-900"
          >
            <span className="text-[0.65rem] font-sans font-semibold tracking-[0.2em] text-stone-400 group-hover:text-[var(--accent)]">
              {item.kicker}
            </span>
            <span className="mt-0.5 block font-medium text-stone-800">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ExhibitNav() {
  return (
    <>
      <details className="panel-elevated mb-6 overflow-hidden rounded-2xl border border-stone-300/80 lg:hidden">
        <summary className="cursor-pointer list-none px-4 py-3 font-sans text-sm font-medium text-stone-800">
          <span className="mr-2 text-stone-400">☰</span> Exhibit map
        </summary>
        <div className="border-t border-stone-200/80 px-2 py-2">
          <NavLinks className="space-y-0.5" />
        </div>
      </details>
      <nav
        className="panel-elevated sticky top-6 z-20 hidden max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl border border-stone-300/80 p-4 pr-2 lg:block"
        aria-label="Exhibit"
      >
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          Exhibit map
        </p>
        <NavLinks className="mt-3 space-y-1" />
      </nav>
    </>
  );
}
