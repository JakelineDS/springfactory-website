"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Procesos() {
  const sections = {
    moldeado: {
      title: "Moldeado y Formado",
      text: `En esta etapa el alambre de acero es conformado con precisión para obtener la geometría exacta del resorte, garantizando uniformidad y resistencia desde el inicio del proceso.`,
      img: "/images/procesos/moldeado.png",
    },
    rectificado: {
      title: "Rectificado de Extremos",
      text: `Se realiza el pulido y nivelado de los extremos del resorte, asegurando un apoyo estable, mayor seguridad en el montaje y un mejor desempeño en la aplicación final.`,
      img: "/images/procesos/rectificado.png",
    },
    prensado: {
      title: "Prensado y Estabilización",
      text: `Este proceso elimina tensiones internas del material, logrando que el resorte mantenga su forma y propiedades mecánicas incluso bajo cargas repetitivas y de alta exigencia.`,
      img: "/images/procesos/prensado.png",
    },
    termico: {
      title: "Tratamiento Térmico",
      text: `Mediante temple y revenido se fortalece la estructura del acero, aumentando su dureza, elasticidad y resistencia a la fatiga para garantizar una mayor durabilidad.`,
      img: "/images/procesos/termico.png",
    },
    acabados: {
      title: "Acabados Superficiales",
      text: `Incluye recubrimientos protectores como pintura, fosfatado o galvanizado, que mejoran la resistencia a la corrosión y aportan una mejor presentación del producto.`,
      img: "/images/procesos/acabados.png",
    },
    calidad: {
      title: "Inspección y Verificación de Calidad",
      text: `Cada resorte es sometido a pruebas técnicas de carga, medidas y rendimiento, asegurando que cumpla con los estándares exigidos y las especificaciones del cliente.`,
      img: "/images/procesos/calidad.png",
    },
  };

  const [active, setActive] = useState<keyof typeof sections>("moldeado");

  return (
    <main className="relative w-full min-h-screen pt-24">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 min-h-screen w-full">
        <aside className="bg-slate-800 text-white px-8 py-12 flex flex-col md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            Procesos
          </h2>

          <nav className="mt-8">
            <ul className="border-y border-white/10 divide-y divide-white/10">
              {([
                ["moldeado", "Moldeado y Formado"],
                ["rectificado", "Rectificado de Extremos"],
                ["prensado", "Prensado y Estabilización"],
                ["termico", "Tratamiento Térmico"],
                ["acabados", "Acabados Superficiales"],
                ["calidad", "Inspección y Verificación de Calidad"],
              ] as const).map(([key, label]) => {
                const isActive = active === key;
                return (
                  <li key={key}>
                    <button
                      onClick={() => setActive(key)}
                      className={`group w-full text-left flex items-center justify-between gap-3 py-3 pl-3 pr-1 transition border-l-4 ${
                        isActive
                          ? "border-yellow-400 text-yellow-400 bg-white/5"
                          : "border-transparent text-gray-200 hover:text-yellow-300 hover:bg-white/5"
                      }`}
                    >
                      <span className="text-sm md:text-base">{label}</span>
                      <ChevronRight
                        className={`shrink-0 transition-transform ${
                          isActive
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

        <section className="bg-slate-700 md:col-span-4 p-8 md:p-12 text-white flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-start">
            <div className="flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                {sections[active].title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                {sections[active].text}
              </p>
            </div>

            <div className="flex justify-center items-start">
              <Image
                src={sections[active].img}
                alt={sections[active].title}
                width={550}
                height={400}
                className="rounded-lg ring-1 ring-white/15 shadow-xl object-cover h-[450px] w-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
