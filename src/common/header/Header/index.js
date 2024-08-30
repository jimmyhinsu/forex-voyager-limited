import React, { useState } from "react";
import "../header.scss";
import Dropdownicon from "../../../assets/svg/dropdownicon";
import logo from '../../../assets/images/Forex Voyeger Logo.png';
import { Link } from "react-router-dom";

function Headermain() {
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isProductsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [isPlatformsDropdownVisible, setPlatformsDropdownVisible] = useState(false);
  const [isAccountsDropdownVisible, setAccountsDropdownVisible] = useState(false);

  const [isPartnershipDropdownVisible, setPartnershipDropdownVisible] = useState(false);

  const handleAboutMouseEnter = () => setAboutDropdownVisible(true);
  const handleAboutMouseLeave = () => setAboutDropdownVisible(false);

  const handleProductsMouseEnter = () => setProductsDropdownVisible(true);
  const handleProductsMouseLeave = () => setProductsDropdownVisible(false);

  const handlePlatformsMouseEnter = () => setPlatformsDropdownVisible(true);
  const handlePlatformsMouseLeave = () => setPlatformsDropdownVisible(false);

  const handleAccountsMouseEnter = () => setAccountsDropdownVisible(true);
  const handleAccountsMouseLeave = () => setAccountsDropdownVisible(false);

  const handlePartnershipMouseEnter = () => setPartnershipDropdownVisible(true);
  const handlePartnershipMouseLeave = () => setPartnershipDropdownVisible(false);

  return (
    <div className="Headermain">
      <div className="Headerlogo">
        <a href="/">
          <img src={logo} alt="error" />
        </a>
      </div>

      <div className="header-content">
        <div className={`dropdown-container ${isAboutDropdownVisible ? "active" : ""}`} onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
          <a href="#about" className={`${isAboutDropdownVisible ? "anceractive" : ""}`}>
            About <Dropdownicon />
          </a>
          {isAboutDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <Link to={"/whyforexvoyager"}>Why Forex Voyager</Link>
                  <Link to={"/regulations"}>Regulations</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isProductsDropdownVisible ? "active" : ""}`} onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
          <a href="#products" className={`${isProductsDropdownVisible ? "anceractive" : ""}`}>
            Products <Dropdownicon />
          </a>
          {isProductsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <Link to={"/Forex"}>Forex</Link>
                  <Link to={"/metals"}>Metals</Link>
                  <Link to={"/shares"}>Shares</Link>
                  <Link to={"/indices"}>Indices</Link>
                  <Link to={"/commodities"}>Commodities</Link>
                  <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isPlatformsDropdownVisible ? "active" : ""}`} onMouseEnter={handlePlatformsMouseEnter} onMouseLeave={handlePlatformsMouseLeave}>
          <a href="#platforms" className={`${isPlatformsDropdownVisible ? "anceractive" : ""}`}>
            Platforms <Dropdownicon />
          </a>
          {isPlatformsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <Link to={"/meta5"}>MT5 Platform</Link>
                  <Link to={"/webtradermeta5"}>Web Trader MT5</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isAccountsDropdownVisible ? "active" : ""}`} onMouseEnter={handleAccountsMouseEnter} onMouseLeave={handleAccountsMouseLeave}>
          <a href="#accounts" className={`${isAccountsDropdownVisible ? "anceractive" : ""}`}>
            Accounts <Dropdownicon />
          </a>
          {isAccountsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <Link to={"/"}>Compare Accounts</Link>
                  <Link to={"/"}>Standard</Link>
                  <Link to={"/"}>Pro</Link>
                  <Link to={"/"}>ECN</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isPartnershipDropdownVisible ? "active" : ""}`} onMouseEnter={handlePartnershipMouseEnter} onMouseLeave={handlePartnershipMouseLeave}>
          <a href="#partnership" className={`${isPartnershipDropdownVisible ? "anceractive" : ""}`}>
            Partnership <Dropdownicon />
          </a>
          {isPartnershipDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <Link to={"/"}>Introducing Brokers</Link>
                  <Link to={"/"}>Franchise Program</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Headermain;
