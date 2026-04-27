import { X, MessageCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
    // 실제 카카오 로그인 로직
  };

  const handleNaverLogin = () => {
    console.log('네이버 로그인 시도');
    // 실제 네이버 로그인 로직
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('이메일 로그인 시도');
    // 실제 이메일 로그인 로직
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>

              <div className="p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6 text-black">
                  로그인
                </h2>

                {/* Promotion Badge */}
                <div className="bg-black text-white text-center py-2 px-4 rounded-full text-sm mb-6 inline-block w-full">
                  신규 회원가입 시 1만원 쿠폰팩 자동 지급
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-6">
                  {/* Kakao Login */}
                  <button
                    onClick={handleKakaoLogin}
                    className="w-full bg-[#FEE500] text-black py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#FDD835] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    카카오톡 간편 로그인/회원가입
                  </button>

                  {/* Naver Login */}
                  <button
                    onClick={handleNaverLogin}
                    className="w-full bg-white border-2 border-gray-200 text-black py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13.6 10.8L6.4 0H0V20H6.4V9.2L13.6 20H20V0H13.6V10.8Z" fill="#03C75A"/>
                    </svg>
                    네이버로 로그인
                  </button>
                </div>

                {/* Warning Message */}
                <div className="flex items-start gap-2 mb-6 text-sm text-red-500">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>SNS 계정 간편가입 시 중복가입에 주의 바랍니다.</p>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">또는</span>
                  </div>
                </div>

                {/* Email Login Form */}
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="아이디"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-black outline-none transition-colors text-gray-700 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="비밀번호"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-black outline-none transition-colors text-gray-700 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between text-sm pt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-gray-600">자동 로그인</span>
                    </label>
                    <div className="flex gap-3 text-gray-500">
                      <button type="button" className="hover:text-black transition-colors">
                        비회원 주문조회
                      </button>
                      <span>|</span>
                      <button type="button" className="hover:text-black transition-colors">
                        ID/PW 찾기
                      </button>
                    </div>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-6"
                  >
                    로그인 하기
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="text-center mt-6">
                  <button className="text-sm text-gray-600 hover:text-black underline transition-colors">
                    일반 회원가입
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}