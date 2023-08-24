import React from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home.js"));
const Landing = React.lazy(() => import("../pages/Landing.js"));
function NavigationRoutes() {
  const routes = (
    <Routes>
      <Route exact path="/" element={<Landing />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
    </Routes>
  );

  return routes;
}

export default NavigationRoutes;
