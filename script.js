let current = 0, total = 5; // example total (set according to your quiz)

// Initialize app
function init() {
  console.log("Quiz ready!");
}

// Start quiz
function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  current = 0;
  updateProgress();
  renderQuestion();
}

// Next question
function nextQuestion() {
  if (current < total) {
    current++;
    updateProgress();
    renderQuestion();
  } else {
    document.getElementById("congrats").textContent = "🎉 You completed the quiz!";
  }
}

// Update progress bar
function updateProgress() {
  document.getElementById("progress").style.width = ((current/total) * 100) + "%";
}

// Render question (placeholder)
function renderQuestion() {
  document.getElementById("question-text").textContent = "Question " + (current + 1) + " goes here.";
  const options = document.getElementById("options");
  options.innerHTML = "";

  ["Option A", "Option B", "Option C", "Option D"].forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    options.appendChild(btn);
  });
}

// Handle answer selection
function selectAnswer(index) {
  document.getElementById("feedback").textContent = "You selected option " + (index + 1);
}

// Save settings (dummy for now)
function saveSettings() {
  console.log("Settings saved");
}

// Dummy working set builder
function buildWorkingSet() {
  console.log("Working set built");
}
