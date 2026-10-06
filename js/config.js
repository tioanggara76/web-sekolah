/* =====================================================================
   CONFIG.JS : SEMUA ISI WEBSITE ADA DI SINI
   ---------------------------------------------------------------------
   Untuk mengubah teks, nomor telepon, berita, testimoni, dll,
   cukup edit berkas ini. Tidak perlu menyentuh index.html.

   Aturan menulis:
   - Teks diapit tanda kutip "..."
   - Setiap item dipisah koma ,
   - Jangan hapus tanda [ ] { } yang mengelilingi data
   ===================================================================== */

const SITE = {

  /* ---------- 1. IDENTITAS & KONTAK ---------- */
  identitas: {
    nama: "Al-Yusdah",
    jenjang: "SD & SMP Terpadu",
    pengumuman: "Pendaftaran siswa baru dibuka.",
    telepon: "061-0000-000",
    email: "yayasan.alyusdah99@gmail.com",
    whatsapp: "6281200000000",           // format: 62 + nomor tanpa angka 0 di depan
    alamat: "Jl. Pendidikan No. 12, Medan",
    petaUrl: "https://www.google.com/maps/search/?api=1&query=Medan+Sumatera+Utara",
    jam: [                               // [hari, jam]
      ["Senin–Jumat", "07.00–15.00"],
      ["Sabtu (Open House)", "08.00–12.00"]
    ],
    sosmed: [                            // ganti "#" dengan tautan asli
      { nama: "Instagram", url: "#" },
      { nama: "YouTube", url: "#" },
      { nama: "Facebook", url: "#" }
    ]

  },

  /* ---------- 2. HERO (bagian paling atas) ---------- */
  hero: {
    judul: "Membentuk Generasi Berkarakter, Cerdas, dan Berwawasan Global",
    deskripsi: "Dari bangku kelas 1 SD sampai lulus SMP, anak belajar di satu lingkungan yang aman, hangat, dan saling mengenal.",
    poin: ["Akreditasi B", "Maks. 24 siswa per kelas", "Antar-jemput tersedia"],
    stiker: ["⭐ Akreditasi B", "🎒 Sejak 2005"]
  },

  /* ---------- 3. PITA EKSTRAKURIKULER ---------- */
  ekskul: [
    "🎨 Seni Rupa", "⚽ Futsal", "🏊 Renang", "🤖 Robotika", "🎤 Paduan Suara",
    "🏕️ Pramuka", "🗣️ Debat", "📰 Jurnalistik", "🥋 Taekwondo", "🎹 Musik"
  ],

  /* ---------- 4. SAMBUTAN YAYASAN ---------- */
  sambutan: {
    nama: "H. Ahmad Fauzi, M.Pd.",
    jabatan: "Ketua Yayasan Al-Yusdah",
    foto: "",                            // contoh: "gambar/ketua-yayasan.jpeg" (kosongkan untuk siluet)
    salam: "Assalamu'alaikum warahmatullahi wabarakatuh.",
    paragraf: [
      "Puji syukur kami panjatkan atas kepercayaan orang tua kepada Sekolah Al-Yusdah. Sejak berdiri, kami berpegang pada keyakinan bahwa pendidikan yang baik membentuk akhlak lebih dulu, lalu kecerdasan.",
      "Kami terus memperbarui sarana, melatih guru, dan membuka komunikasi yang jujur dengan orang tua, agar setiap anak tumbuh percaya diri dan siap menghadapi masa depan.",
      "Kami mengundang Bapak dan Ibu untuk berkunjung dan melihat sendiri suasana belajar di sekolah kami."
    ]
  },

  /* ---------- 5. TENTANG KAMI ---------- */
  tentang: {
    deskripsi: "Al-Yusdah berdiri sejak 2005 dengan satu keyakinan: anak tumbuh terbaik ketika karakter dan ilmu diajarkan bersama. Kami menggabungkan Kurikulum Merdeka dengan pembiasaan ibadah, kebersihan, dan kepedulian lingkungan.",
    kartu: [
      { judul: "Visi", isi: "Melahirkan lulusan yang jujur, mandiri, dan siap bersaing di tingkat nasional maupun global." },
      { judul: "Misi", isi: "Pembelajaran aktif, guru yang terus berkembang, dan kemitraan erat dengan orang tua." },
      { judul: "Akreditasi", isi: "Terakreditasi A untuk jenjang SD dan SMP oleh BAN-S/M." }
    ]
  },

  /* ---------- 6. PROGRAM STUDI ---------- */
  program: {
    sd: {
      kurikulum: [
        "Kurikulum Merdeka dengan tema belajar proyek",
        "Literasi dan numerasi sejak kelas awal",
        "Bahasa Inggris dan Mandarin dasar",
        "Pendidikan karakter dan pembiasaan harian"
      ],
      label: ["Maks. 24 siswa/kelas", "Wali kelas pendamping", "Belajar di alam"],
      keunggulan: [
        "Kelas calistung dan membaca pagi",
        "Ekstrakurikuler: seni, pramuka, renang"
      ]
    },
    smp: {
      kurikulum: [
        "Kurikulum Merdeka dengan penguatan sains dan matematika",
        "Coding, robotika, dan literasi digital",
        "Bahasa Inggris berstandar Cambridge",
        "Bimbingan karier dan konseling"
      ],
      label: ["Kelas olimpiade", "Debat & public speaking", "Proyek sosial"],
      keunggulan: [
        "Pembinaan menuju SMA unggulan",
        "Ekstrakurikuler: futsal, paduan suara, jurnalistik"
      ]
    }
  },

  /* ---------- 7. FASILITAS ---------- */
  fasilitas: [
    { ikon: "💻", judul: "Lab Komputer", isi: "Satu perangkat untuk dua siswa, internet cepat." },
    { ikon: "📚", judul: "Perpustakaan Digital", isi: "Ribuan buku cetak dan e-book ramah anak." },
    { ikon: "⚽", judul: "Lapangan Olahraga", isi: "Lapangan futsal, basket, dan area bermain." },
    { ikon: "❄️", judul: "Kelas Ber-AC", isi: "Ruang kelas sejuk, terang, dan aman." },
    { ikon: "🔬", judul: "Laboratorium Sains", isi: "Praktikum langsung untuk IPA SMP." },
    { ikon: "🚌", judul: "Antar-Jemput", isi: "Bus sekolah dengan pendamping." }
  ],

  /* ---------- 8. STATISTIK & PRESTASI ---------- */
  statistik: [                           // pakai "angka" untuk hitung naik, atau "teks" untuk tulisan tetap
    { angka: 850, label: "Siswa Aktif" },
    { angka: 64,  label: "Guru Berprestasi" },
    { teks: "B",  label: "Akreditasi SD & SMP" },
    { angka: 210, label: "Penghargaan" }
  ],
  prestasi: [
    { judul: "Juara 1 OSN Matematika", isi: "Tingkat Kota, siswa SMP kelas 8" },
    { judul: "Sekolah Adiwiyata", isi: "Penghargaan peduli lingkungan tingkat provinsi" },
    { judul: "Juara 2 Lomba Cerdas Cermat", isi: "Tim SD kelas 5, tingkat kota" }
  ],

  /* ---------- 9. TESTIMONI ---------- */
  testimoni: [
    { isi: "Anak saya dulu pemalu. Sekarang berani tampil di depan kelas. Guru-gurunya sabar dan sering memberi kabar.", nama: "Ibu Rina, orang tua siswa kelas 4" },
    { isi: "Pembiasaan disiplin dan proyek kelompok di SMP sangat membantu saya saat masuk SMA negeri favorit.", nama: "Dimas, alumni angkatan 2021" },
    { isi: "Lingkungannya aman dan komunikasinya cepat lewat WhatsApp. Kami merasa tenang.", nama: "Bapak Hendra, orang tua siswa kelas 8" }
  ],

  /* ---------- 10. BERITA & PENGUMUMAN ----------
     Berita terbaru taruh paling atas.
     "foto" boleh dikosongkan, maka yang tampil adalah ikon. */
  berita: [
    { ikon: "🌱", foto: "", tanggal: "28 September 2026", judul: "Gerakan Menanam Pohon Bersama", ringkas: "Siswa SD dan SMP menanam 200 bibit di area sekolah." },
    { ikon: "🏆", foto: "", tanggal: "20 September 2026", judul: "Tim Olimpiade Sains Raih Medali", ringkas: "Tiga siswa SMP lolos ke tingkat provinsi." },
    { ikon: "📣", foto: "", tanggal: "10 September 2026", judul: "Jadwal Open House Pendaftaran Siswa Baru", ringkas: "Kunjungi sekolah dan temui guru setiap Sabtu pagi." }
  ],

  /* ---------- 11. PENDAFTARAN ---------- */
  pendaftaran: {
    judul: "Pendaftaran Siswa Baru",
    isi: "Hubungi kami untuk informasi syarat, biaya, dan jadwal pendaftaran kelas 1 SD dan kelas 7 SMP.",
    pesanWA: "Halo, saya ingin mendaftar."
  }
};