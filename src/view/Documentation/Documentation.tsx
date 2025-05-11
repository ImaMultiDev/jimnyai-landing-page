// src/view/Documentation/Documentation.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Presentación PDF",
    description: "Diapositivas presentadas en la final del concurso de U-TAD.",
    image: "/images/docs/pitch-cover.png",
    link: "https://www.canva.com/design/DAGmsnMlvjw/kNWnftIkXWUh7BFA447KOA/edit?utm_content=DAGmsnMlvjw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "Proyecto original",
    description: "Documento de ideación y análisis del concepto de JIMNY.AI.",
    image: "/images/docs/original-doc.png",
    link: "https://www.canva.com/design/DAGXOclamyw/aAIMYRJr5Ehb77a1XMNUtQ/edit?utm_content=DAGXOclamyw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "Ilustraciones",
    description: "Galería con los diseños visuales del personaje Jimny.",
    image: "/images/docs/gallery-preview.png",
    link: "https://www.canva.com/design/DAGnIpJNi3E/2tU2guzdqflOuqwSpFxalA/view?utm_content=DAGnIpJNi3E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h773c086257",
  },
  {
    title: "Guion del pitch",
    description: "Texto completo utilizado en la presentación de JIMNY.AI.",
    image: "/images/docs/script-thumb.png",
    link: "https://www.canva.com/design/DAGm_vMz0xY/pu9acLaW967p0VPec7SHyg/edit?utm_content=DAGm_vMz0xY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

const Documentation = () => {
  return (
    <main className="bg-[#2d6f9e] text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">
          Documentación del proyecto
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.link}
              target="_blank"
              className="bg-[#091A2D] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={resource.image}
                  alt={`Imagen para ${resource.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{resource.title}</h3>
                <p className="text-white/70 text-sm">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Documentation;
