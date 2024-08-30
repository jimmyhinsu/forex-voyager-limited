import React from "react";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Forex Voyeger Logo.png';

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footertopline">
          <div className="footerlogo">
            <Link to={"/"}>
              <img src={logo} alt="error" />
            </Link>
          </div>

          <div className="footer-top-line-content">
            <NavLink to={"/contactus"}>Contact Us</NavLink>
            {/* <NavLink to={"/"}>Support</NavLink>
            <NavLink to={"/"} id="career-border-remove">
              Careers
            </NavLink> */}
          </div>
        </div>
        <div className="footer-content-main-layout">
          <div className="footer-content-main">
            <div className="footer-content">
              <p>About</p>
              <div className="footer-all-links-main">
                <Link to={"/whyforexvoyager"}>Why Forex Voyager</Link>
                <Link to={"/regulations"}>Regulations</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Products</p>
              <div className="footer-all-links-main">
                <Link to={"/Forex"}>Forex</Link>
                <Link to={"/metals"}>Metals</Link>
                <Link to={"/shares"}>Shares</Link>
                <Link to={"/indices"}>Indices</Link>
                <Link to={"/commodities"}>Commodities</Link>
                <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Platforms</p>
              <div className="footer-all-links-main">
                <Link to={"/meta5"}>MT5 Platform</Link>
                <Link to={"/webtradermeta5"}>Web Trader MT5</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Accounts</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Compare Accounts</Link>
                <Link to={"/standard"}>Standard</Link>
                <Link to={"/pro"}>Pro</Link>
                <Link to={"/ecn"}>ECN</Link>
              </div>
            </div>


            <div className="footer-content">
              <p>Partnership</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Introducing Brokers</Link>
                <Link to={"/"}>Franchise Program</Link>
                {/* <Link to={"/"}>Institutional Liquidity Offering</Link>
                <Link to={"/"}>CPA Affiliate Program</Link>
                <Link to={"/"}>IB Offers</Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-line">
          <Link to={"/privacypage"}>Privacy Policy</Link>
          <Link to={"/terms"}>Terms & Conditions</Link>
          <Link to={"/amlpolicy"}>AML Policy</Link>
          <Link to={"/deposit"}>Deposit & withdrawal Policy</Link>
          <Link to={"/restrictedpolicy"}>Restricted Countries</Link>
          <Link to={"/riskdisclosure"} id="risk-side-border-remove">
            Risk Disclosure
          </Link>
        </div>

        <div className="footer-copyright-text">
          <p>© 2024 All Rights Reserved By Forex Voyager Limited</p>
        </div>
      </div>
    </div>
  );
}
