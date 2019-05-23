import { connect } from "react-redux";
import Container from "./Container";

const mapStateToProps = state => {
  const { bingoSet } = state;
  return {
    bingoSet
  };
};

export default connect(mapStateToProps)(Container);
