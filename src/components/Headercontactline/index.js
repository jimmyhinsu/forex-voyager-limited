import React, { useState } from "react";
import "./Headertopcontactline.scss";
import { Link, NavLink } from "react-router-dom";

function Headertopline() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="Headertopline">
      <div className="Headertopline-contact-and-number">
        <div className="in-number-text">
          <a href="tel:971551133624">
            <span>IN:+971551133624</span>
          </a>
        </div>
        <div className="Contact-text">
          <Link to={"/contactus"}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>

      <div className="World-title-main">
        <p>World's Leading Forex Broker</p>
        <div className="border-div-header"></div>
      </div>

      <div className="Header-top-line-right-buttons">
        <div className="dropdown-container" onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
          <NavLink to={"/"}>Log in</NavLink>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-content-main">
                <div className="dropdown-content">
                  <NavLink to={"/"}>My Portal</NavLink>
                  <NavLink to={"/"}>MultiBank-Plus</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="Header-top-line-button">
          <button>Become an IB</button>
          <button>Start Trading</button>
        </div>
      </div>
    </div>
  );
}

export default Headertopline;
