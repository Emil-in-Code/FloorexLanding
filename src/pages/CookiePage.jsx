import { useEffect } from "react";
import Cookies  from "../components/Legal/Cookies.jsx";
import { RESPONSIBLE } from "../Data/Cookies.js";

export default function CookiesPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Política de Cookies — ${RESPONSIBLE.trade}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return <Cookies/>;
}
