import { Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    products: "",
    monthlyRevenue: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        "https://api.terracelab.co.kr/api/sellobal/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            sourceUrl: window.location.href,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.",
        });
        // Reset form
        setFormData({
          company: "",
          name: "",
          phone: "",
          email: "",
          products: "",
          monthlyRevenue: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.message ||
            "상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "네트워크 오류가 발생했습니다. 인터넷 연결을 확인하고 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            해외 진출 무료 상담 신청
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            브랜드별 맞춤 해외 진출 전략을 제안드립니다. 전문 컨설턴트가 1:1로
            상담해드리니 부담 없이 문의하세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              상담 신청서
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    회사명 *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="회사명을 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    담당자명 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="담당자명을 입력하세요"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  주요 상품군 *
                </label>
                <input
                  type="text"
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="예: 화장품, 패션, 식품 등"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  월 평균 매출
                </label>
                <select
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                >
                  <option value="">선택하세요</option>
                  <option value="under-1000">1천만원 미만</option>
                  <option value="1000-5000">1천만원 - 5천만원</option>
                  <option value="5000-10000">5천만원 - 1억원</option>
                  <option value="over-10000">1억원 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  추가 문의사항
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="궁금한 점이나 상담받고 싶은 내용을 자유롭게 작성해주세요"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-accent text-lg py-4 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "전송 중..." : "무료 상담 신청하기"}
              </button>

              {submitStatus.type === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 text-center flex items-center justify-center gap-2">
                    <CheckCircle size={16} />
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {submitStatus.type === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800 text-center">
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {!submitStatus.type && (
                <p className="text-sm text-neutral-500 text-center">
                  상담 신청 후 1-2일 내에 전담 컨설턴트가 연락드립니다.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NjQ2NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Meeting"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  전문 컨설턴트와 상담
                </h3>
                <p className="text-sm text-white">
                  해외 진출 전략을 맞춤 제안해드립니다
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-neutral-900">
                다양한 상담 방법
              </h3>

              <div className="space-y-2">
                <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">
                      전화 상담
                    </div>
                    <div className="text-sm text-neutral-600">
                      0507-1361-3628
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">
                      카카오톡 상담
                    </div>
                    <div className="text-sm text-neutral-600">@terracelab</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">
                      이메일 상담
                    </div>
                    <div className="text-sm text-neutral-600">
                      contact@terracelab.co.kr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
              <h4 className="font-semibold text-neutral-900 mb-2">상담 혜택</h4>
              <div className="space-y-2">
                {[
                  "브랜드별 맞춤 해외 진출 전략 제안",
                  "시장 분석 및 타겟 고객 분석 리포트",
                  "예상 수익 및 ROI 계산서 제공",
                  "성공 사례 및 레퍼런스 공유",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
