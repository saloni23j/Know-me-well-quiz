var readlineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readlineSync.question("Hi bestie!!!What's your name?");
console.log("So " +userName+ " Let's find out if you are actually my bestieeeee");
var score = 0;
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.green("You are right"));
    score++;
  }
  else{
    console.log(chalk.red("you are wrong"));
  }
  console.log("***************");
}
var questions = [
  {
    question: "What's my Zodiac?\na)Capricorn\nb)Leo\nc)Cancer\nd)Aquarious",
    answer: "c"
  },
  {
    question: "What's my comfort food?\na)Pizza\nb)Chicken momos\nc)Pav-Bhaji\nd)paani-poori\n",
    answer: "b"
  },
  {
    question: "What is my favorite TV show?\na)The Office\nb)Breaking Bad\nc)Friends\nd)Game of Thrones\n",
    answer: "c"
  },
  {
    question: "When is my Birthday?\na)25th June\nb)18th July\nc)23rd June\nd)8th October\n",
    answer: "c"
  },
  {
    question: "How many pets do I want?\na)Four\nb)4\nc)3+1\nd)5-1\n",
    answer: "b"
  },
  {
    question: "What do i like more? Tea or Coffee?",
    answer: "Coffee"
  }
]
for(var i = 0 ; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}
if(score>4)
console.log("Yayyyyy you my best frnd")
else
console.log("Saanp paal rkhe hainnnn")