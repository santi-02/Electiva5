import React from "react";
import Container from "./Container";
import { StyleButton } from "./StyleButton";
import { useCounter } from "./hooks/useCounter";

export const CTA = () => {
  
  const { count, increment } = useCounter();

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

      {/*en esta secccion es donde se lmuestra el numero de usuarios activos */}
        <p className="mb-6 text-blue-200">
          Ya somos{" "}
          <span className="font-bold text-white">{count}</span> usuarios activos 🚀
        </p>

        <div className="flex justify-center">
          <StyleButton
            label="Descarga la App Gratis"
            color="bg-white text-black-700"
            handleClick={() => increment(1)} // incrementa el contador
          />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
