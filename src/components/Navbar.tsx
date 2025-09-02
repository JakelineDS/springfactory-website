"use client";

import { useState } from "react";

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
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="/">Inicio</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/clientes">Clientes</a></li>
          <li><a href="/galeria">Galería</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>

        {/* Botón hamburguesa (solo móviles) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              // Icono de "X" para cerrar
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700 font-medium">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/clientes">Clientes</a></li>
            <li><a href="/galeria">Galería</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
