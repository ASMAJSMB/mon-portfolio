import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import useCursor from "./components/useCursor";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [replay, setReplay] = useState(false);

  // Hook pour le curseur personnalisé
  useCursor();

  // Gestion du mode sombre global
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleAccueilClick = () => {
    setReplay((prev) => !prev); // Replay animation on home click
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 font-poppins relative">
      {/* Header avec tous les liens et bouton darkMode */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections principales */}
      <main>
        <Accueil replay={replay} />
        <APropos />
        <Competences />
        <Projets />
        <Experiences />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bouton pour revenir en haut */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;