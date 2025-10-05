# SEO 최적화 가이드

## 적용된 SEO 최적화 항목

### 1. 메타 태그

- ✅ Title, Description, Keywords
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Language 설정 (ko-KR)
- ✅ Robots 메타 태그

### 2. 구조화된 데이터 (JSON-LD)

- ✅ Organization Schema
- ✅ WebSite Schema
- ✅ Service Schema
- ✅ OfferCatalog Schema

### 3. 사이트맵 및 Robots

- ✅ sitemap.xml
- ✅ robots.txt
- ✅ 모든 주요 섹션 포함

### 4. PWA 지원

- ✅ manifest.json
- ✅ Service Worker (자동 생성)
- ✅ 오프라인 지원
- ✅ 캐싱 전략

### 5. 성능 최적화

- ✅ Lazy Loading
- ✅ 이미지 최적화
- ✅ 코드 스플리팅
- ✅ 리소스 캐싱

## 추가 작업 필요 항목

### 이미지 생성

다음 이미지 파일들을 생성해야 합니다:

1. **OG Image** (`public/og-image.png`)

   - 크기: 1200x630px
   - 용도: 소셜 미디어 공유 시 표시
   - 포함 내용: 로고, 주요 메시지, 배경

2. **Logo** (`public/logo.png`)

   - 크기: 512x512px
   - 투명 배경 PNG
   - 브랜드 로고

3. **App Icons**
   - `public/icon-192.png` (192x192px)
   - `public/icon-512.png` (512x512px)
   - `public/apple-touch-icon.png` (180x180px)

### Google Search Console 설정

1. https://search.google.com/search-console 방문
2. 속성 추가
3. 사이트맵 제출: `https://brand.sellobal.com/sitemap.xml`
4. URL 검사 요청

### Google Analytics 설정 (선택사항)

\`\`\`html

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

\`\`\`

### Naver Search Advisor (네이버 웹마스터 도구)

1. https://searchadvisor.naver.com/ 방문
2. 사이트 등록
3. 사이트맵 제출

## SEO 체크리스트

- [x] 메타 태그 최적화
- [x] Open Graph 태그
- [x] Twitter Card 태그
- [x] 구조화된 데이터 (JSON-LD)
- [x] robots.txt
- [x] sitemap.xml
- [x] manifest.json
- [x] PWA 지원
- [x] 시맨틱 HTML
- [ ] OG 이미지 생성
- [ ] 파비콘 아이콘 세트 생성
- [ ] Google Search Console 등록
- [ ] Naver Search Advisor 등록
- [ ] 페이지 로딩 속도 테스트
- [ ] 모바일 친화성 테스트

## 성능 테스트 도구

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/
- **Lighthouse**: Chrome DevTools 내장

## 추가 권장사항

1. **구조화된 데이터 검증**

   - https://search.google.com/test/rich-results

2. **메타 태그 미리보기**

   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

3. **사이트맵 검증**

   - https://www.xml-sitemaps.com/validate-xml-sitemap.html

4. **SSL 인증서 확인**

   - HTTPS 사용 필수

5. **모바일 최적화**
   - 반응형 디자인 확인
   - 터치 타겟 크기 확인 (최소 48x48px)
