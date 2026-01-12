import React from 'react';

function Projets() {
  const projets = [
    {
      nom: 'Portfolio Personnel',
      objectif: 'Créer un site vitrine pour présenter mes compétences et projets.',
      tech: 'React, CSS, HTML, JS',
      apprentissage: 'Maîtrise de React et du responsive design.',
      github: 'https://github.com/asmahaddad/portfolio',
      demo: 'https://asmahaddad.github.io/portfolio'
    },
    // Ajoute d'autres projets ici
  ];

  return (
    <section id="projets" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projets.map((projet, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md
                                     transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2 text-white">{projet.nom}</h3>
            <p className="text-white/80 mb-2"><strong>Objectif :</strong> {projet.objectif}</p>
            <p className="text-white/80 mb-2"><strong>Technologies :</strong> {projet.tech}</p>
            <p className="text-white/80 mb-4"><strong>Apprentissages :</strong> {projet.apprentissage}</p>
            <div className="flex space-x-4">
              <a href={projet.github} className="text-blue-400 hover:underline">GitHub</a>
              <a href={projet.demo} className="text-green-400 hover:underline">Démo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;
