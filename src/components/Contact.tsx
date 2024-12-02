import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic to be implemented
  };

  return (
    <div id="contact" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm transition-colors"
                    placeholder={t('contact.form.placeholders.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm transition-colors"
                    placeholder={t('contact.form.placeholders.email')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm transition-colors"
                  placeholder={t('contact.form.placeholders.message')}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 hover:scale-105"
                >
                  {t('contact.form.submit')}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-600" />
                  <span className="ml-3 text-gray-500">{t('contact.info.email')}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-600" />
                  <span className="ml-3 text-gray-500">{t('contact.info.phone')}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary-600" />
                  <span className="ml-3 text-gray-500">{t('contact.info.location')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}