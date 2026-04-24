import { useState } from 'react';
import { Play, BookOpen, Award, Users, ChevronRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TestimonialSlider } from './TestimonialSlider';
import lipImage1 from 'figma:asset/7e95ba7b90ab6efcbbc919535cc56033dcf112e8.png';
import lipImage2 from 'figma:asset/df384868ee95c37e95388ed403808794282f005b.png';
import eyebrowImage from 'figma:asset/7fd85e542b6e7522818ed74dcd7113623778bf20.png';
import eyelinerImage from 'figma:asset/bae0c578ca478d67093562941f2a279352ae5a17.png';
import hairlineImage from 'figma:asset/2f01b7f60fa8ccc8fbf6965f55ec8c6720ede289.png';

const questions = [
  {
    text: "평소 메이크업 스타일은 어떤가요?",
    options: [
      { label: "A", text: "화장한 듯 안 한 듯 자연스러운 '꾸안꾸'", value: "A" },
      { label: "B", text: "또렷하고 세련된 '아이돌 메이크업'", value: "B" },
      { label: "C", text: "결점은 가리고 본연의 이목구비를 강조하는 '클래식'", value: "C" }
    ]
  },
  {
    text: "시술을 고민하는 가장 큰 이유는 무엇인가요?",
    options: [
      { label: "A", text: "바쁜 아침, 화장 시간을 단축하고 싶어서", value: "A" },
      { label: "B", text: "얼굴의 비대칭이나 콤플렉스를 보완하고 싶어서", value: "B" },
      { label: "C", text: "나만의 분위기를 확 바꾸고 싶어서", value: "C" }
    ]
  },
  {
    text: "선호하는 색감은 어느 쪽에 가까운가요?",
    options: [
      { label: "A", text: "내 피부 톤과 하나 된 듯한 은은한 브라운", value: "A" },
      { label: "B", text: "확실하게 눈매를 살려주는 깊이감 있는 블랙/다크 브라운", value: "B" },
      { label: "C", text: "생기를 더해주는 화사한 컬러감", value: "C" }
    ]
  }
];

const results = {
  A: {
    type: "Natural",
    sub: "자연스러운 꾸안꾸 스타일",
    desc: "일상에 자연스럽게 녹아드는 스타일을 추구하시는군요. 피부 톤과 조화를 이루는 은은한 컬러로, 화장한 듯 안 한 듯 완성되는 반영구 시술이 잘 어울립니다. 아침 루틴을 간소화하면서도 늘 생기있어 보이는 인상을 만들어 드립니다.",
    recommends: ["결 눈썹 (헤어 스트로크)", "아쿠아 립 블러쉬", "내추럴 아이라인", "피부 속광 앰플 베이스"]
  },
  B: {
    type: "Defined",
    sub: "또렷하고 세련된 아이돌 스타일",
    desc: "선명하고 또렷한 인상으로 존재감을 표현하고 싶으신 분이네요. 비대칭 교정과 음영 테크닉을 통해 이목구비를 또렷하게 살리는 시술을 추천드립니다. 전문 아티스트가 얼굴형에 맞는 1:1 맞춤 디자인으로 완성해 드립니다.",
    recommends: ["섀도우 브로우 (그라데이션)", "세미 퍼머넌트 아이라인", "버밀리온 보더 립", "비대칭 교정 눈썹"]
  },
  C: {
    type: "Classic",
    sub: "우아하고 클래식한 스타일",
    desc: "본연의 아름다움을 극대화하면서도 분위기 있는 변화를 원하시는 스타일이에요. 클래식한 컬러감으로 얼굴의 골격과 피부 결을 살리는 시술이 잘 어울립니다. 시간이 지나도 세련미를 잃지 않는 지속력 높은 디자인을 추천드립니다.",
    recommends: ["컴비네이션 눈썹 (엠보+섀딩)", "풀 컬러 립 (딥 로즈/마호가니)", "언더라인 아이라인", "페이스 컨투어링"]
  }
};

type ResultType = 'A' | 'B' | 'C';

const procedures = [
  {
    title: '눈썹 반영구 (Eyebrow PMU)',
    image: eyebrowImage,
    description: '자연스러운 눈썹 라인을 위한 전문 시술',
    duration: '2-3시간',
    price: '¥80,000~'
  },
  {
    title: '입술 반영구 (Lip PMU)',
    images: [lipImage2, lipImage1],
    description: '생기있는 입술 컬러와 윤곽 개선',
    duration: '2시간',
    price: '¥90,000~'
  },
  {
    title: '아이라인 (Eyeliner)',
    image: eyelinerImage,
    description: '또렷한 눈매를 위한 정밀 시술',
    duration: '1.5시간',
    price: '¥60,000~',
    imagePosition: 'object-top',
    imageScale: 'scale-110'
  },
  {
    title: '헤어라인 (Hairline)',
    image: 'https://images.unsplash.com/photo-1750857740018-a2acc16c37f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc3RyYWlnaHQlMjBoYWlyJTIwZnJvbnQlMjB2aWV3fGVufDF8fHx8MTc3NTEwMTgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '자연스러운 헤어라인 디자인',
    duration: '3-4시간',
    price: '¥150,000~',
    imageScale: 'scale-200'
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

export function ProceduresPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQ(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const selectOption = (value: string) => {
    setSelectedOption(value);
  };

  const nextQuestion = () => {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setQuizStarted(false);
  };

  const closeQuiz = () => {
    setQuizCompleted(true);
  };

  const getResult = (): ResultType => {
    const count = { A: 0, B: 0, C: 0 };
    answers.forEach((a) => {
      count[a as ResultType]++;
    });
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0] as ResultType;
  };

  const progress = ((currentQ + (selectedOption ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* PMU Quiz Hero Section */}
      {!quizCompleted && (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          {!quizStarted && (
            <motion.div
              className="max-w-2xl w-full text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] mb-6 text-gray-500">PERSONAL PMU TEST</p>
              <h1 className="text-5xl md:text-7xl font-light mb-6">
                나의 퍼스널<br />PMU 스타일은?
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-md mx-auto">
                3가지 질문에 답하면<br />
                나에게 꼭 맞는 반영구 시술 스타일과<br />
                전문 아티스트를 추천해 드립니다.
              </p>
              <motion.button
                onClick={startQuiz}
                className="px-12 py-4 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                테스트 시작하기
              </motion.button>
            </motion.div>
          )}

          {quizStarted && !showResult && (
            <div className="max-w-2xl w-full">
              <div className="h-1 bg-gray-200 mb-0">
                <motion.div
                  className="h-full bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-200 border-t-0"
                >
                  <div className="p-12">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm tracking-wide">Q{currentQ + 1}</span>
                      <span className="text-xs text-gray-500">
                        {currentQ + 1} / {questions.length}
                      </span>
                    </div>

                    <h2 className="text-2xl font-light mb-8 leading-relaxed">
                      {questions[currentQ].text}
                    </h2>

                    <div className="space-y-3">
                      {questions[currentQ].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => selectOption(option.value)}
                          className={`w-full flex items-start gap-4 p-5 border transition-all duration-200 text-left ${
                            selectedOption === option.value
                              ? 'border-black bg-gray-50'
                              : 'border-gray-200 hover:border-gray-400'
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <div
                            className={`flex items-center justify-center w-8 h-8 min-w-8 border text-sm transition-all ${
                              selectedOption === option.value
                                ? 'bg-black text-white border-black'
                                : 'border-gray-300 text-gray-500'
                            }`}
                          >
                            {option.label}
                          </div>
                          <span className="text-sm leading-relaxed pt-1">
                            {option.text}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end p-6 border-t border-gray-200">
                    <button
                      onClick={nextQuestion}
                      disabled={!selectedOption}
                      className={`px-8 py-3 flex items-center gap-2 transition-all ${
                        selectedOption
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {currentQ < questions.length - 1 ? '다음 질문' : '결과 보기'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {showResult && (
            <motion.div
              className="max-w-2xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 bg-gray-200 mb-0">
                <motion.div
                  className="h-full bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="border border-gray-200">
                <div className="bg-black text-white p-12 text-center">
                  <p className="text-xs tracking-[0.3em] mb-4 text-gray-400">YOUR PMU STYLE</p>
                  <h2 className="text-5xl md:text-6xl font-light mb-3 italic">
                    {results[getResult()].type}
                  </h2>
                  <p className="text-sm tracking-wide text-gray-400">{results[getResult()].sub}</p>
                </div>

                <div className="p-12">
                  <p className="text-base leading-relaxed text-gray-700 mb-8 pb-8 border-b border-gray-200">
                    {results[getResult()].desc}
                  </p>

                  <p className="text-xs tracking-[0.2em] mb-6 font-medium">
                    RECOMMENDED TREATMENTS
                  </p>

                  <div className="space-y-3 mb-8">
                    {results[getResult()].recommends.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={closeQuiz}
                    className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors mb-3"
                  >
                    추천 시술 보러가기
                  </button>

                  <button
                    onClick={resetQuiz}
                    className="w-full py-4 border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    테스트 다시 하기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      )}

      {/* Procedures Section */}
      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black mb-4 font-medium">Professional PMU Procedures</p>
          <h1 className="text-3xl lg:text-4xl font-medium text-black mb-4">
            K-뷰티 전문가의 반영구 시술
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            병원급 위생 시스템과 인증된 전문가가 제공하는 안전한 PMU 시술
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {procedures.map((procedure, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                {procedure.images ? (
                  <div className="flex flex-col h-full">
                    {procedure.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={procedure.title}
                        className="w-full h-1/2 object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={procedure.image}
                    alt={procedure.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${procedure.imagePosition} ${procedure.imageScale}`}
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-black ml-1" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-black mb-2">{procedure.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{procedure.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{procedure.duration}</span>
                  <span className="font-medium text-black">{procedure.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-medium text-black mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <TestimonialSlider />
      </div>
    </div>
  );
}