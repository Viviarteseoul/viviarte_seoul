import { Calendar, GraduationCap, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const icons = [Calendar, GraduationCap, Users, TrendingUp];

export function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-black group-hover:text-white" />
                </div>

                <h3 className="text-xl font-medium text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-black">{service.commission}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
