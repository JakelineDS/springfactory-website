import Image from "next/image";
import Link from "next/link";

type Props = {
  align?: "center" | "right";
};

export default function Header({ align = "center" }: Props) {
  const alignClass =
    align === "right"
      ? "md:ml-auto md:text-right"
      : "text-left md:text-left";

  return (
    <header className="relative w-full h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/galeria/resortes-3.jpg"
          alt="Fondo de resortes"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className={`max-w-3xl ${alignClass}`}>
          <h1
            className="
              text-2xl md:text-5xl   
              font-extrabold
              tracking-tight
              leading-snug
              drop-shadow-lg
            "
          >
            Precisión y resistencia en cada resorte.
          </h1>
          <p
            className="
              mt-4
              text-base md:text-2xl
              font-medium
              text-gray-100   
              drop-shadow-md
            "
          >
            Fabricamos a medida en material nacional e importado, con ventas al
            por mayor y menor, con envíos rápidos a cualquier parte del Perú.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-start">
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
