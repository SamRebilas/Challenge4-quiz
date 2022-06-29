var startButton = document.getElementById('start-quiz')
var ansButton = document.getElementById('answers')
var intro = document.getElementById('introduction')
var questionElement = document.getElementById('question')
var choicesElement = document.getElementById("button1")



function beginQuiz(){
    console.log('started')
    startButton.style.display = "none";
    ansButton.style.display = "";
    intro.style.display = "none"
   //question.style.display = [questions]
    currentQuestion = 0
    nextQuestion()
    
}
// quiz questions
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        correctAnswer: 1,
        choices: ["strings", "booleans", "alerts", "numbers"],
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        correctAnswer: 2,
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    },
];

function nextQuestion(){
   displayQuestion(questions[currentQuestion])
}
function displayQuestion(question) {
questionElement.innerText = question.question
choicesElement.innerText = question.choices
}

startButton.addEventListener('click', beginQuiz, ansButton, intro )

