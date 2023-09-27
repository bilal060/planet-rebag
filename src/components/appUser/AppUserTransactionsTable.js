import React from "react";
import { Table } from "react-bootstrap";
import ThreeDotsIcon from "../../assets/images/icons/dashboardicons/threeDots";

const AppUserTransactionsTable = () => {
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
  );
};

export default AppUserTransactionsTable;
