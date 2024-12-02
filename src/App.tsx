import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from './i18n/config';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial HTML dir attribute
    document.documentElement.dir = SUPPORTED_LANGUAGES[i18n.language]?.dir || 'ltr';
  }, [i18n.language]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;