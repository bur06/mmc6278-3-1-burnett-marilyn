// Your code here

function runQuiz() {
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

    var numOfConfirms = 0;
    for (var i = 0; i < questionsArr.length; i++) {
        var response = confirm((questionsArr[i].question))
        if (response) {
            numOfConfirms++
        }
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