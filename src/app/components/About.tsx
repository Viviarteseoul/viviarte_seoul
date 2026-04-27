import { Award, BookOpen, Users } from 'lucide-react';
import founderImage from 'figma:asset/f4c763834c806c492f7d4f402aefd641cf4cc8fa.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const certIcons = [Award, Users, BookOpen];

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-black mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src={founderImage}
                alt="YUHA JE - Founder"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-medium text-black">{t.name}</h2>
              <p className="text-xl text-gray-700">{t.nameEn}</p>
              <p className="text-gray-600 leading-relaxed">{t.bio}</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-medium text-black mb-8 pb-4 border-b-2 border-black">
            {t.careerTitle}
          </h3>
          <div className="space-y-6">
            {t.careers.map((career, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">{career}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-medium text-black mb-8 pb-4 border-b-2 border-black">
            {t.certTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.certs.map((cert, index) => {
              const Icon = certIcons[index];
              return (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-black mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.sub}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-medium text-black mb-4 text-center">{t.philosophyTitle}</h3>
          <p className="text-gray-700 text-center leading-relaxed whitespace-pre-line">
            {t.philosophy}
          </p>
        </div>
      </div>
    </div>
  );
}
