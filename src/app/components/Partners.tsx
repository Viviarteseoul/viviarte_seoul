import { Building2, Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const partnerImages = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  'https://images.unsplash.com/photo-1676536162793-faa565d976d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYSUyMGludGVyaW9yJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc1MDMzMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80',
];

const partnerRatings = [4.9, 5.0, 4.8, 4.7];
const partnerReviews = [324, 456, 289, 178];

export function Partners() {
  const { lang } = useLanguage();
  const t = translations[lang].partners;

  return (
    <section id="partners" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-black mb-4">{t.label}</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.partnerItems.map((partner, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={partnerImages[index]}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-black mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{partner.location}</p>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-sm font-medium text-black">{partnerRatings[index]}</span>
                  <span className="text-sm text-gray-600">({partnerReviews[index]})</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {partner.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-xs text-black rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-black" />
                <span className="text-sm text-black">{t.benefitsLabel}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-black mb-4 whitespace-pre-line">
                {t.benefitsTitle}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{t.benefitsSubtitle}</p>

              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                {t.applyBtn}
              </button>
            </div>

            <div className="space-y-4">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
