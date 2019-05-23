import { connect } from "react-redux";
import Container from "./Container";
import { actionCreators as bingoAction } from "../../redux/modules/bingoSet.js";

const mapStateToProps = state => {
  const { bingoSet } = state;
  return {
    bingoSet
  };
};
const mapDispatchToProps = dispatch => {
  const randomNumber = () => {
    const maxNumber = 25;
    let playerSet = [[], []];
    playerSet.forEach((player, idx) => {
      for (let i = 1; i <= maxNumber; i++) {
        playerSet[idx].push(i);
      }
      playerSet[idx].sort(() => 0.5 - Math.random());
    });
    return playerSet;
  };
  return {
    handleGameStart: () => {
      dispatch(bingoAction.gameStart(randomNumber()));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
