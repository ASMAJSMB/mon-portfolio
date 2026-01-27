import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

function Projets() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const projets = [
    
    {
      nom: "Application My Note App",
      objectif: "Creer une application qui permet d'ajouter des notes de plus a moins importantes pour etre plus orgnisé.",
      tech: "React native",
      apprentissage: "creation d'une app mobile.",
      github: "https://github.com/ASMAJSMB/mynoteapp",
      demo: "https://ecommerce-demo.vercel.app",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=E-commerce",
    },
    {
      nom: " pink-elephant",
      objectif: "site d'un groupe de musique pour une tournée ",
      tech: "react,firebase , vite,styled components",
      apprentissage: "avoir des design fait par des designeur et les mettre en forme pour avoir un resultat en site ",
      github: "https://github.com/ASMAJSMB/pink-elephant",
      demo: "https://marketing-blog.netlify.app",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Blog",
    },
    {
      nom: "pink-elephant-vitrine ",
      objectif: "le back du site pink elephant pour gerer les bases de données ",
      tech: "React ,vite, Firebase",
      apprentissage: "Développement mobile, synchronisation en temps réel.",
      github: "https://github.com/nylbix12/arcade-fire-vitrine",
      demo: "https://expo.dev/@asmahaddad/task-manager",
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Task+Manager",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      id="projets"
      ref={ref}
      className="relative py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      aria-labelledby="projets-title"
    >
      <div className="text-center mb-16">
        <h2
          id="projets-title"
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent font-poppins"
        >
          Projets
        </h2>
      </div>
      <Slider {...settings} className="max-w-4xl mx-auto">
        {projets.map((projet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="p-4"
          >
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:shadow-2xl">
              <img
                src={projet.image}
                alt={`Aperçu de ${projet.nom}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{projet.nom}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Objectif :</strong> {projet.objectif}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Technologies :</strong> {projet.tech}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Apprentissages :</strong> {projet.apprentissage}
              </p>
              <div className="flex space-x-4">
                <a
                  href={projet.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline transition"
                  aria-label={`Voir le code GitHub de ${projet.nom}`}
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={projet.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline transition"
                  aria-label={`Voir la démo de ${projet.nom}`}
                >
                  <FaExternalLinkAlt /> Démo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}

export default Projets;