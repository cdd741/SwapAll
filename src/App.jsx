import React, { useState, useEffect } from "react";
import "./App.scss";
import "./style/common.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import arrowBlue from "./assets/images/arrow-blue.png";

// import Token from "./components/Token/Token";
import CurrentToken from "./containers/CurrentToken";
import ConvertToken from "./containers/ConvertToken";

function App({
  tokenList,
  currentToken,
  convertToken,
  amount,
  setTokenList,
  changeAmount,
}) {
  useEffect(() => {
    setTokenList();
  }, []);

  const handleOnChange = (e) => {
    changeAmount(parseFloat(e.target.value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("money swaped!");
  };

  const currentTokenObj = currentToken
    ? tokenList.find((tokenItem) => tokenItem.token === currentToken)
    : null;

  const convertTokenObj = convertToken
    ? tokenList.find((tokenItem) => tokenItem.token === convertToken)
    : null;

  const conversionRate =
    convertTokenObj && currentTokenObj
      ? currentTokenObj.price / convertTokenObj.price
      : 0;

  const convertedAmount =
    convertTokenObj && currentTokenObj && amount
      ? (amount * conversionRate).toFixed(4).toString()
      : "0.00";

  let validInput = true;
  let validSwap = true;
  let inputClass = "main__amount main__amount--valid";
  let outputClass = "main__amount";
  let buttonClass = "main__swap-button pointer";

  if (!currentTokenObj && !convertTokenObj) {
    validInput = false;
  } else if (!amount) {
    validSwap = false;
    buttonClass = "main__swap-button main__swap-button--invalid";
    inputClass = outputClass = "main__amount main__amount--zero";
  } else if (amount > currentTokenObj.amount || amount < 0) {
    validSwap = false;
    validInput = false;
    buttonClass = "main__swap-button main__swap-button--invalid";
  } else if (!currentTokenObj || !convertTokenObj) {
    validSwap = false;
    buttonClass = "main__swap-button main__swap-button--invalid";
  } else if (currentToken === convertToken) {
    validSwap = false;
    buttonClass = "main__swap-button main__swap-button--invalid";
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__title-container">
          <h2 className="main__title">Swap</h2>
          <h5 className="main__description">
            The Slippage Tolerance is 10% by default
          </h5>
        </div>
        <div className="main__swap-container">
          <div className="main__swap">
            <input
              className={`${inputClass} ${
                validInput ? "main__amount--valid" : "main__amount--invalid"
              }`}
              type="number"
              id="inputAmount"
              value={amount}
              onChange={handleOnChange}
              placeholder="0.00"
            />
            <CurrentToken />
          </div>
          {validInput ? (
            <h5 className="main__balance">{`Balance: ${currentTokenObj.amount} ${currentTokenObj.token}`}</h5>
          ) : (
            <h5 className="main__balance main__balance--invalid">
              You don’t have enough balance for Swap.
            </h5>
          )}
        </div>
        <div className="main__convert-arrow">
          <img src={arrowBlue} alt="blue arrow" />
        </div>
        <div className="main__swap-container">
          <div className="main__swap">
            <h3 className={outputClass}>{convertedAmount}</h3>
            <ConvertToken />
          </div>
          {convertTokenObj ? (
            <h5 className="main__balance">{`Balance: ${convertTokenObj.amount} ${convertTokenObj.token}`}</h5>
          ) : (
            <div className="main__balance--placeholder"></div>
          )}
        </div>
        {currentTokenObj && convertTokenObj ? (
          <div className="main__currency-converter">
            1 {currentToken} = {conversionRate} {convertToken}
          </div>
        ) : (
          <div className="main__currency-converter--placeholder"></div>
        )}
        <button
          className={buttonClass}
          disabled={!validSwap}
          onClick={handleOnSubmit}
        >
          <h4>Swap</h4>
        </button>
      </div>
      <dir className="page-padding"></dir>
      <Footer />
    </div>
  );
}

export default App;
