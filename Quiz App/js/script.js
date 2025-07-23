// import { shift } from './functions.js';
let increment = 0;
let noteObtenue = 0;
let noteMaximale = 0;
const NOMBRE_DE_QUESTIONS = 4;


let question = document.getElementById("question");
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let answerThree = document.getElementById("answer3");
let answerFour = document.getElementById("answer4");
let answerList = document.getElementById("answer-list");
let myLiList = document.querySelectorAll("li");
let quizContent = document.getElementById("quiz-body");
let submitButton = document.getElementById("submit-button");
const lists = Array.from(myLiList);



const questions = [
    "1. Which is the largest animal in the world?",
    "2. Which ancient civilization is credited with inventing paper?",
    "3. What is the process by which plants convert light energy into chemical energy?",
    "4. Which African country is known as the 'Land of a Thousand Hills'?"
];
const answers = [
    ["Shark", "Blue Whale", "Elephant", "Girafe"],
    ["Roman Empire", "Ancient Egypt", "Imperial China", "Mesopotamia"],
    ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
    ["Kenya", "Ethiopia", "South Africa", "Rwanda"]
]
const trueAnswers = [
    "Blue whale",
    "Imperial China",
    "Photosynthesis",
    "Rwanda"
];

function shift(i) {
    question.innerText = questions[i+1];
    answerOne.innerText = answers[i+1][0];
    answerTwo.innerText = answers[i+1][1];
    answerThree.innerText = answers[i+1][2];
    answerFour.innerText = answers[i+1][3];
}

function resetQuiz() {
    increment = 0;
    noteMaximale = 0;
    noteObtenue = 0;
    quizContent.innerHTML = `
    <h2 class="quiz-body__title" id="question">1. Which is the largest animal in the world?</h2>
    <ul class="quiz-body__list-items" id="answer-list">
        <li class="quiz-body__item" id="answer1">Shark</li>
        <li class="quiz-body__item" id="answer2">Blue whale</li>
        <li class="quiz-body__item" id="answer3">Elephant</li>
        <li class="quiz-body__item" id="answer4">Girafe</li>
    </ul>
    `;

    submitButton.style.display = "block";
}


answerList.addEventListener("click", function(e) {
    for ( let i = 0; i < myLiList.length; i++ ) {
        if (myLiList[i].innerText === trueAnswers[increment]) {
            myLiList[i].style.backgroundColor = "green";
            noteMaximale++;
        }
    }
    if ( e.target.innerText === trueAnswers[increment] ) {
        e.target.style.backgroundColor = "green";
        noteObtenue++;
    } else {
        e.target.style.backgroundColor = "red";
    }
})

function nextPage() {
    if ( increment < NOMBRE_DE_QUESTIONS - 1 ) {
        shift(increment);
        lists.forEach( (list) => {
            list.style.backgroundColor = "transparent";
        });
        increment++;
    } else {
        quizContent.innerHTML = `
        <p style="margin-bottom: 5px"> You scored ${noteObtenue} out of ${noteMaximale}!</p>
        <button onclick="resetQuiz()" class="quiz-button">Play Again</button> 
        `;
        submitButton.style.display = "none";
    }

}