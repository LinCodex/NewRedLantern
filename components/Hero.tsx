import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-[80vh] sm:h-[70vh] flex items-center justify-center bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop" 
          alt="Professional Foot Reflexology Massage" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Simple dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight shadow-sm animate-fade-in-up opacity-0 [animation-delay:300ms] text-white">
          {t('hero.title')}
        </h1>
        <p className="font-sans text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium animate-fade-in-up opacity-0 [animation-delay:600ms]">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 [animation-delay:800ms]">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-lantern-red text-white font-bold rounded-full hover:bg-white hover:text-lantern-red transition-all duration-300 shadow-lg flex items-center justify-center gap-2 border-2 border-lantern-red"
          >
            <Phone size={20} />
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <a 
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-lantern-black transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <MapPin size={20} />
            {t('hero.navigate')}
          </a>
        </div>
        
        <div className="mt-8 text-sm sm:text-base text-white font-medium flex items-center justify-center gap-2 animate-fade-in-up opacity-0 [animation-delay:1000ms] bg-black/40 py-2 px-4 rounded-full inline-flex backdrop-blur-md border border-white/10">
            {/* Green dot for open status */}
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            {t('hero.openToday')}
        </div>
      </div>
    </section>
  );
};

export default Hero;