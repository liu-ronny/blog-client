import React, { useState, createContext } from "react";

export const DashboardContentContext = createContext({});

export const DashboardContentProvider = ({ children }) => {
  const [contentRef, setContentRef] = useState(null);

  return (
    <DashboardContentContext.Provider value={{ contentRef, setContentRef }}>
      {children}
    </DashboardContentContext.Provider>
  );
};
