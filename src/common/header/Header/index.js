import React, { useState } from "react";
import "../header.scss";
import { NavLink } from "react-router-dom";
import Dropdownicon from "../../../assets/svg/dropdownicon";

function Headermain() {
  // State for managing visibility of each dropdown
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isProductsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [isPlatformsDropdownVisible, setPlatformsDropdownVisible] = useState(false);
  const [isAccountsDropdownVisible, setAccountsDropdownVisible] = useState(false);
  const [isPromotionsDropdownVisible, setPromotionsDropdownVisible] = useState(false);
  const [isToolsDropdownVisible, setToolsDropdownVisible] = useState(false);
  const [isPartnershipDropdownVisible, setPartnershipDropdownVisible] = useState(false);
  // const [isENDropdownVisible, setENDropdownVisible] = useState(false);

  // Handlers for showing and hiding each dropdown
  const handleAboutMouseEnter = () => setAboutDropdownVisible(true);
  const handleAboutMouseLeave = () => setAboutDropdownVisible(false);

  const handleProductsMouseEnter = () => setProductsDropdownVisible(true);
  const handleProductsMouseLeave = () => setProductsDropdownVisible(false);

  const handlePlatformsMouseEnter = () => setPlatformsDropdownVisible(true);
  const handlePlatformsMouseLeave = () => setPlatformsDropdownVisible(false);

  const handleAccountsMouseEnter = () => setAccountsDropdownVisible(true);
  const handleAccountsMouseLeave = () => setAccountsDropdownVisible(false);

  const handlePromotionsMouseEnter = () => setPromotionsDropdownVisible(true);
  const handlePromotionsMouseLeave = () => setPromotionsDropdownVisible(false);

  const handleToolsMouseEnter = () => setToolsDropdownVisible(true);
  const handleToolsMouseLeave = () => setToolsDropdownVisible(false);

  const handlePartnershipMouseEnter = () => setPartnershipDropdownVisible(true);
  const handlePartnershipMouseLeave = () => setPartnershipDropdownVisible(false);

  // const handleENMouseEnter = () => setENDropdownVisible(true);
  // const handleENMouseLeave = () => setENDropdownVisible(false);

  return (
    <div className="Headermain">
      <div className="Headerlogo">
        <p>
          <span>Forex Voyager </span>
          Limited
          {/* <strong></strong>
          <b></b> */}
        </p>
      </div>

      <div className="header-content">
        <div className={`dropdown-container ${isAboutDropdownVisible ? "active" : ""}`} onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
          <NavLink to={"/"} className={`${isAboutDropdownVisible ? "anceractive" : ""}`}>
            About <Dropdownicon />
          </NavLink>
          {isAboutDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Why MultiBank</NavLink>
                  <NavLink to={"/"}>Global Presence</NavLink>
                  <NavLink to={"/"}>Regulations</NavLink>
                  <NavLink to={"/"}>Security of Funds</NavLink>
                  <NavLink to={"/"}>Milestones</NavLink>
                  <NavLink to={"/"}>Awards</NavLink>
                  <NavLink to={"/"}>Company News</NavLink>
                  <NavLink to={"/"}>Sponsorship</NavLink>
                  <NavLink to={"/"}>Careers</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isProductsDropdownVisible ? "active" : ""}`} onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
          <NavLink to={"/"} className={`${isProductsDropdownVisible ? "anceractive" : ""}`}>
            Products <Dropdownicon />
          </NavLink>
          {isProductsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Forex</NavLink>
                  <NavLink to={"/"}>Metals</NavLink>
                  <NavLink to={"/"}>Shares</NavLink>
                  <NavLink to={"/"}>Indices</NavLink>
                  <NavLink to={"/"}>Commodities</NavLink>
                  <NavLink to={"/"}>Cryptocurrencies</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isPlatformsDropdownVisible ? "active" : ""}`} onMouseEnter={handlePlatformsMouseEnter} onMouseLeave={handlePlatformsMouseLeave}>
          <NavLink to={"/"} className={`${isPlatformsDropdownVisible ? "anceractive" : ""}`}>
            Platforms <Dropdownicon />
          </NavLink>
          {isPlatformsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>MT4 Platform</NavLink>
                  <NavLink to={"/"}>MT5 Platform</NavLink>
                  <NavLink to={"/"}>Web Trader MT4</NavLink>
                  <NavLink to={"/"}>Web Trader MT5</NavLink>
                  <NavLink to={"/"}>Social Trading</NavLink>
                  <NavLink to={"/"}>MultiBank-Plus</NavLink>
                  <NavLink to={"/"}>Download Center</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isAccountsDropdownVisible ? "active" : ""}`} onMouseEnter={handleAccountsMouseEnter} onMouseLeave={handleAccountsMouseLeave}>
          <NavLink to={"/"} className={`${isAccountsDropdownVisible ? "anceractive" : ""}`}>
            Accounts <Dropdownicon />
          </NavLink>
          {isAccountsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Compare Accounts</NavLink>
                  <NavLink to={"/"}>Standard</NavLink>
                  <NavLink to={"/"}>Pro</NavLink>
                  <NavLink to={"/"}>ECN</NavLink>
                  <NavLink to={"/"}>Islamic Account</NavLink>
                  <NavLink to={"/"}>Account Funding</NavLink>
                  <NavLink to={"/"}>Withdrawals</NavLink>
                  <NavLink to={"/"}>Account Forms</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isPromotionsDropdownVisible ? "active" : ""}`} onMouseEnter={handlePromotionsMouseEnter} onMouseLeave={handlePromotionsMouseLeave}>
          <NavLink to={"/"} className={`${isPromotionsDropdownVisible ? "anceractive" : ""}`}>
            Promotions <Dropdownicon />
          </NavLink>
          {isPromotionsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Bonuses</NavLink>
                  <NavLink to={"/"}>Mission Center</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isToolsDropdownVisible ? "active" : ""}`} onMouseEnter={handleToolsMouseEnter} onMouseLeave={handleToolsMouseLeave}>
          <NavLink to={"/"} className={`${isToolsDropdownVisible ? "anceractive" : ""}`}>
            Tools <Dropdownicon />
          </NavLink>
          {isToolsDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Trading Tools</NavLink>
                  <NavLink to={"/"}>Trading Conditions</NavLink>
                  <NavLink to={"/"}>Trading Hours & Holiday Notice</NavLink>
                  <NavLink to={"/"}>CFD Expiration Dates</NavLink>
                  <NavLink to={"/"}>Education</NavLink>
                  <NavLink to={"/"}>Economic Calendar</NavLink>
                  <NavLink to={"/"}>Contract Specifications</NavLink>
                  <NavLink to={"/"}>Swap-free Policy</NavLink>
                  <NavLink to={"/"}>Dividends</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`dropdown-container ${isPartnershipDropdownVisible ? "active" : ""}`} onMouseEnter={handlePartnershipMouseEnter} onMouseLeave={handlePartnershipMouseLeave}>
          <NavLink to={"/"} className={`${isPartnershipDropdownVisible ? "anceractive" : ""}`}>
            Partnership <Dropdownicon />
          </NavLink>
          {isPartnershipDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Introducing Brokers</NavLink>
                  <NavLink to={"/"}>Franchise Program</NavLink>
                  <NavLink to={"/"}>Institutional Liquidity Offering</NavLink>
                  <NavLink to={"/"}>CPA Affiliate Program</NavLink>
                  <NavLink to={"/"}>IB Offers</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div className={`dropdown-container ${isENDropdownVisible ? "active" : ""}`} onMouseEnter={handleENMouseEnter} onMouseLeave={handleENMouseLeave}>
          <NavLink to={"/"} className={`${isENDropdownVisible ? "anceractive" : ""}`}>
            EN <Dropdownicon />
          </NavLink>
          {isENDropdownVisible && (
            <div className="dropdown-menu1">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>Hindi</NavLink>
                  <NavLink to={"/"}>English</NavLink>
                  <NavLink to={"/"}>Gujarati</NavLink>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Headermain;
