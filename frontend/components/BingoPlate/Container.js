import { Component } from "react";
import styled from "styled-components";
import BingoCell from "../BingoCell";

class BingoPlate extends Component {
  render() {
    const { playerName, playerTarget, bingoSet } = this.props;
    return (
      <div>
        <Player>{playerName}</Player>
        <Plate>
          {playerTarget === 0
            ? bingoSet.player[0].map((number, idx) => (
                <BingoCell
                  player={"player1"}
                  number={number}
                  bingoSet={bingoSet}
                  activeklass={this._activeKlass(bingoSet.selectedNumber, number)}
                  key={idx}
                />
              ))
            : bingoSet.player[1].map((number, idx) => (
                <BingoCell
                  player={"player2"}
                  number={number}
                  bingoSet={bingoSet}
                  activeklass={this._activeKlass(bingoSet.selectedNumber, number)}
                  key={idx}
                />
              ))}
        </Plate>
        {bingoSet.gameStarted ? <TxtBingo>완성된 빙고 : 0</TxtBingo> : null}
      </div>
    );
  }
  _activeKlass = (selectedNumber, currentNumber) => {
    let state = null;
    selectedNumber.forEach(number => {
      if (number === currentNumber) {
        state = true;
      }
    });
    return state;
  };
}

const Player = styled.strong`
  margin-bottom: 20px;
  display: block;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
`;
const Plate = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid #333;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;
const TxtBingo = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export default BingoPlate;
