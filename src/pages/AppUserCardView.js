import React, { useState } from "react";
import "../assets/css/stores.css";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import StoresCard from "../components/StoresCard";
import { Col, Form, Modal, Row } from "react-bootstrap";
import UploadIcon from "../assets/images/icons/dashboardicons/uploadIcon";
import ActiveUserIcon from "../assets/images/icons/dashboardicons/activeUser";
import Radios from "../components/Radios";
import UserIcon from "../assets/images/icons/userIcon";
import UsersCard from "../components/UsersCard";

const cardData = [
  {
    userName: "Carrefour",
    userId: "CF783457",
    scannedItems: "1209",
    status: "Active",
  },
  {
    userName: "Al Maya Group",
    userId: "CF783457",
    scannedItems: "1209",
    status: "Active",
  },
  {
    userName: "Carrefour",
    userId: "CF783457",
    scannedItems: "1209",
    status: "Active",
  },
  {
    userName: "Al Maya Group",
    userId: "CF783457",
    scannedItems: "1209",
    status: "Active",
  },
  {
    userName: "Carrefour",
    userId: "CF783457",
    scannedItems: "1209",
    status: "Active",
  },
  {
    userName: "Al Maya Group",
    userId: "CF783457",
    scannedItems: "1209",
    status: "Active",
  },
];

const AppUserCardView = () => {
  const [category, setCategory] = useState("All");
  const radio = [
    {
      id: "1",
      text: "All",
    },
    {
      id: "2",
      imgSrc: <ActiveUserIcon />,
      text: "Active",
    },
    {
      id: "3",
      imgSrc: <ActiveUserIcon />,
      text: "Inactive",
    },
  ];
  return (
    <div className="stores">
      <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 ps-12 pe-12">
        <h4 className="fs-3 ">All Users </h4>
        <div className="d-flex gap-3">
          {radio.map((data, index) => {
            return (
              <Radios
                key={index}
                data={data}
                category={category}
                setCategory={setCategory}
              />
            );
          })}
        </div>
      </div>
      <Row className="m-0 stores-cards">
        {cardData.map((data, index) => {
          return (
            <Col xl="4" lg="6" md="12" className="mb-4 col" key={index}>
              <UsersCard
                userName={data.userName}
                userId={data.userId}
                scannedItems={data.scannedItems}
                status={data.status}
                btnText="View Profile"
                storeIcon=<UserIcon />
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AppUserCardView;
