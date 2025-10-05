import { AlertTriangle, CheckCircle, Target } from "lucide-react";

export function ServiceIntro() {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            해외 진출, 왜 어려울까요?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            많은 국내 브랜드들이 해외 진출을 원하지만, 복잡한 프로세스와 높은
            리스크 때문에 망설이고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Problems */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              기존 해외 진출의 문제점
            </h3>

            {[
              {
                icon: AlertTriangle,
                title: "높은 초기 투자 비용",
                description:
                  "해외 마케팅, 물류, 현지화 등에 막대한 초기 비용이 필요합니다.",
              },
              {
                icon: AlertTriangle,
                title: "복잡한 운영 프로세스",
                description:
                  "주문 관리, 재고 연동, 배송, 정산 등 복잡한 업무를 직접 처리해야 합니다.",
              },
              {
                icon: AlertTriangle,
                title: "언어 및 문화적 장벽",
                description: "현지 고객과의 소통과 마케팅에 어려움을 겪습니다.",
              },
              {
                icon: AlertTriangle,
                title: "높은 실패 리스크",
                description:
                  "시장 검증 없이 진출하여 실패할 가능성이 높습니다.",
              },
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <problem.icon className="text-red-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-neutral-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              셀로벌의 해결책
            </h3>

            {[
              {
                icon: CheckCircle,
                title: "제로 리스크 진출",
                description:
                  "초기 투자 없이 판매가 완료된 후 정산받는 시스템으로 리스크를 제거합니다.",
              },
              {
                icon: CheckCircle,
                title: "AI 자동화 시스템",
                description:
                  "재고 연동, 주문 관리, 정산까지 모든 프로세스를 자동화합니다.",
              },
              {
                icon: CheckCircle,
                title: "현지 맞춤 마케팅",
                description:
                  "타겟 시장에 최적화된 홈페이지와 메타 광고로 현지 고객을 유입합니다.",
              },
              {
                icon: CheckCircle,
                title: "통합 물류 서비스",
                description:
                  "해외 배송 3PL 연동으로 물류 걱정 없이 판매에만 집중할 수 있습니다.",
              },
            ].map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <solution.icon className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-neutral-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
          <Target className="mx-auto text-blue-600 mb-4" size={48} />
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            이제 리스크 없이 해외 시장에 진출하세요
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            셀로벌과 함께라면 복잡한 해외 진출 과정을 간단하게 만들 수 있습니다.
            AI 자동화 시스템으로 효율적인 글로벌 비즈니스를 시작하세요.
          </p>
          <a href="#features" className="button-accent text-lg px-8 py-4">
            핵심 기능 알아보기
          </a>
        </div>
      </div>
    </section>
  );
}
