import React, { useState, useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Accueil({ replay }) {
  const [playAnimation, setPlayAnimation] = useState(false);

  // Déclenche l'animation au montage et à chaque changement de replay
  useEffect(() => {
    setPlayAnimation(false);
    const timer = setTimeout(() => setPlayAnimation(true), 50);
    return () => clearTimeout(timer);
  }, [replay]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="min-h-screen pt-40 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-6"
    >




      <div className="max-w-6xl w-full bg-black/40 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 text-white flex flex-col md:flex-row items-center gap-8">

        {/* Texte à gauche */}
        <div className="md:w-1/2">
        

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={playAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 2.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Asma <span className="text-yellow-300">Haddad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={playAnimation ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.2, duration: 1.5 }}
            className="text-2xl mb-4"
          >
             Développeuse web & mobile junior À la recherche d’une  <span className="text-indigo-300"><strong>alternance</strong></span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={playAnimation ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.8, duration: 1.5 }}
            className="text-white/80 max-w-2xl leading-relaxed mb-10"
          >
          développeuse fullstack avec une expérience en management et gestion de projets, titulaire d’un bachelor en marketing et communication digitale." </motion.p>

          {/* Boutons */}
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projets")}
              className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold transition-all duration-300 hover:bg-yellow-300"
            >
              Voir mes projets <FaArrowRight className="inline ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Me contacter
            </motion.button>

           

          </div>

          {/* Réseaux */}
          <div className="flex gap-6 mt-12 text-xl text-gray-300 justify-start md:justify-start">
            <motion.a whileHover={{ scale: 1.2, color: "#ffffff" }} href="#" className="transition-colors duration-300">
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#ffffff" }} href="#" className="transition-colors duration-300">
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            src="image/photo2.jpg"
            alt="Photo d'accueil"
            initial={{ opacity: 0, x: 60 }}
            animate={playAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ delay: 1.8, duration: 2 }}
            className="w-64 md:w-80 h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Accueil;
