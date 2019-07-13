import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ResReg from "./ResReg";
import CoorLogin from "./CoorLogin";
import CoorReg from "./CoorReg";
import ResLogin from "./ResLogin";
import * as serviceWorker from "./serviceWorker";
//import "bootstrap/dist/css/bootstrap.css";
//import Counter from "./components/counter";
import Counter from "./counter";
ReactDOM.render(<ResReg />, document.getElementById("root"));
//ReactDOM.render(<Counter />, document.getElementById("root"));
//ReactDOM.render(<CoorReg />, document.getElementById("root"));
//ReactDOM.render(<ResLogin />, document.getElementById("root"));
//ReactDOM.render(<CoorLogin />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
