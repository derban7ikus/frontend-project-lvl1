import getRandomNumber from '../src/randomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let result = num1 % num2;
  if (result === 0) {
    return num2;
  }
  let divisor = num2 % result;
  while (divisor !== 0) {
    const temp = divisor;
    divisor = result % divisor;
    result = temp;
  }
  return result;
};

const questionAndAnswer = () => {
  const result = [];
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);

  result.push(`${randomNumber1} ${randomNumber2} `);

  let correctAnswer = 0;
  if (randomNumber1 > randomNumber2) {
    correctAnswer = gcd(randomNumber1, randomNumber2);
  } else {
    correctAnswer = gcd(randomNumber2, randomNumber1);
  }
  result.push(correctAnswer);
  return result;
};

export { rules, questionAndAnswer };
