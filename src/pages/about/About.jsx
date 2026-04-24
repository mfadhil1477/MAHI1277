import "./About.css";
import BackButton from "../../components/backbutton/BackButton";

export default function About() {
  return (
    <div className="about-container">
      
      {/* HERO */}
      <section className="about-hero">
        <h1>Tentang MHI APP</h1>
        <p className="arab">
وَمَا طَلَبُ المَعَالِي بِالتَّمَنِّي
وَلَكِنْ تُؤْخَذُ الدُّنْيَا غِلَابَا
        <br />
        <i>"Kemuliaan tidak didapat dengan angan-angan, tapi dengan usaha dan perjuangan"</i>
        </p>
         <b>Abu al-Tayyib al-Mutanabbi</b>
        <p className="tagline">
          MHI (Ma’anil Hadis Insight) merupakan platform pembelajaran hadis berbasis digital yang dikembangkan berdasarkan penelitian skripsi. Aplikasi ini membantu pengguna memahami hadis secara lebih mendalam melalui penyajian teks, terjemahan, serta penjelasan makna dan konteks yang relevan dengan kehidupan modern. Dengan pendekatan yang sistematis dan interaktif, MHI diharapkan dapat menjadi media pembelajaran yang mudah diakses, menarik, serta mampu menjembatani kajian hadis klasik dengan kebutuhan pemahaman masa kini
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

<div className="profile-card">

  {/* 🔥 KIRI (dibungkus) */}
  <div className="left">
    <img src="/foto.jpg.jpeg" className="profile-img" />
    <h3>Kang Fadhil</h3>
    <p className="role">Mahasiswa Ilmu Hadis</p>
  </div>

  {/* 🔥 KANAN */}
  <div className="right">

    <div className="section">
      <h4>Profil</h4>
        <p><b>Nama:</b> Mohammad Fadhil Febryansyah</p>
        <p><b>Status:</b> Mahasiswa</p>
        <p><b>Alamat:</b> Dusun Petengan, Desa Tambak Rejo, Kecamatan Jombang, Kabupaten Jombang</p>
  
    </div>


    <div className="section">
      <h4>Kontak</h4>
      <p> <b>Email:</b> kangfadhil069@gmail.com</p>
      <p> <b>Nomor Telepon: </b>081239352594</p>
    </div>

    <div className="section">
      <h4>Skill</h4>
      <div className="skills">
        <span>React</span>
        <span>JavaScript</span>
        <span>API</span>
        <span>Hadis</span>
      </div>
    </div>
    <div className="section">
      <h4>Pendidikan</h4>
      <ul>
        <li>MI Bahrul Ulum Tambak Beras Jombang</li>
        <li>Muallimin 6 Tahun Bahrul Ulum Tambak beras Jombang</li>
        <li>UIN Sayyid Ali Rahmatullah Tulungagung</li>
      </ul>
    </div>

  </div>

</div>
</section>
  <BackButton />

      {/* ROADMAP */}
    </div>
  );
}