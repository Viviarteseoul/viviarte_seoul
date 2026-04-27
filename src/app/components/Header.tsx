import { Globe, Menu, ShoppingCart, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { LoginModal } from './LoginModal';
import { CartPopup } from './CartPopup';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { lang, setLang } = useLanguage();
  const t = translations[lang].header;

  const navLinks = [
    { to: '/procedures', label: t.procedures },
    { to: '/education', label: t.education },
    { to: '/partnership', label: t.partnership },
    { to: '/about', label: t.about },
    { to: '/shop', label: t.shop },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleLang = () => setLang(lang === 'ko' ? 'ja' : 'ko');

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 border-b ${
        isHomePage && !isMobileMenuOpen
          ? 'bg-transparent border-white/10 text-white'
          : 'bg-white/95 backdrop-blur-md border-border'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/home">
              <div>
                <h1 className={`text-base sm:text-lg font-medium ${isHomePage && !isMobileMenuOpen ? 'text-white' : 'text-black'}`}>
                  VIVIARTE SEOUL
                </h1>
                <p className={`text-xs ${isHomePage && !isMobileMenuOpen ? 'text-white/70' : 'text-muted-foreground'}`}>
                  Global Beauty Platform
                </p>
              </div>
            </Link>

            {/* 데스크탑 네비게이션 */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm transition-colors ${
                    isHomePage
                      ? 'text-white/90 hover:text-white'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* 언어 전환 버튼 */}
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-2 py-1 rounded-full border ${
                  isHomePage && !isMobileMenuOpen
                    ? 'text-white/80 border-white/30 hover:bg-white/10'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                }`}
                aria-label="언어 전환"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? 'KR' : 'JP'}</span>
                <span className="opacity-40">|</span>
                <span className="opacity-60">{lang === 'ko' ? 'JP' : 'KR'}</span>
              </button>

              <button
                className={`hidden md:flex p-2 rounded-full transition-colors relative ${
                  isHomePage
                    ? 'hover:bg-white/10'
                    : 'hover:bg-gray-100'
                }`}
                aria-label={t.cart}
                onClick={() => setIsCartPopupOpen(true)}
              >
                <ShoppingCart className={`w-5 h-5 ${isHomePage ? 'text-white' : 'text-black'}`} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`hidden md:inline-flex px-6 py-2.5 rounded-full transition-colors ${
                  isHomePage
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {t.login}
              </button>
              {/* 모바일 햄버거 버튼 */}
              <button
                className={`md:hidden p-2 ${isMobileMenuOpen ? 'text-black' : isHomePage ? 'text-white' : 'text-black'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-4">
                <button
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
                  onClick={() => { setIsCartPopupOpen(true); setIsMobileMenuOpen(false); }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t.cart}
                  {totalItems > 0 && (
                    <span className="ml-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => { setIsLoginModalOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {t.login}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <CartPopup isOpen={isCartPopupOpen} onClose={() => setIsCartPopupOpen(false)} />
    </>
  );
}
