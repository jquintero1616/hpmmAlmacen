
import { AuthContext } from "./../contexts/AuthContext";
import { useContext } from "react";

import { AuthContextType } from "./../interfaces/context";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe utilizarse dentro de un AuthProvider");
  }
  return context;
};

