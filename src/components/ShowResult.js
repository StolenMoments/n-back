export default (N, randList, userInputList) => {

    const result = {};

    for (let i = N; i < randList.length; i++) {
        if (!userInputList.hasOwnProperty(i)) result[i + 1] = 'N';

        else if (
            (randList[i] === randList[i - N] && userInputList[i] === 'O')
            ||
            (randList[i] !== randList[i - N] && userInputList[i] === 'X')
        )
            result[i + 1] = 'O';

        else
            result[i + 1] = 'X';
    }

    let resultStr = "";

    for (let i = N + 1; i <= randList.length; i++)
        resultStr = resultStr + `${i}번째 : ${result[i]}\n`

    alert(resultStr);
}