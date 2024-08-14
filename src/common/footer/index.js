import React from "react";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footertopline">
          <div className="footerlogo">
            <Link to={"/"}>
              <p>
                <span>Forex Voyager </span>
                Limited
                {/* <strong></strong>
              <b></b> */}
              </p>
            </Link>
          </div>

          <div className="footer-top-line-content">
            <NavLink to={"/"}>Contact Us</NavLink>
            <NavLink to={"/"}>Support</NavLink>
            <NavLink to={"/"} id="career-border-remove">
              Careers
            </NavLink>
          </div>
        </div>
        <div className="footer-content-main-layout">
          <div className="footer-content-main">
            <div className="footer-content">
              <p>About</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Why Forex Voyager</Link>
                <Link to={"/"}>Regulations</Link>
                <Link to={"/"}>Careers</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Products</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Forex</Link>
                <Link to={"/"}>Metals</Link>
                <Link to={"/"}>Shares</Link>
                <Link to={"/"}>Indices</Link>
                <Link to={"/"}>Commodities</Link>
                <Link to={"/"}>Cryptocurrencies</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Platforms</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>MT5 Platform</Link>
                <Link to={"/"}>Web Trader MT5</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Accounts</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Compare Accounts</Link>
                <Link to={"/"}>Standard</Link>
                <Link to={"/"}>Pro</Link>
                <Link to={"/"}>ECN</Link>
                <Link to={"/"}>Islamic Account</Link>
                <Link to={"/"}>Account Funding</Link>
                <Link to={"/"}>Withdrawals</Link>
                <Link to={"/"}>Account Forms</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Tools</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Trading Tools</Link>
                <Link to={"/"}>Trading Conditions</Link>
                <Link to={"/"}>Trading Hours & Holiday Notice</Link>
                <Link to={"/"}>CFD Expiration Dates</Link>
                <Link to={"/"}>Education</Link>
                <Link to={"/"}>Economic Calendar</Link>
                <Link to={"/"}>Contract Specifications</Link>
                <Link to={"/"}>Swap-free Policy</Link>
              </div>
            </div>

            <div className="footer-content">
              <p>Partnership</p>
              <div className="footer-all-links-main">
                <Link to={"/"}>Introducing Brokers</Link>
                <Link to={"/"}>Franchise Program</Link>
                <Link to={"/"}>Institutional Liquidity Offering</Link>
                <Link to={"/"}>CPA Affiliate Program</Link>
                <Link to={"/"}>IB Offers</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-line">
          <Link to={"/"}>Privacy Policy</Link>
          <Link to={"/"}>Terms & Conditions</Link>
          <Link to={"/"}>AMS Policy</Link>
          <Link to={"/"}>Deposit & withdrawal Policy</Link>
          <Link to={"/"}>Restricted Countries</Link>
          <Link to={"/"} id="risk-side-border-remove">
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
