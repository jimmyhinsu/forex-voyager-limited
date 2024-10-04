import React from "react";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Forex Voyeger Logo.png';
import call from '../../assets/icons/telephone-call.png';
import email from '../../assets/icons/email.png';


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
                <Link to={"/whyForexVoyager"} data-aos="fade-right">Why Forex Voyeger</Link>
                <Link to={"/regulations"} data-aos="fade-right">Licence</Link>
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
                <Link to={"/becomeib"} data-aos="fade-right">Introducing Brokers</Link>
                {/* <Link to={"/"} data-aos="fade-right">Franchise Program</Link> */}
                {/* <Link to={"/"}>Institutional Liquidity Offering</Link>
                <Link to={"/"}>CPA Affiliate Program</Link>
                <Link to={"/"}>IB Offers</Link> */}
              </div>
            </div>

            <div className="footer-content">
              <p data-aos="fade-down">Address</p>
              <div className="footer-all-links-main">
                <a href=" " data-aos="fade-right"> Registered Address :- Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, SAINT Lucia P.O Box 838, Castries, Saint Lucia.</a>

                <a href="https://maps.app.goo.gl/Wovm1KNRz4b2Ao5o8" target="__blank" data-aos="fade-right"> Physical Address : Office No. 1-01B-226, Muhaisasana Fourth, Deira, Dubai.</a>

                <span data-aos="fade-right">Registration Number:- 2024-00486</span>

                <div className="mobilenumber">
                  <div className="callicon">
                    <img data-aos="fade-right" src={call} alt="error" />
                  </div>
                  <a data-aos="fade-right" href="tel:+97143520476">+97143520476</a>
                </div>

                <div className="mobilenumber">
                  <div className="callicon">
                    <img data-aos="fade-right" src={email} alt="error" />
                  </div>
                  <a data-aos="fade-right" href="mailto:Info@forexvoyeger.com">Info@forexvoyeger.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="risk-restricted">
            <div className="risk-warning">
              <p>Risk Warning</p>
              <span>Please note that forex trading and trading in other leveraged products involves a significant level of risk and is not suitable for all investors. Trading in financial instruments may result in losses as well as profits and your losses can be greater than your initial invested capital. Before undertaking any such transactions, you should ensure that you fully understand the risks involved and seek independent advice if necessary.</span>
            </div>

            <div className="risk-warning">
              <p>Restricted Regions</p>
              <span>Forex Voyeger Limited does not provide services for citizens/residents of the USA, Cuba, Iraq, Myanmar, North Korea, Sudan. The services of Forex Voyeger are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</span>
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
          <p>© 2024 All Rights Reserved By Forex Voyeger Limited</p>
        </div>
      </div>
    </div>
  );
}
