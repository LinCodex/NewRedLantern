import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const HERO_IMAGES = [
  "https://i.ibb.co/Q3GggpMg/free-photo-of-people-during-feet-massage.jpg",
  "https://i.ibb.co/TqvQVZyb/images.jpg",
  "https://i.ibb.co/39xLBHkQ/t2001x1212.jpg"
];

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[65vh] sm:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden group">
      {/* Background Carousel */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Foot Reflexology Ambience ${index + 1}`} 
            className="w-full h-full object-cover opacity-70"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-lantern-red w-8' : 'bg-white/40 w-2'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto w-full">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight shadow-sm animate-fade-in-up opacity-0 [animation-delay:300ms] text-white">
          {t('hero.title')}
        </h1>
        <p className="font-sans text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium animate-fade-in-up opacity-0 [animation-delay:600ms] px-2">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up opacity-0 [animation-delay:800ms]">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-lantern-red text-white font-bold rounded-full hover:bg-white hover:text-lantern-red transition-all duration-300 shadow-lg flex items-center justify-center gap-2 border-2 border-lantern-red"
          >
            <Phone size={18} />
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <a 
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-lantern-black transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <MapPin size={18} />
            {t('hero.navigate')}
          </a>
        </div>
        
        <div className="mt-6 sm:mt-8 text-xs sm:text-base text-white font-medium flex items-center justify-center gap-2 animate-fade-in-up opacity-0 [animation-delay:1000ms] bg-black/40 py-1.5 px-3 rounded-full inline-flex backdrop-blur-md border border-white/10">
            {/* Green dot for open status */}
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            {t('hero.openToday')}
        </div>
      </div>
    </section>
  );
};

export default Hero;