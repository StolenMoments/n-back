export default (N, randList, userInputList) => {
    // TODO
    // N, randList, userInputList 를 받아서 결과를 출력

    // 입력 받은 것들로 결과를 넣어두고
    // 입력 없는 경우는 다 X 처리

    const result = {};

    for (let i = N; i < randList.length; i++) {
        console.log(i + " 번 확인")
        if (!userInputList.hasOwnProperty(i)) result[i + 1] = 'N';
        else if (randList[i] === randList[i - N] && userInputList[i] === 'O')
            result[i + 1] = 'O';

        else if (randList[i] !== randList[i - N] && userInputList[i] === 'X')
            result[i + 1] = 'O';
        else
            result[i + 1] = 'X';
    }

    console.log(userInputList)
    console.log(result);
}