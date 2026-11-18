/* Kawan Arab — Bicara: peragaan dialog, baca nyaring, Tutor AI (Gemini) */
(function () {
  "use strict";
  const K = window.K, V = K.VIEWS, esc = K.esc, S = () => K.S();
  const GEM = "https://generativelanguage.googleapis.com/v1beta";

  const isNarr = u => u.d.l[0][0] === "N";
  const linesOf = u => u.q ? u.p.ex.map(e => ["N", e[0], e[1]]) : u.d.l;

  /* ---------- Hub ---------- */
  V.talk = () => {
    const st = S();
    const dialogs = K.UNITS.filter(u => !isNarr(u)), reads = K.UNITS.filter(isNarr);
    const row = u => {
      const best = st.talks[u.id], learned = st.done[u.id];
      return `<button class="list-btn" data-rp="${u.id}"><span class="ic">${u.ic}</span><span class="tx"><small>${esc(K.unitLabel(u))}${learned ? "" : " · belum dipelajari"}</small><b>${esc(u.q ? u.t : u.d.t)}</b><small>${linesOf(u).length} baris${best ? " · skor terbaik " + best : ""}</small></span>${best ? `<span class="ok-dot">✓</span>` : `<span class="chev">›</span>`}</button>`;
    };
    K.shell("Bicara", `
      <div class="card hero"><div class="k">Latihan bicara</div><h2>Lidah perlu dilatih, bukan hanya otak</h2>
        <p>Pilih peran, dengarkan lawan bicara, lalu ucapkan bagian Anda. Aplikasi menilai ucapan Anda kata per kata.</p></div>
      ${!K.hasSR() ? `<div class="fb info">Penilaian ucapan butuh Google Chrome di Android/PC. Di peramban ini Anda tetap bisa berlatih dengan menilai sendiri.</div>` : ""}
      <button class="list-btn" data-go="ai" style="border-color:var(--gold)"><span class="ic" style="background:var(--goldSoft)">🤖</span><span class="tx"><b>Tutor AI — ngobrol bebas</b><small>${st.aiKey ? "Siap. Ngobrol apa saja, dengan koreksi otomatis." : "Opsional: hubungkan kunci Gemini gratis"}</small></span><span class="chev">›</span></button>
      <div class="sec-title">Peragakan dialog</div>${dialogs.map(row).join("")}
      <div class="sec-title">Baca nyaring</div>${reads.map(row).join("")}
      <div class="sec-title">Baca ayat & bacaan shalat</div>${K.QURAN.map(row).join("")}`, { tab: "talk" });
    K.on("[data-rp]", b => K.go("roleplay", { id: b.dataset.rp }));
    K.on("[data-go]", b => K.go(b.dataset.go));
  };

  /* ---------- Peragaan ---------- */
  V.roleplay = p => {
    const u = K.byId(p.id), lines = linesOf(u);
    const speakers = [...new Set(lines.map(l => l[0]))].filter(x => x !== "N");
    if (!p.role) {
      if (!speakers.length) return K.replace("roleplay", { id: u.id, role: "N" });
      K.shell("Pilih peran", `
        <div class="card"><span class="tag">${esc(K.unitLabel(u))}</span><h3 style="margin-top:8px">${esc(u.d.t)}</h3>
          <p class="small muted">Anda mengucapkan baris peran yang dipilih; baris lain dibacakan aplikasi.</p></div>
        ${speakers.map(s => { const first = lines.find(l => l[0] === s); return `<button class="list-btn" data-role="${s}"><span class="ic">${s}</span><span class="tx"><b>Peran ${s}</b><small class="ar" style="font-size:18px;line-height:1.6">${esc(first[1])}</small></span><span class="chev">›</span></button>`; }).join("")}
        <button class="list-btn" data-role="ALL"><span class="ic">🎭</span><span class="tx"><b>Semua peran</b><small>Ucapkan setiap baris sendiri</small></span><span class="chev">›</span></button>`, { tab: "talk" });
      K.on("[data-role]", b => K.replace("roleplay", { id: u.id, role: b.dataset.role }));
      return;
    }
    const mine = l => p.role === "ALL" || l[0] === p.role || l[0] === "N";
    const LM = K.latinMode(u);
    let i = 0, scores = [], challenge = false, alive = true;
    K.shell(u.q ? u.t : u.d.t, `
      <div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="tag">${p.role === "N" ? "Baca nyaring" : p.role === "ALL" ? "Semua peran" : "Anda: peran " + p.role}</span>
        <span class="row small" style="gap:8px">Mode tantangan <button class="switch" id="chl" aria-label="Mode tantangan"><i></i></button></span></div>
      <p class="small muted" id="chlh" style="margin:-4px 0 10px">Mode tantangan: teks Arab bagian Anda disembunyikan — ucapkan dari arti.</p>
      <div class="bubbles" id="bb"></div>
      <div id="turn" style="margin-top:14px"></div>`, { tab: "talk", nonav: true });
    const bb = document.getElementById("bb"), turn = document.getElementById("turn");
    document.getElementById("chl").onclick = e => { challenge = !challenge; e.currentTarget.classList.toggle("on", challenge); if (lines[i] && mine(lines[i])) drawTurn(); };
    function bubble(l, sc) {
      const side = l[0] === "N" ? "N" : (p.role !== "ALL" && l[0] === p.role) ? "R" : (l[0] === "A" ? "L" : "R");
      const d = document.createElement("div"); d.className = "msg " + side;
      d.innerHTML = `${l[0] !== "N" ? `<span class="who">${l[0]}${sc != null ? " · " + sc : ""}</span>` : ""}<div class="bub"><div class="ar" lang="ar">${esc(l[1])}</div>${K.latin(l[1], LM)}<div class="tr">${esc(l[2])}</div><div class="mact"><button class="minib" data-say="${esc(l[1])}">🔊</button></div></div>`;
      bb.appendChild(d); K.bindSpeak(d); K.bindLatin(d);
      d.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    function step() {
      if (!alive || !document.body.contains(bb)) return;
      if (i >= lines.length) return end();
      const l = lines[i];
      if (mine(l)) return drawTurn();
      bubble(l);
      turn.innerHTML = `<button class="btn ghost block" id="skp">Lewati ▸</button>`;
      let moved = false; const adv = () => { if (moved) return; moved = true; i++; setTimeout(step, 300); };
      document.getElementById("skp").onclick = () => { K.stop(); adv(); };
      K.speak(l[1], { onend: adv });
    }
    function drawTurn() {
      const l = lines[i];
      turn.innerHTML = `<div class="card center" style="border-color:var(--gold)">
        <span class="tag gold">Giliran Anda${l[0] !== "N" && p.role === "ALL" ? " · " + l[0] : ""}</span>
        ${challenge ? `<p style="font-weight:700;margin:10px 0 4px">${esc(l[2])}</p><button class="lat tap" id="peek">Intip teks Arab</button><div id="pk"></div>`
          : `<div class="ar mid" lang="ar" style="margin-top:6px">${esc(l[1])}</div>${K.latin(l[1], LM === "hide" ? "tap" : LM)}<div class="small muted">${esc(l[2])}</div>`}
        <div class="btns" style="justify-content:center">${K.spk(l[1])}${K.spk(l[1], true)}</div>
        ${K.hasSR() ? `<button class="mic" id="mic">🎤</button>` : ""}
        <div id="res"></div>
        <div class="btns">${K.hasSR() ? `<button class="btn ghost" id="sk">Lewati</button>` : `<button class="btn" id="self">Sudah saya ucapkan</button>`}</div></div>`;
      K.bindSpeak(turn); K.bindLatin(turn);
      turn.scrollIntoView({ behavior: "smooth", block: "end" });
      const pk = document.getElementById("peek"); if (pk) pk.onclick = () => { document.getElementById("pk").innerHTML = `<div class="ar mid" lang="ar">${esc(l[1])}</div>`; pk.remove(); };
      const sk = document.getElementById("sk"); if (sk) sk.onclick = () => { bubble(l); i++; step(); };
      const sf = document.getElementById("self"); if (sf) sf.onclick = () => { bubble(l); scores.push(70); i++; step(); };
      const mic = document.getElementById("mic");
      if (mic) mic.onclick = () => {
        mic.classList.add("rec"); document.getElementById("res").innerHTML = `<p class="small">Mendengarkan…</p>`;
        K.listen(l[1], r => {
          mic.classList.remove("rec");
          const box = document.getElementById("res"); if (!box) return;
          if (r.err) { box.innerHTML = `<div class="fb no">${esc(r.err)}</div>`; return; }
          const hits = K.wordHits(r.text, l[1]);
          box.innerHTML = `<div class="score" style="color:${r.score >= 75 ? "var(--ok)" : r.score >= 55 ? "var(--warn)" : "var(--bad)"}">${r.score}</div>
            <div class="words">${hits.map(h => `<span class="${h.ok ? "hit" : "miss"}">${esc(h.w)}</span>`).join(" ")}</div>
            <div class="small muted">Terdengar: <span class="ar" style="font-size:18px">${esc(r.text)}</span></div>`;
          if (r.score >= 55) { K.addXP(2); scores.push(r.score); setTimeout(() => { bubble(l, r.score); i++; step(); }, 1100); }
          else box.innerHTML += `<p class="small">Dengarkan 🐢, lalu coba lagi.</p>`;
        });
      };
    }
    function end() {
      const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      if (avg) { S().talks[u.id] = Math.max(S().talks[u.id] || 0, avg); K.addXP(5); }
      turn.innerHTML = `<div class="card hero center"><div class="k">Selesai</div><h2 style="max-width:none">${avg >= 80 ? "مُمْتَازٌ! 🎉" : avg >= 60 ? "جَيِّدٌ جِدًّا!" : avg ? "Bagus, terus latih!" : "Selesai"}</h2>
        <p style="max-width:none">${avg ? "Rata-rata skor ucapan " + avg + " · +5 XP" : "Coba aktifkan mikrofon agar ucapan dinilai."}</p></div>
        <div class="btns"><button class="btn" id="ag">Ulangi</button>${speakers.length > 1 && p.role !== "ALL" ? `<button class="btn soft" id="sw">Tukar peran</button>` : ""}<button class="btn ghost" id="bk">Selesai</button></div>`;
      document.getElementById("ag").onclick = () => K.replace("roleplay", { id: u.id, role: p.role });
      const sw = document.getElementById("sw"); if (sw) sw.onclick = () => K.replace("roleplay", { id: u.id, role: speakers.find(s => s !== p.role) });
      document.getElementById("bk").onclick = () => K.back();
      turn.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    const obs = new MutationObserver(() => { if (!document.body.contains(bb)) { alive = false; K.stop(); obs.disconnect(); } });
    obs.observe(K.$app, { childList: true });
    step();
  };

  /* ---------- Tutor AI ---------- */
  async function gemErr(r) {
    let msg = ""; try { msg = (await r.json()).error.message; } catch (e) { }
    if (r.status === 400 && /api key/i.test(msg)) return new Error("Kunci API tidak valid. Periksa lagi di pengaturan Tutor AI.");
    if (r.status === 403) return new Error("Kunci API ditolak (403). Pastikan Gemini API aktif untuk kunci ini.");
    if (r.status === 429) return new Error("Kuota gratis sedang habis (429). Coba lagi beberapa menit lagi.");
    if (r.status === 404) { S().aiModel = ""; K.save(); return new Error("Model tidak ditemukan. Kirim lagi; aplikasi akan memilih model baru."); }
    return new Error("Gagal menghubungi Gemini (" + r.status + "). " + msg);
  }
  async function gemModel() {
    if (S().aiModel) return S().aiModel;
    const r = await fetch(`${GEM}/models?pageSize=200&key=${encodeURIComponent(S().aiKey)}`);
    if (!r.ok) throw await gemErr(r);
    const j = await r.json();
    const ok = (j.models || []).filter(m => (m.supportedGenerationMethods || []).includes("generateContent") && /flash/i.test(m.name) && !/(image|tts|audio|live|embed|vision|thinking-exp)/i.test(m.name));
    const ver = n => { const m = n.match(/gemini-(\d+(?:\.\d+)?)/); return m ? parseFloat(m[1]) : 0; };
    ok.sort((a, b) => (/preview|exp/i.test(a.name) - /preview|exp/i.test(b.name)) || (/lite/i.test(a.name) - /lite/i.test(b.name)) || ver(b.name) - ver(a.name));
    if (!ok.length) throw new Error("Tidak ada model Gemini Flash yang tersedia untuk kunci ini.");
    S().aiModel = ok[0].name.replace(/^models\//, ""); K.save();
    return S().aiModel;
  }
  async function gemChat(system, contents) {
    const model = await gemModel();
    const r = await fetch(`${GEM}/models/${model}:generateContent?key=${encodeURIComponent(S().aiKey)}`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents, generationConfig: { temperature: 0.7, maxOutputTokens: 700 } })
    });
    if (!r.ok) throw await gemErr(r);
    const j = await r.json();
    const t = (((j.candidates || [])[0] || {}).content || {}).parts;
    const txt = (t || []).map(x => x.text || "").join("").trim();
    if (!txt) throw new Error("Jawaban kosong dari Gemini. Coba kirim ulang.");
    return txt;
  }
  const TOPICS = [
    ["👋", "Perkenalan", "Saling berkenalan: nama, asal, pekerjaan, keluarga."],
    ["🏠", "Keluarga & rumah", "Bercerita tentang keluarga dan rumah."],
    ["⏰", "Kegiatan harian", "Bercerita tentang rutinitas sehari-hari."],
    ["🧑‍🏫", "Di kelas", "Kamu murid kuttab, aku gurunya. Latihan bahasa kelas."],
    ["🛒", "Di pasar", "Kamu penjual ikan di pasar, aku pembeli yang menawar."],
    ["🕋", "Umrah", "Kamu petugas hotel di Makkah, aku jamaah umrah yang baru datang."],
    ["🕌", "Di masjid", "Percakapan ringan di masjid sebelum shalat."],
    ["💬", "Bebas", ""]
  ];
  function level() {
    const n = Object.keys(S().done).filter(k => k[0] === "u").length;
    return n < 8 ? "pemula sekali (kosakata dasar, kalimat 3–6 kata)" : n < 16 ? "pemula (sudah kenal kata kerja sekarang, lampau, dan akan)" : "menengah awal (bisa bercerita sederhana)";
  }
  function system(topic) {
    const st = S(), sex = st.sex === "m" ? "laki-laki (pakai أَنْتَ dan bentuk maskulin)" : st.sex === "f" ? "perempuan (pakai أَنْتِ dan bentuk feminin)" : "belum diketahui";
    return `Kamu adalah "Kawan", teman bicara bahasa Arab yang sabar dan hangat untuk pelajar Indonesia${st.name ? " bernama " + st.name : ""}. Pelajar ini ${sex}. Tingkatnya: ${level()}. Ia sudah lama ingin bisa bahasa Arab, jadi buat ia merasa berhasil.
${topic ? "Situasi: " + topic : "Biarkan pelajar memilih topik."}
Aturan:
- Balas dalam bahasa Arab fusha sederhana dengan HARAKAT LENGKAP pada setiap huruf. 1–2 kalimat pendek saja, lalu akhiri dengan satu pertanyaan sederhana agar percakapan berlanjut.
- Pakai kosakata sehari-hari dan Islami yang umum. Jangan pakai markdown, emoji, atau daftar.
- Sesudah balasan Arab, tulis baris baru diawali tepat "ARTI:" berisi terjemahan bahasa Indonesia.
- Jika pesan TERAKHIR pelajar berbahasa Arab dan ada kesalahan (tata bahasa, pilihan kata, jenis kelamin kata), tambahkan baris baru diawali tepat "KOREKSI:" berisi penjelasan singkat bahasa Indonesia dan kalimat yang benar berharakat. Jika tidak ada kesalahan, jangan tulis baris KOREKSI.
- Jika pelajar menulis dalam bahasa Indonesia, tetap balas dalam bahasa Arab, dan di baris "KOREKSI:" tunjukkan cara mengatakan pesannya dalam bahasa Arab berharakat.
- Pelajar mungkin menulis tanpa harakat atau dari hasil suara; abaikan harakat yang hilang.`;
  }
  function parseAI(t) {
    const out = { ar: t, id: "", fix: "" };
    const cut = [t.search(/\n?\s*ARTI:/i), t.search(/\n?\s*KOREKSI:/i)].filter(x => x >= 0);
    if (cut.length) out.ar = t.slice(0, Math.min.apply(null, cut)).trim();
    const a = t.match(/ARTI:\s*([\s\S]*?)(?=\n\s*KOREKSI:|$)/i); if (a) out.id = a[1].trim();
    const f = t.match(/KOREKSI:\s*([\s\S]*?)(?=\n\s*ARTI:|$)/i); if (f) out.fix = f[1].trim();
    out.ar = out.ar.replace(/[*_#`]/g, "");
    return out;
  }
  V.aiset = () => {
    const st = S();
    K.shell("Tutor AI", `
      <div class="card hero noorb"><div class="k">Opsional · gratis</div><h2 style="max-width:none">Ngobrol bebas dalam bahasa Arab</h2>
        <p style="max-width:none">Hubungkan kunci API Gemini milik Anda. Tutor akan menjawab dengan harakat lengkap, memberi terjemahan, dan mengoreksi kalimat Anda.</p></div>
      <div class="card"><b>Cara mendapatkan kunci (± 2 menit)</b>
        <ol class="small" style="padding-left:18px;margin:8px 0 0">
          <li>Buka <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> dan masuk dengan akun Google.</li>
          <li>Ketuk <b>Create API key</b>, lalu salin kuncinya.</li>
          <li>Tempel di bawah, lalu tekan Simpan & uji.</li></ol>
        <input type="password" id="key" placeholder="Tempel kunci API di sini" value="${esc(st.aiKey)}" style="margin-top:12px" autocomplete="off">
        <div class="btns"><button class="btn" id="sv">Simpan & uji</button>${st.aiKey ? `<button class="btn ghost" id="rm">Hapus kunci</button>` : ""}</div>
        <div id="msg"></div></div>
      <p class="small muted">Kunci hanya tersimpan di HP ini dan dikirim langsung ke Google. Percakapan diproses oleh Gemini sesuai ketentuan Google.</p>`, { tab: "talk" });
    document.getElementById("sv").onclick = async () => {
      const k = document.getElementById("key").value.trim(); const m = document.getElementById("msg");
      if (!k) { m.innerHTML = `<div class="fb no">Kunci masih kosong.</div>`; return; }
      S().aiKey = k; S().aiModel = ""; K.save();
      m.innerHTML = `<div class="fb info">Menguji…</div>`;
      try { const md = await gemModel(); m.innerHTML = `<div class="fb ok">✓ Terhubung (${esc(md)}).</div><button class="btn block" id="chat" style="margin-top:10px">Mulai ngobrol</button>`; document.getElementById("chat").onclick = () => K.replace("ai"); }
      catch (e) { m.innerHTML = `<div class="fb no">${esc(e.message)}</div>`; }
    };
    const rm = document.getElementById("rm"); if (rm) rm.onclick = () => { S().aiKey = ""; S().aiModel = ""; K.save(); K.render(); };
  };
  V.ai = p => {
    const st = S();
    if (!st.aiKey) return K.replace("aiset");
    const topic = p.topic || "";
    let log = p.topic != null ? [] : (st.aiLog || []);
    K.shell("Tutor AI", `
      <div class="hints" id="tp">${TOPICS.map(t => `<button class="hint" data-t="${esc(t[2])}">${t[0]} ${esc(t[1])}</button>`).join("")}</div>
      <div class="bubbles" id="chat"></div>
      <div id="composer"><div class="compose">
        ${K.hasSR() ? `<button class="micbtn" id="mic" aria-label="Bicara">🎤</button>` : ""}
        <input type="text" id="inp" placeholder="Tulis (Arab / Indonesia) atau tekan 🎤" dir="auto" autocomplete="off">
        <button class="sendbtn" id="send" aria-label="Kirim">➤</button></div>
        <div class="row small muted" style="justify-content:space-between;margin-top:6px"><span>${topic ? "Topik: " + esc(topic.split(":")[0].slice(0, 40)) : "Pilih topik di atas atau mulai menyapa"}</span><button class="minib" id="clr">Mulai ulang</button></div></div>`, { tab: "talk" });
    const chat = document.getElementById("chat"), inp = document.getElementById("inp");
    const LM = S().latin === "auto" ? "tap" : S().latin;
    function draw() {
      chat.innerHTML = log.length ? log.map((m, k) => {
        if (m.role === "user") return `<div class="msg R"><div class="bub" style="unicode-bidi:plaintext">${/[؀-ۿ]/.test(m.text) ? `<div class="ar" lang="ar" style="font-size:21px">${esc(m.text)}</div>` : esc(m.text)}</div></div>`;
        const a = parseAI(m.text);
        return `<div class="msg L"><span class="who">Kawan</span><div class="bub"><div class="ar" lang="ar">${esc(a.ar)}</div>${K.latin(a.ar, LM)}${a.id ? `<div class="tr">${esc(a.id)}</div>` : ""}
          <div class="mact"><button class="minib" data-say="${esc(a.ar)}">🔊</button><button class="minib" data-say="${esc(a.ar)}" data-slow>🐢</button></div></div>
          ${a.fix ? `<div class="fix">✏️ ${esc(a.fix)}</div>` : ""}</div>`;
      }).join("") : `<div class="card small muted">Mulailah dengan <span class="ar" style="font-size:20px">السَّلَامُ عَلَيْكُمْ</span> atau pilih topik. Boleh menulis dalam bahasa Indonesia — Kawan akan menunjukkan cara mengatakannya dalam bahasa Arab.</div>`;
      K.bindSpeak(chat); K.bindLatin(chat);
      const last = chat.lastElementChild; if (last) last.scrollIntoView({ block: "end" });
    }
    async function send(text) {
      text = (text || "").trim(); if (!text) return;
      log.push({ role: "user", text }); inp.value = ""; draw();
      const wait = document.createElement("div"); wait.className = "msg L"; wait.innerHTML = `<div class="bub muted">Kawan sedang mengetik…</div>`; chat.appendChild(wait); wait.scrollIntoView({ block: "end" });
      try {
        const contents = log.slice(-16).map(m => ({ role: m.role === "user" ? "user" : "model", parts: [{ text: m.text }] }));
        const reply = await gemChat(system(topic), contents);
        log.push({ role: "model", text: reply }); K.addXP(2);
        S().aiLog = log.slice(-30); K.save();
        draw(); K.speak(parseAI(reply).ar);
      } catch (e) { wait.innerHTML = `<div class="fb no">${esc(e.message)}</div>`; log.pop(); }
    }
    document.getElementById("send").onclick = () => send(inp.value);
    inp.onkeydown = e => { if (e.key === "Enter") send(inp.value); };
    const mic = document.getElementById("mic");
    if (mic) mic.onclick = () => { mic.classList.add("rec"); K.listen("", r => { mic.classList.remove("rec"); if (r.err) return K.toast(r.err); inp.value = r.text; inp.focus(); }); };
    document.getElementById("clr").onclick = () => { S().aiLog = []; K.save(); K.replace("ai", { topic: "" }); };
    K.on("#tp .hint", b => { S().aiLog = []; K.save(); const t = b.dataset.t; K.replace("ai", { topic: t }); setTimeout(() => { const i2 = document.getElementById("inp"); if (i2) { i2.value = "السَّلَامُ عَلَيْكُمْ"; document.getElementById("send").click(); } }, 50); });
    draw();
  };
})();
