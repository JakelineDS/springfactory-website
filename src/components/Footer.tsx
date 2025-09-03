import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black-900 text-gray-200 mt-10 py-12">
      <div className="container mx-auto grid grid-flow-col auto-cols-fr gap-8 px-6">
        
        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4 tracking-wide">Contacto</h4>
          <p className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-white" />
            <span>Cercado de Lima</span>
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaWhatsapp className="text-white" />
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
            <FaFacebookF className="text-white" />
            <a 
              href="https://www.facebook.com/resorteshly.pe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              @resorteshly.pe
            </a>
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4 tracking-wide">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/clientes">Clientes</Link></li>
            <li><Link href="/galeria">Galería</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Productos columna 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 tracking-wide">Productos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/productos/resortes-compresion">Resortes de Compresión</Link></li>
            <li><Link href="/productos/resortes-traccion">Resortes de Tracción</Link></li>
            <li><Link href="/productos/resortes-torsion">Resortes de Torsión</Link></li>
            <li><Link href="/productos/resortes-suspension">Resortes de Suspensión</Link></li>
          </ul>
        </div>

        {/* Productos columna 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 tracking-wide">Productos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/productos/resortes-industriales">Resortes Industriales</Link></li>
            <li><Link href="/productos/puerta-levadiza">Resortes para Puerta Levadiza</Link></li>
            <li><Link href="/productos/puerta-seccional">Resortes para Puerta Seccional</Link></li>
            <li><Link href="/productos/mineria">Resortes para Minería</Link></li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} RESORTES HLY – Precisión en cada resorte</p>
        <p className="mt-1">
          Designed by <strong className="text-white">Jakeline DevStudio</strong>
        </p>
      </div>
    </footer>
  );
}
