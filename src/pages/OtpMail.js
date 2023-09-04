import React from "react";
import "../assets/css/auth.css";
import AuthOtpMail from "../components/auth/AuthOtpMail";
import withAuthLayout from "../layout/AuthLayout";
const OtpMail = () => {
  return (
    <>
      <AuthOtpMail />
    </>
  );
};

export default withAuthLayout(OtpMail);
