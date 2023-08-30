import React from "react";
import AuthCircles from "../components/auth_circles/AuthCircles";
import AuthFooter from "../components/auth_footer/AuthFooter";
import Logo from "../assets/images/Logo.svg";
import "../assets/css/auth.css";
import logo_rebag from "../assets/images/plant-rebag-logo.svg";
import Form from "react-bootstrap/Form";
import Otpinput from "../components/Otpinput";
const OtpMobile = () => {
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
              Enter OTP
            </h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              A 4 digit code sent to +97101******789.
            </span>
          </span>
          <div className="login-btn mt-5">
            <Form>
              <div className="form-group">
                <div className="label-inputs-center">
                  <label htmlFor="emailInput" className="font-16 text-otp">
                    Enter OTP
                  </label>
                </div>
                <div className="otp-input mt-3">
                  <Otpinput length={4} />
                </div>
              </div>
              <div className="login-btn mt-3">
                <button className="guest-btn btn-lg btn-block">Verify</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default OtpMobile;
