import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{ background: 'var(--gradient-blue-sheen)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Sellobal
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#service" className="transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-link)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
              서비스 소개
            </a>
            <a href="#features" className="transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-link)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
              핵심 기능
            </a>
            <a href="#process" className="transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-link)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
              진행 과정
            </a>
            <a href="#benefits" className="transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-link)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
              고객 혜택
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="button-accent">
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
              <a href="#service" className="block px-3 py-2 text-neutral-700 hover:text-amber-600">
                서비스 소개
              </a>
              <a href="#features" className="block px-3 py-2 text-neutral-700 hover:text-amber-600">
                핵심 기능
              </a>
              <a href="#process" className="block px-3 py-2 text-neutral-700 hover:text-amber-600">
                진행 과정
              </a>
              <a href="#benefits" className="block px-3 py-2 text-neutral-700 hover:text-amber-600">
                고객 혜택
              </a>
              <div className="px-3 py-2">
                <a href="#contact" className="button-accent w-full justify-center">
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