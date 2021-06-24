import React, { useState } from "react";
import "./Token.scss";
import arrowBlack from "../../assets/images/arrow-black.png";
import arrowWhite from "../../assets/images/arrow-white.png";

import "../../App.scss";

function Token({
  buttonType,
  tokenList,
  currentToken,
  convertToken,
  changeCurrentToken,
  changeConvertToken,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleOnSelect = (token) => {
    if (buttonType === "current") {
      changeCurrentToken(token);
    } else {
      changeConvertToken(token);
    }
    setShowDropdown(false);
  };

  const token = buttonType === "current" ? currentToken : convertToken;

  const tokenClass = () => {
    if (showDropdown) {
      return "selecting";
    } else if (token) {
      return "selected";
    } else {
      return "not-selected";
    }
  };

  const tokenName = token ? token : "Select a token";

  const tokenLogo = token
    ? tokenList.find((tokenItem) => tokenItem.token === token).logoUrl
    : null;

  return (
    <div
      className={`token-and-dropdown pointer token-and-dropdown--${tokenClass()}`}
    >
      <button
        className={`token token--${tokenClass()} pointer`}
        onClick={handleOnClick}
        onBlur={handleOnBlur}
      >
        <div className={`token__wrapper`}>
          {tokenLogo ? (
            <img className="token__image" src={tokenLogo} alt="currency icon" />
          ) : null}
          <h4 className="token__name">{tokenName}</h4>
        </div>
        {token || tokenClass() === "selecting" ? (
          <img className="token__arrow" src={arrowBlack} alt="black arrow" />
        ) : (
          <img className="token__arrow" src={arrowWhite} alt="white arrow" />
        )}
      </button>
      <ul
        className={
          showDropdown ? "token__dropdown--show" : "token__dropdown--hide"
        }
        onBlur={handleOnBlur}
      >
        {tokenList
          .filter((tokenItem) => tokenItem.token !== token)
          .map((token) => (
            <li
              className="token__dropdown-item"
              key={token.id}
              onClick={() => {
                handleOnSelect(token.token);
              }}
              onBlur={handleOnBlur}
            >
              <img
                className="token__dropdown-logo"
                src={token.logoUrl}
                alt="toke logo"
              />
              <h4 className="token__dropdown-name">{token.token}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Token;
