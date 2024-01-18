import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Categories from "../screens/Categories";
import Test from "../screens/Test";
import SignUp from "../screens/SignUp";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/signup",
    element:<SignUp/> ,
  },

];

export default routes;
