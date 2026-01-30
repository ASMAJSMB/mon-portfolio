import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Competences() {
  const [showCode, setShowCode] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const cards = [
    {
      titre: "💻 Développement",
      color: "bg-gradient-to-r from-indigo-500 to-purple-600",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-6 h-6 animate-pulse" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-6 h-6 animate-pulse" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-6 h-6 animate-pulse" /> },
        { name: "React / React native", icon: <FaReact className="text-cyan-400 w-6 h-6 animate-pulse" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 w-6 h-6 animate-pulse" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-6 h-6 animate-pulse" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-700 w-6 h-6 animate-pulse" /> },
        { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-600 w-6 h-6 animate-pulse" /> },
      ],
      codeSnippet: `const devSkills = ['HTML', 'CSS', 'JS', 'React'];\nconsole.log('Mastering:', devSkills.join(', '));`,
    },
    {
      titre: "📈Marketing & Management",
      color: "bg-gradient-to-r from-green-500 to-teal-600",
      items: [
        { name: "Bases du marketing digital", icon: "📊" },
        { name: "Analyse de cible", icon: "🎯" },
        { name: "Réseaux sociaux / contenu", icon: "🖋️" },
        { name: "Stratégie digitale", icon: "🗂️" },
        { name: "SEO / Référencement", icon: "🔍" },
      ],
      codeSnippet: `const marketing = { strategy: 'Digital', tools: ['SEO', 'Social'] };\nconsole.log('Optimizing:', marketing.strategy);`,
    },
    {
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
      codeSnippet: `const softSkills = ['Time Mgmt', 'Teamwork'];\nsoftSkills.forEach(skill => console.log('Excelling in:', skill));`,
    },
  ];

  return (
    <section
      id="competences"
      ref={ref}
      className="relative py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      aria-labelledby="competences-title"
    >
      {/* Étoiles flottantes pour touche créative */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-10 left-10 text-yellow-400 text-2xl"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 right-20 text-pink-400 text-3xl"
        >
          🌟
        </motion.div>
      </div>
      <div className="text-center mb-16">
        <h2
          id="competences-title"
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent font-poppins"
        >
          Compétences
        </h2>
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
        >
          {showCode ? "Masquer Code" : "Mode Développeur"}
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotateY: 45 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 15, z: 50 }}
            className={`${card.color} p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700 backdrop-blur-md transform transition-all duration-500 hover:shadow-2xl`}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{card.titre}</h3>
            <ul className="space-y-2 mb-4">
              {card.items.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 text-white font-medium hover:text-gray-200 transition"
                >
                  <span>{item.icon}</span> {item.name}
                </motion.li>
              ))}
            </ul>
            {showCode && (
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/50 text-green-400 p-2 rounded text-xs overflow-x-auto"
              >
                {card.codeSnippet}
              </motion.pre>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Competences;