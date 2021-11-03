#!/usr/bin/env node
import gameStart from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAndAnswer = () => {
  const result = [];
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  result.push(randomNumber);
  if (randomNumber % 2 === 0) {
    result.push('yes');
  } else result.push('no');
  return result;
};
gameStart(rules, questionAndAnswer);
