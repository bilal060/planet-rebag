import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import "../../assets/css/auth.css";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";

function ForgetPassword() {
  const [dimension, setDimension] = useState();
  useEffect(() => {
    const handleWindowResize = () => {
      const windowdimention = getWindowDimensions();
      setDimension(windowdimention);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [window.innerHeight]);
  return (
    <>
      <div
        className={`login-container ${
          dimension?.height < 840
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
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
                <div className="label-inputs-start">
                  <label htmlFor="emailInput" className="font-16 text-start">
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
