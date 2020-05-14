import React, { useRef, useState } from 'react';
import Container from "./Container";
import Blocks from "./Blocks";

function makeRandom() {
    const rand = [];

    for (let i = 0; i < 20; i++)
        rand.push(Math.floor(Math.random() * 12));

    return rand;
}

const App = () => {

    const [start, setStart] = useState(true); // 입력 받기 전
    const [num, setNum] = useState(12); // Container에 전달할 props
    const rand = useRef(makeRandom());

    const handleOnClick = () => {
        setStart(false);
        let intervalCnt = 0;

        const interval = setInterval(() => {
            setNum(rand.current[intervalCnt]);
            console.log(rand.current[intervalCnt] + " 켜기");


            setTimeout(() => {
                setNum(12);
                intervalCnt++;
                console.log("위치 표시 끄기");
            }, 1000)

            if (intervalCnt === 5) {
                clearInterval(interval);
                console.log(" 인터벌 종료")
            }

        },3000)
    }

    return (
        <div>
            {
                start ?

                    <div>
                        N, Count 입력 받기 구현 예정 ㅎㅎ
                        <button onClick={handleOnClick}>게임 시작</button>
                    </div>

                    :

                    <div>
                        <Container num={num}>
                            <Blocks/>
                            <button style={{gridColumn: '1 / 3'}}>O</button>
                            <button style={{gridColumn: '3 / 5'}}>X</button>
                        </Container>
                    </div>
            }
        </div>
    )
}

export default App;
