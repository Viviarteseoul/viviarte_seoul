import { ShoppingCart, Check, Star, Truck, Shield, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import heroImage from 'figma:asset/7604df1a4758cc92da4db5bb86b429c7241e9c3f.png';

const products = [
  {
    id: 1,
    name: 'Radiance Serum',
    nameKr: '래디언스 세럼',
    category: 'Serum',
    price: '¥18,000',
    priceValue: 18000,
    image: 'https://images.unsplash.com/photo-1767256046031-743d33937c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MTAyMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 247,
    description: 'PMU 시술 후 피부 재생 집중 케어'
  },
  {
    id: 2,
    name: 'Recovery Cream',
    nameKr: '리커버리 크림',
    category: 'Cream',
    price: '¥15,000',
    priceValue: 15000,
    image: 'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 189,
    description: '시술 부위 진정 및 보습 크림'
  },
  {
    id: 3,
    name: 'Gentle Cleanser',
    nameKr: '젠틀 클렌저',
    category: 'Cleanser',
    price: '¥12,000',
    priceValue: 12000,
    image: 'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 312,
    description: '저자극 세안제, PMU 시술 후 사용 가능'
  },
  {
    id: 4,
    name: 'Complete Care Set',
    nameKr: '컴플리트 케어 세트',
    category: 'Set',
    price: '¥39,000',
    priceValue: 39000,
    originalPrice: '¥45,000',
    image: 'https://images.unsplash.com/photo-1773527142299-59863d536e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVhdXR5JTIwcHJvZHVjdHMlMjBkaXNwbGF5fGVufDF8fHx8MTc3NTEwMjMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviews: 156,
    description: '시술 전후 완벽 케어 풀 세트',
    badge: 'BEST'
  },
  {
    id: 5,
    name: 'Healing Balm',
    nameKr: '힐링 밤',
    category: 'Treatment',
    price: '¥14,500',
    priceValue: 14500,
    image: 'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 203,
    description: '집중 보습 및 상처 치유 밤'
  },
  {
    id: 6,
    name: 'Protection Sunscreen',
    nameKr: '프로텍션 선크림',
    category: 'Suncare',
    price: '¥13,000',
    priceValue: 13000,
    image: 'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 278,
    description: 'SPF 50+ 고밀착 자외선 차단제'
  }
];

const features = [
  {
    icon: Shield,
    title: '정품 보장',
    description: '100% 정품 인증 제품'
  },
  {
    icon: Truck,
    title: '무료 배송',
    description: '일본 전역 무료 배송'
  },
  {
    icon: Package,
    title: '안전 포장',
    description: '깨짐 방지 특수 포장'
  }
];

export function ShopPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
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
              <p className="text-black mb-4 font-medium">Professional PMU Aftercare</p>
              <h1 className="text-4xl lg:text-5xl font-medium text-black mb-6">
                VIVIARTE SEOUL<br />
                스킨케어 컬렉션
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                PMU 전문가들이 개발한 시술 전후 전문 케어 제품<br />
                병원급 품질로 안전하고 효과적인 피부 관리
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                  전체 제품 보기
                </button>
                <button className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all">
                  베스트 셀러
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-medium text-black mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-medium text-black mb-2">전체 제품</h2>
              <p className="text-gray-600">전문가가 추천하는 PMU 애프터케어 라인</p>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>인기순</option>
              <option>가격 낮은순</option>
              <option>가격 높은순</option>
              <option>최신순</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  {product.badge && (
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
                        image: product.image
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
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
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
                      구매하기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-black rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-medium mb-4">
            시술 예약 시 무료 케어 키트 증정
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            VIVIARTE SEOUL에서 PMU 시술을 예약하시면<br />
            전문 애프터케어 스타터 키트(¥8,000 상당)를 무료로 드립니다
          </p>
          <div className="flex items-center justify-center gap-4">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-sm">정품 인증</span>
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-sm">피부과 테스트 완료</span>
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-sm">무료 배송</span>
          </div>
          <button className="mt-8 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all hover:scale-105" onClick={() => navigate('/reservation')}>
            시술 예약하고 키트 받기 →
          </button>
        </div>
      </div>
    </div>
  );
}