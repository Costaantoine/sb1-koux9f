import React from 'react';
import { Outlet, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n/config';
import { Header } from './Header';
import { Footer } from './Footer';
import { PromoHeader } from './PromoHeader';

export const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  // Redirect if language is not supported
  if (!lang || !SUPPORTED_LANGUAGES[lang as keyof typeof SUPPORTED_LANGUAGES]) {
    return <Navigate to={`/${i18n.language}`} replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <PromoHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};