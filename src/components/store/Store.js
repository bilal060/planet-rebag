import React, { useState } from "react";
import "../../assets/css/stores.css";
import AddNewCategoryIcon from "../../assets/images/icons/dashboardicons/addNewCategory";
import AddOrUpdateStoreModel from "./addOrUpdateStoreModel";
import ViewStores from "./viewStores";

const cardData = [
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
];
const Store = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="stores">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-12 pe-12">
        <h4 className="fs-3 ">All Stores</h4>
        <button
          className="green-btn-outline d-flex"
          onClick={() => setModalShow(true)}
        >
          <AddNewCategoryIcon />
          <span className="d-sm-block d-none">Add New Store</span>
        </button>
      </div>
      <ViewStores stores={cardData} />

      <AddOrUpdateStoreModel
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
    </div>
  );
};

export default Store;
