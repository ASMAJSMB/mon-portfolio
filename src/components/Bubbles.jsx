import React, { useState, useEffect } from "react";

function Bubbles() {
  const [bubbles, setBubbles] = useState([]);

  // Créer les bulles au départ
  useEffect(() => {
    const initialBubbles = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 1, // vitesse X
      vy: (Math.random() - 0.5) * 1, // vitesse Y
      size: 60 + Math.random() * 80,
      color: ["#f43f5e", "#6366f1", "#ec4899"][
        Math.floor(Math.random() * 3)
      ],
    }));
    setBubbles(initialBubbles);
  }, []);

  // Animation frame
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setBubbles((prev) =>
        prev.map((bubble) => {
          let { x, y, vx, vy, size } = bubble;

          // Calcul distance souris
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Si la souris est proche, ajouter force répulsive
          if (dist < 150) {
            const force = (150 - dist) * 0.05; // intensité
            const angle = Math.atan2(dy, dx);
            vx += Math.cos(angle) * force;
            vy += Math.sin(angle) * force;
          }

          // Mettre à jour position
          x += vx;
          y += vy;

          // Limites écran
          if (x < 0 || x > window.innerWidth - size) vx = -vx;
          if (y < 0 || y > window.innerHeight - size) vy = -vy;
          x = Math.max(0, Math.min(x, window.innerWidth - size));
          y = Math.max(0, Math.min(y, window.innerHeight - size));

          // Ajouter légère friction pour ne pas accélérer indéfiniment
          vx *= 0.98;
          vy *= 0.98;

          return { ...bubble, x, y, vx, vy };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Boucle animation
  useEffect(() => {
    const animate = () => {
      setBubbles((prev) =>
        prev.map((bubble) => {
          let { x, y, vx, vy, size } = bubble;
          x += vx;
          y += vy;

          // Limites écran
          if (x < 0 || x > window.innerWidth - size) vx = -vx;
          if (y < 0 || y > window.innerHeight - size) vy = -vy;
          x = Math.max(0, Math.min(x, window.innerWidth - size));
          y = Math.max(0, Math.min(y, window.innerHeight - size));

          return { ...bubble, x, y, vx, vy };
        })
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            position: "absolute",
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            backgroundColor: bubble.color + "DD",
            boxShadow: "0 0 25px rgba(255,255,255,0.7)",
            filter: "blur(2px)",
            pointerEvents: "auto", // pour clic si tu veux
          }}
        />
      ))}
    </div>
  );
}

export default Bubbles;
