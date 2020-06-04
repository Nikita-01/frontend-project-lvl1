import readlineSync from 'readline-sync';

let userName = '';
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May i have your name? ');
  console.log('Hello, ' + userName + '!');
};
const isEven = (num) => (num % 2 === 0) ? 'yes': 'no';
export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log('Question: ' + number);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(number) === answer) {
      console.log('Correct!');
      if (i === 3) {
        console.log('Congratulations, ' + userName + '!');
      }
    } else {
      i = 4;
      console.log(answer + ' is wrong answer ;(. Correct answer was ' + isEven(number));
      console.log('Let\'s try again, ' + userName + '!');
    }
  }
};

export const calculator = () => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const operators = ['-', '+', '*'];
    const operatorIndex = Math.floor(Math.random() * 3);
    const question = firstNumber + operators[operatorIndex] + secondNumber;
    const resultOf = () => {
      let result = 0;
      if (operatorIndex === 0) {
      return result = firstNumber - secondNumber;
      } else if (operatorIndex === 1) {
        return result = firstNumber + secondNumber;
      } else if (operatorIndex === 2) {
        return  result = firstNumber * secondNumber;
      }

    };
    console.log('Question: ' + question);
    const answer = readlineSync.question('Your answer: ');
    if (answer == resultOf()) {
      console.log('Correct!');
      if (i === 3) {
        console.log('Congratulations, ' + userName + '!');
      }
    } else {
      i = 4;
      console.log(answer + ' is wrong answer ;(. Correct answer was ' + resultOf());
      console.log('Let\'s try again, ' + userName + '!');
    }
  }
};

export const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const question = firstNumber + ' ' + secondNumber;
    const resultOf = () => {
      let result = 1;
      let max;
      if (firstNumber > secondNumber) {
        max = firstNumber;
      } else {
        max = secondNumber;
      }
      for (let i = max; i > 1; i -= 1) {
        if (((firstNumber % i) === 0) && ((secondNumber % i) === 0)) {
          return result = i;
        }
      }
      return  result;
    };
    console.log('Question: ' + question);
    const answer = readlineSync.question('Your answer: ');
    if (answer == resultOf()) {
      console.log('Correct!');
      if (i === 3) {
        console.log('Congratulations, ' + userName + '!');
      }
    } else {
      i = 4;
      console.log(answer + ' is wrong answer ;(. Correct answer was ' + resultOf());
      console.log('Let\'s try again, ' + userName + '!');

    }
    ;
  }
  ;
};