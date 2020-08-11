import React from "react";
import "./homepage.style.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HAT</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">CLOTHING</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">FOOTWEAR</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
