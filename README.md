# 혈압 + 식사 기록기

Android Chrome에서 설치해서 쓰는 PWA 앱입니다.
Google Sheets에 데이터를 동기화하고, 대시보드에서 추이를 확인합니다.

## 기능

| 페이지 | 기능 |
|--------|------|
| `index.html` | 혈압(수축기/이완기/맥박) 측정값 기록 |
| `food.html` | 식사 기록 (음식 검색 → 나트륨/칼로리 자동입력) |
| `dashboard.html` | 혈압 추이 차트 + 나트륨/칼로리 통계 |

---

## 1단계: Google Sheets + Apps Script 설정

### 1-1. Google Sheets 생성
1. [Google Sheets](https://sheets.google.com) 에서 빈 스프레드시트 생성
2. 이름: `혈압 기록` (아무 이름이나 가능)

### 1-2. Apps Script 설정
1. 스프레드시트 메뉴에서 **확장프로그램 > Apps Script** 클릭
2. 기본 코드 전체 삭제
3. `apps-script.js` 파일의 내용을 전체 복사해서 붙여넣기
4. **Ctrl+S** (저장)

### 1-3. 웹 앱 배포
1. 오른쪽 상단 **배포** 버튼 클릭
2. **새 배포** 선택
3. 유형 아이콘 클릭 → **웹 앱** 선택
4. 설정:
   - 설명: `혈압기록기` (자유)
   - **다음 사용자로 실행: 나 (내 Google 계정)**
   - **액세스 권한: 모든 사용자(익명 포함)**
5. **배포** 클릭
6. Google 계정 권한 허용
7. **웹 앱 URL** 복사 (예: `https://script.google.com/macros/s/ABC.../exec`)

---

## 2단계: 앱 호스팅

PWA는 **HTTPS**에서 실행해야 홈 화면에 추가할 수 있습니다.
아래 방법 중 하나를 선택하세요.

### 방법 A: GitHub Pages (권장, 무료)

1. GitHub 계정 없으면 [github.com](https://github.com)에서 가입
2. 새 리포지토리 생성 (예: `bp-tracker`)
3. 이 폴더의 파일들을 리포지토리에 업로드:
   - `index.html`
   - `food.html`
   - `dashboard.html`
   - `manifest.json`
   - `sw.js`
   - `foods-db.js`
4. 리포지토리 Settings > Pages > Source: `main` 브랜치 선택
5. URL 확인: `https://[사용자명].github.io/[리포이름]/`

### 방법 B: Netlify (드래그앤드롭, 무료)

1. [netlify.com](https://netlify.com) 가입
2. 대시보드에서 이 폴더를 드래그앤드롭
3. 자동으로 HTTPS URL 발급

### 방법 C: 로컬 테스트 (HTTPS 없이)

```bash
# Python 3 설치되어 있으면:
cd execution/bp-tracker
python3 -m http.server 8080
# http://localhost:8080 에서 테스트 (PWA 설치는 불가, 기능 테스트는 가능)
```

---

## 3단계: Android에 설치

1. Android Chrome에서 호스팅 URL 접속
2. 주소창 오른쪽 메뉴(⋮) 탭
3. **홈 화면에 추가** 선택
4. 이름 확인 후 **추가**
5. 앱 아이콘으로 실행 가능

---

## 4단계: 앱 초기 설정

1. 앱 실행 시 자동으로 설정 화면이 뜹니다
2. **Apps Script 웹 앱 URL** 입력 (1-3에서 복사한 URL)
3. **저장** 탭

이후부터 혈압/식사 기록 시 Google Sheets에 자동 동기화됩니다.

---

## 파일 구조

```
execution/bp-tracker/
├── index.html      ← 혈압 기록 (PWA 메인)
├── food.html       ← 식사 기록
├── dashboard.html  ← 통계 대시보드
├── foods-db.js     ← 한국 식품 영양 DB (약 80종)
├── manifest.json   ← PWA 설정
├── sw.js           ← 서비스워커 (오프라인 지원)
├── apps-script.js  ← Google Apps Script 백엔드
└── README.md       ← 이 파일
```

## Google Sheets 데이터 구조

앱을 사용하면 자동으로 두 시트가 생성됩니다.

**BloodPressure 시트:**
| datetime | systolic | diastolic | pulse | notes |
|----------|----------|-----------|-------|-------|

**FoodLog 시트:**
| datetime | meal | food_name | amount_g | calories | sodium | carbs | fat | sugar | protein | notes |
|----------|------|-----------|----------|----------|--------|-------|-----|-------|---------|-------|

---

## 나트륨 권장 섭취량

| 기관 | 하루 권장량 |
|------|-----------|
| WHO | 2,000mg 미만 |
| 한국 영양학회 | 2,000mg |
| 한국인 평균 섭취 | 약 3,500mg |

앱의 기준선은 **2,000mg (WHO 권장)** 입니다.

## 혈압 분류 기준 (AHA 2017)

| 분류 | 수축기 | 이완기 |
|------|-------|-------|
| 정상 | < 120 | < 80 |
| 주의혈압 | 120-129 | < 80 |
| 고혈압 1단계 | 130-139 | 80-89 |
| 고혈압 2단계 | ≥ 140 | ≥ 90 |
| 고혈압 위기 | > 180 | > 120 |
