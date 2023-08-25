import React from "react";
import { Route, Routes } from "react-router-dom";
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
      <Route exact path="/" element={<Landing />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
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
