import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataContextProvider from "./context/DataContext";

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById("root")
);
