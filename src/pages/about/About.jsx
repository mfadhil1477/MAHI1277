import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      
      {/* HERO */}
      <section className="about-hero">
        <h1>Tentang MHI APP</h1>
        <p className="arab">
          إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ
        </p>
        <p className="tagline">
          MHI (Ma’anil Hadis Insight) merupakan sebuah platform pembelajaran hadis berbasis digital yang dirancang untuk membantu pengguna memahami hadis secara lebih mendalam, tidak hanya dari segi teks, tetapi juga dari makna, konteks, dan relevansinya dalam kehidupan modern. Berangkat dari disiplin ilmu Ma’anil Hadis, MHI hadir sebagai jembatan antara kajian hadis klasik dengan kebutuhan pemahaman masyarakat masa kini yang dinamis.
          MHI juga mengintegrasikan pendekatan interaktif dan teknologi digital dalam proses pembelajarannya. Setiap hadis yang disajikan tidak hanya dilengkapi dengan terjemahan, tetapi juga penjelasan makna, analisis konteks, serta insight atau hikmah yang dapat diterapkan dalam kehidupan sehari-hari. Dengan demikian, hadis tidak lagi dipahami sebagai teks yang jauh dari realitas, melainkan sebagai pedoman hidup yang relevan dan aplikatif. 
          Selain itu, MHI dikembangkan untuk menjawab tantangan zaman, di mana kebutuhan akan pembelajaran yang fleksibel, mudah diakses, dan menarik semakin meningkat. Melalui platform ini, pengguna dari berbagai kalangan—baik mahasiswa, santri, maupun masyarakat umum—dapat mempelajari hadis dengan cara yang lebih sistematis, terarah, dan sesuai dengan perkembangan teknologi. 
          Dengan menggabungkan keilmuan hadis dan inovasi digital, MHI berkomitmen untuk menjadi sarana pembelajaran yang tidak hanya informatif, tetapi juga inspiratif. Harapannya, MHI dapat membantu membangun pemahaman hadis yang lebih luas, mendalam, dan kontekstual, sehingga nilai-nilai yang terkandung di dalamnya dapat diimplementasikan secara nyata dalam kehidupan modern.
        </p>
      </section>

      {/* VISI MISI */}
      <section className="visi-misi">
        <div className="card">
          <h2>🎯 Visi</h2>
          <ul>
            <li>Menyederhanakan pemahaman hadis untuk semua kalangan</li>
            <li>Menggabungkan teknologi dengan ilmu syar’i</li>
          </ul>
        </div>

        <div className="card">
          <h2>📌 Misi</h2>
          <ul>
            <li>Menyediakan hadis tematik untuk berbagai kebutuhan</li>
            <li>Membantu pelajar memahami makna hadis dengan jelas</li>
            <li>Mengembangkan pembelajaran digital Islami</li>
          </ul>
        </div>
      </section>

      {/* FITUR */}
      <section className="fitur">
        <h2>Fitur Utama Aplikasi</h2>
        <div className="fitur-grid">
          <div className="fitur-card"> 🔎 Pencarian Hadis berdasarkan kata kunci dan tema</div>
          <div className="fitur-card">📖 Penjelasan Ma’anil Hadis yang membantu memahami makna secara kontekstual</div>
          <div className="fitur-card">📖 Detail & Penjelasan</div>
          <div className="fitur-card">📚 Referensi Tambahan dari literatur kitab dan jurnal</div>
          <div className="fitur-card">🎓 Pendekatan Akademik sesuai kebutuhan mahasiswa Ilmu Hadis</div>
          <div className="fitur-card">🌐 Akses Multi-Platform (mobile & desktop)</div>
        </div>
      </section>

      {/* TEKNOLOGI */}
      <section className="teknologi">
        <h2>Teknologi yang Digunakan</h2>
        <div className="tech-list">
          <span>React JS</span>
          <span>Vite</span>
          <span>CSS Modern</span>
          <span>API Hadis</span>
          <span>SheetDB</span>
        </div>
      </section>

      {/* DEVELOPER */}
      <section className="developer">
        <h2>Tentang Pengembang</h2>
        <div className="dev-card">
          <img
            src="/foto.jpg.jpeg"
            alt="Foto saya"
          />
          <div>
            <h3>Kang Fadhil</h3>
            <p>Pembelajar Ilmu Hadis & Programmer</p>
            <ul>
              <li>Mahasiswa Ilmu Hadis</li>
              <li>Menggabungkan teknologi & khazanah ilmu hadis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="roadmap">
        <h2>Roadmap & Pengembangan</h2>
        <ul>
          <li>✅ Versi 1 - Kategori Dasar</li>
          <li>🔄 Versi 2 - Tafsir Hadis</li>
          <li>⭐ Versi 3 - Bookmark & Favorite</li>
          <li>🚀 Versi 4 - Mode Offline</li>
        </ul>
      </section>

    </div>
  );
}