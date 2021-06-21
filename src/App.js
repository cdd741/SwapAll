import "./App.scss";
import "./style/common.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main"></div>
      <Footer />
    </div>
  );
}

export default App;
