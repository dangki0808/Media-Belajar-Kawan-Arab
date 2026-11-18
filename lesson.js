/* Kawan Arab — mesin latihan: pelajaran unit, latihan bebas, ujian */
(function () {
  "use strict";
  const K = window.K, S = () => K.S(), esc = K.esc;
  const hasAr = s => /[؀-ۿ]/.test(s);
  const PUN = /[.،؟!:؛,?]/g;

  /* ---------- Pembuat soal ---------- */
  function meanPool(w, pool, n) {
    const others = K.shuffle(pool.filter(x => x.id !== w.id && x.ar !== w.ar));
    const extra = K.shuffle(K.vocabAll().filter(x => x.id !== w.id && x.ar !== w.ar));
    const out = []; const seen = new Set([w.id]);
    others.concat(extra).forEach(x => { if (out.length < n && !seen.has(x.id)) { seen.add(x.id); out.push(x); } });
    return out;
  }
  const toW = arr => ({ ar: arr[0], id: arr[1], em: arr[2] || "" });
  K.exMeaning = (w, pool) => {
    const d = meanPool(w, pool, 3); const opts = K.shuffle([w].concat(d));
    return { t: "mcq", q: "Apa artinya?", ar: w.ar, say: w.ar, opts: opts.map(o => o.id), a: opts.indexOf(w), card: w.ar };
  };
  K.exReverse = (w, pool) => {
    const d = meanPool(w, pool, 3); const opts = K.shuffle([w].concat(d));
    return { t: "mcq", q: `Bahasa Arabnya: <b>${esc(w.id)}</b>`, opts: opts.map(o => o.ar), a: opts.indexOf(w), sayAfter: w.ar, card: w.ar };
  };
  K.exListen = (w, pool) => {
    const d = meanPool(w, pool, 3); const opts = K.shuffle([w].concat(d));
    return { t: "mcq", q: "Dengarkan, lalu pilih artinya", listen: w.ar, opts: opts.map(o => o.id), a: opts.indexOf(w), reveal: w.ar, card: w.ar };
  };
  K.exSentenceListen = (s, sents) => {
    const others = K.shuffle(sents.filter(x => x[1] !== s[1])).slice(0, 2);
    const opts = K.shuffle([s].concat(others));
    return { t: "mcq", q: "Dengarkan kalimatnya, lalu pilih artinya", listen: s[0], opts: opts.map(o => o[1]), a: opts.indexOf(s), reveal: s[0] };
  };
  K.exArrange = s => {
    const toks = s[0].split(/\s+/).filter(Boolean);
    return { t: "arrange", q: `Susun kalimat: <b>${esc(s[1])}</b>`, ar: s[0], toks: toks.map(x => x.replace(PUN, "")).filter(Boolean) };
  };
  K.exFill = (s, pool) => {
    const toks = s[0].split(/\s+/).filter(Boolean);
    const cand = toks.map((t, i) => ({ t: t.replace(PUN, ""), i })).filter(x => K.norm(x.t).length >= 2);
    if (!cand.length) return null;
    const c = K.pick(cand);
    const words = K.shuffle(pool.map(x => x.ar.replace(PUN, "")).filter(x => !/\s/.test(x) && K.norm(x) !== K.norm(c.t)));
    const uniq = []; words.forEach(x => { if (uniq.length < 3 && !uniq.some(y => K.norm(y) === K.norm(x))) uniq.push(x); });
    if (uniq.length < 2) return null;
    const opts = K.shuffle([c.t].concat(uniq));
    const shown = toks.map((t, i) => i === c.i ? "＿＿＿" + (t.match(PUN) || []).join("") : t).join(" ");
    return { t: "mcq", q: `Lengkapi kalimat: <b>${esc(s[1])}</b>`, ar: shown, opts, a: opts.indexOf(c.t), sayAfter: s[0], noLatin: true };
  };
  K.exSpeak = s => ({ t: "speak", ar: s[0], id: s[1] });
  K.exQ = q => ({ t: "mcq", q: esc(q[0]), opts: q[1], a: q[2] });

  K.lessonSteps = u => {
    const V = u.v.map(toW);
    const steps = [{ k: "intro" }];
    for (let i = 0; i < V.length; i += 4) {
      const g = V.slice(i, i + 4);
      g.forEach(w => steps.push({ k: "word", w }));
      const sh = K.shuffle(g);
      if (sh[0]) steps.push({ k: "ex", e: K.exMeaning(sh[0], V) });
      if (sh[1]) steps.push({ k: "ex", e: (i / 4) % 2 ? K.exListen(sh[1], V) : K.exReverse(sh[1], V) });
    }
    steps.push({ k: "pattern" });
    const ex = u.p.ex;
    const shortS = ex.filter(s => { const n = s[0].split(/\s+/).length; return n >= 2 && n <= 7; });
    if (!u.q) {
      K.shuffle(shortS).slice(0, 2).forEach(s => steps.push({ k: "ex", e: K.exArrange(s) }));
    } else {
      K.shuffle(ex).slice(0, 2).forEach(s => { const f = K.exFill(s, V); if (f) steps.push({ k: "ex", e: f }); });
    }
    if (ex.length >= 3) steps.push({ k: "ex", e: K.exSentenceListen(K.pick(ex), ex) });
    const sp = K.pick(shortS.length ? shortS : ex);
    steps.push({ k: "ex", e: K.exSpeak(sp) });
    steps.push({ k: "dialog" });
    u.d.q.forEach(q => steps.push({ k: "ex", e: K.exQ(q) }));
    return steps;
  };

  /* ---------- Bahan latihan dari materi yang sudah dipelajari ---------- */
  K.learnedUnits = () => {
    const d = K.ORDER.map(K.byId).filter(u => S().done[u.id]);
    return d.length ? d : [K.byId(K.ORDER[0]), K.byId("u1")];
  };
  K.learnedVocab = () => { const out = []; K.learnedUnits().forEach(u => u.v.forEach(w => out.push(toW(w)))); return out; };
  K.learnedSentences = (noQuran) => {
    const out = [];
    K.learnedUnits().forEach(u => {
      if (noQuran && u.q) return;
      u.p.ex.forEach(e => out.push(e));
      if (!u.q) u.d.l.forEach(l => out.push([l[1], l[2]]));
    });
    return out.filter(s => { const n = s[0].split(/\s+/).length; return n >= 2 && n <= 8; });
  };
  K.drillSteps = kind => {
    const V = K.learnedVocab(), SS = K.learnedSentences(kind === "arrange");
    const st = [];
    if (kind === "listen") K.shuffle(V).slice(0, 10).forEach(w => st.push({ k: "ex", e: K.exListen(w, V) }));
    if (kind === "speak") K.shuffle(SS).slice(0, 8).forEach(s => st.push({ k: "ex", e: K.exSpeak(s) }));
    if (kind === "arrange") K.shuffle(SS).slice(0, 8).forEach(s => st.push({ k: "ex", e: K.exArrange(s) }));
    if (kind === "quick") {
      const vs = K.shuffle(V);
      vs.slice(0, 4).forEach(w => st.push({ k: "ex", e: K.exMeaning(w, V) }));
      vs.slice(4, 7).forEach(w => st.push({ k: "ex", e: K.exReverse(w, V) }));
      vs.slice(7, 9).forEach(w => st.push({ k: "ex", e: K.exListen(w, V) }));
      const s = K.pick(SS); if (s) st.push({ k: "ex", e: K.exArrange(s) });
    }
    if (kind === "letters") {
      const L = window.LETTERS;
      K.shuffle(L).slice(0, 6).forEach(l => {
        const opts = K.shuffle([l].concat(K.shuffle(L.filter(x => x !== l)).slice(0, 3)));
        st.push({ k: "ex", e: { t: "mcq", q: "Huruf apa ini?", ar: l[0], arCls: "big", noLatin: true, say: l[1], opts: opts.map(o => o[2]), a: opts.indexOf(l) } });
      });
      const H = ["َ", "ِ", "ُ"], HN = ["a", "i", "u"];
      K.shuffle(L.filter(l => l[0] !== "ا")).slice(0, 6).forEach(l => {
        const h = Math.floor(Math.random() * 3), syl = l[0] + H[h];
        const opts = K.shuffle([0, 1, 2].map(j => l[0] + H[j]).concat([K.pick(L.filter(x => x !== l && x[0] !== "ا"))[0] + H[h]]));
        st.push({ k: "ex", e: { t: "mcq", q: `Dengarkan bunyinya (${l[3]}${HN[h]}), lalu pilih tulisannya`, listen: syl, opts, a: opts.indexOf(syl) } });
      });
    }
    return K.shuffle(st);
  };
  K.examSteps = n => {
    const us = K.levelUnits(n); const V = []; us.forEach(u => u.v.forEach(w => V.push(toW(w))));
    const vs = K.shuffle(V); const st = [];
    vs.slice(0, 6).forEach(w => st.push({ k: "ex", e: K.exMeaning(w, V) }));
    vs.slice(6, 10).forEach(w => st.push({ k: "ex", e: K.exReverse(w, V) }));
    vs.slice(10, 13).forEach(w => st.push({ k: "ex", e: K.exListen(w, V) }));
    const SS = []; us.forEach(u => u.p.ex.forEach(e => { const k = e[0].split(/\s+/).length; if (k >= 2 && k <= 7) SS.push(e); }));
    K.shuffle(SS).slice(0, 3).forEach(s => st.push({ k: "ex", e: K.exArrange(s) }));
    const Q = []; us.forEach(u => u.d.q.forEach(q => Q.push(q)));
    K.shuffle(Q).slice(0, 4).forEach(q => st.push({ k: "ex", e: K.exQ(q) }));
    return K.shuffle(st);
  };

  /* ---------- Pemutar sesi ---------- */
  // cfg: {title, steps, unit, mode:"lesson"|"drill"|"exam", onFinish(res) -> html, latin}
  K.runSession = cfg => {
    const queue = cfg.steps.slice();
    const total0 = queue.filter(s => s.k === "ex").length;
    let i = 0, firstOk = 0, answered = 0, spoke = [], startT = Date.now();
    const u = cfg.unit, LM = cfg.latin || K.latinMode(u);

    function frame(inner, footer) {
      const pct = Math.round(100 * i / queue.length);
      K.shell(cfg.title, `
        <div class="lessonbar"><div class="prog"><i style="width:${pct}%"></i></div><span class="small muted">${Math.min(i + 1, queue.length)}/${queue.length}</span></div>
        ${inner}
        <div id="foot">${footer || ""}</div>`, { nonav: true, right: `<span class="pill">⭐ ${S().xp}</span>` });
    }
    function next() { i++; if (i >= queue.length) return finish(); draw(); }
    function nextBtn(label) { return `<button class="btn block" id="nx">${label || "Lanjut"} →</button>`; }
    function bindNext() { const b = document.getElementById("nx"); if (b) b.onclick = next; }

    function draw() {
      const st = queue[i];
      if (st.k === "intro") return drawIntro();
      if (st.k === "word") return drawWord(st.w);
      if (st.k === "pattern") return drawPattern();
      if (st.k === "dialog") return drawDialog();
      if (st.k === "ex") return drawEx(st);
    }
    function drawIntro() {
      frame(`<div class="card hero"><div class="k">${esc(K.unitLabel(u))}</div><h2>${u.ic} ${esc(u.t)}</h2><p>${esc(u.goal)}</p>
        <div class="stats"><div class="stat"><b>${u.v.length}</b>kata</div><div class="stat"><b>1</b>pola</div><div class="stat"><b>${u.d.l.length}</b>baris ${u.d.l[0][0] === "N" ? "bacaan" : "dialog"}</div></div></div>
        <div class="card"><b>Cara belajar unit ini</b>
        <ol class="small" style="padding-left:18px;margin:8px 0 0">
          <li>Dengarkan setiap kata, lalu <b>tirukan dengan suara</b>.</li>
          <li>Jawab soal kecil — salah tidak apa-apa, soalnya akan diulang.</li>
          <li>Pelajari polanya, lalu susun dan ucapkan kalimat.</li>
          <li>Kata-kata otomatis masuk <b>Murojaah</b> mulai besok.</li></ol></div>`, nextBtn("Mulai"));
      bindNext();
    }
    function drawWord(w) {
      frame(`<div class="card wordcard">
        <div class="emo">${w.em || "📝"}</div>
        <div class="ar big" lang="ar">${esc(w.ar)}</div>
        ${K.latin(w.ar, LM)}
        <div class="mean">${esc(w.id)}</div>
        <div class="btns" style="justify-content:center">${K.spk(w.ar)}${K.spk(w.ar, true)}
          ${K.hasSR() ? `<button class="spk" id="mic1" aria-label="Ucapkan">🎤</button>` : ""}</div>
        <div id="micres" class="small"></div></div>
        <p class="small muted center">Tirukan 2–3 kali dengan suara. Ketuk 🎤 untuk dinilai (opsional).</p>`, nextBtn());
      bindNext(); K.speak(w.ar);
      const m = document.getElementById("mic1");
      if (m) m.onclick = () => {
        m.textContent = "⏺"; document.getElementById("micres").textContent = "Mendengarkan…";
        K.listen(w.ar, r => {
          m.textContent = "🎤";
          const el = document.getElementById("micres"); if (!el) return;
          if (r.err) { el.innerHTML = `<span style="color:var(--bad)">${esc(r.err)}</span>`; return; }
          el.innerHTML = r.score >= 60 ? `<span style="color:var(--ok);font-weight:700">✓ Bagus! (${r.score})</span>` : `<span style="color:var(--warn);font-weight:700">Terdengar: <span class="ar" style="font-size:18px">${esc(r.text)}</span> — coba lagi (${r.score})</span>`;
          if (r.score >= 60) K.addXP(1);
        });
      };
    }
    function drawPattern() {
      frame(`<div class="card"><span class="tag">Pola kalimat</span>
        <div class="patt" style="margin-top:10px"><div class="ar">${esc(u.p.t)}</div></div>
        <p style="margin:0 0 6px">${esc(u.p.x)}</p></div>
        <div class="card">${u.p.ex.map(e => `<div class="exr">${K.spk(e[0])}<div class="tx"><div class="ar sm" lang="ar">${esc(e[0])}</div>${K.latin(e[0], LM)}<div class="id">${esc(e[1])}</div></div></div>`).join("")}</div>`, nextBtn());
      bindNext();
    }
    function drawDialog() {
      const d = u.d, narr = d.l[0][0] === "N";
      frame(`<div class="card"><span class="tag">${narr ? "Bacaan" : "Dialog"}</span><h3 style="margin-top:8px">${esc(d.t)}</h3>
        <div class="btns"><button class="btn soft" id="playall">▶ Putar semua</button><button class="btn ghost" id="trtog">Sembunyikan arti</button></div></div>
        <div class="bubbles" id="bb">${d.l.map((l, k) => `<div class="msg ${l[0] === "N" ? "N" : l[0] === "A" ? "L" : "R"}" data-k="${k}">
          ${l[0] !== "N" ? `<span class="who">${l[0]}</span>` : ""}
          <div class="bub"><div class="ar" lang="ar">${esc(l[1])}</div>${K.latin(l[1], LM)}<div class="tr">${esc(l[2])}</div>
          <div class="mact"><button class="minib" data-say="${esc(l[1])}">🔊</button><button class="minib" data-say="${esc(l[1])}" data-slow>🐢</button></div></div></div>`).join("")}</div>
        <p class="small muted">Baca setiap baris dengan suara. Setelah ini ada soal pemahaman.</p>`, nextBtn());
      bindNext();
      let shown = true;
      document.getElementById("trtog").onclick = e => { shown = !shown; document.querySelectorAll("#bb .tr").forEach(t => t.style.display = shown ? "" : "none"); e.target.textContent = shown ? "Sembunyikan arti" : "Tampilkan arti"; };
      document.getElementById("playall").onclick = () => {
        let k = 0; const msgs = document.querySelectorAll("#bb .msg");
        const step = () => { msgs.forEach(m => m.style.opacity = ""); if (k >= d.l.length) return; const m = msgs[k]; m.style.opacity = 1; m.scrollIntoView({ behavior: "smooth", block: "center" }); msgs.forEach((x, j) => { if (j !== k) x.style.opacity = .45; }); K.speak(d.l[k][1], { onend: () => { k++; setTimeout(step, 350); } }); };
        step();
      };
    }

    function result(ok, st, extraHTML) {
      if (!st.tried) { st.tried = true; answered++; if (ok) firstOk++; else if (cfg.mode !== "exam" && st.e.t !== "speak" && !st.retry) queue.push({ k: "ex", e: st.e, retry: true }); }
      const foot = document.getElementById("foot");
      foot.innerHTML = `<div class="fb ${ok ? "ok" : "no"}">${ok ? K.pick(["✓ Benar! مُمْتَازٌ", "✓ Tepat! أَحْسَنْتَ", "✓ Benar! جَيِّدٌ", "✓ Masya Allah, benar!"]) : "✗ Belum tepat." + (cfg.mode !== "exam" && st.e.t !== "speak" && !st.retry ? " Soal ini akan muncul lagi." : "")}${extraHTML || ""}</div>
        <div style="margin-top:10px">${nextBtn()}</div>`;
      K.bindSpeak(foot); K.bindLatin(foot); bindNext();
      foot.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    function drawEx(st) {
      const e = st.e;
      if (e.t === "mcq") return drawMCQ(st, e);
      if (e.t === "arrange") return drawArrange(st, e);
      if (e.t === "speak") return drawSpeak(st, e);
    }
    function drawMCQ(st, e) {
      const arOpts = e.opts.every(hasAr);
      const top = e.listen
        ? `<button class="big-play" id="bp" aria-label="Putar">🔊</button><div class="center"><button class="minib" data-say="${esc(e.listen)}" data-slow>🐢 Pelan</button></div><div id="rev"></div>`
        : e.ar ? `<div class="center"><div class="ar ${e.arCls || "big"}" lang="ar">${esc(e.ar)}</div>${e.noLatin ? "" : K.latin(e.ar, LM)}${e.say ? `<div style="margin-top:6px">${K.spk(e.say)}</div>` : ""}</div>` : "";
      frame(`<div class="card">${st.retry ? `<span class="tag gold">Ulangi</span> ` : ""}<p style="font-weight:700;margin:0 0 10px">${e.q}</p>${top}</div>
        <div id="opts">${e.opts.map((o, k) => `<button class="opt ${arOpts ? "arx" : ""}" data-k="${k}">${arOpts ? `<span class="ar" lang="ar">${esc(o)}</span>` : hasAr(o) ? `<span class="ar sm" lang="ar">${esc(o)}</span>` : esc(o)}</button>`).join("")}</div>`, "");
      if (e.listen) { const p = document.getElementById("bp"); p.onclick = () => K.speak(e.listen); K.speak(e.listen); }
      else if (e.say && cfg.mode !== "exam") K.speak(e.say);
      K.on("#opts .opt", el => {
        if (st._locked) return; st._locked = true;
        const k = +el.dataset.k, ok = k === e.a;
        document.querySelectorAll("#opts .opt").forEach((b, j) => { if (j === e.a) b.classList.add("right"); else if (j === k) b.classList.add("wrong"); b.disabled = true; });
        if (e.reveal) { const r = document.getElementById("rev"); r.innerHTML = `<div class="center"><div class="ar mid" lang="ar">${esc(e.reveal)}</div>${K.latin(e.reveal, LM)}</div>`; K.bindLatin(r); }
        if (e.sayAfter) K.speak(e.sayAfter);
        result(ok, st, e.sayAfter && e.t === "mcq" && e.noLatin ? `<div class="ar sm" lang="ar" style="margin-top:6px">${esc(e.sayAfter)}</div>` : "");
      });
      st._locked = false;
    }
    function drawArrange(st, e) {
      const order = K.shuffle(e.toks.map((t, k) => k));
      if (order.every((v, k) => v === k) && order.length > 1) order.reverse();
      let picked = [];
      frame(`<div class="card">${st.retry ? `<span class="tag gold">Ulangi</span> ` : ""}<p style="font-weight:700;margin:0 0 10px">${e.q}</p>
        <div class="chips" id="ans"></div>
        <p class="small muted" style="margin:8px 0">Ketuk kata sesuai urutan (dibaca dari kanan ke kiri).</p>
        <div class="chips pool" id="pool">${order.map(k => `<button class="chip ar" lang="ar" data-k="${k}">${esc(e.toks[k])}</button>`).join("")}</div></div>`,
        `<div class="btns"><button class="btn ghost" id="clr">Ulang</button><button class="btn" id="chk" disabled>Periksa</button></div>`);
      const ans = document.getElementById("ans"), chk = document.getElementById("chk");
      const paint = () => {
        ans.innerHTML = picked.map((k, j) => `<button class="chip ar" lang="ar" data-j="${j}">${esc(e.toks[k])}</button>`).join("");
        document.querySelectorAll("#pool .chip").forEach(b => b.classList.toggle("used", picked.includes(+b.dataset.k)));
        ans.querySelectorAll(".chip").forEach(b => b.onclick = () => { if (st._done) return; picked.splice(+b.dataset.j, 1); paint(); });
        chk.disabled = picked.length !== e.toks.length;
      };
      document.querySelectorAll("#pool .chip").forEach(b => b.onclick = () => { if (st._done || picked.includes(+b.dataset.k)) return; picked.push(+b.dataset.k); paint(); });
      document.getElementById("clr").onclick = () => { if (!st._done) { picked = []; paint(); } };
      chk.onclick = () => {
        st._done = true;
        const said = picked.map(k => e.toks[k]).join(" ");
        const ok = K.norm(said) === K.norm(e.ar);
        K.speak(e.ar);
        result(ok, st, ok ? "" : `<div style="margin-top:6px">Jawaban: <div class="ar sm" lang="ar">${esc(e.ar)}</div>${K.latin(e.ar, LM)}</div>`);
      };
      st._done = false;
    }
    function drawSpeak(st, e) {
      frame(`<div class="card center"><p style="font-weight:700;margin:0 0 6px">Ucapkan kalimat ini</p>
        <div class="ar mid" lang="ar">${esc(e.ar)}</div>${K.latin(e.ar, LM === "hide" ? "tap" : LM)}<div class="muted small" style="margin-top:4px">${esc(e.id)}</div>
        <div class="btns" style="justify-content:center">${K.spk(e.ar)}${K.spk(e.ar, true)}</div>
        ${K.hasSR() ? `<button class="mic" id="mic" aria-label="Rekam">🎤</button><div class="small muted">Dengarkan dulu, lalu ketuk 🎤 dan ucapkan.</div>` : `<p class="small muted">Peramban ini tidak bisa menilai ucapan. Ucapkan keras 3 kali, lalu tekan "Sudah".</p>`}
        <div id="sres"></div></div>`,
        K.hasSR() ? `<button class="btn ghost block" id="skip">Lewati (tidak bisa bicara sekarang)</button>` : `<button class="btn block" id="selfok">Sudah saya ucapkan</button>`);
      const sk = document.getElementById("skip");
      if (sk) sk.onclick = () => { st.tried = true; answered++; next(); };
      const so = document.getElementById("selfok");
      if (so) so.onclick = () => { result(true, st); };
      const mic = document.getElementById("mic");
      if (mic) mic.onclick = () => {
        mic.classList.add("rec"); document.getElementById("sres").innerHTML = `<p class="small">Mendengarkan… ucapkan sekarang.</p>`;
        K.listen(e.ar, r => {
          mic.classList.remove("rec");
          const box = document.getElementById("sres"); if (!box) return;
          if (r.err) { box.innerHTML = `<div class="fb no">${esc(r.err)}</div>`; return; }
          const hits = K.wordHits(r.text, e.ar);
          spoke.push(r.score);
          box.innerHTML = `<div class="score" style="color:${r.score >= 75 ? "var(--ok)" : r.score >= 55 ? "var(--warn)" : "var(--bad)"}">${r.score}</div>
            <div class="words">${hits.map(h => `<span class="${h.ok ? "hit" : "miss"}">${esc(h.w)}</span>`).join(" ")}</div>
            <div class="small muted">Terdengar: <span class="ar" style="font-size:18px">${esc(r.text)}</span></div>
            ${r.score < 75 ? `<p class="small">Kata bergaris merah belum tertangkap. Dengarkan 🐢 lalu coba lagi.</p>` : ""}`;
          if (r.score >= 55) { K.addXP(2); if (!st.tried) result(true, st); }
          else if (!st.tried) {
            document.getElementById("foot").innerHTML = `<div class="btns"><button class="btn ghost" id="skip2">Lewati</button></div>`;
            document.getElementById("skip2").onclick = () => { st.tried = true; answered++; next(); };
          }
        });
      };
    }

    function finish() {
      K.stop();
      const exN = total0;
      const acc = exN ? Math.round(100 * firstOk / exN) : 100;
      const mins = Math.max(1, Math.round((Date.now() - startT) / 60000));
      const r = cfg.onFinish ? cfg.onFinish({ acc, firstOk, exN, mins, spoke }) : { html: "" };
      K.shell(cfg.title, r.html || "", { tab: "learn" });
      if (r.bind) r.bind();
    }
    draw();
  };
})();
