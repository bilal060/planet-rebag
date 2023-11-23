import React, { useEffect, useState } from "react";
import "../../assets/css/stores.css";
import AddNewCategoryIcon from "../../assets/images/icons/dashboardicons/addNewCategory";
import ViewStores from "./viewStores";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreData } from "../../store/store/actions/actionCreators";
import AddOrUpdatePriceModel from "./addOrUpdatePriceModel";
import NewAddOrUpdateStoreModel from "./NewAddOrUpdateStoreModel";

const Store = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state?.store?.storeData);
  const [data, setData] = useState({
    co2emissionBottlesPrice: 0,
    co2emissionBagsPrice: 0,
    wasteRecycledBagsPrice: 0,
    wasteRecycledBottlesPrice: 0,
  });

  const [modalShow, setModalShow] = useState(false);
  const [modalPriceShow, setModalPriceShow] = useState(false);

  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch, modalShow]);

  return (
    <div className="stores">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-12 pe-12">
        <div>
          <h4 className="fs-3 ">All Stores</h4>
        </div>

        <div className="d-flex">
          <button
            className="green-btn-outline d-flex mx-2"
            onClick={() => setModalShow(true)}
          >
            <AddNewCategoryIcon />
            <span className="d-sm-block d-none">Add New Store</span>
          </button>
          <button
            className="green-btn-outline d-flex mx-2"
            onClick={() => setModalPriceShow(true)}
          >
            <AddNewCategoryIcon />
            <span className="d-sm-block d-none">
              {data && Object.keys(data).length > 0 ? "Update" : "Add New "}
              Price
            </span>
          </button>
        </div>
      </div>
      <ViewStores stores={storeData || []} />
      <NewAddOrUpdateStoreModel
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
      <AddOrUpdatePriceModel
        setModalShow={setModalPriceShow}
        modalShow={modalPriceShow}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Store;
