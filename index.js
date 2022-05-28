// Your code here
function runQuiz() {
    var questionsArr = [
        {
        question: "Gatorade was formulated at UF",
        answer: true
        },
        {
        question: "There is one UF mascot.",
        answer: false
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
        question: "Tim Tebow graduated UF after playing in the NFL.",
        answer: false
        }
    ];
    Array.isArray(questionsArr);

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

    var userInput[] = questionArr.answer.value;

    function getScore() {
        var score = 0;

        for (var i = 0; i < questionsArr.answer.length; i++) {
            if (userInput[i] == correct[i]) {
                score += 1;
            } else {
                score += 0;
            }
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



runQuiz()