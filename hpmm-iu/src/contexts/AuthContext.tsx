/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";
import jsCookie from "js-cookie";
import { AuthContextType, ProviderProps } from ".././interfaces/context";
import {  authenticateUser } from '../services/auth.service';


export const AuthContext = createContext<AuthContextType | undefined >({
  token: "",
  authenticate: async () => {},
  logout: () => {},
  isAuthenticated: false,
  });

export const Authprovider: React.FC<ProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const authenticate = async (email: string, password: string) => {
    try {
      const newToken = await authenticateUser(email, password);
      setIsAuthenticated(true);
      setToken(newToken);
     jsCookie.set("token", newToken);
    }catch (error) {
      console.error("Error during authentication:", error);
    }
  };


  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    
    jsCookie.remove("token");
  };

  useEffect(() => {
    const initialtoken = jsCookie.get("token");
    if (initialtoken) {
      setToken(initialtoken);
      setIsAuthenticated(true);
    }
  }, []); 

  return (
    <AuthContext.Provider value={{ token, authenticate, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};