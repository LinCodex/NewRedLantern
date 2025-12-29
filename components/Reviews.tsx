import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Defining an interface for the review object to improve type safety
interface Review {
  name: string;
  key: string;
}

// Using React.FC for ReviewCard to fix the 'key' prop TypeScript error
const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    const { t } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);
    const text = t(`reviews.items.${review.key}`);
    const maxLength = 180; // Shorter truncation for mobile
    const shouldTruncate = text.length > maxLength;

    const displayedText = isExpanded || !shouldTruncate ? text : text.slice(0, maxLength) + '...';

    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full min-w-[85vw] sm:min-w-0 snap-center">
            <Quote className="absolute top-6 right-6 text-red-500/10" size={40} />
            
            <div className="flex gap-1 mb-5 text-lantern-red">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
            ))}
            </div>
            
            <div className="flex-grow">
                <p className="text-gray-700 leading-relaxed mb-4 italic relative z-10 text-sm sm:text-base">
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
            
            <div className="flex items-center gap-3 mt-auto pt-5 border-t border-gray-100">
                <div className="w-12 h-12 bg-lantern-black text-white rounded-full flex items-center justify-center font-serif font-bold text-xl flex-shrink-0 shadow-inner">
                    {review.name.charAt(0)}
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">{review.name}</h4>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-green-50 text-green-700 border border-green-100 uppercase tracking-tighter w-fit">
                        <CheckCircle size={10} className="text-green-500" />
                        Verified Customer
                    </span>
                </div>
            </div>
        </div>
    );
}

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementTop = rect.top + scrollPosition;
      
      // Calculate how far the section is from the viewport
      const offset = (scrollPosition - elementTop) * 0.15;
      setOffsetY(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviewsList: Review[] = [
    { name: "Amanda Warren", key: "amanda" },
    { name: "Paul", key: "paul" },
    { name: "Christine Simpson", key: "christine" },
    { name: "Tony Guggino", key: "tony" },
    { name: "Chrissy Vee", key: "chrissy" }
  ];

  return (
    <section 
        id="reviews" 
        ref={sectionRef}
        className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Parallax Background Element */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] select-none"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <div className="absolute top-10 -left-20 text-[20rem] font-serif font-bold leading-none rotate-12">
           蓮
        </div>
        <div className="absolute bottom-20 -right-20 text-[25rem] font-serif font-bold leading-none -rotate-12">
           舒
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-lantern-black font-serif text-3xl sm:text-4xl font-bold mb-4">{t('reviews.title')}</h2>
          <div className="w-24 h-1 bg-lantern-red mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed uppercase tracking-[0.3em] font-black">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Mobile: Horizontal Scroll. Desktop: Grid */}
        <div className="flex overflow-x-auto gap-5 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 snap-x snap-mandatory no-scrollbar">
          {reviewsList.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        
        {/* Mobile Scroll Hint */}
        <div className="flex justify-center items-center gap-2 sm:hidden mt-4">
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Swipe for more reviews</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;