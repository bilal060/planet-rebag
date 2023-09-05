import React from "react";
import withMainLayout from "../layout/MainLayout";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default withMainLayout(HomePage);
