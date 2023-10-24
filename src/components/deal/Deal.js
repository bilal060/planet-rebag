import React, { useEffect, useState } from "react";
import AddNewCategoryIcon from "../../assets/images/icons/dashboardicons/addNewCategory";
import AddOrUpdateDealModel from "./addOrUpdateDealModel";
import ViewDeals from "./viewDeals";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealData } from "../../store/deal/actions/actionCreators";

const Deal = () => {
  const dispatch = useDispatch();
  const dealData = useSelector((state) => state?.deal?.dealData);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchDealData());
  }, [dispatch, modalShow]);

  return (
    <div className="stores">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-12 pe-12">
        <h4 className="fs-3 ">All Deals</h4>
        <button
          className="green-btn-outline d-flex"
          onClick={() => setModalShow(true)}
        >
          <AddNewCategoryIcon />
          <span className="d-sm-block d-none">Add New Deal</span>
        </button>
      </div>
      <ViewDeals deals={dealData || []} />
      <AddOrUpdateDealModel setModalShow={setModalShow} modalShow={modalShow} />
    </div>
  );
};

export default Deal;
