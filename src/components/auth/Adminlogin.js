import React, { useState } from "react";
import AuthCircles from "../../components/auth_circles/AuthCircles";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import EyeIcon from "../../assets/images/EyeIcon";
import EyeiconClose from "../../assets/images/EyeiconClose";

const Adminlogin = () => {
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
          <h3 className="font-32 big-text-color">Welcome back!</h3>
          <span className="font-16-400 small-text-color">
            Login to your account.
          </span>
          <form>
            <div className="form-group mt-5">
              <div className="label-inputs-start">
                <label htmlFor="emailInput" className="font-16">
                  Email
                </label>
              </div>
              <input
                type="email"
                className="form-control emailInput mt-2"
                placeholder="@ Enter your email"
              />
            </div>
            <div className="form-group mt-2">
              <div className="label-inputs-start">
                <label htmlFor="passwordInput" className="font-16 text-start">
                  Password
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
            <div className="login-btn mt-3">
              <button className="guest-btn btn-lg btn-block mt-2">Login</button>
            </div>
          </form>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default Adminlogin;
