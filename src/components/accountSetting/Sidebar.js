import React from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


const settingRoute = [
  {
    name: "Edit Profile",
    img: "",
    link: "/settings/edit",
  },
  {
    name: "Change Password",
    img: "",
    link: "/settings/ChangePassword",
  },
  {
    name: "FAQs",
    img: "",
    link: "/settings/faq",
  },
  {
    name: "Privacy Policy",
    img: "",
    link: "/settings/privacy",
  },
];
const AccountSettingSidebar = () => {
  const location = useLocation();

  return (
    <>
      <Card className="account-setting-card1 p-2 border-0 shadow1">
        {settingRoute.map((data, index) => {
          return (
            <Link
              key={index}
              to={data.link}
              className={`${
                data.link === location.pathname ||
                location.pathname.includes(data.link)
                  ? "active"
                  : ""
              } link`}
            >
              {data.img}
              {data.name}
            </Link>
          );
        })}
      </Card>
    </>
  );
};

export default AccountSettingSidebar;
