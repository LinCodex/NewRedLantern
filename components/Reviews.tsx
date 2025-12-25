import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ReviewCard = ({ review }: { review: any }) => {
    const { t } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);
    const text = t(`reviews.items.${review.key}`);
    const maxLength = 200; // Character limit before truncation
    const shouldTruncate = text.length > maxLength;

    const displayedText = isExpanded || !shouldTruncate ? text : text.slice(0, maxLength) + '...';

    return (
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow flex flex-col h-full">
            <Quote className="absolute top-6 right-6 text-gray-200" size={40} />
            
            <div className="flex gap-1 mb-4 text-lantern-red">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
            ))}
            </div>
            
            <div className="flex-grow">
                <p className="text-gray-700 leading-relaxed mb-4 italic relative z-10">
                    "{displayedText}"
                </p>
                {shouldTruncate && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-lantern-red font-bold text-sm flex items-center gap-1 mb-6 hover:underline focus:outline-none"
                    >
                        {isExpanded ? (
                            <><ChevronUp size={16} /> {t('reviews.readLess')}</>
                        ) : (
                            <><ChevronDown size={16} /> {t('reviews.readMore')}</>
                        )}
                    </button>
                )}
            </div>
            
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
            <div className="w-10 h-10 bg-lantern-black text-white rounded-full flex items-center justify-center font-serif font-bold text-lg flex-shrink-0">
                {review.name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                    Verified Customer
                </span>
            </div>
            </div>
        </div>
    );
}

const Reviews: React.FC = () => {
  const { t } = useLanguage();

  const reviewsList = [
    { name: "Amanda Warren", key: "amanda" },
    { name: "Paul", key: "paul" },
    { name: "Christine Simpson", key: "christine" },
    { name: "Tony Guggino", key: "tony" },
    { name: "Chrissy Vee", key: "chrissy" }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lantern-black font-serif text-3xl sm:text-4xl font-bold mb-4">{t('reviews.title')}</h2>
          <div className="w-24 h-1 bg-lantern-red mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed uppercase tracking-widest font-bold text-sm">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;