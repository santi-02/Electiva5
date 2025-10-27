import React, { useState } from "react";
import Container from "./Container";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-700 tracking-tight">
            Pago<span className="text-blue-700">Seguro</span>
          </h1>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            className="md:hidden text-blue-700 text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "×" : "☰"}
          </button>

          {/* Menú en escritorio */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-600 transition">
                Características
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-blue-600 transition">
                Descarga App
              </a>
            </li>
          </ul>

          {/* Botón en escritorio */}
          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Comienza Gratis
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-white border-t border-gray-200 py-4 space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={toggleMenu}
            >
              Características
            </a>
            <a
              href="#cta"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={toggleMenu}
            >
              Descarga App
            </a>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Comienza Gratis
            </button>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
