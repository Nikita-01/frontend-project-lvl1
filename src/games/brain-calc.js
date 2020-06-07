
export const quest = 'What is the result of the expression?';
export const calculator = (firstNumber, secondNumber, operatorIndex) => {
            if (operatorIndex === 0) {
                return (firstNumber - secondNumber);
            } else if (operatorIndex === 1) {
                return (firstNumber + secondNumber);
            } else if (operatorIndex === 2) {
                return  (firstNumber * secondNumber);
            }

        };
export const question = (firstNumber, secondNumber, operatorIndex) => {
    const operators = ['-', '+', '*'];
    return (firstNumber + operators[operatorIndex] + secondNumber);
}