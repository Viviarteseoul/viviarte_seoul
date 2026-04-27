import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export function Footer({ overlay = false }: { overlay?: boolean }) {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className={`py-12 border-t ${
      overlay
        ? 'bg-transparent border-white/10'
        : 'bg-white border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className={`text-lg font-medium ${overlay ? 'text-white' : 'text-black'}`}>VIVIARTE SEOUL</h3>
              <p className={`text-xs ${overlay ? 'text-white/60' : 'text-muted-foreground'}`}>{t.tagline}</p>
            </div>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  overlay
                    ? 'bg-white/10 hover:bg-white hover:text-black text-white'
                    : 'bg-secondary hover:bg-primary hover:text-white'
                }`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${overlay ? 'text-white' : 'text-foreground'}`}>{t.services}</h4>
            <ul className="space-y-3">
              {[t.procedures, t.education, t.partnership, t.pricing].map((item) => (
                <li key={item}><a href="#" className={`text-sm transition-colors ${
                  overlay
                    ? 'text-white/70 hover:text-white'
                    : 'text-muted-foreground hover:text-primary'
                }`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${overlay ? 'text-white' : 'text-foreground'}`}>{t.company}</h4>
            <ul className="space-y-3">
              {[t.aboutUs, t.careers, t.blog, t.contact].map((item) => (
                <li key={item}><a href="#" className={`text-sm transition-colors ${
                  overlay
                    ? 'text-white/70 hover:text-white'
                    : 'text-muted-foreground hover:text-primary'
                }`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${overlay ? 'text-white' : 'text-foreground'}`}>{t.support}</h4>
            <ul className="space-y-3">
              {[t.customerCenter, t.terms, t.privacy, t.faq].map((item) => (
                <li key={item}><a href="#" className={`text-sm transition-colors ${
                  overlay
                    ? 'text-white/70 hover:text-white'
                    : 'text-muted-foreground hover:text-primary'
                }`}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${overlay ? 'border-white/10' : 'border-border'}`}>
          <p className={`text-sm ${overlay ? 'text-white/60' : 'text-muted-foreground'}`}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
