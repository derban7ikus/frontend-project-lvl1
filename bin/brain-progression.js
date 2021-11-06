#!/usr/bin/env node
import gameStart from '../src/index.js';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rules = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  const result = [1, 2];
  const progressionStart = getRandomInt(1, 100);
  const progressionStep = getRandomInt(2, 10);
  const progressionLength = getRandomInt(5, 15);
  const progressionAnswer = getRandomInt(0, progressionLength);
  const answerTemp = [];

  let progressionNumber = progressionStart;
  answerTemp.push(progressionNumber);

  for (let i = 1; i < progressionLength; i += 1) {
    progressionNumber += progressionStep;
    answerTemp.push(progressionNumber);
  }

  const separator = ' ';

  result[1] = answerTemp[progressionAnswer];
  answerTemp[progressionAnswer] = '..';
  result[0] = answerTemp.join(separator);
  return result;
};

gameStart(rules, questionAndAnswer);
