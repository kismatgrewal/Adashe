import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import Core from "./components/Core";
import Edit from "./components/common/Edit";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<App />} />
      <Route path="edit/:id" element={<Edit />} />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-8myyl1y6dlvpwrus.us.auth0.com"
    clientId="CmNkcd9jG0ypTfZBQHQGLBlasGwEUIgi"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ToastContainer />
    <RouterProvider router={router} />
  </Auth0Provider>
);
