import React from "react";
import "../assets/css/stores.css";
import Store from "../components/Store";
import withMainLayout from "../layout/MainLayout";
const Stores = () => {
  return (
    <>
      <Store />
    </>
  );
};

export default withMainLayout(Stores);
