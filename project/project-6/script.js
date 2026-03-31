const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Markdown Language",
    d: "High Text Markup Language",
    correct: "b"
  },
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",
    d: "Computer Style Sheets",
    correct: "c"
  },
  {
    question: "What does JS stand for?",
    a: "Java System",
    b: "JavaScript",
    c: "Just Script",
    d: "Jolly Script",
    correct: "b"
  },
  {
    question: "Which tag is used to include JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<javascript>",
    d: "<code>",
    correct: "a"
  }
];

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  answerButtons.forEach(btn => {
    const key = btn.getAttribute("data-answer");
    btn.textContent = q[key];
    btn.classList.remove("selected");
  });

  selectedAnswer = null;
  nextBtn.disabled = true;
}

answerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    answerButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedAnswer = btn.getAttribute("data-answer");
    nextBtn.disabled = false;
  });
});

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) return;

  if (selectedAnswer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.style.display = "none";
  answerButtons.forEach(btn => btn.style.display = "none");
  nextBtn.style.display = "none";
  scoreEl.style.display = "block";
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
