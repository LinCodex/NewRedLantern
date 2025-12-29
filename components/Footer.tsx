import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Phone, Navigation } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-lantern-black text-gray-400 py-16 md:pb-16 pb-32 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Mobile Mock Dock for Consistency */}
        <div className="md:hidden mb-12 flex justify-center">
           <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-3xl max-w-xs w-full">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4">{t('info.visitUs')}</p>
              <div className="flex gap-2">
                 <a href={`tel:${BUSINESS_INFO.phone}`} className="flex-1 bg-lantern-red/20 text-lantern-red py-3 rounded-2xl flex items-center justify-center gap-2">
                    <Phone size={14} />
                 </a>
                 <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noreferrer" className="flex-1 bg-white/5 text-white py-3 rounded-2xl flex items-center justify-center gap-2">
                    <Navigation size={14} />
                 </a>
              </div>
           </div>
        </div>

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