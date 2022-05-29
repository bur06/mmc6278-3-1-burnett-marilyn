// Your code here
var questionsArr = [
    {
    question: "Gatorade was formulated at UF",
    answer: true
    },
    {
    question: "There are two UF mascots.",
    answer: true
    },
    {
    question: "UF has had three Heisman winning quarterbacks.",
    answer: true
    },
    {
    question: "UF football field is nicknamed The Swamp.",
    answer: true
    },
    {
    question: "Tim Tebow graduated UF before playing in the NFL.",
    answer: true
    }
];
Array.isArray(questionsArr);


const quizBtn = document.getElementById("start-quiz");
quizBtn.addEventListener("click", runQuiz());

function runQuiz() {
    var numOfConfirms = 0;
    for (var i = 0; i < questionsArr.length; i++) {
        var response = confirm(questionsArr[i].question);
        if (response) {
            numOfConfirms++;
        }
    }

    var result = Math.round(numOfConfirms / 5) * 100;
    alert("Your quiz score = " + result +"% !");
}

runQuiz();