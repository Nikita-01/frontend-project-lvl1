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
