import React, { useEffect, useState } from "react";
import "../assets/css/auth.css";
import Logo from "../assets/images/Logo.svg";
import AuthFooter from "../components/auth_footer/AuthFooter";
import logo from "../assets/images/plant-rebag-logo.svg";
import { useNavigate } from "react-router-dom";
import { getWindowDimensions } from "../helpers/getWindowDimentions";
const Landing = () => {
  const navigate = useNavigate();
  const direct = () => {
    navigate("/login");
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
            <div className="d-none d-sm-block logo-image d-flex justify-content-center">
              <img src={logo} alt="" className="img-fluid mb-2" />
            </div>
            <span className="font-16-400 small-text-color">
              Scan and Earn Money
            </span>
            <div className="login-btn mt-5">
              <button
                onClick={direct}
                className="login-button btn-lg btn-block"
              >
                Login
              </button>
            </div>
            <div className="login-btn mt-3">
              <button className="guest-btn btn-lg btn-block">
                Start Scanning as a Guest
              </button>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
    </>
  );
};

export default Landing;
