import React, { useEffect, useState } from "react";
import "../../assets/css/stores.css";
import ActiveUserIcon from "../../assets/images/icons/dashboardicons/activeUser";
import Radios from "../../components/Radios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/user/actions/actionCreators";
import AppViewUser from "./AppViewUser";
import { PaginationControl } from "react-bootstrap-pagination-control";

const AppUserCardView = () => {
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state?.user?.getUsers);
  const test = useSelector((state) => state);
  const [page, setPage] = useState(1);
  console.log(test);
  useEffect(() => {
    dispatch(fetchUserData(page, category));
  }, [dispatch, page, category]);
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
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
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
      <AppViewUser category={category} UserData={UserData || []} />
      <div className="d-flex justify-content-center mt-4">
        <PaginationControl
          page={page}
          between={3}
          total={UserData ? UserData.total : 0}
          limit={UserData ? UserData.limit : 0}
          changePage={(page) => handlePageChange(page)}
          ellipsis={1}
        />
      </div>
    </div>
  );
};

export default AppUserCardView;
