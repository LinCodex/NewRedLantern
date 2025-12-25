import React from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lantern-black font-serif text-3xl sm:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-lantern-red mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Changed to lg:grid-cols-2 to accommodate larger text blocks for 4 main categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const camelId = service.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            
            return (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-lantern-red group-hover:bg-lantern-red group-hover:text-white transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{t(`services.items.${camelId}.title`)}</h3>
                {/* whitespace-pre-line added to preserve line breaks in descriptions */}
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {t(`services.items.${camelId}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <p className="text-gray-700 italic font-medium">
                "{t('services.note')}"
            </p>
        </div>
      </div>
    </section>
  );
};

export default Services;