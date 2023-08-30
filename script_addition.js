const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const questionText = document.getElementById('questionText');
const userAnswerInput = document.getElementById('userAnswer');
const submitButton = document.getElementById('submitButton');
const resultContainer = document.getElementById('resultContainer');
const resultText = document.getElementById('resultText');
const nextButton = document.getElementById('nextButton');
const scoreContainer = document.getElementById('scoreContainer');
const scoreElement = document.getElementById('score');

let score = 0;
let currentQuestion = 0;
const numberOfQuestions = 5;

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 25) + 1;
  const num2 = Math.floor(Math.random() * 25) + 1;
  const correctAnswer = num1 + num2;

  questionText.textContent = `? ${num1} + ${num2} :כמה זה`;
  return correctAnswer;
};

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  questionContainer.style.display = 'block';
  nextQuestion();
});

const nextQuestion = () => {
  if (currentQuestion < numberOfQuestions) {
    userAnswerInput.value = '';
    resultContainer.style.display = 'none';
    const correctAnswer = generateQuestion();
    
    submitButton.addEventListener('click', () => {
      const userAnswer = parseInt(userAnswerInput.value);
      if (userAnswer === correctAnswer) {
        resultText.textContent = '!נכון';
        score++;
      } else {
        resultText.textContent = `${correctAnswer} :לא נכון. התשובה הנכונה היא`;
      }
      resultContainer.style.display = 'block';
    });

    currentQuestion++;
  } else {
    questionContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    document.getElementById("your_final_score").innerHTML = `${score} :הניקוד הסופי שלך הוא`;
  }
};

nextButton.addEventListener('click', nextQuestion);
