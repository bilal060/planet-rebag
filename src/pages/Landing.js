import React from "react";
import "../assets/css/auth.css";
import Landing from "../components/Landing";
import withAuthLayout from "../layout/AuthLayout";

const LandingPage = () => {
  return (
    <>
      <Landing />
    </>
  );
};

export default withAuthLayout(LandingPage);
