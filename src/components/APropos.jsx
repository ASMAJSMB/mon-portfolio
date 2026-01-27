import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function APropos() {
  return (
    <section
      id="apropos"
      className="relative py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      aria-labelledby="apropos-title"
    >
      <div className="text-center mb-16">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-500/20 text-green-700 dark:text-green-300 text-sm font-semibold animate-pulse">
          Disponible en alternance
        </span>
        <h2 id="apropos-title" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent font-poppins">
          À propos de moi
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center space-y-4"
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          J'ai <strong>20 ans</strong> et je suis développeuse fullstack avec un <strong>baccalauréat en marketing et communication digitale</strong>. Mon double profil technique et marketing me permet de comprendre à la fois les besoins des utilisateurs et les objectifs stratégiques d'une entreprise.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Ambitieuse, rigoureuse et orientée résultats</strong>, je souhaite mettre mes compétences techniques et mon sens de l'organisation au service de vos projets. Je suis capable de gérer des tâches complexes, de collaborer efficacement avec les équipes et d'apporter un vrai sérieux et de la valeur ajoutée à votre entreprise.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Mon objectif est de contribuer activement à la création de solutions numériques innovantes, performantes et adaptées aux besoins de l'entreprise, tout en continuant à développer mes compétences techniques et ma polyvalence.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <motion.div
          whileHover={{ y: -10, rotateY: 15 }}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:shadow-2xl"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Développement Full-Stack</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">React, JavaScript, API, bases backend</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, rotateY: 15 }}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:shadow-2xl"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Web et mobile</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Applications modernes, réactives et performantes</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, rotateY: 15 }}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:shadow-2xl"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Marketing & Management</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Communication digitale, stratégie & gestion de projet</p>
        </motion.div>
      </div>
      <div className="flex justify-center mt-12">
        <motion.a
          href="/cv.pdf" // Ajustez le path vers votre CV
          download
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95, rotate: -3 }}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold rounded-3xl shadow-lg overflow-hidden"
          aria-label="Télécharger mon CV"
        >
          <span className="absolute inset-0 bg-white/20 transform -translate-x-full rotate-12 group-hover:translate-x-32 transition-transform duration-700"></span>
          <span className="relative flex items-center gap-3 z-10">
            <FaDownload className="animate-bounce" />
            Télécharger mon CV
          </span>
        </motion.a>
      </div>
      <div className="flex justify-center gap-16 mt-20 text-center">
        <motion.div whileHover={{ scale: 1.1 }}>
          <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">10+</p>
          <p className="text-gray-600 dark:text-gray-400">Projets réalisés</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">3</p>
          <p className="text-gray-600 dark:text-gray-400">Domaines de compétence</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">2</p>
          <p className="text-gray-600 dark:text-gray-400">Années d'expérience</p>
        </motion.div>
      </div>
    </section>
  );
}

export default APropos;