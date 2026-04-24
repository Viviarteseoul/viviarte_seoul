import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart, ChevronLeft, Check, Truck, Shield, Package, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Radiance Serum',
    nameKr: '래디언스 세럼',
    category: 'Serum',
    price: '¥18,000',
    priceValue: 18000,
    image: 'https://images.unsplash.com/photo-1767256046031-743d33937c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MTAyMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1767256046031-743d33937c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MTAyMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 4.9,
    reviews: 247,
    description: 'PMU 시술 후 피부 재생 집중 케어',
    fullDescription: '전문 PMU 시술 후 피부 재생을 위해 특별히 개발된 고농축 세럼입니다. 피부 장벽 강화 성분과 진정 성분이 함유되어 시술 부위의 빠른 회복을 돕습니다.',
    ingredients: '정제수, 히알루론산, 나이아신아마이드, 판테놀, 센텔라 아시아티카 추출물',
    howToUse: '세안 후 적당량을 덜어 시술 부위에 부드럽게 도포합니다. 아침 저녁 2회 사용을 권장합니다.',
    capacity: '30ml',
    madeIn: '한국',
  },
  {
    id: 2,
    name: 'Recovery Cream',
    nameKr: '리커버리 크림',
    category: 'Cream',
    price: '¥15,000',
    priceValue: 15000,
    image: 'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767256046031-743d33937c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MTAyMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 4.8,
    reviews: 189,
    description: '시술 부위 진정 및 보습 크림',
    fullDescription: '시술 후 민감해진 피부를 진정시키고 깊은 보습을 제공하는 리치한 텍스처의 크림입니다.',
    ingredients: '정제수, 시어버터, 세라마이드, 알란토인, 병풀 추출물',
    howToUse: '세럼 사용 후 적당량을 덜어 시술 부위에 충분히 도포합니다.',
    capacity: '50ml',
    madeIn: '한국',
  },
  {
    id: 3,
    name: 'Gentle Cleanser',
    nameKr: '젠틀 클렌저',
    category: 'Cleanser',
    price: '¥12,000',
    priceValue: 12000,
    image: 'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 4.7,
    reviews: 312,
    description: '저자극 세안제, PMU 시술 후 사용 가능',
    fullDescription: 'pH 균형을 맞춘 약산성 클렌저로 시술 부위를 자극하지 않으면서 부드럽게 세안할 수 있습니다.',
    ingredients: '정제수, 코코일 글루타민산, 베타인, 글리세린',
    howToUse: '미온수로 얼굴을 적신 후 적당량을 거품 내어 부드럽게 마사지 후 헹궈냅니다.',
    capacity: '150ml',
    madeIn: '한국',
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
    images: [
      'https://images.unsplash.com/photo-1773527142299-59863d536e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVhdXR5JTIwcHJvZHVjdHMlMjBkaXNwbGF5fGVufDF8fHx8MTc3NTEwMjMwNHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 5.0,
    reviews: 156,
    description: '시술 전후 완벽 케어 풀 세트',
    fullDescription: '클렌저, 세럼, 크림이 모두 포함된 완벽한 PMU 애프터케어 세트입니다. 시술 후 4주간 사용 가능합니다.',
    ingredients: '각 제품별 성분표 참조',
    howToUse: '클렌저 → 세럼 → 크림 순서로 사용합니다.',
    capacity: '세트 (클렌저 150ml + 세럼 30ml + 크림 50ml)',
    madeIn: '한국',
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
    images: [
      'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 4.9,
    reviews: 203,
    description: '집중 보습 및 상처 치유 밤',
    fullDescription: '시술 직후 사용 가능한 밤 타입 제품으로 상처 치유를 돕고 피부 장벽을 보호합니다.',
    ingredients: '바셀린, 센텔라 아시아티카, 비타민 E, 판테놀',
    howToUse: '시술 부위에 얇게 펴 발라 보호막을 형성합니다.',
    capacity: '20g',
    madeIn: '한국',
  },
  {
    id: 6,
    name: 'Protection Sunscreen',
    nameKr: '프로텍션 선크림',
    category: 'Suncare',
    price: '¥13,000',
    priceValue: 13000,
    image: 'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwbWluaW1hbHxlbnwxfHx8fDE3NzUxMDIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 4.8,
    reviews: 278,
    description: 'SPF 50+ 고밀착 자외선 차단제',
    fullDescription: 'PMU 시술 부위의 색소 변화를 방지하기 위한 강력한 자외선 차단 기능을 제공합니다.',
    ingredients: '징크옥사이드, 티타늄디옥사이드, 센텔라 추출물',
    howToUse: '외출 30분 전 충분한 양을 도포하고, 2-3시간마다 재도포합니다.',
    capacity: '50ml',
    madeIn: '한국',
  }
];

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-black mb-4">제품을 찾을 수 없습니다</h2>
          <button 
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
          >
            쇼핑 계속하기
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log(`장바구니에 추가: ${product.name}, 수량: ${quantity}`);
    // 실제 장바구니 로직
  };

  const handleBuyNow = () => {
    console.log(`바로 구매: ${product.name}, 수량: ${quantity}`);
    // 실제 구매 로직
  };

  const totalPrice = product.priceValue * quantity;

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>쇼핑 계속하기</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <motion.div 
              className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {product.badge && (
                <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
                  {product.badge}
                </div>
              )}
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-black' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img 
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 uppercase">{product.category}</span>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Heart 
                  className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
              </button>
            </div>

            <h1 className="text-3xl font-medium text-black mb-2">{product.name}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{product.nameKr}</h2>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-black text-black' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} 리뷰)</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through mr-3">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-3xl font-medium text-black">{product.price}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-black mb-3">수량</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 text-lg font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-lg text-gray-600">
                  합계: <span className="font-medium text-black">¥{totalPrice.toLocaleString()}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="flex-1 px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-lg font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                장바구니
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-lg font-medium"
              >
                바로 구매
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Shield className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs text-gray-600">정품 보장</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Truck className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs text-gray-600">무료 배송</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Package className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs text-gray-600">안전 포장</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-black mb-4">제품 정보</h3>
              
              <div className="flex py-3 border-b border-gray-100">
                <span className="w-32 text-gray-600">용량</span>
                <span className="text-black">{product.capacity}</span>
              </div>
              
              <div className="flex py-3 border-b border-gray-100">
                <span className="w-32 text-gray-600">원산지</span>
                <span className="text-black">{product.madeIn}</span>
              </div>
              
              <div className="py-3 border-b border-gray-100">
                <span className="block w-32 text-gray-600 mb-2">주요 성분</span>
                <span className="text-black text-sm leading-relaxed">{product.ingredients}</span>
              </div>
              
              <div className="py-3">
                <span className="block w-32 text-gray-600 mb-2">사용 방법</span>
                <span className="text-black text-sm leading-relaxed">{product.howToUse}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-medium text-black mb-8">함께 구매하면 좋은 제품</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div 
                  key={relatedProduct.id}
                  onClick={() => navigate(`/shop/${relatedProduct.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-medium text-black mb-1 group-hover:underline">{relatedProduct.nameKr}</h4>
                  <p className="text-sm text-gray-600 mb-2">{relatedProduct.description}</p>
                  <p className="text-lg font-medium text-black">{relatedProduct.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}