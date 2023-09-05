import React from "react";
import "../assets/css/auth.css";
import SubStoreLogin from "../components/auth/SubStoreLogin";
import withAuthLayout from "../layout/AuthLayout";
const SubstoreLogin = () => {
  return (
    <>
      <SubStoreLogin />
    </>
  );
};

export default withAuthLayout(SubstoreLogin);
