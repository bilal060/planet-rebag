import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout.js";
import Stores from "../pages/Stores.js";
const AccountNewPassword =React.lazy(()=> import("../components/accountSetting/ChangePassword.js")) ;
const AccountSettingSidebar =React.lazy(()=> import("../components/accountSetting/Sidebar.js")) ;
const AccountSetting =React.lazy(()=> import("../layout/AccountSettingLayout.js")) ;
const StoreDetail = React.lazy(() => import("../pages/StoreDetail.js"));
const AppUserCardView = React.lazy(() => import("../pages/AppUserCardView.js"));
const AppUserDetailView = React.lazy(() =>
  import("../pages/AppUserDetailView.js")
);
const ItemCategories = React.lazy(() => import("../pages/ItemCategories.js"));
const Home = React.lazy(() => import("../pages/Home.js"));
const Landing = React.lazy(() => import("../pages/Landing.js"));
const CheckMail = React.lazy(() => import("../pages/CheckMail.js"));
const ForgetPassword = React.lazy(() => import("../pages/ForgetPassword.js"));
const Signup = React.lazy(() => import("../pages/Signup.js"));
const Login = React.lazy(() => import("../pages/Login.js"));
const SubstoreLogin = React.lazy(() => import("../pages/SubstoreLogin.js"));
const OtpMobile = React.lazy(() => import("../pages/OtpMobile.js"));
const OtpMail = React.lazy(() => import("../pages/OtpMail.js"));

function NavigationRoutes() {
  const routes = (
    <Routes>
      <Route
        exact
        path="/home"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/stores"
        element={
          <MainLayout>
            <Stores />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/stores-details"
        element={
          <MainLayout>
            <StoreDetail />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/users"
        element={
          <MainLayout>
            <AppUserCardView />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/users/detail"
        element={
          <MainLayout>
            <AppUserDetailView />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/item-categories"
        element={
          <MainLayout>
            <ItemCategories />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/transaction-history"
        element={<MainLayout></MainLayout>}
      ></Route>
      <Route
        exact
        path="/settings/ChangePassword"
        element={
           <AccountSetting>
               <AccountNewPassword/>
            </AccountSetting>
        }
      ></Route>
      <Route exact path="/requests" element={<MainLayout></MainLayout>}></Route>
      <Route exact path="/support" element={<MainLayout></MainLayout>}></Route>
      <Route exact path="/" element={<Landing />}></Route>

      <Route exact path="/checkMail" element={<CheckMail />}></Route>
      <Route exact path="/forgetPassword" element={<ForgetPassword />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/substorelogin" element={<SubstoreLogin />}></Route>
      <Route exact path="/otpmobile" element={<OtpMobile />}></Route>
      <Route exact path="/otpmail" element={<OtpMail />}></Route>
      
    </Routes>
  );

  return routes;
}

export default NavigationRoutes;
