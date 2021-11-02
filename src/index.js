import readlineSync from 'readline-sync';

export const gameStart = (rules, question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const rounds = 3;
  for (let round = 1; round <= rounds; round += 1) {
    const roundData = question();
    const answer = readlineSync.question(roundData[0]);
    if (answer === roundData[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${roundData[1]}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
      }
    if (round === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
