import React from "react";
import "../assets/css/auth.css";
import Adminlogin from "../components/auth/Adminlogin";
import withAuthLayout from "../layout/AuthLayout";
const AdminLoginPage = () => {
  return (
    <>
      <Adminlogin />
    </>
  );
};

export default withAuthLayout(AdminLoginPage);
