import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from '../App';
import LandingPage from '../pages/LandingPage/LandingPage';
import HomeApps from '../components/HomeApps/HomeApps';
import AllApps from '../pages/AllApps/AllApps';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AppDetails from '../pages/AppDetails/AppDetails';
const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [
      {
        index: true,
        Component: HomeApps,
      },
      { path: '/apps', Component: AllApps },
      { path: '/installation', Component: Installation },
      { path: 'apps/:id', Component: AppDetails },
    ]
  },
  {
    path: '*',
    Component: ErrorPage,
  }
]);
export default router;