import { useEffect, useState } from "react";

export default function Opening({ onFinish }) {
  const sentences = [
    "Haii",
    "Ini kenangan terkahir kita",
    "Semoga kamu suka <3",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (currentIndex < sentences.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      // Setelah semua kalimat selesai, tampilkan tombol
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 1500);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentIndex]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(2px)",
        color: "#fff",
        fontSize: "2rem",
        filter: "grayscale(100%)",
        zIndex: 10,
      }}>
      <p
        key={currentIndex}
        style={{
          opacity: 0,
          animation: "fadeIn 1s ease forwards",
          marginBottom: "1.5rem",
        }}>
        {sentences[currentIndex]}
      </p>

      {showButton && (
        <button
          onClick={onFinish}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#ffffff22",
            color: "#fff",
            backdropFilter: "blur(4px)",
          }}>
          🌸 Mulai Cerita
        </button>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 455px) {
            p {
              font-size: 1.2rem !important;
            }
        `}
      </style>
    </div>
  );
}
