import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  const benefits = [
    t('hero.benefits.custom'),
    t('hero.benefits.free'),
    t('hero.benefits.support')
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('hero.title')}</span>
              <span className="block text-primary-600 mt-2">{t('hero.subtitle')}</span>
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:text-lg md:text-xl max-w-3xl">
              {t('hero.description')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 hover:scale-105"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>
            <div className="mt-8 space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-500">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-lg">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl transform -rotate-6"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl transform rotate-3 shadow-lg"></div>
                    <div className="relative w-full h-full bg-white rounded-2xl shadow-xl p-8">
                      <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}