import React from "react";
import TempPassword from "../components/auth/TempPassword";
import withAuthLayout from "../layout/AuthLayout";
const TempPasswordPage = () => {
  return (
    <>
      <TempPassword />
    </>
  );
};

export default withAuthLayout(TempPasswordPage);
