import { useState } from "react";
import { FaSearch, FaBell, FaSignOutAlt, FaHome } from "react-icons/fa";

export default function BNavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg py-4 navbar-custom text-white position-sticky top-0 w-100 z-index-10"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid">
        {/* Home Icon */}
        <button className="btn ">
          <FaHome color="white" size={30} />
        </button>

        {/* Toggle Search */}
        <button
          className="btn btn-outline-light d-lg-none ms-auto"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FaSearch />
        </button>

        {/* Search Bar */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isSearchOpen ? "d-block" : "d-none d-lg-flex"
          }`}
        >
          <form
            style={{
              backgroundColor: "#3e4352",
              width: "50%",
              borderRadius: "5px",
              gap: "20px",
            }}
            className="d-flex justify-content-start align-items-center p-2 px-4"
          >
            <FaSearch size={20} />
            <input
              style={{
                backgroundColor: "#3e4352",
                border: "none",
                color: "white",
                textAlign: "start",
              }}
              type="text"
              className="placeholder-white"
              placeholder="Search..."
            />
          </form>
        </div>

        {/* Icons */}
        <div className="d-flex ms-auto">
          <button className="btn  me-2">
            <FaBell color="white" size={20} />
          </button>
          <button className="btn ">
            <FaSignOutAlt color="white" size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
