import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout.js";
import Stores from "../pages/Stores.js";
const ItemCategories = React.lazy(() => import("../pages/ItemCategories.js"));
const Home = React.lazy(() => import("../pages/Home.js"));
const Landing = React.lazy(() => import("../pages/Landing.js"));
const CheckMail = React.lazy(() => import("../pages/CheckMail.js"));
const ForgetPassword = React.lazy(() => import("../pages/ForgetPassword.js"));

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
        path="/users"
        element={
          <MainLayout>
            <Home />
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
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/requests"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      ></Route>
      <Route
        exact
        path="/support"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      ></Route>
      <Route exact path="/" element={<Landing />}></Route>

      <Route exact path="/checkMail" element={<CheckMail />}></Route>
      <Route exact path="/forgetPassword" element={<ForgetPassword />}></Route>
      {/* //       <Route exact path="/login" element={<Login />}></Route> */}
    </Routes>
  );

  return routes;
}

export default NavigationRoutes;
