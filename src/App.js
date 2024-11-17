import "./App.css";
import BNavBar from "../src/Component/BNavBar";
import BSideBar from "../src/Component/BSideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
function App() {
  const dashBoardDetails = useSelector(
    (state) => state.dashBoard.dashBoardDetails
  );

  return (
    <div className="App">
      <BNavBar />
      <div className="main-section">
        <BSideBar />

        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
