import React from 'react';
import { Shield, Zap, Users, Clock, PiggyBank, Wrench } from 'lucide-react';

const advantages = [
  {
    title: "Solutions Abordables",
    description: "Des solutions à très faible coût adaptées à votre budget. Tarification flexible et transparente avec un excellent rapport qualité-prix.",
    icon: PiggyBank
  },
  {
    title: "Sécurité Maximale",
    description: "Vos données sont protégées par des protocoles de sécurité de pointe. Nous utilisons le chiffrement de bout en bout et respectons rigoureusement le RGPD.",
    icon: Shield
  },
  {
    title: "Performance Optimale",
    description: "Nos solutions sont optimisées pour une performance maximale, avec des temps de chargement rapides et une excellente réactivité, même en cas de forte charge.",
    icon: Zap
  },
  {
    title: "Support Dédié",
    description: "Une équipe de support technique dédiée disponible 24/7 pour vous accompagner et résoudre rapidement tout problème éventuel.",
    icon: Users
  },
  {
    title: "Maintenance Simplifiée",
    description: "Solutions faciles à maintenir et à mettre à jour, réduisant les coûts de maintenance à long terme.",
    icon: Wrench
  },
  {
    title: "Déploiement Rapide",
    description: "Mise en place rapide de nos solutions avec une période d'adaptation minimale. Formation complète incluse pour vos équipes.",
    icon: Clock
  }
];

export const Advantages = () => {
  return (
    <div id="avantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pourquoi choisir nos solutions ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des avantages concrets pour votre entreprise
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="rounded-lg p-3 bg-primary-50 text-primary-700">
                <advantage.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{advantage.title}</h3>
              <p className="mt-2 text-base text-gray-500">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}