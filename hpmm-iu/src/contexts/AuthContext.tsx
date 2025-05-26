import React, { createContext, useState, useEffect } from "react";
import jsCookie from "js-cookie";
import { authenticateUser } from "../services/authService";

export interface AuthContextType {
  token: string | null;
  username?: string;
  id_rol?: string;
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | undefined>();
 
  

  const authenticate = async (email: string, password: string) => {
    try {
      const response = await authenticateUser(email, password);
      setToken(response.token);
      setIsAuthenticated(true);
      setUsername(response.username);
    
      jsCookie.set("token", response.token);
      jsCookie.set("username", response.username);
    } catch (error) {
      setToken(null);
      setIsAuthenticated(false);
      setUsername(undefined);
;
      jsCookie.remove("token");
      jsCookie.remove("username");
  
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUsername(undefined);
   
    jsCookie.remove("token");

  };

  useEffect(() => {
    const initialtoken = jsCookie.get("token");
    const initialUsername = jsCookie.get("username");
   
    if (initialtoken) {
      setToken(initialtoken);
      setIsAuthenticated(true);
      setUsername(initialUsername);
   
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, authenticate, logout, isAuthenticated, username}}>
      {children}
    </AuthContext.Provider>
  );
};