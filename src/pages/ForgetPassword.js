import React from "react";
import "../assets/css/auth.css";
import Logo from "../assets/images/Logo.svg";
//import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import logo_rebag from "../assets/images/plant-rebag-logo.svg";
import AuthFooter from "../components/auth_footer/AuthFooter";
import AuthCircles from "../components/auth_circles/AuthCircles";

function ForgetPassword() {
  return (
    <>
      <div className="logo-hide-top">
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      <div className="login-container">
        <div className="login-sub w-custom">
          <div className="logo-image d-flex justify-content-center">
            <img src={logo_rebag} alt="" className="img-fluid mb-2 logo-hide" />
          </div>
          <span className="mb-5">
            <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
              Forgot Password?
            </h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              Enter your associated with your account and we’ll send an email
              with instruction to reset your password.
            </span>
          </span>
          <div className="login-btn mt-5">
            <Form>
              <div className="form-group">
                <label htmlFor="emailInput" className="font-16">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control emailInput"
                  placeholder="@ Enter your email"
                />
              </div>
              <div className="login-btn mt-3">
                <button className="guest-btn btn-lg btn-block">
                  Reset Password
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}

export default ForgetPassword;
