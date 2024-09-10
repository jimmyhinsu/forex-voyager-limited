import React, { useState, useEffect } from "react";
import "./mobileheader.scss";
import logo from '../../../assets/images/Forex Voyeger Logo.png';

import Menuicon from "../../../assets/icons/menu.png";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";

export default function Mobileheader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="mobile-header-main">
      <div className="mobile-Header-logo">
        <Link to={'/'}>
          <img src={logo} alt="error" />
        </Link>
      </div>

      <div className="mobile-header-menu" onClick={toggleSidebar}>
        <img src={Menuicon} alt="Menuicon" />
      </div>

      <>
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />}
      </>
    </div>
  );
}
