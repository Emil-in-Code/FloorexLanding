import { useEffect } from "react";
import Privacy from "../Components/Legal/Privacy.jsx";
import { RESPONSIBLE } from "../Data/Privacy.js";

export default function PrivacyPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Política de Privacidad — ${RESPONSIBLE.trade}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return <Privacy/>;
}
