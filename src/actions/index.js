export const setTokenList = (tokenList) => ({
  type: "SET_TOKEN_LIST",
  payload: { TOKEN_LIST: tokenList },
});

export const changeCurrentToken = (token) => ({
  type: "CHANGE_CURRENT_TOKEN",
  payload: { CURRENT_TOKEN: token },
});

export const changeConvertToken = (token) => ({
  type: "CHANGE_CONVERT_TOKEN",
  payload: { CONVERT_TOKEN: token },
});

export const changeAmount = (amount) => ({
  type: "CHANGE_AMOUNT",
  payload: { AMOUNT: amount },
});
