import { DollarSign, Percent, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const revenueStreams = [
  {
    icon: Percent,
    title: '예약 수수료',
    percentage: '20%',
    description: '모든 예약 건당 20% 수수료',
    details: [
      '평균 시술가: ₩800,000',
      '수수료: ₩160,000',
      '월 100건 시 ₩16,000,000'
    ],
    gradient: 'from-amber-50 to-amber-100/50'
  },
  {
    icon: DollarSign,
    title: '교육 판매',
    percentage: '₩500K~₩2M',
    description: '온라인 교육 과정 판매',
    details: [
      '기초 과정: ₩500,000',
      '고급 과정: ₩2,000,000',
      '월 30명 등록 시 ₩22,500,000'
    ],
    gradient: 'from-rose-50 to-rose-100/50'
  },
  {
    icon: CreditCard,
    title: '파트너 구독',
    percentage: '₩100K/월',
    description: '파트너 병원 구독 모델',
    details: [
      '베이직: ₩100,000/월',
      '프리미엄: ₩300,000/월',
      '50개 파트너 시 ₩10,000,000'
    ],
    gradient: 'from-blue-50 to-blue-100/50'
  }
];

export function Revenue() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-black mb-4">Revenue Model</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            수익 구조
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다각화된 수익 모델로 안정적인 성장을 실현합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden p-8 bg-white rounded-2xl border border-gray-200 hover:scale-105 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <stream.icon className="w-7 h-7 text-black" />
                </div>

                <h3 className="text-xl font-medium text-black mb-2">
                  {stream.title}
                </h3>
                <p className="text-3xl font-medium text-black mb-4">
                  {stream.percentage}
                </p>
                <p className="text-gray-600 mb-6 text-sm">
                  {stream.description}
                </p>

                <div className="space-y-2">
                  {stream.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-medium text-black mb-2">
                예상 월 매출 (6개월 후)
              </h3>
              <p className="text-gray-600">
                보수적 추정치 기준
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-4xl font-medium text-black mb-1">
                ₩48,500,000
              </p>
              <p className="text-sm text-gray-600">
                월 순매출 기준
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}