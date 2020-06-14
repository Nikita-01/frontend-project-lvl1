import readlineSync from 'readline-sync';

const brainGames = (questionOfGame, quest, game) => {
  let userName = '';
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May i have your name? ');
  console.log(`Hello,  ${userName}  !`);
  console.log(quest);
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const operatorIndex = Math.floor(Math.random() * 3);
    const searchingIndex = Math.floor(Math.random() * 10);
    const question = questionOfGame(firstNumber, secondNumber, operatorIndex, searchingIndex);
    const result = game(firstNumber, secondNumber, operatorIndex, searchingIndex);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(result)) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${result}\nLet's try again, ${userName} !`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName} !`);
};
export default brainGames;
