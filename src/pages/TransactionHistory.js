import React from "react";
import "../assets/css/itemcategory.css";
import Transactions from "../components/TransactionHistory";
import withMainLayout from "../layout/MainLayout";

function TransactionHistory() {
  return (
    <>
      <Transactions />
    </>
  );
}

export default withMainLayout(TransactionHistory);
