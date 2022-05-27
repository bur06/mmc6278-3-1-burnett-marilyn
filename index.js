// Your code here
function runQuiz() {
var questionsArr = [
    {
      question: 'Gatorade was formulated at UF',
      answer: true
    },
    {
      question: 'There is only one mascot.',
      answer: false
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
      question: 'Tim Tebow graduated UF after playing in the NFL.',
      answer: false
    }
]

for (var i=0; i<questionsArr.length; i++) {
    var ask = questionsArr[i];
    var answers = confirm(ask)
}

}
//runQuiz()