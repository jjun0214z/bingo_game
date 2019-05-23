import { Component } from "react";
import styled from "styled-components";
import BingoPlate from "../BingoPlate";

class PlateWrapper extends Component {
  state = {
    playerName: ["player1", "player2"]
  };
  render() {
    const { playerName } = this.state;
    const { bingoSet } = this.props;
    return (
      <Bingo>
        <PlateWrap>
          {playerName.map((name, idx) => (
            <BingoPlate playerName={name} bingoSet={bingoSet} playerTarget={idx} key={idx} />
          ))}
        </PlateWrap>
        {bingoSet.gameStarted ? <PlayerTurn turn={bingoSet.turn} /> : null}
      </Bingo>
    );
  }
}
const PlayerTurn = ({ turn }) => (turn ? <Turn>턴: player1</Turn> : <Turn>턴: player2</Turn>);
const Bingo = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 100px 0 50px;
`;

const PlateWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Turn = styled.p`
  margin-top: 50px;
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
  text-align: center;
`;

export default PlateWrapper;
