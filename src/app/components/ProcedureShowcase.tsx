import { Play, BookOpen, Award, Users } from 'lucide-react';

const procedures = [
  {
    title: '눈썹 반영구 (Eyebrow PMU)',
    image: 'https://images.unsplash.com/photo-1735151225868-3f40c5b51396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8cGVybWFuZW50JTIwbWFrZXVwJTIwZXllYnJvdyUyMHByb2NlZHVyZSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MDA4MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '자연스러운 눈썹 라인을 위한 전문 시술',
    duration: '2-3시간',
    price: '₩200,000~'
  },
  {
    title: '입술 반영구 (Lip PMU)',
    image: 'https://images.unsplash.com/photo-1677091508080-d6ee28356318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxwZXJtYW5lbnQlMjBtYWtldXAlMjBleWVicm93JTIwcHJvY2VkdXJlJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUwMDgwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '생기있는 입술 컬러와 윤곽 개선',
    duration: '2시간',
    price: '₩300,000~'
  },
  {
    title: '아이라인 (Eyeliner)',
    image: 'https://images.unsplash.com/photo-1746708810803-722593e53772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwZXJtYW5lbnQlMjBtYWtldXAlMjBleWVicm93JTIwcHJvY2VkdXJlJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUwMDgwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '또렷한 눈매를 위한 정밀 시술',
    duration: '1.5시간',
    price: '₩300,000'
  },
  {
    title: '헤어라인 (Hairline)',
    image: 'https://images.unsplash.com/photo-1642630111276-821681d57568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxwZXJtYW5lbnQlMjBtYWtldXAlMjBleWVicm93JTIwcHJvY2VkdXJlJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUwMDgwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '자연스러운 헤어라인 교정',
    duration: '3-4시간',
    price: '₩450,000'
  }
];

const features = [
  {
    icon: BookOpen,
    title: '시술 전 상담',
    description: '온라인 화상 상담으로 시술 계획 수립'
  },
  {
    icon: Award,
    title: '전문가 매칭',
    description: '경력 10년+ 인증 전문가와 연결'
  },
  {
    icon: Users,
    title: '통역 서비스',
    description: '한국어-일본어 전문 통역 지원'
  }
];

export function ProcedureShowcase() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary mb-4 font-medium">Professional PMU Procedures</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
            K-뷰티 전문가의 반영구 시술
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            병원급 위생 시스템과 인증된 전문가가 제공하는 안전한 PMU 시술
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={procedure.image}
                  alt={procedure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-foreground mb-2">{procedure.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{procedure.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{procedure.duration}</span>
                  <span className="font-medium text-primary">{procedure.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              일본 고객 전용 예약 시스템
            </h3>
            <p className="text-muted-foreground mb-8">
              실시간 예약 확인, 일본어 지원, 공항 픽업 서비스까지<br />
              한국 방문이 처음이어도 걱정 없이 이용하실 수 있습니다
            </p>
            <button className="px-8 py-4 bg-primary text-white rounded-full hover:bg-accent transition-all hover:scale-105">
              지금 예약하기 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}