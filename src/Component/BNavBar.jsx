import { useState } from "react";
import { FaSearch, FaBell, FaSignOutAlt, FaHome } from "react-icons/fa";

export default function BNavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom text-white position-fixed top-0 w-100 z-index-10" style={{ backgroundColor: 'black' }}>
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
          <form className="d-flex" style={{ maxWidth: '300px' }}>
            <input
              type="text"
              className="form-control me-2"
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
