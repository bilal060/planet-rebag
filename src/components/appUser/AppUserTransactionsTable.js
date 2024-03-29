import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import ThreeDotsIcon from "../../assets/images/icons/dashboardicons/threeDots";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTransactionsById } from "../../store/storeIndex";
import moment from "moment";
import PropTypes from "prop-types";

const AppUserTransactionsTable = (props) => {
  const { category } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const transactionDataById = useSelector(
    (state) => state?.transaction?.userTransactionsById?.data,
  );
  useEffect(() => {
    dispatch(fetchUserTransactionsById(id, category));
  }, [dispatch, category]);
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
          {transactionDataById?.length > 0 ? (
            (transactionDataById || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.itemType}</td>
                  <td>{data.returnBagsQty + data.returnBottelsQty}</td>
                  <td>{data.total}</td>
                  <td>{data.RedeemPrice ? data.RedeemPrice : 0}</td>
                  <td>{data.status}</td>
                  <td>
                    {moment(data.createdAt).format("h:mm A | DD/MM/YYYY")}
                  </td>
                  <td>
                    <ThreeDotsIcon />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                NO DATA FOUND
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

AppUserTransactionsTable.propTypes = {
  category: PropTypes.string,
};

export default AppUserTransactionsTable;
