import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const settingRoute = [
  {
    name: "Change Password",
    img: "",
    link: "/settings/ChangePassword",
  },
  {
    name: "ContactUs",
    img: "",
    link: "/settings/Contact",
  },
  {
    name: "FAQs",
    img: "",
    link: "/settings/Faqs",
  },
  {
    name: "Privacy Policy",
    img: "",
    link: "/settings/PrivacyPolicy",
  },
];

const AccountSettingSidebar = () => {
  const location = useLocation();

  // Initialize active link state to the first element's link
  const [activeLink, setActiveLink] = useState(settingRoute[0].link);

  return (
    <>
      <Card className="account-setting-card1 py-75 border-0 shadow1">
        {settingRoute.map((data, index) => {
          const isActive =
            data.link === activeLink ||
            location.pathname.includes(data.link);

          return (
            <Link
              key={index}
              to={data.link}
              className={isActive ? "active link" : "link"}
              onClick={() => setActiveLink(data.link)}
            >
              {data.img}
              {data.name}
            </Link>
          );
        })}
        <Link className="logout" to="/login">
           Log Out
        </Link>
      </Card>
    </>
  );
};

export default AccountSettingSidebar;
