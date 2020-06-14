import brainGames from '../index.js';

const quest = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');
const question = (firstNumber) => firstNumber;
const brainEven = () => brainGames(question, quest, isEven);
export default brainEven;
