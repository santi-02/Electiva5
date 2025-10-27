import React from "react";
import Container from "./Container";

export const Features = () => {
  const features = [
    {
      icon: "📅",
      title: "Calendario de pagos",
      description:
        "Visualiza tus proximos el vencimiento de tus pagos.",
    },
    {
      icon: "📊",
      title: "Reporte mensual",
      description:
        "Comtrola tus gastos y pagos del mes en gráficos simples y visuales.",
    },
    {
      icon: "🔔",
      title: "Alertas inteligentes",
      description:
        "Identifica pagos urgentes con prioridad alta y controla tus finanzas a tiempo.",
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
          Características principales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
