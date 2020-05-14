import React from "react";
import StyleButton from "./StyleButton";
import Container from "./Container";

const inputForm = ({ handleOnClick, setGameNum, setGameCnt }) => {
    return (
        <Container>
            <StyleButton onClick={() => setGameNum(2)}>2-Back</StyleButton>
            <StyleButton onClick={() => setGameCnt(10)}>10회</StyleButton>
            <StyleButton onClick={handleOnClick}>게임 시작</StyleButton>
        </Container>
    )
}

export default inputForm