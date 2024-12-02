import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../i18n/config';
import { LanguageMenu } from './LanguageMenu';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  const currentLang = i18n.language.split('-')[0] as SupportedLanguage;
  const currentLangInfo = SUPPORTED_LANGUAGES[currentLang];

  const handleLanguageChange = (lang: SupportedLanguage) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    
    i18n.changeLanguage(lang);
    navigate(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-md
          transition-colors duration-200
          ${isOpen ? 'bg-gray-100' : 'hover:bg-gray-50'}
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5 text-primary-600" />
        <span className="text-sm">{currentLangInfo.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 z-50">
          <LanguageMenu
            currentLanguage={currentLang}
            onLanguageSelect={handleLanguageChange}
          />
        </div>
      )}
    </div>
  );
};