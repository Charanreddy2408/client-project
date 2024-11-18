import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emojiIcon from "../Assests/images/Group 1272628347.png";
import analyticsIcon from "../Assests/images/Frame (1).png";
import technicalsupportIcon from "../Assests/images/Vector (2).png";
import { useSelector } from "react-redux";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
export default function BSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const sidebarItems = useSelector(
    (state) => state.dashBoard.dashBoardDetails.sideBarItems
  );
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Function to determine if the current section is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`d-none bg-sidebar-bg d-lg-flex flex-column justify-content-between  sidebar-container position-sticky top-0  bottom-0 text-white py-4 ${
        isOpen ? "open" : "closed"
      }`}
    >
      <ul className=" px-2 list-unstyled">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(item.redirect)}
            className={`d-flex align-items-center  mb-4 ${
              isOpen ? "" : "justify-content-center"
            } ${isActive(item.redirect) ? "bg-dark text-light " : ""}`}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="fs-4 cursor-pointer"
              title={item.name} // Tooltip shows the name of the item
            />

            {isOpen && (
              <a
                href={item.path}
                className="ms-3 text-decoration-none text-white"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <button
        style={{
          right: isOpen ? "7%" : "-15%",
        }}
        className=" bg-sidebar-bg  text-white mb-2  w-5 h-5 d-flex align-items-center justify-content-center border-0"
        onClick={toggleSidebar}
      >
        {!isOpen ? (
          <MdKeyboardDoubleArrowRight size={20} color="#848484" />
        ) : (
          <MdKeyboardDoubleArrowLeft size={20} color="#848484" />
        )}
      </button>
    </div>
  );
}
