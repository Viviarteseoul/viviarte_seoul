import { Globe, Menu, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { LoginModal } from './LoginModal';
import { CartPopup } from './CartPopup';
import { useCart } from '../context/CartContext';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 border-b ${
        isHomePage 
          ? 'bg-transparent border-white/10 text-white' 
          : 'bg-white/80 backdrop-blur-md border-border'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/home">
              <div>
                <h1 className={`text-lg font-medium ${isHomePage ? 'text-white' : 'text-black'}`}>
                  VIVIARTE SEOUL
                </h1>
                <p className={`text-xs ${isHomePage ? 'text-white/70' : 'text-muted-foreground'}`}>
                  Global Beauty Platform
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/procedures" 
                className={`text-sm transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                시술 예약
              </Link>
              <Link 
                to="/education" 
                className={`text-sm transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                교육 프로그램
              </Link>
              <Link 
                to="/partnership" 
                className={`text-sm transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                파트너십
              </Link>
              <Link 
                to="/about" 
                className={`text-sm transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                소개
              </Link>
              <Link 
                to="/shop" 
                className={`text-sm transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                샵
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className={`flex items-center gap-2 text-sm transition-colors ${
                isHomePage 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}>
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">KR / JP</span>
              </button>
              <button 
                className={`hidden md:flex p-2 rounded-full transition-colors relative ${
                  isHomePage 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-gray-100'
                }`}
                aria-label="장바구니"
                onClick={() => setIsCartPopupOpen(true)}
              >
                <ShoppingCart className={`w-5 h-5 ${isHomePage ? 'text-white' : 'text-black'}`} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </button>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className={`hidden md:inline-flex px-6 py-2.5 rounded-full transition-colors ${
                  isHomePage 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                로그인
              </button>
              <button className={`md:hidden p-2 ${isHomePage ? 'text-white' : 'text-black'}`}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <CartPopup isOpen={isCartPopupOpen} onClose={() => setIsCartPopupOpen(false)} />
    </>
  );
}