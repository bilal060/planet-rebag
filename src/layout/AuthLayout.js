import React from "react";
import AuthCircles from "../components/auth_circles/AuthCircles";
import AuthFooter from "../components/auth_footer/AuthFooter";
import "../assets/css/auth.css";
import Logo from "../assets/images/Logo.svg";

const withAuthLayout = (WrappedComponent) => {
  return function AuthLayoutHOC(props) {
    return (
      <>
        <div>
          <img
            src={Logo}
            alt=""
            className="logo-container logo d-md-block d-none"
          />
        </div>
        <AuthCircles />
        <WrappedComponent {...props} />
        <div className="d-md-block d-none">
          <AuthFooter />
        </div>
      </>
    );
  };
};

export default withAuthLayout;
