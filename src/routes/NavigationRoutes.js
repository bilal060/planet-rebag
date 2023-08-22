import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(()=> import("../pages/Home.js"))

function NavigationRoutes() {

  const routes = <Routes>
    <Route exact path="/" element={<h1>Hello World</h1>}></Route>
    <Route exact path="/home" element={<Home/>}></Route>
  </Routes>

  return routes;
}

export default NavigationRoutes
