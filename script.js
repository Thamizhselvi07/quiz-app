let questions = [];
let currentIndex = 0;
let score = 0;
let correctStreak = 0;
let selectedLanguage = "en";
let selectedDifficulty = "beginner";

// Load JSON Questions
fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
  });

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function showLanguage() {
  showSection("language");
}

function setLanguage(lang) {
  selectedLanguage = lang;
  showSection("difficulty");
}

function setDifficulty(level) {
  selectedDifficulty = level;
  currentIndex = 0;
  score = 0;
  correctStreak = 0;
  showQuestion();
}

function showQuestion() {
  showSection("quiz");
  let filtered = questions.filter(q => q.level === selectedDifficulty);
  let q = filtered[currentIndex];

  document.getElementById("question-text").innerText = q[`question_${selectedLanguage}`];
  
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  
  q[`options_${selectedLanguage}`].forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, q.answer);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    correctStreak++;
    document.getElementById("feedback").innerText = "✅ Correct!";
    if (correctStreak === 3) {
      alert("🎉 Congratulations! 3 in a row!");
      correctStreak = 0;
    }
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong!";
    correctStreak = 0;
  }
}

function nextQuestion() {
  currentIndex++;
  let filtered = questions.filter(q => q.level === selectedDifficulty);
  if (currentIndex < filtered.length) {
    showQuestion();
  } else {
    alert("Quiz Completed! Your score: " + score);
    showSection("landing");
  }
}
