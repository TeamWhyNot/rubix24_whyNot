import React from "react"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Test from "../screens/Test";

const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/test",
        element:<Test/>
    }
]


export default routes;