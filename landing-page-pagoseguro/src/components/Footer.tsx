import React from "react";
import Container from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-100">
      <Container>
        <p className="mb-2">
          © 2025 <span className="font-semibold text-blue-600">PagoSeguro</span> — Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6 text-10">
          <a href="#" className="hover:text-blue-10 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            X (Twitter)
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
