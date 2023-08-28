import React from "react";
import "../assets/css/auth.css";
//import { Button } from "react-bootstrap";
import CheckMain from "../assets/images/CheckMail.svg";
import Logo from "../assets/images/Logo.svg";
import AuthFooter from "../components/auth_footer/AuthFooter";
import AuthCircles from "../components/auth_circles/AuthCircles";
import logo_rebag from "../assets/images/plant-rebag-logo.svg";
function CheckMail() {
  return (
    <>
      <div className="logo-hide-top">
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      <div className="login-container">
        <div className="login-sub">
          <div className="logo-image d-flex justify-content-center">
            <img src={logo_rebag} alt="" className="img-fluid mb-2 logo-hide" />
          </div>
          <span className="mb-5">
            <div className="logo-image d-flex justify-content-center">
              <img src={CheckMain} alt="" className="logo" />
            </div>
            <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
              Check Your Mail
            </h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              Please check your mail, and follow the instructions.
            </span>
          </span>
          <div className="login-btn mt-3">
            <button className="guest-btn btn-lg btn-block">Login</button>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}

export default CheckMail;
