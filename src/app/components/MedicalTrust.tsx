import { CheckCircle2, Building2, Globe2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const trustMetrics = [
  {
    icon: CheckCircle2,
    value: '100%',
    label: '의료진 자격 검증',
    description: '모든 파트너는 의료 자격증과 경력을 검증합니다'
  },
  {
    icon: Building2,
    value: '50+',
    label: '제휴 의료기관',
    description: '한국 및 일본의 인증된 클리닉 네트워크'
  },
  {
    icon: Globe2,
    value: '5,000+',
    label: '글로벌 시술 건수',
    description: '일본 고객 만족도 98% 이상'
  },
  {
    icon: TrendingUp,
    value: '300%',
    label: '연간 성장률',
    description: '2024-2025 예약 증가율'
  }
];

const certifications = [
  { name: '의료기기 인증', code: 'ISO 13485' },
  { name: '개인정보보호', code: 'ISO 27001' },
  { name: '품질경영', code: 'ISO 9001' },
  { name: '일본 후생성', code: '인증 완료' }
];

export function MedicalTrust() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black mb-4 font-medium">신뢰할 수 있는 K-뷰티 플랫폼</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            글로벌 기업과 투자자가 선택하는 이유
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            엄격한 의료 기준과 검증된 전문가 네트워크로 안전하고 신뢰할 수 있는 서비스를 제공합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-black transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-black" />
              </div>
              <p className="text-3xl font-medium text-black mb-2">{metric.value}</p>
              <p className="font-medium text-black mb-2">{metric.label}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium text-black mb-6">
                국제 인증 및 규제 준수
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                한국과 일본의 의료법규를 준수하며, 국제 표준 인증을 획득하여
                대기업 파트너십과 글로벌 투자에 적합한 플랫폼입니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <p className="text-sm font-medium text-black">{cert.name}</p>
                    <p className="text-xs text-black mt-1">{cert.code}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611075383964-4717534173f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMHN1cmdlcnklMjBkb2N0b3IlMjBtZWRpY2FsJTIwZ2xvdmVzfGVufDF8fHx8MTc3NTAwODA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Professional"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl grayscale"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 bg-gray-100 border-2 border-gray-200 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-medium text-black mb-4">
              투자자를 위한 명확한 성장 전략
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              검증된 비즈니스 모델과 빠른 시장 확장 가능성.
              한국-일본 의료 관광 시장 (연간 50억 달러 규모)의 선도 플랫폼으로 자리매김하고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                투자 제안서 다운로드
              </button>
              <button className="px-8 py-4 bg-white text-black border-2 border-gray-200 rounded-full hover:border-black transition-all">
                파트너십 문의
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}