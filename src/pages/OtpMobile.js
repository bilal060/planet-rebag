import React from "react";
import "../assets/css/auth.css";
import AuthOtpMobile from "../components/auth/AuthOtpMobile";
import withAuthLayout from "../layout/AuthLayout";
const OtpMobile = () => {
  return (
    <>
      <AuthOtpMobile />
    </>
  );
};

export default withAuthLayout(OtpMobile);
