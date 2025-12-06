import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
        {
            index:true,
            Component:Home,
        }
    ]
  },
]);
export default router;