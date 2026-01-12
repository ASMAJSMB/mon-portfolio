import React from 'react';

function Experiences() {
  return (
    <section id="experiences" className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">Expériences</h2>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Stage OneDom */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-indigo-400/50 transition">
          <h3 className="text-xl font-semibold mb-2">Développeuse Web & Mobile – Stage</h3>
          <p className="text-indigo-300 mb-2">OneDom, Saint-Denis</p>
          <p className="text-gray-300 mb-4 text-sm">Janvier – Mars 2025 (2 mois)</p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>Développement de fonctionnalités web et mobile pour l’application interne.</li>
            <li>Participation aux réunions techniques et à la planification agile.</li>
            <li>Tests et correction des bugs pour améliorer l’expérience utilisateur.</li>
          </ul>
        </div>

        {/* Stage Algérie Telecom */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-blue-400/50 transition">
          <h3 className="text-xl font-semibold mb-2">Développeuse Web – Stage</h3>
          <p className="text-blue-300 mb-2">Algérie Telecom, Algérie</p>
          <p className="text-gray-300 mb-4 text-sm">Janvier – Mai 2024 (5 mois)</p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>Conception et développement d’applications web internes.</li>
            <li>Maintenance et mise à jour des systèmes existants.</li>
            <li>Collaboration avec l’équipe technique pour améliorer les performances.</li>
          </ul>
        </div>

        {/* Alternance Pokawa */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-green-400/50 transition">
          <h3 className="text-xl font-semibold mb-2">Management – Alternance</h3>
          <p className="text-green-300 mb-2">Pokawa</p>
          <p className="text-gray-300 mb-4 text-sm">Actuellement</p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>Management de l’équipe et coordination des opérations quotidiennes.</li>
            <li>Optimisation des processus internes et amélioration du service client.</li>
            <li>Participation à la stratégie commerciale et marketing du restaurant.</li>
          </ul>
        </div>

        {/* Restaurant familial */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
          <h3 className="text-xl font-semibold mb-2">Management – Restaurant familial</h3>
          <p className="text-yellow-300 mb-2">Algérie</p>
          <p className="text-gray-300 mb-4 text-sm">Avant 2024</p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>Gestion d'équipe : supervision du personnel et coordination des tâches.</li>
            <li>Organisation quotidienne : planification des opérations et gestion des stocks.</li>
            <li>Relation clients : accueil et résolution de problèmes pour assurer la satisfaction.</li>
            <li>Prise de décisions : adaptation aux imprévus et optimisation des processus.</li>
            <li>Sens des responsabilités : gestion autonome de l’établissement.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experiences;
