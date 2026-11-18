// Kawan Arab — materi Level 1 (Pemula): kalimat pertama
window.LEVELS = [
  { n: 1, t: "Pemula", ar: "الْمُبْتَدِئُ", ic: "🌱", desc: "Kalimat pertama: menyapa, menunjuk benda, bertanya, keluarga, tempat, sifat, dan memesan makanan." },
  { n: 2, t: "Keseharian", ar: "الْحَيَاةُ الْيَوْمِيَّةُ", ic: "🌿", desc: "Kata kerja sekarang, lampau, dan akan; rutinitas; pasar; bahasa kelas; sopan santun; rencana umrah." },
  { n: 3, t: "Bercerita", ar: "الْحِكَايَةُ", ic: "🌳", desc: "Jamak, kata sambung, sakit & perasaan, rahasia akar kata, ibadah, perjalanan, kisah, dan cita-cita." }
];

window.UNITS = [
  {
    id: "u1", lv: 1, ic: "👋", t: "Salam & Perkenalan", goal: "Menyapa, menanyakan kabar, dan memperkenalkan diri.",
    v: [
      ["السَّلَامُ عَلَيْكُمْ", "assalamu'alaikum (salam)", "👋"],
      ["وَعَلَيْكُمُ السَّلَامُ", "wa'alaikumussalam (jawab salam)", "🤝"],
      ["صَبَاحُ الْخَيْرِ", "selamat pagi", "🌅"],
      ["مَسَاءُ الْخَيْرِ", "selamat sore / malam", "🌇"],
      ["كَيْفَ حَالُكَ؟", "apa kabarmu? (ke laki-laki)", "🙂"],
      ["كَيْفَ حَالُكِ؟", "apa kabarmu? (ke perempuan)", "🙂"],
      ["بِخَيْرٍ", "baik", "👍"],
      ["الْحَمْدُ لِلَّهِ", "segala puji bagi Allah", "🤲"],
      ["اِسْمِي", "namaku", "🏷️"],
      ["مَا اسْمُكَ؟", "siapa namamu? (ke laki-laki)", "❔"],
      ["أَهْلًا وَسَهْلًا", "selamat datang", "🏠"],
      ["مَعَ السَّلَامَةِ", "sampai jumpa", "👋"]
    ],
    p: {
      t: "اِسْمِي ... / أَنَا مِنْ ...",
      x: "Untuk berkenalan cukup dua pola: اِسْمِي + nama (namaku ...) dan أَنَا مِنْ + tempat (aku dari ...). Bahasa Arab tidak memakai kata \"adalah\" — langsung saja.",
      ex: [
        ["اِسْمِي أَحْمَدُ.", "Namaku Ahmad."],
        ["اِسْمِي فَاطِمَةُ.", "Namaku Fatimah."],
        ["أَنَا مِنْ إِنْدُونِيسِيَا.", "Aku dari Indonesia."],
        ["أَنَا مِنْ سُومْبَاوَا.", "Aku dari Sumbawa."],
        ["مِنْ أَيْنَ أَنْتَ؟", "Kamu dari mana?"]
      ]
    },
    d: {
      t: "Berkenalan di masjid",
      l: [
        ["A", "السَّلَامُ عَلَيْكُمْ.", "Assalamu'alaikum."],
        ["B", "وَعَلَيْكُمُ السَّلَامُ.", "Wa'alaikumussalam."],
        ["A", "كَيْفَ حَالُكَ؟", "Apa kabarmu?"],
        ["B", "بِخَيْرٍ، الْحَمْدُ لِلَّهِ. مَا اسْمُكَ؟", "Baik, alhamdulillah. Siapa namamu?"],
        ["A", "اِسْمِي أَحْمَدُ. وَأَنْتَ؟", "Namaku Ahmad. Dan kamu?"],
        ["B", "اِسْمِي يُوسُفُ. أَنَا مِنْ سُومْبَاوَا.", "Namaku Yusuf. Aku dari Sumbawa."],
        ["A", "أَهْلًا وَسَهْلًا، تَشَرَّفْنَا.", "Selamat datang, senang berkenalan."]
      ],
      q: [
        ["Yusuf berasal dari mana?", ["Jakarta", "Sumbawa", "Mesir"], 1],
        ["Apa jawaban untuk السَّلَامُ عَلَيْكُمْ?", ["بِخَيْرٍ", "وَعَلَيْكُمُ السَّلَامُ", "أَهْلًا وَسَهْلًا"], 1]
      ]
    },
    tip: "Mulai hari ini, setiap bertemu rekan atau santri, jawab \"كَيْفَ حَالُكَ؟\" dengan \"بِخَيْرٍ، الْحَمْدُ لِلَّهِ\". Dipakai setiap hari = tidak akan lupa."
  },
  {
    id: "u2", lv: 1, ic: "📘", t: "Ini & Itu", goal: "Menunjuk benda di sekitar dengan هٰذَا, هٰذِهِ, ذٰلِكَ, تِلْكَ.",
    v: [
      ["كِتَابٌ", "buku", "📘"],
      ["قَلَمٌ", "pena / pulpen", "🖊️"],
      ["بَابٌ", "pintu", "🚪"],
      ["مَكْتَبٌ", "meja (tulis)", "🗄️"],
      ["كُرْسِيٌّ", "kursi", "🪑"],
      ["سَبُّورَةٌ", "papan tulis", "🧑‍🏫"],
      ["حَقِيبَةٌ", "tas", "🎒"],
      ["نَافِذَةٌ", "jendela", "🪟"],
      ["مِسْطَرَةٌ", "penggaris", "📏"],
      ["دَفْتَرٌ", "buku tulis", "📓"],
      ["هٰذَا", "ini (laki-laki / mudzakkar)", "👇"],
      ["هٰذِهِ", "ini (perempuan / muannats)", "👇"]
    ],
    p: {
      t: "هٰذَا / هٰذِهِ — ذٰلِكَ / تِلْكَ",
      x: "Kata benda Arab punya jenis: laki-laki (mudzakkar) dan perempuan (muannats). Tanda paling mudah: berakhiran ة berarti muannats. Dekat: هٰذَا (mudzakkar), هٰذِهِ (muannats). Jauh: ذٰلِكَ dan تِلْكَ.",
      ex: [
        ["هٰذَا كِتَابٌ.", "Ini buku."],
        ["هٰذِهِ حَقِيبَةٌ.", "Ini tas."],
        ["ذٰلِكَ بَابٌ.", "Itu pintu."],
        ["تِلْكَ نَافِذَةٌ.", "Itu jendela."],
        ["هٰذَا قَلَمٌ وَهٰذِهِ مِسْطَرَةٌ.", "Ini pena dan ini penggaris."]
      ]
    },
    d: {
      t: "Tanya jawab di kelas",
      l: [
        ["A", "مَا هٰذَا؟", "Apa ini?"],
        ["B", "هٰذَا كِتَابٌ.", "Ini buku."],
        ["A", "وَمَا هٰذِهِ؟", "Dan apa ini?"],
        ["B", "هٰذِهِ سَبُّورَةٌ.", "Ini papan tulis."],
        ["A", "أَحْسَنْتَ! وَمَا ذٰلِكَ؟", "Bagus! Dan apa itu?"],
        ["B", "ذٰلِكَ بَابٌ.", "Itu pintu."]
      ],
      q: [
        ["Benda apa yang ditunjuk dengan هٰذِهِ?", ["buku", "papan tulis", "pintu"], 1],
        ["Kata mana yang dipakai untuk benda muannats yang dekat?", ["هٰذَا", "ذٰلِكَ", "هٰذِهِ"], 2]
      ]
    },
    tip: "Tempel kertas kecil bertuliskan nama Arab di benda rumah: بَابٌ di pintu, نَافِذَةٌ di jendela. Mata Anda akan murojaah tanpa sengaja."
  },
  {
    id: "u3", lv: 1, ic: "❓", t: "Siapa? Apa? Apakah?", goal: "Bertanya tentang orang dan benda, lalu menjawab ya atau tidak.",
    v: [
      ["مَنْ؟", "siapa?", "🧑"],
      ["مَا؟", "apa?", "❔"],
      ["هَلْ؟", "apakah?", "🤔"],
      ["نَعَمْ", "ya", "✅"],
      ["لَا", "tidak", "❌"],
      ["مُدَرِّسٌ", "guru (laki-laki)", "👨‍🏫"],
      ["مُدَرِّسَةٌ", "guru (perempuan)", "👩‍🏫"],
      ["طَالِبٌ", "murid (laki-laki)", "👦"],
      ["طَالِبَةٌ", "murid (perempuan)", "👧"],
      ["طَبِيبٌ", "dokter", "🩺"],
      ["أُسْتَاذٌ", "ustadz / guru", "🧔"]
    ],
    p: {
      t: "مَنْ — مَا — هَلْ",
      x: "مَنْ untuk orang, مَا untuk benda, هَلْ untuk pertanyaan ya/tidak. Jawab dengan نَعَمْ (ya) atau لَا (tidak), lalu ulangi kalimatnya.",
      ex: [
        ["مَنْ هٰذَا؟ هٰذَا مُدَرِّسٌ.", "Siapa ini? Ini guru."],
        ["مَنْ هٰذِهِ؟ هٰذِهِ طَالِبَةٌ.", "Siapa ini? Ini murid perempuan."],
        ["هَلْ هٰذَا طَبِيبٌ؟", "Apakah ini dokter?"],
        ["نَعَمْ، هٰذَا طَبِيبٌ.", "Ya, ini dokter."],
        ["لَا، هٰذِهِ طَالِبَةٌ.", "Tidak, ini murid perempuan."]
      ]
    },
    d: {
      t: "Siapa itu?",
      l: [
        ["A", "مَنْ هٰذِهِ؟", "Siapa ini?"],
        ["B", "هٰذِهِ عَائِشَةُ.", "Ini Aisyah."],
        ["A", "هَلْ عَائِشَةُ طَالِبَةٌ؟", "Apakah Aisyah murid?"],
        ["B", "لَا، عَائِشَةُ مُدَرِّسَةٌ.", "Tidak, Aisyah guru."],
        ["A", "وَمَنْ هٰذَا؟", "Dan siapa ini?"],
        ["B", "هٰذَا يُوسُفُ. يُوسُفُ طَالِبٌ.", "Ini Yusuf. Yusuf murid."]
      ],
      q: [
        ["Apa pekerjaan Aisyah?", ["murid", "guru", "dokter"], 1],
        ["Kata tanya untuk orang adalah ...", ["مَا", "هَلْ", "مَنْ"], 2]
      ]
    },
    tip: "Di kelas, ganti \"siapa yang tahu?\" dengan \"مَنْ يَعْرِفُ؟\". Santri ikut belajar, Anda ikut berlatih."
  },
  {
    id: "u4", lv: 1, ic: "🧍", t: "Aku, Kamu, Dia", goal: "Memakai kata ganti dan mencocokkan keterangan dengan jenis kelamin.",
    v: [
      ["أَنَا", "aku / saya", "🙋"],
      ["أَنْتَ", "kamu (laki-laki)", "👉"],
      ["أَنْتِ", "kamu (perempuan)", "👉"],
      ["هُوَ", "dia (laki-laki)", "👨"],
      ["هِيَ", "dia (perempuan)", "👩"],
      ["نَحْنُ", "kami / kita", "👥"],
      ["هُمْ", "mereka", "👨‍👩‍👦"],
      ["مُسْلِمٌ", "muslim", "🕌"],
      ["مَشْغُولٌ", "sibuk", "⏳"],
      ["مَسْرُورٌ", "senang", "😊"],
      ["أَيْضًا", "juga", "➕"],
      ["جِدًّا", "sekali / sangat", "💯"]
    ],
    p: {
      t: "هُوَ مَسْرُورٌ — هِيَ مَسْرُورَةٌ",
      x: "Kata ganti + keterangan sudah jadi kalimat. Kalau yang dibicarakan perempuan, keterangannya ditambah ة: هُوَ مَشْغُولٌ (dia lk sibuk), هِيَ مَشْغُولَةٌ (dia pr sibuk).",
      ex: [
        ["أَنَا مُدَرِّسَةٌ.", "Aku guru (perempuan)."],
        ["هُوَ طَالِبٌ.", "Dia murid."],
        ["هِيَ مَشْغُولَةٌ.", "Dia (pr) sibuk."],
        ["نَحْنُ مُسْلِمُونَ.", "Kami muslim."],
        ["هَلْ أَنْتَ مَسْرُورٌ؟", "Apakah kamu senang?"],
        ["نَعَمْ، أَنَا مَسْرُورٌ جِدًّا.", "Ya, aku senang sekali."]
      ]
    },
    d: {
      t: "Di kantor kuttab",
      l: [
        ["A", "هَلْ أَنْتِ مُدَرِّسَةٌ؟", "Apakah kamu guru?"],
        ["B", "نَعَمْ، أَنَا مُدَرِّسَةٌ.", "Ya, aku guru."],
        ["A", "وَهَلْ هِيَ مُدَرِّسَةٌ أَيْضًا؟", "Apakah dia guru juga?"],
        ["B", "لَا، هِيَ طَالِبَةٌ.", "Tidak, dia murid."],
        ["A", "هَلْ أَنْتِ مَشْغُولَةٌ الْيَوْمَ؟", "Apakah kamu sibuk hari ini?"],
        ["B", "نَعَمْ، أَنَا مَشْغُولَةٌ جِدًّا.", "Ya, aku sibuk sekali."]
      ],
      q: [
        ["Apakah orang ketiga (هِيَ) seorang guru?", ["Ya, guru", "Tidak, dia murid", "Tidak, dia dokter"], 1],
        ["Bagaimana keadaan B hari ini?", ["Senang", "Sibuk sekali", "Sakit"], 1]
      ]
    },
    tip: "Latih hubungan dengan diri sendiri: setiap pagi ucapkan satu kalimat tentang diri Anda, misalnya \"أَنَا مُدَرِّسَةٌ\" atau \"أَنَا مَسْرُورَةٌ\"."
  },
  {
    id: "u5", lv: 1, ic: "👨‍👩‍👧", t: "Keluarga & Milik", goal: "Menyebut anggota keluarga dan memakai akhiran milik: -ku, -mu, -nya.",
    v: [
      ["أَبٌ", "ayah", "👨"],
      ["أُمٌّ", "ibu", "👩"],
      ["أَخٌ", "saudara laki-laki", "👦"],
      ["أُخْتٌ", "saudara perempuan", "👧"],
      ["اِبْنٌ", "anak laki-laki", "👶"],
      ["بِنْتٌ", "anak perempuan", "👧"],
      ["زَوْجٌ", "suami", "🤵"],
      ["زَوْجَةٌ", "istri", "👰"],
      ["عَائِلَةٌ", "keluarga", "👨‍👩‍👧‍👦"],
      ["بَيْتٌ", "rumah", "🏠"],
      ["وَلَدٌ", "anak / bocah laki-laki", "🧒"]
    ],
    p: {
      t: "بَيْتِي — بَيْتُكَ — بَيْتُهُ — بَيْتُهَا",
      x: "Kepemilikan cukup dengan akhiran: ـِي (-ku), ـُكَ (-mu, lk), ـُكِ (-mu, pr), ـُهُ (-nya, lk), ـُهَا (-nya, pr), ـُنَا (kami). Saat diberi akhiran, tanwin (-un) hilang: بَيْتٌ → بَيْتِي.",
      ex: [
        ["هٰذِهِ أُمِّي.", "Ini ibuku."],
        ["هٰذَا بَيْتِي.", "Ini rumahku."],
        ["مَا اسْمُ أُخْتِكِ؟", "Siapa nama saudarimu?"],
        ["اِسْمُهَا مَرْيَمُ.", "Namanya Maryam."],
        ["هٰذَا ابْنُهُ.", "Ini anaknya (anak dia lk)."],
        ["عَائِلَتِي فِي سُومْبَاوَا.", "Keluargaku di Sumbawa."]
      ]
    },
    d: {
      t: "Melihat foto keluarga",
      l: [
        ["A", "مَنْ هٰذَا؟", "Siapa ini?"],
        ["B", "هٰذَا أَبِي، وَهٰذِهِ أُمِّي.", "Ini ayahku, dan ini ibuku."],
        ["A", "وَمَنْ هٰذِهِ؟", "Dan siapa ini?"],
        ["B", "هٰذِهِ أُخْتِي. اِسْمُهَا مَرْيَمُ.", "Ini saudariku. Namanya Maryam."],
        ["A", "وَمَنْ هٰذَا الْوَلَدُ؟", "Dan siapa anak ini?"],
        ["B", "هٰذَا ابْنِي. اِسْمُهُ عُمَرُ.", "Ini anakku. Namanya Umar."]
      ],
      q: [
        ["Siapa nama saudari B?", ["Aisyah", "Maryam", "Fatimah"], 1],
        ["Siapa Umar?", ["Ayah B", "Saudara B", "Anak B"], 2]
      ]
    },
    tip: "Ceritakan foto keluarga Anda dalam bahasa Arab: هٰذَا ... وَهٰذِهِ ... Cukup 3 kalimat, tapi lakukan sambil menunjuk."
  },
  {
    id: "u6", lv: 1, ic: "📍", t: "Di Mana?", goal: "Menanyakan dan menjelaskan letak benda atau orang.",
    v: [
      ["أَيْنَ؟", "di mana?", "📍"],
      ["فِي", "di (dalam)", "📦"],
      ["عَلَى", "di atas", "⬆️"],
      ["تَحْتَ", "di bawah", "⬇️"],
      ["أَمَامَ", "di depan", "⏩"],
      ["وَرَاءَ", "di belakang", "⏪"],
      ["مَسْجِدٌ", "masjid", "🕌"],
      ["مَدْرَسَةٌ", "sekolah", "🏫"],
      ["غُرْفَةٌ", "kamar / ruangan", "🛏️"],
      ["مَطْبَخٌ", "dapur", "🍳"],
      ["سُوقٌ", "pasar", "🛒"],
      ["مِفْتَاحٌ", "kunci", "🔑"]
    ],
    p: {
      t: "أَيْنَ الْكِتَابُ؟ الْكِتَابُ عَلَى الْمَكْتَبِ.",
      x: "Tanya: أَيْنَ + benda (pakai ال). Jawab: benda + kata depan + tempat. Setelah kata depan (فِي، عَلَى، تَحْتَ ...), akhir kata berubah menjadi -i: الْمَكْتَبُ → عَلَى الْمَكْتَبِ.",
      ex: [
        ["أَيْنَ الْكِتَابُ؟", "Di mana buku itu?"],
        ["الْكِتَابُ عَلَى الْمَكْتَبِ.", "Buku itu di atas meja."],
        ["الْقَلَمُ فِي الْحَقِيبَةِ.", "Pena itu di dalam tas."],
        ["الْقِطُّ تَحْتَ الْكُرْسِيِّ.", "Kucing itu di bawah kursi."],
        ["أُمِّي فِي الْمَطْبَخِ.", "Ibuku di dapur."],
        ["الْمَسْجِدُ أَمَامَ الْمَدْرَسَةِ.", "Masjid di depan sekolah."]
      ]
    },
    d: {
      t: "Mencari kunci",
      l: [
        ["A", "أَيْنَ الْمِفْتَاحُ؟", "Di mana kuncinya?"],
        ["B", "الْمِفْتَاحُ عَلَى الْمَكْتَبِ.", "Kuncinya di atas meja."],
        ["A", "لَا، لَيْسَ عَلَى الْمَكْتَبِ.", "Tidak, tidak ada di atas meja."],
        ["B", "هَلْ هُوَ فِي الْحَقِيبَةِ؟", "Apakah di dalam tas?"],
        ["A", "نَعَمْ! هُوَ فِي الْحَقِيبَةِ. شُكْرًا.", "Ya! Ada di dalam tas. Terima kasih."],
        ["B", "عَفْوًا.", "Sama-sama."]
      ],
      q: [
        ["Di mana kunci akhirnya ditemukan?", ["Di atas meja", "Di dalam tas", "Di bawah kursi"], 1],
        ["فِي artinya ...", ["di atas", "di dalam", "di depan"], 1]
      ]
    },
    tip: "Saat merapikan rumah atau kelas, sebut letaknya dalam hati: الْكِتَابُ عَلَى الْمَكْتَبِ. Kegiatan biasa jadi latihan."
  },
  {
    id: "u7", lv: 1, ic: "✨", t: "Besar, Kecil, Indah", goal: "Memakai kata sifat dan membedakan kalimat dengan frasa.",
    v: [
      ["كَبِيرٌ", "besar", "🐘"],
      ["صَغِيرٌ", "kecil", "🐜"],
      ["جَدِيدٌ", "baru", "🆕"],
      ["قَدِيمٌ", "lama / tua (benda)", "🏚️"],
      ["جَمِيلٌ", "indah / cantik", "🌸"],
      ["نَظِيفٌ", "bersih", "🧼"],
      ["طَوِيلٌ", "panjang / tinggi", "📏"],
      ["قَصِيرٌ", "pendek", "🔻"],
      ["وَاسِعٌ", "luas", "🏞️"],
      ["سَيَّارَةٌ", "mobil", "🚗"],
      ["وَلٰكِنْ", "tetapi", "↔️"]
    ],
    p: {
      t: "الْبَيْتُ كَبِيرٌ — بَيْتٌ كَبِيرٌ",
      x: "Sifat ditaruh di belakang benda, sama seperti bahasa Indonesia. الْبَيْتُ كَبِيرٌ = \"Rumah itu besar\" (kalimat). بَيْتٌ كَبِيرٌ = \"rumah besar\" (frasa). Sifat ikut jenis bendanya: مَدْرَسَةٌ كَبِيرَةٌ.",
      ex: [
        ["الْبَيْتُ كَبِيرٌ.", "Rumah itu besar."],
        ["الْمَدْرَسَةُ جَمِيلَةٌ.", "Sekolah itu indah."],
        ["هٰذَا بَيْتٌ جَدِيدٌ.", "Ini rumah baru."],
        ["الْمَسْجِدُ نَظِيفٌ جِدًّا.", "Masjid itu bersih sekali."],
        ["غُرْفَتِي صَغِيرَةٌ.", "Kamarku kecil."],
        ["هٰذِهِ سَيَّارَةٌ قَدِيمَةٌ.", "Ini mobil lama."]
      ]
    },
    d: {
      t: "Rumah baru",
      l: [
        ["A", "هَلْ بَيْتُكِ جَدِيدٌ؟", "Apakah rumahmu baru?"],
        ["B", "نَعَمْ، بَيْتِي جَدِيدٌ.", "Ya, rumahku baru."],
        ["A", "هَلْ هُوَ كَبِيرٌ؟", "Apakah besar?"],
        ["B", "لَا، هُوَ صَغِيرٌ، وَلٰكِنَّهُ جَمِيلٌ وَنَظِيفٌ.", "Tidak, kecil, tetapi indah dan bersih."],
        ["A", "مَا شَاءَ اللَّهُ!", "Masya Allah!"]
      ],
      q: [
        ["Bagaimana rumah B?", ["Besar dan baru", "Kecil tetapi indah", "Lama dan luas"], 1],
        ["\"Sekolah itu indah\" dalam bahasa Arab ...", ["مَدْرَسَةٌ جَمِيلٌ", "الْمَدْرَسَةُ جَمِيلَةٌ", "جَمِيلَةٌ مَدْرَسَةٌ"], 1]
      ]
    },
    tip: "Pasangkan setiap sifat dengan lawannya: كَبِيرٌ ↔ صَغِيرٌ, طَوِيلٌ ↔ قَصِيرٌ, جَدِيدٌ ↔ قَدِيمٌ. Otak lebih mudah mengingat pasangan."
  },
  {
    id: "u8", lv: 1, ic: "🍽️", t: "Makan & Minum", goal: "Menyatakan keinginan dengan أُرِيدُ dan memesan makanan.",
    v: [
      ["أُرِيدُ", "aku mau / ingin", "🙋"],
      ["مَاءٌ", "air", "💧"],
      ["خُبْزٌ", "roti", "🍞"],
      ["أَرُزٌّ", "nasi / beras", "🍚"],
      ["شَايٌ", "teh", "🍵"],
      ["قَهْوَةٌ", "kopi", "☕"],
      ["لَبَنٌ", "susu", "🥛"],
      ["سَمَكٌ", "ikan", "🐟"],
      ["تَمْرٌ", "kurma", "🌴"],
      ["جَائِعٌ", "lapar", "😋"],
      ["عَطْشَانُ", "haus", "🥵"],
      ["مِنْ فَضْلِكَ", "tolong / silakan", "🙏"]
    ],
    p: {
      t: "أُرِيدُ مَاءً",
      x: "أُرِيدُ + benda. Benda yang diinginkan berakhiran -an (tanwin fathah, ditulis ـًا): مَاءٌ → أُرِيدُ مَاءً. Bertanya: مَاذَا تُرِيدُ؟ (Apa yang kamu mau?).",
      ex: [
        ["أُرِيدُ مَاءً.", "Aku mau air."],
        ["أُرِيدُ خُبْزًا وَشَايًا.", "Aku mau roti dan teh."],
        ["مَاذَا تُرِيدُ؟", "Kamu mau apa?"],
        ["أَنَا جَائِعٌ، أُرِيدُ أَرُزًّا وَسَمَكًا.", "Aku lapar, aku mau nasi dan ikan."],
        ["هَلْ تُرِيدُ قَهْوَةً؟", "Apakah kamu mau kopi?"],
        ["لَا، شُكْرًا.", "Tidak, terima kasih."]
      ]
    },
    d: {
      t: "Di rumah makan",
      l: [
        ["A", "أَهْلًا وَسَهْلًا. مَاذَا تُرِيدُ؟", "Selamat datang. Mau pesan apa?"],
        ["B", "أُرِيدُ أَرُزًّا وَسَمَكًا، مِنْ فَضْلِكَ.", "Saya mau nasi dan ikan, tolong."],
        ["A", "وَمَاذَا تَشْرَبُ؟", "Dan minumnya apa?"],
        ["B", "شَايًا، مِنْ فَضْلِكَ.", "Teh, tolong."],
        ["A", "حَاضِرٌ.", "Siap."],
        ["B", "شُكْرًا جَزِيلًا.", "Terima kasih banyak."]
      ],
      q: [
        ["Apa makanan yang dipesan?", ["Roti dan kurma", "Nasi dan ikan", "Nasi dan teh"], 1],
        ["Apa minumannya?", ["Kopi", "Susu", "Teh"], 2]
      ]
    },
    tip: "Saat sarapan, sebut apa yang Anda makan dan minum: أُرِيدُ شَايًا. Kalimat ini akan menempel karena diulang setiap pagi."
  }
];
