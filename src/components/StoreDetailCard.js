import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import StoreLogo from "../assets/images/StoreLogo.svg";
import "../assets/css/detailcard.css";
import Axios from "../axios/Axios";
import { useEffect } from "react";
import Toast from "../shared/Toast";
import { useParams } from "react-router";
import TransactionHistoryDetail from "./TransactionHistoryDetail";

function StoreDetailCard() {
  const { id } = useParams();
  const [storeData, setstoreData] = useState(null);
  useEffect(() => {
    Axios.get(`store/${id}`, {
      withCredentials: true,
    })
      .then((response) => {
        setstoreData(response?.data?.data);
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
      });
  }, [id]);
  return (
    <div>
      {storeData && (
        <div className="pb-2 mb-4">
          <div className="bg-white p-4 custom-bg">
            <Row className="align-items-center">
              <Col xl="2" className="p-0 mb-xl-0 mb-3">
                <span className="p- bg-greyDark">
                  <Image src={StoreLogo} />
                </span>
              </Col>
              <Col xl="10" className="p-0">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-4">
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <h6>Store Name</h6>
                      <span>{storeData.storeName}</span>
                    </div>

                    <div>
                      <h6>Items Returned</h6>
                      <span>
                        {storeData?.ItemsReturn ? storeData?.ItemsReturn : 0}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <h6>Store ID</h6>
                      <span>{storeData._id.slice(0, 8)}</span>
                    </div>
                    <div>
                      <h6>Total Redeem Price</h6>
                      <span>{storeData?.total ? storeData?.total : 0}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <h6>Total POS</h6>
                      <span>{storeData?.total ? storeData?.total : 0}</span>
                    </div>
                    <div>
                      <h6>Store Location</h6>
                      <span>
                        {storeData?.address ? storeData?.address : "No Address"}
                      </span>
                    </div>
                  </div>
                  {/* <div className="d-flex flex-column pe-lg-5">
                    <div>
                      <h6>Total Sub Stores</h6>
                      <span>26</span>
                    </div>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
      <TransactionHistoryDetail pageType="store" />
    </div>
  );
}

export default StoreDetailCard;
