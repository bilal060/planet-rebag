import React from "react";
import "../assets/css/auth.css";
import Login from "../components/auth/Login";
import withAuthLayout from "../layout/AuthLayout";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default withAuthLayout(LoginPage);
