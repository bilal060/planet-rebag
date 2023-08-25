import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout.js";
import ItemCategories from "../pages/ItemCategories.js";
const Home = React.lazy(() => import("../pages/Home.js"));
const Login = React.lazy(() => import("../pages/Landing.js"));
function NavigationRoutes() {
  const routes = (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
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
            <Home />
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
      <Route exact path="/login" element={<Login />}></Route>
    </Routes>
  );

  return routes;
}

export default NavigationRoutes;
