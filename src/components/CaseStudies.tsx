import React from 'react';

const caseStudies = [
  {
    title: "Pizzeria Milano",
    industry: "Restauration",
    challenge: "Gestion inefficace des commandes téléphoniques causant des erreurs et des retards",
    solution: "Application de commande en ligne personnalisée avec tableau de bord en temps réel",
    results: [
      "Réduction de 65% du temps de prise de commande",
      "Augmentation de 40% du nombre de commandes",
      "Satisfaction client améliorée de 85%"
    ],
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const CaseStudies = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez comment nos solutions ont transformé leur activité
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="lg:col-span-1">
                <img
                  className="h-56 w-full object-cover lg:h-full"
                  src={study.image}
                  alt={study.title}
                />
              </div>
              <div className="px-8 py-12 lg:col-span-1">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-600">{study.industry}</p>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900">Le défi</h4>
                      <p className="mt-2 text-base text-gray-500">{study.challenge}</p>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900">Notre solution</h4>
                      <p className="mt-2 text-base text-gray-500">{study.solution}</p>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900">Résultats</h4>
                      <ul className="mt-2 space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-base text-gray-500 flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-600 mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}