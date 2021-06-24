import { connect } from "react-redux";
import App from "../App";

// mock api interface
import { getUserCapitals, getPriceList } from "../utils/api";

import { setTokenList, changeAmount } from "../actions";

const userCapitalPromise = getUserCapitals
  .then((data) => data)
  .catch((err) => console.log(err));
const priceListPromise = getPriceList
  .then((data) => data)
  .catch((err) => console.log(err));

const dispatchTokenList = async (dispatch) => {
  const userCapitals = await userCapitalPromise;
  const priceList = await priceListPromise;

  const combinedList = priceList.map((token, idx) => {
    const userCapital = userCapitals.find(
      (userCapital) => userCapital.token === token.token
    );
    const userAmount = userCapital ? userCapital.amount : 0;
    const logoUrl = userCapital ? userCapital.logoUrl : "";
    return {
      id: idx,
      token: token.token,
      amount: userAmount,
      logoUrl: logoUrl,
      price: token.price,
      unit: token.unit,
    };
  });

  dispatch(setTokenList(combinedList));
};

const mapStateToProps = (state) => ({
  tokenList: state.tokenList,
  currentToken: state.currentToken,
  convertToken: state.convertToken,
  amount: state.amount,
});

const mapDispatchToProps = (dispatch) => ({
  setTokenList: () => {
    dispatchTokenList(dispatch);
  },
  changeAmount: (amount) => dispatch(changeAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
