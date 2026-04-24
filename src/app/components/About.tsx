import { Award, BookOpen, Users } from 'lucide-react';
import founderImage from 'figma:asset/f4c763834c806c492f7d4f402aefd641cf4cc8fa.png';

export function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-black mb-4">비비아르떼 서울 대표</h1>
          <p className="text-xl text-gray-600">Beauty Artist & Expert Instructor</p>
        </div>

        {/* Founder Profile */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src={founderImage}
                alt="YUHA JE - Founder"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-medium text-black">제유하</h2>
              <p className="text-xl text-gray-700">YUHA JE</p>
              <p className="text-gray-600 leading-relaxed">
                전문적인 의료 배경과 예술적 감각을 겸비한 아트메이크 전문가로,
                안전하고 자연스러운 시술을 추구합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Career & Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-black mb-8 pb-4 border-b-2 border-black">
            경력 및 성과
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg">
                국내외 아트메이크 시술 및 교육 누적 2,500건 이상
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg">
                글로벌 뷰티 세미나 강사 활동
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg">
                해부학 기반의 안전한 시술 기법 개발
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg">
                의료 배경을 바탕으로 한 전문적 접근
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-black mb-8 pb-4 border-b-2 border-black">
            자격 및 인증
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">국제 아트메이크 자격증</h4>
              <p className="text-sm text-gray-600">International Certificate</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">뷰티 어워즈 수상</h4>
              <p className="text-sm text-gray-600">Beauty Awards Winner</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">전문강사 자격증</h4>
              <p className="text-sm text-gray-600">Certified Instructor</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-medium text-black mb-4 text-center">Philosophy</h3>
          <p className="text-gray-700 text-center leading-relaxed">
            "모든 시술은 고객의 안전과 만족을 최우선으로 합니다.<br />
            의료적 전문성과 예술적 감각을 결합하여<br />
            자연스럽고 아름다운 결과를 만들어냅니다."
          </p>
        </div>
      </div>
    </div>
  );
}
