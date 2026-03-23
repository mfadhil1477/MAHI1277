import { useState } from "react";
import "../about/About.css";

export default function Maani() {
  const [active, setActive] = useState("definisi");

  const content = {
    definisi: `Ma’anil Hadis adalah kajian yang menekankan pemahaman makna hadis,
    baik dari segi bahasa, konteks, maupun tujuan disampaikannya hadis oleh Nabi ﷺ.`,

    ruang: `Ruang lingkup Ma’anil Hadis meliputi analisis bahasa,
    asbabul wurud, konteks sosial, dan tujuan hukum dalam hadis.`,

    sejarah: `Kajian ini berkembang sejak masa ulama klasik
    sebagai upaya memahami hadis secara kontekstual.`,
  };

  return (
    <div className="about-container">

      <h1 className="title">Ma’anil Hadis</h1>

      <div className="mini-tabs">
        <button
          className={active === "definisi" ? "active" : ""}
          onClick={() => setActive("definisi")}
        >
          Definisi
        </button>

        <button
          className={active === "ruang" ? "active" : ""}
          onClick={() => setActive("ruang")}
        >
          Ruang Lingkup
        </button>

        <button
          className={active === "sejarah" ? "active" : ""}
          onClick={() => setActive("sejarah")}
        >
          Sejarah
        </button>
      </div>

      <div className="card" style={{ marginTop: "30px" }}>
        <p>{content[active]}</p>
      </div>

    </div>
  );
}