import { useEffect, useState } from "react";

const slides = [
  {
    image: "/photos/photo5.jpg",
    text: "Kita pernah berjalan beriringan, walau akhirnya harus ke arah berbeda.",
  },
  {
    image: "/photos/photo2.jpg",
    text: "Ada banyak hal yang belum sempat aku bilang, termasuk maaf.",
  },
  {
    image: "/photos/photo3.jpg",
    text: "Kenangan kita bukan kesalahan — itu bagian dari tumbuh.",
  },
  {
    image: "/photos/photo4.jpg",
    text: "Aku ingat setiap detailnya, walau kini hanya bisa kukenang.",
  },
  {
    image: "/photos/photo5.jpg",
    text: "Waktu berlalu, tapi beberapa perasaan tetap diam di tempat.",
  },
  {
    image: "/photos/photo1.jpg",
    text: "Pernah ada aku dan kamu, yang saling belajar memahami.",
  },
  {
    image: "/photos/photo7.jpg",
    text: "Maaf kalau aku tidak selalu menjadi yang terbaik saat itu.",
  },
  {
    image: "/photos/photo8.jpg",
    text: "Aku menyesal karena menyakiti, tapi tidak pernah menyesal mengenalmu.",
  },
  {
    image: "/photos/photo9.jpg",
    text: "Kadang, diam jadi satu-satunya cara untuk mengucap maaf.",
  },
  {
    image: "/photos/photo10.jpg",
    text: "Aku tak berharap kembali, Aku hanya ingin kau tahu: aku mengingatmu dengan hangat.",
  },
  {
    image: "/photos/photo11.jpg",
    text: "Semua yang pernah ada, tetap tersimpan rapi dalam hati.",
  },
  {
    image: "/photos/photo12.jpg",
    text: "Jika bisa diulang, aku akan lebih banyak mendengarkanmu.",
  },
  {
    image: "/photos/photo13.jpg",
    text: "Kita memang pernah salah, tapi juga pernah sangat berarti.",
  },
  {
    image: "/photos/photo14.jpg",
    text: "Terima kasih pernah percaya — meskipun akhirnya harus pergi.",
  },
  {
    video: "/videos/ending.mp4",
    text: "Dan inilah akhir dari cerita kita.",
  },
];

export default function StorySlides() {
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (index < slides.length - 1) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      }, 10000);
      return () => clearInterval(timer);
    } else {
      // Saat mencapai slide terakhir (video), tampilkan tombol setelah beberapa detik
      const buttonTimer = setTimeout(() => setShowButton(true), 100000); // tampil setelah 5 detik
      return () => clearTimeout(buttonTimer);
    }
  }, [index]);

  const current = slides[index];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000",
        filter: "grayscale(100%)",
      }}>
      {/* Gambar atau Video */}
      {current.image && (
        <img
          key={current.image}
          src={current.image}
          alt="story"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        />
      )}

      {current.video && (
        <video
          key={current.video}
          src={current.video}
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        />
      )}

      {/* Teks */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "#fff",
          fontSize: "1.8rem",
          textAlign: "center",
          padding: "0 20px",
          opacity: 0,
          animation: "fadeInText 1.5s forwards",
        }}>
        {current.text}
      </div>

      {/* Tombol Link */}
      {showButton && (
        <a
          href="https://drive.google.com/drive/folders/1zLk2_lSbgUSyzt8LM6d2jQgAKph6kxLd?usp=sharing" // <-- Ganti dengan link kamu
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            padding: "12px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1rem",
            backdropFilter: "blur(4px)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(255,255,255,0.3)")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "rgba(255,255,255,0.1)")
          }>
          Ini adalah kenangan kita
        </a>
      )}

      {/* Salju */}
      <div
        id="snow-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; scale: 1.05; }
            to { opacity: 1; scale: 1; }
          }

          @keyframes fadeInText {
            from { opacity: 0; transform: translate(-50%, -40%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
          }
        `}
      </style>
    </div>
  );
}
