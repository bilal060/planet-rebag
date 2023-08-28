import React from "react";
import SideBarNav from "../shared/SideBarNav";
import "../assets/css/layout.css";
import userimage from "../assets/images/icons/dashboardicons/userimage.png";
import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();
  const heroMessage = ["/home"];
  return (
    <div className="main-layout">
      <SideBarNav />
      <main className="main-container">
        <div>
          <div
            className={`d-flex ${
              heroMessage.includes(location.pathname)
                ? "justify-content-between"
                : "justify-content-end"
            } mb-5 pb-3`}
          >
            {heroMessage.includes(location.pathname) && (
              <div>
                <h1>Welcome, Tony!</h1>
              </div>
            )}
            <div className="d-flex align-items-center gap-2">
              <div>
                <h4 className="fs-5">Tony Stark</h4>
                <p className="fs-6">Super Admin</p>
              </div>
              <img src={userimage} alt="userimage" className="userimage" />
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
