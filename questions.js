const questions = [
  // ===== EASY (20) =====
  {
    question: "যেটার মুখ আছে কিন্তু কথা বলে না, সেটা কী?",
    options: ["ঘড়ি", "মানুষ", "রোবট", "আয়না"],
    answer: "ঘড়ি",
    difficulty: "easy"
  },
  {
    question: "আমি যত শুকাই, তত ভিজি। আমি কে?",
    options: ["তোয়ালে", "পানি", "বৃষ্টি", "ঘাম"],
    answer: "তোয়ালে",
    difficulty: "easy"
  },
  {
    question: "কি আছে যার দাঁত আছে কিন্তু কামড়ায় না?",
    options: ["চিরুনি", "কুকুর", "মানুষ", "সিংহ"],
    answer: "চিরুনি",
    difficulty: "easy"
  },
  {
    question: "কি সবসময় সামনে থাকে কিন্তু দেখা যায় না?",
    options: ["ভবিষ্যৎ", "বাতাস", "সময়", "ছায়া"],
    answer: "ভবিষ্যৎ",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি ভাঙলে শব্দ হয় না?",
    options: ["নীরবতা", "গ্লাস", "লোহা", "পাথর"],
    answer: "নীরবতা",
    difficulty: "easy"
  },
  {
    question: "কোনটা সবসময় বাড়ে কিন্তু কমে না?",
    options: ["বয়স", "টাকা", "সময়", "চুল"],
    answer: "বয়স",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি উড়তে পারে কিন্তু ডানা নেই?",
    options: ["সময়", "পাখি", "বিমান", "ঘুড়ি"],
    answer: "সময়",
    difficulty: "easy"
  },
  {
    question: "একটি গাছ, কিন্তু ফল দেয় না—কি?",
    options: ["বংশগাছ", "আমগাছ", "কাঁঠালগাছ", "নারকেলগাছ"],
    answer: "বংশগাছ",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি কেটে ফেললেও আবার বড় হয়?",
    options: ["চুল", "গাছ", "কাপড়", "দড়ি"],
    answer: "চুল",
    difficulty: "easy"
  },
  {
    question: "কোনটি সবসময় আপনার সাথে থাকে কিন্তু দেখা যায় না?",
    options: ["নাম", "ছায়া", "বাতাস", "স্বপ্ন"],
    answer: "নাম",
    difficulty: "easy"
  },
  {
    question: "৫ + ৫ × ২ = ?",
    options: ["২০", "১৫", "২৫", "৩০"],
    answer: "15",
    difficulty: "easy"
  },
  {
    question: "কোন মাসে ২৮ দিন থাকে?",
    options: ["ফেব্রুয়ারি", "সব মাসে", "জানুয়ারি", "মার্চ"],
    answer: "সব মাসে",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি যত নেয়া হয়, তত বড় হয়?",
    options: ["গর্ত", "টাকা", "সময়", "রাস্তা"],
    answer: "গর্ত",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি আপনি ধরতে পারেন কিন্তু ছুঁতে পারেন না?",
    options: ["শ্বাস", "বাতাস", "সময়", "স্বপ্ন"],
    answer: "শ্বাস",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি মাথা আছে কিন্তু শরীর নেই?",
    options: ["মুদ্রা", "মানুষ", "পাখি", "ঘড়ি"],
    answer: "মুদ্রা",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি সবসময় দৌড়ায় কিন্তু হাঁটে না?",
    options: ["নদী", "মানুষ", "ঘোড়া", "সময়"],
    answer: "নদী",
    difficulty: "easy"
  },
  {
    question: "একটি ঘরে ৪টি কোণ, প্রতিটি কোণে একটি বিড়াল—মোট কয়টি বিড়াল?",
    options: ["৪", "৮", "১৬", "২"],
    answer: "৪",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি যত বেশি নেবেন, তত পিছনে ফেলবেন?",
    options: ["পদচিহ্ন", "সময়", "টাকা", "বয়স"],
    answer: "পদচিহ্ন",
    difficulty: "easy"
  },
  {
    question: "কোন জিনিসটি কখনো মিথ্যা বলে না?",
    options: ["আয়না", "মানুষ", "বই", "ঘড়ি"],
    answer: "আয়না",
    difficulty: "easy"
  },
  {
    question: "যেটা ভাঙলে সবাই খুশি হয়?",
    options: ["রেকর্ড", "গ্লাস", "বাড়ি", "দরজা"],
    answer: "রেকর্ড",
    difficulty: "easy"
  },

  // ===== MEDIUM (20) =====
  {
    question: "একটি সংখ্যা ৩ দিয়ে ভাগ করলে ১ থাকে, ৫ দিয়ে ভাগ করলে ৩ থাকে—সংখ্যাটি কত?",
    options: ["13", "8", "18", "23"],
    answer: "13",
    difficulty: "medium"
  },
  {
    question: "একজন মানুষ ১০ তলা থেকে লাফ দিল কিন্তু কিছু হয়নি—কিভাবে?",
    options: ["প্রথম তলা থেকে লাফ দিয়েছে", "সে সুপারহিরো", "পানিতে পড়েছে", "স্বপ্ন ছিল"],
    answer: "প্রথম তলা থেকে লাফ দিয়েছে",
    difficulty: "medium"
  },
  {
    question: "যে জিনিসটি কিনলে কালো, ব্যবহার করলে লাল, ফেলে দিলে সাদা—কি?",
    options: ["কয়লা", "কাগজ", "লোহা", "পাথর"],
    answer: "কয়লা",
    difficulty: "medium"
  },
  {
    question: "একটি বাসে ১০ জন ছিল, ৫ জন নেমে গেল—কতজন বাকি?",
    options: ["৫", "১০", "১৫", "০"],
    answer: "৫",
    difficulty: "medium"
  },
  {
    question: "কোন জিনিসটি উল্টো করলে বাড়ে?",
    options: ["সংখ্যা ৬", "সময়", "নাম", "পানি"],
    answer: "সংখ্যা ৬",
    difficulty: "medium"
  },
  {
    question: "আপনি যতই নেবেন, এটা তত বড় হবে—কি?",
    options: ["গর্ত", "টাকা", "জমি", "সময়"],
    answer: "গর্ত",
    difficulty: "medium"
  },
  {
    question: "Which language runs in a browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript",
    difficulty: "medium"
  },
  {
    question: "কোন জিনিসটি কখনো থামে না?",
    options: ["সময়", "নদী", "বাতাস", "মানুষ"],
    answer: "সময়",
    difficulty: "medium"
  },
  {
    question: "একটি ঘড়ি দিনে কতবার ১২টা বাজে?",
    options: ["১", "২", "২৪", "১২"],
    answer: "২",
    difficulty: "medium"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!--", "**"],
    answer: "//",
    difficulty: "medium"
  },
  {
    question: "একটি জিনিস যত ভাগ করবেন, তত বড় হবে—কি?",
    options: ["গর্ত", "সমস্যা", "সময়", "জ্ঞান"],
    answer: "সমস্যা",
    difficulty: "medium"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape",
    difficulty: "medium"
  },
  {
    question: "কোন জিনিসটি আপনাকে ফলো করে কিন্তু আপনি ধরতে পারেন না?",
    options: ["ছায়া", "সময়", "বাতাস", "নাম"],
    answer: "ছায়া",
    difficulty: "medium"
  },
  {
    question: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Array"],
    answer: "Queue",
    difficulty: "medium"
  },
  {
    question: "একটি ট্রেন পূর্ব থেকে পশ্চিমে যাচ্ছে, ধোঁয়া কোন দিকে যাবে?",
    options: ["পূর্ব", "পশ্চিম", "উত্তর", "ধোঁয়া নেই"],
    answer: "ধোঁয়া নেই",
    difficulty: "medium"
  },
  {
    question: "Which HTML tag is used for images?",
    options: ["<img>", "<pic>", "<src>", "<image>"],
    answer: "<img>",
    difficulty: "medium"
  },
  {
    question: "যে জিনিসটি যত খালি করবেন, তত ভারী হবে—কি?",
    options: ["মাথা", "ব্যাগ", "মন", "বেলুন"],
    answer: "মন",
    difficulty: "medium"
  },
  {
    question: "একটি জিনিস সবসময় সামনে থাকে কিন্তু দেখা যায় না—কি?",
    options: ["ভবিষ্যৎ", "সময়", "ছায়া", "বাতাস"],
    answer: "ভবিষ্যৎ",
    difficulty: "medium"
  },
  {
    question: "Which keyword declares a variable in JS?",
    options: ["var", "int", "string", "define"],
    answer: "var",
    difficulty: "medium"
  },
  {
    question: "কোন জিনিসটি যতই বলবেন, ততই কমে?",
    options: ["গোপন কথা", "সময়", "শ্বাস", "টাকা"],
    answer: "গোপন কথা",
    difficulty: "medium"
  },

  // ===== HARD (10) =====
  {
    question: "একটি সংখ্যা নিজে দিয়ে ভাগ করলে ১ হয়, কিন্তু ০ দিয়ে ভাগ করলে?",
    options: ["Infinity", "0", "1", "Error"],
    answer: "Error",
    difficulty: "hard"
  },
  {
    question: "একটি পরিবারে ২ জন বাবা, ২ জন ছেলে—মোট কয়জন?",
    options: ["২", "৩", "৪", "৫"],
    answer: "৩",
    difficulty: "hard"
  },
  {
    question: "Which is NOT a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django",
    difficulty: "hard"
  },
  {
    question: "একটি ঘরে ৫টি মোমবাতি জ্বলছে, ২টি নিভে গেল—কয়টি বাকি?",
    options: ["৩", "৫", "২", "৭"],
    answer: "২",
    difficulty: "hard"
  },
  {
    question: "Which HTTP status code means Not Found?",
    options: ["200", "301", "404", "500"],
    answer: "404",
    difficulty: "hard"
  },
  {
    question: "একটি সংখ্যা দ্বিগুণ করলে ১০ হয়—সংখ্যাটি কত?",
    options: ["৫", "১০", "২০", "২"],
    answer: "৫",
    difficulty: "hard"
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Stack",
    difficulty: "hard"
  },
  {
    question: "একটি ঘড়ি ৩:১৫ এ থাকলে ঘড়ির কাঁটার মাঝে কোণ কত?",
    options: ["0°", "7.5°", "15°", "30°"],
    answer: "7.5°",
    difficulty: "hard"
  },
  {
    question: "Which operator is strict equality in JS?",
    options: ["==", "===", "!=", "="],
    answer: "===",
    difficulty: "hard"
  },
  {
    question: "একটি নদী শুকিয়ে গেলে কী থাকে?",
    options: ["পানি", "বালি", "মাছ", "ঢেউ"],
    answer: "বালি",
    difficulty: "hard"
  }
];