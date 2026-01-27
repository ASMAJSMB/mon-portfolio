import React, { useMemo } from "react";
import Particles from "@tsparticles/react";  // Wrapper React officiel
import { loadFull } from "tsparticles";  // Chargeur pour les fonctionnalités complètes

const ParticlesBackground = () => {
  // Configuration des particules (ajustez selon vos besoins)
  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },  // Arrière-plan transparent pour s'adapter à votre gradient
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },  // Blanc pour contraster avec le fond sombre
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 6,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

  // Initialisation asynchrone (nécessaire pour charger les plugins)
  const particlesInit = async (engine) => {
    await loadFull(engine);  // Charge toutes les fonctionnalités
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,  // Derrière le contenu
      }}
    />
  );
};

export default ParticlesBackground;