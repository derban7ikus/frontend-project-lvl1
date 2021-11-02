#!/usr/bin/env node
import { gameStart } from "../src/index.js";

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = () => {
  const result = [];
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  result.push(`Question: ${randomNumber} `);
  if (randomNumber % 2 === 0) {
    result.push('yes');
  } else result.push('no');
  return result;
}
gameStart(rules, question);
