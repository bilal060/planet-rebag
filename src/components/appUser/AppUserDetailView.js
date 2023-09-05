import React, { useState } from "react";
import BagIcon from "../../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../../assets/images/icons/dashboardicons/bottle";
import Radios from "../../components/Radios";
import { Col, Image, Row, Table } from "react-bootstrap";
import StoreLogo from "../../assets/images/AppUserLogo.svg";
import EditIcon from "../../assets/images/icons/dashboardicons/editIcon";
import ThreeDotsIcon from "../../assets/images/icons/dashboardicons/threeDots";

function AppUserDetailView() {
  const [category, setCategory] = useState("All");

  const radio = [
    {
      id: "1",
      text: "All",
    },
    {
      id: "2",
      imgSrc: <BagIcon />,
      text: "Bag",
    },
    {
      id: "3",
      imgSrc: <BottleIcon />,
      text: "Bottle",
    },
  ];
  const tableData = [
    {
      itemType: "Bag",
      returnedQty: "7",
      returnedBottle: "7",
      TotalQty: "14/50",
      RedeemPrice: "AED 5.00",
      status: "Returned",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bottle",
      returnedQty: "20",
      returnedBottle: "20",
      TotalQty: "40/50",
      RedeemPrice: "AED 5.00",
      status: "Added",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bag",
      returnedQty: "13",
      returnedBottle: "13",
      TotalQty: "26/50",
      RedeemPrice: "AED 5.00",
      status: "Returned",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bottle",
      returnedQty: "20",
      returnedBottle: "20",
      TotalQty: "40/50",
      RedeemPrice: "AED 5.00",
      status: "Added",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bag",
      returnedQty: "13",
      returnedBottle: "13",
      TotalQty: "26/50",
      RedeemPrice: "AED 5.00",
      status: "Returned",
      time: "10:19 AM  |  23/07/2023",
    },
  ];

  return (
    <div>
      <div className="pb-2 mb-4">
        <div className="bg-white p-4 custom-bg position-relative">
          <div className="d-flex justify-content-end position-absolute end-1 top-1 cr-p">
            <EditIcon />
          </div>
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
                    <h6>User Name</h6>
                    <span>Jakob Vetrovs</span>
                  </div>

                  <div>
                    <h6>Items Returned</h6>
                    <span>Jakob Vetrovs</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>User ID</h6>
                    <span>CF783457</span>
                  </div>
                  <div>
                    <h6>Pending Return Items</h6>
                    <span>CF783457</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>Total Scanned Item</h6>
                    <span>60</span>
                  </div>
                  <div>
                    <h6>Status</h6>
                    <span>60</span>
                  </div>
                </div>
                <div></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <h4 className="fs-3">Transactions History </h4>
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

      <div className="table-main mt-4">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Returned Qty</th>
              <th>Total Qty</th>
              <th>Redeem Price</th>
              <th>Status</th>
              <th>Time & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.itemType}</td>
                  <td>{data.returnedQty}</td>
                  <td>{data.TotalQty}</td>
                  <td>{data.RedeemPrice}</td>
                  <td>{data.status}</td>
                  <td>{data.time}</td>
                  <td>
                    <ThreeDotsIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AppUserDetailView;
