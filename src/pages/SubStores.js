import React from "react";
import "../assets/css/stores.css";
import SubStore from "../components/SubStore";
import withMainLayout from "../layout/MainLayout";
const SubStores = () => {
  return (
    <>
      <SubStore />
    </>
  );
};

export default withMainLayout(SubStores);
