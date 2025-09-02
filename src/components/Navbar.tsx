"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Slogan */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-2xl font-bold text-gray-900">
            RESORTES HLY
          </h1>
          <span className="text-sm text-gray-600">
            Precisión en cada resorte
          </span>
        </div>

        {/* Menú Desktop alineado a la derecha */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium ml-auto">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/productos">Productos</Link></li>
          <li><Link href="/clientes">Clientes</Link></li>
          <li><Link href="/galeria">Galería</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>

        {/* Botón hamburguesa (solo móviles) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700 font-medium">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/clientes">Clientes</Link></li>
            <li><Link href="/galeria">Galería</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
