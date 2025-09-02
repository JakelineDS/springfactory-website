import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        
        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p>📍 Cercado de Lima</p>
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <a 
              href="https://wa.me/51907123249" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              907123249
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaFacebookF className="text-blue-500" />
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/clientes">Clientes</Link></li>
            <li><Link href="/galeria">Galería</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center mt-10 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} RESORTES HLY – Precisión en cada resorte</p>
        <p className="mt-1">Designed by <strong className="text-white">Jakeline DevStudio</strong></p>
      </div>
    </footer>
  );
}
