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
import moment from "moment";
import { setLoadingState } from "../store/app/actions/actionCreators";

const Request = () => {
  const dispatch = useDispatch();
  const priceRequestData = useSelector(
    (state) => state?.priceRequest?.PriceRequest?.requests,
  );

  useEffect(() => {
    dispatch(setLoadingState(true));
    dispatch(fetchAllPriceRequest());
    dispatch(setLoadingState(false));
  }, []);

  const ApprovedHandler = async (id, status) => {
    dispatch(setLoadingState(true));
    try {
      const response = await Axios.patch(
        `priceChange/changeRequestStatus/${id}`,
        {
          status,
        },
      );
      Toast.success(response?.data?.message);
      dispatch(fetchAllPriceRequest());
    } catch (error) {
      Toast.error(error?.response?.data?.message);
    }
    dispatch(setLoadingState(false));
  };

  return (
    <div>
      <h4 className="fs-3">Price Change Requests</h4>

      <div className="table-main mt-4">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>
                Current Own <br /> Bag Price
              </th>
              <th>
                New Own <br /> Bag Price
              </th>
              <th>
                Current Other
                <br /> Bag Price
              </th>
              <th>
                New Other
                <br /> Bag Price
              </th>
              <th>
                Current Own <br /> Bottle Price
              </th>
              <th>
                New Own <br /> Bottle Price
              </th>
              <th>
                Current Other
                <br /> Bag Price
              </th>
              <th>
                New Other
                <br /> Bag Price
              </th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {priceRequestData?.length > 0 ? (
              (priceRequestData || []).map((data, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{data?.storeId?.storeName}</td>
                      <td>{"AED " + data?.storeId?.ownBagsPrice || 0}</td>
                      <td>{"AED " + data?.ownBagsPrice || 0}</td>
                      <td>{"AED " + data?.storeId?.otherBagsPrice || 0}</td>
                      <td>{"AED " + data?.otherBagsPrice || 0}</td>
                      <td>{"AED " + data?.storeId?.ownBottlesPrice || 0}</td>
                      <td>{"AED " + data?.ownBottlesPrice || 0}</td>
                      <td>{"AED " + data?.storeId?.otherBottlesPrice || 0}</td>
                      <td>{"AED " + data?.otherBottlesPrice || 0}</td>
                      <td>
                        {moment(data.createdAt).format("h:mm A | DD/MM/YYYY")}
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
