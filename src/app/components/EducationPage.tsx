import { useState } from 'react';
import { Play, Clock, Award, Users, BookOpen, CheckCircle2, Calendar, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../../imports/academy-hero.png';

const courses = [
  {
    id: 'eyebrow',
    title: '눈썹 반영구',
    subtitle: 'Eyebrow Semi-Permanent',
    duration: '4주 / 32시간',
    price: '₩3,500,000',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=80',
    description: '자연스러운 눈썹 디자인부터 고급 테크닉까지, 체계적인 커리큘럼으로 전문가 양성',
    curriculum: [
      { week: 1, title: '이론 및 기초', content: 'PMU 개론, 피부학, 색소학, 위생 및 안전 교육' },
      { week: 2, title: '눈썹 디자인', content: '골든비율 분석, 얼굴형별 디자인, 도안 연습' },
      { week: 3, title: '기계 실습', content: '머신 사용법, 니들 선택, 실습 패드 연습' },
      { week: 4, title: '실전 시술', content: '모델 실습, 1:1 피드백, 수료 평가' }
    ]
  },
  {
    id: 'eyeliner',
    title: '아이라인 반영구',
    subtitle: 'Eyeliner Semi-Permanent',
    duration: '3주 / 24시간',
    price: '₩2,800,000',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
    description: '섬세한 눈매 교정 기술과 다양한 아이라인 스타일을 마스터하는 전문 과정',
    curriculum: [
      { week: 1, title: '이론 및 안전 교육', content: '아이라인 PMU 개론, 눈 구조학, 마취 및 위생' },
      { week: 2, title: '디자인 실습', content: '눈매 분석, 스타일별 디자인, 패드 연습' },
      { week: 3, title: '실전 모델 시술', content: '실제 모델 시술, 보정 기법, 수료 평가' }
    ]
  },
  {
    id: 'lips',
    title: '입술 반영구',
    subtitle: 'Lips Semi-Permanent',
    duration: '3주 / 24시간',
    price: '₩3,200,000',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80',
    description: '자연스러운 입술 컬러부터 풀립 기법까지, 트렌디한 립 PMU 전문가 과정',
    curriculum: [
      { week: 1, title: '입술 이론 및 색채학', content: '입술 구조, 색소 믹싱, 톤별 컬러 매칭' },
      { week: 2, title: '립 디자인 실습', content: '입술형 분석, 윤곽 교정, 그라데이션 기법' },
      { week: 3, title: '실전 시술 및 평가', content: '모델 실습, 풀립 실습, 수료 평가' }
    ]
  }
];

const instructors = [
  {
    name: '김서연',
    title: 'Master Director',
    specialty: '눈썹 반영구 전문',
    experience: '15년 경력',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    achievements: ['국제 PMU 대회 금상', '일본 아카데미 초청 강사', '2,000+ 수강생 배출']
  },
  {
    name: '이지은',
    title: 'Lead Instructor',
    specialty: '아이라인 & 입술 전문',
    experience: '12년 경력',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    achievements: ['한국 PMU 협회 인증', '도쿄 뷰티엑스포 시연', '1,500+ 수강생 배출']
  },
  {
    name: '박민지',
    title: 'Senior Instructor',
    specialty: '컬러리스트 & 디자인',
    experience: '10년 경력',
    image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&q=80',
    achievements: ['색채 심리학 전문가', '커스텀 색소 개발', '1,000+ 수강생 배출']
  }
];

const testimonials = [
  {
    name: '사토 유키',
    role: '도쿄 PMU 살롱 운영',
    content: 'VIVIARTE SEOUL 아카데미에서 배운 기술로 일본에서 성공적으로 살롱을 운영하고 있습니다. 체계적인 커리큘럼과 실전 중심 교육이 정말 도움이 되었어요.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5
  },
  {
    name: '최현아',
    role: '프리랜서 PMU 아티스트',
    content: '강사님들의 세심한 피드백과 1:1 지도 덕분에 자신감을 갖고 시술할 수 있게 되었습니다. 특히 눈썹 디자인 부분이 정말 탁월했어요.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
    rating: 5
  },
  {
    name: 'Emma Wilson',
    role: 'LA 뷰티 클리닉',
    content: 'The quality of education at VIVIARTE SEOUL is world-class. I learned advanced techniques that I couldn\'t find anywhere else. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5
  }
];

const faqs = [
  {
    q: '수강 자격이 어떻게 되나요?',
    a: '관련 경력이 없어도 수강 가능합니다. 기초반부터 체계적으로 교육하므로 초보자도 안심하고 시작할 수 있습니다. 단, 만 18세 이상이어야 하며, 위생 교육 수료증이 필요합니다.'
  },
  {
    q: '해외 수강생도 가능한가요?',
    a: '네, 글로벌 수강생을 환영합니다. 일본어, 영어 통역 서비스를 제공하며, 비자 발급을 위한 초청장도 발급해드립니다. 숙박 시설 안내도 가능합니다.'
  },
  {
    q: '수료 후 취업이나 창업 지원이 있나요?',
    a: '우수 수료생에게는 VIVIARTE SEOUL 파트너 병원 취업 연계 및 창업 컨설팅을 제공합니다. 또한 수료생 전용 커뮤니티에서 지속적인 정보 교류가 가능합니다.'
  },
  {
    q: '재료와 기계는 제공되나요?',
    a: '교육 기간 중 모든 실습 재료와 기계는 아카데미에서 제공합니다. 수료 후 필요한 제품은 수료생 특가로 구매 가능하며, 샵에서도 구입하실 수 있습니다.'
  },
  {
    q: '일정 조율이 가능한가요?',
    a: '정규반 외에 주말반, 속성반 등 다양한 일정을 운영하고 있습니다. 개인 사정으로 인한 결석 시 보강 수업도 제공됩니다.'
  }
];

export function EducationPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VIVIARTE Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-sm tracking-[0.3em] mb-6">VIVIARTE SEOUL ACADEMY</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            세계적인 PMU 전문가로<br />성장하는 여정
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 text-white/90">
            한국 최고 수준의 교육 프로그램으로 당신의 미래를 디자인합니다
          </p>
          <motion.button
            className="px-12 py-4 bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            프로그램 둘러보기
          </motion.button>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm tracking-[0.3em] mb-4">PHILOSOPHY</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                예술과 의학의<br />완벽한 조화
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                VIVIARTE SEOUL 아카데미는 단순한 기술 전수를 넘어,
                의료 미용의 본질과 예술적 감각을 겸비한 진정한 전문가를 양성합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">체계적인 커리큘럼</h3>
                    <p className="text-gray-600">이론부터 실전까지 단계별 맞춤 교육</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">최고 수준의 강사진</h3>
                    <p className="text-gray-600">15년 이상 경력의 마스터 강사진</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">글로벌 네트워크</h3>
                    <p className="text-gray-600">일본, 미국 등 해외 취업 연계 지원</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[600px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Academy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] mb-4 text-gray-600">PROGRAMS</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">교육 프로그램</h2>
            <p className="text-xl text-gray-600">전문가로 성장하기 위한 체계적인 과정</p>
          </motion.div>

          {/* Course Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`px-8 py-3 border transition-all duration-300 ${
                  selectedCourse.id === course.id
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black border-gray-300 hover:border-black'
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Selected Course Detail */}
          <motion.div
            key={selectedCourse.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-black text-white text-sm">
                {selectedCourse.level}
              </div>
            </div>

            <div>
              <p className="text-sm tracking-[0.2em] mb-4 text-gray-500">{selectedCourse.subtitle}</p>
              <h3 className="text-3xl font-light mb-4">{selectedCourse.title}</h3>
              <p className="text-lg text-gray-600 mb-8">{selectedCourse.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">교육 기간</p>
                    <p className="font-medium">{selectedCourse.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">수강료</p>
                    <p className="font-medium">{selectedCourse.price}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-light mb-6 pb-4 border-b border-gray-200">커리큘럼</h4>
                <div className="space-y-6">
                  {selectedCourse.curriculum.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-16 h-16 border border-gray-300 flex items-center justify-center">
                        <span className="text-2xl font-light">0{item.week}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium mb-2">{item.title}</h5>
                        <p className="text-sm text-gray-600">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 flex items-center justify-center gap-2">
                상담 신청하기
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] mb-4">INSTRUCTORS</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">최고의 강사진</h2>
            <p className="text-xl text-gray-600">세계적 수준의 전문가들과 함께합니다</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2">{instructor.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{instructor.title}</p>
                <p className="text-sm text-gray-600 mb-4">{instructor.specialty} · {instructor.experience}</p>
                <ul className="space-y-2">
                  {instructor.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">수강생 후기</h2>
            <p className="text-xl text-gray-600">전 세계 수강생들의 생생한 이야기</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 fill-black" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] mb-4">REGISTRATION</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">등록 절차</h2>
            <p className="text-xl text-gray-600">간단한 4단계로 시작하세요</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: '상담 신청', desc: '온라인 또는 전화 상담 예약' },
              { step: 2, title: '과정 선택', desc: '맞춤 교육 과정 추천 및 선택' },
              { step: 3, title: '등록 및 결제', desc: '수강료 납부 및 등록 완료' },
              { step: 4, title: '교육 시작', desc: '오리엔테이션 및 첫 수업' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-3xl font-light">{item.step}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] mb-4 text-gray-600">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">자주 묻는 질문</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-lg font-medium pr-4">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-6">상담 신청</h2>
              <p className="text-lg text-gray-600 mb-12">
                전문 상담사가 맞춤 교육 과정을 안내해드립니다
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">전화 상담</p>
                    <p className="text-gray-600">+82-2-1234-5678</p>
                    <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">이메일 문의</p>
                    <p className="text-gray-600">academy@viviarte-seoul.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">위치</p>
                    <p className="text-gray-600">서울특별시 강남구 청담동</p>
                    <p className="text-gray-600">테헤란로 123 VIVIARTE 빌딩 5층</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">이름 *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">연락처 *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">이메일 *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">희망 과정</label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors">
                    <option>눈썹 반영구</option>
                    <option>아이라인 반영구</option>
                    <option>입술 반영구</option>
                    <option>상담 후 결정</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">문의 내용</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="궁금한 사항을 자유롭게 작성해주세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  상담 신청하기
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}