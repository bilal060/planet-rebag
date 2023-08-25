import React from "react";
import "../assets/css/checkmail.css";
import { Button } from "react-bootstrap";
import right_circle from "../assets/images/right-circle.svg";
import left_circle from "../assets/images/left-circle.svg";
import CheckMain from "../assets/images/CheckMail.svg";
import Logo from "../assets/images/Logo.svg";

function CheckMail() {
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

      <div>
        <img
          src={Logo}
          alt=""
          className="logo-container logo"
        />
      </div>

      <div className="login-container">
        {/* <h2 className="text-center">Login</h2> */}
        <div className="login-sub">
          <span className="mb-5">
            <div className="logo-image d-flex justify-content-center">
              <img src={CheckMain} alt="" className="logo" />
            </div>
            <h3 className="d-flex justify-content-center green-text fw-bold mt-3">Check Your Mail</h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              Please check your mail, and follow the instructions.
            </span>
          </span>
          <div className="login-btn mt-5">
            <Button className="bg-primary-green text-white border border-success w-100 mt-3">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckMail;
