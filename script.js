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
   
    firstQuestion()
    
}
// quiz questions
var questionBank = [
    {
        question: "1. Commonly used data types do NOT include:",
        choices:[
        {text: "strings", correctAnswer: false} ,
        {text: "booleans", correctAnswer: true },
        {text: "alerts", correctAnswer: false},
        {text: "numbers", correctAnswer: false},
        ],
    },
    {
        question: "2. The condition in an if / else statement is enclosed with ______.",
        choices:[
        {text: "quotes", correctAnswer: false} ,
        {text: "curly brackets", correctAnswer: false },
        {text: "parenthesis", correctAnswer: true},
        {text: "square brackets", correctAnswer: false},
        ],
    },
];

function firstQuestion(){
displayQuestion(questionBank[currentQuestion])
   buttonA.addEventListener("click", chooseAnswer)
   buttonB.addEventListener("click", chooseAnswer)
   buttonC.addEventListener("click", chooseAnswer)
   buttonD.addEventListener("click", chooseAnswer)

 // questionBank.question++
  

   
}
function displayQuestion(questionBank) {
questionElement.innerText = questionBank.question

buttonA.innerHTML = questionBank.choices[0].text;
buttonA.setAttribute("choices", questionBank.choices[0].correctAnswer)

buttonB.innerHTML = questionBank.choices[1].text;
buttonB.setAttribute("choices", questionBank.choices[1].correctAnswer)

buttonC.innerHTML = questionBank.choices[2].text;
buttonC.setAttribute("choices", questionBank.choices[2].correctAnswer)

buttonD.innerHTML = questionBank.choices[3].text;
buttonD.setAttribute("choices", questionBank.choices[3].correctAnswer)

//questionBank.question++;
}

function chooseAnswer(event) {
    var chooseAnswer = event.target.getAttribute("choices");
    if (chooseAnswer === "true") {
        window.alert("Correct!")
        secondQuestion()
    }
    else {
        window.alert("Sorry that is incorrect.")
    }
}

function secondQuestion(){
  displayQuestion(questionBank[1])

}




//for(var i = 0; i < questionBank.length; i++) {
   // var questionName = questionBank[currentQuestion].question
   // var choicesName = questionBank[currentQuestion].choices
   // console.log(i)
//}

startButton.addEventListener('click', beginQuiz, ansButton, intro, )

