import React, { useEffect, useState } from 'react';
import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const StickyFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show almost immediately on scroll for high utility
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-28 opacity-0 scale-90'
    }`}>
      
      {/* Liquid Glass Container */}
      <div className="relative group">
        
        {/* Animated Background Glow */}
        <div className="absolute -inset-4 bg-lantern-red/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Outer Border/Ring */}
        <div className="relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-b from-white/30 via-white/5 to-white/20 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.2)]">
          
          {/* Main Content Area */}
          <div className="bg-lantern-black/70 backdrop-blur-3xl p-2 rounded-[2.5rem] flex items-center gap-2 overflow-hidden relative">
            
            {/* Moving Shimmer Ray */}
            <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none"></div>

            {/* Call Button - The "Primary" Action */}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex-[1.2] flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-gradient-to-br from-lantern-red to-lantern-magenta text-white active:scale-95 transition-all duration-300 shadow-[0_8px_16px_rgba(214,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] group/btn overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full">
                  <Phone size={14} fill="currentColor" strokeWidth={1} className="animate-pulse" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('sticky.call')}</span>
              </div>
            </a>
            
            {/* Navigate Button - The "Secondary" Action */}
            <a 
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 active:scale-95 transition-all duration-300 group/nav shadow-inner"
            >
              <Navigation size={14} className="text-lantern-gold group-hover/nav:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('sticky.navigate')}</span>
            </a>
          </div>
        </div>

        {/* Liquid Bottom Reflection */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-white/10 blur-md rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default StickyFooter;