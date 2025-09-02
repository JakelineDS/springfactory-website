"use client";

import Image from "next/image";

export default function GaleriaPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Galería de Productos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/resorte1.jpg"
            alt="Resorte 1"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/resorte2.jpg"
            alt="Resorte 2"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/resorte3.jpg"
            alt="Resorte 3"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
