import React from 'react';
import { Clock, Database, Package, BarChart, Zap } from 'lucide-react';

const features = [
  {
    name: "Optimisation du temps",
    description: "Gestion intelligente du temps et des ressources pour maximiser la productivité.",
    icon: Clock,
    benefits: [
      "Automatisation des tâches répétitives",
      "Planification intelligente",
      "Suivi du temps en temps réel",
      "Réduction des temps morts"
    ]
  },
  {
    name: "Gestion des stocks",
    description: "Système complet de gestion des stocks en temps réel pour une meilleure efficacité.",
    icon: Package,
    benefits: [
      "Suivi en temps réel",
      "Alertes de réapprovisionnement",
      "Prévisions des besoins",
      "Inventaire automatisé"
    ]
  },
  {
    name: "Centralisation des données",
    description: "Plateforme unique regroupant toutes vos informations importantes.",
    icon: Database,
    benefits: [
      "Accès unifié aux données",
      "Synchronisation automatique",
      "Sauvegarde sécurisée",
      "Interface intuitive"
    ]
  },
  {
    name: "Analyse et reporting",
    description: "Tableaux de bord interactifs et rapports détaillés pour une prise de décision éclairée.",
    icon: BarChart,
    benefits: [
      "Visualisations dynamiques",
      "Rapports automatisés",
      "Alertes personnalisables",
      "Analyses prédictives"
    ]
  },
  {
    name: "Performance optimale",
    description: "Applications rapides et réactives, optimisées pour une utilisation intensive.",
    icon: Zap,
    benefits: [
      "Temps de réponse minimal",
      "Haute disponibilité",
      "Adaptation automatique",
      "Support technique réactif"
    ]
  }
];

export const Features = () => {
  return (
    <div className="bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Des solutions innovantes pour chaque besoin
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez comment nos solutions peuvent transformer votre entreprise
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-500">
                          <span className="h-1.5 w-1.5 mt-2 rounded-full bg-primary-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}