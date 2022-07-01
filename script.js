var startButton = document.getElementById('start-quiz')
var ansButton = document.getElementById('answers')
var intro = document.getElementById('introduction')
var questionElement = document.getElementById('question')
var timer = document.getElementById("timer")
var container = document.getElementById("quiz-container")
var viewHighScores = document.getElementById("high-score")
var viewScore = document.getElementById("viewScores")
var currentQuestion = 0
var currentChoices = 0
var buttonA = document.getElementById('a')
var buttonB = document.getElementById('b')
var buttonC = document.getElementById('c')
var buttonD = document.getElementById('d')
var timeRemaining = 60;
var scores = 0;

viewScore.style.display = "none"

function beginQuiz(){
    console.log('started')
    startButton.style.display = "none";
    ansButton.style.display = "";
    intro.style.display = "none"
   
   
    firstQuestion()
    countdownTimer()
    
}
// quiz questions
var questionBank = [
    {
        question: "1. Commonly used data types do NOT include:",
        choices:[
        {text: "1. strings", correctAnswer: false},
        {text: "2. booleans", correctAnswer: true },
        {text: "3. alerts", correctAnswer: false},
        {text: "4. numbers", correctAnswer: false},
        ],
    },
    {
        question: "2. The condition in an if / else statement is enclosed with ______.",
        choices:[
        {text: "1. quotes", correctAnswer: false},
        {text: "2. curly brackets", correctAnswer: false },
        {text: "3. parenthesis", correctAnswer: true},
        {text: "4. square brackets", correctAnswer: false},
        ],
    },
    {
        question: "3. Arrays in javaScript can be used to store ______.",
        choices:[
        {text: "1. numbers and strings", correctAnswer: false},
        {text: "2. other arrays", correctAnswer: false },
        {text: "3. all of the above", correctAnswer: true},
        {text: "4. booleans", correctAnswer: false},
        ],
    },
    {
        question: "4. string values must be enclosed within ____ when being assigned to variables.",
        choices:[
        {text: "1. commas", correctAnswer: false},
        {text: "2. curly brackets", correctAnswer: false},
        {text: "3. quotes", correctAnswer: true},
        {text: "4. parenthesis", correctAnswer: false},
        ],
    },
    {
        question: "5. A very useful tool used during development and debugging for printing content to the debugger is",
        choices:[
        {text: "1. javaScript", correctAnswer: false} ,
        {text: "2. terminal/bash", correctAnswer: false },
        {text: "3. console.log", correctAnswer: true},
        {text: "4. for loops", correctAnswer: false},
        ],
    },
   
];
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
    
 

   
    
    }

function firstQuestion(){
    displayQuestion(questionBank[0])

    buttonA.addEventListener("click", chooseAnswer)
    buttonB.addEventListener("click", chooseAnswer)
    buttonC.addEventListener("click", chooseAnswer)
    buttonD.addEventListener("click", chooseAnswer)

    function chooseAnswer(event) {
        var chooseAnswer = event.target.getAttribute("choices");
        if (chooseAnswer === "true") {
            window.alert("Correct!")
            secondQuestion()
            
        }
        else {
            window.alert("Sorry that is incorrect.")
            timeRemaining = timeRemaining - 10
        }
    }
}
function secondQuestion(){
    displayQuestion(questionBank[1])
    buttonA.addEventListener("click", chooseAnswer)
    buttonB.addEventListener("click", chooseAnswer)
    buttonC.addEventListener("click", chooseAnswer)
    buttonD.addEventListener("click", chooseAnswer)

    function chooseAnswer(event) {
        var chooseAnswer = event.target.getAttribute("choices");
        if (chooseAnswer === "true") {
            thirdQuestion()
            
    }
    else{
        
    }
    }
}
function thirdQuestion(){
    displayQuestion(questionBank[2])
    buttonA.addEventListener("click", chooseAnswer)
    buttonB.addEventListener("click", chooseAnswer)
    buttonC.addEventListener("click", chooseAnswer)
    buttonD.addEventListener("click", chooseAnswer)
    
    function chooseAnswer(event) {
        var chooseAnswer = event.target.getAttribute("choices");
        if (chooseAnswer === "true") {
            fourthQuestion()
            
        }
        else{
            
        }
        
    }
}
    
function fourthQuestion(){
    displayQuestion(questionBank[3])
    buttonA.addEventListener("click", chooseAnswer)
    buttonB.addEventListener("click", chooseAnswer)
    buttonC.addEventListener("click", chooseAnswer)
    buttonD.addEventListener("click", chooseAnswer)
    
    function chooseAnswer(event) {
        var chooseAnswer = event.target.getAttribute("choices");
        if (chooseAnswer === "true") {
            fifthQuestion()
    
        }
        else{
            
        }
        
    }
}

function fifthQuestion(){
    displayQuestion(questionBank[4])
    buttonA.addEventListener("click", chooseAnswer)
    buttonB.addEventListener("click", chooseAnswer)
    buttonC.addEventListener("click", chooseAnswer)
    buttonD.addEventListener("click", chooseAnswer)

    function chooseAnswer(event) {
        var chooseAnswer = event.target.getAttribute("choices");
        if (chooseAnswer === "true"){
            finalScore()
        }
        else{
                    
        }
    }
 }

 function countdownTimer(){
    var timeInterval = setInterval(function(){
    timer.textContent = "Time: " + timeRemaining
    timeRemaining --
    
    if (timeRemaining < 10){
    timer.textContent= "10 seconds remaining!  " + timeRemaining
    timeRemaining --
}
},1000)
}

function finalScore(){
    window.alert("Congrats! your score is " + timeRemaining)
    container.style.display = "none"
    timer.style.display = "none"
    viewHighScores.style.display = "none"
    viewScore.textContent = "Your score: " + timeRemaining
    viewScore.style.display = "" 

}

startButton.addEventListener('click', beginQuiz, ansButton, intro, )

