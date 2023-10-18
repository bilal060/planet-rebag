import React, { useEffect, useState } from "react";
import "../../assets/css/stores.css";
import AddNewCategoryIcon from "../../assets/images/icons/dashboardicons/addNewCategory";
import AddOrUpdateStoreModel from "./addOrUpdateStoreModel";
import ViewStores from "./viewStores";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreData } from "../../store/store/actions/actionCreators";

const Store = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state?.store?.storeData);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch, modalShow]);

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
      <ViewStores stores={storeData || []} />
      <AddOrUpdateStoreModel
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
    </div>
  );
};

export default Store;
