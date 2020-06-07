export const quest = 'Find the greatest common divisor of given numbers.';
export const gcd = (firstNumber, secondNumber) => {
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
export const question = (firstNumber, secondNumber) => (firstNumber + ' ' + secondNumber);