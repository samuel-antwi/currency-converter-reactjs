import React from "react";
import Navbar from "./component/Navbar";
import ExchangeRateApi from "./component/ExchangeRateApi";
import "./App.css";
import "./bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ExchangeRateApi />
      </div>
    </div>
  );
};
export default App;
