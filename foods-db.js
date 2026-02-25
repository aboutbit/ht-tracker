// ============================================================
// 한국 식품 영양 데이터베이스 (1인분 기준)
// 출처: 식품의약품안전처 식품영양성분 DB 참고
// 단위: 칼로리(kcal), 나트륨(mg), 탄수화물/지방/당류/단백질(g), 칼륨(mg, 있는 경우만)
// ============================================================

const FOOD_DB = [
  // ── 밥/곡류 ──
  { name: "흰밥", cal: 313, na: 5,    carb: 69,  fat: 0.6, sugar: 0,  protein: 5.3, serving: 210, unit: "1공기" },
  { name: "잡곡밥", cal: 290, na: 5,   carb: 62,  fat: 1.5, sugar: 0,  protein: 7,   serving: 210, unit: "1공기" },
  { name: "볶음밥", cal: 420, na: 700, carb: 68,  fat: 12,  sugar: 2,  protein: 12,  serving: 250, unit: "1인분" },
  { name: "김밥", cal: 380,   na: 700, carb: 68,  fat: 8,   sugar: 3,  protein: 12,  serving: 250, unit: "1줄" },
  { name: "유부초밥", cal: 350, na: 600, carb: 65,  fat: 6,   sugar: 8,  protein: 10,  serving: 200, unit: "6개" },
  { name: "삼각김밥(참치마요)", cal: 185, na: 370, carb: 31, fat: 5, sugar: 1, protein: 6, serving: 115, unit: "1개" },
  { name: "삼각김밥(불고기)", cal: 165, na: 340, carb: 31, fat: 2, sugar: 2, protein: 6, serving: 105, unit: "1개" },

  // ── 국/찌개 ──
  { name: "김치찌개", cal: 200, na: 1400, carb: 12, fat: 9,  sugar: 3, protein: 14, serving: 300, unit: "1인분" },
  { name: "된장찌개", cal: 130, na: 1200, carb: 12, fat: 4,  sugar: 2, protein: 10, serving: 300, unit: "1인분" },
  { name: "순두부찌개", cal: 170, na: 1350, carb: 8, fat: 9,  sugar: 2, protein: 13, serving: 300, unit: "1인분" },
  { name: "부대찌개", cal: 380, na: 1800, carb: 28, fat: 18, sugar: 5, protein: 22, serving: 350, unit: "1인분" },
  { name: "설렁탕", cal: 350,  na: 1100, carb: 30, fat: 12, sugar: 2, protein: 28, serving: 600, unit: "1인분" },
  { name: "갈비탕", cal: 480,  na: 1200, carb: 30, fat: 22, sugar: 2, protein: 38, serving: 600, unit: "1인분" },
  { name: "해장국", cal: 280,  na: 1400, carb: 15, fat: 10, sugar: 2, protein: 25, serving: 600, unit: "1인분" },
  { name: "육개장", cal: 320,  na: 1800, carb: 18, fat: 14, sugar: 3, protein: 25, serving: 500, unit: "1인분" },
  { name: "삼계탕", cal: 680,  na: 900,  carb: 50, fat: 20, sugar: 3, protein: 52, serving: 800, unit: "1인분" },
  { name: "어묵탕", cal: 200,  na: 1500, carb: 25, fat: 5,  sugar: 4, protein: 12, serving: 400, unit: "1인분" },
  { name: "미역국", cal: 100,  na: 900,  carb: 5,  fat: 4,  sugar: 0, protein: 8,  serving: 300, unit: "1인분" },
  { name: "콩나물국", cal: 60, na: 800,  carb: 5,  fat: 1,  sugar: 0, protein: 4,  serving: 300, unit: "1인분" },

  // ── 한식 반찬/메인 ──
  { name: "비빔밥", cal: 550,   na: 800,  carb: 85, fat: 12, sugar: 5,  protein: 18, serving: 400, unit: "1인분" },
  { name: "제육볶음", cal: 380,  na: 1100, carb: 15, fat: 20, sugar: 5,  protein: 28, serving: 250, unit: "1인분" },
  { name: "불고기", cal: 280,    na: 650,  carb: 10, fat: 14, sugar: 5,  protein: 28, serving: 150, unit: "1인분" },
  { name: "삼겹살", cal: 600,    na: 200,  carb: 2,  fat: 52, sugar: 0,  protein: 34, serving: 200, unit: "1인분" },
  { name: "갈비찜", cal: 450,    na: 900,  carb: 20, fat: 22, sugar: 10, protein: 38, serving: 250, unit: "1인분" },
  { name: "닭갈비", cal: 350,    na: 850,  carb: 20, fat: 12, sugar: 6,  protein: 35, serving: 250, unit: "1인분" },
  { name: "닭볶음탕", cal: 420,  na: 950,  carb: 22, fat: 16, sugar: 6,  protein: 38, serving: 300, unit: "1인분" },
  { name: "계란찜", cal: 150,    na: 500,  carb: 3,  fat: 9,  sugar: 1,  protein: 13, serving: 150, unit: "1인분" },
  { name: "계란프라이", cal: 90, na: 130,  carb: 0.6, fat: 7, sugar: 0.1, protein: 6, serving: 60,  unit: "1개" },
  { name: "삶은달걀", cal: 77,   na: 62,   carb: 0.6, fat: 5, sugar: 0.1, protein: 6, serving: 60,  unit: "1개" },
  { name: "김치", cal: 30,       na: 600,  carb: 5,  fat: 0.5, sugar: 2, protein: 1.5, serving: 80, unit: "1접시" },
  { name: "깍두기", cal: 25,     na: 550,  carb: 5,  fat: 0.2, sugar: 2, protein: 1,  serving: 60,  unit: "1접시" },
  { name: "잡채", cal: 280,      na: 600,  carb: 38, fat: 10, sugar: 4,  protein: 8,  serving: 180, unit: "1인분" },

  // ── 분식/길거리 ──
  { name: "떡볶이", cal: 320,    na: 1100, carb: 65, fat: 4,  sugar: 15, protein: 8,  serving: 250, unit: "1인분" },
  { name: "순대", cal: 230,      na: 800,  carb: 23, fat: 10, sugar: 2,  protein: 12, serving: 150, unit: "1인분" },
  { name: "튀김(모둠)", cal: 350, na: 500, carb: 40, fat: 18, sugar: 2,  protein: 10, serving: 150, unit: "1인분" },
  { name: "도넛", cal: 290,      na: 270,  carb: 40, fat: 14, sugar: 16, protein: 4,  serving: 85,  unit: "1개" },

  // ── 면류 ──
  { name: "자장면", cal: 680,    na: 1400, carb: 110, fat: 15, sugar: 8, protein: 20, serving: 550, unit: "1인분" },
  { name: "짬뽕", cal: 580,      na: 2200, carb: 80,  fat: 14, sugar: 5, protein: 28, serving: 650, unit: "1인분" },
  { name: "냉면", cal: 500,      na: 1600, carb: 85,  fat: 8,  sugar: 5, protein: 18, serving: 600, unit: "1인분" },
  { name: "콩국수", cal: 420,    na: 700,  carb: 65,  fat: 8,  sugar: 2, protein: 20, serving: 550, unit: "1인분" },
  { name: "칼국수", cal: 520,    na: 1200, carb: 85,  fat: 8,  sugar: 3, protein: 18, serving: 600, unit: "1인분" },
  { name: "우동", cal: 480,      na: 1400, carb: 80,  fat: 6,  sugar: 4, protein: 16, serving: 600, unit: "1인분" },
  { name: "파스타(크림)", cal: 680, na: 800, carb: 75, fat: 28, sugar: 5, protein: 20, serving: 350, unit: "1인분" },
  { name: "파스타(토마토)", cal: 520, na: 750, carb: 78, fat: 14, sugar: 8, protein: 16, serving: 350, unit: "1인분" },

  // ── 라면 ──
  { name: "신라면", cal: 505,    na: 1790, carb: 75, fat: 16, sugar: 5, protein: 12, serving: 120, unit: "1봉지" },
  { name: "짜파게티", cal: 520,  na: 1300, carb: 78, fat: 17, sugar: 4, protein: 11, serving: 140, unit: "1봉지" },
  { name: "너구리", cal: 490,    na: 1600, carb: 71, fat: 16, sugar: 5, protein: 12, serving: 120, unit: "1봉지" },
  { name: "불닭볶음면", cal: 530, na: 1470, carb: 73, fat: 17, sugar: 3, protein: 13, serving: 140, unit: "1봉지" },
  { name: "진라면(순한)", cal: 500, na: 1700, carb: 72, fat: 16, sugar: 4, protein: 10, serving: 120, unit: "1봉지" },
  { name: "컵라면(신라면)", cal: 350, na: 1360, carb: 52, fat: 12, sugar: 3, protein: 8, serving: 86, unit: "1개" },

  // ── 패스트푸드/배달 ──
  { name: "치킨(후라이드) 반마리", cal: 800, na: 1200, carb: 25, fat: 48, sugar: 3, protein: 60, serving: 400, unit: "반마리" },
  { name: "치킨(양념) 반마리", cal: 850, na: 1400, carb: 45, fat: 42, sugar: 18, protein: 55, serving: 400, unit: "반마리" },
  { name: "피자(1조각)", cal: 280, na: 580,  carb: 35, fat: 10, sugar: 3, protein: 14, serving: 120, unit: "1조각" },
  { name: "햄버거(빅맥)", cal: 550, na: 1050, carb: 46, fat: 30, sugar: 9, protein: 25, serving: 213, unit: "1개" },
  { name: "햄버거(치킨버거)", cal: 490, na: 900, carb: 42, fat: 26, sugar: 7, protein: 22, serving: 195, unit: "1개" },
  { name: "프렌치프라이(M)", cal: 380, na: 290, carb: 48, fat: 18, sugar: 0.5, protein: 4, serving: 130, unit: "M사이즈" },
  { name: "탕수육", cal: 650,    na: 900,  carb: 60, fat: 28, sugar: 20, protein: 30, serving: 300, unit: "1인분" },
  { name: "돈까스", cal: 720,    na: 800,  carb: 60, fat: 35, sugar: 5,  protein: 35, serving: 300, unit: "1인분" },
  { name: "샌드위치", cal: 280,  na: 500,  carb: 35, fat: 10, sugar: 5,  protein: 14, serving: 180, unit: "1개" },
  { name: "토스트(계란)", cal: 250, na: 480, carb: 30, fat: 10, sugar: 3, protein: 10, serving: 150, unit: "1개" },
  { name: "샐러드", cal: 150,    na: 300,  carb: 12, fat: 8,  sugar: 5,  protein: 5,  serving: 200, unit: "1인분" },

  // ── 고기류 ──
  { name: "삼겹살(구이)", cal: 600, na: 200, carb: 2, fat: 52, sugar: 0, protein: 34, serving: 200, unit: "200g" },
  { name: "목살(구이)", cal: 480,  na: 200, carb: 1, fat: 38, sugar: 0, protein: 35, serving: 200, unit: "200g" },
  { name: "소고기(등심)", cal: 520, na: 120, carb: 0, fat: 40, sugar: 0, protein: 38, serving: 200, unit: "200g" },
  { name: "햄(2장)", cal: 100,    na: 500, carb: 2, fat: 7,  sugar: 1, protein: 7,   serving: 60,  unit: "2장" },
  { name: "소시지(1개)", cal: 120, na: 450, carb: 3, fat: 10, sugar: 2, protein: 6,  serving: 80,  unit: "1개" },

  // ── 빵/간식 ──
  { name: "식빵(2장)", cal: 160,  na: 240, carb: 29, fat: 2,  sugar: 4,  protein: 5,  serving: 70,  unit: "2장" },
  { name: "크로아상", cal: 260,   na: 400, carb: 28, fat: 14, sugar: 4,  protein: 5,  serving: 80,  unit: "1개" },
  { name: "바나나", cal: 85,      na: 1,   carb: 22, fat: 0.3, sugar: 14, protein: 1,  potassium: 358, serving: 100, unit: "1개" },
  { name: "사과", cal: 55,        na: 1,   carb: 15, fat: 0.2, sugar: 11, protein: 0.3, serving: 130, unit: "1개" },
  { name: "과자(새우깡)", cal: 270, na: 450, carb: 42, fat: 10, sugar: 3, protein: 4, serving: 90,  unit: "1봉지" },
  { name: "초콜릿바", cal: 230,   na: 85,  carb: 28, fat: 12, sugar: 22, protein: 3,  serving: 50,  unit: "1개" },
  { name: "아이스크림(바", cal: 150, na: 60, carb: 22, fat: 7, sugar: 18, protein: 2, serving: 80,  unit: "1개" },

  // ── 음료 ──
  { name: "콜라(캔)", cal: 140,   na: 40,  carb: 38, fat: 0, sugar: 38, protein: 0, serving: 355, unit: "355ml" },
  { name: "사이다(캔)", cal: 130,  na: 25,  carb: 34, fat: 0, sugar: 34, protein: 0, serving: 355, unit: "355ml" },
  { name: "오렌지주스", cal: 110,  na: 5,   carb: 26, fat: 0, sugar: 22, protein: 1, serving: 240, unit: "1컵" },
  { name: "커피믹스", cal: 56,    na: 65,  carb: 10, fat: 1, sugar: 8,  protein: 0.6, serving: 12, unit: "1봉지" },
  { name: "아메리카노", cal: 10,  na: 10,  carb: 2,  fat: 0, sugar: 0,  protein: 0.3, serving: 400, unit: "1잔" },
  { name: "라떼", cal: 190,       na: 130, carb: 22, fat: 7, sugar: 18, protein: 8,  serving: 400, unit: "1잔" },
  { name: "우유(200ml)", cal: 130, na: 90, carb: 9.6, fat: 7, sugar: 9, protein: 6.6, serving: 200, unit: "200ml" },
  { name: "두유(무가당)", cal: 90, na: 60, carb: 6,  fat: 4, sugar: 1,  protein: 6,  serving: 190, unit: "1팩" },

  // ── 편의점 도시락/즉석식 ──
  { name: "편의점 도시락", cal: 650, na: 1300, carb: 90, fat: 18, sugar: 6, protein: 22, serving: 420, unit: "1개" },
  { name: "컵밥(불고기)", cal: 480, na: 900, carb: 78, fat: 10, sugar: 5, protein: 15, serving: 280, unit: "1개" },
  { name: "즉석카레", cal: 280,    na: 900,  carb: 42, fat: 8,  sugar: 5, protein: 8,  serving: 200, unit: "1팩" },
  { name: "즉석짜장", cal: 240,    na: 800,  carb: 40, fat: 6,  sugar: 6, protein: 8,  serving: 200, unit: "1팩" },

  // ── 국밥류 ──
  { name: "돼지국밥", cal: 500, na: 1850, carb: 55, fat: 18, sugar: 2, protein: 28, serving: 700, unit: "1인분" },
  { name: "순대국밥", cal: 480, na: 1700, carb: 55, fat: 16, sugar: 2, protein: 25, serving: 700, unit: "1인분" },
  { name: "소머리국밥", cal: 520, na: 1500, carb: 55, fat: 20, sugar: 2, protein: 32, serving: 700, unit: "1인분" },
  { name: "뼈다귀해장국", cal: 420, na: 1600, carb: 20, fat: 22, sugar: 1, protein: 38, serving: 650, unit: "1인분" },
  { name: "따로국밥", cal: 480, na: 1400, carb: 55, fat: 14, sugar: 2, protein: 26, serving: 700, unit: "1인분" },
  { name: "콩나물국밥", cal: 380, na: 1300, carb: 58, fat: 6,  sugar: 1, protein: 16, serving: 650, unit: "1인분" },

  // ── 탕/전골 ──
  { name: "감자탕", cal: 520, na: 1900, carb: 30, fat: 28, sugar: 3, protein: 38, serving: 600, unit: "1인분" },
  { name: "추어탕", cal: 280, na: 1600, carb: 18, fat: 10, sugar: 2, protein: 28, serving: 500, unit: "1인분" },
  { name: "동태탕", cal: 200, na: 1400, carb: 10, fat: 6,  sugar: 1, protein: 28, serving: 500, unit: "1인분" },
  { name: "알탕",   cal: 180, na: 1500, carb: 8,  fat: 5,  sugar: 1, protein: 22, serving: 400, unit: "1인분" },
  { name: "대구탕", cal: 200, na: 1200, carb: 8,  fat: 5,  sugar: 1, protein: 30, serving: 500, unit: "1인분" },
  { name: "아귀찜", cal: 320, na: 1800, carb: 20, fat: 12, sugar: 4, protein: 35, serving: 400, unit: "1인분" },
  { name: "부대전골", cal: 420, na: 2000, carb: 35, fat: 20, sugar: 5, protein: 25, serving: 450, unit: "1인분" },

  // ── 보쌈/족발/곱창 ──
  { name: "보쌈",  cal: 480, na: 900,  carb: 10, fat: 32, sugar: 3, protein: 42, serving: 250, unit: "1인분" },
  { name: "족발",  cal: 550, na: 1000, carb: 12, fat: 38, sugar: 4, protein: 45, serving: 250, unit: "1인분" },
  { name: "곱창",  cal: 380, na: 900,  carb: 8,  fat: 28, sugar: 1, protein: 28, serving: 200, unit: "1인분" },
  { name: "대창",  cal: 480, na: 850,  carb: 5,  fat: 40, sugar: 1, protein: 30, serving: 200, unit: "1인분" },
  { name: "막창",  cal: 420, na: 850,  carb: 5,  fat: 34, sugar: 1, protein: 32, serving: 200, unit: "1인분" },

  // ── 볶음류 ──
  { name: "해산물볶음밥", cal: 500, na: 800, carb: 72, fat: 16, sugar: 3, protein: 22, serving: 350, unit: "1인분" },
  { name: "오징어볶음",  cal: 280, na: 1200, carb: 18, fat: 10, sugar: 6, protein: 28, serving: 250, unit: "1인분" },
  { name: "낙지볶음",    cal: 260, na: 1300, carb: 16, fat: 8,  sugar: 5, protein: 28, serving: 250, unit: "1인분" },
  { name: "쭈꾸미볶음",  cal: 270, na: 1250, carb: 16, fat: 9,  sugar: 5, protein: 28, serving: 250, unit: "1인분" },
  { name: "해물볶음",    cal: 300, na: 1100, carb: 18, fat: 10, sugar: 4, protein: 30, serving: 300, unit: "1인분" },
  { name: "두루치기",    cal: 360, na: 1100, carb: 14, fat: 18, sugar: 4, protein: 30, serving: 250, unit: "1인분" },

  // ── 구이/부침 ──
  { name: "해물파전",  cal: 420, na: 800,  carb: 50, fat: 16, sugar: 3, protein: 18, serving: 300, unit: "1인분" },
  { name: "김치전",    cal: 350, na: 750,  carb: 45, fat: 14, sugar: 3, protein: 10, serving: 250, unit: "1인분" },
  { name: "빈대떡",    cal: 380, na: 600,  carb: 38, fat: 18, sugar: 2, protein: 16, serving: 250, unit: "1인분" },
  { name: "쌈밥",      cal: 480, na: 700,  carb: 60, fat: 16, sugar: 3, protein: 24, serving: 350, unit: "1인분" },
  { name: "수육",      cal: 420, na: 700,  carb: 4,  fat: 30, sugar: 1, protein: 36, serving: 200, unit: "1인분" },

  // ── 만두/죽 ──
  { name: "군만두",  cal: 320, na: 700, carb: 38, fat: 14, sugar: 2, protein: 12, serving: 200, unit: "1인분(6개)" },
  { name: "물만두",  cal: 260, na: 600, carb: 34, fat: 8,  sugar: 1, protein: 12, serving: 200, unit: "1인분(6개)" },
  { name: "찐만두",  cal: 240, na: 580, carb: 32, fat: 7,  sugar: 1, protein: 11, serving: 180, unit: "1인분(6개)" },
  { name: "전복죽",  cal: 280, na: 600, carb: 50, fat: 4,  sugar: 1, protein: 14, serving: 350, unit: "1인분" },
  { name: "야채죽",  cal: 180, na: 400, carb: 36, fat: 2,  sugar: 2, protein: 5,  serving: 350, unit: "1인분" },
  { name: "쇠고기죽", cal: 250, na: 500, carb: 40, fat: 5, sugar: 1, protein: 14, serving: 350, unit: "1인분" },
  { name: "닭죽",    cal: 230, na: 480, carb: 38, fat: 4,  sugar: 1, protein: 14, serving: 350, unit: "1인분" },

  // ── 해산물 ──
  { name: "회(모둠)",      cal: 280, na: 300, carb: 4,  fat: 8,  sugar: 0, protein: 45, serving: 250, unit: "1인분" },
  { name: "초밥(모둠)",    cal: 480, na: 900, carb: 80, fat: 6,  sugar: 4, protein: 24, serving: 300, unit: "1인분" },
  { name: "새우튀김",      cal: 320, na: 650, carb: 28, fat: 16, sugar: 1, protein: 18, serving: 200, unit: "1인분" },
  { name: "꽃게탕",        cal: 250, na: 1500, carb: 10, fat: 8, sugar: 1, protein: 32, serving: 500, unit: "1인분" },
  { name: "간장게장(1마리)", cal: 160, na: 1800, carb: 4, fat: 6, sugar: 1, protein: 22, serving: 150, unit: "1마리" },

  // ── 분식 추가 ──
  { name: "라볶이",      cal: 500, na: 1400, carb: 90, fat: 10, sugar: 18, protein: 14, serving: 350, unit: "1인분" },
  { name: "쌀떡볶이",    cal: 350, na: 1000, carb: 72, fat: 4,  sugar: 14, protein: 8,  serving: 250, unit: "1인분" },
  { name: "즉석떡볶이",  cal: 420, na: 1200, carb: 76, fat: 8,  sugar: 16, protein: 12, serving: 300, unit: "1인분" },
  { name: "핫도그",      cal: 280, na: 450,  carb: 32, fat: 14, sugar: 4,  protein: 8,  serving: 130, unit: "1개" },
  { name: "붕어빵(2개)", cal: 160, na: 130,  carb: 30, fat: 3,  sugar: 10, protein: 4,  serving: 90,  unit: "2개" },

  // ── 전통 한과 ──
  { name: "약과",           cal: 215, na: 28,  carb: 35, fat: 8,   sugar: 17, protein: 2,   serving: 50,  unit: "1개" },
  { name: "유과",           cal: 135, na: 24,  carb: 22, fat: 5,   sugar: 9,  protein: 1.2, serving: 30,  unit: "1개" },
  { name: "강정(쌀)",       cal: 200, na: 50,  carb: 42, fat: 4,   sugar: 20, protein: 3,   serving: 50,  unit: "1개" },
  { name: "깨강정",         cal: 240, na: 80,  carb: 32, fat: 12,  sugar: 18, protein: 5,   serving: 50,  unit: "1개" },
  { name: "한과(모듬)",     cal: 430, na: 55,  carb: 70, fat: 16,  sugar: 34, protein: 4,   serving: 100, unit: "100g" },
  { name: "정과(연근)",     cal: 280, na: 10,  carb: 70, fat: 0.2, sugar: 65, protein: 1,   serving: 80,  unit: "1접시" },
  { name: "식혜(전통)",     cal: 160, na: 30,  carb: 42, fat: 0,   sugar: 40, protein: 1,   serving: 300, unit: "1컵" },

  // ── 떡류 ──
  { name: "인절미",         cal: 330, na: 8,   carb: 74, fat: 1.5, sugar: 5,  protein: 6,   serving: 150, unit: "1인분" },
  { name: "찹쌀떡",         cal: 156, na: 6,   carb: 35, fat: 0.6, sugar: 9,  protein: 2.4, serving: 60,  unit: "1개" },
  { name: "백설기",         cal: 210, na: 5,   carb: 49, fat: 0.5, sugar: 5,  protein: 3,   serving: 100, unit: "1조각" },
  { name: "꿀떡",           cal: 112, na: 6,   carb: 26, fat: 0.4, sugar: 10, protein: 1.2, serving: 40,  unit: "1개" },
  { name: "송편",           cal: 88,  na: 4,   carb: 20, fat: 0.6, sugar: 3,  protein: 1.6, serving: 40,  unit: "1개" },
  { name: "시루떡(팥)",     cal: 200, na: 10,  carb: 45, fat: 0.5, sugar: 6,  protein: 4,   serving: 100, unit: "1조각" },
  { name: "증편",           cal: 190, na: 8,   carb: 44, fat: 0.5, sugar: 4,  protein: 3,   serving: 100, unit: "1조각" },
  { name: "떡(가래떡)",     cal: 190, na: 5,   carb: 44, fat: 0.4, sugar: 0,  protein: 3,   serving: 100, unit: "100g" },
  { name: "찰떡파이",       cal: 160, na: 70,  carb: 26, fat: 4.5, sugar: 12, protein: 2.5, serving: 40,  unit: "1개" },

  // ── 봉지과자/스낵 ──
  { name: "포카칩",         cal: 265, na: 220, carb: 31, fat: 14,  sugar: 1,  protein: 2.5, serving: 50,  unit: "1봉지" },
  { name: "오징어집",       cal: 240, na: 375, carb: 35, fat: 9,   sugar: 2.5,protein: 4,   serving: 50,  unit: "1봉지" },
  { name: "꼬깔콘",         cal: 330, na: 320, carb: 47, fat: 13,  sugar: 5,  protein: 4,   serving: 67,  unit: "1봉지" },
  { name: "죠리퐁",         cal: 299, na: 130, carb: 52, fat: 6.5, sugar: 13, protein: 3.9, serving: 65,  unit: "1봉지" },
  { name: "맛동산",         cal: 450, na: 180, carb: 63, fat: 20,  sugar: 18, protein: 5.4, serving: 90,  unit: "1봉지" },
  { name: "자갈치",         cal: 235, na: 300, carb: 36, fat: 8,   sugar: 2,  protein: 4,   serving: 50,  unit: "1봉지" },
  { name: "고구마깡",       cal: 235, na: 190, carb: 37, fat: 7,   sugar: 7.5,protein: 3,   serving: 50,  unit: "1봉지" },
  { name: "콘칩",           cal: 245, na: 240, carb: 32, fat: 11,  sugar: 1.5,protein: 3.5, serving: 50,  unit: "1봉지" },
  { name: "양파링",         cal: 250, na: 300, carb: 34, fat: 11,  sugar: 4,  protein: 3.5, serving: 50,  unit: "1봉지" },
  { name: "꼬북칩",         cal: 270, na: 280, carb: 35, fat: 12,  sugar: 3,  protein: 3,   serving: 50,  unit: "1봉지" },
  { name: "포스틱",         cal: 260, na: 350, carb: 34, fat: 12,  sugar: 2,  protein: 4.5, serving: 50,  unit: "1봉지" },
  { name: "칸쵸",           cal: 270, na: 120, carb: 40, fat: 10,  sugar: 22, protein: 5,   serving: 57,  unit: "1봉지" },
  { name: "빠다코코낫",     cal: 450, na: 360, carb: 58, fat: 20,  sugar: 18, protein: 6.3, serving: 90,  unit: "1봉지" },
  { name: "에이스크래커",   cal: 288, na: 360, carb: 40, fat: 12,  sugar: 2,  protein: 4.8, serving: 60,  unit: "1봉지" },
  { name: "버터링",         cal: 300, na: 210, carb: 39, fat: 14,  sugar: 12, protein: 4.2, serving: 60,  unit: "1봉지" },
  { name: "리츠크래커(5개)",cal: 122, na: 133, carb: 16, fat: 5.5, sugar: 1.8,protein: 1.8, serving: 25,  unit: "5개" },
  { name: "다이제스티브(2개)",cal:138, na: 84,  carb: 21, fat: 5.4, sugar: 6,  protein: 2.4, serving: 30,  unit: "2개" },
  { name: "오레오(3개)",    cal: 160, na: 143, carb: 24, fat: 6.8, sugar: 12, protein: 1.7, serving: 34,  unit: "3개" },
  { name: "마리비스킷",     cal: 176, na: 144, carb: 29, fat: 5.6, sugar: 5,  protein: 2.8, serving: 40,  unit: "1봉지" },
  { name: "쫀디기",         cal: 250, na: 200, carb: 50, fat: 4,   sugar: 20, protein: 4,   serving: 60,  unit: "1봉지" },

  // ── 초콜릿/캔디 ──
  { name: "가나초콜릿",     cal: 232, na: 26,  carb: 25, fat: 13,  sugar: 21, protein: 3,   serving: 44,  unit: "1개" },
  { name: "크런키",         cal: 238, na: 35,  carb: 26, fat: 12,  sugar: 18, protein: 3.5, serving: 44,  unit: "1개" },
  { name: "빼빼로(초코)",   cal: 291, na: 145, carb: 40, fat: 12,  sugar: 21, protein: 3.5, serving: 58,  unit: "1갑" },
  { name: "빼빼로(아몬드)", cal: 296, na: 116, carb: 35, fat: 15,  sugar: 18, protein: 5.2, serving: 58,  unit: "1갑" },
  { name: "초코송이",       cal: 254, na: 54,  carb: 38, fat: 9.7, sugar: 22, protein: 2.7, serving: 54,  unit: "1봉지" },
  { name: "허쉬키세스(5개)",cal: 159, na: 27,  carb: 17, fat: 9,   sugar: 15, protein: 2.4, serving: 30,  unit: "5개" },
  { name: "마이쮸",         cal: 380, na: 30,  carb: 90, fat: 2,   sugar: 60, protein: 1,   serving: 100, unit: "1봉지" },
  { name: "하리보젤리",     cal: 165, na: 5,   carb: 38, fat: 0,   sugar: 23, protein: 3.5, serving: 50,  unit: "50g" },
  { name: "캐러멜(5개)",    cal: 200, na: 150, carb: 40, fat: 5,   sugar: 35, protein: 1.5, serving: 50,  unit: "5개" },
  { name: "젤리(곰돌이)",   cal: 165, na: 10,  carb: 38, fat: 0.5, sugar: 25, protein: 4,   serving: 50,  unit: "50g" },
  { name: "사탕(1개)",      cal: 25,  na: 5,   carb: 6,  fat: 0,   sugar: 5,  protein: 0,   serving: 7,   unit: "1개" },

  // ── 아이스크림류 ──
  { name: "메로나",         cal: 110, na: 40,  carb: 22, fat: 2,   sugar: 18, protein: 1,   serving: 70,  unit: "1개" },
  { name: "월드콘",         cal: 200, na: 70,  carb: 28, fat: 8,   sugar: 18, protein: 3,   serving: 140, unit: "1개" },
  { name: "누가바",         cal: 170, na: 70,  carb: 28, fat: 5,   sugar: 20, protein: 3,   serving: 120, unit: "1개" },
  { name: "돼지바",         cal: 190, na: 80,  carb: 28, fat: 7,   sugar: 18, protein: 3,   serving: 125, unit: "1개" },
  { name: "스크류바",       cal: 70,  na: 20,  carb: 17, fat: 0,   sugar: 13, protein: 0.5, serving: 60,  unit: "1개" },
  { name: "빠삐코",         cal: 80,  na: 25,  carb: 18, fat: 1,   sugar: 14, protein: 0.5, serving: 65,  unit: "1개" },
  { name: "바밤바",         cal: 160, na: 60,  carb: 26, fat: 5,   sugar: 18, protein: 2,   serving: 105, unit: "1개" },
  { name: "설레임",         cal: 90,  na: 30,  carb: 21, fat: 0.5, sugar: 17, protein: 0.5, serving: 100, unit: "1개" },
  { name: "부라보콘",       cal: 200, na: 80,  carb: 30, fat: 8,   sugar: 20, protein: 3,   serving: 140, unit: "1개" },
  { name: "죠스바",         cal: 90,  na: 30,  carb: 21, fat: 0.5, sugar: 14, protein: 0.5, serving: 90,  unit: "1개" },
  { name: "탱크보이",       cal: 100, na: 35,  carb: 23, fat: 1,   sugar: 18, protein: 1,   serving: 110, unit: "1개" },
  { name: "투게더(1인분)",  cal: 270, na: 90,  carb: 35, fat: 13,  sugar: 26, protein: 4,   serving: 150, unit: "1인분" },
  { name: "비비빅",         cal: 190, na: 70,  carb: 30, fat: 6,   sugar: 20, protein: 3,   serving: 130, unit: "1개" },
  { name: "구구콘",         cal: 210, na: 75,  carb: 30, fat: 9,   sugar: 20, protein: 3,   serving: 148, unit: "1개" },

  // ── 박스 케이크 과자 (1개 / 1박스 구분) ──
  { name: "몽쉘(1개)",          cal: 161, na: 67,  carb: 22, fat: 7.1, sugar: 14, protein: 2.2, serving: 38,  unit: "1개" },
  { name: "몽쉘(1박스/6개)",    cal: 966, na: 402, carb: 132,fat: 43, sugar: 84, protein: 13,  serving: 228, unit: "1박스(6개)" },
  { name: "오예스(1개)",        cal: 193, na: 67,  carb: 27, fat: 7.7, sugar: 16, protein: 2.6, serving: 42,  unit: "1개" },
  { name: "오예스(1박스/6개)",  cal: 1158,na: 402, carb: 162,fat: 46, sugar: 96, protein: 16,  serving: 252, unit: "1박스(6개)" },
  { name: "카스타드(1개)",      cal: 140, na: 65,  carb: 20, fat: 5.1, sugar: 12, protein: 2.3, serving: 38,  unit: "1개" },
  { name: "카스타드(1박스/6개)",cal: 840, na: 390, carb: 120,fat: 31, sugar: 72, protein: 14,  serving: 228, unit: "1박스(6개)" },
  { name: "빅파이(1개)",        cal: 200, na: 80,  carb: 28, fat: 8,   sugar: 16, protein: 3,   serving: 52,  unit: "1개" },
  { name: "빅파이(1박스/6개)",  cal: 1200,na: 480, carb: 168,fat: 48, sugar: 96, protein: 18,  serving: 312, unit: "1박스(6개)" },
  { name: "초코파이(1박스/12개)",cal:2040,na: 840, carb: 324,fat: 72, sugar: 216,protein: 24,  serving: 468, unit: "1박스(12개)" },
  { name: "찰떡오예스(1개)",    cal: 180, na: 55,  carb: 30, fat: 5.5, sugar: 14, protein: 2,   serving: 45,  unit: "1개" },
  { name: "후렌치파이(1개)",    cal: 300, na: 160, carb: 39, fat: 14,  sugar: 15, protein: 3.7, serving: 64,  unit: "1개" },
  { name: "후렌치파이(1봉지/3개)",cal:900,na: 480, carb: 117,fat: 42, sugar: 45, protein: 11,  serving: 192, unit: "1봉지(3개)" },

  // ── 롯데 스낵 ──
  { name: "몽쉘초코(1개)",   cal: 161, na: 67,  carb: 22, fat: 7.1, sugar: 14, protein: 2.2, serving: 38,  unit: "1개" },
  { name: "칙촉",            cal: 272, na: 171, carb: 36, fat: 12,  sugar: 18, protein: 3.3, serving: 55,  unit: "1봉지" },
  { name: "빈츠",            cal: 229, na: 133, carb: 30, fat: 10.5,sugar: 14, protein: 3.2, serving: 45,  unit: "1봉지" },
  { name: "제크",            cal: 390, na: 480, carb: 54, fat: 16,  sugar: 4,  protein: 6,   serving: 80,  unit: "1봉지" },
  { name: "롯데샌드",        cal: 360, na: 300, carb: 52, fat: 14,  sugar: 20, protein: 5,   serving: 80,  unit: "1봉지" },
  { name: "치토스",          cal: 265, na: 310, carb: 30, fat: 14,  sugar: 2,  protein: 4,   serving: 50,  unit: "1봉지" },
  { name: "꽃게랑",          cal: 230, na: 320, carb: 32, fat: 9,   sugar: 2,  protein: 3.5, serving: 50,  unit: "1봉지" },
  { name: "목캔디(1개)",     cal: 15,  na: 2,   carb: 4,  fat: 0,   sugar: 3,  protein: 0,   serving: 4,   unit: "1개" },
  { name: "웰치스구미",      cal: 180, na: 10,  carb: 44, fat: 0,   sugar: 32, protein: 1.5, serving: 50,  unit: "1봉지" },

  // ── 오리온 스낵 ──
  { name: "고래밥",          cal: 178, na: 280, carb: 28, fat: 5.5, sugar: 3,  protein: 3,   serving: 40,  unit: "1봉지" },
  { name: "왕고래밥",        cal: 220, na: 360, carb: 35, fat: 7,   sugar: 4,  protein: 3.5, serving: 50,  unit: "1봉지" },
  { name: "마가렛트",        cal: 270, na: 180, carb: 36, fat: 12,  sugar: 12, protein: 3,   serving: 54,  unit: "1봉지" },
  { name: "왕꿈틀이",        cal: 200, na: 120, carb: 43, fat: 2,   sugar: 20, protein: 2,   serving: 50,  unit: "1봉지" },
  { name: "눈을감자",        cal: 255, na: 280, carb: 33, fat: 12,  sugar: 2,  protein: 3,   serving: 50,  unit: "1봉지" },
  { name: "도도한나쵸",      cal: 255, na: 240, carb: 34, fat: 11,  sugar: 2,  protein: 3.5, serving: 50,  unit: "1봉지" },
  { name: "쉘위",            cal: 340, na: 110, carb: 44, fat: 16,  sugar: 24, protein: 4,   serving: 65,  unit: "1봉지" },

  // ── 해태 스낵 ──
  { name: "홈런볼",          cal: 235, na: 140, carb: 30, fat: 10.6,sugar: 14, protein: 2.5, serving: 46,  unit: "1봉지" },
  { name: "허니버터칩",      cal: 316, na: 292, carb: 39, fat: 15.4,sugar: 8.5,protein: 3.8, serving: 60,  unit: "1봉지" },
  { name: "누네띠네",        cal: 280, na: 180, carb: 36, fat: 13,  sugar: 15, protein: 3,   serving: 54,  unit: "1봉지" },
  { name: "자유시간",        cal: 600, na: 200, carb: 72, fat: 30,  sugar: 35, protein: 8,   serving: 116, unit: "1봉지" },
  { name: "에이스(해태)",    cal: 230, na: 300, carb: 31, fat: 10,  sugar: 2,  protein: 3.5, serving: 50,  unit: "1봉지" },

  // ── 크라운 스낵 ──
  { name: "쿠크다스",        cal: 380, na: 180, carb: 46, fat: 19,  sugar: 20, protein: 5,   serving: 72,  unit: "1봉지" },
  { name: "웨하스",          cal: 500, na: 100, carb: 62, fat: 24,  sugar: 25, protein: 5,   serving: 96,  unit: "1봉지" },
  { name: "화이트하임",      cal: 370, na: 80,  carb: 46, fat: 18,  sugar: 20, protein: 5,   serving: 72,  unit: "1봉지" },
  { name: "초코하임",        cal: 380, na: 120, carb: 48, fat: 19,  sugar: 22, protein: 5,   serving: 72,  unit: "1봉지" },
  { name: "참크래커",        cal: 350, na: 520, carb: 50, fat: 13,  sugar: 3,  protein: 6.5, serving: 75,  unit: "1봉지" },
  { name: "버터와플",        cal: 390, na: 200, carb: 52, fat: 17,  sugar: 18, protein: 5,   serving: 80,  unit: "1봉지" },

  // ── 농심 스낵 추가 ──
  { name: "바나나킥",        cal: 225, na: 260, carb: 30, fat: 10,  sugar: 8,  protein: 2,   serving: 45,  unit: "1봉지" },
  { name: "닭다리(과자)",    cal: 240, na: 350, carb: 32, fat: 10,  sugar: 4,  protein: 4,   serving: 50,  unit: "1봉지" },
  { name: "아몬드새우깡",    cal: 255, na: 280, carb: 33, fat: 12,  sugar: 2,  protein: 4.5, serving: 55,  unit: "1봉지" },
  { name: "빠새",            cal: 270, na: 320, carb: 36, fat: 12,  sugar: 3,  protein: 4,   serving: 55,  unit: "1봉지" },

  // ── 전통/기타 과자 ──
  { name: "연양갱",          cal: 180, na: 5,   carb: 43, fat: 0.5, sugar: 30, protein: 2,   serving: 55,  unit: "1개" },
  { name: "계란과자",        cal: 120, na: 60,  carb: 22, fat: 2.5, sugar: 8,  protein: 3,   serving: 30,  unit: "1봉지" },
  { name: "건빵",            cal: 280, na: 350, carb: 54, fat: 4,   sugar: 5,  protein: 7,   serving: 70,  unit: "1봉지" },
  { name: "뻥튀기",          cal: 170, na: 5,   carb: 38, fat: 0.5, sugar: 0.5,protein: 3,   serving: 50,  unit: "1봉지" },
  { name: "별뽀빠이",        cal: 130, na: 110, carb: 22, fat: 3.5, sugar: 5,  protein: 2.5, serving: 35,  unit: "1봉지" },

  // ── 수입 초콜릿 바 ──
  { name: "킷캣",            cal: 220, na: 55,  carb: 28, fat: 11,  sugar: 22, protein: 3,   serving: 45,  unit: "1개(4조각)" },
  { name: "트윅스",          cal: 250, na: 115, carb: 34, fat: 12,  sugar: 25, protein: 2.5, serving: 50,  unit: "1개" },
  { name: "스니커즈",        cal: 250, na: 125, carb: 33, fat: 12,  sugar: 27, protein: 4.5, serving: 52,  unit: "1개" },
  { name: "초코바(마스)",    cal: 228, na: 80,  carb: 35, fat: 9,   sugar: 28, protein: 2.5, serving: 51,  unit: "1개" },
  { name: "페레로로쉐(3개)", cal: 222, na: 27,  carb: 22, fat: 14,  sugar: 18, protein: 3.6, serving: 37.5,unit: "3개" },
  { name: "토블론",          cal: 210, na: 25,  carb: 26, fat: 11,  sugar: 23, protein: 3,   serving: 40,  unit: "1조각" },
  { name: "킨더초콜릿",      cal: 220, na: 60,  carb: 24, fat: 12,  sugar: 22, protein: 4.5, serving: 37,  unit: "1개(2조각)" },

  // ── 팝콘 ──
  { name: "팝콘(영화관 M)",   cal: 380, na: 500, carb: 55, fat: 18,  sugar: 5,  protein: 5,   serving: 100, unit: "M사이즈" },
  { name: "팝콘(전자레인지)", cal: 350, na: 450, carb: 48, fat: 16,  sugar: 2,  protein: 6,   serving: 100, unit: "1봉지" },
  { name: "버터팝콘(편의점)", cal: 150, na: 200, carb: 20, fat: 7,   sugar: 2,  protein: 2,   serving: 50,  unit: "1봉지" },

  // ── 견과류 ──
  { name: "아몬드(무염)",     cal: 164, na: 0,   carb: 6,  fat: 14,  sugar: 1,  protein: 6,   serving: 28,  unit: "1줌(28g)" },
  { name: "아몬드(허니버터)", cal: 178, na: 80,  carb: 12, fat: 14,  sugar: 8,  protein: 5,   serving: 28,  unit: "1줌(28g)" },
  { name: "호두",             cal: 185, na: 0,   carb: 4,  fat: 18,  sugar: 0.5,protein: 4,   serving: 28,  unit: "1줌(28g)" },
  { name: "피스타치오",       cal: 160, na: 0,   carb: 8,  fat: 13,  sugar: 2,  protein: 6,   serving: 28,  unit: "1줌(28g)" },
  { name: "캐슈넛",           cal: 157, na: 5,   carb: 9,  fat: 12,  sugar: 2,  protein: 5,   serving: 28,  unit: "1줌(28g)" },
  { name: "마카다미아",       cal: 204, na: 1,   carb: 4,  fat: 21,  sugar: 1,  protein: 2,   serving: 28,  unit: "1줌(28g)" },

  // ── 아이스크림 추가 ──
  { name: "수박바",           cal: 80,  na: 25,  carb: 20, fat: 0.5, sugar: 14, protein: 0.3, serving: 75,  unit: "1개" },
  { name: "참붕어싸만코",     cal: 190, na: 75,  carb: 28, fat: 7,   sugar: 18, protein: 3,   serving: 140, unit: "1개" },
  { name: "폴라포",           cal: 90,  na: 30,  carb: 22, fat: 0.5, sugar: 16, protein: 0.5, serving: 95,  unit: "1개" },
  { name: "와삭바",           cal: 170, na: 65,  carb: 27, fat: 6,   sugar: 16, protein: 2.5, serving: 120, unit: "1개" },
  { name: "더위사냥",         cal: 100, na: 35,  carb: 24, fat: 0.5, sugar: 18, protein: 0.5, serving: 105, unit: "1개" },
  { name: "하드(일반)",       cal: 100, na: 30,  carb: 24, fat: 0.5, sugar: 18, protein: 0.5, serving: 90,  unit: "1개" },

  // ── 일식 ──
  { name: "규동(소고기덮밥)",  cal: 650, na: 900,  carb: 85, fat: 20, sugar: 8,  protein: 28, serving: 400, unit: "1인분" },
  { name: "오야코동",          cal: 600, na: 850,  carb: 80, fat: 16, sugar: 6,  protein: 26, serving: 380, unit: "1인분" },
  { name: "카츠동",            cal: 750, na: 950,  carb: 85, fat: 28, sugar: 5,  protein: 30, serving: 420, unit: "1인분" },
  { name: "텐동(튀김덮밥)",    cal: 700, na: 800,  carb: 90, fat: 22, sugar: 4,  protein: 20, serving: 400, unit: "1인분" },
  { name: "라멘(쇼유)",        cal: 480, na: 1900, carb: 65, fat: 14, sugar: 4,  protein: 18, serving: 600, unit: "1인분" },
  { name: "라멘(미소)",        cal: 510, na: 2000, carb: 68, fat: 16, sugar: 5,  protein: 20, serving: 600, unit: "1인분" },
  { name: "라멘(돈코츠)",      cal: 550, na: 2100, carb: 60, fat: 22, sugar: 3,  protein: 22, serving: 600, unit: "1인분" },
  { name: "타코야끼(6개)",     cal: 320, na: 650,  carb: 38, fat: 14, sugar: 3,  protein: 10, serving: 180, unit: "6개" },
  { name: "오코노미야끼",      cal: 450, na: 800,  carb: 50, fat: 18, sugar: 4,  protein: 18, serving: 300, unit: "1인분" },
  { name: "미소시루",          cal: 50,  na: 900,  carb: 6,  fat: 2,  sugar: 1,  protein: 3,  serving: 200, unit: "1그릇" },
  { name: "소바(모밀)",        cal: 380, na: 1100, carb: 70, fat: 4,  sugar: 3,  protein: 16, serving: 450, unit: "1인분" },
  { name: "나베야끼우동",      cal: 520, na: 1600, carb: 80, fat: 10, sugar: 5,  protein: 20, serving: 600, unit: "1인분" },
  { name: "초밥(연어 2개)",    cal: 180, na: 350,  carb: 30, fat: 4,  sugar: 1,  protein: 9,  serving: 100, unit: "2개" },
  { name: "초밥(참치 2개)",    cal: 170, na: 300,  carb: 28, fat: 2,  sugar: 1,  protein: 11, serving: 95,  unit: "2개" },
  { name: "소룡포(6개)",       cal: 280, na: 600,  carb: 30, fat: 12, sugar: 2,  protein: 12, serving: 180, unit: "6개" },
  { name: "스키야키",          cal: 520, na: 1200, carb: 30, fat: 28, sugar: 10, protein: 35, serving: 400, unit: "1인분" },

  // ── 중식 ──
  { name: "마라탕",      cal: 500, na: 2000, carb: 40, fat: 25, sugar: 3,  protein: 25, serving: 400, unit: "1인분" },
  { name: "마라샹궈",    cal: 580, na: 2200, carb: 35, fat: 32, sugar: 3,  protein: 30, serving: 450, unit: "1인분" },
  { name: "마파두부",    cal: 280, na: 1400, carb: 15, fat: 18, sugar: 2,  protein: 12, serving: 200, unit: "1인분" },
  { name: "깐풍기",      cal: 480, na: 900,  carb: 35, fat: 22, sugar: 5,  protein: 28, serving: 250, unit: "1인분" },
  { name: "팔보채",      cal: 350, na: 1200, carb: 25, fat: 18, sugar: 3,  protein: 28, serving: 250, unit: "1인분" },
  { name: "훠궈",        cal: 600, na: 2200, carb: 45, fat: 30, sugar: 4,  protein: 35, serving: 500, unit: "1인분" },
  { name: "짜장밥",      cal: 580, na: 1200, carb: 95, fat: 12, sugar: 8,  protein: 18, serving: 550, unit: "1인분" },
  { name: "동파육",      cal: 620, na: 1100, carb: 20, fat: 48, sugar: 10, protein: 32, serving: 250, unit: "1인분" },
  { name: "양장피",      cal: 380, na: 1300, carb: 30, fat: 18, sugar: 4,  protein: 24, serving: 300, unit: "1인분" },

  // ── 태국/동남아 ──
  { name: "팟타이",          cal: 480, na: 1100, carb: 65, fat: 16, sugar: 6,  protein: 20, serving: 300, unit: "1인분" },
  { name: "그린커리(닭고기)", cal: 450, na: 900,  carb: 25, fat: 30, sugar: 5,  protein: 22, serving: 300, unit: "1인분" },
  { name: "쌀국수(포)",       cal: 380, na: 1400, carb: 60, fat: 8,  sugar: 4,  protein: 18, serving: 500, unit: "1인분" },
  { name: "나시고렝",         cal: 520, na: 1000, carb: 72, fat: 16, sugar: 4,  protein: 18, serving: 300, unit: "1인분" },
  { name: "팟카파오(바질볶음)",cal: 420, na: 1200, carb: 15, fat: 22, sugar: 3,  protein: 28, serving: 250, unit: "1인분" },
  { name: "해산물볶음밥",     cal: 500, na: 800,  carb: 72, fat: 16, sugar: 3,  protein: 22, serving: 350, unit: "1인분" },

  // ── 양식 ──
  { name: "스테이크(등심)",   cal: 520, na: 200,  carb: 0,  fat: 40, sugar: 0,  protein: 38, serving: 200, unit: "200g" },
  { name: "스테이크(안심)",   cal: 420, na: 180,  carb: 0,  fat: 28, sugar: 0,  protein: 38, serving: 200, unit: "200g" },
  { name: "크림리조또",       cal: 580, na: 800,  carb: 75, fat: 18, sugar: 3,  protein: 16, serving: 350, unit: "1인분" },
  { name: "오믈렛",           cal: 250, na: 450,  carb: 5,  fat: 18, sugar: 1,  protein: 16, serving: 150, unit: "1인분" },
  { name: "크림스프",         cal: 200, na: 600,  carb: 15, fat: 13, sugar: 5,  protein: 5,  serving: 250, unit: "1그릇" },
  { name: "클램차우더",       cal: 280, na: 900,  carb: 20, fat: 16, sugar: 4,  protein: 10, serving: 300, unit: "1그릇" },
  { name: "시저샐러드",       cal: 280, na: 500,  carb: 15, fat: 18, sugar: 3,  protein: 12, serving: 200, unit: "1인분" },
  { name: "뇨끼(크림)",       cal: 520, na: 600,  carb: 75, fat: 14, sugar: 3,  protein: 14, serving: 300, unit: "1인분" },
  { name: "라자냐",           cal: 680, na: 900,  carb: 60, fat: 30, sugar: 6,  protein: 28, serving: 300, unit: "1인분" },
  { name: "스파게티(미트볼)", cal: 620, na: 850,  carb: 78, fat: 20, sugar: 8,  protein: 28, serving: 350, unit: "1인분" },

  // ── 나물/반찬류 ──
  { name: "시금치나물",    cal: 40,  na: 300,  carb: 4,  fat: 2,   sugar: 0.5, protein: 2,  potassium: 300, serving: 70,  unit: "1접시" },
  { name: "콩나물무침",    cal: 30,  na: 200,  carb: 3,  fat: 1,   sugar: 0.5, protein: 2,  serving: 70,  unit: "1접시" },
  { name: "도라지나물",    cal: 60,  na: 250,  carb: 10, fat: 2,   sugar: 1,   protein: 1,  serving: 70,  unit: "1접시" },
  { name: "고사리나물",    cal: 55,  na: 280,  carb: 7,  fat: 2,   sugar: 0.5, protein: 2,  serving: 70,  unit: "1접시" },
  { name: "취나물",        cal: 45,  na: 250,  carb: 6,  fat: 2,   sugar: 0.5, protein: 2,  serving: 70,  unit: "1접시" },
  { name: "무생채",        cal: 35,  na: 350,  carb: 7,  fat: 1,   sugar: 3,   protein: 1,  serving: 70,  unit: "1접시" },
  { name: "오이무침",      cal: 25,  na: 300,  carb: 4,  fat: 0.5, sugar: 1.5, protein: 1,  serving: 70,  unit: "1접시" },
  { name: "감자조림",      cal: 120, na: 500,  carb: 25, fat: 2,   sugar: 5,   protein: 2,  serving: 100, unit: "1접시" },
  { name: "호박볶음",      cal: 70,  na: 250,  carb: 8,  fat: 3,   sugar: 3,   protein: 2,  serving: 80,  unit: "1접시" },
  { name: "두부조림",      cal: 150, na: 600,  carb: 8,  fat: 8,   sugar: 2,   protein: 12, serving: 150, unit: "1접시" },
  { name: "계란말이",      cal: 160, na: 400,  carb: 4,  fat: 10,  sugar: 1,   protein: 12, serving: 100, unit: "1인분" },
  { name: "멸치볶음",      cal: 150, na: 900,  carb: 10, fat: 7,   sugar: 3,   protein: 14, serving: 60,  unit: "1접시" },
  { name: "미역줄기볶음",  cal: 45,  na: 400,  carb: 5,  fat: 2,   sugar: 0.5, protein: 2,  serving: 80,  unit: "1접시" },
  { name: "열무김치",      cal: 25,  na: 500,  carb: 4,  fat: 0.3, sugar: 1.5, protein: 1.5,serving: 70,  unit: "1접시" },
  { name: "파김치",        cal: 30,  na: 550,  carb: 5,  fat: 0.5, sugar: 2,   protein: 1,  serving: 60,  unit: "1접시" },
  { name: "나물비빔밥",    cal: 480, na: 700,  carb: 78, fat: 10,  sugar: 4,   protein: 14, serving: 380, unit: "1인분" },

  // ── 생선류 ──
  { name: "고등어구이",    cal: 240, na: 450,  carb: 0,  fat: 16,  sugar: 0,   protein: 24, serving: 150, unit: "1토막" },
  { name: "갈치구이",      cal: 200, na: 400,  carb: 0,  fat: 12,  sugar: 0,   protein: 22, serving: 150, unit: "1토막" },
  { name: "조기구이",      cal: 180, na: 380,  carb: 0,  fat: 10,  sugar: 0,   protein: 22, serving: 150, unit: "1마리" },
  { name: "연어구이",      cal: 280, na: 300,  carb: 0,  fat: 18,  sugar: 0,   protein: 28, serving: 150, unit: "1토막" },
  { name: "생선가스",      cal: 320, na: 600,  carb: 28, fat: 16,  sugar: 2,   protein: 20, serving: 150, unit: "1인분" },
  { name: "오징어구이",    cal: 180, na: 600,  carb: 5,  fat: 6,   sugar: 0.5, protein: 26, serving: 150, unit: "1인분" },
  { name: "고등어조림",    cal: 280, na: 1200, carb: 12, fat: 16,  sugar: 4,   protein: 24, serving: 200, unit: "1인분" },
  { name: "명란젓",        cal: 90,  na: 1800, carb: 2,  fat: 4,   sugar: 0.5, protein: 12, serving: 50,  unit: "1접시" },
  { name: "참치통조림",    cal: 180, na: 400,  carb: 0,  fat: 8,   sugar: 0,   protein: 26, serving: 100, unit: "1캔" },
  { name: "연어회",        cal: 170, na: 50,   carb: 0,  fat: 10,  sugar: 0,   protein: 20, serving: 100, unit: "100g" },
  { name: "문어숙회",      cal: 100, na: 350,  carb: 2,  fat: 1.5, sugar: 0,   protein: 18, serving: 100, unit: "1인분" },
  { name: "새우(삶은)",    cal: 100, na: 300,  carb: 0,  fat: 1,   sugar: 0,   protein: 22, serving: 100, unit: "100g" },

  // ── 찌개/국 추가 ──
  { name: "청국장찌개",    cal: 200, na: 1100, carb: 15, fat: 10,  sugar: 2,   protein: 15, serving: 300, unit: "1인분" },
  { name: "곰탕",          cal: 320, na: 1000, carb: 25, fat: 12,  sugar: 1,   protein: 28, serving: 600, unit: "1인분" },
  { name: "북어국",        cal: 120, na: 950,  carb: 8,  fat: 4,   sugar: 0.5, protein: 14, serving: 300, unit: "1인분" },
  { name: "황태해장국",    cal: 150, na: 1100, carb: 8,  fat: 5,   sugar: 0.5, protein: 18, serving: 400, unit: "1인분" },
  { name: "매운탕",        cal: 250, na: 1600, carb: 12, fat: 10,  sugar: 2,   protein: 28, serving: 500, unit: "1인분" },
  { name: "홍합탕",        cal: 120, na: 800,  carb: 8,  fat: 3,   sugar: 1,   protein: 14, serving: 400, unit: "1인분" },
  { name: "복국",          cal: 120, na: 900,  carb: 5,  fat: 2,   sugar: 0.5, protein: 20, serving: 400, unit: "1인분" },
  { name: "시래기국",      cal: 80,  na: 800,  carb: 10, fat: 2,   sugar: 1,   protein: 6,  serving: 300, unit: "1인분" },
  { name: "콩비지찌개",    cal: 160, na: 950,  carb: 12, fat: 8,   sugar: 1,   protein: 10, serving: 300, unit: "1인분" },
  { name: "닭볶음탕국물",  cal: 180, na: 1100, carb: 12, fat: 8,   sugar: 3,   protein: 16, serving: 300, unit: "1인분" },
  { name: "물냉면",        cal: 480, na: 1400, carb: 80, fat: 5,   sugar: 6,   protein: 16, serving: 550, unit: "1인분" },
  { name: "비빔냉면",      cal: 500, na: 1200, carb: 85, fat: 8,   sugar: 10,  protein: 16, serving: 500, unit: "1인분" },

  // ── 분식/길거리 추가 ──
  { name: "로제떡볶이",    cal: 420, na: 1100, carb: 68, fat: 14,  sugar: 12,  protein: 12, serving: 300, unit: "1인분" },
  { name: "치즈떡볶이",    cal: 380, na: 1200, carb: 65, fat: 10,  sugar: 12,  protein: 12, serving: 280, unit: "1인분" },
  { name: "호떡",          cal: 220, na: 200,  carb: 42, fat: 6,   sugar: 18,  protein: 4,  serving: 100, unit: "1개" },
  { name: "계란빵",        cal: 180, na: 200,  carb: 28, fat: 5,   sugar: 5,   protein: 7,  serving: 90,  unit: "1개" },
  { name: "닭꼬치(1개)",   cal: 220, na: 550,  carb: 12, fat: 8,   sugar: 4,   protein: 22, serving: 150, unit: "1개" },
  { name: "와플",          cal: 350, na: 400,  carb: 50, fat: 14,  sugar: 15,  protein: 8,  serving: 150, unit: "1개" },
  { name: "어묵(1개)",     cal: 80,  na: 600,  carb: 10, fat: 2,   sugar: 1,   protein: 6,  serving: 60,  unit: "1개" },
  { name: "소떡소떡",      cal: 300, na: 650,  carb: 45, fat: 8,   sugar: 6,   protein: 10, serving: 150, unit: "1인분" },
  { name: "치즈볼(6개)",   cal: 280, na: 500,  carb: 25, fat: 16,  sugar: 2,   protein: 10, serving: 100, unit: "6개" },
  { name: "꽈배기",        cal: 230, na: 280,  carb: 38, fat: 8,   sugar: 10,  protein: 4,  serving: 90,  unit: "2개" },

  // ── 편의점/간식 추가 ──
  { name: "초코파이(1개)",   cal: 170, na: 70,  carb: 27, fat: 6,   sugar: 18,  protein: 2,  serving: 39,  unit: "1개" },
  { name: "프링글스(소)",    cal: 270, na: 360,  carb: 30, fat: 16,  sugar: 1,   protein: 3,  serving: 60,  unit: "1통" },
  { name: "그래놀라바",      cal: 180, na: 80,   carb: 28, fat: 6,   sugar: 12,  protein: 4,  serving: 45,  unit: "1개" },
  { name: "요거트(플레인)",  cal: 100, na: 80,   carb: 12, fat: 3,   sugar: 11,  protein: 6,  serving: 150, unit: "1개" },
  { name: "그릭요거트",      cal: 130, na: 60,   carb: 8,  fat: 5,   sugar: 6,   protein: 13, serving: 150, unit: "1개" },
  { name: "아이스크림(소프트콘)", cal: 200, na: 80, carb: 30, fat: 8, sugar: 22, protein: 4, serving: 120, unit: "1개" },
  { name: "바나나맛우유",    cal: 130, na: 50,   carb: 24, fat: 3,   sugar: 22,  protein: 3,  serving: 240, unit: "1개" },
  { name: "핫바(편의점)",    cal: 200, na: 500,  carb: 22, fat: 10,  sugar: 3,   protein: 6,  serving: 90,  unit: "1개" },
  { name: "에그샌드위치",    cal: 320, na: 550,  carb: 32, fat: 16,  sugar: 4,   protein: 12, serving: 160, unit: "1개" },
  { name: "컵라면(해물)",    cal: 310, na: 1240, carb: 47, fat: 10,  sugar: 3,   protein: 7,  serving: 86,  unit: "1개" },

  // ── 카페/음료 추가 ──
  { name: "카페모카",      cal: 250, na: 150,  carb: 35, fat: 9,   sugar: 30,  protein: 9,  serving: 400, unit: "1잔" },
  { name: "바닐라라떼",    cal: 280, na: 150,  carb: 42, fat: 8,   sugar: 40,  protein: 8,  serving: 400, unit: "1잔" },
  { name: "카푸치노",      cal: 120, na: 80,   carb: 10, fat: 6,   sugar: 8,   protein: 7,  serving: 300, unit: "1잔" },
  { name: "녹차라떼",      cal: 200, na: 80,   carb: 32, fat: 5,   sugar: 28,  protein: 5,  serving: 400, unit: "1잔" },
  { name: "식혜",          cal: 160, na: 30,   carb: 42, fat: 0,   sugar: 40,  protein: 1,  serving: 300, unit: "1컵" },
  { name: "수정과",        cal: 140, na: 20,   carb: 36, fat: 0,   sugar: 34,  protein: 0,  serving: 300, unit: "1컵" },
  { name: "에너지드링크",  cal: 100, na: 200,  carb: 25, fat: 0,   sugar: 25,  protein: 0,  serving: 250, unit: "1캔" },
  { name: "이온음료",      cal: 50,  na: 490,  carb: 12, fat: 0,   sugar: 12,  protein: 0,  serving: 500, unit: "500ml" },
  { name: "토마토주스",    cal: 80,  na: 400,  carb: 16, fat: 0.5, sugar: 12,  protein: 2,  serving: 240, unit: "1컵" },
  { name: "프라푸치노",    cal: 400, na: 180,  carb: 65, fat: 13,  sugar: 60,  protein: 6,  serving: 450, unit: "1잔" },
  { name: "홍차(무가당)",  cal: 5,   na: 10,   carb: 1,  fat: 0,   sugar: 0,   protein: 0,  serving: 300, unit: "1잔" },
  { name: "레몬에이드",    cal: 150, na: 15,   carb: 38, fat: 0,   sugar: 36,  protein: 0,  serving: 400, unit: "1잔" },

  // ── 건강식/다이어트 ──
  { name: "닭가슴살(삶은)",  cal: 165, na: 70,  carb: 0,  fat: 3.6, sugar: 0,   protein: 31, serving: 100, unit: "100g" },
  { name: "오트밀",          cal: 300, na: 5,   carb: 54, fat: 5,   sugar: 1,   protein: 11, serving: 80,  unit: "1그릇" },
  { name: "두부(반모)",       cal: 110, na: 10,  carb: 3,  fat: 6,   sugar: 0,   protein: 10, serving: 150, unit: "반모" },
  { name: "아보카도(반개)",   cal: 160, na: 7,   carb: 9,  fat: 15,  sugar: 0.7, protein: 2,  potassium: 485, serving: 100, unit: "반개" },
  { name: "닭가슴살샐러드",  cal: 200, na: 350,  carb: 10, fat: 5,   sugar: 3,   protein: 28, serving: 250, unit: "1인분" },
  { name: "현미밥",          cal: 280, na: 3,   carb: 60, fat: 2,   sugar: 0,   protein: 6,  serving: 210, unit: "1공기" },
  { name: "견과류(혼합)",    cal: 280, na: 50,  carb: 10, fat: 25,  sugar: 3,   protein: 9,  serving: 50,  unit: "50g" },
  { name: "고구마(찐)",      cal: 130, na: 30,  carb: 31, fat: 0.1, sugar: 8,   protein: 1.5, potassium: 404, serving: 120, unit: "1개" },
  { name: "삶은감자",        cal: 80,  na: 5,   carb: 18, fat: 0.1, sugar: 1,   protein: 2,   potassium: 547, serving: 130, unit: "1개" },
  { name: "프로틴바",        cal: 200, na: 150,  carb: 22, fat: 6,   sugar: 8,   protein: 20, serving: 55,  unit: "1개" },

  // ── 술/주류 ──
  { name: "소주(1병)",    cal: 400, na: 0,  carb: 2,  fat: 0, sugar: 0,   protein: 0,   serving: 360, unit: "1병(360ml)" },
  { name: "소주(1잔)",    cal: 65,  na: 0,  carb: 0.3,fat: 0, sugar: 0,   protein: 0,   serving: 50,  unit: "1잔(50ml)" },
  { name: "맥주(500ml)", cal: 200, na: 10, carb: 16, fat: 0, sugar: 0.5, protein: 1.5, serving: 500, unit: "500ml" },
  { name: "맥주(355ml)", cal: 140, na: 10, carb: 12, fat: 0, sugar: 0.5, protein: 1,   serving: 355, unit: "1캔" },
  { name: "막걸리(1병)", cal: 380, na: 30, carb: 50, fat: 0.5,sugar: 10, protein: 6,   serving: 750, unit: "1병(750ml)" },
  { name: "막걸리(1컵)", cal: 95,  na: 8,  carb: 12, fat: 0.1,sugar: 2.5,protein: 1.5, serving: 180, unit: "1컵" },
  { name: "와인(레드)",  cal: 125, na: 10, carb: 4,  fat: 0, sugar: 1,   protein: 0.1, serving: 150, unit: "1잔" },
  { name: "와인(화이트)",cal: 120, na: 10, carb: 4,  fat: 0, sugar: 2,   protein: 0.1, serving: 150, unit: "1잔" },
  { name: "하이볼(1잔)", cal: 100, na: 5,  carb: 8,  fat: 0, sugar: 6,   protein: 0,   serving: 250, unit: "1잔" },
  { name: "소맥(1잔)",   cal: 100, na: 5,  carb: 7,  fat: 0, sugar: 0.5, protein: 0.5, serving: 200, unit: "1잔" },

  // ── 안주류 ──
  { name: "골뱅이무침",          cal: 200, na: 1500, carb: 25, fat: 3,  sugar: 6,  protein: 18, serving: 200, unit: "1인분" },
  { name: "닭발(매운)",          cal: 280, na: 900,  carb: 10, fat: 14, sugar: 4,  protein: 28, serving: 200, unit: "1인분" },
  { name: "황도(캔)",            cal: 90,  na: 10,   carb: 22, fat: 0,  sugar: 20, protein: 0.5,serving: 200, unit: "1캔" },
  { name: "땅콩(무염)",          cal: 280, na: 5,    carb: 8,  fat: 24, sugar: 2,  protein: 13, serving: 50,  unit: "50g" },
  { name: "마른오징어(1/2마리)", cal: 150, na: 650,  carb: 5,  fat: 2,  sugar: 1,  protein: 24, serving: 80,  unit: "1/2마리" },
  { name: "육포(소고기)",        cal: 220, na: 800,  carb: 12, fat: 8,  sugar: 6,  protein: 26, serving: 60,  unit: "1봉지" },
  { name: "치즈(슬라이스 1장)", cal: 70,  na: 340,  carb: 0.5,fat: 5.5,sugar: 0.5,protein: 4,  serving: 20,  unit: "1장" },

  // ── 베이커리/디저트 ──
  { name: "케이크(치즈)",    cal: 350, na: 250,  carb: 38, fat: 18, sugar: 28, protein: 8,  serving: 100, unit: "1조각" },
  { name: "케이크(초코)",    cal: 380, na: 200,  carb: 50, fat: 18, sugar: 35, protein: 5,  serving: 100, unit: "1조각" },
  { name: "머핀(블루베리)", cal: 300, na: 280,  carb: 45, fat: 12, sugar: 22, protein: 5,  serving: 90,  unit: "1개" },
  { name: "마카롱",          cal: 90,  na: 30,   carb: 14, fat: 4,  sugar: 12, protein: 1,  serving: 20,  unit: "1개" },
  { name: "타르트(에그)",    cal: 200, na: 150,  carb: 26, fat: 10, sugar: 12, protein: 5,  serving: 75,  unit: "1개" },
  { name: "티라미수",        cal: 350, na: 120,  carb: 35, fat: 20, sugar: 22, protein: 7,  serving: 120, unit: "1조각" },
  { name: "팥빙수",          cal: 400, na: 100,  carb: 88, fat: 3,  sugar: 60, protein: 6,  serving: 400, unit: "1인분" },
  { name: "아이스크림(하겐다즈)", cal: 270, na: 85, carb: 25, fat: 17, sugar: 22, protein: 5, serving: 100, unit: "1스쿱" },
  { name: "요거트아이스크림", cal: 140, na: 60,  carb: 24, fat: 3,  sugar: 20, protein: 4,  serving: 100, unit: "1스쿱" },

  // ── 추가 한식 ──
  { name: "오징어볶음덮밥", cal: 520, na: 1300, carb: 75, fat: 12, sugar: 6,  protein: 28, serving: 400, unit: "1인분" },
  { name: "제육덮밥",       cal: 620, na: 1000, carb: 78, fat: 22, sugar: 5,  protein: 28, serving: 420, unit: "1인분" },
  { name: "닭갈비덮밥",     cal: 580, na: 950,  carb: 80, fat: 14, sugar: 6,  protein: 30, serving: 400, unit: "1인분" },
  { name: "순두부",         cal: 60,  na: 10,   carb: 2,  fat: 3,  sugar: 0,  protein: 6,  serving: 150, unit: "반모" },
  { name: "청국장",         cal: 120, na: 500,  carb: 10, fat: 5,  sugar: 1,  protein: 10, serving: 150, unit: "1인분" },
  { name: "도시락(한식)",   cal: 700, na: 1500, carb: 95, fat: 20, sugar: 8,  protein: 25, serving: 450, unit: "1박스" },
  { name: "묵(도토리묵)",   cal: 50,  na: 5,    carb: 11, fat: 0.3,sugar: 0.5,protein: 0.5,serving: 150, unit: "1인분" },
  { name: "도토리묵무침",   cal: 100, na: 400,  carb: 15, fat: 3,  sugar: 2,  protein: 2,  serving: 200, unit: "1인분" },
  { name: "파전(해물)",     cal: 420, na: 800,  carb: 50, fat: 16, sugar: 3,  protein: 18, serving: 300, unit: "1인분" },
  { name: "콩국(두유형)",   cal: 180, na: 100,  carb: 12, fat: 10, sugar: 3,  protein: 14, serving: 300, unit: "1컵" },

  // ── 보리차/곡물차/무가당차 ──
  { name: "하늘보리(500ml)",         cal: 0,   na: 10,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "하늘보리(1.5L)",          cal: 0,   na: 30,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 1500, unit: "1.5L" },
  { name: "옥수수수염차(500ml)",     cal: 0,   na: 20,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "결명자차(500ml)",         cal: 0,   na: 10,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "보리차(500ml)",           cal: 0,   na: 5,   carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "둥굴레차(500ml)",         cal: 0,   na: 10,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "현미녹차(500ml)",         cal: 0,   na: 10,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "17차(500ml)",             cal: 10,  na: 15,  carb: 2,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "옥수수차(500ml)",         cal: 0,   na: 10,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "녹차(페트, 500ml)",       cal: 5,   na: 10,  carb: 1,    fat: 0,   sugar: 0.5, protein: 0.3, serving: 500,  unit: "500ml" },
  { name: "홍차(페트, 500ml)",       cal: 50,  na: 10,  carb: 13,   fat: 0,   sugar: 12,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "헛개차(광동, 500ml)",     cal: 5,   na: 15,  carb: 1,    fat: 0,   sugar: 0.5, protein: 0,   serving: 500,  unit: "500ml" },
  { name: "오미자차(500ml)",         cal: 45,  na: 10,  carb: 11,   fat: 0,   sugar: 10,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "도라지차(500ml)",         cal: 5,   na: 10,  carb: 1,    fat: 0,   sugar: 0.5, protein: 0,   serving: 500,  unit: "500ml" },
  { name: "히비스커스차(500ml)",     cal: 10,  na: 5,   carb: 2.5,  fat: 0,   sugar: 2,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "루이보스차(500ml)",       cal: 0,   na: 5,   carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "캐모마일차(300ml)",       cal: 0,   na: 5,   carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 300,  unit: "1잔" },
  { name: "페퍼민트차(300ml)",       cal: 0,   na: 5,   carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 300,  unit: "1잔" },

  // ── 탄산음료 추가 ──
  { name: "코카콜라(355ml캔)",       cal: 139, na: 36,  carb: 39,   fat: 0,   sugar: 39,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "코카콜라(500ml)",         cal: 210, na: 55,  carb: 57,   fat: 0,   sugar: 57,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "코카콜라 제로(355ml)",    cal: 0,   na: 30,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "코카콜라 제로(500ml)",    cal: 0,   na: 45,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "펩시콜라(355ml)",         cal: 150, na: 30,  carb: 41,   fat: 0,   sugar: 41,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "펩시 제로(355ml)",        cal: 0,   na: 35,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "칠성사이다(355ml캔)",     cal: 140, na: 30,  carb: 38,   fat: 0,   sugar: 38,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "칠성사이다(500ml)",       cal: 200, na: 45,  carb: 55,   fat: 0,   sugar: 55,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "칠성사이다 제로(355ml)", cal: 0,   na: 30,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "스프라이트(355ml)",       cal: 140, na: 55,  carb: 39,   fat: 0,   sugar: 39,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "환타 오렌지(355ml)",      cal: 165, na: 55,  carb: 46,   fat: 0,   sugar: 46,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "환타 포도(355ml)",        cal: 155, na: 50,  carb: 43,   fat: 0,   sugar: 43,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "닥터페퍼(355ml)",         cal: 150, na: 50,  carb: 40,   fat: 0,   sugar: 40,  protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "데미소다 사과(250ml)",    cal: 70,  na: 20,  carb: 18,   fat: 0,   sugar: 17,  protein: 0,   serving: 250,  unit: "250ml캔" },
  { name: "트로피카나 스파클링(350ml)",cal:80, na: 10,  carb: 21,   fat: 0,   sugar: 20,  protein: 0,   serving: 350,  unit: "350ml" },

  // ── 이온/스포츠 음료 (브랜드) ──
  { name: "포카리스웨트(340ml)",     cal: 88,  na: 333, carb: 21,   fat: 0,   sugar: 19,  protein: 0,   serving: 340,  unit: "340ml캔" },
  { name: "포카리스웨트(500ml)",     cal: 130, na: 490, carb: 31,   fat: 0,   sugar: 28,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "포카리스웨트(900ml)",     cal: 234, na: 882, carb: 56,   fat: 0,   sugar: 50,  protein: 0,   serving: 900,  unit: "900ml" },
  { name: "게토레이(600ml)",         cal: 120, na: 270, carb: 33,   fat: 0,   sugar: 33,  protein: 0,   serving: 600,  unit: "600ml" },
  { name: "파워에이드(600ml)",       cal: 150, na: 300, carb: 40,   fat: 0,   sugar: 38,  protein: 0,   serving: 600,  unit: "600ml" },
  { name: "토레타(500ml)",           cal: 50,  na: 310, carb: 12,   fat: 0,   sugar: 11,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "몸이가벼워지는차(500ml)", cal: 0,   na: 20,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },

  // ── RTD 커피 (편의점/자판기) ──
  { name: "레쓰비(175ml)",           cal: 84,  na: 40,  carb: 13.5, fat: 2.2, sugar: 11.7,protein: 0.9, serving: 175,  unit: "175ml캔" },
  { name: "맥심 TOP(275ml)",         cal: 168, na: 65,  carb: 26,   fat: 5.5, sugar: 22,  protein: 2,   serving: 275,  unit: "275ml캔" },
  { name: "칸타타 아메리카노(275ml)",cal: 10,  na: 35,  carb: 1.5,  fat: 0,   sugar: 0.5, protein: 0.3, serving: 275,  unit: "275ml캔" },
  { name: "칸타타 콘트라베이스(275ml)",cal:140,na: 75,  carb: 22,   fat: 4,   sugar: 19,  protein: 3.5, serving: 275,  unit: "275ml캔" },
  { name: "조지아 오리지널(240ml)",  cal: 110, na: 80,  carb: 17,   fat: 3.5, sugar: 14,  protein: 1.5, serving: 240,  unit: "240ml캔" },
  { name: "조지아 아메리카노(240ml)",cal: 10,  na: 25,  carb: 1.5,  fat: 0,   sugar: 0.5, protein: 0.3, serving: 240,  unit: "240ml캔" },
  { name: "스타벅스 돌체라떼(355ml)",cal: 220, na: 140, carb: 34,   fat: 6,   sugar: 30,  protein: 8,   serving: 355,  unit: "355ml병" },
  { name: "스타벅스 아메리카노(355ml)",cal:10, na: 10,  carb: 1,    fat: 0,   sugar: 0,   protein: 0.5, serving: 355,  unit: "355ml병" },
  { name: "스타벅스 프라푸치노(281ml)",cal:200,na: 90,  carb: 36,   fat: 4.5, sugar: 32,  protein: 5,   serving: 281,  unit: "281ml병" },
  { name: "빙그레 아카페라(270ml)",  cal: 120, na: 60,  carb: 18,   fat: 3.5, sugar: 16,  protein: 2,   serving: 270,  unit: "270ml캔" },

  // ── 과즙/과일 음료 ──
  { name: "미닛메이드 오렌지(350ml)",cal: 140, na: 15,  carb: 36,   fat: 0,   sugar: 33,  protein: 0.5, serving: 350,  unit: "350ml" },
  { name: "선키스트 오렌지(340ml)", cal: 155, na: 20,  carb: 39,   fat: 0,   sugar: 37,  protein: 0.5, serving: 340,  unit: "340ml캔" },
  { name: "델몬트 오렌지(250ml)",   cal: 110, na: 10,  carb: 27,   fat: 0,   sugar: 25,  protein: 1,   serving: 250,  unit: "250ml" },
  { name: "복숭아 음료(238ml)",     cal: 110, na: 15,  carb: 27,   fat: 0,   sugar: 25,  protein: 0.5, serving: 238,  unit: "238ml" },
  { name: "포도 음료(250ml)",       cal: 165, na: 10,  carb: 42,   fat: 0,   sugar: 38,  protein: 0.5, serving: 250,  unit: "250ml" },
  { name: "사과 음료(200ml)",       cal: 90,  na: 5,   carb: 22,   fat: 0,   sugar: 20,  protein: 0.3, serving: 200,  unit: "200ml" },
  { name: "망고 음료(250ml)",       cal: 150, na: 5,   carb: 38,   fat: 0,   sugar: 34,  protein: 0.5, serving: 250,  unit: "250ml" },
  { name: "파인애플 주스(250ml)",   cal: 140, na: 5,   carb: 34,   fat: 0,   sugar: 30,  protein: 0.5, serving: 250,  unit: "250ml" },
  { name: "제주 감귤 음료(350ml)",  cal: 140, na: 10,  carb: 35,   fat: 0,   sugar: 32,  protein: 0.5, serving: 350,  unit: "350ml" },
  { name: "알로에 음료(240ml)",     cal: 70,  na: 20,  carb: 17,   fat: 0,   sugar: 15,  protein: 0,   serving: 240,  unit: "240ml" },
  { name: "코코넛워터(250ml)",      cal: 50,  na: 80,  carb: 12,   fat: 0.5, sugar: 10,  protein: 0.5, serving: 250,  unit: "250ml" },
  { name: "V8 야채주스(240ml)",     cal: 50,  na: 480, carb: 10,   fat: 0,   sugar: 8,   protein: 1.5, serving: 240,  unit: "240ml" },
  { name: "팔도 식혜(250ml캔)",     cal: 130, na: 25,  carb: 31,   fat: 0,   sugar: 28,  protein: 0.5, serving: 250,  unit: "250ml캔" },
  { name: "매실 음료(500ml)",       cal: 130, na: 10,  carb: 32,   fat: 0,   sugar: 30,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "유자차(병, 500ml)",      cal: 165, na: 10,  carb: 41,   fat: 0,   sugar: 38,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "생강차(병, 500ml)",      cal: 100, na: 5,   carb: 25,   fat: 0,   sugar: 23,  protein: 0,   serving: 500,  unit: "500ml" },

  // ── 우유 추가 ──
  { name: "서울우유(500ml)",        cal: 325, na: 225, carb: 24,   fat: 17.5,sugar: 22.5,protein: 16.5,serving: 500,  unit: "500ml" },
  { name: "저지방우유(200ml)",      cal: 80,  na: 95,  carb: 10,   fat: 2,   sugar: 9.5, protein: 6.5, serving: 200,  unit: "200ml" },
  { name: "무지방우유(200ml)",      cal: 70,  na: 100, carb: 10,   fat: 0,   sugar: 9.5, protein: 6.5, serving: 200,  unit: "200ml" },
  { name: "초코우유(240ml)",        cal: 160, na: 120, carb: 26,   fat: 4,   sugar: 22,  protein: 6,   serving: 240,  unit: "240ml" },
  { name: "딸기우유(240ml)",        cal: 150, na: 110, carb: 24,   fat: 4,   sugar: 20,  protein: 5.5, serving: 240,  unit: "240ml" },
  { name: "초코우유(소, 125ml)",    cal: 90,  na: 60,  carb: 14,   fat: 2.5, sugar: 12,  protein: 3.5, serving: 125,  unit: "125ml" },
  { name: "흰우유(소, 125ml)",      cal: 80,  na: 55,  carb: 6,    fat: 4.4, sugar: 5.8, protein: 4.1, serving: 125,  unit: "125ml" },
  { name: "연세우유(200ml)",        cal: 128, na: 88,  carb: 9.4,  fat: 6.9, sugar: 8.8, protein: 6.5, serving: 200,  unit: "200ml" },

  // ── 두유 추가 ──
  { name: "베지밀A(190ml)",         cal: 90,  na: 50,  carb: 10,   fat: 4,   sugar: 5,   protein: 6,   serving: 190,  unit: "190ml" },
  { name: "베지밀B(190ml)",         cal: 100, na: 75,  carb: 12,   fat: 4,   sugar: 8,   protein: 6,   serving: 190,  unit: "190ml" },
  { name: "삼육두유(190ml)",        cal: 85,  na: 60,  carb: 8,    fat: 4,   sugar: 4,   protein: 6,   serving: 190,  unit: "190ml" },
  { name: "아몬드브리즈(190ml)",    cal: 30,  na: 100, carb: 3,    fat: 2.5, sugar: 0,   protein: 1,   serving: 190,  unit: "190ml" },
  { name: "귀리우유(200ml)",        cal: 130, na: 100, carb: 20,   fat: 4,   sugar: 10,  protein: 3.5, serving: 200,  unit: "200ml" },

  // ── 야쿠르트/유산균 음료 ──
  { name: "야쿠르트(65ml)",         cal: 50,  na: 20,  carb: 11,   fat: 0.4, sugar: 10,  protein: 0.8, serving: 65,   unit: "1개(65ml)" },
  { name: "야쿠르트 라이트(65ml)",  cal: 30,  na: 20,  carb: 6,    fat: 0.1, sugar: 5.5, protein: 0.8, serving: 65,   unit: "1개(65ml)" },
  { name: "쾌변(150ml)",            cal: 80,  na: 55,  carb: 15,   fat: 1,   sugar: 13,  protein: 2,   serving: 150,  unit: "150ml" },
  { name: "헬리오스(200ml)",        cal: 130, na: 80,  carb: 21,   fat: 2.5, sugar: 18,  protein: 4.5, serving: 200,  unit: "200ml" },
  { name: "메치니코프(150ml)",      cal: 100, na: 75,  carb: 16,   fat: 2,   sugar: 14,  protein: 4,   serving: 150,  unit: "150ml" },

  // ── 기능성/건강 음료 ──
  { name: "비타500(100ml)",         cal: 30,  na: 35,  carb: 7.5,  fat: 0,   sugar: 6.5, protein: 0.3, serving: 100,  unit: "100ml" },
  { name: "박카스(120ml)",          cal: 60,  na: 15,  carb: 13,   fat: 0,   sugar: 12,  protein: 0,   serving: 120,  unit: "120ml병" },
  { name: "박카스F(120ml)",         cal: 60,  na: 15,  carb: 13,   fat: 0,   sugar: 12,  protein: 0,   serving: 120,  unit: "120ml병" },
  { name: "컨디션(100ml)",          cal: 56,  na: 20,  carb: 12.9, fat: 0.1, sugar: 11.6,protein: 0.4, serving: 100,  unit: "100ml병" },
  { name: "홍삼 음료(80ml)",        cal: 50,  na: 10,  carb: 12,   fat: 0,   sugar: 10,  protein: 0.5, serving: 80,   unit: "1포(80ml)" },
  { name: "모닝케어(100ml)",        cal: 56,  na: 20,  carb: 12.9, fat: 0.1, sugar: 11.6,protein: 0.4, serving: 100,  unit: "100ml병" },
  { name: "비타민워터(500ml)",      cal: 125, na: 0,   carb: 33,   fat: 0,   sugar: 32,  protein: 0,   serving: 500,  unit: "500ml" },
  { name: "상쾌환(180ml)",          cal: 80,  na: 20,  carb: 18,   fat: 0,   sugar: 16,  protein: 0.5, serving: 180,  unit: "180ml" },

  // ── 생수/탄산수 ──
  { name: "제주삼다수(500ml)",      cal: 0,   na: 6,   carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "아이시스(500ml)",        cal: 0,   na: 0,   carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "탄산수(플레인, 500ml)",  cal: 0,   na: 20,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 500,  unit: "500ml" },
  { name: "씨그램(탄산수, 355ml)",  cal: 0,   na: 15,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 355,  unit: "355ml캔" },
  { name: "페리에(330ml)",          cal: 0,   na: 10,  carb: 0,    fat: 0,   sugar: 0,   protein: 0,   serving: 330,  unit: "330ml" },

  // ── 맥도날드 ──
  { name: "빅맥(맥도날드)",              cal: 533, na: 1010, carb: 46, fat: 28, sugar: 9,  protein: 26, serving: 200, unit: "1개" },
  { name: "불고기버거(맥도날드)",        cal: 398, na: 830,  carb: 50, fat: 14, sugar: 14, protein: 17, serving: 152, unit: "1개" },
  { name: "맥스파이시 상하이버거",       cal: 565, na: 1000, carb: 51, fat: 28, sugar: 6,  protein: 24, serving: 218, unit: "1개" },
  { name: "더블불고기버거(맥도날드)",    cal: 571, na: 1230, carb: 54, fat: 26, sugar: 17, protein: 30, serving: 245, unit: "1개" },
  { name: "쿼터파운더 위드 치즈",        cal: 520, na: 1040, carb: 46, fat: 26, sugar: 9,  protein: 30, serving: 200, unit: "1개" },
  { name: "더블쿼터파운더 위드 치즈",    cal: 745, na: 1280, carb: 47, fat: 42, sugar: 10, protein: 52, serving: 280, unit: "1개" },
  { name: "맥치킨(맥도날드)",            cal: 388, na: 740,  carb: 40, fat: 18, sugar: 5,  protein: 17, serving: 165, unit: "1개" },
  { name: "필레오피쉬(맥도날드)",        cal: 328, na: 700,  carb: 38, fat: 13, sugar: 6,  protein: 17, serving: 140, unit: "1개" },
  { name: "에그 맥머핀",                 cal: 294, na: 730,  carb: 28, fat: 13, sugar: 3,  protein: 17, serving: 134, unit: "1개" },
  { name: "소시지 맥머핀 위드 에그",     cal: 474, na: 1010, carb: 30, fat: 29, sugar: 3,  protein: 22, serving: 175, unit: "1개" },
  { name: "팬케이크(맥도날드)",          cal: 583, na: 810,  carb: 99, fat: 15, sugar: 32, protein: 12, serving: 320, unit: "1세트" },
  { name: "맥너겟 6조각",                cal: 269, na: 530,  carb: 18, fat: 14, sugar: 0,  protein: 18, serving: 105, unit: "6조각" },
  { name: "맥너겟 10조각",               cal: 450, na: 880,  carb: 30, fat: 23, sugar: 0,  protein: 30, serving: 175, unit: "10조각" },
  { name: "맥너겟 20조각",               cal: 900, na: 1760, carb: 60, fat: 46, sugar: 0,  protein: 60, serving: 350, unit: "20조각" },
  { name: "맥도날드 감자튀김(S)",        cal: 230, na: 270,  carb: 31, fat: 10, sugar: 0,  protein: 3,  serving: 71,  unit: "S사이즈" },
  { name: "맥도날드 감자튀김(M)",        cal: 320, na: 370,  carb: 43, fat: 14, sugar: 0,  protein: 4,  serving: 99,  unit: "M사이즈" },
  { name: "맥도날드 감자튀김(L)",        cal: 444, na: 510,  carb: 59, fat: 20, sugar: 0,  protein: 6,  serving: 138, unit: "L사이즈" },
  { name: "해시브라운(맥도날드)",        cal: 148, na: 330,  carb: 15, fat: 9,  sugar: 0,  protein: 1,  serving: 55,  unit: "1개" },
  { name: "맥플러리 오레오(S)",          cal: 347, na: 200,  carb: 56, fat: 11, sugar: 44, protein: 8,  serving: 250, unit: "S사이즈" },
  { name: "맥플러리 딸기(S)",            cal: 320, na: 180,  carb: 54, fat: 9,  sugar: 40, protein: 8,  serving: 245, unit: "S사이즈" },
  { name: "소프트콘(맥도날드)",          cal: 141, na: 75,   carb: 24, fat: 4,  sugar: 18, protein: 4,  serving: 105, unit: "1개" },
  { name: "맥카페 아메리카노(M)",        cal: 10,  na: 10,   carb: 2,  fat: 0,  sugar: 0,  protein: 1,  serving: 350, unit: "M(350ml)" },
  { name: "맥카페 라떼(M)",              cal: 190, na: 115,  carb: 18, fat: 8,  sugar: 17, protein: 10, serving: 400, unit: "M(400ml)" },

  // ── 롯데리아 ──
  { name: "불고기버거(롯데리아)",        cal: 429, na: 670,  carb: 47, fat: 18, sugar: 9,  protein: 20, serving: 172, unit: "1개" },
  { name: "새우버거(롯데리아)",          cal: 491, na: 910,  carb: 51, fat: 22, sugar: 6,  protein: 19, serving: 196, unit: "1개" },
  { name: "모짜렐라인더버거(롯데리아)",  cal: 502, na: 1010, carb: 50, fat: 23, sugar: 8,  protein: 24, serving: 203, unit: "1개" },
  { name: "치즈버거(롯데리아)",          cal: 381, na: 810,  carb: 42, fat: 17, sugar: 5,  protein: 18, serving: 155, unit: "1개" },
  { name: "더블불고기버거(롯데리아)",    cal: 586, na: 1010, carb: 51, fat: 29, sugar: 11, protein: 36, serving: 245, unit: "1개" },
  { name: "크리스피버거(롯데리아)",      cal: 480, na: 870,  carb: 46, fat: 22, sugar: 5,  protein: 23, serving: 183, unit: "1개" },
  { name: "한우불고기버거(롯데리아)",    cal: 490, na: 820,  carb: 48, fat: 20, sugar: 10, protein: 24, serving: 195, unit: "1개" },
  { name: "AZ버거(롯데리아)",            cal: 680, na: 1200, carb: 58, fat: 36, sugar: 12, protein: 35, serving: 285, unit: "1개" },
  { name: "양념감자(롯데리아)",          cal: 270, na: 590,  carb: 44, fat: 9,  sugar: 3,  protein: 3,  serving: 109, unit: "1인분" },
  { name: "오징어링(롯데리아)",          cal: 310, na: 430,  carb: 38, fat: 14, sugar: 2,  protein: 8,  serving: 109, unit: "1인분" },
  { name: "옥수수 스프(롯데리아)",       cal: 143, na: 630,  carb: 17, fat: 7,  sugar: 5,  protein: 3,  serving: 225, unit: "1컵" },
  { name: "소프트아이스크림(롯데리아)",  cal: 165, na: 95,   carb: 28, fat: 5,  sugar: 22, protein: 4,  serving: 120, unit: "1개" },
  { name: "핫도그(롯데리아)",            cal: 390, na: 780,  carb: 42, fat: 18, sugar: 5,  protein: 15, serving: 150, unit: "1개" },
  { name: "치즈스틱(롯데리아)",          cal: 105, na: 215,  carb: 10, fat: 6,  sugar: 1,  protein: 5,  serving: 35,  unit: "1개" },
  { name: "롱치즈스틱(롯데리아)",        cal: 210, na: 430,  carb: 20, fat: 12, sugar: 1,  protein: 9,  serving: 70,  unit: "1개" },

  // ── 버거킹 ──
  { name: "와퍼(버거킹)",               cal: 641, na: 1020, carb: 49, fat: 38, sugar: 11, protein: 30, serving: 290, unit: "1개" },
  { name: "더블와퍼(버거킹)",           cal: 887, na: 1230, carb: 51, fat: 56, sugar: 12, protein: 51, serving: 410, unit: "1개" },
  { name: "치즈와퍼(버거킹)",           cal: 740, na: 1200, carb: 50, fat: 45, sugar: 11, protein: 35, serving: 310, unit: "1개" },
  { name: "통새우와퍼(버거킹)",         cal: 650, na: 1100, carb: 57, fat: 33, sugar: 10, protein: 28, serving: 280, unit: "1개" },
  { name: "스파이시 와퍼(버거킹)",      cal: 672, na: 1120, carb: 52, fat: 39, sugar: 12, protein: 31, serving: 295, unit: "1개" },
  { name: "치킨킹(버거킹)",             cal: 603, na: 1240, carb: 55, fat: 30, sugar: 9,  protein: 27, serving: 265, unit: "1개" },
  { name: "올데이킹(버거킹)",           cal: 580, na: 950,  carb: 52, fat: 28, sugar: 8,  protein: 26, serving: 245, unit: "1개" },
  { name: "버거킹 감자튀김(M)",         cal: 340, na: 490,  carb: 46, fat: 15, sugar: 0,  protein: 4,  serving: 113, unit: "M사이즈" },
  { name: "버거킹 감자튀김(L)",         cal: 460, na: 660,  carb: 62, fat: 21, sugar: 0,  protein: 5,  serving: 153, unit: "L사이즈" },
  { name: "어니언링(버거킹)",           cal: 380, na: 480,  carb: 47, fat: 18, sugar: 3,  protein: 5,  serving: 125, unit: "1인분" },

  // ── KFC ──
  { name: "징거버거(KFC)",              cal: 524, na: 1090, carb: 47, fat: 23, sugar: 6,  protein: 27, serving: 220, unit: "1개" },
  { name: "타워버거(KFC)",              cal: 610, na: 1180, carb: 54, fat: 28, sugar: 7,  protein: 31, serving: 250, unit: "1개" },
  { name: "커넬크리스피버거(KFC)",      cal: 570, na: 1050, carb: 50, fat: 26, sugar: 6,  protein: 28, serving: 235, unit: "1개" },
  { name: "오리지널치킨(KFC, 1조각)",   cal: 323, na: 850,  carb: 14, fat: 20, sugar: 0,  protein: 23, serving: 150, unit: "1조각" },
  { name: "핫윙(KFC, 1개)",             cal: 180, na: 590,  carb: 8,  fat: 11, sugar: 0,  protein: 13, serving: 85,  unit: "1개" },
  { name: "KFC 감자튀김(M)",            cal: 290, na: 590,  carb: 42, fat: 12, sugar: 0,  protein: 4,  serving: 105, unit: "M사이즈" },
  { name: "코울슬로(KFC, S)",           cal: 120, na: 270,  carb: 15, fat: 6,  sugar: 9,  protein: 2,  serving: 110, unit: "S사이즈" },
  { name: "KFC 콘샐러드",               cal: 95,  na: 240,  carb: 18, fat: 2,  sugar: 7,  protein: 2,  serving: 130, unit: "1컵" },

  // ── 써브웨이 (15cm / 이탈리안 빵 기준) ──
  { name: "써브웨이 BLT(15cm)",         cal: 315, na: 750,  carb: 45, fat: 9,  sugar: 7,  protein: 17, serving: 215, unit: "15cm" },
  { name: "써브웨이 에그마요(15cm)",     cal: 370, na: 840,  carb: 46, fat: 14, sugar: 8,  protein: 18, serving: 220, unit: "15cm" },
  { name: "써브웨이 터키브레스트(15cm)", cal: 290, na: 910,  carb: 47, fat: 5,  sugar: 7,  protein: 20, serving: 220, unit: "15cm" },
  { name: "써브웨이 이탈리안BMT(15cm)", cal: 420, na: 1280, carb: 46, fat: 17, sugar: 7,  protein: 23, serving: 238, unit: "15cm" },
  { name: "써브웨이 스테이크&치즈(15cm)", cal: 390, na: 960, carb: 47, fat: 13, sugar: 7, protein: 25, serving: 250, unit: "15cm" },
  { name: "써브웨이 참치(15cm)",         cal: 430, na: 870,  carb: 47, fat: 18, sugar: 7,  protein: 18, serving: 250, unit: "15cm" },
  { name: "써브웨이 로스트치킨(15cm)",   cal: 340, na: 880,  carb: 47, fat: 8,  sugar: 7,  protein: 25, serving: 245, unit: "15cm" },
  { name: "써브웨이 베지딜라이트(15cm)", cal: 245, na: 590,  carb: 45, fat: 4,  sugar: 8,  protein: 11, serving: 200, unit: "15cm" },
  { name: "써브웨이 풀드포크(15cm)",     cal: 430, na: 1020, carb: 53, fat: 13, sugar: 12, protein: 29, serving: 270, unit: "15cm" },
  { name: "써브웨이 쉬림프(15cm)",       cal: 310, na: 850,  carb: 46, fat: 7,  sugar: 7,  protein: 18, serving: 230, unit: "15cm" },
  { name: "써브웨이 BBQ치킨(15cm)",      cal: 380, na: 980,  carb: 50, fat: 9,  sugar: 12, protein: 26, serving: 255, unit: "15cm" },
  { name: "써브웨이 스파이시이탈리안(15cm)", cal: 480, na: 1420, carb: 46, fat: 24, sugar: 7, protein: 24, serving: 255, unit: "15cm" },
  { name: "써브웨이 쿠키(초콜릿칩)",     cal: 220, na: 160,  carb: 30, fat: 10, sugar: 18, protein: 3,  serving: 45,  unit: "1개" },

  // ── 동대문엽기떡볶이 ──
  { name: "엽기떡볶이(소/1인)",          cal: 580, na: 1380, carb: 95, fat: 10, sugar: 22, protein: 18, serving: 400, unit: "1인분" },
  { name: "엽기떡볶이(중/2인)",          cal: 1060, na: 2520, carb: 175, fat: 18, sugar: 40, protein: 33, serving: 730, unit: "2인분" },
  { name: "로제떡볶이(소/1인, 엽기)",    cal: 650, na: 1200, carb: 88, fat: 18, sugar: 16, protein: 20, serving: 420, unit: "1인분" },
  { name: "엽기 라면사리",               cal: 350, na: 1080, carb: 68, fat: 5,  sugar: 2,  protein: 9,  serving: 120, unit: "1개" },
  { name: "엽기 치즈사리",               cal: 120, na: 280,  carb: 3,  fat: 9,  sugar: 2,  protein: 7,  serving: 45,  unit: "1개" },
  { name: "엽기 달걀사리",               cal: 75,  na: 80,   carb: 1,  fat: 5,  sugar: 0,  protein: 6,  serving: 55,  unit: "1개" },
  { name: "엽기 모둠튀김(5종)",          cal: 350, na: 420,  carb: 48, fat: 15, sugar: 2,  protein: 8,  serving: 150, unit: "1세트" },

  // ── 신전떡볶이 ──
  { name: "신전떡볶이(1인)",             cal: 460, na: 1250, carb: 82, fat: 7,  sugar: 18, protein: 13, serving: 380, unit: "1인분" },
  { name: "신전 핵불닭떡볶이(1인)",      cal: 490, na: 1380, carb: 85, fat: 7,  sugar: 16, protein: 14, serving: 390, unit: "1인분" },
  { name: "신전 치즈떡볶이(1인)",        cal: 540, na: 1310, carb: 84, fat: 13, sugar: 17, protein: 17, serving: 400, unit: "1인분" },
  { name: "신전 로제떡볶이(1인)",        cal: 520, na: 1180, carb: 82, fat: 12, sugar: 16, protein: 15, serving: 400, unit: "1인분" },
  { name: "신전 튀김세트(5종)",          cal: 310, na: 380,  carb: 42, fat: 13, sugar: 1,  protein: 8,  serving: 130, unit: "5종세트" },

  // ── 죠스떡볶이 ──
  { name: "죠스떡볶이(1인)",             cal: 490, na: 1280, carb: 87, fat: 8,  sugar: 20, protein: 14, serving: 400, unit: "1인분" },
  { name: "죠스 로제떡볶이(1인)",        cal: 560, na: 1180, carb: 85, fat: 14, sugar: 16, protein: 16, serving: 420, unit: "1인분" },
  { name: "죠스 치즈떡볶이(1인)",        cal: 540, na: 1300, carb: 85, fat: 13, sugar: 18, protein: 17, serving: 415, unit: "1인분" },

  // ── 교촌치킨 ──
  { name: "교촌 오리지널(1조각)",        cal: 315, na: 570,  carb: 12, fat: 19, sugar: 0,  protein: 28, serving: 140, unit: "1조각" },
  { name: "교촌 허니오리지널(1조각)",    cal: 350, na: 600,  carb: 20, fat: 19, sugar: 8,  protein: 28, serving: 148, unit: "1조각" },
  { name: "교촌 허니콤보(1조각)",        cal: 375, na: 640,  carb: 24, fat: 19, sugar: 10, protein: 29, serving: 155, unit: "1조각" },
  { name: "교촌 레드콤보(1조각)",        cal: 335, na: 685,  carb: 15, fat: 19, sugar: 3,  protein: 27, serving: 143, unit: "1조각" },
  { name: "교촌 살살치킨(1조각)",        cal: 340, na: 660,  carb: 16, fat: 19, sugar: 4,  protein: 27, serving: 145, unit: "1조각" },

  // ── BHC치킨 ──
  { name: "뿌링클치킨(1조각)",           cal: 350, na: 625,  carb: 17, fat: 20, sugar: 2,  protein: 26, serving: 145, unit: "1조각" },
  { name: "맛초킹치킨(1조각)",           cal: 365, na: 670,  carb: 19, fat: 21, sugar: 3,  protein: 26, serving: 150, unit: "1조각" },
  { name: "BHC 황금올리브(1조각)",       cal: 325, na: 575,  carb: 13, fat: 19, sugar: 0,  protein: 26, serving: 138, unit: "1조각" },
  { name: "BHC 레드킹(1조각)",           cal: 355, na: 690,  carb: 16, fat: 20, sugar: 2,  protein: 27, serving: 146, unit: "1조각" },

  // ── BBQ치킨 ──
  { name: "BBQ 황금올리브(1조각)",       cal: 330, na: 590,  carb: 14, fat: 18, sugar: 0,  protein: 28, serving: 140, unit: "1조각" },
  { name: "BBQ 자메이카(1조각)",         cal: 340, na: 680,  carb: 16, fat: 18, sugar: 2,  protein: 27, serving: 145, unit: "1조각" },
  { name: "BBQ 블랙바베큐(1조각)",       cal: 345, na: 660,  carb: 17, fat: 18, sugar: 4,  protein: 27, serving: 146, unit: "1조각" },
  { name: "BBQ 순살치킨(1인분)",         cal: 480, na: 920,  carb: 28, fat: 27, sugar: 2,  protein: 36, serving: 200, unit: "1인분" },

  // ── 굽네치킨 ──
  { name: "굽네 오리지널(1조각)",        cal: 275, na: 580,  carb: 9,  fat: 14, sugar: 0,  protein: 28, serving: 130, unit: "1조각" },
  { name: "굽네 고추바사삭(1조각)",      cal: 290, na: 615,  carb: 10, fat: 15, sugar: 0,  protein: 28, serving: 133, unit: "1조각" },
  { name: "굽네 볼케이노(1조각)",        cal: 295, na: 650,  carb: 11, fat: 15, sugar: 1,  protein: 28, serving: 135, unit: "1조각" },
  { name: "굽네 시크릿양념(1조각)",      cal: 305, na: 640,  carb: 13, fat: 15, sugar: 3,  protein: 28, serving: 137, unit: "1조각" },

  // ── 파리바게뜨 ──
  { name: "파리바게뜨 소금빵",           cal: 220, na: 280,  carb: 32, fat: 8,  sugar: 4,  protein: 5,  serving: 80,  unit: "1개" },
  { name: "파리바게뜨 크루아상",         cal: 278, na: 320,  carb: 30, fat: 16, sugar: 5,  protein: 6,  serving: 95,  unit: "1개" },
  { name: "파리바게뜨 단팥빵",           cal: 260, na: 210,  carb: 49, fat: 5,  sugar: 18, protein: 6,  serving: 100, unit: "1개" },
  { name: "파리바게뜨 소보로빵",         cal: 310, na: 250,  carb: 48, fat: 11, sugar: 15, protein: 6,  serving: 105, unit: "1개" },
  { name: "파리바게뜨 에그샌드위치",     cal: 290, na: 530,  carb: 36, fat: 12, sugar: 4,  protein: 11, serving: 130, unit: "1개" },
  { name: "파리바게뜨 BLT샌드위치",     cal: 340, na: 690,  carb: 38, fat: 14, sugar: 5,  protein: 15, serving: 150, unit: "1개" },
  { name: "파리바게뜨 생크림케이크(1조각)", cal: 320, na: 180, carb: 38, fat: 17, sugar: 25, protein: 4, serving: 115, unit: "1조각" },
  { name: "파리바게뜨 치즈케이크(1조각)", cal: 380, na: 290, carb: 36, fat: 22, sugar: 23, protein: 7, serving: 120, unit: "1조각" },
  { name: "파리바게뜨 마카롱(1개)",      cal: 100, na: 30,   carb: 16, fat: 4,  sugar: 14, protein: 1,  serving: 28,  unit: "1개" },

  // ── 뚜레쥬르 ──
  { name: "뚜레쥬르 소보로빵",           cal: 310, na: 250,  carb: 48, fat: 11, sugar: 15, protein: 6,  serving: 105, unit: "1개" },
  { name: "뚜레쥬르 단팥빵",             cal: 250, na: 200,  carb: 47, fat: 4,  sugar: 16, protein: 5,  serving: 98,  unit: "1개" },
  { name: "뚜레쥬르 크루아상",           cal: 270, na: 310,  carb: 29, fat: 15, sugar: 4,  protein: 5,  serving: 90,  unit: "1개" },
  { name: "뚜레쥬르 베이컨에그샌드위치", cal: 370, na: 680,  carb: 38, fat: 18, sugar: 5,  protein: 15, serving: 150, unit: "1개" },
  { name: "뚜레쥬르 촉촉한초코케이크(1조각)", cal: 390, na: 220, carb: 52, fat: 18, sugar: 34, protein: 5, serving: 130, unit: "1조각" },
  { name: "뚜레쥬르 생크림빵",           cal: 240, na: 170,  carb: 34, fat: 10, sugar: 12, protein: 4,  serving: 90,  unit: "1개" },

  // ── 본죽 ──
  { name: "본죽 전복죽(小)",             cal: 310, na: 780,  carb: 55, fat: 4,  sugar: 2,  protein: 16, serving: 400, unit: "小(1인)" },
  { name: "본죽 쇠고기죽(小)",           cal: 330, na: 820,  carb: 56, fat: 6,  sugar: 2,  protein: 14, serving: 400, unit: "小(1인)" },
  { name: "본죽 닭죽(小)",               cal: 290, na: 760,  carb: 50, fat: 4,  sugar: 2,  protein: 15, serving: 400, unit: "小(1인)" },
  { name: "본죽 야채죽(小)",             cal: 260, na: 700,  carb: 50, fat: 3,  sugar: 3,  protein: 7,  serving: 400, unit: "小(1인)" },
  { name: "본죽 김치참치죽(小)",         cal: 345, na: 920,  carb: 55, fat: 7,  sugar: 2,  protein: 16, serving: 400, unit: "小(1인)" },
  { name: "본죽 낙지죽(小)",             cal: 280, na: 840,  carb: 48, fat: 3,  sugar: 2,  protein: 14, serving: 400, unit: "小(1인)" },

  // ── 한솥도시락 ──
  { name: "한솥 치킨마요(1인)",          cal: 520, na: 900,  carb: 75, fat: 16, sugar: 5,  protein: 20, serving: 350, unit: "1인분" },
  { name: "한솥 제육볶음도시락",         cal: 580, na: 980,  carb: 78, fat: 14, sugar: 8,  protein: 26, serving: 380, unit: "1인분" },
  { name: "한솥 돈까스도시락",           cal: 620, na: 850,  carb: 80, fat: 20, sugar: 5,  protein: 25, serving: 380, unit: "1인분" },
  { name: "한솥 참치마요도시락",         cal: 490, na: 820,  carb: 72, fat: 13, sugar: 4,  protein: 18, serving: 340, unit: "1인분" },
  { name: "한솥 불고기도시락",           cal: 560, na: 950,  carb: 76, fat: 13, sugar: 10, protein: 24, serving: 365, unit: "1인분" },
];

// 검색 함수: 2글자 이상 입력 시 이름 포함 검색
function searchFoods(query) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  return FOOD_DB.filter(f => f.name.includes(q)).slice(0, 8);
}
