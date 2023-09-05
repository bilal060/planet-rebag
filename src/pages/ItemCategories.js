import React from "react";
import "../assets/css/itemcategory.css";
import withMainLayout from "../layout/MainLayout";
import ItemCategory from "../components/ItemCategories";

const ItemCategories = () => {
  return (
    <>
      <ItemCategory />
    </>
  );
};

export default withMainLayout(ItemCategories);
