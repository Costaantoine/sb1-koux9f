import React from 'react';
import { Clock, CheckCircle, Focus, ListTodo, PiggyBank, Accessibility } from 'lucide-react';

const solutions = [
  {
    title: "Gain de temps",
    description: "Automatisation des tâches répétitives pour vous concentrer sur l'essentiel.",
    icon: Clock
  },
  {
    title: "Zéro erreur",
    description: "Élimination des erreurs grâce à l'automatisation intelligente.",
    icon: CheckCircle
  },
  {
    title: "Concentration",
    description: "Travaillez sans interruption avec nos outils centralisés.",
    icon: Focus
  },
  {
    title: "Organisation",
    description: "Gestion simplifiée des priorités et des tâches quotidiennes.",
    icon: ListTodo
  },
  {
    title: "Économies",
    description: "Réduction significative des coûts opérationnels.",
    icon: PiggyBank
  },
  {
    title: "Accessibilité",
    description: "Solutions adaptées à tous, simples à utiliser au quotidien.",
    icon: Accessibility
  }
];

export const Solutions = () => {
  return (
    <div id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Simple, efficace, accessible
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-center">
                <span className="rounded-lg inline-flex p-3 bg-primary-50 text-primary-700 ring-4 ring-white">
                  <solution.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="ml-4 text-lg font-medium text-gray-900">{solution.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}