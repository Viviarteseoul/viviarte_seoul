import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export function Footer({ overlay = false }: { overlay?: boolean }) {
  return (
    <footer className={`py-12 border-t ${
      overlay 
        ? 'bg-transparent border-white/10' 
        : 'bg-white border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className={`text-lg font-medium ${overlay ? 'text-white' : 'text-black'}`}>VIVIARTE SEOUL</h3>
              <p className={`text-xs ${overlay ? 'text-white/60' : 'text-muted-foreground'}`}>Global Beauty Platform</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                overlay 
                  ? 'bg-white/10 hover:bg-white hover:text-black text-white' 
                  : 'bg-secondary hover:bg-primary hover:text-white'
              }`}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                overlay 
                  ? 'bg-white/10 hover:bg-white hover:text-black text-white' 
                  : 'bg-secondary hover:bg-primary hover:text-white'
              }`}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                overlay 
                  ? 'bg-white/10 hover:bg-white hover:text-black text-white' 
                  : 'bg-secondary hover:bg-primary hover:text-white'
              }`}>
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                overlay 
                  ? 'bg-white/10 hover:bg-white hover:text-black text-white' 
                  : 'bg-secondary hover:bg-primary hover:text-white'
              }`}>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${overlay ? 'text-white' : 'text-foreground'}`}>서비스</h4>
            <ul className="space-y-3">
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>시술 예약</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>교육 프로그램</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>파트너십</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>가격 안내</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${overlay ? 'text-white' : 'text-foreground'}`}>회사</h4>
            <ul className="space-y-3">
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>회사 소개</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>채용</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>블로그</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>문의하기</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${overlay ? 'text-white' : 'text-foreground'}`}>지원</h4>
            <ul className="space-y-3">
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>고객센터</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>이용약관</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>개인정보처리방침</a></li>
              <li><a href="#" className={`text-sm transition-colors ${
                overlay 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-muted-foreground hover:text-primary'
              }`}>FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${overlay ? 'border-white/10' : 'border-border'}`}>
          <p className={`text-sm ${overlay ? 'text-white/60' : 'text-muted-foreground'}`}>
            © 2023 VIVIARTE SEOUL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}