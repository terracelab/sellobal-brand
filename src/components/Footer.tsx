import { Globe, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Sellobal
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              AI 자동화 기술로 국내 브랜드의 해외 진출을 지원하는 글로벌 커머스
              플랫폼입니다. 리스크 없는 해외 진출의 새로운 기준을 제시합니다.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-blue-400" />
                <span className="text-sm text-neutral-400">
                  주식회사 테라스랩
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm text-neutral-400">
                  부산 해운대구 센텀서로 30 케이엔엔타워 26층 S5
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm text-neutral-400">0507-1361-3628</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm text-neutral-400">
                  contact@terracelab.co.kr
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#service"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  서비스 소개
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  핵심 기능
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  진행 과정
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  고객 혜택
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">지원</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  상담 신청
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  가이드
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                >
                  고객센터
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © 2025 Sellobal. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
              >
                이용약관
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
              >
                사업자정보
              </a>
            </div>
          </div>
        </div>

        {/* Global presence */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-blue-400">
            <Globe size={16} />
            <span className="text-sm">50+ 개국에서 서비스 중</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
