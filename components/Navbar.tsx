import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar (h-20 is 5rem = 80px)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-lantern-black text-white shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <div className="w-10 h-10 bg-lantern-red rounded-full flex items-center justify-center text-white font-bold font-serif text-xl shadow-md">
                RL
             </div>
             <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl leading-none text-white">New Red Lantern</span>
                <span className="text-xs text-gray-400 tracking-widest uppercase font-bold">{language === 'en' ? 'Foot Reflexology' : '足浴'}</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-lantern-red transition-colors font-sans font-medium text-sm tracking-wide">{t('nav.home')}</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-lantern-red transition-colors font-sans font-medium text-sm tracking-wide">{t('nav.services')}</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-lantern-red transition-colors font-sans font-medium text-sm tracking-wide">{t('nav.reviews')}</a>
            <a href="#hours" onClick={(e) => scrollToSection(e, 'hours')} className="hover:text-lantern-red transition-colors font-sans font-medium text-sm tracking-wide">{t('nav.hours')}</a>
            
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-bold text-gray-300 hover:text-white transition-colors border border-gray-600 hover:border-white px-3 py-1 rounded-full"
            >
                <Globe size={14} />
                {language === 'en' ? '中文' : 'EN'}
            </button>

            <div className="flex gap-2">
                <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="bg-lantern-red text-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-lantern-red transition-all flex items-center gap-2 shadow-sm text-sm"
                >
                    <Phone size={16} /> {t('nav.call')}
                </a>
                <a 
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/30 text-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-lantern-black transition-all flex items-center gap-2 text-sm"
                >
                    <MapPin size={16} /> {t('nav.map')}
                </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="text-gray-300 font-bold text-sm border border-gray-600 px-2 py-1 rounded"
            >
                {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-lantern-red focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-lantern-black border-t border-gray-800 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')} 
                className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-100 hover:text-white text-lg font-medium border border-transparent hover:border-white/10 transition-all"
            >
                {t('nav.home')}
            </a>
            <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')} 
                className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-100 hover:text-white text-lg font-medium border border-transparent hover:border-white/10 transition-all"
            >
                {t('nav.services')}
            </a>
            <a 
                href="#reviews" 
                onClick={(e) => scrollToSection(e, 'reviews')} 
                className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-100 hover:text-white text-lg font-medium border border-transparent hover:border-white/10 transition-all"
            >
                {t('nav.reviews')}
            </a>
            <a 
                href="#hours" 
                onClick={(e) => scrollToSection(e, 'hours')} 
                className="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-100 hover:text-white text-lg font-medium border border-transparent hover:border-white/10 transition-all"
            >
                {t('nav.hours')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;