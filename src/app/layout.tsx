import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Spring Factory Website",
  description: "Fabricación de resortes en Perú",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar /> 
        <main>{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}

