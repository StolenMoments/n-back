import React, { useRef, useState } from 'react';
import Container from "./components/Container";
import Blocks from "./components/Blocks";
import Button from "@material-ui/core/Button";

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
    const [result, setResult] = useState([]); // O,X 응답 배열
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
            }, 1000)

            if (idx.current === 5) {
                clearInterval(interval);
                console.log(" 인터벌 종료")
            }

        },3000)
    }

    const handleAnswerOnClick = (flag, type) => {
        if (flag) {
            setResult(result.concat({[idx.current]: type}));
            console.log(type + ' 푸시')
            setFlag(false);
        }
    }


    return (
        <div>
            {
                start ?

                    <div style={{textAlign: "center"}}>
                        N, Count 입력 받기 구현 예정 ㅎㅎ
                        <button onClick={handleOnClick}>게임 시작</button>
                    </div>

                    :

                    <div>
                        <Container num={num}>
                            <Blocks/>
                            <Button style={{gridColumn: '1 / 3', marginRight: "3rem"}} onClick={() => handleAnswerOnClick(flag, 'O')}>O</Button>
                            <Button style={{gridColumn: '3 / 5', marginLeft: "3rem"}} onClick={() => handleAnswerOnClick(flag, 'X')}>X</Button>
                            <Button style={{gridRow: '5', gridColumn:'2 / 4'}} onClick={() => console.log(result)}>결과보기</Button>
                        </Container>
                    </div>
            }
        </div>
    )
}

export default App;
