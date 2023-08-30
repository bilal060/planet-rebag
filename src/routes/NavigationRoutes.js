import React from "react";
import { Route, Routes } from "react-router-dom";
import Stores from "../pages/Stores.js";
const AccountPrivacyPolicy =React.lazy(()=> import("../components/accountSetting/PrivacyPolicy.js")) ;
const AccountFaqs =React.lazy(()=> import("../components/accountSetting/Faqs.js")) ;
const ContactUs =React.lazy(()=> import("../components/accountSetting/ContactUs.js")) ;
const AccountNewPassword =React.lazy(()=> import("../components/accountSetting/ChangePassword.js")) ;
const AccountSettingSidebar =React.lazy(()=> import("../components/accountSetting/Sidebar.js")) ;
const TransactionHistory = React.lazy(() => import("../pages/TransactionHistory.js"));

const StoreDetail = React.lazy(() => import("../pages/StoreDetail.js"));
const AppUserCardView = React.lazy(() => import("../pages/AppUserCardView.js"));
const AppUserDetailView = React.lazy(() =>
  import("../pages/AppUserDetailView.js"),
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
const Confirmation = React.lazy(() => import("../pages/Confirmation.js"));
const Adminlogin = React.lazy(() => import("../pages/Adminlogin.js"));

function NavigationRoutes() {
  const routes = (
    <Routes>
      <Route
        exact
        path="/home"
        element={<Home />}
      ></Route>
      <Route
        exact
        path="/stores"
        element={<Stores />}
      ></Route>
      <Route
        exact
        path="/stores-details"
        element={<StoreDetail />}
      ></Route>
      <Route
        exact
        path="/users"
        element={<AppUserCardView />}
      ></Route>
      <Route
        exact
        path="/users/detail"
        element={<AppUserDetailView />}
      ></Route>
      <Route
        exact
        path="/item-categories"
        element={<ItemCategories />}
      ></Route>
      <Route
        exact
        path="/transaction-history"
        element={<TransactionHistory />}
      ></Route>
      <Route
        exact
        path="/settings/ChangePassword"
        element={
               <AccountNewPassword/>        }
      ></Route>
       <Route
        exact
        path="/settings/Contact"
        element={
           <AccountSetting>
               <ContactUs/>
            </AccountSetting>
        }
      ></Route>
       <Route
        exact
        path="/settings/Faqs"
        element={
           <AccountSetting>
               <AccountFaqs/>
            </AccountSetting>
        }
      ></Route>
       <Route
        exact
        path="/settings/PrivacyPolicy"
        element={
           <AccountSetting>
               <AccountPrivacyPolicy/>
            </AccountSetting>
        }
      ></Route>
      <Route exact path="/Settings" element={ <AccountSetting>
               <AccountNewPassword/>
            </AccountSetting>}></Route>
      <Route exact path="/requests" element={<></>}></Route>
      <Route exact path="/support" element={<></>}></Route>

      <Route exact path="/" element={<Landing />}></Route>

      <Route exact path="/checkMail" element={<CheckMail />}></Route>
      <Route exact path="/forgetPassword" element={<ForgetPassword />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/substorelogin" element={<SubstoreLogin />}></Route>
      <Route exact path="/otpmobile" element={<OtpMobile />}></Route>
      <Route exact path="/otpmail" element={<OtpMail />}></Route>
      <Route exact path="/confirmation" element={<Confirmation />}></Route>
      <Route exact path="/adminlogin" element={<Adminlogin />}></Route>
    </Routes>
  );

  return routes;
}

export default NavigationRoutes;
