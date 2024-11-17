import { useEffect, useState } from "react";
import { FaSearch, FaBell, FaSignOutAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotifications } from "../Redux/dashBoardSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { setSearchValue } from "../Redux/dashBoardSlice";

export default function BNavBar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [isEnterKeyPressed, setIsEnterKeyPressed] = useState(false); // Track whether Enter is pressed
  const searchValue = useSelector(
    (state) => state.dashBoard.dashBoardDetails.searchValue
  );
  const notificationIsOpen = useSelector(
    (state) => state.dashBoard.Notifications.isopen
  );

  // Prevent default behavior for Enter key and toggle search on Enter
  const handleprevent = (event) => {
    if (window.innerWidth <= 768 && event.key === "Enter") {
      event.preventDefault(); // Only prevent default behavior for Enter key
      setIsSearchOpen(!isSearchOpen); // Toggle search open/close when Enter key is pressed
    }
  };

  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const sideBarItems = useSelector(
    (state) => state.dashBoard.dashBoardDetails.sideBarItems
  );

  // Function to handle logout
  function handleLogout() {
    logout({
      returnTo: window.location.origin, // Redirects to home after logout
    });
  }

  // Toggle notifications
  function handleToggleNotifications() {
    dispatch(toggleNotifications(!notificationIsOpen));
  }

  // Toggle sidebar visibility
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;
  console.log(isActive, "isActive");

  return (
    <>
      <nav
        className="navbar border-bottom border-primary  navbar-expand-lg  navbar-custom text-white position-sticky top-0 w-100"
        style={{ backgroundColor: "black" }}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Home Icon */}
          <div className="d-none d-md-flex flex-grow-1 justify-content-start">
            <img height={50} width={50} src="/benzLogo.jpeg" alt="Logo" />
          </div>

          {/* Toggle Button */}
          <div className="d-block d-lg-none">
            <button className="btn" onClick={toggleSidebar}>
              <RxHamburgerMenu size={30} color="white" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="d-flex justify-content-center w-50">
            {isSearchOpen ? (
              <form
                style={{ gap: "15px" }}
                className="d-flex align-items-center flex-grow-1 bg-dark p-2 rounded w-100"
              >
                <button className="btn d-none d-lg-block">
                  <FaSearch color="#5f6368" size={20} />
                </button>
                <input
                  style={{
                    color: "#5f6368",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                  value={searchValue}
                  onChange={(e) => dispatch(setSearchValue(e.target.value))}
                  type="text"
                  className="bg-transparent search border-0  w-100 pl-2"
                  placeholder="Search here"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleprevent(event); // Trigger only when Enter is pressed
                    }
                  }}
                />
              </form>
            ) : (
              <img height={50} width={50} src="/benzLogo.jpeg" alt="Logo" />
            )}
          </div>

          {/* Icons */}
          <div className="d-flex justify-content-end w-25">
            <button className="btn">
              <FaBell
                onClick={handleToggleNotifications}
                color="white"
                size={20}
              />
            </button>
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
              className="btn d-block d-lg-none"
            >
              <FaSearch color="white" size={20} />
            </button>
            <button className="btn d-none d-lg-block" onClick={handleLogout}>
              <FaSignOutAlt color="white" size={15} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="position-fixed bg-dark text-white w-100"
          style={{
            top: "90px", // Adjust based on navbar height
            height: "20vh", // Sidebar occupies 20% of the viewport height
            overflow: "hidden", // Prevent unnecessary scrollbars
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center", // Center items vertically
            justifyContent: "space-around", // Distribute items horizontally
            padding: "10px 20px",
          }}
        >
          {/* Home Icon with Link */}
          {sideBarItems.map((item, index) => (
            <a
              key={index}
              href={item.redirect}
              className={`ms-3 text-decoration-none text-white ${
                isActive(item.redirect) ? "active-link" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Add styling for active links */}
      <style>
        {`
          .active-link {
            color: yellow; /* Active link color */
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}
