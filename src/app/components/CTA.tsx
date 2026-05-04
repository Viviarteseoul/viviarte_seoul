import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export function CTA() {
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black p-8 sm:p-12 lg:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-medium text-white mb-3 sm:mb-6 break-keep">
              {t.title}
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-6 sm:mb-10 break-keep leading-relaxed">
              {t.desc}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <button className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-white text-black rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2 group font-medium text-sm sm:text-base">
                <span>{t.startBtn}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 font-medium text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t.contactBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
