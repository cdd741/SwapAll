import "./App.scss";
import "./style/common.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        <div className="swap"></div>
        <div className="swap"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
