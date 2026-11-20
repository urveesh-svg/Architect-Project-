import { createContext, useMemo } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const value = useMemo(() => ({
    user: null,
    isAuthenticated: false,
  }), []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
