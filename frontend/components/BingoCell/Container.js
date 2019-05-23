import { Component } from "react";
import styled from "styled-components";

class BingoCell extends Component {
  render() {
    const { player, selectingNumber, notTurn, number, bingoSet, activeklass } = this.props;
    return (
      <Button
        activeklass={activeklass}
        onClick={
          (player === "player1" && bingoSet.turn) || (player === "player2" && !bingoSet.turn)
            ? selectingNumber
            : notTurn
        }
      >
        {number}
      </Button>
    );
  }
}

const Button = styled.button`
  width: 20%;
  height: 20%;
  float: left;
  border: 1px solid #333;
  background-color: ${props => {
    if (props.activeklass) return "#287ac6";
  }};
  outline: none;
  color: ${props => {
    if (props.activeklass) return "#fff";
  }};
`;

export default BingoCell;
