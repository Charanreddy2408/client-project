import { useState } from "react";
import { FaSearch, FaBell, FaSignOutAlt, FaHome } from "react-icons/fa";

export default function BNavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom text-white position-sticky top-0 w-100 z-index-10"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid">
        {/* Home Icon */}
        <button className="btn btn-outline-light">
          <FaHome />
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
            }}
            className="d-flex justify-content-between align-items-center p-1 px-4"
          >
            <FaSearch size={20} />
            <input
              type="text"
              className="form-control w-100   border-0  placeholder-white"
              placeholder="Search..."
            />
          </form>
        </div>

        {/* Icons */}
        <div className="d-flex ms-auto">
          <button className="btn btn-outline-light me-2">
            <FaBell />
          </button>
          <button className="btn btn-outline-light">
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </nav>
  );
}
