/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/landing.css";
import right_circle from "../assets/images/right-circle.svg";
import left_circle from "../assets/images/left-circle.svg";
import logo from "../assets/images/plant-rebag-logo.svg";
import AuthFooter from "../components/auth_footer/AuthFooter";
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
        <div className="login-sub text-center">
          <div className="logo-image d-flex justify-content-center">
            <img src={logo} alt="" className="img-fluid mb-2" />
          </div>
          <span className="logo-text pt-3">Scan and Earn Money</span>
          <div className="login-btn mt-5">
            <button className="login-button btn-lg btn-block">Login</button>
          </div>
          <div className="login-btn mt-3">
            <button className="guest-btn btn-lg btn-block">
              Start Scanning as a Guest
            </button>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default Landing;
