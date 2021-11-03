#!/usr/bin/env node
import gameStart from '../src/index.js';

const rules = 'What is the result of the expression?';
const questionAndAnswer = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const randomNumber3 = Math.floor(Math.random() * 3);
  const operands = ['+', '-', '*'];
  const result = [];
  const operator = operands[randomNumber3];
  const question = `${randomNumber1} ${operator} ${randomNumber2} `;
  result.push(question);
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
  }
  result.push(correctAnswer);
  return result;
};
gameStart(rules, questionAndAnswer);
