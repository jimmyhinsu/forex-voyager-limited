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
          <div className="sidebar-dropdowns-content-box-main">
            <div
              className={`sidebar-dropdowns-content-box-background ${activeDropdown === 1 ? "active" : ""
                }`}
            >
              <div
                className={`sidebar-dropdowns-content-box ${activeDropdown === 1 ? "active" : ""
                  }`}
                onClick={() => handleDropdownClick(1)}
              >
                <p> About</p>
                <div
                  className={`dropdown-icon ${activeDropdown === 1 ? "active" : ""
                    }`}
                >
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 1 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/whyForexVoyager"} onClick={onClose}>
                      Why Forex Voyager Limited
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/regulations"} onClick={onClose}>
                      Licence
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-dropdowns-content-box-main">
            <div
              className={`sidebar-dropdowns-content-box-background ${activeDropdown === 2 ? "active" : ""
                }`}
            >
              <div
                className={`sidebar-dropdowns-content-box ${activeDropdown === 2 ? "active" : ""
                  }`}
                onClick={() => handleDropdownClick(2)}
              >
                <p>Products</p>
                <div
                  className={`dropdown-icon ${activeDropdown === 2 ? "active" : ""
                    }`}
                >
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 2 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/Forex"} onClick={onClose}>
                      Forex
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/metals"} onClick={onClose}>
                      Metals
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/shares"} onClick={onClose}>
                      Shares
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/indices"} onClick={onClose}>
                      Indices
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/commodities"} onClick={onClose}>
                      Commodities
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/cryptocurrencies"} onClick={onClose}>
                      Cryptocurrencies
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-dropdowns-content-box-main">
            <div
              className={`sidebar-dropdowns-content-box-background ${activeDropdown === 3 ? "active" : ""
                }`}
            >
              <div
                className={`sidebar-dropdowns-content-box ${activeDropdown === 3 ? "active" : ""
                  }`}
                onClick={() => handleDropdownClick(3)}
              >
                <p>Platforms</p>
                <div
                  className={`dropdown-icon ${activeDropdown === 3 ? "active" : ""
                    }`}
                >
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 3 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/meta5"} onClick={onClose}>
                      MT5 Platform
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/webtradermeta5"} onClick={onClose}>
                      Web Trader MT5
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-dropdowns-content-box-main">
            <div
              className={`sidebar-dropdowns-content-box-background ${activeDropdown === 4 ? "active" : ""
                }`}
            >
              <div
                className={`sidebar-dropdowns-content-box ${activeDropdown === 4 ? "active" : ""
                  }`}
                onClick={() => handleDropdownClick(4)}
              >
                <p>Accounts</p>
                <div
                  className={`dropdown-icon ${activeDropdown === 4 ? "active" : ""
                    }`}
                >
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 4 && (
                <div className="dropdown-content-sidebar-details">
                  {/* <div className="dropdowns-links-main">
                    <Link to={"/"} onClick={onClose}>
                      Compare Accounts
                    </Link>
                  </div> */}
                  <div className="dropdowns-links-main">
                    <Link to={"/Standard"} onClick={onClose}>
                      Standard
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/pro"} onClick={onClose}>
                      Pro
                    </Link>
                  </div>
                  <div className="dropdowns-links-main">
                    <Link to={"/ecn"} onClick={onClose}>
                      ECN
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-dropdowns-content-box-main sidebar-dropdowns-content-box-main-sc">
            <div
              className={`sidebar-dropdowns-content-box-background ${activeDropdown === 7 ? "active" : ""
                }`}
            >
              <div
                className={`sidebar-dropdowns-content-box ${activeDropdown === 7 ? "active" : ""
                  }`}
                onClick={() => handleDropdownClick(7)}
              >
                <p>Partnership</p>
                <div
                  className={`dropdown-icon ${activeDropdown === 7 ? "active" : ""
                    }`}
                >
                  <Asidedropdown />
                </div>
              </div>
              {activeDropdown === 7 && (
                <div className="dropdown-content-sidebar-details">
                  <div className="dropdowns-links-main">
                    <Link to={"/becomeib"} onClick={onClose}>
                      Introducing Brokers
                    </Link>
                  </div>
                  {/* <div className="dropdowns-links-main">
                    <Link to={"/"} onClick={onClose}>
                      Franchise Program
                    </Link>
                  </div> */}
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-bottom-content">
            <p>Open an account now to get started!</p>
            <div className="sidebar-button-one">
            <a href="https://clients.forexvoyager.com/" target="__blank">
              <button>
                Strat trading
                <Slideicon />
              </button>
              </a>
            </div>

            <Link to={"/becomeib"} onClick={onClose}>
              <div className="become-ib-button">
                <button>
                  <span>Become an IB</span>
                  <Slideicon />
                </button>
              </div>
            </Link>

            <div className="log-in-button">
              <a href="https://clients.forexvoyager.com/" target="__blank">
              <button>Log in</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`sidebarbackground ${isSidebarOpen ? "sidebarbackgroundopen" : ""
        }`}
        onClick={onClose}></div>

    </>
  );
}
