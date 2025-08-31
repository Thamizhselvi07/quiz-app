// Sample questions
const questions = [
  {
    level: "Beginner",
    question_en: "What is the SI unit of force?",
    question_ta: "வலுவின் SI அலகு எது?",
    options_en: ["Newton", "Joule", "Pascal", "Watt"],
    options_ta: ["நியூட்டன்", "ஜூல்", "பாஸ்கல்", "வாட்"],
    answer: 0
  },
  {
    level: "Beginner",
    question_en: "Which planet is known as the Red Planet?",
    question_ta: "சிவப்பு கோள் என்று அழைக்கப்படும் கோள் எது?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_ta: ["பூமி", "செவ்வாய்", "குரு", "வியாழன்"],
    answer: 1
  }
];

let currentQ = 0;
let streak = 0;
let selected = null;
let tamilMode = false;

const qElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const feedbackElem = document.getElementById("feedback");
const streakElem = document.getElementById("streakMsg");
const submitBtn = document.getElementById("submitBtn");
const langBtn = document.getElementById("langToggle");

function loadQuestion() {
  const q = questions[currentQ];
  qElem.textContent = tamilMode ? q.question_ta : q.question_en;

  optionsElem.innerHTML = "";
  (tamilMode ? q.options_ta : q.options_en).forEach((opt, i) => {
    const div = document.createElement("div");
    div.textContent = opt;
    div.className = "option";
    div.onclick = () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
      selected = i;
    };
    optionsElem.appendChild(div);
  });

  feedbackElem.textContent = "";
  streakElem.textContent = "";
  selected = null;
}

submitBtn.onclick = () => {
  if (selected === null) {
    feedbackElem.textContent = "Please select an answer.";
    feedbackElem.style.color = "red";
    return;
  }
  const q = questions[currentQ];
  if (selected === q.answer) {
    feedbackElem.textContent = "✅ Correct!";
    feedbackElem.style.color = "green";
    streak++;
    if (streak % 3 === 0) {
      streakElem.textContent = "🎉 Congrats! 3 in a row!";
    }
  } else {
    feedbackElem.textContent = "❌ Wrong. Try again!";
    feedbackElem.style.color = "red";
    streak = 0;
  }
  setTimeout(() => {
    currentQ = (currentQ + 1) % questions.length;
    loadQuestion();
  }, 1500);
};

langBtn.onclick = () => {
  tamilMode = !tamilMode;
  langBtn.textContent = tamilMode ? "Switch to English" : "Switch to தமிழ்";
  loadQuestion();
};

// Initialize
loadQuestion();
