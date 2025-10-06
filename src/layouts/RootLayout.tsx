import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";



export default function RootLayout() {
  return (
    <>
      <Header />
      <ScrollToTop  offset={80} />
      <main className="min-h-[60vh]"> 
        <ScrollToTop />
        <Outlet /> {/* aqui as páginas entram */}
      </main>
      <Footer />
    </>
  );
}
