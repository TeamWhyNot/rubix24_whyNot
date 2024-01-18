import React from "react"
import Home from "../screens/Home"
import Login from "../screens/Login"

const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    }
]


export default routes;