import React from "react";
import "../assets/css/stores.css";
import withMainLayout from "../layout/MainLayout";
import AppUserCardView from "../components/appUser/AppUserCardView";

const AppUserCardViewPage = () => {
  return (
    <>
      <AppUserCardView />
    </>
  );
};

export default withMainLayout(AppUserCardViewPage);
