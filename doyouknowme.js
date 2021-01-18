var readlineSync = require('readline-sync');
var score = 0;

// function
function play (question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    score++;
    console.log("You are right!");
  }
  else{
    console.log("You are wrong!");
  }
    console.log("Your score is: ", score);
    console.log("---***---***---***---");
    console.log("  ");
}

// array initialisation

var quiz= [{question: "Where do I live? " , answer: "navsari"} , {question: "Which is my fav colour? ", answer: "black"}, {question: "Which is my fav superhero? ", answer: "batman"}, {question: "What is my profession? ", answer: "student"}, {question: "Which youtuber do i like the most? ", answer: "PewDiePie"}, {question: "Who is my mentor? ", answer: "Tanay Pratap"}]


// welcome message
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " to the quiz.");
console.log("  ");


for (var i=0; i<=quiz.length -1; i++){
  play(quiz[i].question, quiz[i].answer);
}
console.log("Thank you for playin. Your final score is: ",score); 