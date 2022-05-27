// Your code here
function runQuiz() {
    var questionsArr = [
        {
        question: 'Gatorade was formulated at UF',
        answer: true
        },
        {
        question: 'There are two UF mascots.',
        answer: true
        },
        {
        question: 'UF has had three Heisman winning quarterbacks.',
        answer: true
        },
        {
        question: 'UF football field is nicknamed The Swamp.',
        answer: true
        },
        {
        question: 'Tim Tebow graduated UF before playing in the NFL.',
        answer: true
        }
    ]

    var numOfTrues = 0;
    for (var i=0; i<questionsArr.length; i++) {
        var ask = questionsArr[i];
        var answers = confirm(ask);
        if (answers) {
            numOfTrues++;
        }
    }
    if (numOfTrues = 5) {
        alert("Congrats! You gave all correct answers.");
    } else {
        alert("Sorry, one or more answers are not correct.");
    }

}

//runQuiz()