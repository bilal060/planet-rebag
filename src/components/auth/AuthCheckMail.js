import React from "react";
import CheckMail from "../../assets/images/CheckMail.svg";
import Logo from "../../assets/images/Logo.svg";
import AuthFooter from "../../components/auth_footer/AuthFooter";
const AuthCheckMail = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />
          <div className="auth-responsive">
            <span className="mb-5">
              <div className="logo-image d-flex justify-content-center">
                <img src={CheckMail} alt="" className="logo" />
              </div>
              <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
                Check Your Mail
              </h3>
              <span className="logo-text d-flex justify-content-center mt-2">
                Please check your mail, and follow the instructions.
              </span>
            </span>
            <div className="login-btn mt-5">
              <button className="guest-btn btn-lg btn-block">Login</button>
            </div>
            <div className="d-md-none d-block">
              <AuthFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthCheckMail;
