
export const quest = 'What number is missing in the progression?';
export const progression = (firstNumber, secondNumber, operatorIndex, searchingIndex) => {
    const progressionNumbers = [firstNumber];
        for (let i = 1; i <= 9; i += 1) {
            progressionNumbers.push(progressionNumbers[i - 1] + Math.floor(secondNumber / 10));
        };
        const result = progressionNumbers[searchingIndex];
        return result;
}


export const question = (firstNumber, secondNumber, operatorIndex, searchingIndex) => {
    const progressionNumbers = [firstNumber];
    for (let i = 1; i <= 9; i += 1) {
        progressionNumbers.push(progressionNumbers[i - 1] + Math.floor(secondNumber / 10));
    };
    progressionNumbers[searchingIndex] = '..';
    const question = progressionNumbers.join(' ');
    return question;
}