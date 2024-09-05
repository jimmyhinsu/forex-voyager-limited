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
              <img src={logo} alt="error" data-aos="flip-right" />
            </Link>
          </div>

          <div className="footer-top-line-content">
            <NavLink to={"/contactus"} data-aos="fade-down">Contact Us</NavLink>
            {/* <NavLink to={"/"}>Support</NavLink>
            <NavLink to={"/"} id="career-border-remove">
              Careers
            </NavLink> */}
          </div>
        </div>
        <div className="footer-content-main-layout">
          <div className="footer-content-main">
            <div className="footer-content">
              <p data-aos="fade-down">About</p>
              <div className="footer-all-links-main">
                <Link to={"/whyforexvoyager"} data-aos="fade-right">Why Forex Voyager</Link>
                <Link to={"/regulations"} data-aos="fade-right">Regulations</Link>
              </div>
            </div>

            <div className="footer-content">
              <p data-aos="fade-down">Products</p>
              <div className="footer-all-links-main">
                <Link to={"/Forex"} data-aos="fade-right">Forex</Link>
                <Link to={"/metals"} data-aos="fade-right">Metals</Link>
                <Link to={"/shares"} data-aos="fade-right">Shares</Link>
                <Link to={"/indices"} data-aos="fade-right">Indices</Link>
                <Link to={"/commodities"} data-aos="fade-right">Commodities</Link>
                <Link to={"/cryptocurrencies"} data-aos="fade-right">Cryptocurrencies</Link>
              </div>
            </div>

            <div className="footer-content">
              <p data-aos="fade-down">Platforms</p>
              <div className="footer-all-links-main">
                <Link to={"/meta5"} data-aos="fade-right">MT5 Platform</Link>
                <Link to={"/webtradermeta5"} data-aos="fade-right">Web Trader MT5</Link>
              </div>
            </div>

            <div className="footer-content">
              <p data-aos="fade-down">Accounts</p>
              <div className="footer-all-links-main">
                {/* <Link to={"/"}>Compare Accounts</Link> */}
                <Link to={"/standard"} data-aos="fade-right">Standard</Link>
                <Link to={"/pro"} data-aos="fade-right">Pro</Link>
                <Link to={"/ecn"} data-aos="fade-right">ECN</Link>
              </div>
            </div>


            <div className="footer-content">
              <p data-aos="fade-down">Partnership</p>
              <div className="footer-all-links-main">
                <Link to={"/"} data-aos="fade-right">Introducing Brokers</Link>
                <Link to={"/"} data-aos="fade-right">Franchise Program</Link>
                {/* <Link to={"/"}>Institutional Liquidity Offering</Link>
                <Link to={"/"}>CPA Affiliate Program</Link>
                <Link to={"/"}>IB Offers</Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-line">
          <Link to={"/privacypage"} data-aos="fade-right">Privacy Policy</Link>
          <Link to={"/terms"} data-aos="fade-right">Terms & Conditions</Link>
          <Link to={"/amlpolicy"} data-aos="fade-right">AML Policy</Link>
          <Link to={"/deposit"} data-aos="fade-right">Deposit & withdrawal Policy</Link>
          <Link to={"/restrictedpolicy"} data-aos="fade-right">Restricted Countries</Link>
          <Link to={"/riskdisclosure"} id="risk-side-border-remove" data-aos="fade-right">
            Risk Disclosure
          </Link>
        </div>

        <div className="footer-copyright-text">
          <p data-aos="fade-right">© 2024 All Rights Reserved By Forex Voyager Limited</p>
        </div>
      </div>
    </div>
  );
}
