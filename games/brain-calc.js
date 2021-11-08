import getRandomNumber from '../src/randomNumber.js';

const rules = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const randomOperatorNumber = getRandomNumber(0, 3);
  const operators = ['+', '-', '*'];
  const result = [];
  const operator = operators[randomOperatorNumber];

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
    default:
      correctAnswer = randomNumber1 * randomNumber2;
  }

  result.push(correctAnswer);

  return result;
};

export { rules, questionAndAnswer };
