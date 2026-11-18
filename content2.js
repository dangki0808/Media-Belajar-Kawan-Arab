// Kawan Arab — materi Level 2 (Keseharian)
window.UNITS = (window.UNITS || []).concat([
  {
    id: "u9", lv: 2, ic: "🏃", t: "Kata Kerja: Aku", goal: "Menceritakan kegiatanmu sendiri dengan kata kerja yang diawali أَ.",
    v: [
      ["أَذْهَبُ", "aku pergi", "🚶"],
      ["أَقْرَأُ", "aku membaca", "📖"],
      ["أَكْتُبُ", "aku menulis", "✍️"],
      ["أَشْرَبُ", "aku minum", "🥤"],
      ["آكُلُ", "aku makan", "🍽️"],
      ["أُصَلِّي", "aku shalat", "🧎"],
      ["أَنَامُ", "aku tidur", "😴"],
      ["أَسْتَيْقِظُ", "aku bangun tidur", "⏰"],
      ["أَعْمَلُ", "aku bekerja", "💼"],
      ["أَدْرُسُ", "aku belajar", "📚"],
      ["إِلَى", "ke", "➡️"]
    ],
    p: {
      t: "أَنَا أَذْهَبُ إِلَى ...",
      x: "Kata kerja \"sedang / biasa\" untuk aku diawali huruf أ. Kata أَنَا boleh ditulis, boleh tidak, karena huruf أ sudah berarti \"aku\". Arah memakai إِلَى (ke).",
      ex: [
        ["أَذْهَبُ إِلَى الْمَدْرَسَةِ.", "Aku pergi ke sekolah."],
        ["أَقْرَأُ الْقُرْآنَ.", "Aku membaca Al-Qur'an."],
        ["أَشْرَبُ الشَّايَ.", "Aku minum teh."],
        ["آكُلُ الْخُبْزَ.", "Aku makan roti."],
        ["أُصَلِّي فِي الْمَسْجِدِ.", "Aku shalat di masjid."],
        ["أَعْمَلُ فِي الْكُتَّابِ.", "Aku bekerja di kuttab."]
      ]
    },
    d: {
      t: "Berpapasan di pagi hari",
      l: [
        ["A", "إِلَى أَيْنَ تَذْهَبِينَ؟", "Kamu mau pergi ke mana?"],
        ["B", "أَذْهَبُ إِلَى الْكُتَّابِ.", "Aku pergi ke kuttab."],
        ["A", "هَلْ تَعْمَلِينَ هُنَاكَ؟", "Apakah kamu bekerja di sana?"],
        ["B", "نَعَمْ، أَعْمَلُ مُدَرِّسَةً هُنَاكَ.", "Ya, aku bekerja sebagai guru di sana."],
        ["A", "مَا شَاءَ اللَّهُ. وَأَنَا أَذْهَبُ إِلَى السُّوقِ.", "Masya Allah. Dan aku pergi ke pasar."],
        ["B", "فِي أَمَانِ اللَّهِ.", "Fi amanillah (semoga dalam lindungan Allah)."]
      ],
      q: [
        ["Ke mana B pergi?", ["Ke pasar", "Ke kuttab", "Ke masjid"], 1],
        ["Huruf apa yang menandai \"aku\" pada kata kerja?", ["ن", "ي", "أ"], 2]
      ]
    },
    tip: "Saat melakukan sesuatu, bisikkan kata kerjanya: أَشْرَبُ ketika minum, أَكْتُبُ ketika menulis. Gerakan + kata = ingatan kuat."
  },
  {
    id: "u10", lv: 2, ic: "👥", t: "Kamu, Dia, Kami", goal: "Mengubah kata kerja untuk orang lain dengan huruf depan ت، ي، ن.",
    v: [
      ["يَذْهَبُ", "dia (lk) pergi", "🚶‍♂️"],
      ["تَذْهَبُ", "dia (pr) pergi / kamu (lk) pergi", "🚶‍♀️"],
      ["تَذْهَبِينَ", "kamu (pr) pergi", "🚶‍♀️"],
      ["نَذْهَبُ", "kami / kita pergi", "👣"],
      ["يَقْرَأُ", "dia (lk) membaca", "📖"],
      ["تَكْتُبُ", "dia (pr) menulis", "✍️"],
      ["نُصَلِّي", "kami shalat", "🧎"],
      ["يَلْعَبُ", "dia (lk) bermain", "⚽"],
      ["يَسْكُنُ", "dia (lk) tinggal", "🏡"],
      ["يُحِبُّ", "dia (lk) suka / cinta", "❤️"],
      ["هُنَاكَ", "di sana", "👉"]
    ],
    p: {
      t: "أَ = aku · نَ = kami · يَ = dia (lk) · تَ = kamu / dia (pr)",
      x: "Kata kerja yang sama, hanya huruf depannya berganti: أَذْهَبُ (aku), نَذْهَبُ (kami), يَذْهَبُ (dia lk), تَذْهَبُ (kamu lk / dia pr), تَذْهَبِينَ (kamu pr). Lihat huruf pertama — itu kuncinya.",
      ex: [
        ["هُوَ يَذْهَبُ إِلَى الْمَسْجِدِ.", "Dia (lk) pergi ke masjid."],
        ["هِيَ تَقْرَأُ كِتَابًا.", "Dia (pr) membaca buku."],
        ["نَحْنُ نُصَلِّي الْمَغْرِبَ.", "Kami shalat Maghrib."],
        ["أَيْنَ تَسْكُنُ؟", "Kamu tinggal di mana?"],
        ["أَسْكُنُ فِي سُومْبَاوَا.", "Aku tinggal di Sumbawa."],
        ["الْوَلَدُ يَلْعَبُ فِي الْبَيْتِ.", "Anak itu bermain di rumah."]
      ]
    },
    d: {
      t: "Di mana semua orang?",
      l: [
        ["A", "أَيْنَ زَوْجُكِ؟", "Di mana suamimu?"],
        ["B", "هُوَ يَعْمَلُ فِي السُّوقِ.", "Dia bekerja di pasar."],
        ["A", "وَأَيْنَ ابْنُكِ؟", "Dan di mana anak laki-lakimu?"],
        ["B", "هُوَ يَلْعَبُ فِي الْبَيْتِ.", "Dia bermain di rumah."],
        ["A", "وَبِنْتُكِ؟", "Dan anak perempuanmu?"],
        ["B", "هِيَ تَدْرُسُ فِي الْمَدْرَسَةِ.", "Dia belajar di sekolah."]
      ],
      q: [
        ["Apa yang dilakukan anak laki-laki B?", ["Belajar di sekolah", "Bermain di rumah", "Bekerja di pasar"], 1],
        ["نَذْهَبُ artinya ...", ["aku pergi", "dia pergi", "kami pergi"], 2]
      ]
    },
    tip: "Ambil satu kata kerja, lalu ucapkan kelimanya berurutan: أَذْهَبُ، تَذْهَبُ، تَذْهَبِينَ، يَذْهَبُ، نَذْهَبُ. Lima detik, sekali sehari."
  },
  {
    id: "u11", lv: 2, ic: "⏰", t: "Rutinitas Harian", goal: "Menceritakan urutan kegiatan sehari dengan waktu dan ثُمَّ.",
    v: [
      ["صَبَاحًا", "pada pagi hari", "🌅"],
      ["مَسَاءً", "pada sore hari", "🌇"],
      ["لَيْلًا", "pada malam hari", "🌙"],
      ["كُلَّ يَوْمٍ", "setiap hari", "📅"],
      ["قَبْلَ", "sebelum", "⬅️"],
      ["بَعْدَ", "sesudah", "➡️"],
      ["ثُمَّ", "kemudian", "⏭️"],
      ["الْفَجْرُ", "subuh / fajar", "🌄"],
      ["الظُّهْرُ", "zhuhur / tengah hari", "☀️"],
      ["فَطُورٌ", "sarapan", "🍳"],
      ["أَرْجِعُ", "aku pulang / kembali", "↩️"],
      ["مَعَ", "bersama", "🤝"]
    ],
    p: {
      t: "أُصَلِّي الْفَجْرَ ثُمَّ أَقْرَأُ الْقُرْآنَ",
      x: "Untuk bercerita urut, sambung kegiatan dengan ثُمَّ (kemudian). Waktu bisa memakai قَبْلَ (sebelum) dan بَعْدَ (sesudah) + nama waktu, atau kata keterangan seperti صَبَاحًا, مَسَاءً.",
      ex: [
        ["أَسْتَيْقِظُ قَبْلَ الْفَجْرِ.", "Aku bangun sebelum Subuh."],
        ["أُصَلِّي الْفَجْرَ ثُمَّ أَقْرَأُ الْقُرْآنَ.", "Aku shalat Subuh lalu membaca Al-Qur'an."],
        ["آكُلُ الْفَطُورَ صَبَاحًا.", "Aku sarapan di pagi hari."],
        ["أَذْهَبُ إِلَى الْكُتَّابِ كُلَّ يَوْمٍ.", "Aku pergi ke kuttab setiap hari."],
        ["أَرْجِعُ إِلَى الْبَيْتِ بَعْدَ الظُّهْرِ.", "Aku pulang ke rumah setelah Zhuhur."]
      ]
    },
    d: {
      t: "Bacaan: Hariku",
      l: [
        ["N", "أَنَا فَاطِمَةُ. أَنَا مُدَرِّسَةٌ.", "Aku Fatimah. Aku seorang guru."],
        ["N", "أَسْتَيْقِظُ كُلَّ يَوْمٍ قَبْلَ الْفَجْرِ.", "Setiap hari aku bangun sebelum Subuh."],
        ["N", "أُصَلِّي الْفَجْرَ، ثُمَّ أَقْرَأُ الْقُرْآنَ.", "Aku shalat Subuh, lalu membaca Al-Qur'an."],
        ["N", "آكُلُ الْفَطُورَ مَعَ عَائِلَتِي.", "Aku sarapan bersama keluargaku."],
        ["N", "ثُمَّ أَذْهَبُ إِلَى الْكُتَّابِ.", "Kemudian aku pergi ke kuttab."],
        ["N", "أَرْجِعُ إِلَى الْبَيْتِ بَعْدَ الظُّهْرِ.", "Aku pulang ke rumah setelah Zhuhur."]
      ],
      q: [
        ["Apa yang Fatimah lakukan setelah shalat Subuh?", ["Sarapan", "Membaca Al-Qur'an", "Pergi ke kuttab"], 1],
        ["Kapan Fatimah pulang?", ["Setelah Zhuhur", "Sebelum Subuh", "Malam hari"], 0]
      ]
    },
    tip: "Malam ini, sebelum tidur, ceritakan hari Anda dalam 3 kalimat Arab memakai ثُمَّ. Tidak perlu sempurna — yang penting keluar."
  },
  {
    id: "u12", lv: 2, ic: "⏪", t: "Sudah Terjadi (Lampau)", goal: "Menceritakan hal yang sudah terjadi dengan kata kerja lampau.",
    v: [
      ["ذَهَبْتُ", "aku telah pergi", "🚶"],
      ["قَرَأْتُ", "aku telah membaca", "📖"],
      ["أَكَلْتُ", "aku telah makan", "🍽️"],
      ["شَرِبْتُ", "aku telah minum", "🥤"],
      ["صَلَّيْتُ", "aku telah shalat", "🧎"],
      ["ذَهَبَ", "dia (lk) telah pergi", "🚶‍♂️"],
      ["ذَهَبَتْ", "dia (pr) telah pergi", "🚶‍♀️"],
      ["رَجَعَ", "dia (lk) telah pulang", "↩️"],
      ["اِشْتَرَيْتُ", "aku telah membeli", "🛍️"],
      ["أَمْسِ", "kemarin", "📆"],
      ["الْيَوْمَ", "hari ini", "📍"]
    ],
    p: {
      t: "ذَهَبَ — ذَهَبَتْ — ذَهَبْتُ — ذَهَبْنَا",
      x: "Lampau ditandai akhiran: ذَهَبَ (dia lk), ذَهَبَتْ (dia pr), ذَهَبْتُ (aku), ذَهَبْتَ (kamu lk), ذَهَبْتِ (kamu pr), ذَهَبْنَا (kami). Kalau kata kerja sekarang melihat huruf DEPAN, kata kerja lampau melihat huruf BELAKANG.",
      ex: [
        ["ذَهَبْتُ إِلَى السُّوقِ أَمْسِ.", "Kemarin aku pergi ke pasar."],
        ["هَلْ أَكَلْتَ؟", "Sudah makan?"],
        ["نَعَمْ، أَكَلْتُ.", "Ya, aku sudah makan."],
        ["ذَهَبَ أَحْمَدُ إِلَى الْمَسْجِدِ.", "Ahmad (telah) pergi ke masjid."],
        ["ذَهَبَتْ فَاطِمَةُ إِلَى الْمَدْرَسَةِ.", "Fatimah (telah) pergi ke sekolah."],
        ["قَرَأْتُ كِتَابًا جَمِيلًا.", "Aku membaca buku yang bagus."]
      ]
    },
    d: {
      t: "Ke mana kemarin?",
      l: [
        ["A", "أَيْنَ ذَهَبْتِ أَمْسِ؟", "Kemarin kamu pergi ke mana?"],
        ["B", "ذَهَبْتُ إِلَى السُّوقِ مَعَ أُمِّي.", "Aku pergi ke pasar bersama ibuku."],
        ["A", "مَاذَا اشْتَرَيْتِ؟", "Apa yang kamu beli?"],
        ["B", "اِشْتَرَيْتُ سَمَكًا وَخُبْزًا.", "Aku membeli ikan dan roti."],
        ["A", "هَلْ أَكَلْتِ السَّمَكَ؟", "Apakah kamu sudah makan ikannya?"],
        ["B", "نَعَمْ، أَكَلْنَاهُ فِي الْمَسَاءِ.", "Ya, kami memakannya sore hari."]
      ],
      q: [
        ["Apa yang dibeli B?", ["Ikan dan roti", "Nasi dan teh", "Kurma"], 0],
        ["ذَهَبْتُ artinya ...", ["dia telah pergi", "aku telah pergi", "kami pergi"], 1]
      ]
    },
    tip: "Pertanyaan \"هَلْ أَكَلْتَ؟\" (sudah makan?) bisa Anda pakai setiap siang ke keluarga. Pertanyaan harian adalah guru terbaik."
  },
  {
    id: "u13", lv: 2, ic: "🛒", t: "Di Pasar & Angka 1–10", goal: "Berhitung 1–10, menanyakan harga, dan menawar.",
    v: [
      ["وَاحِدٌ", "satu (1)", "1️⃣"],
      ["اِثْنَانِ", "dua (2)", "2️⃣"],
      ["ثَلَاثَةٌ", "tiga (3)", "3️⃣"],
      ["أَرْبَعَةٌ", "empat (4)", "4️⃣"],
      ["خَمْسَةٌ", "lima (5)", "5️⃣"],
      ["سِتَّةٌ", "enam (6)", "6️⃣"],
      ["سَبْعَةٌ", "tujuh (7)", "7️⃣"],
      ["ثَمَانِيَةٌ", "delapan (8)", "8️⃣"],
      ["تِسْعَةٌ", "sembilan (9)", "9️⃣"],
      ["عَشَرَةٌ", "sepuluh (10)", "🔟"],
      ["بِكَمْ؟", "berapa harganya?", "💰"],
      ["رَخِيصٌ", "murah", "🏷️"],
      ["غَالٍ", "mahal", "💸"],
      ["عِنْدِي", "aku punya", "🤲"]
    ],
    p: {
      t: "بِكَمْ هٰذَا؟ — هٰذَا بِعَشَرَةِ آلَافٍ",
      x: "Menanyakan harga: بِكَمْ + benda? Jawaban memakai بِـ + angka. Untuk ribuan: بِخَمْسَةِ آلَافٍ (5 ribu), بِعَشَرَةِ آلَافٍ (10 ribu). Kepemilikan: عِنْدِي (aku punya).",
      ex: [
        ["بِكَمْ هٰذَا؟", "Berapa harga ini?"],
        ["هٰذَا بِخَمْسَةِ آلَافٍ.", "Ini lima ribu."],
        ["هٰذَا غَالٍ جِدًّا!", "Ini mahal sekali!"],
        ["هٰذَا رَخِيصٌ، أُرِيدُ هٰذَا.", "Ini murah, aku mau ini."],
        ["عِنْدِي ثَلَاثَةُ أَوْلَادٍ.", "Aku punya tiga anak."]
      ]
    },
    d: {
      t: "Di pasar ikan",
      l: [
        ["A", "السَّلَامُ عَلَيْكُمْ. بِكَمْ هٰذَا السَّمَكُ؟", "Assalamu'alaikum. Berapa harga ikan ini?"],
        ["B", "وَعَلَيْكُمُ السَّلَامُ. بِعَشَرَةِ آلَافٍ.", "Wa'alaikumussalam. Sepuluh ribu."],
        ["A", "هٰذَا غَالٍ! بِثَمَانِيَةِ آلَافٍ؟", "Mahal! Delapan ribu?"],
        ["B", "طَيِّبٌ، بِتِسْعَةِ آلَافٍ.", "Baiklah, sembilan ribu."],
        ["A", "طَيِّبٌ، أُرِيدُ سَمَكَتَيْنِ.", "Baik, saya mau dua ekor."],
        ["B", "تَفَضَّلْ.", "Silakan."]
      ],
      q: [
        ["Berapa harga akhir per ekor?", ["8 ribu", "9 ribu", "10 ribu"], 1],
        ["غَالٍ artinya ...", ["murah", "mahal", "besar"], 1]
      ]
    },
    tip: "Hitung dalam bahasa Arab saat melakukan hal berulang: anak tangga, rakaat sunnah, jumlah santri di kelas."
  },
  {
    id: "u14", lv: 2, ic: "🧑‍🏫", t: "Bahasa Kelas", goal: "Memberi perintah dan pujian di kelas dalam bahasa Arab.",
    v: [
      ["اِجْلِسُوا", "duduklah (kalian)", "🪑"],
      ["قُومُوا", "berdirilah (kalian)", "🧍"],
      ["اِسْمَعُوا", "dengarkanlah (kalian)", "👂"],
      ["اُنْظُرُوا", "lihatlah (kalian)", "👀"],
      ["اِقْرَؤُوا", "bacalah (kalian)", "📖"],
      ["اُكْتُبُوا", "tulislah (kalian)", "✍️"],
      ["اِفْتَحُوا", "bukalah (kalian)", "📂"],
      ["أَغْلِقُوا", "tutuplah (kalian)", "📕"],
      ["أَحْسَنْتَ", "bagus! (ke murid lk)", "👏"],
      ["أَحْسَنْتِ", "bagus! (ke murid pr)", "👏"],
      ["هَيَّا", "ayo", "🚀"],
      ["يَا أَوْلَادُ", "wahai anak-anak", "🧒"]
    ],
    p: {
      t: "اِجْلِسْ — اِجْلِسِي — اِجْلِسُوا",
      x: "Kata perintah untuk satu murid laki-laki: اِجْلِسْ. Untuk satu murid perempuan: اِجْلِسِي. Untuk banyak murid: اِجْلِسُوا (akhiran ـُوا). Pujian: أَحْسَنْتَ / أَحْسَنْتِ.",
      ex: [
        ["اِجْلِسُوا، مِنْ فَضْلِكُمْ.", "Silakan duduk."],
        ["اِفْتَحُوا الْكِتَابَ.", "Buka bukunya."],
        ["اِسْمَعُوا جَيِّدًا.", "Dengarkan baik-baik."],
        ["اُكْتُبْ اسْمَكَ.", "Tulis namamu (ke murid lk)."],
        ["اِقْرَئِي يَا عَائِشَةُ.", "Bacalah, Aisyah."],
        ["مَنْ يَعْرِفُ الْجَوَابَ؟", "Siapa yang tahu jawabannya?"]
      ]
    },
    d: {
      t: "Membuka pelajaran",
      l: [
        ["A", "السَّلَامُ عَلَيْكُمْ يَا أَوْلَادُ.", "Assalamu'alaikum, anak-anak."],
        ["B", "وَعَلَيْكُمُ السَّلَامُ يَا أُسْتَاذَةُ.", "Wa'alaikumussalam, Ustadzah."],
        ["A", "كَيْفَ حَالُكُمْ؟", "Apa kabar kalian?"],
        ["B", "بِخَيْرٍ، الْحَمْدُ لِلَّهِ.", "Baik, alhamdulillah."],
        ["A", "اِجْلِسُوا، وَافْتَحُوا الْكِتَابَ. مَنْ يَقْرَأُ أَوَّلًا؟", "Duduklah dan buka bukunya. Siapa yang membaca duluan?"],
        ["B", "أَنَا يَا أُسْتَاذَةُ!", "Saya, Ustadzah!"],
        ["A", "هَيَّا، اِقْرَأْ. ... أَحْسَنْتَ!", "Ayo, bacalah. ... Bagus!"]
      ],
      q: [
        ["Apa perintah guru setelah \"duduklah\"?", ["Tutup buku", "Buka buku", "Berdiri"], 1],
        ["Perintah untuk BANYAK murid berakhiran ...", ["ـِي", "ـْ", "ـُوا"], 2]
      ]
    },
    tip: "Ini unit paling berharga untuk guru: pakai 3 perintah Arab di kelas besok (اِجْلِسُوا، اِسْمَعُوا، أَحْسَنْتَ). Mengajar adalah cara belajar tercepat."
  },
  {
    id: "u15", lv: 2, ic: "🙏", t: "Sopan Santun & Larangan", goal: "Meminta maaf, berterima kasih, dan melarang dengan sopan.",
    v: [
      ["شُكْرًا", "terima kasih", "🙏"],
      ["عَفْوًا", "sama-sama / maaf", "😊"],
      ["آسِفٌ", "maaf (lk)", "😔"],
      ["آسِفَةٌ", "maaf (pr)", "😔"],
      ["لَا بَأْسَ", "tidak apa-apa", "👌"],
      ["تَفَضَّلْ", "silakan (ke lk)", "🤲"],
      ["اِنْتَظِرْ", "tunggu (ke lk)", "✋"],
      ["قَلِيلًا", "sebentar / sedikit", "🤏"],
      ["لَا تَنْسَ", "jangan lupa", "📝"],
      ["لَا تَتَأَخَّرْ", "jangan terlambat", "⏰"],
      ["جَزَاكَ اللَّهُ خَيْرًا", "semoga Allah membalasmu dengan kebaikan", "💝"],
      ["لِمَاذَا؟", "mengapa?", "❓"]
    ],
    p: {
      t: "لَا تَذْهَبْ — jangan pergi",
      x: "Larangan = لَا + kata kerja \"kamu\" (diawali ت) dengan akhir mati (sukun): تَذْهَبُ → لَا تَذْهَبْ. Kata yang berakhiran huruf panjang, huruf panjangnya dibuang: تَنْسَى → لَا تَنْسَ.",
      ex: [
        ["لَا تَتَأَخَّرْ.", "Jangan terlambat."],
        ["لَا تَنْسَ كِتَابَكَ.", "Jangan lupa bukumu."],
        ["اِنْتَظِرْ قَلِيلًا، مِنْ فَضْلِكَ.", "Tolong tunggu sebentar."],
        ["آسِفَةٌ، لَا أَعْرِفُ.", "Maaf, aku tidak tahu."],
        ["جَزَاكَ اللَّهُ خَيْرًا.", "Semoga Allah membalasmu dengan kebaikan."],
        ["وَإِيَّاكَ.", "Begitu juga untukmu."]
      ]
    },
    d: {
      t: "Murid yang terlambat",
      l: [
        ["A", "السَّلَامُ عَلَيْكُمْ. آسِفٌ يَا أُسْتَاذُ، تَأَخَّرْتُ.", "Assalamu'alaikum. Maaf, Ustadz, saya terlambat."],
        ["B", "وَعَلَيْكُمُ السَّلَامُ. لَا بَأْسَ. لِمَاذَا تَأَخَّرْتَ؟", "Wa'alaikumussalam. Tidak apa-apa. Mengapa terlambat?"],
        ["A", "اِسْتَيْقَظْتُ مُتَأَخِّرًا.", "Saya bangun kesiangan."],
        ["B", "طَيِّبٌ، لَا تَتَأَخَّرْ مَرَّةً أُخْرَى.", "Baiklah, jangan terlambat lagi."],
        ["A", "إِنْ شَاءَ اللَّهُ. شُكْرًا يَا أُسْتَاذُ.", "Insya Allah. Terima kasih, Ustadz."]
      ],
      q: [
        ["Mengapa murid terlambat?", ["Hujan", "Bangun kesiangan", "Sakit"], 1],
        ["\"Jangan lupa\" dalam bahasa Arab ...", ["لَا تَنْسَ", "لَا بَأْسَ", "لَا تَتَأَخَّرْ"], 0]
      ]
    },
    tip: "Ganti \"terima kasih\" Anda hari ini dengan شُكْرًا atau جَزَاكَ اللَّهُ خَيْرًا. Kebiasaan kecil, dampak besar."
  },
  {
    id: "u16", lv: 2, ic: "✈️", t: "Rencana & Akan", goal: "Membicarakan rencana dengan سَـ / سَوْفَ, termasuk rencana umrah.",
    v: [
      ["سَأَذْهَبُ", "aku akan pergi", "🔜"],
      ["سَأُسَافِرُ", "aku akan bepergian (safar)", "🧳"],
      ["سَوْفَ", "akan", "⏳"],
      ["غَدًا", "besok", "📅"],
      ["مَتَى؟", "kapan?", "🕰️"],
      ["إِنْ شَاءَ اللَّهُ", "jika Allah menghendaki", "🤲"],
      ["مَكَّةُ", "Makkah", "🕋"],
      ["الْمَدِينَةُ", "Madinah", "🕌"],
      ["طَائِرَةٌ", "pesawat", "✈️"],
      ["عُمْرَةٌ", "umrah", "🕋"],
      ["الْقَادِمُ", "yang akan datang (depan)", "⏩"],
      ["وَحْدِي", "sendirian", "🧍"]
    ],
    p: {
      t: "أَذْهَبُ → سَأَذْهَبُ",
      x: "Tambahkan سَـ di depan kata kerja sekarang untuk \"akan\": أَذْهَبُ → سَأَذْهَبُ (aku akan pergi), نُسَافِرُ → سَنُسَافِرُ (kami akan bepergian). سَوْفَ dipakai untuk rencana yang lebih jauh: سَوْفَ أَزُورُ الْمَدِينَةَ.",
      ex: [
        ["سَأَذْهَبُ إِلَى السُّوقِ غَدًا.", "Besok aku akan pergi ke pasar."],
        ["سَنُسَافِرُ إِلَى مَكَّةَ إِنْ شَاءَ اللَّهُ.", "Kami akan berangkat ke Makkah, insya Allah."],
        ["مَتَى تُسَافِرُ؟", "Kapan kamu berangkat?"],
        ["سَأُسَافِرُ الْأُسْبُوعَ الْقَادِمَ.", "Aku akan berangkat pekan depan."],
        ["سَوْفَ أَزُورُ الْمَدِينَةَ.", "Aku akan mengunjungi Madinah."]
      ]
    },
    d: {
      t: "Rencana umrah",
      l: [
        ["A", "مَتَى تُسَافِرِينَ إِلَى مَكَّةَ؟", "Kapan kamu berangkat ke Makkah?"],
        ["B", "سَأُسَافِرُ الشَّهْرَ الْقَادِمَ، إِنْ شَاءَ اللَّهُ.", "Aku akan berangkat bulan depan, insya Allah."],
        ["A", "هَلْ تُسَافِرِينَ وَحْدَكِ؟", "Apakah kamu berangkat sendirian?"],
        ["B", "لَا، سَأُسَافِرُ مَعَ زَوْجِي.", "Tidak, aku berangkat bersama suamiku."],
        ["A", "كَمْ يَوْمًا؟", "Berapa hari?"],
        ["B", "تِسْعَةَ أَيَّامٍ.", "Sembilan hari."],
        ["A", "تَقَبَّلَ اللَّهُ مِنْكِ!", "Semoga Allah menerima (ibadah)mu!"]
      ],
      q: [
        ["Dengan siapa B berangkat?", ["Sendirian", "Bersama suaminya", "Bersama ibunya"], 1],
        ["Berapa lama perjalanannya?", ["7 hari", "9 hari", "10 hari"], 1]
      ]
    },
    tip: "Tulis satu rencana besok dalam bahasa Arab di catatan HP: سَأَذْهَبُ إِلَى ... غَدًا. Esoknya, ubah ke lampau: ذَهَبْتُ."
  }
]);
