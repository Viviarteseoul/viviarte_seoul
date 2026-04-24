import { Calendar, GraduationCap, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Calendar,
    title: '시술 예약 플랫폼',
    description: '일본 고객이 한국의 프리미엄 PMU 시술을 손쉽게 예약할 수 있습니다.',
    features: ['실시간 예약 시스템', '다국어 지원', '안전한 결제'],
    commission: '예약 수수료 20%'
  },
  {
    icon: GraduationCap,
    title: '온라인 교육',
    description: '전문 원장님의 노하우를 온라인으로 배우는 프리미엄 교육 프로그램',
    features: ['HD 영상 강의', '실습 피드백', '수료증 발급'],
    commission: '교육 콘텐츠 판매'
  },
  {
    icon: Users,
    title: '글로벌 파트너십',
    description: '한국 원장님의 일본 진출을 위한 종합 지원 서비스',
    features: ['현지 마케팅', '통역 서비스', '법률 자문'],
    commission: '월 구독 모델'
  },
  {
    icon: TrendingUp,
    title: '비즈니스 성장',
    description: '데이터 기반 인사이트로 사업 확장을 지원합니다',
    features: ['예약 분석', '고객 관리', '매출 리포트'],
    commission: '프리미엄 기능'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-black mb-4">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            플랫폼 핵심 기능
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            이미 운영 중인 서비스를 플랫폼으로 확장하여 더 많은 가치를 창출합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-black group-hover:text-white" />
              </div>

              <h3 className="text-xl font-medium text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-black">{service.commission}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}