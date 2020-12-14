import React from "react";
import "./App.css";
import logoImg from "./assets/logo.png";
import searchImg from "./assets/search.png";
import shoeImg from "./assets/shoe.png";
import TopNav from "./components/TopNav";

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
        <div className="navbar-right">
          <TopNav />
          {/* <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="content">
        <div className="content-left">
          <div className="upper-text">
            <h1>NIKE</h1>
            <h2>JUST DO IT</h2>
          </div>

          <div className="lower-text">
            <h1>2020</h1>
            <h2>AIR MAX</h2>
            <h3>270</h3>
          </div>
          <img src={shoeImg} />
        </div>
        <div className="content-right">
          <img src={logoImg} />
          <div className="product-details">
            <div className="price-box">
              <div className="price">
                <h2>AIR MAX</h2>
                <h1>2020</h1>
                <h3>299$</h3>
              </div>
              <div className="varient">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <p>ADD TO CART</p>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
