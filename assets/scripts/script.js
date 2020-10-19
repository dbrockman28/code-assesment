let quizIntroTitle = document.querySelector("#quiz-intro-title");
let quizIntro = document.querySelector("#quiz-intro");
let startButton = document.querySelector("#start-quiz");

let quizStart = function() {
    quizIntro.remove();
    quizIntroTitle.remove();
    startButton.remove();
}

startButton.addEventListener("click", quizStart);