export default (N, randList, userInputList) => {
    const result = [];

    for (let i = N; i < randList.length; i++) {
        console.log(i);
        if (!userInputList.hasOwnProperty(i)) result.push('N');

        else if (
            (randList[i] === randList[i - N] && userInputList[i] === 'O')
            ||
            (randList[i] !== randList[i - N] && userInputList[i] === 'X')
        )
            result.push('O');

        else
            result.push('X');
    }

    return result;
}