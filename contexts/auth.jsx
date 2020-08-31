import React, { createContext, useState, useEffect } from "react";
import useSessions from "../hooks/useSessions";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(false);

  const { isLoggedIn, finished, error } = useSessions();

  useEffect(() => {
    if (finished) {
      setLoading(false);

      if (isLoggedIn) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }

      if (error) {
        setAuthError(true);
      }
    }
  }, [finished, isLoggedIn, error]);

  return (
    <AuthContext.Provider value={{ loading, authenticated, authError }}>
      {children}
    </AuthContext.Provider>
  );
};
