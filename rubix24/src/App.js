import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import routes from './routes/route';

const App = () => {

    
    const routings = createBrowserRouter(routes);
    

    return (
        <div>
            <RouterProvider router={routings} ></RouterProvider>
        </div>
    )
}

export default App