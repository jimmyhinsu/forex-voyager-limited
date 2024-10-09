import React from "react";
import "./Headertopcontactline.scss";
import { Link } from "react-router-dom";

function Headertopline() {

  return (
    <div className="Headertopline">
      <div className="Headertopline-contact-and-number">
        <div className="in-number-text">
          <a href="tel:+97143520476">
            <span>UAE :+97143520476</span>
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

      {/* <div className="Header-top-line-right-buttons">
        <div className="Header-top-line-button">
          <button>Start Trading</button>
        </div>
      </div> */}


    </div>
  );
}

export default Headertopline;
