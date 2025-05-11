// components/Timeline.tsx
import React from "react";
import { Clock } from "lucide-react";

const milestones = [
  {
    date: "Abril 2025",
    title: "Finalista U-TAD",
    description:
      "El proyecto Jimny.AI es seleccionado como finalista en la convocatoria de innovación digital.",
  },
  {
    date: "Junio 2025",
    title: "Prototipo funcional",
    description:
      "Desarrollo inicial del MVP con funciones básicas y narrativa integrada.",
  },
  {
    date: "Septiembre 2025",
    title: "Integración MCP",
    description:
      "Jimny evoluciona hacia un agente inteligente conectado con el entorno digital del usuario.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#2d6f9e] text-[#091A2D] py-20 px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl text-white font-bold text-center mb-12">
          Avance del proyecto
        </h2>
        <div className="relative border-l-2 border-[#091A2D] pl-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#00AEEF]" />
                <span className="text-sm font-semibold text-white/80">
                  {milestone.date}
                </span>
              </div>
              <h3 className="text-lg font-bold mt-2">{milestone.title}</h3>
              <p className="text-white/70 text-sm mt-1">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
