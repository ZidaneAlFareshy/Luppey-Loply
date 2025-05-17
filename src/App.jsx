import { useEffect, useRef, useState } from "react";
import Snowfall from "react-snowfall";
import Opening from "./Opening";
import StorySlides from "./StorySlides";

function App() {
  const audioRef = useRef(null);
  const [showMain, setShowMain] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;
    audio.volume = 0.4;
    audio.play().catch((err) => {
      console.log("Autoplay masih diblokir:", err);
    });

    setShowMain(true);
  };

  return (
    <>
      {/* Musik (tidak autoplay) */}
      <audio ref={audioRef} src="/bg-music.mp3" loop />

      {/* Salju */}
      <Snowfall
        snowflakeCount={100}
        color="#ffffff"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9,
          pointerEvents: "none",
        }}
      />

      {/* Mulai dari opening, musik diputar saat masuk ke StorySlides */}
      {!showMain ? <Opening onFinish={handleStart} /> : <StorySlides />}
    </>
  );
}

export default App;
