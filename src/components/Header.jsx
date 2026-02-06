import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header({ darkMode, setDarkMode }) {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // état du menu mobile

  // Détecte si on est sur mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Afficher / cacher le header au scroll
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
    if (isMobile) setMenuOpen(false); // ferme le menu après clic sur mobile
  };

  const menuItems = ["accueil","apropos","competences","projets","experiences","contact"];

  return (
    <>
      <AnimatePresence>
        {headerVisible && (
          <motion.header
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            exit={{ y: -100, x: "-50%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 z-50 w-fit"
          >
            <nav
              className={`relative px-6 py-4 rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700 ${
                isMobile
                  ? "bg-white/20 dark:bg-black/60 shadow-md"
                  : "bg-white/10 dark:bg-black/80 shadow-2xl backdrop-blur-xl"
              }`}
            >
              {/* Décoratifs animés */}
              {!isMobile && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400/20 dark:bg-indigo-500/20 rounded-3xl blur-sm -z-10"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/2 -right-8 w-24 h-24 bg-purple-500/20 dark:bg-pink-500/20 rounded-3xl blur-sm -z-10"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-0 left-1/3 w-16 h-16 bg-blue-400/20 dark:bg-green-500/20 rounded-2xl blur-sm -z-10"
                  />
                </>
              )}

              {/* Fond */}
              <div
                className={`absolute inset-0 rounded-3xl border border-white/10 dark:border-gray-600 -z-20 ${
                  isMobile
                    ? "bg-black/50 dark:bg-gray-900/70"
                    : "bg-black/80 dark:bg-gray-900/90 backdrop-blur-lg"
                }`}
              ></div>

              {/* MENU PRINCIPAL */}
              <div className="relative z-10 flex items-center justify-between">
                {!isMobile && (
                  <ul className="flex gap-8 text-white dark:text-gray-100 font-medium items-center whitespace-nowrap">
                    {menuItems.map((id) => (
                      <li
                        key={id}
                        className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                        onClick={() => scrollToSection(id)}
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </li>
                    ))}
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
                )}

                {/* BOUTON BURGER MOBILE */}
                {isMobile && (
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700 transition text-white dark:text-gray-100"
                    aria-label="Ouvrir le menu"
                  >
                    <FaBars size={24} />
                  </button>
                )}
              </div>

              {/* MENU MOBILE VERTICAL */}
              {isMobile && menuOpen && (
                <ul className="mt-4 flex flex-col gap-4 text-white dark:text-gray-100 font-medium">
                  {menuItems.map((id) => (
                    <li
                      key={id}
                      className="cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-300 transition"
                      onClick={() => scrollToSection(id)}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </li>
                  ))}
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
              )}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Bouton flottant pour rouvrir le header */}
      <AnimatePresence>
        {!headerVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setHeaderVisible(true)}
            className={`fixed top-6 left-6 z-50 p-3 rounded-full border transition ${
              isMobile
                ? "shadow-md bg-white/20 dark:bg-black/60 dark:border-gray-700 hover:bg-white/30 dark:hover:bg-gray-700"
                : "shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-black/80 border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700"
            }`}
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