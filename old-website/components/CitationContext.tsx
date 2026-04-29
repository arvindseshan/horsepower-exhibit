"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";

type CitationContextType = {
  activeCitation: number | null;
  setActiveCitation: (id: number | null) => void;
};

const CitationContext = createContext<CitationContextType | null>(null);

export function CitationProvider({ children }: { children: ReactNode }) {
  const [activeCitation, setActiveCitation] = useState<number | null>(null);

  const value = useMemo(
    () => ({ activeCitation, setActiveCitation }),
    [activeCitation]
  );

  return (
    <CitationContext.Provider value={value}>
      {children}
    </CitationContext.Provider>
  );
}

export function useCitationContext() {
  const context = useContext(CitationContext);
  if (!context) {
    throw new Error("useCitationContext must be used within CitationProvider");
  }
  return context;
}
