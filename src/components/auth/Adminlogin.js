import React, { useEffect, useState } from "react";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import EyeIcon from "../../assets/images/EyeIcon";
import EyeiconClose from "../../assets/images/EyeiconClose";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";

const Adminlogin = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
            <span className="font-16-400 small-text-color">
              Scan and Earn Money
            </span>
            <form>
              <div className="form-group mt-sm-5 mt-4">
                <div className="label-inputs-start">
                  <label htmlFor="passwordInput" className="font-16 text-start">
                    Email
                  </label>
                </div>
                <div className="input-group mt-2">
                  <input
                    type="email"
                    className="form-control emailInput mt-2"
                    placeholder="@ Enter your email"
                  />
                </div>
              </div>
              <div className="form-group mt-4">
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
                <button className="guest-btn btn-lg btn-block">Login</button>
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
};

export default Adminlogin;
