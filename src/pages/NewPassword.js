import React from "react";
import NewPassword from "../components/auth/NewPassword";
import withAuthLayout from "../layout/AuthLayout";
const NewPasswordPage = () => {
  return (
    <>
      <NewPassword />
    </>
  );
};

export default withAuthLayout(NewPasswordPage);
