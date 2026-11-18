// Kawan Arab — huruf hijaiyah, metode, tips, dan pustaka Drive
window.LETTERS = [
  // [huruf, nama berharakat, nama latin, bunyi, sambung kiri?, catatan]
  ["ا", "أَلِف", "alif", "a", 0, "Penopang vokal / mad. Tidak menyambung ke kiri."],
  ["ب", "بَاء", "ba", "b", 1, "Satu titik di bawah."],
  ["ت", "تَاء", "ta", "t", 1, "Dua titik di atas."],
  ["ث", "ثَاء", "tsa", "ts", 1, "Tiga titik di atas. Ujung lidah di antara gigi, seperti \"th\" pada think."],
  ["ج", "جِيم", "jim", "j", 1, "Satu titik di dalam perut."],
  ["ح", "حَاء", "ha (ḥ)", "ḥ", 1, "Dari tengah tenggorokan, desah kuat tanpa serak."],
  ["خ", "خَاء", "kha", "kh", 1, "Dari pangkal tenggorokan, serak seperti mengorok halus."],
  ["د", "دَال", "dal", "d", 0, "Tidak menyambung ke kiri."],
  ["ذ", "ذَال", "dzal", "dz", 0, "Ujung lidah di antara gigi, bersuara (seperti \"th\" pada this)."],
  ["ر", "رَاء", "ra", "r", 0, "Tidak menyambung ke kiri."],
  ["ز", "زَاي", "zai", "z", 0, "Tidak menyambung ke kiri."],
  ["س", "سِين", "sin", "s", 1, "Tiga gigi."],
  ["ش", "شِين", "syin", "sy", 1, "Tiga gigi dengan tiga titik."],
  ["ص", "صَاد", "shad", "sh", 1, "S tebal: pangkal lidah naik."],
  ["ض", "ضَاد", "dhad", "dh", 1, "D tebal, sisi lidah menekan geraham. Huruf khas bahasa Arab."],
  ["ط", "طَاء", "tha", "th", 1, "T tebal."],
  ["ظ", "ظَاء", "zha", "zh", 1, "Dz tebal."],
  ["ع", "عَيْن", "'ain", "'", 1, "Dari tengah tenggorokan, ditekan. Bukan sekadar \"a\"."],
  ["غ", "غَيْن", "ghain", "gh", 1, "Seperti r yang digulung di tenggorokan."],
  ["ف", "فَاء", "fa", "f", 1, "Satu titik di atas."],
  ["ق", "قَاف", "qaf", "q", 1, "K dari pangkal lidah, tebal."],
  ["ك", "كَاف", "kaf", "k", 1, "K biasa, tipis."],
  ["ل", "لَام", "lam", "l", 1, ""],
  ["م", "مِيم", "mim", "m", 1, ""],
  ["ن", "نُون", "nun", "n", 1, ""],
  ["ه", "هَاء", "ha", "h", 1, "H ringan dari ujung tenggorokan."],
  ["و", "وَاو", "wau", "w", 0, "Tidak menyambung ke kiri. Juga tanda mad ū."],
  ["ي", "يَاء", "ya", "y", 1, "Juga tanda mad ī."]
];

window.HARAKAT = [
  ["بَ", "fathah", "a", "Garis miring di atas huruf: ba"],
  ["بِ", "kasrah", "i", "Garis miring di bawah huruf: bi"],
  ["بُ", "dhammah", "u", "Seperti wau kecil di atas: bu"],
  ["بْ", "sukun", "—", "Bulatan kecil: huruf mati. أَبْ = ab"],
  ["بًا", "tanwin fathah", "an", "Dua fathah: ban"],
  ["بٍ", "tanwin kasrah", "in", "Dua kasrah: bin"],
  ["بٌ", "tanwin dhammah", "un", "Dua dhammah: bun"],
  ["بّ", "syaddah", "bb", "Huruf ganda: رَبّ = rabb"],
  ["بَا", "mad alif", "ā", "Fathah + alif: baa (panjang 2 ketukan)"],
  ["بِي", "mad ya", "ī", "Kasrah + ya: bii"],
  ["بُو", "mad wau", "ū", "Dhammah + wau: buu"]
];

window.METHOD = {
  why: [
    ["Mulai dari tata bahasa", "Banyak kursus membuka dengan istilah nahwu (mubtada, khabar, i'rab) sebelum bisa satu kalimat pun. Otak lelah, motivasi habis."],
    ["Belajar ngebut lalu berhenti", "Dua jam seminggu sekali kalah jauh dari 10 menit setiap hari. Bahasa itu kebiasaan, bukan proyek."],
    ["Menghafal tanpa mengulang", "Kata yang tidak diulang tepat waktu akan hilang dalam beberapa hari. Bukan karena Anda lemah — itu cara kerja ingatan semua orang."],
    ["Tidak pernah dipakai", "Bahasa yang hanya ada di buku tidak akan keluar dari mulut. Harus diucapkan, didengar, dan dipakai dalam hidup nyata."]
  ],
  pillars: [
    ["🕌", "Mulai dari yang Anda dengar setiap hari", "Al-Fatihah, bacaan shalat, dan dzikir sudah Anda ulang puluhan kali sehari. Pahami artinya, dan setiap shalat menjadi sesi murojaah."],
    ["🧩", "Pola dulu, istilah belakangan", "Anda belajar pola kalimat yang langsung bisa dipakai (أُرِيدُ ...، أَيْنَ ...؟). Istilah nahwu hanya diberi setelah Anda bisa memakainya."],
    ["⏱️", "Sedikit, tapi setiap hari", "Target harian kecil (10–15 menit). Streak 🔥 menjaga Anda tetap jalan. Bolong sehari? Lanjut besok, jangan bolong dua hari."],
    ["🔁", "Murojaah berjarak", "Setiap kata yang dipelajari masuk kotak murojaah dan muncul lagi tepat sebelum terlupa: besok, 3 hari, seminggu, dua minggu, sebulan."],
    ["🗣️", "Dengar → tirukan → ucapkan → pakai", "Setiap kata dan kalimat punya suara. Anda menirukan, aplikasi menilai ucapan, lalu Anda memakainya di kelas dan rumah."]
  ],
  plan: [
    ["Pekan 1", "Huruf & Harakat (bila perlu) + Jalur Al-Qur'an Q1–Q3", "Pahami Al-Fatihah dan bacaan shalat. Hayati artinya di setiap shalat."],
    ["Pekan 2–4", "Level 1 (Unit 1–8)", "1 unit per 2–3 hari. Hari tanpa unit baru = murojaah + latihan bicara."],
    ["Pekan 5", "Q4–Q6 + Ujian Level 1", "Ambil sertifikat Level 1. Mulai pakai bahasa kelas sederhana."],
    ["Pekan 6–9", "Level 2 (Unit 9–16)", "Fokus kata kerja. Pakai Unit 14 (Bahasa Kelas) setiap hari di kuttab."],
    ["Pekan 10–13", "Level 3 (Unit 17–24)", "Mulai bercerita. Ceritakan ulang kisah kepada santri atau keluarga."],
    ["Setelah itu", "Tutor AI + buku di Pustaka", "Ngobrol bebas dengan Tutor AI 10 menit sehari dan baca buku cerita anak berbahasa Arab."]
  ],
  daily: [
    ["🔁", "Murojaah dulu", "Selesaikan kartu murojaah yang jatuh tempo (3–5 menit)."],
    ["📚", "Satu langkah baru", "Lanjutkan unit, atau ulang dialog unit terakhir."],
    ["🎤", "Ucapkan keras", "Minimal 5 kalimat diucapkan dengan suara, bukan dalam hati."],
    ["🌍", "Pakai sekali", "Satu kalimat Arab dipakai di dunia nyata hari ini: ke santri, keluarga, atau diri sendiri."]
  ]
};

window.TIPS = [
  "Bolong sehari itu manusiawi. Bolong dua hari mulai jadi kebiasaan. Kalau lelah, cukup buka Murojaah 2 menit.",
  "Ucapkan dengan suara, bukan dalam hati. Mulut perlu dilatih seperti otot.",
  "Salah itu bagian dari belajar. Anak Arab juga salah ribuan kali sebelum lancar.",
  "Hayati satu kata Al-Fatihah di setiap shalat hari ini.",
  "Ajarkan satu kata Arab kepada santri hari ini. Yang mengajar, belajar dua kali.",
  "Murojaah sebelum tidur lebih menempel. Otak merapikan ingatan saat Anda tidur.",
  "Jangan hafal daftar kata. Hafal kalimat pendek — kata akan ikut menempel.",
  "Lepas tulisan latin pelan-pelan. Mata Anda harus terbiasa membaca huruf Arab.",
  "Doa Nabi Musa sebelum belajar: رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي.",
  "10 menit setiap hari selama 3 bulan = 15 jam latihan yang benar-benar menempel."
];

window.LIBRARY = [
  {
    g: "Buku pelajaran sekolah (Kemenag KSKK 2020)", ic: "🏫", items: [
      ["Bahasa Arab MI Kelas IV", "1wxTLyYRrtjvfDU4ULFK-Hduny8geokbp", "Cocok untuk penguatan Level 1–2."],
      ["Bahasa Arab MTs Kelas VII", "1p29oVZKkG31TkY__XCFFAYI0d5BAamod", "Setara Level 2."],
      ["Bahasa Arab MTs Kelas VIII", "1pP8inIvtBi_INgv9XtpVLQOQtrO4vq_J", "Setara Level 3."],
      ["Buku Ajar BAR 1", "1a_wGjePREz2_Az4lOx76wIDMG9WxMsHh", "Buku ajar bahasa Arab tingkat awal."],
      ["Bahasa Arab 5", "1JXa9e23KOLzrcaWxE_JKIsucwO8v58in", "Buku pelajaran lanjutan."]
    ]
  },
  {
    g: "Untuk anak & pemula", ic: "🧒", items: [
      ["Bahasa Arab untuk Anak", "1NA_Li3GnVZd1u28064k42Kz1hZunRm7Z", "Ringkas, cocok untuk kuttab."],
      ["Warna-warni Belajar Bahasa Arab untuk Anak", "1t_f70B7RFbd8i0WkU8C5gurD_vArcdLj", "Bergambar, menyenangkan."],
      ["Belajar Bahasa Arab dari Nol", "1Xc4qPJ4dJQMPCnSLiHJdMWLiuwnWaqKH", "Pendamping Level 1."],
      ["Bahasa Arab untuk Para Pemula", "10WmwHycL_PBn8-1yNqmcwFvLWWrGo5PJ", "Pendamping Level 1–2."],
      ["Belajar Bahasa Arab dengan Asyik", "1sIbrWcjyozM6yD4uxmnl2YmeJ1QMX3HZ", "Buku lengkap untuk pemula."],
      ["Buku Bahasa Arab Praktis", "1gTrlKcjKVulTaRNajYDJ4ZRrp79O8au_", "Percakapan praktis."],
      ["Buku Bahasa Arab", "1QGTBgqid7yhKIYqPRkz5pE7caw2foiPX", "Buku umum."],
      ["Cara Cepat (Kahar)", "1l5m1x6Y33WLScr3IFdmVBmzCtvI8aBuW", "Metode cepat."],
      ["Bahasa Arab Otodidak 1", "1PnezzfwWmcutWLe2_7YDm1iA9weK8sSe", "File besar (±71 MB)."],
      ["Bahasa Arab Otodidak 2", "1-R425NxP7omeTWizfAHt8WZrDbGDfimI", "File besar (±85 MB)."]
    ]
  },
  {
    g: "Kosakata (mufradat)", ic: "🗂️", items: [
      ["80 Kosakata Al-Qur'an", "1m1CsyQEdxkByeyobF4Zs5pWu1ZfEiQ6Q", "Pendamping Jalur Al-Qur'an."],
      ["Khazanah 500 Kata Bahasa Arab Harian", "1kTD3bE-RXeObe4YRKJEfBKQR3aWo9G7e", "Perluasan kosakata harian."],
      ["Flashcard 2500 Kosakata Sehari-hari", "17m_4V1XSCLopw1D8uhiaMN_CNVZNs-8q", "File besar (±76 MB)."],
      ["Tips Ampuh Hafal Mufradat", "1QmZCjFUU2sgvOMnE6E1-mvHM20M3tdte", "Strategi menghafal."],
      ["Saluni fil Mutaradifat wal Ma'ani", "1c7LKt9DJRBXN5aIzTOpWbzMtA0YeU1yQ", "Sinonim dan makna."]
    ]
  },
  {
    g: "Kaidah, nahwu & percakapan", ic: "🧩", items: [
      ["Belajar Kaidah Bahasa Arab dari Dasar", "1SQULqpaKSkmDlPJtbN8HxQlO0z5Fnqq4", "Baca setelah Level 2."],
      ["Panduan Kaidah Bahasa Arab Dasar", "1pqGRof9sE6pcnans4rtTg2ieJ7j5-bSb", "Ringkasan kaidah."],
      ["Dasar-dasar Ilmu Nahwu", "1gtWJjJT0zgRBXMjOAQnFCYSNk0EQpFrH", "Pengantar nahwu."],
      ["Uslub Nahwu", "1KLiUORLq6EOJflF9nUiUX4XsKpEseNS-", "Gaya kalimat."],
      ["Terjemah Al-'Awamil Al-Mi'ah", "1UKqTXIdM1szN1M55zDyu7jyW5JbNKWLs", "Kitab klasik, untuk tahap lanjut."],
      ["Belajar Mudah Tata Bahasa Arab", "1VmR4qDxekojLJq8TlgRScB2YSeyW1z_e", "Tata bahasa bertahap."],
      ["Buku Memahami Konsep Dasar", "1Rti7zE1wQ_g6gS7THw30Q7enq_nbNv7F", "Konsep dasar bahasa Arab."],
      ["Menyusun Kalimat Sederhana", "15JpvcFpjM18BlUEZJlbSM5ljT48FCeL6", "Pendamping Level 1–2."],
      ["Kaidah Percakapan Bahasa Arab", "1goaohrjOlwCxpzG2cUcR5VdAhHhghKtE", "Pendamping tab Bicara."]
    ]
  },
  {
    g: "Durusul Lughah & pelafalan", ic: "🎙️", items: [
      ["Panduan Durusul Lughah Jilid 1", "1dQ4kcoCY9hDtgAqnGVONxX1Qvw5RMMdn", "Lanjutan setelah Level 3."],
      ["Panduan Durusul Lughah Jilid 4", "14cyIlwcjI_R5WqPgnA7frnv39q-PI5Ut", "Tahap lanjut."],
      ["Gambar & Penjelasan Makharijul Huruf", "1UVuCJcelQq1wbWQuQ53H12ZhR_unoHZ1", "Pendamping Huruf Hijaiyah."]
    ]
  },
  {
    g: "Lainnya", ic: "📁", items: [
      ["mfpa1412134331.pdf", "1mkLErN2yyJltpIS6pFqPmTBZXpMDBQRc", "Belum diberi judul."],
      ["jfde1412133715.pdf", "19EfiWvkQGPZ0a9xZVRrvnEm5_b2MmU74", "Belum diberi judul."],
      ["ff9daade4b0f9329....pdf", "1J5xV5Qv-rWN2lwMZ1D7FeoDxFdV8ayEs", "Belum diberi judul (±21 MB)."]
    ]
  }
];
window.LIBRARY_FOLDER = "https://drive.google.com/drive/folders/1EosSDy5dluExR9Cn9AEev4yTjxZrlbf2";
