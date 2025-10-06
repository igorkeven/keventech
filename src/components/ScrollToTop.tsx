import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ offset = 80 }: { offset?: number }) {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Se tiver âncora (#contato), rola até a seção (com offset do header fixo)
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    // Caso normal: nova rota → volta pro topo
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash, key, offset]);

  return null;
}
