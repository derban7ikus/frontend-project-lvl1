import readlineSync from 'readline-sync';

const gameStart = (rules, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const rounds = 3;
  for (let round = 1; round <= rounds; round += 1) {
    const roundData = questionAndAnswer();
    const question = roundData[0];
    const correctAnswer = String(roundData[1]);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
    if (round === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameStart;
