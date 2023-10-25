import React from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrivacyPolicyIcon from "../../assets/images/icons/PrivacyPolicyIcon";
import FAQsIcon from "../../assets/images/icons/FAQsIcon";
import ContactUsIcon from "../../assets/images/icons/ContactUsIcon";
import ChangePasswordIcon from "../../assets/images/icons/ChangePassword";
// import AddPriceIcon from "../../assets/images/icons/AddPriceIcon";
import LogoutIcon from "../../assets/images/icons/Logout";
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/storeIndex";

const settingRoute = [
  // {
  //   name: "Add Bag Price",
  //   img: <AddPriceIcon />,
  //   link: "/settings/addbagprice",
  // },
  // {
  //   name: "Change Price",
  //   img: <AddPriceIcon />,
  //   link: "/settings/changePrice",
  // },
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <div className="logout" onClick={() => dispatch(userLogout(navigate))}>
          <LogoutIcon /> Log Out
        </div>
      </Card>
    </>
  );
};

export default AccountSettingSidebar;
