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
import { Auth0Provider } from "@auth0/auth0-react";

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
        element: <MoodTracker />,
      },
      {
        path: "/home/Analytics",
        element: <Analytics />,
      },

      {
        path: "/home/Techinal_Support",
        element: <Techinal_Support />,
      },
      {
        path: "/home/Feedback",
        element: <Feedback />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
console.log(
  process.env.REACT_APP_AUTH_DOMAIN,
  process.env.REACT_APP_AUTH_CLIENT_Id
);

// Render the app using the RouterProvider and Redux Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT_Id}
        authorizationParams={{
          redirect_uri: "http://localhost:3000/home",
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
