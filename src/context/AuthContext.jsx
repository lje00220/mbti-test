import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const isLogin = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };

  const isLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLogin, isLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
