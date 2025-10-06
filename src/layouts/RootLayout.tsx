import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// (opcional) Componente simples pra subir a página a cada navegação
function ScrollToTop() {
  window.scrollTo(0, 0);
  return null;
}

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]"> 
        <ScrollToTop />
        <Outlet /> {/* aqui as páginas entram */}
      </main>
      <Footer />
    </>
  );
}
