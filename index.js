const readlineSync = require("readline-sync");
const chalk = require("chalk");

const userName = readlineSync.question(chalk.blue("What is your Name ? "));

console.log(chalk.white.bgBlack.bold("Welcome " + userName + " to the game "));
console.log(chalk.green("------------------------------------"));

var score = 0;
const questionsArray = [
  {
    question: "where do I live ? ",
    answer: "Jammu"
  },
  {
    question: "where do I study ? ",
    answer: "kj somaiya"
  },
  {
    question: "what is my pet's name ? ",
    answer: "tyson"
  },
  {
    question: "Do i code(yes/no) ? ",
    answer: "yes"
  },
  {
    question: "Can i make a web app (yes/no) ? ",
    answer: "yes"
  }
];

const play = (question, answer) => {
  const userAnswer = readlineSync.question(chalk.blue(question));
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Right ✅"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong ❌"));
    score = score - 1;
  }
  console.log(chalk.grey("The Current score  is : " + score));
  console.log(chalk.green("------------------------------------"));
};

for (var i = 0; i < questionsArray.length; i++) {
  play(questionsArray[i].question, questionsArray[i].answer);
}
if (score > 0) {
  console.log(chalk.green("The total score  is : " + score));
} else {
  console.log(chalk.red("The total score  is : " + score));
}

if (score >= 2) {
  console.log("Wow 🤩");
} else {
  console.log("Need to know more 😅");
}
