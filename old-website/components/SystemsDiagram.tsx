"use client";

import { useState } from "react";
import { CitationLink } from "@/components/CitationLink";
import { systemNodes } from "@/data/exhibit";

export function SystemsDiagram() {
  const [activeNode, setActiveNode] = useState(systemNodes[0].id);
  const selected = systemNodes.find((node) => node.id === activeNode) ?? systemNodes[0];

  return (
    <section className="panel-shell rounded-[2rem] border border-stone-300/80 p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="section-kicker">Interactive Diagram</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900">
            Horse Transport as a System
          </h3>
          <p className="mt-3 max-w-2xl text-stone-700">
            Click a node to see how the visible vehicle depended on hidden networks of
            feed, labor, waste management, and street governance.
          </p>
          <div className="relative mt-6 aspect-[1.15/1] overflow-hidden rounded-[1.75rem] border border-stone-300 bg-[linear-gradient(180deg,#f5ede0_0%,#eadcc8_100%)]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <line x1="18" y1="24" x2="36" y2="14" className="diagram-line" />
              <line x1="18" y1="24" x2="29" y2="60" className="diagram-line" />
              <line x1="36" y1="14" x2="60" y2="24" className="diagram-line" />
              <line x1="60" y1="24" x2="76" y2="48" className="diagram-line" />
              <line x1="29" y1="60" x2="54" y2="74" className="diagram-line" />
              <line x1="60" y1="24" x2="54" y2="74" className="diagram-line" />
              <line x1="76" y1="48" x2="54" y2="74" className="diagram-line" />
            </svg>
            {systemNodes.map((node) => (
              <button
                key={node.id}
                type="button"
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-3 text-sm font-medium shadow-[0_10px_30px_rgba(80,58,48,0.12)] transition ${
                  activeNode === node.id
                    ? "border-stone-900 bg-stone-900 text-stone-50"
                    : "border-stone-300 bg-[rgba(250,246,238,0.96)] text-stone-800 hover:border-stone-500"
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => setActiveNode(node.id)}
              >
                {node.label}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-stone-300 bg-stone-50/80 p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-stone-500">Selected Node</p>
          <h4 className="mt-3 text-2xl font-semibold text-stone-900">{selected.label}</h4>
          <p className="mt-4 text-base leading-7 text-stone-700">{selected.detail}</p>
          <div className="mt-5 text-sm text-stone-600">
            <CitationLink ids={selected.citationIds} />
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-stone-900 px-5 py-4 text-sm leading-6 text-stone-200">
            The main interpretive point: horse-drawn transportation worked only because
            municipal space, organic energy, and human labor were constantly synchronized.
          </div>
        </div>
      </div>
    </section>
  );
}
