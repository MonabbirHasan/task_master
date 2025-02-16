import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define types for AuthContext
interface AuthUser {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  authUser: AuthUser | null;
  isAuthenticated: boolean;
  login: (userData: AuthUser) => { success: boolean; user: AuthUser };
  logout: () => void;
}

// Provide default values to prevent TypeScript errors
const defaultAuthContext: AuthContextType = {
  authUser: null,
  isAuthenticated: false,
  login: () => ({ success: false, user: null as unknown as AuthUser }), // Dummy return to match type
  logout: () => {},
};

// Create Context with default value
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Load user from localStorage
  useEffect(() => {
    const loadUser = () => {
      const savedUser = localStorage.getItem("user_data");
      if (savedUser) {
        const parsedUser: AuthUser = JSON.parse(savedUser);
        setAuthUser(parsedUser);
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  // Set user data and store it in localStorage
  const login = (userData: AuthUser): { success: boolean; user: AuthUser } => {
    localStorage.setItem("user_data", JSON.stringify(userData));
    setAuthUser(userData);
    setIsAuthenticated(true);
    return { success: true, user: userData };
  };

  // Clear user data from localStorage and state
  const logout = () => {
    localStorage.removeItem("user_data");
    setAuthUser(null);
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ authUser, isAuthenticated, login, logout }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
