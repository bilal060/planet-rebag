import React from "react";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import AuthFooter from "../../components/auth_footer/AuthFooter";

function ForgetPassword() {
  return (
    <>
      <div className="login-container">
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />
          <div className="auth-responsive">
            <h3 className="font-32 big-text-color mb-3">Forgot Password?</h3>
            <span className="font-16-400 small-text-color">
              Enter your associated with your account and we’ll send an email
              with instruction to reset your password.
            </span>
            <form>
              <div className="form-group mt-sm-5 mt-4">
                <label htmlFor="emailInput" className="font-16">
                  Email
                </label>
              </div>
              <div className="input-group mt-2">
                <input
                  type="email"
                  className="form-control emailInput"
                  placeholder="@ Enter your email"
                />
              </div>
              <div className="login-btn mt-3">
                <button className="guest-btn btn-lg btn-block">
                  Create Account
                </button>
              </div>
            </form>
            <div className="d-md-none d-block">
              <AuthFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
