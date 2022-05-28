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
        var response = confirm(questionsArr[i].question)
        if (response) {
            numOfConfirms++
        }
        alert("You have scored " + numOfConfirms +" out of 5.")
    }


/*
function runQuiz() {
    var numOfConfirms = 0;
    for (var i = 0; i < questionsArr.length; i++) {
        var response = confirm(questionsArr[i].question)
        if (response) {
            numOfConfirms++
        }
    }


    var correct = [];
    questionArr.answer[0] = true;
    questionArr.answer[1] = false;
    questionArr.answer[2] = true;
    questionArr.answer[3] = true;
    questionArr.answer[4] = false;

//    var userInput = questionsArr[i].answer;

    var score = 0;

    for (var i = 0; i < questionsArr.answer.length; i++) {
        if (response[i] == correct[i]) {
            score += 1;
        } else {
            score += 0;
        }
    return score;
    }




/*
    function numOfTrues(questionsArr) {
        var counter = 0; 
        for (var i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i].answer === true) {
                counter++;
            }
        }
        return counter;
    }
    function numOfFalse(questionsArr) {
        var counter = 0;
        for (var i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i].answer === false) {
                counter++;
            }
        }
        return counter;
    }
*/
}

//console.log("number of trues = " + numOfTrues(questionsArr));
//console.log("number false = " + numOfFalse(questionsArr));



//runQuiz()