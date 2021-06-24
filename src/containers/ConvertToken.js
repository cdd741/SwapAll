import { connect } from "react-redux";
import Token from "../components/Token/Token";

import { changeConvertToken } from "../actions";

const mapStateToProps = (state) => ({
  tokenList: state.tokenList,
  convertToken: state.convertToken,
  buttonType: "convert",
});

const mapDispatchToProps = (dispatch) => ({
  changeConvertToken: (token) => dispatch(changeConvertToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);
