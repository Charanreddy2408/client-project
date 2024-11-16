import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Component/Login";
import BDashBoard from "./Component/BDashBoard";
import store from "./Redux/store"; // Redux store if needed
import { Provider } from 'react-redux'; // Redux Provider to provide the store

// Define the routes for the app
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home/",
        element: <BDashBoard />,
      },
      {
        path: "/home/icon",
        element: <div className="bg-dark text-white min-vh-100 w-100">About</div>,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

// Render the app using the RouterProvider and Redux Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}> 
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode> 
);
