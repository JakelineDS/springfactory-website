export default function ContactoPage() {
  return (
    <section>
      <h1>Contáctanos</h1>
      <p>
        Si deseas cotizar un producto, realizar un pedido o recibir más información,
        completa el siguiente formulario o comunícate con nosotros a través de nuestras redes sociales.
      </p>

      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
