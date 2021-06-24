import { connect } from "react-redux";
import Token from "../components/Token/Token";

import { changeCurrentToken } from "../actions";

const mapStateToProps = (state) => ({
  tokenList: state.tokenList,
  currentToken: state.currentToken,
  buttonType: "current",
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentToken: (token) => dispatch(changeCurrentToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);
