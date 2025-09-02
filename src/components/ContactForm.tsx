export default function ContactForm() {
  return (
    <form>
      <label>Nombre:</label>
      <input type="text" name="name" />

      <label>Email:</label>
      <input type="email" name="email" />

      <label>Mensaje:</label>
      <textarea name="message"></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}
