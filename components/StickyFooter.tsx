import React, { useEffect, useState } from 'react';
import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const StickyFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit (e.g., past the hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex h-16 divide-x divide-gray-100">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex flex-col items-center justify-center text-white bg-lantern-red active:bg-red-700"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wide">{t('sticky.call')}</span>
        </a>
        
        <a 
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center text-gray-600 bg-white active:bg-gray-50"
        >
          <Navigation size={20} className="mb-1 text-gray-500" />
          <span className="text-[10px] font-bold uppercase tracking-wide">{t('sticky.navigate')}</span>
        </a>
      </div>
    </div>
  );
};

export default StickyFooter;