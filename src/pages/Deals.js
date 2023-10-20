import React from "react";
import "../assets/css/stores.css";
import Deal from "../components/deal/Deal";
import withMainLayout from "../layout/MainLayout";
const Deals = () => {
  return (
    <>
      <Deal />
    </>
  );
};

export default withMainLayout(Deals);
