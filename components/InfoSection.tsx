import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_HOURS, BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const InfoSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hours" className="py-20 bg-lantern-red text-white relative overflow-hidden">
        {/* Subtle texture overlay only */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Hours Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white/10 rounded-full text-white">
                    <Clock size={28} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-white">{t('info.hoursTitle')}</h2>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
              <ul className="space-y-4">
                {BUSINESS_HOURS.map((item) => (
                  <li key={item.day} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-white/90 text-lg">{t(`info.days.${item.day}`)}</span>
                    <span className="font-medium tracking-wide text-white">{item.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-lg font-medium italic text-white/90">{t('info.openSevenDays')}</p>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white/10 rounded-full text-white">
                    <MapPin size={28} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-white">{t('info.visitUs')}</h2>
            </div>

            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{BUSINESS_INFO.name}</h3>
                    <p className="text-xl text-white/90">{BUSINESS_INFO.address}</p>
                    <p className="text-xl text-white/90">{BUSINESS_INFO.cityStateZip}</p>
                </div>

                <div className="flex gap-4">
                     <a 
                        href={BUSINESS_INFO.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-white text-lantern-red py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
                     >
                        <MapPin size={20} /> {t('info.getDirections')}
                     </a>
                     <a 
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="flex-1 border-2 border-white text-white py-4 rounded-xl font-bold text-center hover:bg-white hover:text-lantern-red transition-colors flex items-center justify-center gap-2"
                     >
                        <Phone size={20} /> {t('info.callNow')}
                     </a>
                </div>
                
                {/* Google Maps Embed */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 h-80 relative bg-gray-800">
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