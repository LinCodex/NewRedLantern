import React from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-lantern-black font-serif text-3xl sm:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-lantern-red mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Mobile: Horizontal Scroll. Desktop: Grid */}
        <div className="flex overflow-x-auto gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-8 snap-x snap-mandatory no-scrollbar">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const camelId = service.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            
            return (
              <div 
                key={service.id} 
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group min-w-[85vw] sm:min-w-0 snap-center flex flex-col"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-lantern-red group-hover:bg-lantern-red group-hover:text-white transition-colors duration-300">
                  <Icon size={24} className="sm:hidden" />
                  <Icon size={28} className="hidden sm:block" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{t(`services.items.${camelId}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base flex-grow">
                  {t(`services.items.${camelId}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Mobile Scroll Indicator Hint */}
        <div className="flex justify-center gap-1 sm:hidden mb-8">
           {SERVICES.map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
           ))}
        </div>
        
        <div className="mt-4 sm:mt-12 text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <p className="text-gray-700 italic font-medium text-sm sm:text-base">
                "{t('services.note')}"
            </p>
        </div>
      </div>
    </section>
  );
};

export default Services;