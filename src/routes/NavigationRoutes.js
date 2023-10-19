import React from "react";
import { Route, Routes } from "react-router-dom";
import Stores from "../pages/Stores.js";
import AppUserDetailView3 from "../components/appUser/AppUserDetailView3.js";
import AppUserDetailView2 from "../components/appUser/AppUserDetailView2.js";
import SubStores from "../pages/SubStores.js";
const StoreDetail = React.lazy(() => import("../pages/StoreDetail.js"));
const AppUserCardView = React.lazy(() => import("../pages/AppUserCardView.js"));
const ItemCategories = React.lazy(() => import("../pages/ItemCategories.js"));
const Requests = React.lazy(() => import("../pages/Requests.js"));
const Home = React.lazy(() => import("../pages/Home.js"));
const LandingPage = React.lazy(() => import("../pages/Landing.js"));
const CheckMail = React.lazy(() => import("../pages/CheckMail.js"));
const TempPasswordPage = React.lazy(() => import("../pages/TempPassword.js"));
const NewPasswordPage = React.lazy(() => import("../pages/NewPassword.js"));
const LoginPage = React.lazy(() => import("../pages/Login.js"));
const SignupPage = React.lazy(() => import("../pages/Signup.js"));

const SubstoreLogin = React.lazy(() => import("../pages/SubstoreLogin.js"));
const OtpMobile = React.lazy(() => import("../pages/OtpMobile.js"));
const OtpMail = React.lazy(() => import("../pages/OtpMail.js"));
const Confirmation = React.lazy(() => import("../pages/Confirmation.js"));
const AdminLoginPage = React.lazy(() => import("../pages/Adminlogin.js"));
import { useSelector } from "react-redux/es/hooks/useSelector.js";
const ForgetPasswordPage = React.lazy(() =>
  import("../pages/ForgetPassword.js"),
);
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
const AddBagPrice = React.lazy(() =>
  import("../components/accountSetting/AddBagPrice.js"),
);
const TransactionHistory = React.lazy(() =>
  import("../pages/TransactionHistory.js"),
);
const AppUserDetailView = React.lazy(() =>
  import("../pages/AppUserDetailView.js"),
);
const USER_ROLES = {
  ADMIN: "superAdminUser",
  USER: "user",
};

function NavigationRoutes() {
  const userRole = useSelector((users) => {
    return users?.user?.user?.user?.role;
  });

  const isUserLogin = useSelector((users) => {
    return users?.user?.isLogin;
  });

  const adminRoutes = (
    <>
      <Route path="/adminlogin" element={<AdminLoginPage />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/stores/detail" element={<StoreDetail />} />
      <Route path="/substores" element={<SubStores />} />
      <Route path="/item-categories" element={<ItemCategories />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/users" element={<AppUserCardView />} />
      <Route path="/users/detail/:id" element={<AppUserDetailView />} />
      <Route path="/redeemCategory1" element={<AppUserDetailView2 />} />
      <Route path="/redeemCategory2" element={<AppUserDetailView3 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings/addbagprice" element={<AddBagPrice />} />
      <Route path="/settings/Contact" element={<ContactUs />} />
      <Route
        path="/settings/PrivacyPolicy"
        element={<AccountPrivacyPolicy />}
      />
      <Route path="/settings/Faqs" element={<AccountFaqs />} />
      <Route path="/settings/ChangePassword" element={<AccountNewPassword />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="*" element={<Home />} />
    </>
  );
  const userRoutes = (
    <>
      <Route path="/support" element={<></>} />
      <Route path="/checkMail" element={<CheckMail />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/temppassword" element={<TempPasswordPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />
      <Route path="/substorelogin" element={<SubstoreLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings/addbagprice" element={<AddBagPrice />} />
      <Route path="/settings/Contact" element={<ContactUs />} />
      <Route
        path="/settings/PrivacyPolicy"
        element={<AccountPrivacyPolicy />}
      />
      <Route path="/settings/ChangePassword" element={<AccountNewPassword />} />
      <Route path="/settings/Faqs" element={<AccountFaqs />} />
      <Route path="*" element={<Home />} />
    </>
  );
  const freeRoutes = (
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otpmobile" element={<OtpMobile />} />
      <Route path="/otpmail" element={<OtpMail />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<LoginPage />} />
    </>
  );
  return (
    <Routes>
      {isUserLogin
        ? userRole === USER_ROLES.ADMIN
          ? adminRoutes
          : userRoutes
        : freeRoutes}
    </Routes>
  );
}

export default NavigationRoutes;
