import React, { useState, useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function Accueil({ replay }) {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Développeuse web & mobile junior";

  useEffect(() => {
    setPlayAnimation(false);
    const timer = setTimeout(() => setPlayAnimation(true), 50);
    return () => clearTimeout(timer);
  }, [replay]);

  useEffect(() => {
    setTypedText(""); // Reset on replay
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [replay]); // Dependency added

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-40 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 flex items-center justify-center px-6 overflow-hidden"
      aria-labelledby="accueil-title"
    >
      <ParticlesBackground />
      <div className="relative z-10 max-w-6xl w-full bg-white/10 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700 text-white flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <motion.h1
            id="accueil-title"
            initial={{ opacity: 0, y: 60 }}
            animate={playAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 2.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent font-poppins"
          >
            Asma Haddad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={playAnimation ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.2, duration: 1.5 }}
            className="text-2xl mb-4 text-indigo-200 font-semibold"
          >
            {typedText} <span className="text-yellow-300">À la recherche d'une alternance</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={playAnimation ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.8, duration: 1.5 }}
            className="text-white/80 max-w-2xl leading-relaxed mb-10"
          >
            Développeuse fullstack avec une expérience en management et gestion de projets, titulaire d'un baccalauréat en marketing et communication numérique.
          </motion.p>
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projets")}
              className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold transition-all duration-300 hover:bg-yellow-300 shadow-lg"
              aria-label="Voir mes projets"
            >
              Voir mes projets <FaArrowRight className="inline ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-black shadow-lg"
              aria-label="Me contacter"
            >
              Me contacter
            </motion.button>
          </div>
          <div className="flex gap-6 mt-12 text-xl text-gray-300 justify-start md:justify-start">
            <motion.a
              whileHover={{ scale: 1.2, color: "#ffffff", rotate: 360 }}
              href="https://github.com/ASMAJSMB"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#ffffff", rotate: 360 }}
              href="https://www.linkedin.com/in/asma-haddad-a869b5334/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            src="/image/photo2.jpg" // Updated to absolute path (assuming public folder)
            alt="Photo d'Asma Haddad, développeuse web"
            initial={{ opacity: 0, x: 60 }}
            animate={playAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ delay: 1.8, duration: 2 }}
            className="w-64 md:w-80 h-auto rounded-xl shadow-2xl border-4 border-white/20 hover:shadow-indigo-500/50 transition-shadow duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Accueil;