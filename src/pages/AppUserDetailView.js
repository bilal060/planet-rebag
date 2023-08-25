import React, { useState } from "react";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import Radios from "../components/Radios";
import { Form, Table } from "react-bootstrap";

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
      id: "CF783457",
      returnedBag: "7",
      returnedBottle: "7",
      TotalQty: "14",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: "CF783457",
      returnedBag: "20",
      returnedBottle: "20",
      TotalQty: "40",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: "CF783457",
      returnedBag: "13",
      returnedBottle: "13",
      TotalQty: "26",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between gap-5 ">
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
              <th>Session ID</th>
              <th>Returned Bags</th>
              <th>Returned Bottles</th>
              <th>Total Qty</th>
              <th>Redeem Price</th>
              <th>Store Location</th>
              <th>Time & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.returnedBag}</td>
                  <td>{data.returnedBottle}</td>
                  <td>{data.TotalQty}</td>
                  <td>{data.RedeemPrice}</td>
                  <td>{data.StoreLocation}</td>
                  <td>{data.time}</td>
                  <td>{/* <ThreeDotsIcon /> */}</td>
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
