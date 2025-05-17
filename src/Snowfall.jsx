import { useEffect } from "react";

export default function Snowfall() {
  useEffect(() => {
    const canvas = document.getElementById("snow");
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let flakes = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      d: Math.random() + 1,
    }));

    function drawFlakes() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      moveFlakes();
    }

    let angle = 0;
    function moveFlakes() {
      angle += 0.01;
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 2;

        if (f.y > height) {
          flakes[i] = { ...f, y: 0, x: Math.random() * width };
        }
      }
    }

    const interval = setInterval(drawFlakes, 25);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      id="snow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.3,
      }}
    />
  );
}
