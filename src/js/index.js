import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";
import Jumbotron from "./component/Jumbotron.jsx";



ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Jumbotron />, document.querySelector("#mainContainer"))

