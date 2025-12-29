import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-lantern-black text-gray-400 py-16 md:pb-16 pb-32 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-10">
            <div className="w-12 h-12 bg-lantern-red rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-[0_0_20px_rgba(214,0,0,0.5)] mx-auto mb-6">
                RL
            </div>
            <h3 className="text-white font-serif text-2xl font-bold mb-3">{BUSINESS_INFO.name}</h3>
            <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">{t('footer.tagline')}</p>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}.</p>
                <span className="hidden md:block opacity-20">|</span>
                <p>{t('footer.rights')}</p>
            </div>
            <p className="text-[10px] text-gray-700 font-medium uppercase tracking-widest">
                {t('footer.demo')}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;