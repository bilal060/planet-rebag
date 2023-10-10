import React, { useEffect, useState } from "react";
import congratulations_icon from "../../assets/images/congratulations.svg";
import Logo from "../../assets/images/Logo.svg";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";
import { useNavigate } from "react-router-dom";
const AuthConfirmation = () => {
  const [dimension, setDimension] = useState();
  const navigate = useNavigate();
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
          dimension?.height < 640
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />
          <div className="auth-responsive">
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
              <button
                onClick={() => navigate("/home")}
                className="guest-btn btn-lg btn-block"
              >
                Done
              </button>
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

export default AuthConfirmation;
