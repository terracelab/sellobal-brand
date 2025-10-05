import {
  DollarSign,
  Shield,
  Clock,
  Users,
  BarChart,
  Headphones,
} from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "제로 리스크",
      value: "0원",
      description: "초기 투자비용",
      detail:
        "판매 실적에 따른 수수료만 지불하여 리스크 없이 시작할 수 있습니다.",
    },
    {
      icon: DollarSign,
      title: "높은 수익성",
      value: "300%",
      description: "평균 매출 증가",
      detail: "기존 국내 매출 대비 평균 300% 매출 증가를 경험할 수 있습니다.",
    },
    {
      icon: Clock,
      title: "빠른 런칭",
      value: "6-8주",
      description: "해외 진출 기간",
      detail: "복잡한 과정 없이 6-8주 만에 해외 시장에서 판매를 시작합니다.",
    },
    {
      icon: Users,
      title: "글로벌 고객",
      value: "50+",
      description: "진출 가능 국가",
      detail: "아시아, 유럽, 미주 등 전 세계 50개 이상 국가로 진출 가능합니다.",
    },
    {
      icon: BarChart,
      title: "데이터 기반",
      value: "24/7",
      description: "실시간 분석",
      detail:
        "매출, 마케팅 성과, 고객 반응을 실시간으로 분석하고 최적화합니다.",
    },
    {
      icon: Headphones,
      title: "전담 지원",
      value: "1:1",
      description: "매니저 배정",
      detail: "전담 매니저가 전 과정을 책임지고 지원하여 성공을 보장합니다.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            셀로벌과 함께하는 브랜드의 혜택
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            이미 100여 개의 브랜드가 셀로벌을 통해 해외 진출에 성공했습니다.
            검증된 시스템으로 안전하고 효과적인 글로벌 진출을 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="text-amber-600" size={32} />
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-neutral-900 mb-1">
                  {benefit.value}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wide">
                  {benefit.description}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Success stories */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
          <h3 className="text-2xl font-semibold text-neutral-900 text-center mb-8">
            성공 사례
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                A 화장품 브랜드
              </div>
              <div className="text-neutral-600 mb-2">일본 진출 6개월</div>
              <div className="text-lg font-semibold text-neutral-900">
                월 매출 500% 증가
              </div>
            </div>

            <div className="text-center border-l border-r border-neutral-200 px-8">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                B 패션 브랜드
              </div>
              <div className="text-neutral-600 mb-2">동남아 진출 4개월</div>
              <div className="text-lg font-semibold text-neutral-900">
                월 매출 300% 증가
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                C 식품 브랜드
              </div>
              <div className="text-neutral-600 mb-2">북미 진출 8개월</div>
              <div className="text-lg font-semibold text-neutral-900">
                월 매출 400% 증가
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              예상 수익 계산기
            </h3>
            <p className="text-neutral-600">
              현재 국내 월 매출을 기준으로 해외 진출 시 예상 수익을
              확인해보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-neutral-500 mb-2">
                현재 국내 월매출
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                1,000만원
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-neutral-500 mb-2">
                예상 해외 월매출
              </div>
              <div className="text-2xl font-bold text-amber-600">3,000만원</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-neutral-500 mb-2">월 추가 수익</div>
              <div className="text-2xl font-bold text-green-600">
                +2,000만원
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-neutral-500 mb-2">
                연간 추가 수익
              </div>
              <div className="text-2xl font-bold text-green-600">+2.4억원</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-neutral-600 mb-4">
              * 실제 수익은 브랜드와 시장 상황에 따라 달라질 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
