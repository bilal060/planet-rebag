import React from "react";
import { Route, Routes } from "react-router-dom";
import Stores from "../pages/Stores.js";
// const AccountSettingSidebar = React.lazy(() =>
//   import("../components/accountSetting/Sidebar.js"),
// );

const StoreDetail = React.lazy(() => import("../pages/StoreDetail.js"));
const AppUserCardView = React.lazy(() => import("../pages/AppUserCardView.js"));

const ItemCategories = React.lazy(() => import("../pages/ItemCategories.js"));
const Requests = React.lazy(() => import("../pages/Requests.js"));
const Home = React.lazy(() => import("../pages/Home.js"));
const LandingPage = React.lazy(() => import("../pages/Landing.js"));
const CheckMail = React.lazy(() => import("../pages/CheckMail.js"));
const ForgetPasswordPage = React.lazy(() =>
  import("../pages/ForgetPassword.js"),
);
const TempPasswordPage = React.lazy(() => import("../pages/TempPassword.js"));
const LoginPage = React.lazy(() => import("../pages/Login.js"));
const SignupPage = React.lazy(() => import("../pages/Signup.js"));

const SubstoreLogin = React.lazy(() => import("../pages/SubstoreLogin.js"));
const OtpMobile = React.lazy(() => import("../pages/OtpMobile.js"));
const OtpMail = React.lazy(() => import("../pages/OtpMail.js"));
const Confirmation = React.lazy(() => import("../pages/Confirmation.js"));
const AdminLoginPage = React.lazy(() => import("../pages/Adminlogin.js"));
const AccountPrivacyPolicy = React.lazy(() =>
  import("../components/accountSetting/PrivacyPolicy.js"),
);
const AccountFaqs = React.lazy(() =>
  import("../components/accountSetting/Faqs.js"),
);
const ContactUs = React.lazy(() =>
  import("../components/accountSetting/ContactUs.js"),
);
const AccountNewPassword = React.lazy(() =>
  import("../components/accountSetting/ChangePassword.js"),
);
const TransactionHistory = React.lazy(() =>
  import("../pages/TransactionHistory.js"),
);
const AppUserDetailView = React.lazy(() =>
  import("../pages/AppUserDetailView.js"),
);

function NavigationRoutes() {
  const routes = (
    <Routes>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/stores" element={<Stores />}></Route>
      <Route exact path="/stores/detail" element={<StoreDetail />}></Route>
      <Route exact path="/users" element={<AppUserCardView />}></Route>
      <Route exact path="/users/detail" element={<AppUserDetailView />}></Route>
      <Route exact path="/item-categories" element={<ItemCategories />}></Route>
      <Route
        exact
        path="/transaction-history"
        element={<TransactionHistory />}
      ></Route>
      <Route exact path="/requests" element={<Requests />}></Route>
      <Route exact path="/support" element={<></>}></Route>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route exact path="/checkMail" element={<CheckMail />}></Route>
      <Route
        exact
        path="/forgetPassword"
        element={<ForgetPasswordPage />}
      ></Route>
      <Route exact path="/temppassword" element={<TempPasswordPage />}></Route>
      <Route exact path="/login" element={<LoginPage />}></Route>
      <Route exact path="/signup" element={<SignupPage />}></Route>

      <Route exact path="/substorelogin" element={<SubstoreLogin />}></Route>
      <Route exact path="/otpmobile" element={<OtpMobile />}></Route>
      <Route exact path="/otpmail" element={<OtpMail />}></Route>
      <Route exact path="/confirmation" element={<Confirmation />}></Route>
      <Route exact path="/adminlogin" element={<AdminLoginPage />}></Route>
      <Route
        exact
        path="/settings/ChangePassword"
        element={<AccountNewPassword />}
      ></Route>
      <Route exact path="/settings/Contact" element={<ContactUs />}></Route>
      <Route exact path="/settings/Faqs" element={<AccountFaqs />}></Route>
      <Route
        exact
        path="/settings/PrivacyPolicy"
        element={<AccountPrivacyPolicy />}
      ></Route>
    </Routes>
  );

  return routes;
}

export default NavigationRoutes;
