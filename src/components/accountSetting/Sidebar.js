import React from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import PrivacyPolicyIcon from "../../assets/images/icons/PrivacyPolicyIcon";
import FAQsIcon from "../../assets/images/icons/FAQsIcon";
import ContactUsIcon from "../../assets/images/icons/ContactUsIcon";
import ChangePasswordIcon from "../../assets/images/icons/ChangePassword";
import AddPriceIcon from "../../assets/images/icons/AddPriceIcon";
import LogoutIcon from "../../assets/images/icons/Logout";

const settingRoute = [
  {
    name: "Add Bag Price",
    img: <AddPriceIcon />,
    link: "/settings/addbagprice",
  },
  {
    name: "Change Password",
    img: <ChangePasswordIcon />,
    link: "/settings/ChangePassword",
  },
  {
    name: "Contact Us",
    img: <ContactUsIcon />,
    link: "/settings/Contact",
  },
  {
    name: "FAQs",
    img: <FAQsIcon />,
    link: "/settings/Faqs",
  },
  {
    name: "Privacy Policy",
    img: <PrivacyPolicyIcon />,
    link: "/settings/PrivacyPolicy",
  },
];

const AccountSettingSidebar = () => {
  const location = useLocation();

  return (
    <>
      <Card className="account-setting-card1 pt-3 border-0 shadow1">
        {settingRoute.map((data, index) => {
          return (
            <Link
              key={index}
              to={data.link}
              className={
                data.link === location.pathname ? "active link" : "link"
              }
            >
              {data.img}
              {data.name}
            </Link>
          );
        })}
        <Link className="logout" to="/login">
          <LogoutIcon /> Log Out
        </Link>
      </Card>
    </>
  );
};

export default AccountSettingSidebar;
