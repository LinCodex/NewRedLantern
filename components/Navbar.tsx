import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 pt-4`}>
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${
        scrolled 
          ? 'bg-lantern-black/80 backdrop-blur-xl py-3 px-6 shadow-2xl border border-white/10' 
          : 'bg-transparent py-5 px-6'
      }`}>
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={(e) => scrollToSection(e as any, 'home')}>
             <div className="w-10 h-10 bg-lantern-red rounded-full flex items-center justify-center text-white font-bold font-serif text-xl shadow-[0_0_20px_rgba(214,0,0,0.5)] group-hover:scale-110 transition-transform">
                RL
             </div>
             <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg sm:text-xl leading-none transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>New Red Lantern</span>
                <span className="text-[10px] text-lantern-gold tracking-[0.2em] uppercase font-bold">{language === 'en' ? 'Reflexology' : '正宗足浴'}</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'services', 'reviews', 'hours'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => scrollToSection(e, item)} 
                className="hover:text-lantern-red text-white transition-colors font-sans font-bold text-xs uppercase tracking-widest relative group"
              >
                {t(`nav.${item}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lantern-red transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="h-6 w-px bg-white/20"></div>

            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-[11px] font-black text-white hover:text-lantern-gold transition-colors"
            >
                <Globe size={14} className="text-lantern-red" />
                {language === 'en' ? '中文' : 'ENGLISH'}
            </button>

            <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-lantern-red text-white px-6 py-2.5 rounded-full font-black hover:bg-white hover:text-lantern-red transition-all flex items-center gap-2 shadow-[0_5px_15px_rgba(214,0,0,0.4)] text-xs uppercase tracking-tighter"
            >
                <Phone size={14} strokeWidth={3} /> {t('nav.call')}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
             <button 
                onClick={toggleLanguage}
                className="text-white font-black text-[10px] border border-white/30 px-2 py-1 rounded-full uppercase tracking-tighter"
            >
                {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-lantern-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-2 bg-lantern-black/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/10 animate-fade-in-up">
          <div className="space-y-4">
            {['home', 'services', 'reviews', 'hours'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => scrollToSection(e, item)} 
                className="block text-white text-xl font-serif font-bold border-b border-white/5 pb-3 active:text-lantern-red"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;