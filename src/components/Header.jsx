import React from "react";

function Header({ onAccueilClick }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* CONTENEUR RELATIVE */}
      <nav className="relative px-10 py-4 rounded-3xl overflow-hidden">

        {/* CARRÉS DÉCORATIFS */}
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400/30 rounded-3xl blur-sm" />
        <div className="absolute top-1/2 -right-8 w-24 h-24 bg-purple-500/30 rounded-3xl blur-sm" />
        <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-blue-400/30 rounded-2xl blur-sm" />

        {/* FOND DU HEADER */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md rounded-3xl" />

        {/* MENU (AU PREMIER PLAN) */}
        <ul className="relative z-10 flex gap-8 text-white font-medium">
          <li
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={() => {
              scrollToSection("accueil");
              onAccueilClick();
            }}
          >
            Accueil
          </li>

          <li
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={() => scrollToSection("apropos")}
          >
            Àpropos
          </li>

          <li
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={() => scrollToSection("competences")}
          >
            Compétences
          </li>

          <li
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={() => scrollToSection("projets")}
          >
            Projets
          </li>

          <li
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={() => scrollToSection("experiences")}
          >
            Expériences
          </li>

          <li
            className="cursor-pointer hover:text-yellow-400 transition"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

