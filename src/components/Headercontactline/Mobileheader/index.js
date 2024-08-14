import React, { useState, useEffect } from "react";
import "./mobileheader.scss";

import Menuicon from "../../../assets/icons/menu.png";
import Sidebar from "../../sidebar";

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
        <a href="#about">
          <p>
            <span>Forex Voyager </span>
            Limited
          </p>
        </a>
      </div>

      <div className="mobile-header-menu" onClick={toggleSidebar}>
        <img src={Menuicon} alt="Menuicon" />
      </div>

      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />}
    </div>
  );
}
