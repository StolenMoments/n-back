import React, { useRef, useState } from 'react';
import Container from "./components/Container";
import Blocks from "./components/Blocks";
import ShowResult from "./components/ShowResult";
import StyleButton from "./components/StyleButton";

function makeRandom() {
    const rand = [];

    for (let i = 0; i < 20; i++)
        rand.push(Math.floor(Math.random() * 12));

    return rand;
}


const App = () => {

    const [start, setStart] = useState(true); // 입력 받기 전
    const [num, setNum] = useState(12); // Container에 전달할 props. 12는 위치 표시 OFF 상태 의미
    const [flag, setFlag] = useState(false); // 응답 여부 플래그
    const [answers, setAnswers] = useState({}); // O,X 응답 결과 객체
    const rand = useRef(makeRandom()); // 난수 배열
    const idx = useRef(0); // 난수 배열 인덱스

    const handleOnClick = () => {
        setStart(false);

        const interval = setInterval(() => {
            setNum(rand.current[idx.current]);
            console.log(rand.current[idx.current] + " 켜기");
            setFlag(true);


            setTimeout(() => {
                setNum(12);
                console.log("위치 표시 끄기");
                setFlag(false);
                idx.current++;
            }, 1500)

            if (idx.current === 5) {
                clearInterval(interval);
                console.log(" 인터벌 종료")
            }

        }, 2500)
    }

    const handleAnswerOnClick = (flag, type) => {
        if (flag) {
            setAnswers({
                    ...answers,
                    [idx.current]: type
                }
            );
            console.log(type + ' 추가')
            setFlag(false);
        }
    }


    return (
        <div>
            {
                start ?

                    <div style={{ textAlign: "center" }}>
                        N, Count 입력 받기 구현 예정 ㅎㅎ
                        <StyleButton onClick={handleOnClick}>게임 시작</StyleButton>
                    </div>

                    :

                    <div>
                        <Container num={num}>
                            <Blocks/>

                            <StyleButton style={{ gridColumn: '1 / 3', marginRight: "3rem" }}
                                         onClick={() => handleAnswerOnClick(flag, 'O')}
                            >
                                O
                            </StyleButton>

                            <StyleButton style={{ gridColumn: '3 / 5', marginLeft: "3rem" }}
                                         onClick={() => handleAnswerOnClick(flag, 'X')}
                            >
                                X
                            </StyleButton>

                            <StyleButton style={{ gridRow: '5', gridColumn: '2 / 4', background: "aqua" }}
                                         onClick={() => ShowResult(2, rand.current, answers)}
                            >
                                결과보기
                            </StyleButton>
                        </Container>
                    </div>
            }
        </div>
    )
}

export default App;
