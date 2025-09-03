"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Nosotros() {
  const sections = {
    quienes: {
      title: "Quiénes Somos",
      text: `En RESORTES HLY somos una empresa dedicada a la fabricación de resortes industriales de alta precisión, diseñados para responder a las exigencias de distintos sectores productivos. Nos especializamos en brindar soluciones confiables y duraderas, adaptadas a las necesidades específicas de cada cliente. Nuestro equipo cuenta con experiencia y tecnología para garantizar productos de excelente desempeño. Trabajamos con materiales de primera calidad, asegurando resistencia y eficiencia en cada pieza. Nos enfocamos en ser aliados estratégicos de nuestros clientes, aportando innovación y confianza en cada proyecto.`,
    },
    calidad: {
      title: "Política de Calidad",
      text: `En RESORTES HLY tenemos el compromiso de fabricar resortes industriales con los más altos estándares de calidad, respaldados por procesos de producción eficientes y controlados. Creemos en la mejora continua para superar las expectativas de nuestros clientes. Garantizamos que cada resorte cumpla con especificaciones técnicas de precisión, asegurando seguridad, resistencia y durabilidad. Nos enfocamos en brindar soluciones personalizadas que contribuyan al crecimiento y competitividad de cada empresa. Nuestra política se fundamenta en la responsabilidad, el profesionalismo y la búsqueda constante de excelencia en cada entrega.`,
    },
    vision: {
      title: "Visión y Misión",
      text: `Visión: Ser reconocidos como líderes en la fabricación de resortes industriales a nivel nacional e internacional, destacando por nuestra innovación, calidad y capacidad de adaptación a las demandas del mercado.

Misión: En RESORTES HLY nuestra misión es diseñar, fabricar y suministrar resortes industriales de alto rendimiento, ofreciendo soluciones confiables y personalizadas que fortalezcan la productividad de nuestros clientes y generen relaciones de largo plazo basadas en la confianza.`,
    },
    valores: {
      title: "Nuestros Valores",
      text: `Compromiso: Cumplimos lo que prometemos, asegurando confianza en cada proyecto.
Calidad: Garantizamos precisión y excelencia en cada resorte fabricado.
Innovación: Desarrollamos soluciones adaptadas a las necesidades de nuestros clientes.
Responsabilidad: Operamos con ética, seguridad y profesionalismo en todo momento.
Trabajo en equipo: Valoramos la colaboración para alcanzar resultados superiores.
Puntualidad: Respetamos los plazos de entrega, priorizando la eficiencia y seriedad.
Adaptabilidad: Nos ajustamos a las exigencias y cambios del mercado.
Orientación al cliente: Brindamos atención cercana y soluciones personalizadas.
Seguridad: Cuidamos nuestros procesos, productos y relaciones laborales.
Transparencia: Mantenemos comunicación clara y honesta con clientes y aliados.`,
    },
  };

  const [active, setActive] = useState<keyof typeof sections>("quienes");

  return (
    <main className="relative w-full min-h-screen">
      {/* Fondo con imagen + overlay global */}
      <div className="absolute inset-0">
        <Image
          src="/images/resortes-3.jpg"
          alt="Resortes de fondo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Layout en 2 columnas full width */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-screen w-full">
        {/* Columna izquierda */}
        <aside className="bg-black/60 backdrop-blur-sm text-white px-8 py-10 md:py-20 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mt-10 md:mt-16">
            Nosotros
          </h2>

          {/* Links */}
          <nav className="mt-10">
            <ul className="border-y border-white/10 divide-y divide-white/10">
              {([
                ["quienes", "Quiénes Somos"],
                ["calidad", "Política de Calidad"],
                ["vision", "Visión y Misión"],
                ["valores", "Valores"],
              ] as const).map(([key, label]) => {
                const isActive = active === key;
                return (
                  <li key={key}>
                    <button
                      onClick={() => setActive(key)}
                      className={`group w-full text-left flex items-center justify-between gap-3 py-4 pl-3 pr-1 transition border-l-4 ${isActive
                          ? "border-yellow-400 text-yellow-400 bg-white/5"
                          : "border-transparent text-gray-300 hover:text-yellow-300 hover:bg-white/5"
                        }`}
                    >
                      <span className="text-sm md:text-base">{label}</span>
                      <ChevronRight
                        className={`shrink-0 transition-transform ${isActive
                            ? "translate-x-0.5 text-yellow-400"
                            : "group-hover:translate-x-0.5"
                          }`}
                        size={16}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Columna derecha */}
        <section className="md:col-span-2 bg-black/25 p-8 md:p-12 text-white flex flex-col justify-center min-h-screen">
          {/* Título general (oculto para visión/misión y valores) */}
          {active !== "vision" && active !== "valores" && (
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 mt-6">
              {sections[active].title}
            </h3>
          )}

          {active === "vision" ? (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 mt-6">
                Visión
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-6">
                {sections[active].text
                  .split("\n\n")[0]
                  .replace("Visión: ", "")}
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
                Misión
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-100">
                {sections[active].text
                  .split("\n\n")[1]
                  .replace("Misión: ", "")}
              </p>
            </>
          ) : active === "valores" ? (

            <>
              {/* Título único de Valores */}
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 mt-8">
                {sections[active].title}
              </h3>
              <ul className="space-y-1">
                {sections[active].text.split("\n").map((line, i) => {
                  const [key, value] = line.split(":");
                  return (
                    <li
                      key={i}
                      className="text-base md:text-lg leading-snug text-gray-100"
                    >
                      <span className="font-semibold text-white">{key}:</span>{" "}
                      {value?.trim()}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p className="text-base md:text-lg leading-relaxed text-gray-100">
              {sections[active].text}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
