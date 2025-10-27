import React from "react";
import Container from "./Container";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-10">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Organiza tus pagos y olvídate de los recargos
            </h2>
            <p className="text-gray-600 mb-6">
              PagoSeguro te ayuda a controlar tus pagos recurrentes con
              recordatorios y reportes simples.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Comienza gratis hoy
            </button>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="App PagoSeguro"
            className="w-64 mt-10 md:mt-0 animate-bounce"
          />
        </div>
      </Container>
    </section>
  );
};

export default Home;
