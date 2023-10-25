import React, { useEffect } from "react";
import TotalCard from "../components/TotalCard";
import { Col, Row } from "react-bootstrap";
import TotalItemsIcon from "../assets/images/icons/TotalItems";
import TotalStore from "../assets/images/icons/TotalStore";
import TotalPrice from "../assets/images/icons/TotalPrice";
import TotalUser from "../assets/images/icons/TotalUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountData } from "../store/storeIndex";
import TransactionHistoryDetail from "./TransactionHistoryDetail";

const Home = () => {
  const dispatch = useDispatch();
  const countData = useSelector((state) => state?.user?.count);
  useEffect(() => {
    dispatch(fetchCountData());
  }, [dispatch]);
  return (
    <div>
      <div className="total-cards">
        <Row>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalItemsIcon />}
              value={countData?.sessionRecord}
              title="Total Items Returned"
              classes="bg-light-green"
              text="text-green"
            />
          </Col>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalUser />}
              value={countData?.userRecords}
              title="Total App Users"
              classes="bg-light-blue"
              text="text-blue"
            />
          </Col>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalStore />}
              value={countData?.storeRecords}
              title="Total Stores"
              classes="bg-light-orange"
              text="text-orange"
            />
          </Col>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalPrice />}
              value={"AED " + countData?.totalPrice?.toString()}
              title="Total Redeem Price"
              classes="bg-light-cyan"
              text="text-cyan"
            />
          </Col>
        </Row>
      </div>
      <TransactionHistoryDetail pageType="home" />
    </div>
  );
};

export default Home;
