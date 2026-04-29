import { useState } from 'react';
import { Play, BookOpen, Award, Users, ChevronRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TestimonialSlider } from './TestimonialSlider';
import procEyebrow from '../../imports/proc-eyebrow.png';
import procLip from '../../imports/proc-lip.png';
import procEyeliner from '../../imports/proc-eyeliner.png';
import procHairline from '../../imports/proc-hairline.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const procedureImages = [procEyebrow, procLip, procEyeliner, procHairline];
const prices = ['¥80,000~', '¥90,000~', '¥60,000~', '¥150,000~'];

const featureIcons = [BookOpen, Award, Users];

type ResultType = 'A' | 'B' | 'C';

export function ProceduresPage() {
  const { lang } = useLanguage();
  const t = translations[lang].procedures;

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

  const selectOption = (value: string) => setSelectedOption(value);

  const nextQuestion = () => {
    if (!selectedOption) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);
    if (currentQ < t.questions.length - 1) {
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

  const getResult = (): ResultType => {
    const count = { A: 0, B: 0, C: 0 };
    answers.forEach((a) => { count[a as ResultType]++; });
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0] as ResultType;
  };

  const progress = ((currentQ + (selectedOption ? 1 : 0)) / t.questions.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {!quizCompleted && (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          {!quizStarted && (
            <motion.div
              className="max-w-2xl w-full text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] mb-6 text-gray-500">{t.quizLabel}</p>
              <h1 className="text-5xl md:text-7xl font-light mb-6 whitespace-pre-line">
                {t.quizTitle}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-md mx-auto whitespace-pre-line">
                {t.quizDesc}
              </p>
              <motion.button
                onClick={startQuiz}
                className="px-12 py-4 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {t.startBtn}
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
                        {currentQ + 1} / {t.questions.length}
                      </span>
                    </div>

                    <h2 className="text-2xl font-light mb-8 leading-relaxed">
                      {t.questions[currentQ].text}
                    </h2>

                    <div className="space-y-3">
                      {t.questions[currentQ].options.map((option, index) => (
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
                          <div className={`flex items-center justify-center w-8 h-8 min-w-8 border text-sm transition-all ${
                            selectedOption === option.value
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 text-gray-500'
                          }`}>
                            {option.label}
                          </div>
                          <span className="text-sm leading-relaxed pt-1">{option.text}</span>
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
                      {currentQ < t.questions.length - 1 ? t.nextBtn : t.resultBtn}
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
                  <p className="text-xs tracking-[0.3em] mb-4 text-gray-400">{t.yourStyle}</p>
                  <h2 className="text-5xl md:text-6xl font-light mb-3 italic">
                    {t.results[getResult()].type}
                  </h2>
                  <p className="text-sm tracking-wide text-gray-400">{t.results[getResult()].sub}</p>
                </div>

                <div className="p-12">
                  <p className="text-base leading-relaxed text-gray-700 mb-8 pb-8 border-b border-gray-200">
                    {t.results[getResult()].desc}
                  </p>

                  <p className="text-xs tracking-[0.2em] mb-6 font-medium">
                    {t.recommended}
                  </p>

                  <div className="space-y-3 mb-8">
                    {t.results[getResult()].recommends.map((item, index) => (
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
                    onClick={() => setQuizCompleted(true)}
                    className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors mb-3"
                  >
                    {t.bookBtn}
                  </button>

                  <button
                    onClick={resetQuiz}
                    className="w-full py-4 border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t.retryBtn}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      )}

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-black mb-4 font-medium">{t.sectionLabel}</p>
            <h1 className="text-3xl lg:text-4xl font-medium text-black mb-4">
              {t.sectionTitle}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.sectionDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.procedureItems.map((procedure, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={procedureImages[index]}
                    alt={procedure.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-black mb-2">{procedure.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{procedure.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{procedure.duration}</span>
                    <span className="font-medium text-black">{prices[index]}</span>
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
            {t.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <TestimonialSlider />
      </div>
    </div>
  );
}
