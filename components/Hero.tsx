import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const HERO_IMAGES = [
  "https://i.postimg.cc/jdxmFMNy/Gemini-Generated-Image-byj62lbyj62lbyj6.png",
  "https://i.postimg.cc/pTK4g7sb/Gemini-Generated-Image-jea9sjjea9sjjea9.png",
  "https://i.postimg.cc/sDjqNTSW/Gemini-Generated-Image-petglppetglppetg.png"
];

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop"
];

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const index = parseInt(target.getAttribute('data-index') || '0');
    
    // If the provided image fails, switch to the reliable Unsplash fallback
    if (!target.src.includes('unsplash')) {
        target.src = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    }
  };

  return (
    <section id="home" className="relative h-[75vh] flex items-center justify-center bg-lantern-black overflow-hidden">
      {/* Background Carousel */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img 
            src={img} 
            data-index={index}
            alt={`Spa Ambience ${index + 1}`} 
            className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-linear ${
              index === currentIndex ? 'scale-110' : 'scale-100'
            }`}
            onError={handleImageError}
          />
          {/* Advanced Overlay: Dark gradient at top/bottom, clear in middle */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-lantern-red w-10' : 'bg-white/30 w-3 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto w-full">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:400ms] tracking-tight drop-shadow-2xl">
          {t('hero.title').split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i === 0 && <br className="hidden sm:block" />}
            </React.Fragment>
          ))}
        </h1>
        
        <p className="font-sans text-lg sm:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto font-light animate-fade-in-up opacity-0 [animation-delay:600ms] leading-relaxed drop-shadow-lg">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up opacity-0 [animation-delay:800ms]">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-12 py-5 bg-lantern-red text-white font-bold rounded-full hover:bg-white hover:text-lantern-red hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(214,0,0,0.3)] flex items-center justify-center gap-3 border-2 border-lantern-red text-lg uppercase tracking-wider"
          >
            <Phone size={22} />
            {t('nav.call')}
          </a>
          <a 
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-12 py-5 border-2 border-white/60 text-white font-bold rounded-full hover:bg-white hover:text-lantern-black hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md text-lg uppercase tracking-wider"
          >
            <MapPin size={22} />
            {t('hero.navigate')}
          </a>
        </div>
        
        <div className="mt-12 text-sm sm:text-base text-white/90 font-medium flex items-center justify-center gap-3 animate-fade-in-up opacity-0 [animation-delay:1000ms]">
            <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            {t('hero.openToday')}
        </div>
      </div>
    </section>
  );
};

export default Hero;