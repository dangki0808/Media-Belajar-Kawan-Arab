/* Kawan Arab — inti: penyimpanan, utilitas Arab, suara, router */
(function () {
  "use strict";
  const K = window.K = {};
  const KEY = "kawanArab.v1";

  /* ---------- Data gabungan ---------- */
  K.UNITS = window.UNITS; K.QURAN = window.QURAN; K.LEVELS = window.LEVELS;
  K.ALLU = K.QURAN.concat(K.UNITS);
  K.byId = id => K.ALLU.find(u => u.id === id);
  K.ORDER = ["q1", "q2", "q3", "u1", "u2", "u3", "u4", "u5", "u6", "u7", "u8", "q4", "q5", "q6",
    "u9", "u10", "u11", "u12", "u13", "u14", "u15", "u16", "u17", "u18", "u19", "u20", "u21", "u22", "u23", "u24"];
  K.unitLabel = u => u.q ? "Al-Qur'an " + u.id.slice(1) : "Unit " + u.id.slice(1);

  /* ---------- Penyimpanan ---------- */
  const defState = () => ({
    name: "", sex: "", onboarded: false, canRead: true, goal: 30,
    xp: 0, streak: 0, lastDay: null, days: [], dayXP: {},
    done: {}, cards: {}, latin: "auto", rate: 0.85,
    exams: {}, certs: {}, talks: {}, letters: false,
    aiKey: "", aiModel: "", aiLog: []
  });
  let S;
  try { S = Object.assign(defState(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = defState(); }
  K.S = () => S;
  K.save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };
  K.replaceState = obj => { S = Object.assign(defState(), obj); K.save(); };
  K.resetState = () => { S = defState(); K.save(); };

  const localDate = d => { const z = new Date(d.getTime() - d.getTimezoneOffset() * 6e4); return z.toISOString().slice(0, 10); };
  K.today = () => localDate(new Date());
  K.addDays = (n, from) => { const d = from ? new Date(from + "T12:00:00") : new Date(); d.setDate(d.getDate() + n); return localDate(d); };
  K.addXP = n => {
    S.xp += n;
    const t = K.today();
    if (S.lastDay !== t) {
      S.streak = S.lastDay === K.addDays(-1) ? S.streak + 1 : 1;
      S.lastDay = t;
    }
    if (!S.days.includes(t)) { S.days.push(t); S.days = S.days.slice(-120); }
    S.dayXP[t] = (S.dayXP[t] || 0) + n;
    const keys = Object.keys(S.dayXP).sort(); if (keys.length > 60) delete S.dayXP[keys[0]];
    K.save();
  };
  K.todayXP = () => S.dayXP[K.today()] || 0;

  /* ---------- Util ---------- */
  K.esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  K.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  K.pick = a => a[Math.floor(Math.random() * a.length)];
  K.toast = msg => {
    document.querySelectorAll(".toast").forEach(t => t.remove());
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2600);
  };

  /* ---------- Bahasa Arab ---------- */
  const DIA = /[ً-ٰٟـۖ-ۭ]/g;
  K.strip = s => String(s).replace(DIA, "");
  K.norm = s => K.strip(s)
    .replace(/[أإآٱ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").replace(/ؤ/g, "و").replace(/ئ/g, "ي")
    .replace(/[^ء-ي\s]/g, " ").replace(/\s+/g, " ").trim();
  K.toks = s => { const n = K.norm(s); return n ? n.split(" ") : []; };
  function lcs(a, b) {
    const m = a.length, n = b.length, dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    return dp[m][n];
  }
  function lev(a, b) {
    const m = a.length, n = b.length; let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
    return prev[n];
  }
  const charSim = (a, b) => { const x = a.replace(/ /g, ""), y = b.replace(/ /g, ""); const L = Math.max(x.length, y.length); return L ? 1 - lev(x, y) / L : 0; };
  // kemiripan ucapan: gabungan kata & huruf, 0..100
  K.similarity = (said, target) => {
    const a = K.toks(said), b = K.toks(target);
    if (!a.length || !b.length) return 0;
    const al = a.map(w => w.replace(/^ال/, "")), bl = b.map(w => w.replace(/^ال/, ""));
    let hits = 0; const used = new Set();
    bl.forEach(w => { const j = al.findIndex((x, k) => !used.has(k) && (x === w || (w.length > 2 && charSim(x, w) >= 0.75))); if (j >= 0) { used.add(j); hits++; } });
    const word = hits / Math.max(bl.length, al.length * 0.8);
    const ch = charSim(K.norm(said), K.norm(target));
    return Math.round(100 * Math.min(1, Math.max(word, ch)));
  };
  K.wordHits = (said, target) => {
    const al = K.toks(said).map(w => w.replace(/^ال/, ""));
    return target.split(/\s+/).filter(Boolean).map(w => {
      const n = K.norm(w).replace(/^ال/, "");
      if (!n) return { w, ok: true };
      return { w, ok: al.some(x => x === n || (n.length > 2 && charSim(x, n) >= 0.75)) };
    });
  };

  /* Transliterasi otomatis dari teks berharakat */
  const TL = { "ب": "b", "ت": "t", "ث": "ts", "ج": "j", "ح": "ḥ", "خ": "kh", "د": "d", "ذ": "dz", "ر": "r", "ز": "z", "س": "s", "ش": "sy", "ص": "sh", "ض": "dh", "ط": "th", "ظ": "zh", "ع": "‘", "غ": "gh", "ف": "f", "ق": "q", "ك": "k", "ل": "l", "م": "m", "ن": "n", "ه": "h", "و": "w", "ي": "y", "ة": "t" };
  const SUN = "تثدذرزسشصضطظلن";
  const HAMZA = "أإؤئء";
  const MARK = { "َ": "a", "ِ": "i", "ُ": "u", "ْ": "0", "ً": "an", "ٍ": "in", "ٌ": "un" };
  function parse(w) {
    const U = [];
    for (const ch of w) {
      if (ch === "ـ") continue;
      if (ch === "ّ") { if (U.length) U[U.length - 1].sh = true; continue; }
      if (ch === "ٰ") { if (U.length) U[U.length - 1].sa = true; continue; }
      if (MARK[ch]) { if (U.length) U[U.length - 1].v = MARK[ch]; continue; }
      if (/[ء-ي]/.test(ch)) U.push({ c: ch, v: "", sh: false, sa: false });
    }
    return U;
  }
  const vow = v => v === "0" ? "" : v;
  function allahWord(base, U, first) {
    const m = base.match(/^([وفبتل]?)(ا?)لله$/);
    if (!m) return null;
    const last = U[U.length - 1]; const end = last && last.v && last.v !== "0" ? last.v.charAt(0) : "";
    const pre = { "و": "wa", "ف": "fa", "ب": "bi", "ت": "ta", "ل": "li" }[m[1]] || "";
    if (!pre && m[2]) return (first ? "Allāh" : "llāh") + end;
    if (!pre && !m[2]) return "lillāh" + end;
    return pre + "llāh" + end;
  }
  function translitWord(w, first) {
    const U = parse(w);
    if (!U.length) return "";
    const al = allahWord(K.strip(w).replace(/[أإآ]/g, "ا"), U, first);
    if (al) return al;
    const isArt = k => U[k] && U[k].c === "ا" && !U[k].v && U[k + 1] && U[k + 1].c === "ل" && (!U[k + 1].v || U[k + 1].v === "0") && !U[k + 1].sh && U[k + 2];
    let out = "", k = 0, longU = false;
    // awal kata: alif washal / artikel
    if (U[0].c === "ا" && !U[0].v) {
      if (isArt(0)) {
        const nx = U[2];
        if (SUN.includes(nx.c) && nx.sh) { out += (first ? "a" : "") + (TL[nx.c] || "") + "-"; nx.sh = false; }
        else out += (first ? "a" : "") + "l-";
        k = 2;
      } else { out += first ? (U[1] && U[1].c === "ل" ? "a" : "i") : ""; k = 1; }
    } else if (U[0].c === "ا" && U[0].v) { out += first ? vow(U[0].v) : ""; k = 1; }
    for (; k < U.length; k++) {
      const u = U[k], nx = U[k + 1];
      let c = u.c;
      if (c === "ا") {
        if (k > 0 && isArt(k)) {
          const s = U[k + 2];
          if (SUN.includes(s.c) && s.sh) { out += (TL[s.c] || "") + "-"; s.sh = false; } else out += "l-";
          k++; continue;
        }
        if (longU || (U[k - 1] && U[k - 1].v === "an")) { longU = false; continue; }
        if (!u.v && nx && nx.v === "0") continue; // alif washal di tengah kata
        out += u.v ? vow(u.v) : "ā"; continue;
      }
      longU = false;
      if (c === "ى") { if (!(U[k - 1] && U[k - 1].v === "an")) out += "ā"; continue; }
      if (c === "آ") { out += (k === 0 ? "" : "'") + "ā"; continue; }
      let cons;
      if (HAMZA.includes(c)) cons = k === 0 ? "" : "'";
      else if (c === "ة") cons = u.v ? "t" : "h";
      else cons = TL[c] || "";
      // diftong
      if ((c === "و" || c === "ي") && (u.v === "0") && !u.sh && U[k - 1] && U[k - 1].v === "a") { out += c === "و" ? "u" : "i"; continue; }
      if (u.sh) cons = cons + cons;
      let v = vow(u.v);
      if (!u.v && HAMZA.includes(c) && k === 0) v = c === "إ" ? "i" : "a";
      if (u.sa) v = "ā";
      // vokal panjang
      if (nx && !nx.sh) {
        const bare = !nx.v || nx.v === "0";
        if (u.v === "a" && (nx.c === "ا" || nx.c === "ى") && !nx.v && !isArt(k + 1) && !(nx.c === "ا" && U[k + 2] && U[k + 2].v === "0")) { v = "ā"; k++; }
        else if (u.v === "i" && nx.c === "ي" && bare) { v = "ī"; k++; }
        else if (u.v === "u" && nx.c === "و" && bare) { v = "ū"; k++; longU = true; }
      }
      out += cons + v;
    }
    return out;
  }
  K.translit = text => {
    const parts = String(text).split(/\s+/).filter(Boolean);
    let first = true; const res = [];
    parts.forEach(p => {
      const m = p.match(/^(.*?)([،؟.!:؛,?"]*)$/);
      const core = m[1], punc = (m[2] || "").replace(/،/g, ",").replace(/؟/g, "?").replace(/؛/g, ";");
      const t = translitWord(core, first);
      res.push(t + punc);
      first = /[,.?!:;]$/.test(punc) || !t;
    });
    return res.join(" ").replace(/\s+([,.?!:;])/g, "$1").replace(/-'/g, "-");
  };

  /* Teks Arab di tengah kalimat Indonesia: bungkus agar arah tulisan & hurufnya benar */
  const ARRUN = /[\u0600-\u06FF](?:[\u0600-\u06FF\u0640 ]|\.\.\.|…)*!?/g;
  K.fixBidi = root => {
    if (!root || !root.ownerDocument) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        if (!/[\u0600-\u06FF]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || p.closest(".ar,.ari,[lang=ar],textarea,input,script,style,.forms,.lgrid")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
      const s = n.nodeValue, frag = document.createDocumentFragment(); let last = 0;
      s.replace(ARRUN, (m, idx) => {
        const t = m.replace(/\s+$/, "");
        if (idx > last) frag.appendChild(document.createTextNode(s.slice(last, idx)));
        const b = document.createElement("bdi"); b.className = "ari"; b.lang = "ar"; b.textContent = t; frag.appendChild(b);
        last = idx + t.length; return m;
      });
      if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
      if (n.parentNode) n.parentNode.replaceChild(frag, n);
    });
  };
  try {
    new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(nd => {
      if (nd.nodeType === 1) K.fixBidi(nd); else if (nd.nodeType === 3 && nd.parentElement) K.fixBidi(nd.parentElement);
    }))).observe(document.body, { childList: true, subtree: true });
  } catch (e) { }

  /* Mode latin */
  K.latinMode = u => {
    if (S.latin !== "auto") return S.latin;
    if (!u || u.q || u.lv === 1 || u.lv === 0) return "show";
    return "tap";
  };
  K.latin = (ar, mode) => {
    if (mode === "hide") return "";
    const t = K.esc(K.translit(ar));
    if (mode === "tap") return `<button class="lat tap" data-lat="${t}">Lihat latin</button>`;
    return `<div class="lat">${t}</div>`;
  };
  K.bindLatin = root => (root || document).querySelectorAll("button.lat.tap").forEach(b => b.onclick = e => {
    e.stopPropagation(); const d = document.createElement("div"); d.className = "lat"; d.textContent = b.dataset.lat; b.replaceWith(d);
  });

  /* ---------- Suara (TTS) ---------- */
  const synth = window.speechSynthesis || null;
  let voices = [];
  const loadV = () => { try { voices = synth ? synth.getVoices() : []; } catch (e) { voices = []; } };
  if (synth) { loadV(); try { synth.onvoiceschanged = loadV; } catch (e) { } }
  K.arVoice = () => voices.find(v => /^ar/i.test(v.lang) && /google/i.test(v.name)) || voices.find(v => /^ar[-_]SA/i.test(v.lang)) || voices.find(v => /^ar/i.test(v.lang)) || null;
  K.hasTTS = () => !!synth;
  K.stop = () => { try { synth && synth.cancel(); } catch (e) { } };
  K.speak = (text, opts) => {
    opts = opts || {};
    if (!synth) { K.toast("Perangkat ini tidak mendukung suara."); return; }
    K.stop();
    const clean = K.strip(String(text)).length ? String(text).replace(/ـ/g, "") : text;
    const u = new SpeechSynthesisUtterance(clean);
    const v = K.arVoice(); if (v) u.voice = v;
    u.lang = v ? v.lang : "ar-SA";
    u.rate = (opts.rate || S.rate) * (opts.slow ? 0.7 : 1);
    if (opts.onend) { u.onend = opts.onend; u.onerror = opts.onend; }
    setTimeout(() => { try { synth.speak(u); } catch (e) { } }, 40);
  };
  K.bindSpeak = root => (root || document).querySelectorAll("[data-say]").forEach(b => b.onclick = e => {
    e.stopPropagation(); K.speak(b.dataset.say, { slow: b.hasAttribute("data-slow") });
  });
  K.spk = (ar, slow) => `<button class="spk" data-say="${K.esc(ar)}" ${slow ? "data-slow" : ""} aria-label="Dengarkan">${slow ? "🐢" : "🔊"}</button>`;

  /* ---------- Pengenalan suara ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  K.hasSR = () => !!SR;
  let rec = null;
  K.listen = (target, cb) => {
    if (!SR) { cb({ err: "Pengenalan suara tidak tersedia di peramban ini. Gunakan Google Chrome di Android." }); return null; }
    K.stop();
    try { if (rec) rec.abort(); } catch (e) { }
    rec = new SR(); rec.lang = "ar-SA"; rec.interimResults = false; rec.maxAlternatives = 5; rec.continuous = false;
    let got = false;
    rec.onresult = e => {
      got = true;
      const alts = Array.from(e.results[0]).map(a => a.transcript);
      let best = alts[0] || "", sc = target ? K.similarity(best, target) : 0;
      if (target) alts.forEach(a => { const s = K.similarity(a, target); if (s > sc) { sc = s; best = a; } });
      cb({ text: best, score: sc });
    };
    rec.onerror = e => { if (!got) { got = true; cb({ err: e.error === "not-allowed" ? "Izin mikrofon ditolak. Izinkan mikrofon untuk situs ini di pengaturan Chrome." : e.error === "no-speech" ? "Suara tidak terdengar. Coba lagi lebih dekat ke mikrofon." : e.error === "network" ? "Pengenalan suara butuh internet." : "Gagal mendengar (" + e.error + "). Coba lagi." }); } };
    rec.onend = () => { if (!got) cb({ err: "Suara tidak terdengar. Coba lagi." }); };
    try { rec.start(); } catch (e) { cb({ err: "Mikrofon sedang dipakai. Coba lagi." }); }
    return rec;
  };
  K.stopListen = () => { try { rec && rec.stop(); } catch (e) { } };

  /* ---------- Murojaah (SRS) ---------- */
  K.INT = [0, 1, 3, 7, 14, 30, 60, 120];
  K.vocabAll = () => {
    if (K._va) return K._va;
    const seen = {}; const out = [];
    K.ALLU.forEach(u => u.v.forEach(w => { const key = w[0]; if (!seen[key]) { seen[key] = 1; out.push({ ar: w[0], id: w[1], em: w[2] || "", uid: u.id }); } }));
    return (K._va = out);
  };
  K.vocabOf = uid => K.vocabAll().filter(x => x.uid === uid || (K.byId(uid).v.some(w => w[0] === x.ar)));
  K.addCards = u => {
    u.v.forEach(w => { if (!S.cards[w[0]]) S.cards[w[0]] = { b: 1, due: K.addDays(1), n: 0, l: 0 }; });
    K.save();
  };
  K.dueCards = () => Object.keys(S.cards).filter(k => S.cards[k].due <= K.today());
  K.grade = (ar, g) => {
    const c = S.cards[ar]; if (!c) return;
    c.n++;
    if (g === 0) { c.b = 1; c.l++; c.due = K.addDays(1); }
    else if (g === 1) { c.b = Math.max(1, c.b); c.due = K.addDays(Math.max(1, Math.floor(K.INT[c.b] / 2))); }
    else { c.b = Math.min(7, c.b + 1); c.due = K.addDays(K.INT[c.b]); }
    K.save();
  };
  K.findExample = ar => {
    const n = K.norm(ar); if (!n) return null;
    for (const u of K.ALLU) {
      for (const e of u.p.ex) if ((" " + K.norm(e[0]) + " ").includes(" " + n + " ") || (n.length > 3 && K.norm(e[0]).includes(n))) return e;
    }
    return null;
  };

  /* ---------- Router & tampilan ---------- */
  K.VIEWS = {};
  let stack = [];
  K.cur = () => stack[stack.length - 1];
  K.go = (view, params) => {
    K.stop(); K.stopListen();
    stack.push({ view, params: params || {} });
    try { history.pushState({ d: stack.length }, ""); } catch (e) { }
    K.render();
  };
  K.replace = (view, params) => { K.stop(); stack[stack.length - 1] = { view, params: params || {} }; K.render(); };
  K.back = () => { if (stack.length > 1) { try { history.back(); } catch (e) { popOne(); } } };
  function popOne() { K.stop(); K.stopListen(); if (stack.length > 1) stack.pop(); K.render(); }
  window.addEventListener("popstate", () => { if (document.querySelector(".sheet-bg")) { document.querySelectorAll(".sheet-bg").forEach(s => s.remove()); try { history.pushState({ d: stack.length }, ""); } catch (e) { } return; } popOne(); });
  K.tab = v => { K.stop(); K.stopListen(); stack = [{ view: v, params: {} }]; try { history.replaceState({ d: 1 }, ""); } catch (e) { } K.render(); };
  K.render = () => { const c = K.cur(); (K.VIEWS[c.view] || K.VIEWS.home)(c.params || {}); };
  K.start = v => { stack = [{ view: v, params: {} }]; try { history.replaceState({ d: 1 }, ""); } catch (e) { } K.render(); };

  const NAV = [["home", "🏠", "Beranda"], ["learn", "📚", "Belajar"], ["practice", "🔁", "Latihan"], ["talk", "🎤", "Bicara"], ["library", "📖", "Pustaka"], ["profile", "👤", "Profil"]];
  K.$app = document.getElementById("app");
  K.shell = (title, body, opts) => {
    opts = opts || {};
    const root = stack.length <= 1;
    const ini = S.name ? S.name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase() : "👤";
    const due = K.dueCards().length;
    K.$app.innerHTML = `
      <header class="top">
        ${root ? "" : `<button class="back" data-act="back" aria-label="Kembali">←</button>`}
        <h1>${title}</h1>
        ${opts.right || `<span class="pill">🔥 ${S.streak} · ⭐ ${S.xp}</span>`}
        <button class="avatar" data-tab="profile" aria-label="Profil">${K.esc(ini)}</button>
      </header>
      <main>${body}</main>
      ${opts.nonav ? "" : `<nav class="bottom"><div class="brand"><span class="logo">ع</span><b>Kawan Arab</b></div><div class="in">
        ${NAV.map(([v, i, n]) => `<button data-tab="${v}" class="${opts.tab === v ? "on" : ""} ${v === "profile" ? "desk-only" : ""}"><span>${i}</span>${n}${v === "practice" && due ? ` (${due})` : ""}</button>`).join("")}
      </div></nav>`}`;
    K.$app.querySelectorAll("[data-act=back]").forEach(b => b.onclick = K.back);
    K.$app.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => K.tab(b.dataset.tab));
    K.bindSpeak(K.$app); K.bindLatin(K.$app);
    window.scrollTo(0, 0);
  };
  K.on = (sel, fn) => K.$app.querySelectorAll(sel).forEach(el => el.addEventListener("click", e => fn(el, e)));
  K.sheet = (html, onMount) => {
    const bg = document.createElement("div"); bg.className = "sheet-bg";
    bg.innerHTML = `<div class="sheet">${html}</div>`;
    const close = () => bg.remove();
    bg.addEventListener("click", e => { if (e.target === bg) close(); });
    document.body.appendChild(bg);
    bg.querySelectorAll("[data-close]").forEach(b => b.onclick = close);
    K.bindSpeak(bg); K.bindLatin(bg);
    if (onMount) onMount(bg, close);
    return close;
  };

  /* Komponen kecil */
  K.arBlock = (ar, mode, cls) => `<div class="ar ${cls || "mid"}" lang="ar">${K.esc(ar)}</div>${K.latin(ar, mode)}`;
  K.nextUnit = () => K.ORDER.map(K.byId).find(u => !S.done[u.id]) || null;
  K.levelUnits = n => K.UNITS.filter(u => u.lv === n);
  K.fik = () => S.sex === "f" ? "فِيكِ" : "فِيكَ";
  K.levelDone = n => K.levelUnits(n).filter(u => S.done[u.id]).length;
})();
