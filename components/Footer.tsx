import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-lantern-black text-gray-400 py-12 md:pb-12 pb-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
            <h3 className="text-white font-serif text-2xl font-bold mb-2">{BUSINESS_INFO.name}</h3>
            <p className="text-sm text-gray-500">{t('footer.tagline')}</p>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} New Red Lantern Foot Reflexology. {t('footer.rights')}
            </p>
            <p className="text-xs text-gray-600">
                {t('footer.demo')}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;