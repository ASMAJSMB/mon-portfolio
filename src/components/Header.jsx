import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

function Header({ onAccueilClick, darkMode, setDarkMode }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="relative px-10 py-4 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-black/80 border border-white/20 dark:border-gray-700">
        {/* Décoratifs modernes avec animations */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400/20 dark:bg-indigo-500/20 rounded-3xl blur-sm"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 -right-8 w-24 h-24 bg-purple-500/20 dark:bg-pink-500/20 rounded-3xl blur-sm"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-0 left-1/3 w-16 h-16 bg-blue-400/20 dark:bg-green-500/20 rounded-2xl blur-sm"
        ></motion.div>
        <div className="absolute inset-0 bg-black/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl border border-white/10 dark:border-gray-600"></div>

        <ul className="relative z-10 flex gap-8 text-white dark:text-gray-100 font-medium items-center">
          <li
            className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
            onClick={() => {
              scrollToSection("accueil");
              onAccueilClick();
            }}
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
    </header>
  );
}

export default Header;