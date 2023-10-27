import React, { useEffect } from "react";
import "../assets/css/itemcategory.css";
import { Table } from "react-bootstrap";
import TickIcon from "../assets/images/icons/dashboardicons/tickIcon";
import CrossIcon from "../assets/images/icons/dashboardicons/crossIcon";
import { fetchAllPriceRequest } from "../store/storeIndex";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../axios/Axios";
// import { PaginationControl } from "react-bootstrap-pagination-control";
import Toast from "../shared/Toast";
const Request = () => {
  const dispatch = useDispatch();
  const priceRequestData = useSelector(
    (state) => state?.priceRequest?.PriceRequest?.requests,
  );
  useEffect(() => {
    dispatch(fetchAllPriceRequest());
  }, []);
  const ApprovedHandler = (id, status) => {
    Axios.patch(`priceChange/changeRequestStatus/${id}`, {
      status: status,
    })
      .then((response) => {
        Toast.success(response?.data?.message);
        dispatch(fetchAllPriceRequest());
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
      });
  };
  return (
    <div>
      <h4 className="fs-3">Price Change Requests</h4>

      <div className="table-main mt-4">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Store</th>
              <th>
                Current Own <br /> Bag Price
              </th>
              <th>
                Current Other
                <br /> Bag Price
              </th>
              <th>
                New Own <br /> Bag Price
              </th>
              <th>
                New Other
                <br /> Bag Price
              </th>
              <th>Store Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {priceRequestData.length > 0 ? (
              (priceRequestData || []).map((data, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{data.storeId.storeName}</td>
                      <td>{data.storeId.ownBagsPrice}</td>
                      <td>{data.storeId.otherBagsPrice}</td>
                      <td>{data.ownBagsPrice}</td>
                      <td>{data.otherBagsPrice}</td>
                      <td>
                        {data.storeId.address
                          ? data.storeId.address
                          : "no address"}
                      </td>
                      <td className="d-flex align-items-center gap-3">
                        <span
                          className="cr-p"
                          onClick={() => ApprovedHandler(data._id, "approved")}
                        >
                          <TickIcon />
                        </span>
                        <span
                          className="cr-p"
                          onClick={() => ApprovedHandler(data._id, "rejected")}
                        >
                          <CrossIcon />
                        </span>
                      </td>
                    </tr>
                  </>
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
          {/* <div className="d-flex justify-content-center mt-4">
            <PaginationControl
              page={page}
              between={3}
              limit={10}
              total={Usertotal}
              changePage={(page) => handlePageChange(page)}
              ellipsis={1}
            />
          </div> */}
        </Table>
      </div>
    </div>
  );
};

export default Request;
