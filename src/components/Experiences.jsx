import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experiences() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const experiences = [
    {
      titre: "Développeuse Web & Mobile – Stage",
      entreprise: "OneDom, Saint-Denis",
      periode: "Janvier – Mars 2025 (2 mois)",
      description: [
        "Développement de fonctionnalités web et mobile pour l'application interne.",
        "Participation aux réunions techniques et à la planification agile.",
        "Tests et correction des bugs pour améliorer l'expérience utilisateur.",
      ],
      color: "hover:shadow-indigo-400/50",
    },
    {
      titre: "Développeuse Web – Stage",
      entreprise: "Algérie Telecom, Algérie",
      periode: "Janvier – Mai 2024 (5 mois)",
      description: [
        "Conception et développement d'applications web internes.",
        "Maintenance et mise à jour des systèmes existants.",
        "Collaboration avec l'équipe technique pour améliorer les performances.",
      ],
      color: "hover:shadow-blue-400/50",
    },
    {
      titre: "Gestion – Alternance",
      entreprise: "Pokawa",
      periode: "Actuellement",
      description: [
        "Management de l'équipe et coordination des opérations quotidiennes.",
        "Optimisation des processus internes et du service client.",
        "Participation à la stratégie commerciale et marketing du restaurant.",
      ],
      color: "hover:shadow-green-400/50",
    },
    {
      titre: "Management – Restaurant familial",
      entreprise: "Algérie",
      periode: "Avant 2024",
      description: [
        "Gestion d'équipe : supervision du personnel et coordination des tâches.",
        "Organisation des opérations quotidiennes et gestion des stocks.",
        "Amélioration de l'expérience client et optimisation des ventes.",
      ],
      color: "hover:shadow-orange-400/50",
    },
  ];

  return (
    <section
      id="experiences"
      ref={ref}
      className="relative py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      aria-labelledby="experiences-title"
    >
      {/* Parallaxe subtil avec étoiles flottantes */}
      <motion.div
        style={{ y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-20 right-10 text-purple-400 text-4xl animate-bounce">✨</div>
      </motion.div>
      <div className="text-center mb-16">
        <h2
          id="experiences-title"
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent font-poppins"
        >
          Expériences
        </h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50, rotateY: 45 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className={`bg-white/80 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg ${exp.color} transition-shadow duration-300 border border-gray-200 dark:border-gray-700 transform hover:shadow-2xl`}
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{exp.titre}</h3>
            <p className="text-indigo-500 dark:text-indigo-300 mb-2">{exp.entreprise}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{exp.periode}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;