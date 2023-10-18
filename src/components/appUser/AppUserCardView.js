import React, { useEffect, useState } from "react";
import "../../assets/css/stores.css";
import ActiveUserIcon from "../../assets/images/icons/dashboardicons/activeUser";
import Radios from "../../components/Radios";
// import UserIcon from "../../assets/images/icons/userIcon";
// import AppViewUser from "./AppViewUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/user/actions/actionCreators";
// const cardData = [
//   {
//     userName: "Carrefour",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Al Maya Group",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Carrefour",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Al Maya Group",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Carrefour",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Al Maya Group",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Al Maya Group",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Carrefour",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
//   {
//     userName: "Al Maya Group",
//     icon: <UserIcon />,
//     userId: "CF783457",
//     scannedItems: "1209",
//     status: "Active",
//   },
// ];

const AppUserCardView = () => {
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state?.user?.getUsers);
  console.log(UserData, "this is userdata Fetch");
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

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
      {/* <AppViewUser UserData={UserData || []} /> */}
    </div>
  );
};

export default AppUserCardView;
