// src/view/AboutJimny/AboutJimny.tsx
import React from "react";
import Image from "next/image";

const AboutJimny = () => {
  return (
    <main className="bg-[#2d6f9e] text-white py-20 px-6">
      <div className="container flex flex-col gap-8 mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">¿Qué es JIMNY.AI?</h1>
          <p className="text-white/80 text-lg">
            Jimny es más que una aplicación. Es una conciencia digital que
            acompaña al usuario día a día, motivándolo, ayudándolo a organizar
            su vida y guiándolo con inteligencia y empatía.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full h-64 lg:w-1/2 lg:h-96">
            <Image
              src="/images/jimny-about.png"
              alt="Ilustración de Jimny"
              fill
              className="object-contain"
            />
          </div>

          <div className="lg:w-1/2 text-white/80 text-md space-y-4">
            <p>
              JIMNY.AI nace con la idea de crear un asistente digital que no
              solo sea funcional, sino que también tenga alma. Inspirado en el
              clásico Pepito Grillo, Jimny actúa como un compañero con
              personalidad, capaz de adaptarse a ti y a tus metas personales.
            </p>
            <p>
              Su diseño combina la interacción emocional con capacidades
              avanzadas de IA. Jimny puede motivarte cada mañana, ayudarte a
              planificar tu día o simplemente recordarte que no estás solo en el
              camino hacia tus objetivos.
            </p>
            <p>
              Jimny no es un asistente cualquiera. No está diseñado solo para
              responder preguntas o para guardar tus recordatorios y tareas en
              la nube, sino para conocerte, guiarte y ayudarte a avanzar.
            </p>
          </div>
        </div>
        <p className=" text-center">
          El futuro de Jimny está orientado hacia su evolución como un agente
          MCP, capaz de actuar de forma proactiva en tu dispositivo, entendiendo
          tu contexto y ejecutando tareas por ti.
        </p>
      </div>
    </main>
  );
};

export default AboutJimny;
