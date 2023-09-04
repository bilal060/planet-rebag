import React from "react";
import "../assets/css/auth.css";
import ForgetPassword from "../components/auth/ForgetPassword";
import withAuthLayout from "../layout/AuthLayout";

function ForgetPasswordPage() {
  return (
    <>
      <ForgetPassword />
    </>
  );
}

export default withAuthLayout(ForgetPasswordPage);
