// ============================================================
// 한국 식품 영양 데이터베이스 (1인분 기준)
// 출처: 식품의약품안전처 식품영양성분 DB 참고
// 단위: 칼로리(kcal), 나트륨(mg), 탄수화물/지방/당류/단백질(g)
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
  { name: "바나나", cal: 85,      na: 1,   carb: 22, fat: 0.3, sugar: 14, protein: 1,  serving: 100, unit: "1개" },
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
];

// 검색 함수: 2글자 이상 입력 시 이름 포함 검색
function searchFoods(query) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  return FOOD_DB.filter(f => f.name.includes(q)).slice(0, 8);
}
