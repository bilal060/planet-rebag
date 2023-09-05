import React from "react";
import withMainLayout from "../layout/MainLayout";
import AppUserDetailView from "../components/appUser/AppUserDetailView";

function AppUserDetailViewPage() {
  return (
    <>
      <AppUserDetailView />
    </>
  );
}

export default withMainLayout(AppUserDetailViewPage);
