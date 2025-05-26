import React from "react";
import { useAuth } from "./../../hooks/useAuth";
//               <div className="mb-4 text-red-500">{loginError}</div>
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    
      <div className="container mx-auto flex justify-between items-center">
        
        {token && (
          <button onClick={handleLogout} className="ml-auto">
            Cerrar sesión
          </button>
        )}
      </div>
    
  );
};

export default Header;