import React, { useState } from "react";
import AuthCircles from "../components/auth_circles/AuthCircles";
import AuthFooter from "../components/auth_footer/AuthFooter";
import "../assets/css/auth.css";
import Logo from "../assets/images/Logo.svg";
import EyeIcon from "../assets/images/EyeIcon";
import EyeiconClose from "../assets/images/EyeiconClose";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <div className="form-group mt-5">
              <div className="label-inputs-start">
                <label htmlFor="passwordInput" className="font-16 text-start">
                  Temporary Password
                </label>
              </div>
              <div className="input-group mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control font-32 password-input emailInput"
                  id="passwordInput"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <EyeiconClose /> : <EyeIcon />}
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group mt-4">
              <div className="label-inputs-start">
                <label htmlFor="passwordInput" className="font-16 text-start">
                  New Password
                </label>
              </div>
              <div className="input-group mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control emailInput font-32 password-input"
                  id="passwordInput"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <EyeiconClose /> : <EyeIcon />}
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <div className="label-inputs-start">
                <label htmlFor="passwordInput" className="font-16 text-start">
                  Confirm New Password
                </label>
              </div>
              <div className="input-group mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control emailInput font-32 password-input"
                  id="passwordInput"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <EyeiconClose /> : <EyeIcon />}
                  </span>
                </div>
              </div>
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
