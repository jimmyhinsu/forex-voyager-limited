import React, { useState } from "react";
import "../header.scss";
import Dropdownicon from "../../../assets/svg/dropdownicon";

function Headermain() {
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isProductsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [isPlatformsDropdownVisible, setPlatformsDropdownVisible] = useState(false);
  const [isAccountsDropdownVisible, setAccountsDropdownVisible] = useState(false);
  const [isToolsDropdownVisible, setToolsDropdownVisible] = useState(false);
  const [isPartnershipDropdownVisible, setPartnershipDropdownVisible] = useState(false);

  const handleAboutMouseEnter = () => setAboutDropdownVisible(true);
  const handleAboutMouseLeave = () => setAboutDropdownVisible(false);

  const handleProductsMouseEnter = () => setProductsDropdownVisible(true);
  const handleProductsMouseLeave = () => setProductsDropdownVisible(false);

  const handlePlatformsMouseEnter = () => setPlatformsDropdownVisible(true);
  const handlePlatformsMouseLeave = () => setPlatformsDropdownVisible(false);

  const handleAccountsMouseEnter = () => setAccountsDropdownVisible(true);
  const handleAccountsMouseLeave = () => setAccountsDropdownVisible(false);

  const handleToolsMouseEnter = () => setToolsDropdownVisible(true);
  const handleToolsMouseLeave = () => setToolsDropdownVisible(false);

  const handlePartnershipMouseEnter = () => setPartnershipDropdownVisible(true);
  const handlePartnershipMouseLeave = () => setPartnershipDropdownVisible(false);

  return (
    <div className="Headermain">
      <div className="Headerlogo">
        <a href="/">
          <p>
            <span>Forex Voyager </span>
            Limited
          </p>
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
                  <a href="#about-section1">Why Forex Voyager</a>
                  <a href="#about-section2">Regulations</a>
                  <a href="#about-section3">Careers</a>
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
                  <a href="#products-section1">Forex</a>
                  <a href="#products-section2">Metals</a>
                  <a href="#products-section3">Shares</a>
                  <a href="#products-section4">Indices</a>
                  <a href="#products-section5">Commodities</a>
                  <a href="#products-section6">Cryptocurrencies</a>
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
                  <a href="#platforms-section1">MT5 Platform</a>
                  <a href="#platforms-section2">Web Trader MT5</a>
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
                  <a href="#accounts-section1">Compare Accounts</a>
                  <a href="#accounts-section2">Standard</a>
                  <a href="#accounts-section3">Pro</a>
                  <a href="#accounts-section4">ECN</a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isToolsDropdownVisible ? "active" : ""}`} onMouseEnter={handleToolsMouseEnter} onMouseLeave={handleToolsMouseLeave}>
          <a href="#tools" className={`${isToolsDropdownVisible ? "anceractive" : ""}`}>
            Tools <Dropdownicon />
          </a>
          {isToolsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <a href="#tools-section1">Trading Tools</a>
                  <a href="#tools-section2">Trading Conditions</a>
                  <a href="#tools-section3">Trading Hours & Holiday Notice</a>
                  <a href="#tools-section4">CFD Expiration Dates</a>
                  <a href="#tools-section5">Education</a>
                  <a href="#tools-section6">Economic Calendar</a>
                  <a href="#tools-section7">Contract Specifications</a>
                  <a href="#tools-section8">Swap-free Policy</a>
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
                  <a href="#partnership-section1">Introducing Brokers</a>
                  <a href="#partnership-section2">Franchise Program</a>
                  <a href="#partnership-section3">Institutional Liquidity Offering</a>
                  <a href="#partnership-section4">CPA Affiliate Program</a>
                  <a href="#partnership-section5">IB Offers</a>
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
