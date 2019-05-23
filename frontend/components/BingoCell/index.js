import { connect } from "react-redux";
import Container from "./Container";
import { actionCreators as bingoAction } from "../../redux/modules/bingoSet.js";

const mapDispatchToProps = dispatch => {
  return {
    selectingNumber: event => {
      const { target } = event;
      dispatch(bingoAction.selectingNumber(Number(target.innerText)));
    },
    notTurn: () => {
      alert("잘못된 차레입니다.");
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
