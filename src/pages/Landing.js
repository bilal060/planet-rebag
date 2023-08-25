import React from "react";
import "../assets/css/landing.css";
import right_circle from "../assets/images/right-circle.svg";
import left_circle from "../assets/images/left-circle.svg";
import logo from "../assets/images/plant-rebag-logo.svg";
const Landing = () => {
  return (
    <>
      <div>
        <img
          src={left_circle}
          alt=""
          className="circle-container2 circle-left"
        />
      </div>
      <div>
        <img
          src={right_circle}
          alt=""
          className="circle-container1 circle-right"
        />
      </div>
      <div className="login-container">
        {/* <h2 className="text-center">Login</h2> */}
        <div className="login-sub">
          <div className="logo-image">
            <img src={logo} alt="" className="logo" />
          </div>
          <span className="logo-text">Scan and Earn Money</span>
          <div className="login-btn">
            <button class="login-button">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
