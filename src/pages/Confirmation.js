import React from "react";
import "../assets/css/auth.css";
import AuthConfirmation from "../components/auth/AuthConfirmation";
import withAuthLayout from "../layout/AuthLayout";
const Confirmation = () => {
  return (
    <>
      <AuthConfirmation />
    </>
  );
};

export default withAuthLayout(Confirmation);
