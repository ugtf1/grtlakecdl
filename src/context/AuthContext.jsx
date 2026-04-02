import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded credentials for demo (replace with API later)
  const validUsername = "admin";
  const validPassword = "12345";

  const login = (username, password) => {
    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
      return true; // success
    }
    return false; // failure
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
