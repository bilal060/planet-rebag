import { Table } from "react-bootstrap";
import ThreeDotsIcon from "../../assets/images/icons/dashboardicons/threeDots";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserTransactionsById } from "../../store/storeIndex";
import moment from "moment";

const AppUserItemsBagsTable = () => {
  const category = "All";
  const { id } = useParams();
  const dispatch = useDispatch();
  const transactionDataById = useSelector(
    (state) => state?.transaction?.userTransactionsById?.data,
  );
  console.log(transactionDataById);
  useEffect(() => {
    dispatch(fetchUserTransactionsById(id, category));
  }, [dispatch, category]);
  return (
    <div className="table-main mt-4">
      <Table className="table-design" striped hover>
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Redeem Price</th>
            <th>Bag Name</th>
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
                  <td>{data.total}</td>
                  <td>{data.itemType}</td>
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

export default AppUserItemsBagsTable;
