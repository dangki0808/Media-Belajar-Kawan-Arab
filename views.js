/* Kawan Arab — tampilan: beranda, belajar, unit, latihan, murojaah, kamus, huruf, metode, ujian, sertifikat, pustaka, profil */
(function () {
  "use strict";
  const K = window.K, V = K.VIEWS, esc = K.esc, S = () => K.S();
  const M = window.METHOD;

  /* ---------- Pengenalan awal ---------- */
  V.onboard = () => {
    const st = S();
    let sex = st.sex || "", read = st.canRead ? "y" : "n", goal = st.goal || 30;
    K.shell("Selamat datang", `
      <div class="card hero"><div class="k">Kawan Arab</div><h2>أَهْلًا وَسَهْلًا</h2>
        <p>Sepuluh tahun mencoba bukan tanda Anda tidak mampu. Biasanya caranya yang kurang pas. Di sini kita pakai cara yang berbeda: sedikit setiap hari, mulai dari bacaan shalat, dan langsung dipakai.</p></div>
      <div class="card">
        <b>Nama panggilan</b>
        <input type="text" id="nm" placeholder="mis. Lala" value="${esc(st.name)}" style="margin:8px 0 14px">
        <b>Saya seorang ...</b>
        <div class="seg" id="sx" style="margin:8px 0 14px"><button data-v="f" class="${sex === "f" ? "on" : ""}">Perempuan</button><button data-v="m" class="${sex === "m" ? "on" : ""}">Laki-laki</button></div>
        <b>Sudah lancar membaca huruf Arab berharakat (seperti membaca Al-Qur'an)?</b>
        <div class="seg" id="rd" style="margin:8px 0 14px"><button data-v="y" class="${read === "y" ? "on" : ""}">Ya, lancar</button><button data-v="n" class="${read === "n" ? "on" : ""}">Belum / ragu</button></div>
        <b>Target harian</b>
        <div class="seg" id="gl" style="margin:8px 0 4px">${[[15, "Santai", "±5 mnt"], [30, "Biasa", "±10 mnt"], [50, "Serius", "±15 mnt"]].map(g => `<button data-v="${g[0]}" class="${goal === g[0] ? "on" : ""}">${g[1]}<br><small class="muted">${g[2]}</small></button>`).join("")}</div>
        <p class="small muted">Saran: pilih "Biasa". Yang penting setiap hari, bukan banyak.</p>
      </div>
      <button class="btn block" id="go">Mulai belajar</button>`, { nonav: true, right: " " });
    const seg = (id, set) => K.on(`#${id} button`, b => { document.querySelectorAll(`#${id} button`).forEach(x => x.classList.remove("on")); b.classList.add("on"); set(b.dataset.v); });
    seg("sx", v => sex = v); seg("rd", v => read = v); seg("gl", v => goal = +v);
    document.getElementById("go").onclick = () => {
      const s = S();
      s.name = document.getElementById("nm").value.trim(); s.sex = sex; s.canRead = read === "y"; s.goal = goal; s.onboarded = true;
      K.save(); K.start("home"); K.go("method");
    };
  };

  /* ---------- Beranda ---------- */
  function weekRow() {
    const t = K.today(), names = ["Ah", "Sn", "Sl", "Rb", "Km", "Jm", "Sb"];
    let h = "";
    for (let k = 6; k >= 0; k--) { const d = K.addDays(-k); const dt = new Date(d + "T12:00:00"); h += `<div><i class="${S().days.includes(d) ? "on" : ""} ${d === t ? "today" : ""}">${S().days.includes(d) ? "✓" : dt.getDate()}</i>${names[dt.getDay()]}</div>`; }
    return `<div class="week">${h}</div>`;
  }
  function sentenceOfDay() {
    const all = []; K.ALLU.forEach(u => u.p.ex.forEach(e => all.push([e[0], e[1], u])));
    const idx = Math.floor(Date.now() / 864e5) % all.length;
    return all[idx];
  }
  V.home = () => {
    const st = S();
    if (!st.onboarded) return V.onboard();
    const goal = st.goal || 30, tx = K.todayXP(), pct = Math.min(100, Math.round(100 * tx / goal));
    const due = K.dueCards().length, nu = K.nextUnit();
    const words = Object.keys(st.cards).length, unitsDone = Object.keys(st.done).length;
    const sod = sentenceOfDay(), tip = window.TIPS[Math.floor(Date.now() / 864e5) % window.TIPS.length];
    const needLetters = !st.canRead && !st.letters;
    const hello = st.name ? `Ahlan, ${esc(st.name)}!` : "Ahlan wa sahlan!";
    K.shell("Kawan Arab", `
      <div class="card hero noorb">
        <div class="row" style="align-items:flex-start"><div style="flex:1;position:relative;z-index:1"><div class="k">${new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" })}</div>
        <h2 style="max-width:none">${hello}</h2><p style="max-width:none">${pct >= 100 ? "Target hari ini tercapai. بَارَكَ اللَّهُ " + K.fik() + "!" : `Target hari ini: ${tx}/${goal} XP`}</p></div>
        <div class="ring" style="--p:${pct}"><span>${pct}%</span></div></div>
        <div class="stats"><div class="stat"><b>🔥 ${st.streak}</b>hari beruntun</div><div class="stat"><b>${words}</b>kata dipelajari</div><div class="stat"><b>${unitsDone}/30</b>unit</div></div>
      </div>
      ${weekRow()}
      <div class="sec-title">Langkah hari ini</div>
      ${due ? `<button class="list-btn" data-go="review"><span class="ic" style="background:var(--goldSoft)">🔁</span><span class="tx"><b>Murojaah: ${due} kata</b><small>Ulang dulu sebelum lupa — 2–4 menit</small></span><span class="chev">›</span></button>` : ""}
      ${needLetters ? `<button class="list-btn" data-go="letters"><span class="ic">🔤</span><span class="tx"><b>Huruf Hijaiyah & Harakat</b><small>Fondasi membaca sebelum masuk unit</small></span><span class="chev">›</span></button>` : ""}
      ${nu ? `<button class="list-btn" data-unit="${nu.id}" style="border-color:var(--gold)"><span class="ic" style="background:var(--goldSoft)">${nu.ic}</span><span class="tx"><small>${esc(K.unitLabel(nu))} · berikutnya</small><b>${esc(nu.t)}</b><small>${esc(nu.goal)}</small></span><span class="chev">›</span></button>`
        : `<div class="card"><b>Semua unit selesai! 🎉</b><p class="small muted">Lanjutkan dengan Murojaah, Tutor AI, dan buku di Pustaka.</p></div>`}
      <button class="list-btn" data-go="talk"><span class="ic">🎤</span><span class="tx"><b>Latihan bicara</b><small>Peragakan dialog dengan suara Anda</small></span><span class="chev">›</span></button>
      <div class="sec-title">Kalimat hari ini</div>
      <div class="card"><div class="exr" style="border:none;padding:0">${K.spk(sod[0])}<div class="tx"><div class="ar mid" lang="ar">${esc(sod[0])}</div>${K.latin(sod[0], K.latinMode(sod[2]))}<div class="id">${esc(sod[1])}</div></div></div>
        <p class="small muted" style="margin:8px 0 0">Ucapkan 3 kali dan pakai sekali hari ini. Dari ${esc(K.unitLabel(sod[2]))}: ${esc(sod[2].t)}.</p></div>
      <div class="tipbox">💡 ${esc(tip)}</div>
      <div class="grid">
        <button class="tile t6" data-go="learn"><span class="ic">📚</span><span><b>Belajar</b><small>Jalur 30 langkah</small></span></button>
        <button class="tile t2" data-go="practice"><span class="ic">🔁</span><span><b>Latihan</b><small>Dengar, ucap, susun</small></span></button>
        <button class="tile t4" data-go="method"><span class="ic">🧭</span><span><b>Metode</b><small>Kenapa cara ini berhasil</small></span></button>
        <button class="tile t5" data-go="ai"><span class="ic">🤖</span><span><b>Tutor AI</b><small>Ngobrol bebas (opsional)</small></span></button>
      </div>`, { tab: "home" });
    K.on("[data-go]", b => K.go(b.dataset.go));
    K.on("[data-unit]", b => K.go("unit", { id: b.dataset.unit }));
  };

  /* ---------- Belajar ---------- */
  function urow(u, nextId) {
    const d = S().done[u.id];
    return `<button class="urow ${u.id === nextId ? "next" : ""}" data-unit="${u.id}"><span class="n">${u.ic}</span><span class="tx"><small>${esc(K.unitLabel(u))}${u.id === nextId ? " · berikutnya" : ""}</small><b>${esc(u.t)}</b></span>${d ? `<span class="ok-dot">✓</span>` : `<span class="chev muted">›</span>`}</button>`;
  }
  V.learn = () => {
    const nu = K.nextUnit(), nid = nu ? nu.id : "";
    const qd = K.QURAN.filter(u => S().done[u.id]).length;
    K.shell("Belajar", `
      <button class="list-btn" data-go="method"><span class="ic">🧭</span><span class="tx"><b>Metode Kawan Arab & rencana 13 pekan</b><small>Baca dulu sekali — ini yang membedakan dari cara lama</small></span><span class="chev">›</span></button>
      <div class="lvcard"><div class="lvhead lvh"><span style="font-size:30px">🔤</span><div style="flex:1"><b>Fondasi membaca</b><div class="small" style="opacity:.9">Huruf, harakat, dan cara menyambung</div></div></div>
        <button class="urow" data-go="letters"><span class="n arn">ا</span><span class="tx"><b>Huruf Hijaiyah</b><small>28 huruf, bentuk sambung, makhraj singkat</small></span><span class="chev muted">›</span></button>
        <button class="urow" data-go="harakat"><span class="n arn">بَ</span><span class="tx"><b>Harakat & Tanda Baca</b><small>Fathah, kasrah, dhammah, sukun, tanwin, syaddah, mad, al-</small></span><span class="chev muted">›</span></button>
        <button class="urow" data-drill="letters"><span class="n">🎯</span><span class="tx"><b>Kuis Huruf</b><small>12 soal acak</small></span>${S().letters ? `<span class="ok-dot">✓</span>` : `<span class="chev muted">›</span>`}</button>
      </div>
      <div class="lvcard"><div class="lvhead lvq"><span style="font-size:30px">🕌</span><div style="flex:1"><b>Jalur Al-Qur'an & Shalat</b><div class="ar" lang="ar">الْقُرْآنُ وَالصَّلَاةُ</div><div class="small" style="opacity:.9">${qd}/6 selesai · kata yang Anda baca setiap hari</div></div></div>
        ${K.QURAN.map(u => urow(u, nid)).join("")}</div>
      ${K.LEVELS.map(L => {
        const us = K.levelUnits(L.n), dn = K.levelDone(L.n), all = dn === us.length, cert = S().certs[L.n];
        return `<div class="lvcard"><div class="lvhead lv${L.n}"><span style="font-size:30px">${L.ic}</span><div style="flex:1"><b>Level ${L.n} · ${esc(L.t)}</b><div class="ar" lang="ar">${esc(L.ar)}</div><div class="small" style="opacity:.9">${dn}/${us.length} unit · ${esc(L.desc)}</div></div></div>
          ${us.map(u => urow(u, nid)).join("")}
          <button class="urow" data-exam="${L.n}"><span class="n">🏅</span><span class="tx"><b>Ujian Level ${L.n}${cert ? " · lulus " + cert.s + "%" : ""}</b><small>${cert ? "Lihat / unduh sertifikat" : all ? "Siap diuji — lulus ≥ 70% mendapat sertifikat" : "Terbuka setelah semua unit level ini selesai"}</small></span><span class="chev muted">${all || cert ? "›" : "🔒"}</span></button></div>`;
      }).join("")}`, { tab: "learn" });
    K.on("[data-go]", b => K.go(b.dataset.go));
    K.on("[data-unit]", b => K.go("unit", { id: b.dataset.unit }));
    K.on("[data-drill]", b => K.go("drill", { kind: b.dataset.drill }));
    K.on("[data-exam]", b => {
      const n = +b.dataset.exam;
      if (S().certs[n]) return K.go("cert", { n });
      if (K.levelDone(n) < K.levelUnits(n).length) return K.toast("Selesaikan dulu semua unit Level " + n + ".");
      K.go("exam", { n });
    });
  };

  /* ---------- Halaman unit ---------- */
  V.unit = p => {
    const u = K.byId(p.id); if (!u) return K.back();
    const d = S().done[u.id], LM = K.latinMode(u);
    const nx = K.ORDER[K.ORDER.indexOf(u.id) + 1];
    K.shell(K.unitLabel(u), `
      <div class="card hero ${u.q ? "" : ""}"><div class="k">${esc(K.unitLabel(u))}${u.lv ? " · Level " + u.lv : ""}</div><h2>${u.ic} ${esc(u.t)}</h2><p>${esc(u.goal)}</p>
        <div class="stats">${d ? `<div class="stat"><b>✓ ${d.s}%</b>selesai ${esc(d.d)}</div>` : `<div class="stat"><b>±10 mnt</b>${u.v.length} kata + pola + ${u.d.l[0][0] === "N" ? "bacaan" : "dialog"}</div>`}</div></div>
      <button class="btn block gold" id="startL">${d ? "↻ Ulangi pelajaran" : "▶ Mulai pelajaran"}</button>
      ${!u.q || u.d.l[0][0] !== "N" ? `<div class="btns"><button class="btn soft" id="talkL">🎤 ${u.d.l[0][0] === "N" ? "Baca nyaring" : "Peragakan dialog"}</button></div>` : ""}
      <div class="sec-title">Kosakata</div>
      <div class="card">${u.v.map(w => `<div class="exr">${K.spk(w[0])}<div class="tx"><div class="row" style="gap:8px"><span class="ar sm" lang="ar">${esc(w[0])}</span><span style="font-size:20px">${w[2] || ""}</span></div>${K.latin(w[0], LM)}<div class="id">${esc(w[1])}</div></div></div>`).join("")}</div>
      <div class="sec-title">Pola</div>
      <div class="card"><div class="patt"><div class="ar">${esc(u.p.t)}</div></div><p style="margin:0 0 6px">${esc(u.p.x)}</p>
        ${u.p.ex.map(e => `<div class="exr">${K.spk(e[0])}<div class="tx"><div class="ar sm" lang="ar">${esc(e[0])}</div>${K.latin(e[0], LM)}<div class="id">${esc(e[1])}</div></div></div>`).join("")}</div>
      <div class="sec-title">${u.d.l[0][0] === "N" ? "Bacaan" : "Dialog"}: ${esc(u.d.t)}</div>
      <div class="card">${u.d.l.map(l => `<div class="exr">${K.spk(l[1])}<div class="tx">${l[0] !== "N" ? `<span class="tag">${l[0]}</span>` : ""}<div class="ar sm" lang="ar">${esc(l[1])}</div>${K.latin(l[1], LM)}<div class="id">${esc(l[2])}</div></div></div>`).join("")}</div>
      <div class="tipbox">💡 <b>Pakai hari ini:</b> ${esc(u.tip)}</div>
      ${nx ? `<button class="btn ghost block" id="nxU">Unit berikutnya: ${esc(K.byId(nx).t)} →</button>` : ""}`, { tab: "learn" });
    document.getElementById("startL").onclick = () => K.go("lesson", { id: u.id });
    const t = document.getElementById("talkL"); if (t) t.onclick = () => K.go("roleplay", { id: u.id });
    const n = document.getElementById("nxU"); if (n) n.onclick = () => K.replace("unit", { id: nx });
  };

  V.lesson = p => {
    const u = K.byId(p.id);
    K.runSession({
      title: K.unitLabel(u) + " · " + u.t, unit: u, mode: "lesson", steps: K.lessonSteps(u),
      onFinish: r => {
        const st = S(), first = !st.done[u.id];
        const xp = 15 + Math.round(r.acc * 0.15) + (first ? 5 : 0);
        st.done[u.id] = { d: K.today(), s: Math.max(r.acc, first ? 0 : st.done[u.id].s) };
        K.addCards(u); K.addXP(xp);
        const nx = K.nextUnit();
        return {
          html: `<div class="card hero center"><div class="k">${esc(K.unitLabel(u))} selesai</div><h2 style="max-width:none">مَا شَاءَ اللَّهُ! 🎉</h2>
              <p style="max-width:none">Ketepatan ${r.acc}% · +${xp} XP · ${r.mins} menit</p></div>
            <div class="card"><b>${u.v.length} kata masuk Murojaah</b><p class="small muted" style="margin:4px 0 0">Kata-kata ini akan muncul lagi besok, lalu 3 hari, seminggu, dan seterusnya — tepat sebelum terlupa.</p></div>
            <div class="tipbox">💡 <b>Pakai hari ini:</b> ${esc(u.tip)}</div>
            <button class="btn block" id="f1">🎤 ${u.d.l[0][0] === "N" ? "Baca nyaring bacaan ini" : "Peragakan dialognya"}</button>
            <div class="btns">${nx ? `<button class="btn soft" id="f2">Berikutnya: ${esc(nx.t)}</button>` : ""}<button class="btn ghost" id="f3">Ke Belajar</button></div>`,
          bind: () => {
            document.getElementById("f1").onclick = () => K.replace("roleplay", { id: u.id });
            const f2 = document.getElementById("f2"); if (f2) f2.onclick = () => K.replace("unit", { id: nx.id });
            document.getElementById("f3").onclick = () => K.tab("learn");
          }
        };
      }
    });
  };

  /* ---------- Latihan ---------- */
  const DRILLS = {
    listen: ["🎧", "Dengar & Pilih", "10 kata: dengarkan lalu pilih artinya", "t2"],
    speak: ["🎤", "Ucapkan", "8 kalimat dinilai lewat mikrofon", "t3"],
    arrange: ["🧩", "Susun Kalimat", "8 kalimat dari kata-kata acak", "t4"],
    quick: ["⚡", "Kuis Kilat", "10 soal campuran", "t5"],
    letters: ["🔤", "Kuis Huruf", "Kenali huruf dan bunyi harakat", "t1"]
  };
  V.practice = () => {
    const st = S(), due = K.dueCards().length, total = Object.keys(st.cards).length;
    const strong = Object.values(st.cards).filter(c => c.b >= 4).length;
    const week = Object.values(st.cards).filter(c => c.due <= K.addDays(7)).length;
    const base = Object.keys(st.done).length ? "" : `<p class="small muted">Anda belum menyelesaikan unit. Latihan memakai materi awal (Al-Fatihah & Unit 1).</p>`;
    K.shell("Latihan", `
      <div class="card hero"><div class="k">Murojaah berjarak</div><h2>${due ? due + " kata menunggu" : total ? "Semua sudah diulang ✓" : "Belum ada kata"}</h2>
        <p>${total ? `${total} kata dalam kotak · ${strong} sudah kuat · ${week} jatuh tempo 7 hari ke depan` : "Selesaikan satu unit, kata-katanya otomatis masuk ke sini."}</p>
        <div class="btns" style="position:relative;z-index:1"><button class="btn gold" id="rv" ${total ? "" : "disabled"}>${due ? "🔁 Mulai murojaah" : "Ulang kata acak"}</button></div></div>
      <div class="sec-title">Latihan keterampilan</div>${base}
      <div class="grid">${Object.keys(DRILLS).map(k => { const d = DRILLS[k]; return `<button class="tile ${d[3]}" data-drill="${k}"><span class="ic">${d[0]}</span><span><b>${d[1]}</b><small>${d[2]}</small></span></button>`; }).join("")}
        <button class="tile t6" data-go="dict"><span class="ic">🔎</span><span><b>Kamus</b><small>Cari semua kata di aplikasi</small></span></button></div>
      ${!K.hasSR() ? `<div class="fb info">Peramban ini belum bisa menilai ucapan. Pakai Google Chrome di Android agar fitur 🎤 aktif.</div>` : ""}`, { tab: "practice" });
    document.getElementById("rv").onclick = () => K.go("review", { free: !due });
    K.on("[data-drill]", b => K.go("drill", { kind: b.dataset.drill }));
    K.on("[data-go]", b => K.go(b.dataset.go));
  };
  V.drill = p => {
    const d = DRILLS[p.kind];
    K.runSession({
      title: d[1], mode: "drill", steps: K.drillSteps(p.kind), latin: p.kind === "letters" ? "hide" : undefined, unit: K.learnedUnits().slice(-1)[0],
      onFinish: r => {
        const xp = 5 + Math.round(r.acc / 10);
        K.addXP(xp);
        if (p.kind === "letters" && r.acc >= 70) { S().letters = true; K.save(); }
        return {
          html: `<div class="card hero center"><div class="k">${esc(d[1])}</div><h2 style="max-width:none">${r.acc >= 80 ? "مُمْتَازٌ!" : r.acc >= 60 ? "جَيِّدٌ!" : "Terus berlatih 💪"}</h2>
            <p style="max-width:none">Benar di percobaan pertama: ${r.firstOk}/${r.exN} (${r.acc}%) · +${xp} XP</p></div>
            ${r.spoke.length ? `<div class="card">Rata-rata skor ucapan: <b>${Math.round(r.spoke.reduce((a, b) => a + b, 0) / r.spoke.length)}</b></div>` : ""}
            <div class="btns"><button class="btn" id="ag">Ulangi</button><button class="btn ghost" id="bk">Ke Latihan</button></div>`,
          bind: () => { document.getElementById("ag").onclick = () => K.replace("drill", p); document.getElementById("bk").onclick = () => K.tab("practice"); }
        };
      }
    });
  };

  /* ---------- Sesi murojaah ---------- */
  V.review = p => {
    const st = S(), va = K.vocabAll();
    const info = ar => va.find(x => x.ar === ar) || { ar, id: "", em: "" };
    let keys = p.free ? K.shuffle(Object.keys(st.cards)).slice(0, 15) : K.shuffle(K.dueCards()).slice(0, 30);
    if (!keys.length) {
      K.shell("Murojaah", `<div class="card center"><div style="font-size:48px">🎉</div><h3>Tidak ada kata untuk diulang</h3><p class="muted">Selesaikan unit untuk menambah kata.</p></div>`, { tab: "practice" });
      return;
    }
    const queue = keys.map(k => ({ k, again: false })); let i = 0, rem = 0, n = 0;
    const lab = (c, g) => { if (g === 0) return "besok"; const b = g === 1 ? Math.max(1, c.b) : Math.min(7, c.b + 1); const d = g === 1 ? Math.max(1, Math.floor(K.INT[b] / 2)) : K.INT[b]; return d + " hari"; };
    function draw() {
      if (i >= queue.length) return done();
      const q = queue[i], w = info(q.k), c = st.cards[q.k] || { b: 1 };
      const dir = !p.free && c.b >= 3 && Math.random() < 0.5 ? "id" : "ar";
      const LM = S().latin === "auto" ? "tap" : S().latin;
      K.shell(p.free ? "Ulang kata acak" : "Murojaah", `
        <div class="lessonbar"><div class="prog"><i style="width:${Math.round(100 * i / queue.length)}%"></i></div><span class="small muted">${i + 1}/${queue.length}</span></div>
        <div class="card flash" id="fc">
          ${dir === "ar" ? `<div class="ar big" lang="ar">${esc(w.ar)}</div><div>${K.spk(w.ar)}</div><p class="muted small">Ingat artinya? Ucapkan dalam hati, lalu buka.</p>`
          : `<div style="font-size:44px">${w.em || "💭"}</div><div class="mean">${esc(w.id)}</div><p class="muted small">Bagaimana bahasa Arabnya? Ucapkan dengan suara, lalu buka.</p>`}
          <div id="back"></div>
        </div>
        <div id="foot"><button class="btn block" id="show">Tampilkan jawaban</button></div>`, { nonav: true });
      if (dir === "ar") K.speak(w.ar);
      document.getElementById("show").onclick = () => {
        const ex = K.findExample(w.ar);
        const back = document.getElementById("back");
        back.innerHTML = `<hr style="border:none;border-top:1px dashed var(--line);width:100%;margin:14px 0">
          ${dir === "id" ? `<div class="ar big" lang="ar">${esc(w.ar)}</div>` : `<div style="font-size:34px">${w.em || ""}</div><div class="mean">${esc(w.id)}</div>`}
          ${K.latin(w.ar, "show")}
          ${ex ? `<div class="exr" style="border:none;text-align:right;width:100%">${K.spk(ex[0])}<div class="tx"><div class="ar sm" lang="ar">${esc(ex[0])}</div><div class="id" style="text-align:left">${esc(ex[1])}</div></div></div>` : ""}`;
        K.bindSpeak(back); K.speak(w.ar);
        document.getElementById("foot").innerHTML = p.free ? `<button class="btn block" id="nx">Lanjut →</button>` : `<p class="small muted center" style="margin:0 0 6px">Seberapa ingat Anda?</p><div class="btns" style="margin-top:0">
          <button class="btn red col" data-g="0">😕 Lupa<br><small>${lab(c, 0)}</small></button>
          <button class="btn ghost col" data-g="1">🤔 Ragu<br><small>${lab(c, 1)}</small></button>
          <button class="btn col" data-g="2">😊 Ingat<br><small>${lab(c, 2)}</small></button></div>`;
        const nxb = document.getElementById("nx"); if (nxb) nxb.onclick = () => { n++; i++; draw(); };
        K.on("[data-g]", b => {
          const g = +b.dataset.g;
          if (!q.again) { K.grade(q.k, g); n++; if (g > 0) rem++; }
          if (g === 0 && !q.again) queue.push({ k: q.k, again: true });
          i++; draw();
        });
      };
    }
    function done() {
      const xp = Math.max(2, n * 2); K.addXP(xp);
      const left = K.dueCards().length;
      K.shell("Murojaah", `<div class="card hero center"><div class="k">Selesai</div><h2 style="max-width:none">بَارَكَ اللَّهُ ${K.fik()} 🌿</h2><p style="max-width:none">${n} kata diulang${p.free ? "" : ` · ${rem} diingat`} · +${xp} XP</p></div>
        <div class="card small">Kata yang Anda tandai "Lupa" akan muncul lagi besok. Itu normal — setiap kali diulang, ingatannya makin kuat.</div>
        ${left ? `<button class="btn block" id="more">Masih ada ${left} kata — lanjutkan</button>` : ""}
        <div class="btns"><button class="btn ghost" id="bk">Ke Beranda</button></div>`, { tab: "practice" });
      const m = document.getElementById("more"); if (m) m.onclick = () => K.replace("review", {});
      document.getElementById("bk").onclick = () => K.tab("home");
    }
    draw();
  };

  /* ---------- Kamus ---------- */
  V.dict = () => {
    K.shell("Kamus", `<input type="search" id="q" placeholder="Cari: buku, كتاب, kitab ..." autocomplete="off">
      <p class="small muted" id="cnt"></p><div class="card" id="res" style="padding:4px 16px"></div>`, { tab: "practice" });
    const all = K.vocabAll().map(w => Object.assign({ lt: K.translit(w.ar).toLowerCase().replace(/[^a-z' ]/g, "") }, w));
    const inp = document.getElementById("q");
    const run = () => {
      const q = inp.value.trim().toLowerCase();
      const qn = K.norm(q);
      const hits = !q ? all.slice(0, 40) : all.filter(w => w.id.toLowerCase().includes(q) || (qn && K.norm(w.ar).includes(qn)) || w.lt.includes(q.replace(/[^a-z' ]/g, "")));
      document.getElementById("cnt").textContent = q ? hits.length + " hasil" : all.length + " kata di aplikasi · ketik untuk mencari";
      const r = document.getElementById("res");
      r.innerHTML = hits.slice(0, 80).map(w => { const u = K.byId(w.uid); return `<div class="dicthit">${K.spk(w.ar)}<div class="tx"><span class="ar sm" lang="ar">${esc(w.ar)}</span> <span>${w.em}</span>${K.latin(w.ar, "show")}<div class="id">${esc(w.id)}</div></div><button class="minib" data-unit="${u.id}">${esc(K.unitLabel(u))}</button></div>`; }).join("") || `<p class="muted">Tidak ditemukan.</p>`;
      K.bindSpeak(r);
      r.querySelectorAll("[data-unit]").forEach(b => b.onclick = () => K.go("unit", { id: b.dataset.unit }));
    };
    inp.oninput = run; run();
  };

  /* ---------- Huruf & harakat ---------- */
  const TAT = "ـ";
  V.letters = () => {
    const L = window.LETTERS;
    K.shell("Huruf Hijaiyah", `
      <div class="card"><p style="margin:0">Bahasa Arab ditulis dari <b>kanan ke kiri</b>. Hampir semua huruf menyambung, dan bentuknya sedikit berubah di awal, tengah, dan akhir kata. Ketuk huruf untuk melihat bentuk dan mendengar bunyinya.</p></div>
      <div class="lgrid">${L.map((l, k) => `<button class="lbtn" data-k="${k}"><span class="ar" lang="ar">${l[0]}</span><small>${esc(l[2])}</small></button>`).join("")}</div>
      <div class="fb info" style="margin-top:14px">6 huruf <b>tidak menyambung ke kiri</b>: <span class="ar" style="font-size:22px">ا د ذ ر ز و</span>. Huruf sesudahnya mulai dengan bentuk awal lagi.</div>
      <div class="btns"><button class="btn" id="qz">🎯 Kuis Huruf</button><button class="btn ghost" id="hk">Harakat →</button></div>`, { tab: "learn" });
    K.on(".lbtn", b => {
      const l = L[+b.dataset.k], c = l[0], j = l[4];
      const forms = [["Sendiri", c], ["Awal", j ? c + TAT : c], ["Tengah", j ? TAT + c + TAT : TAT + c], ["Akhir", TAT + c]];
      K.sheet(`<div class="row"><div class="ar" style="font-size:64px;line-height:1.4">${c}</div><div style="flex:1"><h3>${esc(l[2])}</h3><div class="ar sm">${l[1]}</div><div class="small muted">Bunyi: <b>${esc(l[3])}</b></div></div>${K.spk(l[1])}</div>
        ${l[5] ? `<div class="tipbox" style="margin-top:10px">${esc(l[5])}</div>` : ""}
        <div class="forms" style="margin-top:10px">${forms.map(f => `<div><span class="ar" lang="ar">${f[1]}</span><small>${f[0]}</small></div>`).join("")}</div>
        <div class="sec-title">Dengar bunyinya dengan harakat</div>
        <div class="btns" style="direction:rtl">${c === "ا" ? `<button class="btn soft" data-say="أَ">أَ</button><button class="btn soft" data-say="إِ">إِ</button><button class="btn soft" data-say="أُ">أُ</button>`
          : ["َ", "ِ", "ُ"].map(h => `<button class="btn soft ar" style="font-size:26px;padding:4px 14px" data-say="${c + h}">${c + h}</button>`).join("")}</div>
        <button class="btn block ghost" data-close style="margin-top:14px">Tutup</button>`);
      K.speak(l[1]);
    });
    document.getElementById("qz").onclick = () => K.go("drill", { kind: "letters" });
    document.getElementById("hk").onclick = () => K.go("harakat");
  };
  V.harakat = () => {
    const H = window.HARAKAT;
    const ex = [["كَتَبَ", "kataba — fathah semua"], ["كِتَابٌ", "kitābun — kasrah, mad alif, tanwin"], ["قُلْ", "qul — dhammah lalu sukun"], ["رَبِّ", "rabbi — syaddah"], ["نُورٌ", "nūrun — mad wau"], ["دِينٌ", "dīnun — mad ya"]];
    const al = [["الْقَمَرُ", "al-qamaru — qamariyah: ل dibaca jelas"], ["الشَّمْسُ", "asy-syamsu — syamsiyah: ل lebur, huruf sesudahnya bersyaddah"], ["مَدْرَسَةٌ", "madrasatun — ة dibaca t saat bersambung"], ["مَدْرَسَهْ", "madrasah — dibaca h saat berhenti"]];
    K.shell("Harakat & Tanda Baca", `
      <div class="card">${H.map(h => `<div class="exr">${K.spk(h[0])}<div class="ar mid" lang="ar" style="width:62px;text-align:center">${h[0]}</div><div class="tx"><b>${esc(h[1])}</b> <span class="tag">${esc(h[2])}</span><div class="id">${esc(h[3])}</div></div></div>`).join("")}</div>
      <div class="sec-title">Latihan membaca kata</div>
      <div class="card">${ex.map(e => `<div class="exr">${K.spk(e[0])}<div class="tx"><div class="ar sm" lang="ar">${e[0]}</div><button class="lat tap" data-lat="${esc(e[1])}">Lihat cara baca</button></div></div>`).join("")}</div>
      <div class="sec-title">ال (al-) dan ة (ta marbuthah)</div>
      <div class="card">${al.map(e => `<div class="exr">${K.spk(e[0])}<div class="tx"><div class="ar sm" lang="ar">${e[0]}</div><div class="id">${esc(e[1])}</div></div></div>`).join("")}</div>
      <div class="tipbox">Huruf syamsiyah (ل lebur): <span class="ar" style="font-size:20px">ت ث د ذ ر ز س ش ص ض ط ظ ل ن</span>. Sisanya qamariyah.</div>
      <button class="btn block" id="qz">🎯 Kuis Huruf & Harakat</button>`, { tab: "learn" });
    document.getElementById("qz").onclick = () => K.go("drill", { kind: "letters" });
  };

  /* ---------- Metode ---------- */
  V.method = () => {
    K.shell("Metode Kawan Arab", `
      <div class="card hero noorb"><div class="k">Kenapa kali ini berbeda</div><h2 style="max-width:none">Bukan Anda yang gagal — caranya yang kurang pas</h2>
        <p style="max-width:none">Banyak orang belajar bahasa Arab bertahun-tahun tanpa bisa bicara. Hampir selalu karena salah satu dari empat hal ini.</p></div>
      <div class="card">${M.why.map((w, k) => `<div class="pillar"><span class="ic">${["📕", "🏃", "🫥", "🔇"][k]}</span><div><b>${esc(w[0])}</b><p>${esc(w[1])}</p></div></div>`).join("")}</div>
      <div class="sec-title">5 pilar Kawan Arab</div>
      <div class="card">${M.pillars.map(p => `<div class="pillar"><span class="ic">${p[0]}</span><div><b>${esc(p[1])}</b><p>${esc(p[2])}</p></div></div>`).join("")}</div>
      <div class="sec-title">Rutinitas harian (10–15 menit)</div>
      <div class="card">${M.daily.map((d, k) => `<div class="pillar"><span class="ic">${d[0]}</span><div><b>${k + 1}. ${esc(d[1])}</b><p>${esc(d[2])}</p></div></div>`).join("")}</div>
      <div class="sec-title">Rencana 13 pekan</div>
      <div class="card">${M.plan.map(p => `<div class="kv" style="display:block"><b>${esc(p[0])} · ${esc(p[1])}</b><div class="small muted">${esc(p[2])}</div></div>`).join("")}</div>
      <div class="tipbox">Kunci terpenting: <b>jangan bolong dua hari berturut-turut.</b> Hari yang berat? Cukup murojaah 2 menit. Rantai harian lebih penting dari durasi.</div>
      <button class="btn block gold" id="go">Mulai langkah pertama →</button>`, { tab: "learn" });
    document.getElementById("go").onclick = () => {
      const st = S();
      if (!st.canRead && !st.letters) return K.replace("letters");
      const nu = K.nextUnit(); if (nu) K.replace("unit", { id: nu.id }); else K.tab("learn");
    };
  };

  /* ---------- Ujian & sertifikat ---------- */
  V.exam = p => {
    const n = p.n, L = K.LEVELS[n - 1];
    K.runSession({
      title: "Ujian Level " + n, mode: "exam", steps: K.examSteps(n), latin: "hide",
      onFinish: r => {
        const st = S(), pass = r.acc >= 70;
        st.exams[n] = Math.max(st.exams[n] || 0, r.acc);
        if (pass) { st.certs[n] = { d: K.today(), s: Math.max(r.acc, (st.certs[n] || {}).s || 0) }; K.addXP(30); }
        K.save();
        return {
          html: `<div class="card hero center"><div class="k">Ujian Level ${n} · ${esc(L.t)}</div><h2 style="max-width:none">${pass ? "Lulus! 🏅" : "Belum lulus"}</h2><p style="max-width:none">Nilai ${r.acc}% (${r.firstOk}/${r.exN})${pass ? " · +30 XP" : " · batas lulus 70%"}</p></div>
            ${pass ? `<button class="btn block gold" id="ct">Lihat sertifikat</button>` : `<div class="card small">Ulangi murojaah dan unit yang terasa sulit, lalu coba lagi. Ujian bisa diulang kapan saja.</div><button class="btn block" id="rt">Coba lagi</button>`}
            <div class="btns"><button class="btn ghost" id="bk">Ke Belajar</button></div>`,
          bind: () => {
            const c = document.getElementById("ct"); if (c) c.onclick = () => K.replace("cert", { n });
            const t = document.getElementById("rt"); if (t) t.onclick = () => K.replace("exam", { n });
            document.getElementById("bk").onclick = () => K.tab("learn");
          }
        };
      }
    });
  };
  function drawCert(n) {
    const L = K.LEVELS[n - 1], c = S().certs[n], name = S().name || "Pelajar Kawan Arab";
    const cv = document.createElement("canvas"); cv.width = 1600; cv.height = 1130;
    const g = cv.getContext("2d");
    g.fillStyle = "#fbf8f1"; g.fillRect(0, 0, 1600, 1130);
    g.strokeStyle = "#0f6b57"; g.lineWidth = 18; g.strokeRect(40, 40, 1520, 1050);
    g.strokeStyle = "#d9a521"; g.lineWidth = 4; g.strokeRect(78, 78, 1444, 974);
    g.textAlign = "center"; g.fillStyle = "#0f6b57";
    g.font = "700 92px 'Noto Naskh Arabic', serif"; g.direction = "rtl"; g.fillText("شَهَادَةٌ", 800, 230); g.direction = "ltr";
    g.font = "800 40px 'Plus Jakarta Sans', sans-serif"; g.fillStyle = "#16302b"; g.fillText("SERTIFIKAT KAWAN ARAB", 800, 300);
    g.font = "500 32px 'Plus Jakarta Sans', sans-serif"; g.fillStyle = "#43605a"; g.fillText("diberikan kepada", 800, 390);
    g.font = "800 84px 'Plus Jakarta Sans', sans-serif"; g.fillStyle = "#0f6b57"; g.fillText(name, 800, 500);
    g.fillStyle = "#d9a521"; g.fillRect(560, 530, 480, 5);
    g.font = "500 34px 'Plus Jakarta Sans', sans-serif"; g.fillStyle = "#16302b";
    g.fillText(`telah menyelesaikan Level ${n} · ${L.t}`, 800, 610);
    g.font = "600 46px 'Noto Naskh Arabic', serif"; g.direction = "rtl"; g.fillText(L.ar, 800, 690); g.direction = "ltr";
    g.font = "500 28px 'Plus Jakarta Sans', sans-serif"; g.fillStyle = "#43605a";
    g.fillText(`${K.levelUnits(n).length} unit · nilai ujian ${c.s}% · ${new Date(c.d + "T12:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}`, 800, 770);
    g.font = "600 40px 'Noto Naskh Arabic', serif"; g.fillStyle = "#0f6b57"; g.direction = "rtl"; g.fillText("بَارَكَ اللَّهُ " + K.fik(), 800, 900); g.direction = "ltr";
    g.font = "500 24px 'Plus Jakarta Sans', sans-serif"; g.fillStyle = "#71857f"; g.fillText("Kawan Arab — sedikit setiap hari", 800, 990);
    return cv.toDataURL("image/png");
  }
  V.cert = p => {
    const n = p.n; if (!S().certs[n]) return K.back();
    K.shell("Sertifikat Level " + n, `<div class="card cert"><img id="ci" alt="Sertifikat"></div>
      <a class="btn block" id="dl" download="sertifikat-kawan-arab-level-${n}.png">⬇ Unduh PNG</a>
      <p class="small muted">Nama di sertifikat bisa diubah di Profil.</p>`, { tab: "learn" });
    const go = () => { const url = drawCert(n); document.getElementById("ci").src = url; document.getElementById("dl").href = url; };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
  };

  /* ---------- Pustaka ---------- */
  V.library = () => {
    const LIB = window.LIBRARY;
    K.shell("Pustaka", `
      <div class="card hero noorb"><div class="k">Folder Drive "BAHASA ARAB"</div><h2 style="max-width:none">${LIB.reduce((a, g) => a + g.items.length, 0)} buku PDF</h2>
        <p style="max-width:none">Buku pendamping, dikelompokkan sesuai tahap belajar. Dibuka di Google Drive (butuh internet).</p></div>
      <div class="tipbox">Saran: jangan baca semuanya. Pilih <b>satu</b> buku pendamping sesuai level Anda dan baca 1–2 halaman setelah unit selesai.</div>
      ${LIB.map(g => `<div class="sec-title">${g.ic} ${esc(g.g)}</div>${g.items.map(it => `<a class="list-btn" style="text-decoration:none;color:inherit" target="_blank" rel="noopener" href="https://drive.google.com/file/d/${it[1]}/view"><span class="ic">📄</span><span class="tx"><b>${esc(it[0])}</b><small>${esc(it[2])}</small></span><span class="chev">↗</span></a>`).join("")}`).join("")}
      <a class="btn ghost block" target="_blank" rel="noopener" href="${window.LIBRARY_FOLDER}">Buka folder Drive</a>
      <p class="small muted">Agar orang lain (misalnya santri) bisa membuka buku, atur folder Drive ke "Siapa saja yang memiliki link".</p>`, { tab: "library" });
  };

  /* ---------- Profil ---------- */
  V.profile = () => {
    const st = S();
    const words = Object.keys(st.cards).length, strong = Object.values(st.cards).filter(c => c.b >= 4).length;
    const v = K.arVoice();
    K.shell("Profil", `
      <div class="card"><b>Nama (untuk sapaan & sertifikat)</b>
        <div class="row" style="margin-top:8px"><input type="text" id="nm" value="${esc(st.name)}" placeholder="Nama Anda"><button class="btn" id="svn">Simpan</button></div></div>
      <div class="card">
        <b>Target harian</b>
        <div class="seg" id="gl" style="margin:8px 0 14px">${[[15, "Santai"], [30, "Biasa"], [50, "Serius"]].map(g => `<button data-v="${g[0]}" class="${st.goal === g[0] ? "on" : ""}">${g[1]} · ${g[0]} XP</button>`).join("")}</div>
        <b>Tulisan latin</b>
        <div class="seg" id="lt" style="margin:8px 0 4px">${[["auto", "Otomatis"], ["show", "Selalu"], ["tap", "Ketuk"], ["hide", "Sembunyi"]].map(g => `<button data-v="${g[0]}" class="${st.latin === g[0] ? "on" : ""}">${g[1]}</button>`).join("")}</div>
        <p class="small muted" style="margin:0 0 14px">Otomatis: tampil di Level 1 & Al-Qur'an, lalu disembunyikan (ketuk untuk lihat) di Level 2–3 agar mata terbiasa membaca huruf Arab.</p>
        <b>Kecepatan suara</b>
        <div class="seg" id="rt" style="margin:8px 0 8px">${[[0.6, "Pelan"], [0.75, "Agak pelan"], [0.85, "Normal"], [1, "Cepat"]].map(g => `<button data-v="${g[0]}" class="${st.rate === g[0] ? "on" : ""}">${g[1]}</button>`).join("")}</div>
        <button class="btn soft block" id="tst">🔊 Tes suara: السَّلَامُ عَلَيْكُمْ</button>
        <p class="small ${v ? "muted" : ""}" style="margin:8px 0 0;${v ? "" : "color:var(--bad)"}">${v ? "Suara Arab: " + esc(v.name) : "Suara bahasa Arab belum ditemukan di HP ini. Buka Setelan › Bahasa & input › Output text-to-speech › Google › pasang bahasa Arab (العربية)."}</p>
      </div>
      <div class="card"><b>Statistik</b>
        <div class="kv"><span>Hari beruntun</span><b>🔥 ${st.streak}</b></div>
        <div class="kv"><span>Hari aktif</span><b>${st.days.length}</b></div>
        <div class="kv"><span>Total XP</span><b>⭐ ${st.xp}</b></div>
        <div class="kv"><span>Unit selesai</span><b>${Object.keys(st.done).length}/30</b></div>
        <div class="kv"><span>Kata di murojaah</span><b>${words} (${strong} kuat)</b></div>
      </div>
      <div class="card"><b>Sertifikat</b>
        ${[1, 2, 3].map(n => st.certs[n] ? `<button class="list-btn" data-cert="${n}" style="margin-top:8px"><span class="ic">🏅</span><span class="tx"><b>Level ${n} · ${esc(K.LEVELS[n - 1].t)}</b><small>Nilai ${st.certs[n].s}% · ${esc(st.certs[n].d)}</small></span><span class="chev">›</span></button>` : `<div class="kv"><span>Level ${n} · ${esc(K.LEVELS[n - 1].t)}</span><span class="muted">belum</span></div>`).join("")}</div>
      <button class="list-btn" data-go="aiset"><span class="ic">🤖</span><span class="tx"><b>Tutor AI</b><small>${st.aiKey ? "Terhubung" : "Belum diatur (opsional, gratis)"}</small></span><span class="chev">›</span></button>
      <button class="list-btn" data-go="method"><span class="ic">🧭</span><span class="tx"><b>Metode & rencana belajar</b><small>Baca lagi saat semangat turun</small></span><span class="chev">›</span></button>
      <div class="card"><b>Cadangan progres</b><p class="small muted" style="margin:4px 0 10px">Progres tersimpan di HP ini. Unduh cadangan sebelum ganti HP atau menghapus data Chrome.</p>
        <div class="btns" style="margin-top:0"><button class="btn soft" id="exp">⬇ Unduh cadangan</button><button class="btn ghost" id="imp">⬆ Pulihkan</button></div>
        <input type="file" id="impf" accept="application/json,.json" hidden></div>
      <button class="btn ghost block" id="rst" style="color:var(--bad)">Hapus semua progres</button>
      <p class="small muted center">Kawan Arab v1 · bekerja offline setelah dipasang</p>`, { tab: "profile" });
    document.getElementById("svn").onclick = () => { S().name = document.getElementById("nm").value.trim(); K.save(); K.toast("Nama disimpan."); K.render(); };
    const seg = (id, set) => K.on(`#${id} button`, b => { document.querySelectorAll(`#${id} button`).forEach(x => x.classList.remove("on")); b.classList.add("on"); set(b.dataset.v); K.save(); });
    seg("gl", v => S().goal = +v); seg("lt", v => S().latin = v); seg("rt", v => { S().rate = +v; K.speak("السَّلَامُ عَلَيْكُمْ"); });
    document.getElementById("tst").onclick = () => K.speak("السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ");
    K.on("[data-cert]", b => K.go("cert", { n: +b.dataset.cert }));
    K.on("[data-go]", b => K.go(b.dataset.go));
    document.getElementById("exp").onclick = () => {
      const data = Object.assign({}, S()); data.aiKey = "";
      const blob = new Blob([JSON.stringify({ app: "kawan-arab", v: 1, at: new Date().toISOString(), state: data })], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "kawan-arab-cadangan-" + K.today() + ".json"; a.click();
    };
    const f = document.getElementById("impf");
    document.getElementById("imp").onclick = () => f.click();
    f.onchange = () => {
      const file = f.files[0]; if (!file) return;
      const rd = new FileReader();
      rd.onload = () => {
        try { const j = JSON.parse(rd.result); if (j.app !== "kawan-arab" || !j.state) throw 0; const key = S().aiKey; K.replaceState(j.state); if (key && !S().aiKey) { S().aiKey = key; K.save(); } K.toast("Progres dipulihkan."); K.render(); }
        catch (e) { K.toast("File cadangan tidak valid."); }
      };
      rd.readAsText(file);
    };
    document.getElementById("rst").onclick = () => {
      K.sheet(`<h3>Hapus semua progres?</h3><p class="muted">XP, streak, unit selesai, kata murojaah, dan sertifikat akan hilang. Tidak bisa dibatalkan.</p>
        <div class="btns"><button class="btn ghost" data-close>Batal</button><button class="btn red" id="yes">Hapus</button></div>`, (bg, close) => {
        bg.querySelector("#yes").onclick = () => { close(); K.resetState(); K.start("home"); };
      });
    };
  };
})();
