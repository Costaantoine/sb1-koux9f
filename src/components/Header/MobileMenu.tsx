import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-x-0 top-[4rem] bg-white border-t border-gray-100 shadow-lg z-50 animate-slideDown">
      <div className="px-4 pt-2 pb-3 space-y-4">
        <NavLink href="#solutions" isScrolled={true} onClick={onClose}>
          {t('header.solutions')}
        </NavLink>
        <NavLink href="#advantages" isScrolled={true} onClick={onClose}>
          {t('header.advantages')}
        </NavLink>
        <NavLink href="#contact" isScrolled={true} onClick={onClose}>
          {t('header.contact')}
        </NavLink>
        <div className="pt-2 border-t border-gray-100">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};