import "./App.scss";
import "./style/common.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import arrowBlack from "./assets/images/arrow-black.png";
import arrowWhite from "./assets/images/arrow-white.png";
import arrowBlue from "./assets/images/arrow-blue.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__title-container">
          <h2 className="main__title">Swap</h2>
          <h5 className="main__description">
            The Slippage Tolerance is 10% by default.
          </h5>
        </div>
        <div className="main__swap-container">
          <div className="main__swap">
            <h3 className="main__amount main__amount--valid">0.00</h3>
            <div className="main__currency main__currency--selected">
              <div className="main__currency-wrapper">
                <img
                  className="main__currency-image"
                  src="https://cdn.swapall.io/smallIcons/satoIcon.png"
                  alt="currency icon"
                />
                <h4 className="main__currency-name">SATO</h4>
              </div>
              <img
                className="main__currency-arrow"
                src={arrowBlack}
                alt="black arrow"
              />
            </div>
          </div>
          <h5 className="main__balance">Balance: 15.3928 SATO</h5>
        </div>
        <div className="main__convert-arrow">
          <img src={arrowBlue} alt="blue arrow" />
        </div>
        <div className="main__swap-container">
          <div className="main__swap">
            <h3 className="main__amount">0.00</h3>
            <div className="main__currency main__currency--not-selected">
              <h4 className="main__currency-name">Select a token</h4>
              <img
                className="main__currency-arrow"
                src={arrowWhite}
                alt="white arrow"
              />
            </div>
          </div>
          <h5 className="main__balance">Balance: 15.3928 SATO</h5>
        </div>
        <div className="main__currency-converter">
          place holder for currency convertion
        </div>
        <button className="main__swap-button">
          <h4>Swap</h4>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
