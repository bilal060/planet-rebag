import React from "react";
import AuthCircles from "../components/auth_circles/AuthCircles";
import AuthFooter from "../components/auth_footer/AuthFooter";
import "../assets/css/auth.css";
import Logo from "../assets/images/Logo.svg";
import PropTypes from "prop-types";
const AuthLayout = ({ children }) => {
  return (
    <>
      <div>
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      {children}
      <div className="d-md-block d-none">
        <AuthFooter />
      </div>
    </>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.any,
};
export default AuthLayout;
