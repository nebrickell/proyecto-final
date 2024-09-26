import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Hook para obtener la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la parte superior
  }, [pathname]); // Cada vez que cambie la ruta, ejecuta este efecto

  return null; // No retorna nada visible
};

export default ScrollToTop;
