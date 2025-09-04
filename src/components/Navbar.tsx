"use client";
import Link from "next/link";
import Image from "next/image";
import { Home, Info, Package, Users, ImageIcon, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-10 bg-black text-white z-50 shadow-md">
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image
            src="/logo-resortes.png"
            alt="Logo Resortes HLY"
            width={160}
            height={70}
            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>

      <ul className="flex space-x-5 text-sm font-medium">
        <li>
          <Link href="/" className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <Home size={16} /> <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link href="/nosotros" className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <Info size={16} /> <span>Nosotros</span>
          </Link>
        </li>
        <li>
          <Link href="/procesos" className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <Package size={16} /> <span>Procesos</span>
          </Link>
        </li>
        <li>
          <Link href="/productos" className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <Users size={16} /> <span>Productos</span>
          </Link>
        </li>
        <li>
          <Link href="/clientes" className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <ImageIcon size={16} /> <span>Clientes</span>
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="flex items-center space-x-1 hover:text-cyan-400 transition">
            <Phone size={16} /> <span>Contacto</span>
          </Link>
        </li>
      </ul>

      <Link
        href="/contacto"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition"
      >
        Solicitar Cotización
      </Link>
    </nav>
  );
}
