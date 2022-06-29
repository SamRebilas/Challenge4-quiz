var startButton = document.getElementById('start-quiz')
var ansButton = document.getElementById('answers')
var intro = document.getElementById('introduction')
var questionElement = document.getElementById('question')
//var choicesElement = document.getElementById('1')
var currentQuestion = 0
var currentChoices = 0
var buttonA = document.getElementById('a')
var buttonB = document.getElementById('b')
var buttonC = document.getElementById('c')
var buttonD = document.getElementById('d')


function beginQuiz(){
    console.log('started')
    startButton.style.display = "none";
    ansButton.style.display = "";
    intro.style.display = "none"
   
    nextQuestion()
    
}
// quiz questions
var questions = [
    {
        question: "1. Commonly used data types do NOT include:",
        correctAnswer: buttonB,
        choiceA: "strings", 
        choiceB: "booleans", 
        choiceC: "alerts", 
        choiceD: "numbers",
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
function displayQuestion(questions) {
questionElement.innerText = questions.question

buttonA.innerHTML = questions.choiceA;
buttonB.innerHTML = questions.choiceB;
buttonC.innerHTML = questions.choiceC;
buttonD.innerHTML = questions.choiceD;
if (buttonB.clicked)
console.log(buttonB)

}



for(var i = 0; i < questions.length; i++) {
    var questionName = questions[currentQuestion].question
    var choicesName = questions[currentQuestion].choices
    console.log(i)
}

startButton.addEventListener('click', beginQuiz, ansButton, intro, )

