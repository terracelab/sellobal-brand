import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);

    if (element) {
      // View Transitions API 지원 확인
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        // 미지원 브라우저는 일반 스크롤
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="text-2xl font-bold"
              style={{
                background: "var(--gradient-blue-sheen)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sellobal
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#service"
              onClick={(e) => handleNavClick(e, "#service")}
              className="text-neutral-600 hover:text-blue-600 transition-colors"
            >
              서비스 소개
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="text-neutral-600 hover:text-blue-600 transition-colors"
            >
              핵심 기능
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, "#process")}
              className="text-neutral-600 hover:text-blue-600 transition-colors"
            >
              진행 과정
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "#benefits")}
              className="text-neutral-600 hover:text-blue-600 transition-colors"
            >
              고객 혜택
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="button-accent"
            >
              무료 상담 신청
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-amber-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#service"
                onClick={(e) => handleNavClick(e, "#service")}
                className="block px-3 py-2 text-neutral-700 hover:text-amber-600"
              >
                서비스 소개
              </a>
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, "#features")}
                className="block px-3 py-2 text-neutral-700 hover:text-amber-600"
              >
                핵심 기능
              </a>
              <a
                href="#process"
                onClick={(e) => handleNavClick(e, "#process")}
                className="block px-3 py-2 text-neutral-700 hover:text-amber-600"
              >
                진행 과정
              </a>
              <a
                href="#benefits"
                onClick={(e) => handleNavClick(e, "#benefits")}
                className="block px-3 py-2 text-neutral-700 hover:text-amber-600"
              >
                고객 혜택
              </a>
              <div className="px-3 py-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="button-accent w-full justify-center"
                >
                  무료 상담 신청
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
