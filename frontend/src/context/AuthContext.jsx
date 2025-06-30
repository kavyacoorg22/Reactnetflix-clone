import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    user: null,
  });

  // Load token from localStorage on app start
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token && email) {
      setAuth({ token, user: { email } });
    }
  }, []);

  const login = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setAuth({ token, user: { email } });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming auth
export const useAuth = () => useContext(AuthContext);
