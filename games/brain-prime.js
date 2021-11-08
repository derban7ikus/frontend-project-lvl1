import getRandomNumber from '../src/randomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 1000);
  const result = [];
  let answer = '';
  const sqaureRoot = Math.ceil(Math.sqrt(randomNumber));

  if (randomNumber < 2) {
    answer = 'no';
  } else if (randomNumber === 2 || randomNumber === 3) {
    answer = 'yes';
  } else {
    for (let i = 2; i <= sqaureRoot; i += 1) {
      if (randomNumber % i === 0) {
        answer = 'no';
        break;
      }
      answer = 'yes';
    }
  }
  result.push(randomNumber);
  result.push(answer);
  return result;
};

export { rules, questionAndAnswer };
