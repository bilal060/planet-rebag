import React from "react";
import SideBarNav from "../shared/SideBarNav";
import "../assets/css/layout.css";
import userimage from "../assets/images/icons/dashboardicons/userimage.png";
import { useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../assets/images/icons/BackIcon";

const withMainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const location = useLocation();
    const heroMessage = ["/home"];
    const navigate = useNavigate();

    return (
      <div className="main-layout">
        <SideBarNav />
        <main className="main-container">
          <div>
            <div
              className={`d-flex ${
                heroMessage.includes(location.pathname) ||
                location.pathname.includes("detail")
                  ? "justify-content-between"
                  : "justify-content-end"
              } mb-5 pb-3`}
            >
              {heroMessage.includes(location.pathname) && (
                <div>
                  <h1>Welcome, Tony!</h1>
                </div>
              )}
              {location.pathname.includes("detail") && (
                <button
                  className="green-btn-outline text-dark align-items-center"
                  onClick={() => navigate(-1)}
                >
                  <BackIcon />
                  Back
                </button>
              )}
              <div className="d-flex align-items-center gap-2">
                <div>
                  <h4 className="fs-5">Tony Stark</h4>
                  <p className="fs-6">Super Admin</p>
                </div>
                <img src={userimage} alt="userimage" className="userimage" />
              </div>
            </div>
            <WrappedComponent {...props} />
          </div>
        </main>
      </div>
    );
  };
};

export default withMainLayout;
