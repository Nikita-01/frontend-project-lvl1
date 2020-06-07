import readlineSync from "readline-sync";

export const greeting = () => {
    let userName = '';
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May i have your name? ');
    console.log('Hello, ' + userName + '!');
}