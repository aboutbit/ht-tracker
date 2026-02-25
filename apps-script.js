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

const BP_SHEET       = 'BloodPressure';
const FOOD_SHEET     = 'FoodLog';
const EXERCISE_SHEET = 'ExerciseLog';
const MED_SHEET      = 'MedLog';

let _cb = null; // JSONP 콜백 이름

// ── 라우팅 ──
function doGet(e) {
  _cb = e.parameter.callback || null; // JSONP 지원

  const sheetType = e.parameter.sheet || 'bp'; // 'bp' | 'food' | 'exercise'
  const action    = e.parameter.action || 'read'; // 'read' | 'write' | 'delete'

  if (sheetType === 'food') {
    return handleFood(action, e.parameter);
  } else if (sheetType === 'exercise') {
    return handleExercise(action, e.parameter);
  } else if (sheetType === 'meds') {
    return handleMeds(action, e.parameter);
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
// 운동 기록 (ExerciseLog)
// ════════════════════════════════════════
function handleExercise(action, p) {
  if (action === 'write')  return exerciseWrite(p);
  if (action === 'delete') return exerciseDelete(p);
  return exerciseRead();
}

function getExerciseSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(EXERCISE_SHEET);
  if (!sh) {
    sh = ss.insertSheet(EXERCISE_SHEET);
    sh.appendRow(['datetime', 'exercise_type', 'name', 'duration', 'sets', 'distance_km', 'notes']);
    styleHeader(sh, 7, '#6d28d9');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 180);
    sh.setColumnWidth(3, 160);
  }
  return sh;
}

function exerciseRead() {
  try {
    const sh = getExerciseSheet();
    if (sh.getLastRow() < 2) return ok({ data: [] });
    const rows = sh.getDataRange().getValues();
    const data = rows.slice(1).filter(r => r[0]).map(r => ({
      datetime:      toISO(r[0]),
      exercise_type: r[1] || '',
      name:          r[2] || '',
      duration:      Number(r[3]) || 0,
      sets:          r[4] !== '' ? Number(r[4]) : null,
      distance_km:   r[5] !== '' ? Number(r[5]) : null,
      notes:         r[6] || ''
    })).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    return ok({ data });
  } catch(e) { return err(e.message); }
}

function exerciseWrite(p) {
  try {
    if (!p.name) return err('운동 이름 필요');
    if (!p.duration) return err('운동 시간 필요');
    const sh = getExerciseSheet();
    sh.appendRow([
      p.datetime      || new Date().toISOString(),
      p.exercise_type || '',
      p.name,
      Number(p.duration),
      p.sets        ? Number(p.sets)        : '',
      p.distance_km ? Number(p.distance_km) : '',
      p.notes       || ''
    ]);
    return ok({});
  } catch(e) { return err(e.message); }
}

function exerciseDelete(p) {
  try {
    const sh = getExerciseSheet();
    const rows = sh.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (toISO(rows[i][0]) === p.datetime && rows[i][2] === p.name) {
        sh.deleteRow(i + 1); return ok({});
      }
    }
    return err('기록 없음');
  } catch(e) { return err(e.message); }
}

// ════════════════════════════════════════
// 약/영양제 기록 (MedLog)
// ════════════════════════════════════════
function handleMeds(action, p) {
  if (action === 'write')  return medWrite(p);
  if (action === 'delete') return medDelete(p);
  return medRead();
}

function getMedSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(MED_SHEET);
  if (!sh) {
    sh = ss.insertSheet(MED_SHEET);
    sh.appendRow(['datetime', 'med_id', 'med_name', 'notes']);
    styleHeader(sh, 4, '#0f766e');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 180);
    sh.setColumnWidth(3, 180);
  }
  return sh;
}

function medRead() {
  try {
    const sh = getMedSheet();
    if (sh.getLastRow() < 2) return ok({ data: [] });
    const rows = sh.getDataRange().getValues();
    const data = rows.slice(1).filter(r => r[0]).map(r => ({
      datetime: toISO(r[0]),
      med_id:   r[1] || '',
      med_name: r[2] || '',
      notes:    r[3] || ''
    })).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    return ok({ data });
  } catch(e) { return err(e.message); }
}

function medWrite(p) {
  try {
    if (!p.med_name) return err('약 이름 필요');
    const sh = getMedSheet();
    sh.appendRow([
      p.datetime || new Date().toISOString(),
      p.med_id   || '',
      p.med_name || '',
      p.notes    || ''
    ]);
    return ok({});
  } catch(e) { return err(e.message); }
}

function medDelete(p) {
  try {
    const sh = getMedSheet();
    const rows = sh.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (toISO(rows[i][0]) === p.datetime && rows[i][1] === p.med_id) {
        sh.deleteRow(i + 1); return ok({});
      }
    }
    return err('기록 없음');
  } catch(e) { return err(e.message); }
}

// ════════════════════════════════════════
// Telegram 알림
// ════════════════════════════════════════
const TELEGRAM_BOT_TOKEN = '8409366495:AAEu76y3fuSh4yjrzEnJ7C-7Pu_OuRkOm74';
const TELEGRAM_CHAT_ID   = '8404210627';

function sendTelegramMessage(text) {
  const url = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage';
  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text, parse_mode: 'HTML' })
  });
}

function sendMorningBPReminder() {
  sendTelegramMessage('🩺 <b>혈압 측정 시간</b> (오전 8시)\n지금 바로 기록해주세요!');
}

function sendEveningBPReminder() {
  sendTelegramMessage('🩺 <b>혈압 측정 시간</b> (오후 10시)\n오늘 저녁 혈압을 기록해주세요!');
}

// ════════════════════════════════════════
// 공통 유틸
// ════════════════════════════════════════
function ok(obj)  { return respond(Object.assign({ ok: true  }, obj)); }
function err(msg) { return respond({ ok: false, error: msg }); }

function respond(obj) {
  const json = JSON.stringify(obj);
  if (_cb) {
    // JSONP: <script> 태그로 요청 시 CORS 우회
    return ContentService
      .createTextOutput(_cb + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonOut(obj) { return respond(obj); }

function toISO(val) {
  if (val instanceof Date) {
    const tz = Session.getScriptTimeZone();
    return Utilities.formatDate(val, tz, "yyyy-MM-dd'T'HH:mm:ss");
  }
  return String(val);
}

function styleHeader(sheet, cols, color) {
  const range = sheet.getRange(1, 1, 1, cols);
  range.setBackground(color);
  range.setFontColor('#ffffff');
  range.setFontWeight('bold');
}
