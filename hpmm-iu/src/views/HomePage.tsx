import React, { useState } from "react";
import Header from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";



const HomePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Botón hamburguesa solo en móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="Abrir menú"
      >
     
      </button>
      {/* Sidebar responsive */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col md:ml-0">
        <main className="flex-1 p-6 overflow-auto bg-black-50 flex items-center justify-center">
         
          <div className="w-full max-w-2xl flex justify-center items-center">
          
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;