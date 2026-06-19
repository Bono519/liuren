// ============================================================
//  小六壬 核心資料庫
// ============================================================

const LIUREN = [
  {
    id: 1,
    name: '大安',
    nature: 'ji',
    natureText: '大吉',
    stars: '天乙貴人',
    keywords: ['平穩安定', '事緩則圓', '靜待為吉', '利守不利動'],
    meanings: {
      general: '事情穩定，宜靜不宜動，稍作等待則吉。',
      seek: '所求可得，但需耐心等候，不可急進。',
      travel: '出行平安，但宜稍緩再動。',
      wealth: '財運平穩，守成為要，不宜冒險。',
      health: '身體平安，若有小恙，靜養即可痊癒。',
      relations: '關係和諧，宜溝通協調，忌強硬。',
    },
    color: '#2e9e5a',   // 飽和翠綠
    textColor: '#ffffff',
  },
  {
    id: 2,
    name: '留連',
    nature: 'xiong',
    natureText: '中平偏凶',
    stars: '六合',
    keywords: ['事情延遲', '反覆難決', '進退兩難', '宜等待時機'],
    meanings: {
      general: '事情拖延反覆，難以決斷，宜靜候時機。',
      seek: '所求難以如願，事情停滯，需要再等。',
      travel: '行程可能延誤或有變故，謹慎為宜。',
      wealth: '財來財去，難以積累，避免大額交易。',
      health: '病情反覆，需持續調養，不可大意。',
      relations: '感情或合作關係進退兩難，宜冷靜觀察。',
    },
    color: '#c87820',   // 飽和琥珀橙
    textColor: '#ffffff',
  },
  {
    id: 3,
    name: '速喜',
    nature: 'ji',
    natureText: '吉',
    stars: '朱雀',
    keywords: ['喜事快至', '宜速行動', '貴人相助', '消息傳來'],
    meanings: {
      general: '喜事將至，宜把握時機迅速行動，貴人相助。',
      seek: '所求可成，且速度較快，主動出擊有利。',
      travel: '出行順利，可能有意外驚喜或收穫。',
      wealth: '財運亨通，可積極出手，快進快出為佳。',
      health: '病情快速好轉，精神振作，可加快療程。',
      relations: '感情進展迅速，喜訊在即，宜積極表達。',
    },
    color: '#d4940a',   // 飽和金黃
    textColor: '#fff8e0',
  },
  {
    id: 4,
    name: '赤口',
    nature: 'xiong',
    natureText: '凶',
    stars: '白虎',
    keywords: ['口舌是非', '爭端衝突', '小人作祟', '謹言慎行'],
    meanings: {
      general: '口舌是非多，宜謹言慎行，避免衝突爭端。',
      seek: '所求阻礙多，恐有小人從中作梗，暫緩。',
      travel: '出行恐遇口角或意外，宜延後或謹慎。',
      wealth: '財路受阻，恐有糾紛或損失，保守為宜。',
      health: '病情加重或有新症狀，宜盡快就醫。',
      relations: '關係出現摩擦，慎防誤解或第三者介入。',
    },
    color: '#c02828',   // 飽和朱紅
    textColor: '#ffffff',
  },
  {
    id: 5,
    name: '小吉',
    nature: 'ji',
    natureText: '小吉',
    stars: '六合',
    keywords: ['小有收穫', '循序漸進', '謀事漸成', '平和順遂'],
    meanings: {
      general: '事雖不大，但循序漸進，平和順遂，小有收穫。',
      seek: '所求可得，但規模或成果較預期小，知足為樂。',
      travel: '出行平順，或有小驚喜，整體順利。',
      wealth: '小財可得，穩健理財，不貪大利。',
      health: '健康良好，小病不礙大事，注意作息。',
      relations: '關係溫和穩定，適合進一步深化。',
    },
    color: '#1a7a9a',   // 飽和青碧
    textColor: '#ffffff',
  },
  {
    id: 6,
    name: '空亡',
    nature: 'xiong',
    natureText: '大凶',
    stars: '玄武',
    keywords: ['諸事落空', '計劃落空', '不宜出行', '靜守待時'],
    meanings: {
      general: '諸事不宜，計劃恐落空，宜靜守，不可強行。',
      seek: '所求難成，此時出手恐竹籃打水，暫緩為上。',
      travel: '出行不利，恐有失物或迷失，宜留守。',
      wealth: '財運極差，嚴防損失或被騙，切勿投資。',
      health: '病情嚴重或有隱憂，務必就醫詳查。',
      relations: '感情或合作關係恐有破裂，謹慎維護。',
    },
    color: '#6a30b0',   // 飽和深紫
    textColor: '#ffffff',
  },
];

// 時辰對照（24小時制 → 時辰序號 1–12）
const SHICHEN = [
  { name: '子時', range: [23, 0], num: 1 },
  { name: '丑時', range: [1, 2], num: 2 },
  { name: '寅時', range: [3, 4], num: 3 },
  { name: '卯時', range: [5, 6], num: 4 },
  { name: '辰時', range: [7, 8], num: 5 },
  { name: '巳時', range: [9, 10], num: 6 },
  { name: '午時', range: [11, 12], num: 7 },
  { name: '未時', range: [13, 14], num: 8 },
  { name: '申時', range: [15, 16], num: 9 },
  { name: '酉時', range: [17, 18], num: 10 },
  { name: '戌時', range: [19, 20], num: 11 },
  { name: '亥時', range: [21, 22], num: 12 },
];

const LUNAR_MONTHS = ['正月', '二月', '三月', '四月', '五月', '六月',
                      '七月', '八月', '九月', '十月', '十一月', '十二月'];

// ============================================================
//  農曆轉換（簡化版，使用 Intl API）
// ============================================================
function getLunarInfo(date) {
  try {
    const fmt = new Intl.DateTimeFormat('zh-TW-u-ca-chinese', {
      month: 'numeric',
      day: 'numeric',
    });
    const parts = fmt.formatToParts(date);
    let month = 1, day = 1;
    for (const p of parts) {
      if (p.type === 'month') month = parseInt(p.value);
      if (p.type === 'day')   day   = parseInt(p.value);
    }
    return { month, day, monthName: LUNAR_MONTHS[month - 1] };
  } catch {
    // Fallback: rough estimation (not accurate, but won't crash)
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return { month: m, day: d, monthName: LUNAR_MONTHS[m - 1], fallback: true };
  }
}

// ============================================================
//  時辰取得
// ============================================================
function getShichen(hour) {
  if (hour === 23) return SHICHEN[0];
  for (const s of SHICHEN) {
    if (hour >= s.range[0] && hour <= s.range[1]) return s;
  }
  return SHICHEN[0];
}

// ============================================================
//  小六壬起卦演算法（最主流版本）
//
//  口訣：以大安起正月，月上起日，日上起時
//
//  ① 月宮：從大安起數月份，monthIdx = (月 - 1) % 6
//  ② 日宮：從月宮起，初一停月宮本身，dayIdx = (monthIdx + 日 - 1) % 6
//  ③ 時宮：從日宮起，子時停日宮本身，timeIdx = (dayIdx + 時辰序 - 1) % 6
//           時辰序：子=1, 丑=2, 寅=3, 卯=4, 辰=5, 巳=6 ... 亥=12
//
//  驗算①（農曆六月初五 巳時）→ 正確答案：速喜
//    月：(6-1)%6=5 → 空亡
//    日：(5+5-1)%6=3 → 赤口
//    時：(3+6-1)%6=2 → 速喜 ✓
//
//  驗算②（農曆八月十七 辰時）→ 正確答案：赤口
//    月：(8-1)%6=1 → 留連
//    日：(1+17-1)%6=5 → 空亡（17%6=5）wait: (1+16)%6=17%6=5 → 空亡
//    時：(5+5-1)%6=3 → 赤口 ✓
//
// ============================================================
function calculate(date) {
  const lunar = getLunarInfo(date);
  const hour  = date.getHours();
  const sc    = getShichen(hour);

  // ① 月宮：大安起正月，數月份數停點
  const monthIdx = (lunar.month - 1) % 6;

  // ② 日宮：從月宮起，初一停月宮本身
  const dayIdx = (monthIdx + lunar.day - 1) % 6;

  // ③ 時宮：從日宮起，子時(num=1)停日宮本身，位移 = num-1
  //    巳時(num=6)：dayIdx+5，驗算 農六初五巳時：3+5=8%6=2 → 速喜 ✓
  const timeIdx = (dayIdx + sc.num - 1) % 6;

  const monthPalace = LIUREN[monthIdx];
  const dayPalace   = LIUREN[dayIdx];
  const timePalace  = LIUREN[timeIdx];  // 主卦

  return {
    lunar,
    shichen: sc,
    monthPalace,
    dayPalace,
    timePalace,
    mainGua: timePalace,
  };
}

// ============================================================
//  SVG 手指掐指圖
//  左手食指、中指、無名指，每指三節，共六宮
//  宮位順序（順時針掐算）：
//    食指下節=大安(1) 食指中節=留連(2) 食指上節=速喜(3)
//    中指上節=赤口(4) 中指中節=小吉(5) 中指下節=空亡(6)
//  ※ 注意：各流派宮位排列略有差異，此為最通用版本
// ============================================================
function buildWheel(activeId) {
  // 每根手指寬度、指節高度
  const FW = 26, FW2 = 22; // 食指/無名指寬, 中指寬
  const KH = 28;            // 指節高度
  const GAP = 8;            // 指間距
  const PALM_H = 22;        // 掌根高度

  // 三根手指 x 起點
  const x1 = 18;            // 食指
  const x2 = x1 + FW + GAP;// 中指
  const x3 = x2 + FW2 + GAP;// 無名指

  // 指節頂端 y（由上至下：上節、中節、下節）
  const yTop = 10;
  const yMid = yTop + KH + 3;
  const yBot = yMid + KH + 3;
  const yPalm = yBot + KH + 3;

  // 六宮指節定義 [guaId, x, y, w, label_offset_x]
  const knuckles = [
    { id: 1, x: x1, y: yBot, w: FW,  label: '大安' }, // 食指下節
    { id: 2, x: x1, y: yMid, w: FW,  label: '留連' }, // 食指中節
    { id: 3, x: x1, y: yTop, w: FW,  label: '速喜' }, // 食指上節
    { id: 4, x: x2, y: yTop, w: FW2, label: '赤口' }, // 中指上節
    { id: 5, x: x2, y: yMid, w: FW2, label: '小吉' }, // 中指中節
    { id: 6, x: x2, y: yBot, w: FW2, label: '空亡' }, // 中指下節
  ];

  // 無名指節（僅裝飾，不含宮位）
  const ring = [
    { x: x3, y: yTop, w: FW },
    { x: x3, y: yMid, w: FW },
    { x: x3, y: yBot, w: FW },
  ];

  const totalH = yPalm + PALM_H + 16;

  // 拇指指向主卦的箭頭 - 指向對應指節中心
  const activeK = knuckles.find(k => k.id === activeId);
  const thumbTipX = 6;
  const thumbTipY = activeK ? activeK.y + KH / 2 : yBot + KH / 2;

  let svg = `<svg viewBox="0 0 ${x3 + FW + 18} ${totalH}" xmlns="http://www.w3.org/2000/svg">`;

  // 掌根
  svg += `<rect x="${x1}" y="${yPalm}" width="${x3 + FW - x1}" height="${PALM_H}"
    rx="4" fill="#1e3820" stroke="#3a5a3a" stroke-width="1"/>`;

  // 無名指裝飾節
  ring.forEach(r => {
    svg += `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${KH}"
      rx="3" fill="#1a2e1a" stroke="#2e4a2e" stroke-width="0.8"/>`;
    // 指節紋線
    svg += `<line x1="${r.x+4}" y1="${r.y + KH - 1}" x2="${r.x + r.w - 4}" y2="${r.y + KH - 1}"
      stroke="#2e4a2e" stroke-width="0.6"/>`;
  });

  // 六宮指節
  knuckles.forEach(k => {
    const gua   = LIUREN[k.id - 1];
    const isAct = k.id === activeId;
    const fill  = isAct ? gua.color : '#1e2e1e';
    const fillOp= isAct ? '1' : '1';
    const stroke= isAct ? gua.color : '#304830';
    const sw    = isAct ? '2' : '0.8';
    const tc    = isAct ? (gua.textColor || '#ffffff') : '#4a7a4a';
    const fw    = isAct ? 'bold' : 'normal';
    const fs    = 8;

    svg += `<rect x="${k.x}" y="${k.y}" width="${k.w}" height="${KH}"
      rx="3" fill="${fill}" fill-opacity="${fillOp}" stroke="${stroke}" stroke-width="${sw}"/>`;

    // 指節橫紋
    if (!isAct) {
      svg += `<line x1="${k.x+3}" y1="${k.y + KH - 1}" x2="${k.x + k.w - 3}" y2="${k.y + KH - 1}"
        stroke="#2e4a2e" stroke-width="0.5"/>`;
    }

    // 宮名文字
    const tx = k.x + k.w / 2;
    const ty = k.y + KH / 2 + 3;
    svg += `<text x="${tx}" y="${ty}" text-anchor="middle"
      font-size="${fs}" font-family="serif" fill="${tc}" font-weight="${fw}">${k.label}</text>`;

    // 主卦光暈
    if (isAct) {
      svg += `<rect x="${k.x - 2}" y="${k.y - 2}" width="${k.w + 4}" height="${KH + 4}"
        rx="5" fill="none" stroke="${gua.color}" stroke-width="1.5" opacity="0.5"/>`;
    }
  });

  // 拇指形狀（指向主卦）
  const thumbBaseY = Math.max(20, Math.min(thumbTipY + 10, totalH - 10));
  svg += `<path d="M${thumbTipX + 2},${thumbTipY}
    C${thumbTipX - 2},${thumbTipY - 6} ${thumbTipX - 2},${thumbBaseY - 12} ${thumbTipX + 4},${thumbBaseY}
    L${thumbTipX + 12},${thumbBaseY + 6} L${thumbTipX + 10},${thumbTipY + 4} Z"
    fill="#1e3820" stroke="#3a5a3a" stroke-width="0.8"/>`;

  // 拇指指甲
  svg += `<ellipse cx="${thumbTipX + 5}" cy="${thumbTipY + 1}" rx="3.5" ry="4"
    fill="#162814" stroke="#2e4a2e" stroke-width="0.6"/>`;

  // 指向箭頭（拇指尖→主卦）
  if (activeK) {
    const ax = x1 - 2;
    const ay = thumbTipY;
    svg += `<line x1="${ax}" y1="${ay}" x2="${activeK.x + 1}" y2="${activeK.y + KH/2}"
      stroke="#c8a84b" stroke-width="1" stroke-dasharray="2,2" opacity="0.7"/>`;
  }

  svg += `</svg>`;
  return svg;
}

// ============================================================
//  UI 渲染：結果面板
// ============================================================
function renderResult(result, question) {
  const { lunar, shichen, monthPalace, dayPalace, mainGua } = result;

  // Palace Wheel
  document.getElementById('palaceWheel').innerHTML = buildWheel(mainGua.id);

  // Main info
  document.getElementById('guaName').textContent = mainGua.name;
  document.getElementById('guaStars').textContent = `神煞：${mainGua.stars}`;
  const natureEl = document.getElementById('guaNature');
  natureEl.textContent = mainGua.natureText;
  natureEl.className = `gua-nature nature-${mainGua.nature}`;

  // Calc detail
  const fallback = lunar.fallback ? '（農曆估算）' : '';
  document.getElementById('calcDetail').innerHTML =
    `農曆 ${lunar.monthName} 初${lunar.day}日 ${fallback}
    ｜${shichen.name}（時辰序：${shichen.num}）<br>
    月宮：<strong>${monthPalace.name}</strong>
    → 日宮：<strong>${dayPalace.name}</strong>
    → 時宮（主卦）：<strong>${mainGua.name}</strong>`;

  // Interpretation
  const qKey = detectQuestionType(question);
  const interpText = mainGua.meanings[qKey] || mainGua.meanings.general;

  document.getElementById('interpretation').innerHTML = `
    <h3>解卦</h3>
    ${question ? `<div class="interp-row"><span class="interp-label">占問</span><span class="interp-text">${question}</span></div>` : ''}
    <div class="interp-row"><span class="interp-label">論斷</span><span class="interp-text">${interpText}</span></div>
    <div class="interp-row"><span class="interp-label">象意</span><span class="interp-text">${mainGua.keywords.join('、')}</span></div>
  `;

  document.getElementById('resultArea').style.display = 'block';
  document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function detectQuestionType(q) {
  if (!q) return 'general';
  if (/財|錢|收入|薪|投資|生意/.test(q)) return 'wealth';
  if (/出行|旅|出差|出門/.test(q)) return 'travel';
  if (/病|健康|身體|醫/.test(q)) return 'health';
  if (/感情|婚|戀|愛|交往|對象/.test(q)) return 'relations';
  if (/求|申請|簽約|面試|合作/.test(q)) return 'seek';
  return 'general';
}

// ============================================================
//  LocalStorage 筆記系統
// ============================================================
const STORE_KEY = 'liuren_notes_v1';

function loadNotes() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}

function saveNotes(notes) {
  localStorage.setItem(STORE_KEY, JSON.stringify(notes));
}

function addNote(noteObj) {
  const notes = loadNotes();
  notes.unshift(noteObj);
  saveNotes(notes);
}

function updateNoteVerify(id, verifyStatus) {
  const notes = loadNotes();
  const n = notes.find(n => n.id === id);
  if (n) { n.verify = verifyStatus; saveNotes(notes); }
}

function deleteNote(id) {
  const notes = loadNotes().filter(n => n.id !== id);
  saveNotes(notes);
}

// ============================================================
//  筆記列表渲染
// ============================================================
const VERIFY_MAP = {
  pending:    { label: '待驗證', cls: 'vb-pending' },
  accurate:   { label: '✓ 準確', cls: 'vb-accurate' },
  inaccurate: { label: '✗ 不準', cls: 'vb-inaccurate' },
  partial:    { label: '△ 部分', cls: 'vb-partial' },
};

function renderNotes(filter = '') {
  let notes = loadNotes();
  if (filter) notes = notes.filter(n => n.verify === filter);

  const container = document.getElementById('notesList');
  if (!notes.length) {
    container.innerHTML = '<p class="empty-hint">尚無符合的筆記</p>';
    return;
  }

  container.innerHTML = notes.map(n => {
    const v = VERIFY_MAP[n.verify] || VERIFY_MAP.pending;
    const dt = new Date(n.timestamp).toLocaleString('zh-TW', {
      month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
    });
    return `
    <div class="note-card" data-id="${n.id}">
      <div class="note-top">
        <span class="note-gua">${n.guaName}｜${n.guaNatureText}</span>
        <span class="note-date">${dt}</span>
      </div>
      ${n.question ? `<div class="note-question">📌 ${n.question}</div>` : ''}
      ${n.memo ? `<div class="note-memo">${n.memo}</div>` : ''}
      <div class="note-footer">
        <span class="verify-badge ${v.cls}">${v.label}</span>
        <div class="note-actions">
          <select class="verify-select" data-id="${n.id}">
            <option value="pending"    ${n.verify==='pending'    ?'selected':''}>待驗證</option>
            <option value="accurate"   ${n.verify==='accurate'   ?'selected':''}>準確</option>
            <option value="inaccurate" ${n.verify==='inaccurate' ?'selected':''}>不準</option>
            <option value="partial"    ${n.verify==='partial'    ?'selected':''}>部分準</option>
          </select>
          <button class="btn-del" data-id="${n.id}">刪除</button>
        </div>
      </div>
    </div>`;
  }).join('');

  // Bind events
  container.querySelectorAll('.verify-select').forEach(sel => {
    sel.addEventListener('change', e => {
      e.stopPropagation();
      updateNoteVerify(sel.dataset.id, sel.value);
      renderNotes(document.getElementById('filterVerify').value);
    });
  });
  container.querySelectorAll('.btn-del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm('確定刪除這筆紀錄？')) {
        deleteNote(btn.dataset.id);
        renderNotes(document.getElementById('filterVerify').value);
      }
    });
  });
  container.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => showNoteDetail(card.dataset.id));
  });
}

// ============================================================
//  筆記詳細 Modal
// ============================================================
function showNoteDetail(id) {
  const note = loadNotes().find(n => n.id === id);
  if (!note) return;
  const gua = LIUREN.find(g => g.name === note.guaName);
  if (!gua) return;

  const dt = new Date(note.timestamp).toLocaleString('zh-TW');
  const v = VERIFY_MAP[note.verify] || VERIFY_MAP.pending;

  document.getElementById('modalContent').innerHTML = `
    <div style="margin-bottom:16px">
      <div class="gua-name" style="font-size:1.6rem">${gua.name}</div>
      <div class="gua-stars">${gua.stars}</div>
      <span class="gua-nature nature-${gua.nature}">${gua.natureText}</span>
    </div>
    <div class="calc-detail">${note.calcDetail || ''}</div>
    <div class="card-inner" style="margin-top:12px">
      <div class="interp-row"><span class="interp-label">占問</span><span class="interp-text">${note.question || '（未填）'}</span></div>
      <div class="interp-row"><span class="interp-label">論斷</span><span class="interp-text">${note.interpText || ''}</span></div>
      <div class="interp-row"><span class="interp-label">象意</span><span class="interp-text">${gua.keywords.join('、')}</span></div>
      ${note.memo ? `<div class="interp-row"><span class="interp-label">備注</span><span class="interp-text">${note.memo}</span></div>` : ''}
    </div>
    <div style="margin-top:14px;font-size:0.78rem;color:var(--text-dim)">
      記錄時間：${dt}　驗證：<span class="verify-badge ${v.cls}">${v.label}</span>
    </div>
  `;
  document.getElementById('modalOverlay').style.display = 'flex';
}

// ============================================================
//  宮位指南渲染
// ============================================================
function renderGuide() {
  document.getElementById('guideGrid').innerHTML = LIUREN.map(g => `
    <div class="guide-item ${g.nature}">
      <div class="guide-name">${g.name}</div>
      <div class="guide-nature">${g.natureText}｜${g.stars}</div>
      <div class="guide-keywords">${g.keywords.join('・')}</div>
    </div>
  `).join('');
}

// ============================================================
//  狀態
// ============================================================
let currentResult = null;
let currentQuestion = '';

// ============================================================
//  初始化
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // 預設時間為現在
  setNow();
  renderGuide();
  renderNotes();

  // 用現在時間
  document.getElementById('btnNow').addEventListener('click', setNow);

  // 起卦
  document.getElementById('btnDivine').addEventListener('click', () => {
    const timeVal = document.getElementById('divTime').value;
    if (!timeVal) { alert('請先選擇時間'); return; }
    const date = new Date(timeVal);
    currentQuestion = document.getElementById('divQuestion').value.trim();
    currentResult = calculate(date);
    renderResult(currentResult, currentQuestion);
  });

  // 存入筆記
  document.getElementById('btnSave').addEventListener('click', () => {
    if (!currentResult) return;
    const memo = document.getElementById('saveNote').value.trim();
    const gua = currentResult.mainGua;
    const interpEl = document.getElementById('interpretation');
    const interpRows = interpEl.querySelectorAll('.interp-row');
    let interpText = '';
    interpRows.forEach(r => {
      const label = r.querySelector('.interp-label')?.textContent;
      const text  = r.querySelector('.interp-text')?.textContent;
      if (label === '論斷') interpText = text;
    });

    addNote({
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      guaName: gua.name,
      guaNatureText: gua.natureText,
      question: currentQuestion,
      memo,
      interpText,
      calcDetail: document.getElementById('calcDetail').textContent,
      verify: 'pending',
    });

    document.getElementById('saveNote').value = '';
    alert('✅ 已存入筆記');
    renderNotes();
  });

  // 篩選
  document.getElementById('filterVerify').addEventListener('change', e => {
    renderNotes(e.target.value);
  });

  // 清除全部
  document.getElementById('btnClearAll').addEventListener('click', () => {
    if (confirm('確定清除所有筆記？此動作無法復原。')) {
      localStorage.removeItem(STORE_KEY);
      renderNotes();
    }
  });

  // Modal 關閉
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modalOverlay').style.display = 'none';
  });
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay'))
      document.getElementById('modalOverlay').style.display = 'none';
  });

  // Tab 切換
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
      if (btn.dataset.tab === 'notes') renderNotes(document.getElementById('filterVerify').value);
    });
  });

  // PWA 安裝提示
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
  });
});

function setNow() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  document.getElementById('divTime').value = local.toISOString().slice(0, 16);
}

// ============================================================
//  Service Worker 註冊
// ============================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
