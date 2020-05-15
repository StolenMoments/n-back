import React from "react";
import StyleButton from "./StyleButton";
import Container from "./Container";

const inputForm = ({ handleOnClick, setN, setGameCnt }) => {
    return (
        <Container>
            <StyleButton onClick={() => setN(2)}>2-Back</StyleButton>
            <StyleButton onClick={() => setGameCnt(10)}>10회</StyleButton>
            <StyleButton
                onClick={handleOnClick}
                style={{gridColumn: "3 / 5", gridRow: "1 / 3", background: "black", color: "white"}}>
                게임 시작
            </StyleButton>
            <StyleButton onClick={() => setN(3)}>3-Back</StyleButton>
            <StyleButton onClick={() => setGameCnt(20)} style={{}}>20회</StyleButton>
        </Container>
    )
}

export default inputForm