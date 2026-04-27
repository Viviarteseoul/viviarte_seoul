import { CheckCircle2, Building2, Globe2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const metricIcons = [CheckCircle2, Building2, Globe2, TrendingUp];

export function MedicalTrust() {
  const { lang } = useLanguage();
  const t = translations[lang].medicalTrust;

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black mb-4 font-medium">{t.label}</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-black transition-all hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <p className="text-3xl font-medium text-black mb-2">{metric.value}</p>
                <p className="font-medium text-black mb-2">{metric.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium text-black mb-6">
                {t.certTitle}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.certDesc}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {t.certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm font-medium text-black">{cert.name}</p>
                    <p className="text-xs text-black mt-1">{cert.code}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611075383964-4717534173f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMHN1cmdlcnklMjBkb2N0b3IlMjBtZWRpY2FsJTIwZ2xvdmVzfGVufDF8fHx8MTc3NTAwODA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Professional"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl grayscale"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 bg-gray-100 border-2 border-gray-200 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-medium text-black mb-4">
              {t.investTitle}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t.investDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                {t.downloadBtn}
              </button>
              <button className="px-8 py-4 bg-white text-black border-2 border-gray-200 rounded-full hover:border-black transition-all">
                {t.partnerBtn}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
