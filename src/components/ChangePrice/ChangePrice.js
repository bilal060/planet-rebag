import React, { useEffect, useState } from "react";
import ChangePriceCard from "./ChangePriceCard";
import ChangePriceFormModal from "./ChangePriceFormModal";
import AddNewCategoryIcon from "../../assets/images/icons/dashboardicons/addNewCategory";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Axios from "../../axios/Axios";
import Toast from "../../shared/Toast";

const ChangePrice = () => {
  const [modalShow, setModalShow] = useState(false);
  const [myStore, setMyStore] = useState(null);
  const [myPriceRequests, setMyPriceRequests] = useState([]);
  const userId = useSelector((users) => {
    return users?.user?.user?.user?.id || "";
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeResponse = await Axios.get(
          `store/getStoreByUserId/${userId}`,
          {
            withCredentials: true,
          },
        );
        const storeData = storeResponse.data.data;
        setMyStore(storeData);

        if (storeData?._id) {
          const priceResponse = await Axios.get(
            `priceChange/${storeData._id}`,
            {
              withCredentials: true,
            },
          );
          setMyPriceRequests(priceResponse.data.requests);
        }
      } catch (error) {
        Toast.error(error?.response?.data?.message);
      }
    };

    fetchData();
  }, [userId, modalShow]);

  return (
    <div>
      <div className="stores">
        <div className="d-flex align-items-center justify-content-between mb-4 ps-12 pe-12">
          <h4 className="fs-3">All Price Change Request</h4>
          <button
            className="green-btn-outline d-flex"
            onClick={() => setModalShow(true)}
          >
            <AddNewCategoryIcon />
            <span className="d-sm-block d-none">
              Create New Price Change Request
            </span>
          </button>
        </div>
        <Row className="m-0 stores-cards">
          {myPriceRequests?.map((data, index) => (
            <Col
              xl={6}
              md={6}
              lg={6}
              sm={12}
              xs={12}
              className="mb-4 col"
              key={index}
            >
              <ChangePriceCard key={index} {...data} />
            </Col>
          ))}
          {myPriceRequests?.length === 0 && (
            <h4 className="text-center w-100 mt-5 pt-5">
              No Price Change Request yet
            </h4>
          )}
        </Row>

        <ChangePriceFormModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          myStore={myStore}
        />
      </div>
    </div>
  );
};

export default ChangePrice;
