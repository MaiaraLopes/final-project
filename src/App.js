import React from "react";
import './App.css';
import Weather from "./Weather"; 
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app">
     <Form />
     <Weather />
    </div>
    </div>
    </div> 
    <footer>
       This project was coded by Maiara Lopes and is <a href="https://github.com/MaiaraLopes/final-project" target="_blank">open-sourced.
     </a>
      </footer>
    </div>
     );
}
