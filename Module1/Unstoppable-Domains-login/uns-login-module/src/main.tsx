// eslint-disable-next-line no-use-before-define
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "~/App";

var global= window;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
