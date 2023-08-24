import React from "react";
import "../assets/css/login.css";
import right_circle from "../assets/images/icons/login/right-circle.svg";
import left_circle from "../assets/images/icons/login/left-circle.svg";
import logo from "../assets/images/icons/login/plant-rebag-logo.svg";
const Login = () => {
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
        <div className="logo-image">
          <img src={logo} alt="" className="logo" />
        </div>
        <span className="logo-text">Scan and Earn Money</span>
        <div className="login-btn">
          <button class="login-button">Button</button>
        </div>
      </div>
    </>
  );
};

export default Login;
