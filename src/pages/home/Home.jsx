import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CategoryCard from "./categorycard/CategoryCard";
import "./Home.css";
 
export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { title: "EKOLOGI", subtitle: "Hadis Lingkungan", icon: "🌿", path: "/intro/ekologi" },
    { title: "GENDER", subtitle: "Relasi Gender", icon: "⚧️", path: "/intro/gender" },
    { title: "PUASA", subtitle: "Shaum", icon: "🌙🛐", path: "/hadis/puasa" },
    { title: "MUAMALAH", subtitle: "Muamalah", icon: "🤝📜", path: "/hadis/muamalah" },
    { title: "HAJI", subtitle: "Hajj", icon: "🕋👳🏻‍♂️", path: "/hadis/haji" },
    { title: "AKHLAK", subtitle: "Akhlaq", icon: "🌸❤️", path: "/hadis/akhlak" },
  ];

  const [activeMaani, setActiveMaani] = useState("definisi");

  const maaniContent = {
    definisi: `Ma’anil Hadis adalah kajian yang menekankan pemahaman makna hadis,
    baik dari segi bahasa, konteks, maupun tujuan disampaikannya hadis oleh Nabi ﷺ.`,

    ruang: `Ruang lingkup Ma’anil Hadis meliputi analisis bahasa,
    asbabul wurud, konteks sosial, dan tujuan hukum dalam hadis.`,

    sejarah: `Kajian ini berkembang sejak masa ulama klasik
    sebagai upaya memahami hadis secara kontekstual.`,
  };

  return (
    <div className="home-container">

      {/* BACKGROUND */}
      <div className="bg-animated">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span> 
      </div>

      {/* ================= INTRO CARDS ================= */}
      <div className="intro-cards">

        {/* ================= CARD 1 ================= */}
        <div className="intro-card">
          <div className="card-content">
            <div className="card-text">
              <h2>Apa Itu MHI APP?</h2>
              <p>
                Platform pembelajaran hadis interaktif untuk memahami makna, konteks,
                dan relevansi hadis dalam kehidupan modern.
              </p>

              <button onClick={() => navigate("/about")}>
                Selengkapnya
              </button>
            </div>

            <div className="card-image logo">
              <img src="/logo.png" alt="app" />
            </div>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="intro-card">
          <div className="card-content reverse">

            {/* TEXT */}
            <div className="card-text">
              <h2>Apa itu Ma’anil Hadis?</h2>

              {/* TAB */}
              <div className="mini-tabs">
                <button
                  className={activeMaani === "definisi" ? "active" : ""}
                  onClick={() => setActiveMaani("definisi")}
                >
                  Definisi
                </button>

                <button
                  className={activeMaani === "ruang" ? "active" : ""}
                  onClick={() => setActiveMaani("ruang")}
                >
                  Ruang Lingkup
                </button>

                <button
                  className={activeMaani === "sejarah" ? "active" : ""}
                  onClick={() => setActiveMaani("sejarah")}
                >
                  Sejarah
                </button>
              </div>

              {/* CONTENT */}
              <p>{maaniContent[activeMaani]}</p>

              {/* BUTTON KE HALAMAN MAANI */}
              <button onClick={() => navigate("/maani")}>
                Pelajari Lebih Dalam
              </button>
            </div>

            {/* IMAGE */}
            <div className="card-image logo">
              <img src="/kitab.jpg" alt="hadis" />
            </div>

          </div>
        </div>

        {/* ================= CARD 3 ================= */}
        <div className="intro-card">
          <h2>Kategori Tema Hadis</h2>
          <p>Pilih tema untuk mulai mempelajari hadis secara tematik.</p>

          <div className="category-grid">
            {categories.map((cat, i) => (
              <CategoryCard key={i} data={cat} />
            ))}
          </div>
        </div>

      </div>
      {/* ================================================= */}

    </div>
  );
}