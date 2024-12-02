import React from 'react';
import { Clock, Package, MessageSquare, BarChart, PiggyBank, Accessibility } from 'lucide-react';
import { SolutionCard } from './SolutionCard';

const solutions = [
  {
    title: "Accessibilité Maximale",
    description: "Des solutions adaptées à tous les utilisateurs, quelles que soient leurs capacités.",
    icon: Accessibility,
    benefits: [
      "Interface intuitive",
      "Navigation simplifiée",
      "Assistance vocale",
      "Adaptable à tous"
    ]
  },
  {
    title: "Gestion du Temps",
    description: "Optimisez votre temps et augmentez votre productivité.",
    icon: Clock,
    benefits: [
      "Automatisation intelligente",
      "Planification simplifiée",
      "Suivi en temps réel",
      "Gain de productivité"
    ]
  },
  {
    title: "Gestion des Stocks",
    description: "Contrôle en temps réel de vos stocks et inventaires.",
    icon: Package,
    benefits: [
      "Alertes automatiques",
      "Prévisions précises",
      "Inventaire simplifié",
      "Zéro rupture"
    ]
  },
  {
    title: "Service Client",
    description: "Une relation client optimisée et personnalisée.",
    icon: MessageSquare,
    benefits: [
      "Réponses instantanées",
      "Suivi personnalisé",
      "Support 24/7",
      "Satisfaction client"
    ]
  },
  {
    title: "Analyses",
    description: "Visualisez et analysez vos données facilement.",
    icon: BarChart,
    benefits: [
      "Tableaux de bord",
      "Rapports simplifiés",
      "KPIs essentiels",
      "Décisions éclairées"
    ]
  },
  {
    title: "Coûts Optimisés",
    description: "Des solutions abordables adaptées à votre budget.",
    icon: PiggyBank,
    benefits: [
      "Premier mois gratuit",
      "Tarifs flexibles",
      "Sans engagement",
      "ROI rapide"
    ]
  }
];

export const Solutions = () => {
  return (
    <div id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Solutions adaptées à vos besoins
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Simples, accessibles et efficaces
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
}