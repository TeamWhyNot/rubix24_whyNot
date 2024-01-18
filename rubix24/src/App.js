import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import routes from './routes/route';
import AuthState from './context/AuthState';

const App = () => {


    const routings = createBrowserRouter(routes);


    return (
        <div>
            <AuthState>
                <RouterProvider router={routings}></RouterProvider>
            </AuthState>

        </div>
    )
}

export default App