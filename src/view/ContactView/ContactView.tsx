// src/view/Contact/Contact.tsx
import React from "react";

const ContactView = () => {
  return (
    <main className="bg-[#2d6f9e] text-white py-10 lg:py-20 px-6">
      <div className="container mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-10">Contacto</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-white/20 bg-[#091A2D] px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-white/20 bg-[#091A2D] px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
              placeholder="ejemplo@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 text-sm font-medium">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full rounded-md border border-white/20 bg-[#091A2D] px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
              placeholder="Motivo del mensaje"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-white/20 bg-[#091A2D] px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[#00AEEF] px-6 py-3 font-semibold text-white transition hover:bg-[#008fb3]"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactView;
