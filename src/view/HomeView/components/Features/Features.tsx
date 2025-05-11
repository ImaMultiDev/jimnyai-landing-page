// components/Features.tsx
import React from "react";
import { Sparkles, Activity, Mic, Calendar } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-[#00AEEF]" />,
    title: "Motivación constante",
    description:
      "Recibe mensajes que te inspiran a diario y te recuerdan tu propósito.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-[#00AEEF]" />,
    title: "Planificación inteligente",
    description:
      "Organiza tu día, semana y objetivos de forma intuitiva y personalizada.",
  },
  {
    icon: <Mic className="h-6 w-6 text-[#00AEEF]" />,
    title: "Interacción por voz",
    description: "Habla con Jimny como con un verdadero aliado digital.",
  },
  {
    icon: <Activity className="h-6 w-6 text-[#00AEEF]" />,
    title: "Equilibrio emocional",
    description: "Jimny también cuida tu bienestar y energía diaria.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#091A2D] text-white py-16 px-6 rounded-4xl">
      <div className="container flex flex-col gap-16 mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold">¿Qué hace único a Jimny?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 px-4"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-white/70 text-sm max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
