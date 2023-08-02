import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";



ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Jumbotron />, document.querySelector("#mainContainer"))
ReactDOM.render(<Card 
    img = "https://i.pinimg.com/1200x/35/84/4b/35844b324144d75509bdd1d576ecb157.jpg"
    title = "First Card" 
    description = "This is a description of the first card"
    button = "Find out More!"
    />, document.querySelector("#mainContainer"))
