"use client"

import { createContext, useContext, useState } from "react";

const PageContext = createContext(null);

export function PageProvider({ children }) {
  const [page, setPage] = useState("Home"); 

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used inside a PageProvider");
  }
  return context;
}