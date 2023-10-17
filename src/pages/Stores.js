import React from "react";
import "../assets/css/stores.css";
import Store from "../components/store/Store";
import withMainLayout from "../layout/MainLayout";
const Stores = () => {
  return (
    <>
      <Store />
    </>
  );
};

export default withMainLayout(Stores);
