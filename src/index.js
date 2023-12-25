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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="hero" element={<Hero />} />
      <Route path="navbar" element={<Navbar />} />
    </Route>
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
    <RouterProvider router={router} />
  </Auth0Provider>
);
