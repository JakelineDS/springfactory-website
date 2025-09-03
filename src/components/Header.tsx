import Image from "next/image";
import Link from "next/link";

type Props = {
  align?: "center" | "right";
};

export default function Header({ align = "center" }: Props) {
  const alignClass = align === "right" ? "hero-right" : "hero-center";

  return (
    <header className="hero relative w-full h-screen">

      <div className="absolute inset-0">
        <Image
          src="/images/resortes.jpg"
          alt="Fondo de resortes"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <div className={`max-w-3xl ${alignClass}`}>
          <h1
            className="
    mt-4 
    text-2xl md:text-5xl    /* más grande en desktop */
    font-semibold           /* resaltado pero no pesado como bold */
    tracking-wide           /* un poco más de espacio entre letras */
    leading-snug            /* buena lectura */
    drop-shadow-md          /* sombra suave para resaltar sobre el fondo */
  "
          >
            Fabricamos resortes a medida con tolerancias precisas para industria
            y talleres en todo el Perú.
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/productos"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl font-bold shadow-lg transition"
            >
              Ver productos
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-black rounded-xl font-semibold shadow-md transition"
            >
              Solicitar cotización
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
