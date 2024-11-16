import { useState } from "react";
import { FaHome, FaPhone } from "react-icons/fa";
import emojiIcon from "../Assests/images/Group 1272628347.png";
import analyticsIcon from "../Assests/images/Frame (1).png";
import technicalsupportIcon from "../Assests/images/Vector (2).png";
import { useNavigate } from "react-router-dom";

export default function BSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
    className={`d-none d-lg-block position-relative top-0 left-0 h-[100vh] bg-black text-white p-3 transition-transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
    style={{ width: isOpen ? "15%" : "5%", zIndex: 9 }}
    
    >
      <button
        className="position-absolute top-0 end-0 bg-dark text-white rounded-circle w-5 h-5 d-flex align-items-center justify-content-center border-0"
        onClick={toggleSidebar}
      >
        {isOpen ? "←" : "→"}
      </button>
      <ul className="mt-5 list-unstyled">
        <li className={`d-flex align-items-center ${!isOpen ? "justify-content-center" : ""} mb-4`}>
          <img src={emojiIcon} alt="Mood Tracker" className="fs-4" />
          {isOpen && <a href="/home/" className="ms-3 text-white text-decoration-none">Home</a>}
        </li>
        <li className={`d-flex align-items-center ${!isOpen ? "justify-content-center" : ""} mb-4`}>
          <img src={emojiIcon} alt="Mood Tracker" className="fs-4" />
          {isOpen && <a href="/home/mood-tracker" className="ms-3 text-white text-decoration-none">Mood Tracker</a>}
        </li>
        <li className={`d-flex align-items-center ${!isOpen ? "justify-content-center" : ""} mb-4`}>
          <img src={analyticsIcon} alt="Analytics" className="fs-4" />
          {isOpen && <a href="/home/Analytics" className="ms-3 text-white text-decoration-none">Analytics</a>}
        </li>
        <li className={`d-flex align-items-center ${!isOpen ? "justify-content-center" : ""} mb-4`}>
          <img src={emojiIcon} alt="Mood Tracker" className="fs-4" />
          {isOpen && <a href="/home/Feedback" className="ms-3 text-white text-decoration-none">Feedback</a>}
        </li>
        <li className={`d-flex align-items-center ${!isOpen ? "justify-content-center" : ""} mb-4`}>
          <img src={technicalsupportIcon} alt="Technical Support" className="fs-4" />
          {isOpen && <a href="/home/Techinal_Support" className="ms-3 text-white text-decoration-none">Technical Support</a>}
        </li>
      </ul>
    </div>
  );
}
