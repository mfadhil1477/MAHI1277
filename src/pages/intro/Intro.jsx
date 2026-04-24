
import { useParams, Link } from "react-router-dom";
import "./Intro.css";
import BackButton from "../../components/backbutton/BackButton";

export default function Intro() {

  const { kategori } = useParams();

  const introData = {
    ekologi: {
      title: "Ekologi",
      text: "Pengantar Ekologi Sebelum mempelajari hadis-hadis tentang lingkungan, ada baiknya kita memahami terlebih dahulu apa yang dimaksud dengan ekologi. Ekologi adalah ilmu yang mempelajari hubungan antara makhluk hidup dengan lingkungan tempat mereka hidup, seperti manusia, hewan, tumbuhan, air, tanah, dan udara. Semua unsur tersebut saling berkaitan dan membentuk keseimbangan kehidupan di bumi.Dalam kehidupan sehari-hari, manusia sangat bergantung pada lingkungan. Karena itu, menjaga alam menjadi hal yang sangat penting agar keseimbangan tersebut tetap terjaga. Jika lingkungan rusak, maka kehidupan makhluk hidup juga akan ikut terganggu. Dalam Islam, menjaga lingkungan juga merupakan bagian dari tanggung jawab manusia. Selain dijelaskan dalam Al-Qur’an, Nabi Muhammad ﷺ juga memberikan banyak petunjuk melalui hadis-hadisnya tentang bagaimana manusia seharusnya memperlakukan alam. Pada bagian berikutnya, kamu akan menemukan beberapa hadis Nabi yang berkaitan dengan kepedulian terhadap lingkungan, seperti anjuran menanam pohon, menjaga kebersihan, serta larangan merusak alam. Hadis-hadis tersebut akan membantu kita memahami bagaimana ajaran Islam mengajarkan untuk menjaga dan merawat lingkungan. 🌱"
    },

    gender: {
      title: "Gender",
      text: "Pengantar Tema Gender dalam Hadis. Dalam kajian Islam, istilah gender sering digunakan untuk membahas peran, tanggung jawab, dan hubungan antara laki-laki dan perempuan dalam kehidupan sosial. Islam memandang bahwa laki-laki dan perempuan sama-sama memiliki kedudukan mulia sebagai hamba Allah serta memiliki kesempatan yang sama untuk berbuat kebaikan dan memberikan kontribusi bagi masyarakat. Nabi Muhammad ﷺ melalui berbagai hadis memberikan banyak petunjuk tentang bagaimana perempuan dihargai, diberi ruang untuk belajar, bekerja, serta berperan dalam kehidupan sosial. Hal ini menunjukkan bahwa ajaran Islam tidak membatasi perempuan untuk berkembang, tetapi justru mendorong mereka untuk menjadi pribadi yang mandiri, berilmu, dan bermanfaat bagi lingkungan sekitarnya. Pada bagian berikutnya, kamu akan menemukan beberapa hadis yang berkaitan dengan kemandirian perempuan. Hadis-hadis tersebut membantu kita memahami bagaimana Islam memberikan penghargaan terhadap peran perempuan dalam keluarga maupun masyarakat."
    },

    parenting: {
      title: "Parenting",
      text: "Parenting dalam perspektif Islam merupakan proses pengasuhan, pendidikan, dan pembinaan anak yang dilakukan secara menyeluruh untuk membentuk kepribadian, akhlak, serta keimanan sejak dini. Pengasuhan ini tidak hanya berfokus pada kebutuhan fisik, tetapi juga mencakup aspek emosional, intelektual, dan spiritual anak. Dalam hal ini, hadis Nabi Muhammad SAW memiliki peran yang sangat penting sebagai pedoman utama, karena memberikan contoh dan tuntunan praktis tentang cara mendidik anak dengan penuh kasih sayang, keteladanan, serta penanaman nilai-nilai moral dan agama. Dengan demikian, parenting dalam Islam yang berlandaskan hadis bertujuan untuk melahirkan generasi yang berakhlak mulia, bertanggung jawab, dan berpegang teguh pada ajaran Islam."
    },

    muamalah: {
      title: "Muamalah",
      text: "Muamalah dalam Islam adalah bagian dari syariat yang mengatur hubungan antarmanusia dalam bidang ekonomi, seperti jual beli, sewa, dan berbagai bentuk transaksi lainnya. Berbeda dengan ibadah yang bersifat tetap, muamalah bersifat dinamis mengikuti perkembangan zaman, namun tetap harus berlandaskan prinsip syariat seperti keadilan, kejujuran, dan saling ridha. Dalam hal ini, hadis-hadis Nabi ﷺ menjadi pedoman utama dalam menetapkan etika dan hukum transaksi. Rasulullah ﷺ menegaskan larangan terhadap praktik yang mengandung ketidakjelasan (gharar), penipuan, dan unsur spekulasi, sekaligus menekankan pentingnya kerelaan kedua belah pihak dalam setiap akad. Prinsip-prinsip ini menjadikan hadis sebagai dasar penting dalam membangun sistem ekonomi Islam yang relevan, termasuk dalam konteks perdagangan modern seperti transaksi online."
    },

    akhlak: {
      title: "Akhlak",
      text: "Akhlak dalam Islam dapat dipahami sebagai sifat atau perilaku yang tertanam dalam diri seseorang yang mendorongnya untuk bertindak secara spontan tanpa memerlukan pertimbangan panjang, sehingga mencerminkan kepribadian yang sebenarnya. Konsep akhlak tidak hanya mencakup hubungan manusia dengan sesama, tetapi juga dengan Allah SWT dan lingkungan sekitarnya. Dalam hal ini, hadis Nabi Muhammad SAW memiliki peran yang sangat penting sebagai sumber utama dalam menjelaskan dan mencontohkan akhlak yang ideal, karena melalui hadis, umat Islam dapat memahami secara konkret bagaimana nilai-nilai akhlak diaplikasikan dalam kehidupan sehari-hari. Dengan demikian, hadis tidak hanya berfungsi sebagai penjelas ajaran Al-Qur’an, tetapi juga sebagai pedoman praktis dalam membentuk dan membina akhlak yang mulia.",
    },

  };

  const data = introData[kategori];

  return (
    <div className="intro-container">

      <h1>{data?.title}</h1>

      <p>{data?.text}</p>

      <Link to={`/hadis/${kategori}`} className="btn-hadis">
        Lihat Hadis
      </Link>

      <BackButton />

    </div>
  );
}
