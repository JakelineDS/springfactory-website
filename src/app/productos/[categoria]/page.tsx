export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  return (
    <section>
      <h1>Categoria: {params.categoria}</h1>
      <p>Aquí mostraremos la información e imágenes de los productos de {params.categoria}.</p>
    </section>
  );
}
