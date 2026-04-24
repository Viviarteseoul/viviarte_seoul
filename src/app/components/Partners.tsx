import { Building2, MapPin, Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const partners = [
  {
    name: '강남 뷰티 클리닉',
    location: '서울 강남구',
    rating: 4.9,
    reviews: 324,
    specialties: ['아이라인', '눈썹', '립'],
    verified: true,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80'
  },
  {
    name: '유하 PMU 아카데미',
    location: '서울 청담동',
    rating: 5.0,
    reviews: 456,
    specialties: ['교육', '시술', '컨설팅'],
    verified: true,
    image: 'https://images.unsplash.com/photo-1676536162793-faa565d976d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYSUyMGludGVyaW9yJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc1MDMzMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: '신사동 아트메이크업',
    location: '서울 신사동',
    rating: 4.8,
    reviews: 289,
    specialties: ['눈썹', '헤어라인', '스킨'],
    verified: true,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
  },
  {
    name: '도쿄 뷰티 라운지',
    location: '도쿄 시부야',
    rating: 4.7,
    reviews: 178,
    specialties: ['립', '아이라인', '눈썹'],
    verified: true,
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80'
  }
];

const benefits = [
  '예약 관리 시스템 무료 제공',
  '다국어 고객 응대 지원',
  '마케팅 및 프로모션 지원',
  '결제 및 정산 자동화',
  '고객 리뷰 관리 도구',
  '비즈니스 인사이트 제공'
];

export function Partners() {
  return (
    <section id="partners" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-black mb-4">Our Partners</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            파트너 네트워크
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            한국과 일본을 연결하는 프리미엄 파트너들과 함께합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {partner.verified && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-black mb-2">
                  {partner.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{partner.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-sm font-medium text-black">{partner.rating}</span>
                  <span className="text-sm text-gray-600">({partner.reviews})</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {partner.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-xs text-black rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-3xl border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-black" />
                <span className="text-sm text-black">파트너 혜택</span>
              </div>

              <h3 className="text-3xl font-medium text-black mb-4">
                파트너로 참여하고<br />
                비즈니스를 성장시키세요
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                VIVIARTE SEOUL과 함께 글로벌 시장으로 진출하세요
              </p>

              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                파트너 신청하기
              </button>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}