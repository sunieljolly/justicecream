import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import StravaData from "./StravaData";
import "./App.css";

import { Audio } from  'react-loader-spinner'
const App = () => {
  return (
    <div id="body">
      <Header />      
      <StravaData />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
