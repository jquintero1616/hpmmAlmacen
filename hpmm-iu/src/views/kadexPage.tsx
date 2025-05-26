import React, { useState } from "react";
import Header from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import UserList from "../components/organisms/kardexList";



const KadexPage: React.FC = () => {
  const [sidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        />
      )}
      
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col md:ml-0">
        <main className="flex-1 p-6 overflow-auto bg-black-50 flex items-center justify-center">
          <div className="w-full max-w-2xl flex justify-center items-center">
            <UserList />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default KadexPage;