export default (N, rand, answers) => {
    //TODO
    // N, rand, result를 받아서 결과를 출력

    // 입력받은 것들로 결과를 넣어두고
    // 입력 없는 경우는 다 X 처리

    const result = {};

    for (let i = N; i < 6; i++) {
        console.log(i + " 번 확인")
        if (!answers.hasOwnProperty(i)) result[i + 1] = 'N';
        else if (rand[i] === rand[i - N] && answers[i] === 'O')
            result[i + 1] = 'O';

        else if (rand[i] !== rand[i - N] && answers[i] === 'X')
            result[i + 1] = 'O';
        else
            result[i + 1] = 'X';
    }

    console.log(answers)
    console.log(result);
}