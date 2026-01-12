import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPhp, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

function Competences() {
  const cards = [
    {
      titre: "💻 Développement",
      color: "bg-gradient-to-r from-indigo-500 to-purple-600",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-5 h-5" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-5 h-5" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 w-5 h-5" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-5 h-5" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-700 w-5 h-5" /> },
        { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-600 w-5 h-5" /> },
      ],
    },
    {
  titre: "📈 Marketing & Business",
  color: "bg-gradient-to-r from-green-500 to-teal-600",
  items: [
    { name: "Bases du marketing digital", icon: "📊" },
    { name: "Analyse de cible", icon: "🎯" },
    { name: "Réseaux sociaux / contenu", icon: "🖋️" },
    { name: "Stratégie digitale", icon: "🗂️" },
    { name: "SEO / Référencement", icon: "🔍" },
  ],
}

  ,  {
      titre: "🤝 Soft Skills",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      items: [
        { name: "Gestion du temps", icon: "⏰" },
        { name: "Travail en équipe", icon: "🤝" },
        { name: "Communication", icon: "🗣️" },
        { name: "Autonomie", icon: "💡" },
        { name: "Adaptabilité", icon: "⚡" },
        { name: "Résolution de problèmes", icon: "🛠️" },
      ],
    },
  ];

  return (
    <section id="competences" className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">Compétences</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.color} p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{card.titre}</h3>
            <ul className="space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium hover:text-gray-200 transition">
                  <span>{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
