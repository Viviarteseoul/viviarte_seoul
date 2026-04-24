import { Play, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    title: 'PMU 기초 과정',
    instructor: '김유하 원장',
    duration: '8주',
    students: 245,
    rating: 4.9,
    price: '₩500,000',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    level: '초급',
    lessons: 24
  },
  {
    title: '아이라인 마스터 클래스',
    instructor: '박지은 원장',
    duration: '6주',
    students: 189,
    rating: 5.0,
    price: '₩1,200,000',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    level: '중급',
    lessons: 18
  },
  {
    title: '립 컬러 전문가 과정',
    instructor: '최서연 원장',
    duration: '10주',
    students: 156,
    rating: 4.8,
    price: '₩1,800,000',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    level: '고급',
    lessons: 32
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary mb-4">Online Education</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
            프리미엄 교육 프로그램
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            한국 최고 원장님들의 노하우를 온라인으로 배워보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-primary ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.instructor}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}명</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-medium text-primary">
                    {course.price}
                  </span>
                  <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors">
                    수강하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-secondary text-foreground rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105">
            전체 교육 과정 보기
          </button>
        </div>
      </div>
    </section>
  );
}
