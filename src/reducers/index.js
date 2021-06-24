export default function reducer(
  state = {
    tokenList: [],
    currentToken: '',
    convertToken: '',
    amount: 0,
  },
  action
) {
  switch (action.type) {
    case "SET_TOKEN_LIST":
      const tokenList = action.payload.TOKEN_LIST;
      return {
        ...state,
        tokenList: tokenList,
        currentToken: tokenList[0].token,
        convertToken: '',
        amount: '',
      };
    case "CHANGE_CURRENT_TOKEN":
      const currentTokenType = action.payload.CURRENT_TOKEN;
      return { ...state, currentToken: currentTokenType };
    case "CHANGE_CONVERT_TOKEN":
      const convertTokenType = action.payload.CONVERT_TOKEN;
      return { ...state, convertToken: convertTokenType };
    case "CHANGE_AMOUNT":
      const amount = action.payload.AMOUNT;
      return { ...state, amount: amount };
    default:
      return state;
  }
}
