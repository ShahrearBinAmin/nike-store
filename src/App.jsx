import React from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  return (
    <div className="hero">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-inner">
            <img className="logo" src={logoImg} alt="Nike Logo" />
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Boys</a>
              </li>
              <li>
                <a href="#">Girls</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right"></div>
      </div>
    </div>
  );
}

export default App;
