import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_HOURS, BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const InfoSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hours" className="py-12 sm:py-20 bg-lantern-magenta text-white relative overflow-hidden transition-colors duration-300">
        {/* Subtle texture overlay only */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          
          {/* Hours Column */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-white/10 rounded-full text-white">
                    <Clock size={24} className="sm:hidden" />
                    <Clock size={28} className="hidden sm:block" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">{t('info.hoursTitle')}</h2>
            </div>
            
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/10 shadow-lg">
              <ul className="space-y-3 sm:space-y-4">
                {BUSINESS_HOURS.map((item) => (
                  <li key={item.day} className="flex justify-between items-center border-b border-white/10 pb-2 sm:pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-white/90 text-base sm:text-lg">{t(`info.days.${item.day}`)}</span>
                    <span className="font-medium tracking-wide text-white text-sm sm:text-base">{item.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 text-center">
                <p className="text-base sm:text-lg font-medium italic text-white/90">{t('info.openSevenDays')}</p>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div className="flex flex-col justify-center h-full pt-4 sm:pt-0">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-white/10 rounded-full text-white">
                     <MapPin size={24} className="sm:hidden" />
                    <MapPin size={28} className="hidden sm:block" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">{t('info.visitUs')}</h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{BUSINESS_INFO.name}</h3>
                    <p className="text-lg sm:text-xl text-white/90">{BUSINESS_INFO.address}</p>
                    <p className="text-lg sm:text-xl text-white/90">{BUSINESS_INFO.cityStateZip}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                     <a 
                        href={BUSINESS_INFO.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-white text-lantern-magenta py-3 sm:py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                     >
                        <MapPin size={18} /> {t('info.getDirections')}
                     </a>
                     <a 
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="flex-1 border-2 border-white text-white py-3 sm:py-4 rounded-xl font-bold text-center hover:bg-white hover:text-lantern-magenta transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                     >
                        <Phone size={18} /> {t('info.callNow')}
                     </a>
                </div>
                
                {/* Google Maps Embed */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 h-64 sm:h-80 relative bg-gray-800">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=New+Red+Lantern+Foot+Reflexology,105+E+Main+St,Babylon,NY+11702&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="New Red Lantern Foot Reflexology Location"
                    ></iframe>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;