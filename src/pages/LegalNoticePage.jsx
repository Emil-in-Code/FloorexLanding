import { useEffect } from "react";
import Legal  from "../Components/Legal/LegalNotice.jsx";
import { RESPONSIBLE } from "../Data/legalNotice.js";

export default function LegalNoticePage() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Aviso Legal — ${RESPONSIBLE.trade}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return <Legal/>;
}
