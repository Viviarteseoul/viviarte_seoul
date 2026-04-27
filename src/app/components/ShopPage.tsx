import { ShoppingCart, Check, Star, Shield, Truck, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import heroImage from 'figma:asset/7604df1a4758cc92da4db5bb86b429c7241e9c3f.png';
import shopProduct1 from '../../imports/shop-product-1.png';
import shopProduct2 from '../../imports/shop-product-2.png';
import shopProduct3 from '../../imports/shop-product-3.png';
import shopProduct4 from '../../imports/shop-product-4.png';
import shopProduct5 from '../../imports/shop-product-5.png';
import shopProduct6 from '../../imports/shop-product-6.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const featureIcons = [Shield, Truck, Package];

const products = [
  { id: 1, name: 'Radiance Serum', nameKr: '래디언스 세럼', price: '¥18,000', priceValue: 18000, rating: 4.9, reviews: 247, category: 'Serum', image: shopProduct1 },
  { id: 2, name: 'Recovery Cream', nameKr: '리커버리 크림', price: '¥15,000', priceValue: 15000, rating: 4.8, reviews: 189, category: 'Cream', image: shopProduct2 },
  { id: 3, name: 'Gentle Cleanser', nameKr: '젠틀 클렌저', price: '¥12,000', priceValue: 12000, rating: 4.7, reviews: 312, category: 'Cleanser', image: shopProduct3 },
  { id: 4, name: 'Complete Care Set', nameKr: '컴플리트 케어 세트', price: '¥39,000', priceValue: 39000, originalPrice: '¥45,000', rating: 5.0, reviews: 156, category: 'Set', badge: 'BEST', image: shopProduct4 },
  { id: 5, name: 'Healing Balm', nameKr: '힐링 밤', price: '¥14,500', priceValue: 14500, rating: 4.9, reviews: 203, category: 'Treatment', image: shopProduct5 },
  { id: 6, name: 'Viviarte Mask', nameKr: '비비아르떼 마스크', price: '¥13,000', priceValue: 13000, rating: 4.8, reviews: 278, category: 'Mask', badge: 'COMING SOON', image: shopProduct6 },
];

export function ShopPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { lang } = useLanguage();
  const t = translations[lang].shop;

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="relative h-[500px] overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Viviarte Seoul Skincare"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-black mb-4 font-medium">{t.heroLabel}</p>
              <h1 className="text-4xl lg:text-5xl font-medium text-black mb-6 whitespace-pre-line">
                {t.heroTitle}
              </h1>
              <p className="text-lg text-gray-600 mb-8 whitespace-pre-line">
                {t.heroDesc}
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                  {t.allProductsBtn}
                </button>
                <button className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all">
                  {t.bestSellerBtn}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-black mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-medium text-black mb-2">{t.productsTitle}</h2>
              <p className="text-gray-600">{t.productsSubtitle}</p>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              {t.sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  {'badge' in product && product.badge && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        nameKr: product.nameKr,
                        price: product.price,
                        priceValue: product.priceValue,
                        image: product.image,
                      });
                    }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 uppercase">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-black text-black" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-medium text-black mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{product.nameKr}</p>
                  <p className="text-sm text-gray-500 mb-4">{t.productDescriptions[index]}</p>

                  <div className="flex items-center justify-between">
                    <div>
                      {'originalPrice' in product && product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-medium text-black">{product.price}</span>
                    </div>
                    <button
                      onClick={() => navigate(`/shop/${product.id}`)}
                      className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                    >
                      {t.buyBtn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-black rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-medium mb-4">{t.ctaTitle}</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto whitespace-pre-line">
            {t.ctaDesc}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {t.ctaChecks.map((check) => (
              <div key={check} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-sm">{check}</span>
              </div>
            ))}
          </div>
          <button
            className="mt-8 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all hover:scale-105"
            onClick={() => navigate('/reservation')}
          >
            {t.ctaBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
