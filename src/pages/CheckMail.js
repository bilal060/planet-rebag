import React from "react";
import "../assets/css/auth.css";
import AuthCheckMail from "../components/auth/AuthCheckMail";
import withAuthLayout from "../layout/AuthLayout";
function CheckMail() {
  return (
    <>
      <AuthCheckMail />
    </>
  );
}

export default withAuthLayout(CheckMail);
