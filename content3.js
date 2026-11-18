// Kawan Arab — materi Level 3 (Bercerita)
window.UNITS = (window.UNITS || []).concat([
  {
    id: "u17", lv: 3, ic: "👥", t: "Banyak (Jamak)", goal: "Mengenali tiga jenis jamak dan memakainya dalam kalimat.",
    v: [
      ["طُلَّابٌ", "murid-murid", "🧑‍🎓"],
      ["مُدَرِّسُونَ", "guru-guru (lk)", "👨‍🏫"],
      ["مُدَرِّسَاتٌ", "guru-guru (pr)", "👩‍🏫"],
      ["مُسْلِمُونَ", "orang-orang muslim", "🕌"],
      ["كُتُبٌ", "buku-buku", "📚"],
      ["بُيُوتٌ", "rumah-rumah", "🏘️"],
      ["أَوْلَادٌ", "anak-anak", "🧒"],
      ["مَسَاجِدُ", "masjid-masjid", "🕌"],
      ["هٰؤُلَاءِ", "mereka ini (orang)", "👇"],
      ["فَصْلٌ", "kelas", "🏫"],
      ["كَثِيرٌ", "banyak", "➕"],
      ["مُجْتَهِدٌ", "rajin / tekun", "💪"]
    ],
    p: {
      t: "ـُونَ · ـَاتٌ · pola berubah",
      x: "Ada tiga jamak: (1) laki-laki + ـُونَ: مُدَرِّسٌ → مُدَرِّسُونَ. (2) perempuan + ـَاتٌ: مُدَرِّسَةٌ → مُدَرِّسَاتٌ. (3) Jamak taksir: bentuk katanya berubah, harus dihafal per kata: كِتَابٌ → كُتُبٌ، بَيْتٌ → بُيُوتٌ. Benda jamak diperlakukan seperti \"dia perempuan\": الْكُتُبُ جَدِيدَةٌ.",
      ex: [
        ["هٰؤُلَاءِ طُلَّابٌ.", "Mereka ini murid-murid."],
        ["الْمُدَرِّسُونَ فِي الْفَصْلِ.", "Para guru di dalam kelas."],
        ["الْمُدَرِّسَاتُ مَشْغُولَاتٌ.", "Para guru perempuan sedang sibuk."],
        ["الْكُتُبُ جَدِيدَةٌ.", "Buku-buku itu baru."],
        ["فِي سُومْبَاوَا مَسَاجِدُ كَثِيرَةٌ.", "Di Sumbawa ada banyak masjid."],
        ["الْأَوْلَادُ يَلْعَبُونَ.", "Anak-anak sedang bermain."]
      ]
    },
    d: {
      t: "Kelasku",
      l: [
        ["A", "كَمْ طَالِبًا فِي فَصْلِكِ؟", "Berapa murid di kelasmu?"],
        ["B", "فِي فَصْلِي عِشْرُونَ طَالِبًا.", "Di kelasku ada dua puluh murid."],
        ["A", "هَلْ هُمْ مُجْتَهِدُونَ؟", "Apakah mereka rajin?"],
        ["B", "نَعَمْ، هُمْ مُجْتَهِدُونَ، وَلٰكِنَّهُمْ يُحِبُّونَ اللَّعِبَ!", "Ya, mereka rajin, tapi mereka suka bermain!"],
        ["A", "هٰذَا طَبِيعِيٌّ!", "Itu wajar!"]
      ],
      q: [
        ["Berapa murid di kelas B?", ["10", "20", "30"], 1],
        ["Jamak dari كِتَابٌ adalah ...", ["كِتَابُونَ", "كِتَابَاتٌ", "كُتُبٌ"], 2]
      ]
    },
    tip: "Saat menghafal kata benda baru, langsung hafal jamaknya juga: كِتَابٌ — كُتُبٌ. Diucapkan berpasangan seperti nama dan nama keluarga."
  },
  {
    id: "u18", lv: 3, ic: "🔗", t: "Karena, Tetapi, Jika", goal: "Menyambung kalimat dan memberi alasan.",
    v: [
      ["لِأَنَّ", "karena", "💡"],
      ["لِأَنِّي", "karena aku", "🙋"],
      ["وَلٰكِنَّ", "tetapi (diikuti kata benda / akhiran)", "↔️"],
      ["أَوْ", "atau", "🔀"],
      ["إِذَا", "jika", "🔑"],
      ["عِنْدَمَا", "ketika", "⏱️"],
      ["أَحْيَانًا", "kadang-kadang", "🌗"],
      ["قَلِيلًا", "sedikit", "🤏"],
      ["صَعْبٌ", "sulit", "🧗"],
      ["سَهْلٌ", "mudah", "🛝"],
      ["أَفْهَمُ", "aku paham", "💡"],
      ["أُرَاجِعُ", "aku mengulang (murojaah)", "🔁"]
    ],
    p: {
      t: "لِمَاذَا؟ — لِأَنِّي ...",
      x: "Jawaban untuk لِمَاذَا (mengapa) diawali لِأَنَّ (karena). Akhiran ganti bisa ditempel: لِأَنِّي (karena aku), لِأَنَّهُ (karena dia). وَلٰكِنَّ juga bisa ditempel: وَلٰكِنِّي (tetapi aku).",
      ex: [
        ["لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟", "Mengapa kamu belajar bahasa Arab?"],
        ["لِأَنِّي أُحِبُّ الْقُرْآنَ.", "Karena aku mencintai Al-Qur'an."],
        ["الدَّرْسُ صَعْبٌ، وَلٰكِنِّي أَفْهَمُ.", "Pelajarannya sulit, tetapi aku paham."],
        ["هَلْ تُرِيدُ شَايًا أَوْ قَهْوَةً؟", "Kamu mau teh atau kopi?"],
        ["إِذَا نَسِيتُ كَلِمَةً، أُرَاجِعُهَا.", "Jika aku lupa satu kata, aku mengulanginya."]
      ]
    },
    d: {
      t: "Bacaan: Mengapa aku belajar bahasa Arab",
      l: [
        ["N", "أَنَا أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ.", "Aku belajar bahasa Arab."],
        ["N", "لِمَاذَا؟ لِأَنِّي أُرِيدُ أَنْ أَفْهَمَ الْقُرْآنَ.", "Mengapa? Karena aku ingin memahami Al-Qur'an."],
        ["N", "الدَّرْسُ صَعْبٌ أَحْيَانًا، وَلٰكِنِّي لَا أَيْأَسُ.", "Pelajarannya kadang sulit, tetapi aku tidak putus asa."],
        ["N", "أَدْرُسُ قَلِيلًا كُلَّ يَوْمٍ.", "Aku belajar sedikit setiap hari."],
        ["N", "إِذَا نَسِيتُ كَلِمَةً، أُرَاجِعُهَا.", "Jika aku lupa satu kata, aku mengulanginya."],
        ["N", "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ.", "Sesungguhnya Allah bersama orang-orang yang sabar."]
      ],
      q: [
        ["Mengapa penulis belajar bahasa Arab?", ["Untuk bekerja di luar negeri", "Ingin memahami Al-Qur'an", "Disuruh guru"], 1],
        ["Apa yang ia lakukan jika lupa satu kata?", ["Menyerah", "Mengulanginya", "Melewatinya"], 1]
      ]
    },
    tip: "Bacaan di unit ini adalah kisah Anda sendiri. Baca keras-keras setiap kali semangat turun: وَلٰكِنِّي لَا أَيْأَسُ."
  },
  {
    id: "u19", lv: 3, ic: "🤒", t: "Sakit & Perasaan", goal: "Menyampaikan keluhan badan dan perasaan, serta mendoakan kesembuhan.",
    v: [
      ["مَرِيضٌ", "sakit (orangnya)", "🤒"],
      ["مُسْتَشْفًى", "rumah sakit", "🏥"],
      ["دَوَاءٌ", "obat", "💊"],
      ["رَأْسٌ", "kepala", "🧠"],
      ["بَطْنٌ", "perut", "🫃"],
      ["صُدَاعٌ", "sakit kepala", "🤕"],
      ["حُمَّى", "demam", "🌡️"],
      ["مُتْعَبٌ", "lelah", "😩"],
      ["حَزِينٌ", "sedih", "😢"],
      ["فَرْحَانُ", "gembira", "😄"],
      ["أَشْعُرُ بِـ", "aku merasa ...", "💭"],
      ["شَفَاكَ اللَّهُ", "semoga Allah menyembuhkanmu", "🤲"]
    ],
    p: {
      t: "عِنْدِي صُدَاعٌ — رَأْسِي يُؤْلِمُنِي",
      x: "Keluhan bisa disampaikan dengan عِنْدِي + penyakit (aku punya ...): عِنْدِي حُمَّى. Atau anggota badan + يُؤْلِمُنِي (menyakitiku): بَطْنِي يُؤْلِمُنِي. Perasaan: أَشْعُرُ بِـ + kata benda: أَشْعُرُ بِالتَّعَبِ.",
      ex: [
        ["أَنَا مَرِيضٌ الْيَوْمَ.", "Aku sakit hari ini."],
        ["عِنْدِي صُدَاعٌ.", "Aku sakit kepala."],
        ["بَطْنِي يُؤْلِمُنِي.", "Perutku sakit."],
        ["أَشْعُرُ بِالتَّعَبِ.", "Aku merasa lelah."],
        ["اِشْرَبْ هٰذَا الدَّوَاءَ.", "Minumlah obat ini."],
        ["شَفَاكَ اللَّهُ.", "Semoga Allah menyembuhkanmu."]
      ]
    },
    d: {
      t: "Di dokter",
      l: [
        ["A", "مَا بِكِ؟", "Ada keluhan apa?"],
        ["B", "عِنْدِي حُمَّى وَصُدَاعٌ.", "Saya demam dan sakit kepala."],
        ["A", "مُنْذُ مَتَى؟", "Sejak kapan?"],
        ["B", "مُنْذُ يَوْمَيْنِ.", "Sejak dua hari."],
        ["A", "خُذِي هٰذَا الدَّوَاءَ ثَلَاثَ مَرَّاتٍ فِي الْيَوْمِ.", "Minum obat ini tiga kali sehari."],
        ["B", "شُكْرًا يَا دُكْتُورُ.", "Terima kasih, Dokter."],
        ["A", "شَفَاكِ اللَّهُ.", "Semoga Allah menyembuhkanmu."]
      ],
      q: [
        ["Sejak kapan B sakit?", ["Sejak kemarin", "Sejak dua hari", "Sejak seminggu"], 1],
        ["Berapa kali obat diminum?", ["Sekali sehari", "Dua kali sehari", "Tiga kali sehari"], 2]
      ]
    },
    tip: "Saat menjenguk orang sakit atau membaca kabar sakit di grup, tulis شَفَاكَ اللَّهُ (ke lk) atau شَفَاكِ اللَّهُ (ke pr)."
  },
  {
    id: "u20", lv: 3, ic: "🌳", t: "Rahasia Akar Kata", goal: "Memahami bahwa 3 huruf akar melahirkan banyak kata — kunci menebak arti kata baru.",
    v: [
      ["كَتَبَ", "ia telah menulis", "✍️"],
      ["كَاتِبٌ", "penulis", "🧑‍💼"],
      ["مَكْتُوبٌ", "tertulis / surat", "📜"],
      ["مَكْتَبَةٌ", "perpustakaan / toko buku", "🏛️"],
      ["عَلِمَ", "ia telah mengetahui", "💡"],
      ["عِلْمٌ", "ilmu", "🔬"],
      ["عَالِمٌ", "orang berilmu / ulama", "🎓"],
      ["مُعَلِّمٌ", "pengajar / guru", "👨‍🏫"],
      ["دَرَسَ", "ia telah belajar", "📚"],
      ["دَرْسٌ", "pelajaran", "📝"],
      ["نُورٌ", "cahaya", "💡"]
    ],
    p: {
      t: "ك ت ب ← كَتَبَ · كَاتِبٌ · كِتَابٌ · مَكْتُوبٌ · مَكْتَبٌ · مَكْتَبَةٌ",
      x: "Hampir semua kata Arab lahir dari 3 huruf akar yang membawa makna inti. Polanya (wazan) memberi peran: فَاعِلٌ = pelaku (كَاتِبٌ penulis), مَفْعُولٌ = yang dikenai (مَكْتُوبٌ yang ditulis), مَفْعَلٌ / مَفْعَلَةٌ = tempat (مَكْتَبٌ meja/kantor, مَكْتَبَةٌ perpustakaan). Kenal 1 akar + 4 pola = paham puluhan kata.",
      ex: [
        ["كَتَبَ الْكَاتِبُ كِتَابًا.", "Penulis itu menulis sebuah buku."],
        ["الدَّرْسُ مَكْتُوبٌ عَلَى السَّبُّورَةِ.", "Pelajaran itu tertulis di papan tulis."],
        ["ذَهَبْتُ إِلَى الْمَكْتَبَةِ.", "Aku pergi ke perpustakaan."],
        ["الْعِلْمُ نُورٌ.", "Ilmu adalah cahaya."],
        ["الْمُعَلِّمُ يُعَلِّمُ الطُّلَّابَ.", "Pengajar itu mengajar para murid."],
        ["دَرَسْنَا دَرْسًا جَدِيدًا.", "Kami mempelajari pelajaran baru."]
      ]
    },
    d: {
      t: "Bacaan: Satu akar, banyak kata",
      l: [
        ["N", "الْكَاتِبُ يَكْتُبُ فِي الْمَكْتَبِ.", "Penulis menulis di kantor."],
        ["N", "الْكِتَابُ فِي الْمَكْتَبَةِ.", "Buku itu ada di perpustakaan."],
        ["N", "الْمُعَلِّمُ عَالِمٌ، وَعِنْدَهُ عِلْمٌ كَثِيرٌ.", "Pengajar itu orang berilmu, dan ia punya banyak ilmu."],
        ["N", "الطَّالِبُ يَدْرُسُ الدَّرْسَ فِي الْمَدْرَسَةِ.", "Murid mempelajari pelajaran di sekolah."]
      ],
      q: [
        ["Akar ك-ت-ب membawa makna ...", ["belajar", "menulis", "mengetahui"], 1],
        ["Pola مَفْعَلَةٌ biasanya berarti ...", ["pelaku", "tempat", "yang dikenai"], 1],
        ["Dari akar د-ر-س, kata مَدْرَسَةٌ berarti ...", ["guru", "pelajaran", "sekolah (tempat belajar)"], 2]
      ]
    },
    tip: "Setiap menemukan kata baru, tanyakan: \"akarnya apa?\". Lama-lama Anda bisa menebak arti kata yang belum pernah dipelajari — ini lompatan terbesar dalam belajar bahasa Arab."
  },
  {
    id: "u21", lv: 3, ic: "🕌", t: "Ibadah & Masjid", goal: "Berbicara tentang wudhu, shalat, dan kegiatan di masjid.",
    v: [
      ["وُضُوءٌ", "wudhu", "💧"],
      ["صَلَاةٌ", "shalat", "🧎"],
      ["أَذَانٌ", "adzan", "📢"],
      ["إِقَامَةٌ", "iqamah", "🔔"],
      ["إِمَامٌ", "imam", "🧔"],
      ["قِبْلَةٌ", "kiblat", "🧭"],
      ["صِيَامٌ", "puasa", "🌙"],
      ["زَكَاةٌ", "zakat", "💰"],
      ["دُعَاءٌ", "doa", "🤲"],
      ["سَجَّادَةٌ", "sajadah", "🟩"],
      ["جَمَاعَةً", "berjamaah", "👥"],
      ["دَقِيقَةٌ", "menit", "⏱️"]
    ],
    p: {
      t: "نَتَوَضَّأُ قَبْلَ الصَّلَاةِ",
      x: "Gabungkan semua yang sudah Anda pelajari: kata kerja (نَـ kami), waktu (قَبْلَ، بَعْدَ), dan tempat (فِي). Kosakata ibadah sudah sering Anda dengar — sekarang pakai dalam kalimat.",
      ex: [
        ["نَتَوَضَّأُ قَبْلَ الصَّلَاةِ.", "Kami berwudhu sebelum shalat."],
        ["سَمِعْتُ الْأَذَانَ.", "Aku mendengar adzan."],
        ["نُصَلِّي جَمَاعَةً فِي الْمَسْجِدِ.", "Kami shalat berjamaah di masjid."],
        ["نَصُومُ فِي رَمَضَانَ.", "Kami berpuasa di bulan Ramadhan."],
        ["أَيْنَ الْقِبْلَةُ؟", "Di mana arah kiblat?"],
        ["الْإِمَامُ يَقْرَأُ الْفَاتِحَةَ.", "Imam membaca Al-Fatihah."]
      ]
    },
    d: {
      t: "Di masjid",
      l: [
        ["A", "السَّلَامُ عَلَيْكُمْ. أَيْنَ مَكَانُ الْوُضُوءِ؟", "Assalamu'alaikum. Di mana tempat wudhu?"],
        ["B", "وَعَلَيْكُمُ السَّلَامُ. هُنَاكَ، وَرَاءَ الْمَسْجِدِ.", "Wa'alaikumussalam. Di sana, di belakang masjid."],
        ["A", "شُكْرًا. وَمَتَى الْإِقَامَةُ؟", "Terima kasih. Kapan iqamah?"],
        ["B", "بَعْدَ عَشْرِ دَقَائِقَ.", "Sepuluh menit lagi."],
        ["A", "جَزَاكَ اللَّهُ خَيْرًا.", "Jazakallahu khairan."],
        ["B", "وَإِيَّاكَ.", "Wa iyyaka."]
      ],
      q: [
        ["Di mana tempat wudhu?", ["Di depan masjid", "Di belakang masjid", "Di dalam masjid"], 1],
        ["Kapan iqamah?", ["5 menit lagi", "10 menit lagi", "Setelah Zhuhur"], 1]
      ]
    },
    tip: "Sambil menunggu iqamah, sebutkan dalam hati 5 benda di masjid dalam bahasa Arab. Waktu tunggu jadi waktu murojaah."
  },
  {
    id: "u22", lv: 3, ic: "🕋", t: "Perjalanan Umrah", goal: "Bertahan di bandara, hotel, dan sekitar Haram dengan kalimat penting.",
    v: [
      ["مَطَارٌ", "bandara", "🛫"],
      ["جَوَازُ السَّفَرِ", "paspor", "🛂"],
      ["فُنْدُقٌ", "hotel", "🏨"],
      ["حَمَّامٌ", "kamar mandi / toilet", "🚻"],
      ["الْحَرَمُ", "Masjidil Haram / tanah haram", "🕋"],
      ["طَوَافٌ", "thawaf", "🔄"],
      ["سَعْيٌ", "sa'i", "🚶"],
      ["قَرِيبٌ", "dekat", "📍"],
      ["بَعِيدٌ", "jauh", "🗺️"],
      ["ضَاعَ", "hilang", "❓"],
      ["كَيْفَ؟", "bagaimana?", "🧭"],
      ["الطَّابَقُ", "lantai (gedung)", "🏢"]
    ],
    p: {
      t: "كَيْفَ أَذْهَبُ إِلَى ...؟",
      x: "Empat kalimat penyelamat perjalanan: أَيْنَ ...؟ (di mana), كَيْفَ أَذْهَبُ إِلَى ...؟ (bagaimana ke ...), أُرِيدُ ... (aku mau), ضَاعَ ... (... hilang).",
      ex: [
        ["أَيْنَ الْحَمَّامُ؟", "Di mana toilet?"],
        ["كَيْفَ أَذْهَبُ إِلَى الْحَرَمِ؟", "Bagaimana cara ke Masjidil Haram?"],
        ["أُرِيدُ مِفْتَاحَ الْغُرْفَةِ.", "Saya mau kunci kamar."],
        ["ضَاعَ جَوَازُ سَفَرِي.", "Pasporku hilang."],
        ["هَلِ الْفُنْدُقُ قَرِيبٌ؟", "Apakah hotelnya dekat?"],
        ["طُفْنَا سَبْعَةَ أَشْوَاطٍ.", "Kami thawaf tujuh putaran."]
      ]
    },
    d: {
      t: "Di hotel di Makkah",
      l: [
        ["A", "أَهْلًا وَسَهْلًا. تَفَضَّلِي.", "Selamat datang. Silakan."],
        ["B", "السَّلَامُ عَلَيْكُمْ. عِنْدِي حَجْزٌ بِاسْمِ فَاطِمَةَ.", "Assalamu'alaikum. Saya punya pesanan atas nama Fatimah."],
        ["A", "نَعَمْ. جَوَازُ السَّفَرِ، مِنْ فَضْلِكِ.", "Ya. Paspornya, silakan."],
        ["B", "تَفَضَّلْ.", "Silakan."],
        ["A", "هٰذَا مِفْتَاحُ الْغُرْفَةِ. الْغُرْفَةُ فِي الطَّابَقِ الْخَامِسِ.", "Ini kunci kamarnya. Kamarnya di lantai lima."],
        ["B", "كَيْفَ أَذْهَبُ إِلَى الْحَرَمِ؟", "Bagaimana cara ke Masjidil Haram?"],
        ["A", "الْحَرَمُ قَرِيبٌ، خَمْسُ دَقَائِقَ مَشْيًا.", "Haram dekat, lima menit jalan kaki."]
      ],
      q: [
        ["Di lantai berapa kamar B?", ["3", "5", "7"], 1],
        ["Seberapa jauh ke Haram?", ["5 menit jalan kaki", "15 menit naik taksi", "Jauh sekali"], 0]
      ]
    },
    tip: "Simpan 4 kalimat penyelamat di unit ini sebagai catatan di HP. Bila suatu saat berangkat umrah atau mengantar jamaah, kalimat ini langsung terpakai."
  },
  {
    id: "u23", lv: 3, ic: "📖", t: "Bercerita (Kisah)", goal: "Membaca dan menceritakan kisah pendek dengan kata kerja lampau.",
    v: [
      ["كَانَ", "dahulu ada / adalah (lampau)", "📜"],
      ["يَوْمًا", "suatu hari", "📅"],
      ["قَالَ", "ia berkata", "💬"],
      ["سَأَلَ", "ia bertanya", "❓"],
      ["رَأَى", "ia melihat", "👁️"],
      ["وَجَدَ", "ia menemukan", "🔍"],
      ["فَرِحَ", "ia gembira", "😄"],
      ["صَيَّادٌ", "nelayan / pemburu", "🎣"],
      ["بَحْرٌ", "laut", "🌊"],
      ["فَقِيرٌ", "miskin", "🪙"],
      ["شَبَكَةٌ", "jaring", "🕸️"],
      ["فَـ", "maka / lalu (langsung)", "⚡"]
    ],
    p: {
      t: "ذَهَبَ ... فَرَأَى ... فَفَرِحَ",
      x: "Kisah Arab mengalir dengan kata kerja lampau yang disambung فَـ (lalu langsung) atau ثُمَّ (kemudian, ada jeda). Pembuka khas: كَانَ ... (dahulu ada ...).",
      ex: [
        ["كَانَ الْجَوُّ جَمِيلًا.", "Cuacanya indah."],
        ["ذَهَبَ الصَّيَّادُ إِلَى الْبَحْرِ.", "Nelayan itu pergi ke laut."],
        ["رَأَى سَمَكَةً كَبِيرَةً.", "Ia melihat seekor ikan besar."],
        ["فَقَالَ: الْحَمْدُ لِلَّهِ!", "Lalu ia berkata: Alhamdulillah!"],
        ["سَأَلَهُ ابْنُهُ: مَاذَا وَجَدْتَ؟", "Anaknya bertanya: Apa yang Ayah temukan?"],
        ["فَرِحَتِ الْعَائِلَةُ.", "Keluarga itu pun gembira."]
      ]
    },
    d: {
      t: "Kisah: Nelayan dari Sumbawa",
      l: [
        ["N", "كَانَ فِي سُومْبَاوَا صَيَّادٌ فَقِيرٌ.", "Dahulu di Sumbawa ada seorang nelayan miskin."],
        ["N", "ذَهَبَ يَوْمًا إِلَى الْبَحْرِ قَبْلَ الْفَجْرِ.", "Suatu hari ia pergi ke laut sebelum Subuh."],
        ["N", "اِنْتَظَرَ طَوِيلًا، وَلٰكِنَّهُ لَمْ يَجِدْ سَمَكًا.", "Ia menunggu lama, tetapi tidak menemukan ikan."],
        ["N", "فَصَلَّى الْفَجْرَ وَدَعَا اللَّهَ.", "Maka ia shalat Subuh dan berdoa kepada Allah."],
        ["N", "ثُمَّ رَمَى الشَّبَكَةَ مَرَّةً أُخْرَى.", "Kemudian ia melempar jaring sekali lagi."],
        ["N", "فَوَجَدَ فِيهَا سَمَكًا كَثِيرًا!", "Lalu ia menemukan banyak ikan di dalamnya!"],
        ["N", "فَرِحَ الصَّيَّادُ وَقَالَ: الْحَمْدُ لِلَّهِ!", "Nelayan itu gembira dan berkata: Alhamdulillah!"]
      ],
      q: [
        ["Apa yang dilakukan nelayan setelah tidak mendapat ikan?", ["Pulang ke rumah", "Shalat dan berdoa", "Tidur di perahu"], 1],
        ["Bagaimana akhir kisahnya?", ["Ia mendapat banyak ikan", "Jaringnya hilang", "Ia pindah ke kota"], 0]
      ]
    },
    tip: "Ceritakan ulang kisah ini kepada santri atau keluarga dalam bahasa Arab yang sederhana. Mampu menceritakan ulang = benar-benar paham."
  },
  {
    id: "u24", lv: 3, ic: "💼", t: "Pekerjaan & Cita-cita", goal: "Menyebut pekerjaan dan menyampaikan cita-cita dengan أُرِيدُ أَنْ.",
    v: [
      ["عَمَلٌ", "pekerjaan", "💼"],
      ["أُحِبُّ", "aku suka / cinta", "❤️"],
      ["أُرِيدُ أَنْ", "aku ingin (melakukan) ...", "🎯"],
      ["أَكُونَ", "(aku) menjadi", "🌟"],
      ["فَلَّاحٌ", "petani", "🌾"],
      ["تَاجِرٌ", "pedagang", "🏪"],
      ["مُمَرِّضَةٌ", "perawat (pr)", "👩‍⚕️"],
      ["مُهَنْدِسٌ", "insinyur", "👷"],
      ["حُلْمٌ", "mimpi / cita-cita", "💭"],
      ["الْمُسْتَقْبَلُ", "masa depan", "🔭"],
      ["أُسَاعِدُ", "aku membantu", "🤝"],
      ["النَّاسُ", "manusia / orang-orang", "👥"]
    ],
    p: {
      t: "أَعْمَلُ مُدَرِّسَةً — أُرِيدُ أَنْ أَكُونَ طَبِيبًا",
      x: "Menyebut pekerjaan: أَعْمَلُ + pekerjaan berakhiran -an (أَعْمَلُ مُدَرِّسًا / مُدَرِّسَةً). Cita-cita: أُرِيدُ أَنْ أَكُونَ + pekerjaan berakhiran -an. Pola أُرِيدُ أَنْ + kata kerja juga untuk keinginan apa pun: أُرِيدُ أَنْ أَفْهَمَ (aku ingin paham).",
      ex: [
        ["مَا عَمَلُكِ؟", "Apa pekerjaanmu?"],
        ["أَعْمَلُ مُدَرِّسَةً.", "Aku bekerja sebagai guru."],
        ["أُحِبُّ عَمَلِي كَثِيرًا.", "Aku sangat menyukai pekerjaanku."],
        ["مَاذَا تُرِيدُ أَنْ تَكُونَ فِي الْمُسْتَقْبَلِ؟", "Kamu ingin jadi apa di masa depan?"],
        ["أُرِيدُ أَنْ أَكُونَ طَبِيبًا.", "Aku ingin menjadi dokter."],
        ["حُلْمِي أَنْ أَحُجَّ إِلَى بَيْتِ اللَّهِ.", "Cita-citaku adalah berhaji ke Baitullah."]
      ]
    },
    d: {
      t: "Bertanya kepada santri",
      l: [
        ["A", "يَا عُمَرُ، مَاذَا تُرِيدُ أَنْ تَكُونَ فِي الْمُسْتَقْبَلِ؟", "Umar, kamu ingin jadi apa di masa depan?"],
        ["B", "أُرِيدُ أَنْ أَكُونَ طَبِيبًا يَا أُسْتَاذَةُ.", "Saya ingin menjadi dokter, Ustadzah."],
        ["A", "لِمَاذَا؟", "Mengapa?"],
        ["B", "لِأَنِّي أُرِيدُ أَنْ أُسَاعِدَ النَّاسَ.", "Karena saya ingin membantu orang."],
        ["A", "مَا شَاءَ اللَّهُ! وَأَنْتِ يَا عَائِشَةُ؟", "Masya Allah! Dan kamu, Aisyah?"],
        ["C", "أُرِيدُ أَنْ أَكُونَ مُعَلِّمَةً مِثْلَكِ!", "Saya ingin menjadi guru seperti Ustadzah!"],
        ["A", "بَارَكَ اللَّهُ فِيكُمَا.", "Semoga Allah memberkahi kalian berdua."]
      ],
      q: [
        ["Umar ingin menjadi apa?", ["Guru", "Dokter", "Pedagang"], 1],
        ["Mengapa?", ["Ingin kaya", "Ingin membantu orang", "Disuruh ayah"], 1],
        ["Aisyah ingin menjadi apa?", ["Perawat", "Guru", "Dokter"], 1]
      ]
    },
    tip: "Tanyakan pertanyaan dialog ini kepada santri Anda besok: مَاذَا تُرِيدُ أَنْ تَكُونَ؟ Mereka belajar, Anda berlatih bicara."
  }
]);
