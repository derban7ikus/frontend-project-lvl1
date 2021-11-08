import getRandomNumber from '../src/randomNumber.js';

const rules = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  const result = [1, 2];
  const progressionStart = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(2, 10);
  const progressionLength = getRandomNumber(5, 15);
  const progressionAnswer = getRandomNumber(0, progressionLength);
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

export { rules, questionAndAnswer };
