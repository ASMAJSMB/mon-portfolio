import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header({ onAccueilClick, darkMode, setDarkMode }) {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {headerVisible && (
          <motion.header
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            exit={{ y: -100, x: "-50%" }}
            transition={{ duration: 0.3 }}
            // Correction ici : On utilise left-1/2 et transform pour un centrage absolu
            className="fixed top-6 left-1/2 z-50 w-fit"
          >
            <nav className="relative px-10 py-4 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-black/80 border border-white/20 dark:border-gray-700">
              
              {/* Décoratifs modernes avec animations */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400/20 dark:bg-indigo-500/20 rounded-3xl blur-sm -z-10"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-8 w-24 h-24 bg-purple-500/20 dark:bg-pink-500/20 rounded-3xl blur-sm -z-10"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-0 left-1/3 w-16 h-16 bg-blue-400/20 dark:bg-green-500/20 rounded-2xl blur-sm -z-10"
              ></motion.div>

              {/* Fond du header - Ajout de -z-20 pour ne pas bloquer les clics */}
              <div className="absolute inset-0 bg-black/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl border border-white/10 dark:border-gray-600 -z-20"></div>

              <ul className="relative z-10 flex gap-8 text-white dark:text-gray-100 font-medium items-center whitespace-nowrap">
                <li
                  className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                  onClick={() => scrollToSection("accueil")}  // Correction : Suppression de onAccueilClick() pour éviter le replay inutile
                >
                  Accueil
                </li>
                <li
                  className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                  onClick={() => scrollToSection("apropos")}
                >
                  À propos
                </li>
                <li
                  className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                  onClick={() => scrollToSection("competences")}
                >
                  Compétences
                </li>
                <li
                  className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                  onClick={() => scrollToSection("projets")}
                >
                  Projets
                </li>
                <li
                  className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                  onClick={() => scrollToSection("experiences")}
                >
                  Expériences
                </li>
                <li
                  className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700 transition"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-400 dark:text-gray-300" />}
                  </motion.button>
                </li>
              </ul>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Bouton flottant à gauche pour rouvrir le header */}
      <AnimatePresence>
        {!headerVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setHeaderVisible(true)}
            className="fixed top-6 left-6 z-50 p-3 rounded-full shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-black/80 border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700 transition"
            aria-label="Ouvrir le menu"
          >
            <FaBars className="text-white dark:text-gray-100" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;