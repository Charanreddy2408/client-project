import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Component/Login";
import BDashBoard from "./Component/BDashBoard";
import store from "./Redux/store"; // Redux store if needed
import { Provider } from "react-redux"; // Redux Provider to provide the store
import MoodTracker from "./Component/moodTracker";
import Analytics from "./Component/Analytics";
import Feedback from "./Component/Feedback";
import Techinal_Support from "./Component/Technical_support";

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
        path: "/home/mood-tracker",
        element: (
          <div className="bg-dark text-white min-vh-100 w-100">
            <MoodTracker />
          </div>
        ),
      },
      {
        path: "/home/Analytics",
        element: (
          <div className="bg-dark text-white min-vh-100 w-100">
            <Analytics />
          </div>
        ),
      },

      {
        path: "/home/Techinal_Support",
        element: (
          <div className="bg-dark text-white min-vh-100 w-100">
            <Techinal_Support />
          </div>
        ),
      },
      {
        path: "/home/Feedback",
        element: (
          <div className="bg-dark text-white min-vh-100 w-100">
            <Feedback />
          </div>
        ),
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
