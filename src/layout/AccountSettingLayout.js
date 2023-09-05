import React from "react";
import AccountSettingSidebar from "../components/accountSetting/Sidebar";
import { Card } from "react-bootstrap";
import "../assets/css/account-settings.css";

const withAccountSettingLayout = (WrappedComponent) => {
  return function AccountSettingHOC(props) {
    return (
      <div className="account-setting">
        <div className="d-flex flex-lg-row flex-column align-items-start gap-4">
          <AccountSettingSidebar />
          <Card className="account-setting-card shadow1 w-100 h-100">
            <WrappedComponent {...props} />
          </Card>
        </div>
      </div>
    );
  };
};

export default withAccountSettingLayout;
