#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let questionNumber = 1;
while (questionNumber < 4) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const answer = readlineSync.question(`Question: ${randomNumber} `);
  let correctAnswer = 'yes';

  if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    break;
  }
  if (questionNumber === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  questionNumber += 1;
}
