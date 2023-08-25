import React from "react";
import SideBarNav from "../shared/SideBarNav";
import "../assets/css/layout.css";
import userimage from "../assets/images/icons/dashboardicons/userimage.png";


function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <SideBarNav />
      <main className="main-container">
        <div className="d-flex justify-content-between mb-5">
          <div>
            <h1>
              Welcome, Tony!
            </h1>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div>
              <h4 className="fs-5">Tony Stark</h4>
              <p className="fs-6">Super Admin</p>
            </div>
            <img src={userimage} alt="userimage" className="userimage" />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
