let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userName = "";
let selectedSet = "A";
let correctCount = 0;
let maxPossibleScore = 0;
let answered = false;
let timerId = null;
let timeLeft = 10;
let lastEarnedTk = 0;

const QUIZ_DONE_KEY = "eidSalamiQuizDone";
const BEST_KEY = "eidSalamiBestTk";
const RESULT_KEY = "eidSalamiLastResult";

const weights = {
  easy: 3,
  medium: 5,
  hard: 7
};

const setConfig = {
  A: { count: 10, maxTk: 40 },
  B: { count: 15, maxTk: 50 },
  C: { count: 20, maxTk: 100 }
};

function showScreen(id) {
  ["startScreen", "loadingScreen", "quizScreen", "resultScreen"].forEach((screenId) => {
    document.getElementById(screenId).classList.toggle("hidden", screenId !== id);
  });
}

function updateBestScore() {
  const best = Number(localStorage.getItem(BEST_KEY) || 0);
  document.getElementById("bestScore").innerText = `সর্বোচ্চ অর্জিত সালামি: ${best} টাকা`;
}

function lockIfCompleted() {
  const isDone = localStorage.getItem(QUIZ_DONE_KEY) === "true";
  const notice = document.getElementById("lockedNotice");
  if (!isDone) {
    notice.classList.add("hidden");
    return;
  }

  const saved = JSON.parse(localStorage.getItem(RESULT_KEY) || "null");
  const detail = saved
    ? `নাম: ${saved.name} | সঠিক: ${saved.correct}/${saved.total} | সালামি: ${saved.tk} টাকা`
    : "এই ডিভাইস থেকে কুইজ একবার সম্পন্ন হয়েছে।";

  notice.innerText = `এই কুইজ একবারের বেশি দেওয়া যাবে না। ${detail}`;
  notice.classList.remove("hidden");
}

function isQuizLocked() {
  return localStorage.getItem(QUIZ_DONE_KEY) === "true";
}

function startQuiz(set) {
  if (isQuizLocked()) {
    showToast("এই ডিভাইসে কুইজ ইতিমধ্যে সম্পন্ন হয়েছে।");
    lockIfCompleted();
    return;
  }

  const nameInput = document.getElementById("username");
  userName = nameInput.value.trim();
  if (!userName) {
    showToast("অনুগ্রহ করে নাম লিখুন।");
    nameInput.focus();
    return;
  }

  selectedSet = set;
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  answered = false;
  timeLeft = 10;

  const count = setConfig[set].count;
  currentQuestions = shuffleArray(questions).slice(0, count);
  maxPossibleScore = currentQuestions.reduce((sum, q) => sum + weights[q.difficulty], 0);

  showScreen("loadingScreen");
  setTimeout(() => {
    showScreen("quizScreen");
    loadQuestion();
  }, 700);
}

function loadQuestion() {
  clearInterval(timerId);
  answered = false;
  timeLeft = 10;

  const q = currentQuestions[currentIndex];
  document.getElementById("questionText").innerText = q.question;
  document.getElementById("progressText").innerText = `প্রশ্ন ${currentIndex + 1}/${currentQuestions.length}`;
  updateEarnedUi();
  updateTimerUi();

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.innerText = opt;
    btn.addEventListener("click", () => selectAnswer(opt));
    optionsEl.appendChild(btn);
  });

  timerId = setInterval(() => {
    timeLeft -= 1;
    updateTimerUi();

    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (!answered) {
        revealAnswer(null);
        answered = true;
        setTimeout(nextQuestion, 800);
      }
    }
  }, 1000);
}

function updateTimerUi() {
  document.getElementById("timerText").innerText = `সময়: ${timeLeft} সেকেন্ড`;
}

function updateEarnedUi() {
  lastEarnedTk = Math.round((score / maxPossibleScore) * setConfig[selectedSet].maxTk);
  document.getElementById("earnedText").innerText = `আয়: ${lastEarnedTk} টাকা`;
}

function revealAnswer(selected) {
  const q = currentQuestions[currentIndex];
  const optionButtons = document.querySelectorAll("#options .option");

  optionButtons.forEach((btn) => {
    const value = btn.innerText;

    if (selected && value === selected) {
      btn.classList.add("selected");
    }

    if (value === q.answer) {
      btn.classList.add("correct");
    } else if (selected && value === selected) {
      btn.classList.add("wrong");
    }

    btn.disabled = true;
  });
}

function selectAnswer(selected) {
  if (answered) {
    return;
  }

  answered = true;
  clearInterval(timerId);

  const q = currentQuestions[currentIndex];
  if (selected === q.answer) {
    score += weights[q.difficulty];
    correctCount += 1;
  }

  updateEarnedUi();
  revealAnswer(selected);
  setTimeout(nextQuestion, 800);
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex >= currentQuestions.length) {
    finishQuiz();
    return;
  }
  loadQuestion();
}

function finishQuiz() {
  clearInterval(timerId);
  showScreen("resultScreen");

  const percent = Math.round((score / maxPossibleScore) * 100);
  const earnedTk = Math.round((score / maxPossibleScore) * setConfig[selectedSet].maxTk);
  lastEarnedTk = earnedTk;

  document.getElementById("resultTitle").innerText = `🎉 ${userName}, আপনি পেয়েছেন ${earnedTk} টাকা ঈদ সালামি!`;
  document.getElementById("resultMeta").innerText = `সঠিক উত্তর: ${correctCount}/${currentQuestions.length}`;
  document.getElementById("resultPercent").innerText = `স্কোর: ${percent}%`;
  document.getElementById("shareCardName").innerText = `${userName}`;
  document.getElementById("shareCardCorrect").innerText = `সঠিক উত্তর: ${correctCount}/${currentQuestions.length} • স্কোর: ${percent}%`;
  document.getElementById("shareCardTk").innerText = `অর্জিত সালামি: ${earnedTk} টাকা`;

  const best = Number(localStorage.getItem(BEST_KEY) || 0);
  if (earnedTk > best) {
    localStorage.setItem(BEST_KEY, String(earnedTk));
  }

  localStorage.setItem(QUIZ_DONE_KEY, "true");
  localStorage.setItem(
    RESULT_KEY,
    JSON.stringify({
      name: userName,
      tk: earnedTk,
      correct: correctCount,
      total: currentQuestions.length,
      percent
    })
  );
  updateBestScore();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

async function shareResult() {
  const result = JSON.parse(localStorage.getItem(RESULT_KEY) || "null");
  if (!result) {
    showToast("শেয়ার করার মতো ফলাফল পাওয়া যায়নি।");
    return;
  }

  const text = `🎉 ${result.name} এর ঈদ সালামি কুইজ ফলাফল\nসঠিক উত্তর: ${result.correct}/${result.total}\nঅর্জিত সালামি: ${result.tk} টাকা`;
  const cardBlob = await createShareCardBlob(result);

  if (!cardBlob) {
    showToast("শেয়ার কার্ড তৈরি করা যায়নি।");
    return;
  }

  try {
    const cardFile = new File([cardBlob], "eid-salami-card.png", { type: "image/png" });
    if (navigator.share && navigator.canShare?.({ files: [cardFile] })) {
      await navigator.share({
        title: "Eid Salami Quiz Result",
        text,
        files: [cardFile]
      });
      return;
    }

    const url = URL.createObjectURL(cardBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "eid-salami-card.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      // Clipboard may be blocked in some contexts; card download remains available.
    }
    showToast("ডিজাইন কার্ড ডাউনলোড হয়েছে। এখন শেয়ার করুন!");
  } catch (error) {
    showToast("শেয়ার করা যায়নি। আবার চেষ্টা করুন।");
  }
}

async function downloadSalamiCard() {
  const result = JSON.parse(localStorage.getItem(RESULT_KEY) || "null");
  if (!result) {
    showToast("এখনও কোনো ফলাফল নেই। আগে কুইজ শেষ করুন।");
    return;
  }

  const cardBlob = await createShareCardBlob(result);
  if (!cardBlob) {
    showToast("সালামি কার্ড তৈরি করা যায়নি।");
    return;
  }

  const url = URL.createObjectURL(cardBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "eid-salami-card.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("সালামি কার্ড ডাউনলোড হয়েছে।");
}

function goHome() {
  showScreen("startScreen");
  updateBestScore();
  lockIfCompleted();
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawIslamicPattern(ctx, x, y, width, height, cellSize, color, alpha) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = alpha;

  for (let row = y; row < y + height + cellSize; row += cellSize) {
    for (let col = x; col < x + width + cellSize; col += cellSize) {
      const cx = col + cellSize / 2;
      const cy = row + cellSize / 2;
      const r = cellSize * 0.38;

      ctx.beginPath();
      ctx.moveTo(cx, cy - r);
      ctx.lineTo(cx + r, cy);
      ctx.lineTo(cx, cy + r);
      ctx.lineTo(cx - r, cy);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  ctx.restore();
}

async function createShareCardBlob(result) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch (error) {
      // If fonts are not ready, fall back to available fonts.
    }
  }
//deployment comment
  const bg = ctx.createLinearGradient(0, 0, 1080, 1350);
  bg.addColorStop(0, "#0f0f0f");
  bg.addColorStop(1, "#1b1b1b");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawIslamicPattern(ctx, 0, 0, canvas.width, canvas.height, 88, "#b88a24", 0.08);

  const glow = ctx.createRadialGradient(540, 260, 40, 540, 260, 500);
  glow.addColorStop(0, "rgba(245, 158, 11, 0.42)");
  glow.addColorStop(1, "rgba(245, 158, 11, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawRoundedRect(ctx, 90, 170, 900, 980, 42);
  ctx.fillStyle = "#171717";
  ctx.strokeStyle = "#5a420d";
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.stroke();

  ctx.save();
  drawRoundedRect(ctx, 90, 170, 900, 980, 42);
  ctx.clip();
  drawIslamicPattern(ctx, 90, 170, 900, 980, 70, "#c99b35", 0.09);
  ctx.restore();

  ctx.textAlign = "center";

  ctx.fillStyle = "#fcd77f";
  ctx.font = "700 60px 'Hind Siliguri', sans-serif";
  ctx.fillText("☪︎  Eid Salami Quiz  ☪︎", 540, 315);

  ctx.fillStyle = "#e5e5e5";
  ctx.font = "600 40px 'Hind Siliguri', sans-serif";
  ctx.fillText("🕌 ঈদ মোবারক 🕌", 540, 390);

  ctx.fillStyle = "#f6f6f6";
  ctx.font = "700 76px 'Hind Siliguri', sans-serif";
  ctx.fillText(result.name, 540, 500);

  ctx.fillStyle = "#d4d4d4";
  ctx.font = "600 46px 'Hind Siliguri', sans-serif";
  ctx.fillText(`সঠিক উত্তর: ${result.correct}/${result.total}`, 540, 610);
  ctx.fillText(`স্কোর: ${result.percent}%`, 540, 680);

  drawRoundedRect(ctx, 190, 740, 700, 160, 28);
  ctx.fillStyle = "#2a2109";
  ctx.fill();
  ctx.strokeStyle = "#7a5a17";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#fde68a";
  ctx.font = "700 62px 'Hind Siliguri', sans-serif";
  ctx.fillText(`অর্জিত সালামি: ${result.tk} টাকা`, 540, 840);

  ctx.fillStyle = "#9ca3af";
  ctx.font = "500 34px 'Hind Siliguri', sans-serif";
  ctx.fillText("🌙 আপনার ঈদ ভালো কাটুক! সবার সাথে আনন্দে কাটূক! 🌙", 540, 1020);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2100);
}

updateBestScore();
lockIfCompleted();