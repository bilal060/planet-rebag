import React from "react";
import "../assets/css/stores.css";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import StoresCard from "../components/StoresCard";

const Stores = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 className="fs-3">All Stores </h4>
        <button className="green-btn-outline d-flex">
          <AddNewCategoryIcon />
          <span className="d-sm-block d-none">Add New Store</span>
        </button>
      </div>
      <div>
        <StoresCard />
      </div>
    </div>
  );
};

export default Stores;
