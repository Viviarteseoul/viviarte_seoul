import { DollarSign, Percent, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const streamIcons = [Percent, DollarSign, CreditCard];

export function Revenue() {
  const { lang } = useLanguage();
  const t = translations[lang].revenue;

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.streams.map((stream, index) => {
            const Icon = streamIcons[index];
            return (
              <motion.div
                key={index}
                className="relative overflow-hidden p-8 bg-white rounded-2xl border border-gray-200 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2">{stream.title}</h3>
                  <p className="text-3xl font-medium text-black mb-4">{stream.percentage}</p>
                  <p className="text-gray-600 mb-6 text-sm">{stream.description}</p>
                  <div className="space-y-2">
                    {stream.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-medium text-black mb-2">{t.projTitle}</h3>
              <p className="text-gray-600">{t.projSubtitle}</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-4xl font-medium text-black mb-1">{t.projAmount}</p>
              <p className="text-sm text-gray-600">{t.projLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
