import React from "react";
import congratulations_icon from "../../assets/images/congratulations.svg";
import logo_rebag from "../../assets/images/plant-rebag-logo.svg";

const AuthConfirmation = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-sub">
          <div className="logo-image d-flex justify-content-center">
            <img src={logo_rebag} alt="" className="img-fluid mb-2 logo-hide" />
          </div>
          <span className="mb-5">
            <div className="logo-image d-flex justify-content-center">
              <img src={congratulations_icon} alt="" className="logo" />
            </div>
            <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
              Congratulations!
            </h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              Your account has been created successfully.
            </span>
          </span>
          <div className="login-btn mt-5">
            <button className="guest-btn btn-lg btn-block">Done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthConfirmation;
