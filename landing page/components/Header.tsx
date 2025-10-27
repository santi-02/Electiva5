import React from "react";

export const Header = () => {
  
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/*Menú de navegación */}
        <div className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">
            Inicio
          </a>
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Características
          </a>
          <a href="#cta" className="text-gray-700 hover:text-blue-600">
            Contacto
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Comienza Gratis
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

