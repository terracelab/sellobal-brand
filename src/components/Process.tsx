import { ArrowRight, Upload, Zap, TrendingUp } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "상품 정보 연동",
      description:
        "스마트스토어 상품 정보를 셀로벌 시스템에 연동합니다. AI가 자동으로 해외 판매에 최적화된 형태로 변환합니다.",
      features: [
        "자동 상품 정보 수집",
        "AI 번역 및 현지화",
        "가격 최적화 제안",
      ],
    },
    {
      number: "02",
      icon: Zap,
      title: "해외 마케팅 런칭",
      description:
        "타겟 시장에 맞는 홈페이지를 생성하고 메타 광고 등을 통해 현지 고객을 유입시킵니다.",
      features: ["맞춤형 홈페이지 생성", "타겟 마케팅 캠페인", "SEO 최적화"],
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "판매 및 정산",
      description:
        "주문이 들어오면 3PL을 통해 배송하고, 판매 완료 즉시 정산금을 받습니다.",
      features: ["자동 주문 처리", "3PL 배송 연동", "즉시 정산 시스템"],
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            3단계로 완성되는 해외 진출
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            복잡한 해외 진출 과정을 단 3단계로 간소화했습니다. 각 단계마다 AI가
            자동으로 최적화를 진행합니다.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-1/3 h-0.5 bg-blue-200 mt-16"></div>
              <div className="w-1/3 h-0.5 bg-blue-200 mt-16"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex">
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-24 bg-blue-200"></div>
                )}

                <div className="card text-center relative z-10 hover:shadow-lg transition-shadow duration-300 flex flex-col w-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="text-blue-600" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2 text-sm text-neutral-500"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <ArrowRight className="text-amber-400" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-amber-50 to-yellow-50 px-8 py-4 rounded-full border border-amber-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">1-2주</div>
              <div className="text-sm text-neutral-600">시스템 연동</div>
            </div>
            <ArrowRight className="text-amber-400" size={20} />
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">2-4주</div>
              <div className="text-sm text-neutral-600">마케팅 런칭</div>
            </div>
            <ArrowRight className="text-amber-400" size={20} />
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">즉시</div>
              <div className="text-sm text-neutral-600">판매 및 정산</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            지금 시작하면 6-8주 후 해외 매출을 볼 수 있습니다
          </h3>
          <p className="text-neutral-600 mb-6">
            더 빠른 글로벌 진출을 위해 지금 바로 상담을 신청하세요.
          </p>
          <a href="#contact" className="button-accent text-lg px-8 py-4">
            무료 상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
