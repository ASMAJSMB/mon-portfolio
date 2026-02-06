import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaPause } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

function Projets() {
  const { ref } = useInView({ triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projets = [
    {
      nom: "Application My Note App",
      objectif:
        "Conception d'un gestionnaire de notes intelligent permettant de classer ses tâches de la plus urgente à la moins prioritaire.",
      tech: "React Native",
      apprentissage: "Création d'une application mobile interactive.",
      github: "https://github.com/ASMAJSMB/mynoteapp",
      demo: "https://ecommerce-demo.vercel.app",
      video:
        "https://raw.githubusercontent.com/ASMAJSMB/mynoteapp/master/WhatsApp%20Video%202026-01-29%20at%2013.27.15.mp4",
      imagesMobile: [
        "/image/image1.jpeg",
        "/image/image2.jpeg",
        "/image/image3.jpeg",
        "/image/image4.jpeg",
      ],
    },
    {
      nom: "Site Web Pink-Elephant",
      objectif:
        "Création d'une plateforme web sur mesure pour Pink Elephant, mettant en avant l'identité visuelle unique de la marque à travers une interface moderne et fluide.",
      tech: "React, Firebase, Vite, Styled Components",
      apprentissage:
        "Intégration web à partir de maquettes réalisées par des designers.",
      github: "https://github.com/ASMAJSMB/pink-elephant",
      demo: "https://arcade-fire-69ea3.web.app",
      imageDesktop: "/image/code.jpg",
      imageMobile: "/image/code.jpg",
    },
    {
      nom: "Site Web Pink-Elephant-Admin",
      objectif:
        "Développement d'une interface d'administration (Back-office) dédiée à la gestion logistique des tournées.",
      tech: "React, Vite, Firebase",
      apprentissage: "Développement web, synchronisation en temps réel.",
      github: "https://github.com/nylbix12/arcade-fire-vitrine",
      demo: "https://arcadeback.web.app",
      imageDesktop: "/image/cod.jpg",
      imageMobile: "/image/cod.jpg",
    },
  ];

  const [playingStates, setPlayingStates] = useState(projets.map(() => false));
  const videoRefs = useRef(projets.map(() => null));

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingStates[index]) video.pause();
      else video.play();
      setPlayingStates((prev) =>
        prev.map((state, i) => (i === index ? !state : state))
      );
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
  };

  return (
    <section
      id="projets"
      ref={ref}
      className="relative py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Projets
        </h2>
      </div>

      <Slider {...settings} className="max-w-5xl mx-auto">
        {projets.map((projet, index) => (
          <div key={index} className="p-4">
            <div className="flex flex-col md:flex-row bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 min-h-[450px]">
              
              {/* MEDIA */}
              <div className="w-full md:w-1/3 bg-black flex items-center justify-center p-2 relative">
                {projet.nom === "Application My Note App" && !isMobile && projet.video ? (
                  <>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={projet.video}
                      className="h-[400px] w-auto rounded-lg shadow-xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                      <button
                        onClick={() => togglePlay(index)}
                        className="bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition"
                        aria-label={playingStates[index] ? "Pause vidéo" : "Lire vidéo"}
                      >
                        {playingStates[index] ? <FaPause size={24} /> : <FaPlay size={24} />}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {projet.nom === "Application My Note App" && isMobile
                      ? projet.imagesMobile.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`My Note App ${i + 1}`}
                            className="w-32 h-32 object-cover rounded-lg shadow-md"
                          />
                        ))
                      : (
                          <img
                            src={isMobile ? projet.imageMobile : projet.imageDesktop}
                            alt={projet.nom}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                  {projet.nom}
                </h3>
                <div className="space-y-3 mb-6">
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Objectif :
                    </strong>{" "}
                    {projet.objectif}
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Technologies :
                    </strong>{" "}
                    {projet.tech}
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Apprentissages :
                    </strong>{" "}
                    {projet.apprentissage}
                  </p>
                </div>
                <div className="flex gap-6 flex-wrap">
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
                  >
                    <FaGithub size={20} /> Code source
                  </a>
                  {projet.nom !== "Application My Note App" && projet.demo && (
                    <a
                      href={projet.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
                    >
                      <FaExternalLinkAlt size={18} /> Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projets;