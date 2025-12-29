import React from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden bg-fcfaf7">
      {/* Decorative Floating Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lantern-red/5 rounded-full blur-[100px] animate-lantern-glow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lantern-gold/5 rounded-full blur-[120px] animate-lantern-glow [animation-delay:2s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-lantern-red font-serif text-5xl font-bold opacity-20">01</span>
                    <div className="h-px flex-grow bg-lantern-red/20"></div>
                </div>
                <h2 className="text-lantern-black font-serif text-5xl sm:text-6xl font-black mb-6 leading-tight">
                    {t('services.title')}
                </h2>
                <p className="text-gray-600 max-w-xl text-lg sm:text-xl leading-relaxed font-light italic">
                    {t('services.description')}
                </p>
            </div>
            <div className="lg:col-span-5 text-right hidden lg:block">
                 <div className="inline-block p-4 border-2 border-lantern-red/10 rounded-full animate-float">
                    <div className="w-20 h-20 bg-lantern-red rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold shadow-2xl">
                        福
                    </div>
                 </div>
            </div>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const camelId = service.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            
            // Logic for asymmetrical stagger
            const isTall = index === 1 || index === 2;

            return (
              <div 
                key={service.id} 
                className={`group relative bg-white border border-gray-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col overflow-hidden ${isTall ? 'sm:mt-8 lg:mt-12' : 'sm:mb-8 lg:mb-12'}`}
              >
                {/* Traditional Stamp Watermark */}
                <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 font-serif text-8xl font-black select-none pointer-events-none">
                    {index === 0 && '足'}
                    {index === 1 && '身'}
                    {index === 2 && '石'}
                    {index === 3 && '氣'}
                </div>

                <div className="mb-10 relative">
                  <div className="w-16 h-16 bg-fcfaf7 rounded-2xl flex items-center justify-center text-lantern-red group-hover:bg-lantern-red group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_10px_30px_rgba(214,0,0,0.3)]">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 group-hover:text-lantern-red transition-colors">
                    {t(`services.items.${camelId}.title`)}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base font-medium flex-grow">
                  {t(`services.items.${camelId}.desc`)}
                </p>

                {/* Decorative Line */}
                <div className="mt-8 w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-lantern-red transition-all duration-700"></div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
            <div className="inline-block relative">
                <div className="absolute -inset-4 bg-lantern-red/5 rounded-2xl blur-xl"></div>
                <p className="relative text-lantern-magenta font-black text-sm uppercase tracking-[0.4em] italic">
                    — {t('services.note')} —
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;