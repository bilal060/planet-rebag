import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(()=> import("../pages/Home.js"))
const Landing = React.lazy(() => import("../pages/Landing.js"));
const CheckMail = React.lazy(()=> import ("../pages/CheckMail.js"))
const ForgetPassword = React.lazy(()=> import ("../pages/ForgetPassword.js"))
function NavigationRoutes() {

  const routes = (
    <Routes>
      <Route exact path="/" element={<h1>Hello World</h1>}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/login" element={<Landing />}></Route>
      <Route exact path="/checkMail" element={<CheckMail />}></Route>
      <Route exact path="/forgetPassword" element={<ForgetPassword />}></Route>

    </Routes>
  );

  return routes;
}

export default NavigationRoutes
