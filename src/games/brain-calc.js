import brainGames from '../index.js';

const quest = 'What is the result of the expression?';
const calculator = (firstNumber, secondNumber, operatorIndex) => {
  if (operatorIndex === 0) {
    return (firstNumber - secondNumber);
  }
  if (operatorIndex === 1) {
    return (firstNumber + secondNumber);
  }
  return (firstNumber * secondNumber);
};
const question = (firstNumber, secondNumber, operatorIndex) => {
  const operators = ['-', '+', '*'];
  return (firstNumber + operators[operatorIndex] + secondNumber);
};
const brainCalc = () => {
  brainGames(question, quest, calculator);
};
export default brainCalc;
