import React, { useState } from "react";
import AuthCircles from "../components/auth_circles/AuthCircles";
import AuthFooter from "../components/auth_footer/AuthFooter";
import "../assets/css/auth.css";
import Logo from "../assets/images/Logo.svg";
import EyeIcon from "../assets/images/EyeIcon";
const Signup = () => {
  const [tempPassword, setTempPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setTempPassword(!tempPassword);
    console.log(tempPassword);
  };
  return (
    <>
      <div className="logo-hide-top">
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      <div className="login-container">
        <div className="login-sub text-center">
          <h3 className="font-32 big-text-color">Create New Account</h3>
          <span className="font-16-400 small-text-color">
            Using temporary password create your account
          </span>
          <form>
            <div className="form-group">
              <label for="emailInput text-start" className="font-16">
                Email
              </label>
              <input
                type={tempPassword ? "password" : "text"}
                className="form-control emailInput position-relative"
                placeholder=""
              />
              <button
                type="button"
                className="eye-icon"
                onClick={togglePasswordVisibility}
                style={{
                  width: "24px",
                  height: "24px",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                {tempPassword ? (
                  <i>
                    <EyeIcon />
                  </i>
                ) : (
                  <i>
                    <EyeIcon />
                  </i>
                )}
              </button>
            </div>
            <div className="login-btn mt-3">
              <button className="guest-btn btn-lg btn-block">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default Signup;
