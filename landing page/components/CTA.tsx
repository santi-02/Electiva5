import React from "react";
import Container from "./Container";

export const CTA = () => {
  return (
    <section
      id="cta"
      className="min-h-screen flex items-center justify-center bg-blue-700 text-white text-center"
    >
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Toma el control de tus finanzas hoy mismo 
        </h2>

        <p className="text-lg mb-8 max-w-2xl text-blue-100 mx-auto">
          Descarga la app <span className="font-semibold">PagoSeguro</span> y
          evita recargos. Organiza tus pagos recurrentes de forma fácil, rápida
          y segura.
        </p>

        <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-100 transition">
          🚀 Descarga la App Gratis
        </button>
      </Container>
    </section>
  );
};

export default CTA;
