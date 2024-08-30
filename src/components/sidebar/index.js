import React, { useState } from "react";
import "./sidebar.scss";

import Closeicon from "../../assets/icons/close.png";
import { Link } from "react-router-dom";
import Asidedropdown from "../../assets/svg/asidedropdown";
import Slideicon from "../../assets/svg/slideicon";

export default function Sidebar({ isSidebarOpen, onClose }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top-line">
          <div className="close-btn" onClick={onClose}>
            <img src={Closeicon} alt="Close icon" />
          </div>
        </div>
        <div className="sidebar-content-main">
          <div className={`sidebar-dropdowns-content-box-main`}>
            <div className={`sidebar-dropdowns-content-box-background ${activeDropdown === 1 ? "active" : ""}`}>
              <div className={`sidebar-dropdowns-content-box ${activeDropdown === 1 ? "active" : ""}`} onClick={() => handleDropdownClick(1)}>
                <Link to={"/"}>About</Link>
                <div className={`dropdown-icon ${activeDropdown === 1 ? "active" : ""}`}>
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 1 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/cryptocurrencies"}>Why Forex voyager Limited</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/regulations"}>Regulations</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`sidebar-dropdowns-content-box-main`}>
            <div className={`sidebar-dropdowns-content-box-background ${activeDropdown === 2 ? "active" : ""}`}>
              <div className={`sidebar-dropdowns-content-box ${activeDropdown === 2 ? "active" : ""}`} onClick={() => handleDropdownClick(2)}>
                <Link to={"/"}>Products</Link>
                <div className={`dropdown-icon ${activeDropdown === 2 ? "active" : ""}`}>
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 2 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/Forex"}>Forex</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/metals"}>Metals</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/shares"}>Shares</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/indices"}>Indices</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/commodities"}>Commodities</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`sidebar-dropdowns-content-box-main`}>
            <div className={`sidebar-dropdowns-content-box-background ${activeDropdown === 3 ? "active" : ""}`}>
              <div className={`sidebar-dropdowns-content-box ${activeDropdown === 3 ? "active" : ""}`} onClick={() => handleDropdownClick(3)}>
                <Link to={"/"}>Platforms</Link>
                <div className={`dropdown-icon ${activeDropdown === 3 ? "active" : ""}`}>
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 3 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/meta5"}>MT5 Platform</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/webtradermeta5"}>Web Trader MT5</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`sidebar-dropdowns-content-box-main`}>
            <div className={`sidebar-dropdowns-content-box-background ${activeDropdown === 4 ? "active" : ""}`}>
              <div className={`sidebar-dropdowns-content-box ${activeDropdown === 4 ? "active" : ""}`} onClick={() => handleDropdownClick(4)}>
                <Link to={"/"}>Accounts</Link>
                <div className={`dropdown-icon ${activeDropdown === 4 ? "active" : ""}`}>
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 4 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/"}>Compare Accounts</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/Standard"}>Standard</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/pro"}>Pro</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/ecn"}>ECN</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`sidebar-dropdowns-content-box-main sidebar-dropdowns-content-box-main-sc`}>
            <div className={`sidebar-dropdowns-content-box-background ${activeDropdown === 7 ? "active" : ""}`}>
              <div className={`sidebar-dropdowns-content-box ${activeDropdown === 7 ? "active" : ""}`} onClick={() => handleDropdownClick(7)}>
                <Link to={"/"}>Partnership</Link>
                <div className={`dropdown-icon ${activeDropdown === 7 ? "active" : ""}`}>
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 7 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/"}>Introducing Brokers</Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/"}>Franchise Program</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-bottom-content">
            <p>Open an account now to get started!</p>
            <div className="sidebar-button-one">
              <button>
                Strat tarding
                <Slideicon />
              </button>
            </div>
            <div className="become-ib-button">
              <button>
                <span>Become an IB</span>
                <Slideicon />
              </button>
            </div>
            <div className="log-in-button">
              <button>Log in</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebarbackground ${isSidebarOpen ? "sidebarbackgroundopen" : ""}`} onClick={onClose}></div>
    </>
  );
}
