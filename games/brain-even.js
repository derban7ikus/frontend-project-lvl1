import getRandomNumber from '../src/randomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndAnswer = () => {
  const result = [];
  const randomNumber = getRandomNumber(0, 1000);
  result.push(randomNumber);
  if (randomNumber % 2 === 0) {
    result.push('yes');
  } else result.push('no');
  return result;
};

export { rules, questionAndAnswer };
