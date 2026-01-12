import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Accueil from "./components/Accueil.jsx";
import Bubbles from "./components/Bubbles";
import APropos from "./components/APropos.jsx";
import Competences from "./components/Competences.jsx";
import Projets from "./components/Projets.jsx";
import Experiences from "./components/Experiences.jsx";
import Contact from "./components/Contact.jsx";
  
function App() {
  // State pour déclencher l'animation de la page Accueil
  const [replayAccueil, setReplayAccueil] = useState(0);

  // Détecter le scroll vers le haut pour rejouer l'animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setReplayAccueil((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-smooth bg-gray-900 text-white">
      <Header onAccueilClick={() => setReplayAccueil((prev) => prev + 1)} />
     <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
  <Bubbles /> {/* z-0, derrière le contenu */}
  <div className="relative z-10">
    <Accueil key={replayAccueil} replay={replayAccueil} />
    <APropos />
    <Projets />
    <Competences/>
    <Experiences/>
    <Contact />
  </div>
</div>
</div>
     
  );
}

export default App;
