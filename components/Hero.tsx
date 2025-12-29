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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const index = parseInt(target.getAttribute('data-index') || '0');
    if (!target.src.includes('unsplash')) {
        target.src = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    }
  };

  return (
    <section id="home" className="relative h-screen h-[100dvh] flex items-center justify-center bg-lantern-black overflow-hidden">
      {/* Background Carousel */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img 
            src={img} 
            data-index={index}
            alt={`Spa Ambience ${index + 1}`} 
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              index === currentIndex ? 'scale-110' : 'scale-100'
            }`}
            onError={handleImageError}
          />
          {/* Dynamic Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-lantern-black via-transparent to-lantern-black/60"></div>
          <div className="absolute inset-0 bg-lantern-red/10 mix-blend-overlay"></div>
        </div>
      ))}

      {/* Floating Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lantern-red/30 rounded-full blur-[100px] animate-lantern-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lantern-gold/20 rounded-full blur-[120px] animate-lantern-glow [animation-delay:3s]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto w-full pt-10 sm:pt-20">
        <h1 className="font-serif text-5xl sm:text-8xl md:text-9xl font-black mb-6 sm:mb-8 leading-[1.1] sm:leading-[1] animate-fade-in-up opacity-0 [animation-delay:200ms] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {t('hero.title').split('\n').map((line, i) => (
            <React.Fragment key={i}>
              <span className={i === 0 ? 'text-white' : 'text-lantern-red'}>{line}</span>
              {i === 0 && <br className="hidden sm:block" />}
            </React.Fragment>
          ))}
        </h1>
        
        <p className="font-sans text-base sm:text-2xl text-gray-200 mb-8 sm:mb-14 max-w-2xl mx-auto font-light animate-fade-in-up opacity-0 [animation-delay:400ms] leading-relaxed drop-shadow-md">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up opacity-0 [animation-delay:600ms] mb-16 sm:mb-0">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="group w-full sm:w-64 px-10 py-4 sm:py-5 bg-lantern-red text-white font-black rounded-full hover:bg-white hover:text-lantern-red transition-all duration-500 shadow-[0_20px_40px_rgba(214,0,0,0.4)] flex items-center justify-center gap-3 border-2 border-lantern-red text-xs sm:text-sm uppercase tracking-widest overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-3">
                <Phone size={18} strokeWidth={3} />
                {t('nav.call')}
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a 
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-64 px-10 py-4 sm:py-5 border-2 border-white/40 text-white font-black rounded-full hover:bg-white hover:text-lantern-black transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-lg text-xs sm:text-sm uppercase tracking-widest shadow-2xl"
          >
            <MapPin size={18} strokeWidth={3} />
            {t('hero.navigate')}
          </a>
        </div>
      </div>

      {/* Slide Navigation (Vertical Style) */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 sm:gap-6">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-0.5 sm:w-1 transition-all duration-500 rounded-full ${
              index === currentIndex ? 'bg-lantern-red h-8 sm:h-12' : 'bg-white/20 h-3 sm:h-4 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;