import React from "react";
import "../assets/css/itemcategory.css";
import withMainLayout from "../layout/MainLayout";
import Request from "../components/Request";

function Requests() {
  return (
    <>
      <Request />
    </>
  );
}

export default withMainLayout(Requests);
