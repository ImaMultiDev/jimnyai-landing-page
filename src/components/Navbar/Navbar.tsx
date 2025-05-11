"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CloseIcon, MobileMenu } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about-jimny", label: "Sobre Jimny" },
  { href: "/docs", label: "Documentación" },
  { href: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const renderMobileMenu = () => (
    <div className="mx-4 mt-2 flex flex-col gap-3 rounded-xl bg-[#0D223F] px-6 py-4 shadow-xl text-white lg:hidden">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="block rounded-md px-4 py-2 hover:bg-[#132B50] transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#0D223F] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" aria-label="Inicio">
          <div className="relative h-12 w-20 lg:w-40">
            <Image
              src="/images/jimny-logo.png"
              alt="Logo de Jimny"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Botón menú móvil */}
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
          aria-label="Menú"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MobileMenu className="h-6 w-6" />
          )}
        </button>

        {/* Enlaces desktop */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-[#00AEEF]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && renderMobileMenu()}
    </nav>
  );
};

export default Navbar;
