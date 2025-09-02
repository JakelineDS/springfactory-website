import Link from "next/link";

export default function ProductosPage() {
  return (
    <section>
      <h1>Productos</h1>
      <p>
        Ofrecemos una amplia variedad de resortes para distintos sectores de la industria y el transporte.
        Cada categoría está diseñada para responder a las exigencias más altas de calidad y desempeño.
      </p>

      <ul>
        <li><Link href="/productos/compresion">Resortes de Compresión</Link></li>
        <li><Link href="/productos/traccion">Resortes de Tracción</Link></li>
        <li><Link href="/productos/torsion">Resortes de Torsión</Link></li>
        <li><Link href="/productos/suspension">Resortes de Suspensión</Link></li>
        <li><Link href="/productos/mototaxi">Resortes para Mototaxi</Link></li>
        <li><Link href="/productos/industrial">Resortes Industriales</Link></li>
        <li><Link href="/productos/puerta-levadiza">Resortes para Puerta Levadiza</Link></li>
        <li><Link href="/productos/puerta-seccional">Resortes para Puerta Seccional</Link></li>
        <li><Link href="/productos/mineria">Resortes para Minería</Link></li>
      </ul>
    </section>
  );
}
