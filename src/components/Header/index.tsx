import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const { t } = useTranslation();

  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo className={isScrolled ? 'text-gray-900' : 'text-white'} />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#solutions" isScrolled={isScrolled}>
              {t('header.solutions')}
            </NavLink>
            <NavLink href="#advantages" isScrolled={isScrolled}>
              {t('header.advantages')}
            </NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>
              {t('header.contact')}
            </NavLink>
            <LanguageSwitcher />
          </nav>

          <button 
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};