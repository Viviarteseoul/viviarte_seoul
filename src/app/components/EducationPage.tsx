import { useState } from 'react';
import { Clock, Award, CheckCircle2, Calendar, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroVideo from '../../imports/veo-video-1777273171147.mp4';
import instructorKim from '../../imports/instructor-kim.png';
import instructorLee from '../../imports/instructor-lee.png';
import instructorPark from '../../imports/instructor-park.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const courseImages = [
  'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80',
];
const courseLevels = ['All Levels', 'Intermediate', 'Intermediate'];
const courseDurations = ['4주 / 32시간', '3주 / 24시간', '3주 / 24시간'];
const coursePrices = ['₩3,500,000', '₩2,800,000', '₩3,200,000'];

const instructors = [
  { name: '제유하', title: '대표원장', specialty: '눈썹 반영구 전문', experience: '15년 경력', image: instructorKim, achievements: ['국제 PMU 대회 금상', '일본 아카데미 초청 강사', '2,000+ 수강생 배출'] },
  { name: '김은아', title: '실장', specialty: '아이라인 & 입술 전문', experience: '12년 경력', image: instructorLee, achievements: ['한국 PMU 협회 인증', '한국 뷰티엑스포 시연', '1,500+ 수강생 배출'] },
  { name: '미나미', title: '사원', specialty: '컬러리스트 & 디자인', experience: '10년 경력', image: instructorPark, achievements: ['일본 현지 감성 전문가', '커스텀 색소 개발', '1,000+ 수강생 배출'] },
];

const testimonials = [
  { name: '사토 유키', role: '도쿄 PMU 살롱 운영', content: 'VIVIARTE SEOUL 아카데미에서 배운 기술로 일본에서 성공적으로 살롱을 운영하고 있습니다.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', rating: 5 },
  { name: '최현아', role: '프리랜서 PMU 아티스트', content: '강사님들의 세심한 피드백과 1:1 지도 덕분에 자신감을 갖고 시술할 수 있게 되었습니다.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', rating: 5 },
  { name: 'Emma Wilson', role: 'LA 뷰티 클리닉', content: "The quality of education at VIVIARTE SEOUL is world-class. I learned advanced techniques that I couldn't find anywhere else.", image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', rating: 5 },
];

export function EducationPage() {
  const { lang } = useLanguage();
  const t = translations[lang].education;
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const selectedCourse = t.courses[selectedCourseIndex];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl pt-16 sm:pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] mb-4 sm:mb-6">{t.heroLabel}</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-light mb-4 sm:mb-6 tracking-tight whitespace-pre-line">
            {t.heroTitle}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 text-white/90">
            {t.heroSubtitle}
          </p>
          <motion.button
            className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {t.heroBtn}
          </motion.button>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-sm tracking-[0.3em] mb-4">{t.philLabel}</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 whitespace-pre-line">{t.philTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{t.philDesc}</p>
              <div className="space-y-4">
                {t.philPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{point.title}</h3>
                      <p className="text-gray-600">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="relative h-[600px]" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" alt="Academy" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.3em] mb-4 text-gray-600">{t.programsLabel}</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.programsTitle}</h2>
            <p className="text-xl text-gray-600">{t.programsSubtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {t.courses.map((course, index) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourseIndex(index)}
                className={`px-8 py-3 border transition-all duration-300 ${
                  selectedCourseIndex === index
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black border-gray-300 hover:border-black'
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedCourse.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img src={courseImages[selectedCourseIndex]} alt={selectedCourse.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 px-4 py-2 bg-black text-white text-sm">
                {courseLevels[selectedCourseIndex]}
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
                    <p className="text-sm text-gray-500">{t.durationLabel}</p>
                    <p className="font-medium">{courseDurations[selectedCourseIndex]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">{t.priceLabel}</p>
                    <p className="font-medium">{coursePrices[selectedCourseIndex]}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-light mb-6 pb-4 border-b border-gray-200">{t.curriculumLabel}</h4>
                <div className="space-y-6">
                  {selectedCourse.curriculum.map((item, index) => (
                    <motion.div key={index} className="flex gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
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
                {t.consultBtn}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.3em] mb-4">{t.instructorsLabel}</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.instructorsTitle}</h2>
            <p className="text-xl text-gray-600">{t.instructorsSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {instructors.map((instructor, index) => (
              <motion.div key={index} className="group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-white">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full object-contain transition-all duration-500" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-light">{instructor.name}</h3>
                  <p className="text-sm text-gray-500">{instructor.title}</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">{instructor.specialty} · {instructor.experience}</p>
                <ul className="space-y-2">
                  {instructor.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.3em] mb-4">{t.testimonialsLabel}</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{t.testimonialsSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="bg-white p-8 hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 fill-black" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
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

      {/* Registration */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.3em] mb-4">{t.regLabel}</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.regTitle}</h2>
            <p className="text-xl text-gray-600">{t.regSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {t.regSteps.map((item, index) => (
              <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
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

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.3em] mb-4 text-gray-600">{t.faqLabel}</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.faqTitle}</h2>
          </motion.div>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <motion.div key={index} className="border-b border-gray-200" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-lg font-medium pr-4">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pb-6 text-gray-600 leading-relaxed">
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
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-light mb-6">{t.contactTitle}</h2>
              <p className="text-lg text-gray-600 mb-12">{t.contactSubtitle}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">{t.phoneLabel}</p>
                    <p className="text-gray-600">+82-2-1234-5678</p>
                    <p className="text-sm text-gray-500">{t.phoneHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">{t.emailLabel}</p>
                    <p className="text-gray-600">academy@viviarte-seoul.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">{t.locationLabel}</p>
                    <p className="text-gray-600 whitespace-pre-line">{t.locationAddr}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-gray-50 p-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">{t.formName}</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors" placeholder={t.formNamePlaceholder} />
                </div>
                <div>
                  <label className="block text-sm mb-2">{t.formPhone}</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors" placeholder={t.formPhonePlaceholder} />
                </div>
                <div>
                  <label className="block text-sm mb-2">{t.formEmail}</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors" placeholder={t.formEmailPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm mb-2">{t.formCourse}</label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors">
                    {t.formCourseOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">{t.formMessage}</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none" placeholder={t.formMessagePlaceholder} />
                </div>
                <button type="submit" className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors">
                  {t.formSubmit}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
