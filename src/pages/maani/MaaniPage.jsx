import { useState } from "react";
import "../about/About.css";
import BackButton from "../../backbutton/BackButton";

export default function Maani() {
  const [active, setActive] = useState("definisi");

  const content = {
    definisi: `ilmu ma’anil hadis merupakan suatu disiplin ilmu yang mengkaji bagaimana cara untuk memahami Hadis dengan mempertimbangkan aspek-aspek tertentu seperti bahasa, konteks historis baik mikro maupun makro untuk meninjau konidisi dan kedudukan Nabi Saw ketika menyampaikan suatu Hadis, kemudiam menghubungkan konteks dulu dengan konteks sekarang, sehingga dapat menemukan makna yang relevan dengan zaman sekarang yang bersifat dinamis`,

    ruang: `Ilmu ma’anil hadis belum dikenal sebagai disiplin tersendiri pada masa Nabi Saw dan para sahabat karena pemahaman hadis saat itu masih mudah berkat kesamaan bahasa dan adanya akses langsung bertanya kepada Nabi Saw. Pada awal perkembangannya, perhatian ulama lebih terfokus pada aspek otentisitas hadis, sehingga kajian makna belum terlalu populer. Seiring waktu, kebutuhan memahami makna hadis melahirkan berbagai kitab syarah seperti Tanwir al-Hawalik Syarh Muwatha’ Imam Malik, Fath al-Bari, Syarh Muslim, Aunul Ma’bud, dan Faidl al-Qadir. Sebelum itu, telah muncul ilmu Gharib al-Hadis yang khusus membahas lafaz hadis yang asing atau sulit dipahami, sebagai respons terhadap penyebaran Islam ke berbagai wilayah yang menyebabkan perbedaan pemahaman bahasa. Ilmu ini mula-mula ditulis oleh Abu Hasan al-Nadl Ibn Syamil Mazini al-Nahwi, kemudian berkembang lebih sistematis dalam karya al-Nihayah fi Gharib al-Hadis oleh Ibnul Atsir al-Jaziri. Selanjutnya, lahir pula ilmu Mukhtalif al-Hadis yang membahas hadis-hadis yang tampak bertentangan, ditandai dengan karya Ikhtilaful Hadis oleh Imam Syafi’i pada abad ke-2 H, lalu disempurnakan oleh Ibnu Qutaibah melalui kitab Mukhtaliful Hadis yang lebih komprehensif dalam menghimpun dan mengompromikan hadis-hadis tersebut.`,

    sejarah: `Ilmu ma’anil hadis belum dikenal sebagai disiplin tersendiri pada masa Nabi Saw dan para sahabat karena pemahaman hadis saat itu masih mudah berkat kesamaan bahasa dan adanya akses langsung bertanya kepada Nabi Saw. Pada awal perkembangannya, perhatian ulama lebih terfokus pada aspek otentisitas hadis, sehingga kajian makna belum terlalu populer. Seiring waktu, kebutuhan memahami makna hadis melahirkan berbagai kitab syarah seperti Tanwir al-Hawalik Syarh Muwatha’ Imam Malik, Fath al-Bari, Syarh Muslim, Aunul Ma’bud, dan Faidl al-Qadir. Sebelum itu, telah muncul ilmu Gharib al-Hadis yang khusus membahas lafaz hadis yang asing atau sulit dipahami, sebagai respons terhadap penyebaran Islam ke berbagai wilayah yang menyebabkan perbedaan pemahaman bahasa. Ilmu ini mula-mula ditulis oleh Abu Hasan al-Nadl Ibn Syamil Mazini al-Nahwi, kemudian berkembang lebih sistematis dalam karya al-Nihayah fi Gharib al-Hadis oleh Ibnul Atsir al-Jaziri. Selanjutnya, lahir pula ilmu Mukhtalif al-Hadis yang membahas hadis-hadis yang tampak bertentangan, ditandai dengan karya Ikhtilaful Hadis oleh Imam Syafi’i pada abad ke-2 H, lalu disempurnakan oleh Ibnu Qutaibah melalui kitab Mukhtaliful Hadis yang lebih komprehensif dalam menghimpun dan mengompromikan hadis-hadis tersebut.`,
  };

  return (
    <div className="about-container">

      <h1 className="title">Tentang Ma’anil Hadis</h1>

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

      <div className="card" style={{ marginTop: "30px", textAlign: "justify",}}>
        <p>{content[active]}</p>
      </div>

      <BackButton />

    </div>
  );
}