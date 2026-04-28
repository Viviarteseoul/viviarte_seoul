import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1590548783703-14a5918802cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwcGVybWFuZW50JTIwbWFrZXVwJTIwcmVzdWx0fGVufDF8fHx8MTc3NTEwNjc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: '눈썹 시술 받았는데 너무 자연스럽고 만족스러워요!',
    rating: 5,
    date: '2026/03/28',
    name: '사토 아이'
  },
  {
    image: 'https://images.unsplash.com/photo-1635353692890-80a6b95add47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiZWF1dHklMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTEwNjc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: '입술 시술 후 화장 시간이 반으로 줄었어요. 정말 감사합니다!',
    rating: 5,
    date: '2026/03/25',
    name: '다나카 유이'
  },
  {
    image: 'https://images.unsplash.com/photo-1747823489881-982182fc3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsaW5lciUyMHRhdHRvbyUyMHJlc3VsdHxlbnwxfHx8fDE3NzUxMDY3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'アイラインが自然で、毎日のメイクが楽になりました!',
    rating: 5,
    date: '2026/03/20',
    name: '山田 美咲'
  },
  {
    image: 'https://images.unsplash.com/photo-1763906802584-d3bc86db259c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwbWFrZXVwJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MTA2NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: '전문가의 손길이 느껴지는 세심한 시술이었습니다.',
    rating: 5,
    date: '2026/03/15',
    name: '이지은'
  },
  {
    image: 'https://images.unsplash.com/photo-1659617573738-11b71462753b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNsb3NlJTIwdXAlMjBiZWF1dHl8ZW58MXx8fHwxNzc1MTA2Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'ヘアラインの施術で自信が持てるようになりました!',
    rating: 5,
    date: '2026/03/10',
    name: '佐藤 花子'
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsToShow = 3;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], key: index });
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-black mb-4">#VIVIARTE SEOUL</h2>
          <p className="text-gray-600">From 593+ reviews</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden px-12">
            <div className="flex gap-6">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {getVisibleTestimonials().map((testimonial) => (
                  <motion.div
                    key={testimonial.key}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="flex-shrink-0 w-[calc(33.333%-16px)]"
                  >
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-800 mb-4 line-clamp-2 min-h-[40px]">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-black text-black" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-black'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
