import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(()=> import("../pages/Home.js"))
const Login = React.lazy(() => import("../pages/Login"));
function NavigationRoutes() {

  const routes = (
    <Routes>
      <Route exact path="/" element={<h1>Hello World</h1>}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
    </Routes>
  );

  return routes;
}

export default NavigationRoutes
