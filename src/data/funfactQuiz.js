const funfactQuiz = [
  {
    question: "Gaya apa yang membuat planet tetap mengorbit Matahari?",
    options: ["Magnet", "Gravitasi", "Angin Surya", "Rotasi"],
    answer: 1,
  },
  {
    question: "Apa penyebab terjadinya siang dan malam di Bumi?",
    options: [
      "Revolusi Bumi",
      "Rotasi Bumi",
      "Gravitasi Bulan",
      "Gerak Matahari",
    ],
    answer: 1,
  },
  {
    question: "Apa yang menyebabkan terjadinya pergantian musim di Bumi?",
    options: [
      "Rotasi Bumi",
      "Gravitasi Matahari",
      "Revolusi Bumi",
      "Pergerakan Bulan",
    ],
    answer: 2,
  },
  {
    question: "Benda langit apa yang memengaruhi pasang surut air laut?",
    options: ["Matahari", "Mars", "Bulan", "Asteroid"],
    answer: 2,
  },
  {
    question: "Gravitasi di Bulan dibandingkan Bumi adalah?",
    options: [
      "Lebih kuat",
      "Sama kuat",
      "Lebih lemah",
      "Tidak ada",
    ],
    answer: 2,
  },
  {
    question: "Mengapa manusia bisa melompat lebih tinggi di Bulan?",
    options: [
      "Udaranya tipis",
      "Tidak ada atmosfer",
      "Gravitasinya lebih kecil",
      "Bulan lebih kecil",
    ],
    answer: 2,
  },
  {
    question: "Apa itu asteroid?",
    options: [
      "Planet kecil",
      "Sisa pembentukan tata surya",
      "Bintang mati",
      "Satelit buatan",
    ],
    answer: 1,
  },
  {
    question: "Di mana letak sabuk asteroid?",
    options: [
      "Antara Bumi dan Mars",
      "Antara Mars dan Jupiter",
      "Antara Jupiter dan Saturnus",
      "Di luar Neptunus",
    ],
    answer: 1,
  },
  {
    question: "Meteor yang terlihat di langit sering disebut sebagai?",
    options: [
      "Komet",
      "Planet kecil",
      "Bintang jatuh",
      "Satelit",
    ],
    answer: 2,
  },
  {
    question: "Apa yang terjadi saat gerhana Matahari?",
    options: [
      "Bumi menutupi Bulan",
      "Bulan menutupi Matahari",
      "Matahari menutupi Bumi",
      "Mars menutupi Matahari",
    ],
    answer: 1,
  },
  {
    question: "Gerhana Bulan terjadi ketika?",
    options: [
      "Bulan menutupi Matahari",
      "Matahari menutupi Bumi",
      "Bayangan Bumi menutupi Bulan",
      "Mars berada di depan Bulan",
    ],
    answer: 2,
  },
  {
    question: "Mengapa planet tidak saling bertabrakan?",
    options: [
      "Karena ukurannya kecil",
      "Karena jaraknya jauh",
      "Karena memiliki orbit stabil",
      "Karena bergerak lambat",
    ],
    answer: 2,
  },
  {
    question: "Bentuk orbit planet mengelilingi Matahari adalah?",
    options: ["Lingkaran sempurna", "Segitiga", "Elips", "Zig-zag"],
    answer: 2,
  },
  {
    question: "Planet apa yang dikenal sebagai Planet Merah?",
    options: ["Venus", "Mars", "Jupiter", "Merkurius"],
    answer: 1,
  },
  {
    question: "Mengapa Mars berwarna merah?",
    options: [
      "Karena lava",
      "Karena debu besi",
      "Karena es",
      "Karena awan tebal",
    ],
    answer: 1,
  },
  {
    question: "Gunung tertinggi di tata surya berada di planet?",
    options: ["Bumi", "Mars", "Venus", "Jupiter"],
    answer: 1,
  },
  {
    question: "Nama gunung tertinggi di tata surya adalah?",
    options: [
      "Mount Everest",
      "Olympus Mons",
      "Mauna Kea",
      "Valles Marineris",
    ],
    answer: 1,
  },
  {
    question: "Berapa jumlah bulan alami yang dimiliki Mars?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
  {
    question: "Apa nama dua bulan Mars?",
    options: [
      "Io dan Europa",
      "Phobos dan Deimos",
      "Titan dan Enceladus",
      "Ganymede dan Callisto",
    ],
    answer: 1,
  },
  {
    question: "Mengapa suhu Mars sangat dingin?",
    options: [
      "Karena jauh dari Matahari",
      "Karena atmosfernya tipis",
      "Karena banyak es",
      "Karena rotasinya lambat",
    ],
    answer: 1,
  },
  {
    question: "Apa penyebab badai debu besar di Mars?",
    options: [
      "Gravitasi kuat",
      "Atmosfer tipis",
      "Angin kencang",
      "Hujan es",
    ],
    answer: 2,
  },
  {
    question: "Mengapa Mars menjadi target eksplorasi manusia?",
    options: [
      "Karena paling besar",
      "Karena paling panas",
      "Karena pernah memiliki air",
      "Karena memiliki cincin",
    ],
    answer: 2,
  },
  {
    question: "Apa fungsi utama gravitasi dalam tata surya?",
    options: [
      "Membuat planet bercahaya",
      "Menjaga planet tetap di orbit",
      "Membuat planet berputar",
      "Mendinginkan planet",
    ],
    answer: 1,
  },
  {
    question: "Komet memiliki ekor yang selalu?",
    options: [
      "Mengarah ke Matahari",
      "Mengarah ke Bumi",
      "Menjauhi Matahari",
      "Mengelilingi planet",
    ],
    answer: 2,
  },
  {
    question: "Apa yang terjadi jika Bumi tidak memiliki Bulan?",
    options: [
      "Tidak ada siang malam",
      "Iklim menjadi tidak stabil",
      "Bumi berhenti berputar",
      "Tidak ada atmosfer",
    ],
    answer: 1,
  },
  {
    question: "Mengapa Matahari sangat berpengaruh di tata surya?",
    options: [
      "Karena paling terang",
      "Karena paling panas",
      "Karena massanya sangat besar",
      "Karena paling dekat",
    ],
    answer: 2,
  },
  {
    question: "Bintang jatuh sebenarnya adalah?",
    options: [
      "Bintang kecil",
      "Planet kecil",
      "Meteor yang terbakar",
      "Komet jauh",
    ],
    answer: 2,
  },
  {
    question: "Planet bergerak mengelilingi Matahari dalam jalur yang disebut?",
    options: ["Rotasi", "Orbit", "Gravitasi", "Lintasan lurus"],
    answer: 1,
  },
  {
    question: "Apa tujuan ilmuwan mempelajari tata surya?",
    options: [
      "Mencari alien",
      "Mengetahui masa depan Matahari",
      "Memahami asal-usul Bumi",
      "Menemukan planet baru",
    ],
    answer: 2,
  },
];

export default funfactQuiz;
