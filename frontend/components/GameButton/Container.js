import { Component } from "react";
import styled from "styled-components";

class GameButton extends Component {
  render() {
    const {
      handleGameStart,
      bingoSet: { gameStarted }
    } = this.props;
    return <Button onClick={handleGameStart}>{gameStarted ? "다시하기" : "게임시작"}</Button>;
  }
}

const Button = styled.button`
  width: 200px;
  padding: 10px 0;
  margin: 0 auto;
  display: block;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  border-radius: 10px;
  background-color: #287ac6;
`;

export default GameButton;
