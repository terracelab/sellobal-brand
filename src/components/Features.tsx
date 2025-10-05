import {
  Bot,
  Globe,
  Package,
  CreditCard,
  BarChart3,
  Shield,
} from "lucide-react";
import featureImage from "../assets/images/feature.png";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI 자동화 시스템",
      description:
        "상품 정보 번역, 현지화, 가격 최적화까지 AI가 자동으로 처리합니다.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Globe,
      title: "맞춤형 해외 홈페이지",
      description:
        "타겟 시장에 최적화된 홈페이지를 자동으로 생성하고 운영합니다.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Package,
      title: "실시간 재고 연동",
      description:
        "스마트스토어 재고와 실시간 동기화로 재고 관리 걱정을 덜어드립니다.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CreditCard,
      title: "즉시 정산 시스템",
      description: "판매 완료 즉시 정산받는 시스템으로 현금 흐름을 개선합니다.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "타겟 마케팅",
      description:
        "메타 광고, SEO 최적화로 현지 고객에게 효과적으로 어필합니다.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "리스크 제로",
      description:
        "초기 투자 없이 판매 실적에 따라서만 수수료를 받는 안전한 구조입니다.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            셀로벌의 핵심 기능
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            AI 기술과 자동화 시스템으로 해외 진출의 모든 과정을 간소화합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div
                className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 mx-auto`}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature highlight with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
              AI가 모든 것을 자동화합니다
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              복잡한 해외 진출 과정을 AI 기술로 단순화했습니다. 상품 등록부터
              주문 처리, 고객 서비스까지 모든 과정이 자동으로 진행됩니다.
            </p>

            <div className="space-y-4">
              {[
                "상품 정보 자동 번역 및 현지화",
                "타겟 시장 맞춤 가격 최적화",
                "실시간 재고 및 주문 동기화",
                "자동 고객 서비스 및 문의 응답",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="#process" className="button-primary inline-flex">
              진행 과정 보기
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={featureImage}
                alt="AI Automation Dashboard"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
