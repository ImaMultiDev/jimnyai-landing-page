import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Jimny", href: "/about-jimny" },
  { label: "Documentación", href: "/docs" },
  { label: "Contacto", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0D223F] text-white py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left">
        {/* Logo y mensaje */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative mb-3 h-10 w-36">
            <Image
              src="/images/jimny-logo.png"
              alt="Logo de Jimny"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-white/70">
            “La tecnología también puede tener alma.”
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors text-white/80 hover:text-[#00AEEF]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} JIMNY.AI · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
