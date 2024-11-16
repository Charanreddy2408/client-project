import { useState } from "react";
import { FaSearch, FaBell, FaSignOutAlt, FaHome } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotifications } from "../Redux/dashBoardSlice";

export default function BNavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const notificationIsOpen = useSelector(
    (state) => state.dashBoard.Notifications.isopen
  );
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  function handleLogout() {
    logout({
      returnTo: window.location.origin, // Redirects to home after logout
    });
  }

  function handleToggle() {
    console.log(!notificationIsOpen, "ss");
    dispatch(toggleNotifications(!notificationIsOpen));
  }

  return (
    <nav
      className="navbar navbar-expand-lg p-4 navbar-custom text-white position-sticky top-0 w-100"
      style={{ backgroundColor: "black" }}
    >
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Home Icon */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-start">
          <img src="benzLogo.jpeg" alt="" />
        </div>

        {/* Toggle Search */}
        <div className="d-block d-lg-none w-25">
          <RxHamburgerMenu size={30} />
        </div>

        {/* Search Bar */}

        <div className={`d-flex justify-content-center w-50 `}>
          {isSearchOpen ? (
            <form
              style={{ gap: "15px" }}
              className="d-flex align-items-center flex-grow-1 bg-dark p-2 rounded w-100"
            >
              {/* <FaSearch size={15} /> */}
              <button className="btn d-none d-lg-block">
                <FaSearch color="white" size={20} />
              </button>
              <input
                type="text"
                className="bg-transparent border-0 text-white w-100 pl-2"
                placeholder="Search..."
              />
            </form>
          ) : (
            <div className="d-flex flex-grow-1 justify-content-center">
              <img src="benzLogo.jpeg" width={50} height={50} alt="" />
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="d-flex justify-content-end w-25">
          <button className="btn">
            <FaBell onClick={handleToggle} color="white" size={20} />
          </button>
          <button className="btn d-none d-lg-block" onClick={handleLogout}>
            <FaSignOutAlt color="white" size={15} />
          </button>
          <button className="btn d-block d-lg-none">
            <FaSearch
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
              color="white"
              size={20}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
