import React, { useRef, useState } from 'react';
import Container from "./components/Container";
import Blocks from "./components/Blocks";
import ShowResult from "./components/ShowResult";
import StyleButton from "./components/StyleButton";
import InputForm from "./components/InputForm";

function makeRandom() {
    const rand = [];

    for (let i = 0; i < 20; i++)
        rand.push(Math.floor(Math.random() * 12));

    return rand;
}


const App = () => {

    const [n, setN] = useState(2); // n-back의 n..
    const [gameCnt, setGameCnt] = useState(20); // 게임 횟수
    const [inputNeeded, setInputNeeded] = useState(true); // 입력 받기 전
    const [isGameEnd, setIsGameEnd] = useState(false) // 게임 종료 플래그
    const [divNum, setDivNum] = useState(12); // Container에 전달할 props. 12는 위치 표시 OFF 상태 의미
    const [inputAvailable, setInputAvailable] = useState(false); // 응답 여부 플래그
    const [userInput, setUserInput] = useState({}); // O,X 응답 결과 객체

    const rand = useRef(makeRandom()); // 난수 배열
    const idx = useRef(0); // 난수 배열 인덱스

    const handleOnClick = () => {
        setInputNeeded(false);
        console.log(n + " " + gameCnt);

        const interval = setInterval(() => {
            setDivNum(rand.current[idx.current]);
            console.log(rand.current[idx.current] + " 켜기");
            setInputAvailable(true);


            setTimeout(() => {
                setDivNum(12);
                console.log("위치 표시 끄기");
                setInputAvailable(false);
                idx.current++;
            }, 1400)

            if (idx.current === gameCnt) {
                clearInterval(interval);
                console.log(" 인터벌 종료")
                setIsGameEnd(true);
            }

        }, 2800)
    }

    const handleAnswerOnClick = (flag, type) => {
        if (flag) {
            setUserInput({
                    ...userInput,
                    [idx.current]: type
                }
            );
            console.log(type + ' 추가')
            setInputAvailable(false);
        }
    }


    return (
        <div>
            {
                inputNeeded ? <InputForm handleOnClick={handleOnClick}
                                   setGameNum={setN}
                                   setGameCnt={setGameCnt}

                    />

                    :

                    <div>
                        <Container num={divNum}>
                            <Blocks/>

                            {
                                (inputAvailable && idx.current >= n) ?
                                    <>
                                        <StyleButton style={{ gridColumn: '1 / 3', marginRight: "3rem" }}
                                                     onClick={() => handleAnswerOnClick(inputAvailable, 'O')}
                                        >
                                            O
                                        </StyleButton>

                                        <StyleButton style={{ gridColumn: '3 / 5', marginLeft: "3rem" }}
                                                     onClick={() => handleAnswerOnClick(inputAvailable, 'X')}
                                        >
                                            X
                                        </StyleButton>
                                    </>

                                    : <span> </span>
                            }

                            {
                                isGameEnd ?
                                    <StyleButton style={{ gridRow: '5', gridColumn: '2 / 4', background: "aqua" }}
                                                 onClick={() => ShowResult(2, rand.current, userInput)}
                                    >
                                        결과보기
                                    </StyleButton>

                                    : <span> </span>

                            }

                        </Container>
                    </div>
            }
        </div>
    )
}

export default App;
