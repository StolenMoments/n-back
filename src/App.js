import React, { useRef, useState } from 'react';
import Container from "./components/Container";
import Blocks from "./components/Blocks";
import getResult from "./components/getResult";
import StyleButton from "./components/StyleButton";
import InputForm from "./components/InputForm";
import styled from 'styled-components'

function makeRandom(gameCnt) {
    const rand = [];

    for (let i = 0; i < gameCnt; i++)
        rand.push(Math.floor(Math.random() * 12));

    return rand;
}

const Modal = styled.div`
  z-index: 2;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: gray;
  opacity: 0.5;
`

const ResultWrapper = styled.div`
  z-index: 3;
  box-sizing: border-box;
  border-radius: 2rem;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 40%;
  background: white;
`

const ResultBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: 100px 100px;
  justify-content: center;
`

const App = () => {

    const [n, setN] = useState(2); // n-back의 n..
    const [gameCnt, setGameCnt] = useState(10); // 게임 횟수
    const [inputNeeded, setInputNeeded] = useState(true); // 입력 받기 전
    const [isGameEnd, setIsGameEnd] = useState(false) // 게임 종료 플래그
    const [divNum, setDivNum] = useState(12); // Container에 전달할 props. 12는 위치 표시 OFF 상태 의미
    const [inputAvailable, setInputAvailable] = useState(false); // 응답 여부 플래그
    const [userInputList, setUserInputList] = useState({}); // O,X 응답 결과 객체
    const [modalState, setModalState] = useState(false);
    const [results, setResults] = useState([]);

    const randList = useRef([]); // 난수 배열
    const idx = useRef(0); // 난수 배열 인덱스

    const handleOnClick = () => {
        setInputNeeded(false);
        randList.current = makeRandom(gameCnt);

        const interval = setInterval(() => {
            setDivNum(randList.current[idx.current]);
            setInputAvailable(true);

            if (idx.current + 1 === gameCnt) {
                clearInterval(interval);
                setTimeout(() => setIsGameEnd(true), 1000);
            }

            setTimeout(() => {
                setDivNum(12);
                setInputAvailable(false);
                idx.current++;
            }, 1000)
        }, 2000)
    }

    const handleAnswerOnClick = (inputAvailable, inputType) => {
        if (inputAvailable) {
            setUserInputList({
                    ...userInputList,
                    [idx.current]: inputType
                }
            );
            setInputAvailable(false);
        }
    }


    return (
        <>
            {
                modalState ?
                    <>
                        <Modal onClick={() => setModalState(false)}/>
                        <ResultWrapper>
                            <ResultBlock>
                                {
                                    results.map(result => {
                                        return (
                                            <div>
                                                {result}
                                            </div>
                                        )
                                    })
                                }
                            </ResultBlock>
                        </ResultWrapper>
                    </>
                    :
                    <div></div>
            }
            {
                inputNeeded ?
                    <>
                        <header style={{ textAlign: "center", fontSize: "3rem" }}>
                            N-Back : {n}-Back, 게임 횟수 : {gameCnt}
                        </header>
                        <InputForm handleOnClick={handleOnClick}
                                   setN={setN}
                                   setGameCnt={setGameCnt}/>
                    </>

                    :

                    <>
                        <Container num={divNum}>
                            <Blocks/>
                            { // 입력이 가능할 때 O, X 버튼 표시
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

                            { // 게임 끝나면 결과보기, 다시하기 버튼 보이기 가능
                                isGameEnd ?
                                    <>
                                        <StyleButton style={{
                                            gridRow: '5',
                                            gridColumn: '1 / 3',
                                            background: "black",
                                            color: "white"
                                        }}
                                                     onClick={() => {
                                                         setResults(getResult(n, randList.current, userInputList));
                                                         setModalState(true)
                                                     }}
                                        >
                                            결과보기
                                        </StyleButton>
                                        <StyleButton style={{
                                            gridRow: '5',
                                            gridColumn: '3 / 5',
                                            background: "black",
                                            color: "white"
                                        }}
                                                     onClick={() => {
                                                         idx.current = 0;
                                                         setInputAvailable(true);
                                                         setInputNeeded(true);
                                                         setIsGameEnd(false);
                                                     }}
                                        >
                                            다시하기
                                        </StyleButton>
                                    </>

                                    : <span> </span>

                            }
                        </Container>
                    </>
            }
        </>
    )
}

export default App;
