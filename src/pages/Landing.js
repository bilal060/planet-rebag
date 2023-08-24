import React from "react";
import "../assets/css/landing.css";
import right_circle from "../assets/images/right-circle.svg";
import left_circle from "../assets/images/left-circle.svg";
import logo from "../assets/images/plant-rebag-logo.svg";
import { Button } from "react-bootstrap";
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
          <span className="mb-5">
          <div className="logo-image d-flex justify-content-center w-custom">
            <img src={logo} alt="" className="logo" />
          </div>
          <span className="logo-text d-flex justify-content-center mt-2">
            Scan and Earn Money
          </span>
          </span>
          <div className="login-btn mt-5">
            <Button className="bg-light-green green-border text-black border border-success w-100">
              Login
            </Button>
            <Button className="bg-primary-green text-white border border-success w-100 mt-3">
              Start Scanning as a Guest
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
