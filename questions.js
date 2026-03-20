const questions = [
  // ===== EASY (40) =====
  {
    question: "যেটার মুখ আছে কিন্তু কথা বলে না?",
    options: ["ঘড়ি", "মানুষ", "রোবট", "আয়না"],
    answer: "ঘড়ি",
    difficulty: "easy",
  },
  {
    question: "আমি যত শুকাই, তত ভিজি—আমি কে?",
    options: ["তোয়ালে", "পানি", "বৃষ্টি", "ঘাম"],
    answer: "তোয়ালে",
    difficulty: "easy",
  },
  {
    question: "দাঁত আছে কিন্তু কামড়ায় না?",
    options: ["চিরুনি", "কুকুর", "মানুষ", "বাঘ"],
    answer: "চিরুনি",
    difficulty: "easy",
  },
  {
    question: "সবসময় সামনে থাকে কিন্তু দেখা যায় না?",
    options: ["ভবিষ্যৎ", "সময়", "ছায়া", "বাতাস"],
    answer: "ভবিষ্যৎ",
    difficulty: "easy",
  },
  {
    question: "ভাঙলে শব্দ হয় না?",
    options: ["নীরবতা", "গ্লাস", "পাথর", "লোহা"],
    answer: "নীরবতা",
    difficulty: "easy",
  },
  {
    question: "সবসময় বাড়ে, কমে না?",
    options: ["বয়স", "সময়", "টাকা", "চুল"],
    answer: "বয়স",
    difficulty: "easy",
  },
  {
    question: "উড়ে কিন্তু ডানা নেই?",
    options: ["সময়", "পাখি", "বিমান", "ঘুড়ি"],
    answer: "সময়",
    difficulty: "easy",
  },
  {
    question: "ফল দেয় না এমন গাছ?",
    options: ["বংশগাছ", "আম", "কাঁঠাল", "নারকেল"],
    answer: "বংশগাছ",
    difficulty: "easy",
  },
  {
    question: "কেটে ফেললেও আবার বড় হয়?",
    options: ["চুল", "গাছ", "দড়ি", "কাপড়"],
    answer: "চুল",
    difficulty: "easy",
  },
  {
    question: "৫ + ৫ × ২ = ?",
    options: ["১৫", "২০", "২৫", "৩০"],
    answer: "১৫",
    difficulty: "easy",
  },

  {
    question: "কোন মাসে ২৮ দিন?",
    options: ["সব মাসে", "ফেব্রুয়ারি", "মার্চ", "জানুয়ারি"],
    answer: "সব মাসে",
    difficulty: "easy",
  },
  {
    question: "যত নেবেন তত বড় হয়?",
    options: ["গর্ত", "সময়", "টাকা", "পথ"],
    answer: "গর্ত",
    difficulty: "easy",
  },
  {
    question: "ধরা যায় কিন্তু দেখা যায় না?",
    options: ["শ্বাস", "বাতাস", "সময়", "স্বপ্ন"],
    answer: "শ্বাস",
    difficulty: "easy",
  },
  {
    question: "মাথা আছে, শরীর নেই?",
    options: ["মুদ্রা", "মানুষ", "পাখি", "ঘড়ি"],
    answer: "মুদ্রা",
    difficulty: "easy",
  },
  {
    question: "সবসময় দৌড়ায় কিন্তু হাঁটে না?",
    options: ["নদী", "ঘোড়া", "মানুষ", "সময়"],
    answer: "নদী",
    difficulty: "easy",
  },
  {
    question: "৪ কোণে ৪ বিড়াল—মোট কয়?",
    options: ["৪", "৮", "১৬", "২"],
    answer: "৪",
    difficulty: "easy",
  },
  {
    question: "যত বেশি নেবেন তত পিছনে ফেলবেন?",
    options: ["পদচিহ্ন", "সময়", "টাকা", "বয়স"],
    answer: "পদচিহ্ন",
    difficulty: "easy",
  },
  {
    question: "কখনো মিথ্যা বলে না?",
    options: ["আয়না", "মানুষ", "ঘড়ি", "বই"],
    answer: "আয়না",
    difficulty: "easy",
  },
  {
    question: "ভাঙলে সবাই খুশি?",
    options: ["রেকর্ড", "গ্লাস", "বাড়ি", "দরজা"],
    answer: "রেকর্ড",
    difficulty: "easy",
  },
  {
    question: "দিনে ২৪ ঘণ্টা—সত্য?",
    options: ["হ্যাঁ", "না", "কখনো", "জানি না"],
    answer: "হ্যাঁ",
    difficulty: "easy",
  },

  {
    question: "Which language runs in browser?",
    options: ["JavaScript", "Python", "C++", "Java"],
    answer: "JavaScript",
    difficulty: "easy",
  },
  {
    question: "HTML is used for?",
    options: ["Structure", "Styling", "Logic", "Database"],
    answer: "Structure",
    difficulty: "easy",
  },
  {
    question: "Which tag shows image?",
    options: ["<img>", "<pic>", "<src>", "<image>"],
    answer: "<img>",
    difficulty: "easy",
  },
  {
    question: "CSS used for?",
    options: ["Styling", "Logic", "Database", "Server"],
    answer: "Styling",
    difficulty: "easy",
  },
  {
    question: "Which is programming language?",
    options: ["JavaScript", "HTML", "CSS", "All"],
    answer: "All",
    difficulty: "easy",
  },

  // ===== MEDIUM (40) =====
  {
    question: "২ + ২ × ২ = ?",
    options: ["৬", "৮", "৪", "১০"],
    answer: "৬",
    difficulty: "medium",
  },
  {
    question: "একজন মানুষ ১০ তলা থেকে লাফ দিল কিন্তু কিছু হয়নি—কেন?",
    options: ["প্রথম তলা", "পানি", "স্বপ্ন", "সুপারহিরো"],
    answer: "প্রথম তলা",
    difficulty: "medium",
  },
  {
    question: "কালো কিনলে, লাল ব্যবহার, সাদা ফেলা?",
    options: ["কয়লা", "কাগজ", "লোহা", "পাথর"],
    answer: "কয়লা",
    difficulty: "medium",
  },
  {
    question: "ঘড়ি দিনে কয়বার ১২টা বাজে?",
    options: ["২", "১", "২৪", "১২"],
    answer: "২",
    difficulty: "medium",
  },
  {
    question: "ধোঁয়া কোন দিকে যাবে? (ইলেকট্রিক ট্রেন)",
    options: ["কোনো না", "পূর্ব", "পশ্চিম", "উত্তর"],
    answer: "কোনো না",
    difficulty: "medium",
  },

  {
    question: "Which symbol is JS comment?",
    options: ["//", "#", "<!--", "**"],
    answer: "//",
    difficulty: "medium",
  },
  {
    question: "FIFO কোনটা?",
    options: ["Queue", "Stack", "Tree", "Array"],
    answer: "Queue",
    difficulty: "medium",
  },
  {
    question: "Binary of 2?",
    options: ["10", "01", "11", "00"],
    answer: "10",
    difficulty: "medium",
  },
  {
    question: "Which company created JS?",
    options: ["Netscape", "Google", "Apple", "Microsoft"],
    answer: "Netscape",
    difficulty: "medium",
  },
  {
    question: "Which is fastest memory?",
    options: ["Cache", "RAM", "ROM", "Disk"],
    answer: "Cache",
    difficulty: "medium",
  },

  {
    question: "১, ৩, ৬, ১০, ?",
    options: ["১৫", "১২", "১৬", "১৩"],
    answer: "১৫",
    difficulty: "medium",
  },
  {
    question: "যত ভাগ করবেন তত বাড়ে?",
    options: ["সমস্যা", "সময়", "টাকা", "গর্ত"],
    answer: "সমস্যা",
    difficulty: "medium",
  },
  {
    question: "কোন জিনিস আপনাকে ফলো করে?",
    options: ["ছায়া", "সময়", "বাতাস", "নাম"],
    answer: "ছায়া",
    difficulty: "medium",
  },
  {
    question: "১৫% of 200?",
    options: ["৩০", "২০", "২৫", "৩৫"],
    answer: "৩০",
    difficulty: "medium",
  },
  {
    question: "HTTP used for?",
    options: ["Web", "Mail", "File", "Security"],
    answer: "Web",
    difficulty: "medium",
  },

  {
    question: "যত বলবেন তত কমে?",
    options: ["গোপন কথা", "সময়", "শ্বাস", "টাকা"],
    answer: "গোপন কথা",
    difficulty: "medium",
  },
  {
    question: "উল্টো করলে ৬ → ?",
    options: ["৯", "৮", "৭", "১০"],
    answer: "৯",
    difficulty: "medium",
  },
  {
    question: "সবসময় চলে কিন্তু থামে না?",
    options: ["সময়", "নদী", "বাতাস", "ঘড়ি"],
    answer: "সময়",
    difficulty: "medium",
  },

  // ===== HARD (20) =====
  {
    question: "Binary search complexity?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    answer: "O(log n)",
    difficulty: "hard",
  },
  {
    question: "LIFO কোনটা?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Stack",
    difficulty: "hard",
  },
  {
    question: "404 means?",
    options: ["Not Found", "OK", "Error", "Redirect"],
    answer: "Not Found",
    difficulty: "hard",
  },
  {
    question: "Which is NoSQL DB?",
    options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
    answer: "MongoDB",
    difficulty: "hard",
  },

  {
    question: "২ বাবা + ২ ছেলে = ?",
    options: ["৩", "৪", "২", "৫"],
    answer: "৩",
    difficulty: "hard",
  },
  {
    question: "৫ মোমবাতি, ২ নিভে গেল—কয়টা থাকবে?",
    options: ["২", "৩", "৫", "১"],
    answer: "২",
    difficulty: "hard",
  },
  {
    question: "Clock angle at 3:15?",
    options: ["7.5°", "15°", "30°", "0°"],
    answer: "7.5°",
    difficulty: "hard",
  },
  {
    question: "[] == false ?",
    options: ["true", "false", "error", "undefined"],
    answer: "true",
    difficulty: "hard",
  },

  {
    question: "Which operator strict equality?",
    options: ["===", "==", "!=", "="],
    answer: "===",
    difficulty: "hard",
  },
  {
    question: "Recursion means?",
    options: ["Self-calling function", "Loop", "Condition", "Array"],
    answer: "Self-calling function",
    difficulty: "hard",
  },
];
