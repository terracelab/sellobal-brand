import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import mainImage from "../assets/images/main.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-blue-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-blue-100),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--neutral-100),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full border border-blue-200">
              <Globe size={16} />
              <span className="text-sm font-medium">
                글로벌 진출의 새로운 기준
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                <span className="block">국내 브랜드의</span>
                <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  해외 진출
                </span>
                <span className="block">이제 쉽게</span>
              </h1>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                AI 자동화 기술로 국내 브랜드의 해외 판매를 연결해드립니다.
                리스크 없이 새로운 판매 채널을 확장하고, 글로벌 시장에서
                성공하세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="button-accent text-lg px-8 py-4">
                무료 상담 신청
                <ArrowRight size={20} />
              </a>
              <a href="#service" className="button-primary text-lg px-8 py-4">
                서비스 알아보기
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">100+</div>
                <div className="text-sm text-neutral-600">연결된 브랜드</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">50+</div>
                <div className="text-sm text-neutral-600">진출 국가</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">300%</div>
                <div className="text-sm text-neutral-600">평균 매출 증가</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={mainImage}
                alt="Global Commerce"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-neutral-200">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-500" size={20} />
                <div className="text-sm font-medium text-neutral-900">
                  매출 증가중
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-neutral-200">
              <div className="flex items-center space-x-2">
                <Globe className="text-blue-500" size={20} />
                <div className="text-sm font-medium text-neutral-900">
                  글로벌 연결
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
