// ============================================================
// 혈압 + 식사 기록기 - Google Apps Script 백엔드
// ============================================================
// 사용법:
// 1. Google Sheets에서 확장프로그램 > Apps Script 열기
// 2. 이 코드 전체를 붙여넣기 (Code.gs 내용을 교체)
// 3. 저장 후: 배포 > 새 배포 > 유형: 웹 앱
//    - 실행 계정: 나 (본인)
//    - 액세스 권한: 모든 사용자(익명 포함)
// 4. 배포 URL을 앱 설정 화면에 입력
// ============================================================

const BP_SHEET   = 'BloodPressure';
const FOOD_SHEET = 'FoodLog';

// ── 라우팅 ──
function doGet(e) {
  const sheetType = e.parameter.sheet || 'bp'; // 'bp' | 'food'
  const action    = e.parameter.action || 'read'; // 'read' | 'write' | 'delete'

  if (sheetType === 'food') {
    return handleFood(action, e.parameter);
  } else {
    return handleBP(action, e.parameter);
  }
}

// ════════════════════════════════════════
// 혈압 (BloodPressure)
// ════════════════════════════════════════
function handleBP(action, p) {
  if (action === 'write')  return bpWrite(p);
  if (action === 'delete') return bpDelete(p);
  return bpRead();
}

function getBPSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(BP_SHEET);
  if (!sh) {
    sh = ss.insertSheet(BP_SHEET);
    sh.appendRow(['datetime', 'systolic', 'diastolic', 'pulse', 'notes']);
    styleHeader(sh, 5, '#1e40af');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 180);
  }
  return sh;
}

function bpRead() {
  try {
    const sh = getBPSheet();
    if (sh.getLastRow() < 2) return ok({ data: [] });
    const rows = sh.getDataRange().getValues();
    const data = rows.slice(1).filter(r => r[0]).map(r => ({
      datetime: toISO(r[0]),
      systolic:  Number(r[1]),
      diastolic: Number(r[2]),
      pulse:     r[3] !== '' ? Number(r[3]) : null,
      notes:     r[4] || ''
    })).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    return ok({ data });
  } catch(e) { return err(e.message); }
}

function bpWrite(p) {
  try {
    const sbp = Number(p.systolic);
    const dbp = Number(p.diastolic);
    if (!sbp || !dbp) return err('수축기/이완기 값 필요');
    const sh = getBPSheet();
    sh.appendRow([
      p.datetime || new Date().toISOString(),
      sbp, dbp,
      p.pulse ? Number(p.pulse) : '',
      p.notes || ''
    ]);
    return ok({});
  } catch(e) { return err(e.message); }
}

function bpDelete(p) {
  try {
    const sh = getBPSheet();
    const rows = sh.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (toISO(rows[i][0]) === p.datetime) { sh.deleteRow(i + 1); return ok({}); }
    }
    return err('기록 없음');
  } catch(e) { return err(e.message); }
}

// ════════════════════════════════════════
// 식사 기록 (FoodLog)
// ════════════════════════════════════════
function handleFood(action, p) {
  if (action === 'write')  return foodWrite(p);
  if (action === 'delete') return foodDelete(p);
  return foodRead();
}

function getFoodSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(FOOD_SHEET);
  if (!sh) {
    sh = ss.insertSheet(FOOD_SHEET);
    sh.appendRow(['datetime', 'meal', 'food_name', 'amount_g', 'calories', 'sodium', 'carbs', 'fat', 'sugar', 'protein', 'notes']);
    styleHeader(sh, 11, '#065f46');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 180);
    sh.setColumnWidth(3, 180);
  }
  return sh;
}

function foodRead() {
  try {
    const sh = getFoodSheet();
    if (sh.getLastRow() < 2) return ok({ data: [] });
    const rows = sh.getDataRange().getValues();
    const data = rows.slice(1).filter(r => r[0]).map(r => ({
      datetime: toISO(r[0]),
      meal:      r[1] || '',
      food_name: r[2] || '',
      amount_g:  Number(r[3]) || 0,
      calories:  Number(r[4]) || 0,
      sodium:    Number(r[5]) || 0,
      carbs:     Number(r[6]) || 0,
      fat:       Number(r[7]) || 0,
      sugar:     Number(r[8]) || 0,
      protein:   Number(r[9]) || 0,
      notes:     r[10] || ''
    })).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    return ok({ data });
  } catch(e) { return err(e.message); }
}

function foodWrite(p) {
  try {
    const sh = getFoodSheet();
    sh.appendRow([
      p.datetime  || new Date().toISOString(),
      p.meal      || '',
      p.food_name || '',
      Number(p.amount_g)  || 0,
      Number(p.calories)  || 0,
      Number(p.sodium)    || 0,
      Number(p.carbs)     || 0,
      Number(p.fat)       || 0,
      Number(p.sugar)     || 0,
      Number(p.protein)   || 0,
      p.notes     || ''
    ]);
    return ok({});
  } catch(e) { return err(e.message); }
}

function foodDelete(p) {
  try {
    const sh = getFoodSheet();
    const rows = sh.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (toISO(rows[i][0]) === p.datetime && rows[i][2] === p.food_name) {
        sh.deleteRow(i + 1); return ok({});
      }
    }
    return err('기록 없음');
  } catch(e) { return err(e.message); }
}

// ════════════════════════════════════════
// 공통 유틸
// ════════════════════════════════════════
function ok(obj)  { return jsonOut(Object.assign({ ok: true  }, obj)); }
function err(msg) { return jsonOut({ ok: false, error: msg }); }

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function toISO(val) {
  return val instanceof Date ? val.toISOString() : String(val);
}

function styleHeader(sheet, cols, color) {
  const range = sheet.getRange(1, 1, 1, cols);
  range.setBackground(color);
  range.setFontColor('#ffffff');
  range.setFontWeight('bold');
}
