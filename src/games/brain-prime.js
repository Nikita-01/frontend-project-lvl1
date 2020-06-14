import brainGames from '../index.js';

const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result = 0;
  if (num > 3) {
    for (let i = Math.floor(num / 2); i > 1; i -= 1) {
      if ((num % i) === 0) {
        result += 1;
      }
    }
  }
  return (result === 0) ? 'yes' : 'no';
};
const question = (firstNumber) => firstNumber;
const brainPrime = () => brainGames(question, quest, isPrime);
export default brainPrime;
