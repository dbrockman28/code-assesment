let startButton = document.querySelector("#start-quiz");
let pageContent = document.querySelector("#page-content");
let introTitle = document.querySelector("#quiz-intro-title");
let intro = document.querySelector("#quiz-intro");

let time = document.querySelector("#time");
let countdown = 100;
let quiz = [
    {
        question: "Commonly used data types do NOT include ______.",
        answers: ["numbers", "alerts", "strings", "booleans"],
        correct: 2
    },
    {
        question: "The condition in an if/else statement is closed with ______?",
        answers: ["curly braces", "quotes", "brackets", "parenthesis"],
        correct: 3
    },
    {
        question: "Arrays in Javascript can be used to store ______?",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: 4
    }
]

let quizStart = function() {
    intro.remove();
    introTitle.remove();
    startButton.remove();
    startCountdown();

    let question1 = quiz[0].question;
    let questionEl = document.createElement("h1");
    questionEl.className = "question";
    questionEl.innerText = question1;
    pageContent.appendChild(questionEl);
    let answers1 = quiz[0].answers;
    for (i = 0; i < answers1.length; i++) {
        console.log(answers1[i])
    }
};

let startCountdown = function() {
        setInterval(function() {
        if (countdown > 0) {
            countdown--;
        } time.innerText = countdown;
    }, 1000);
};

startButton.addEventListener("click", quizStart);