import React from "react";
import "./whyselectussection.scss";

import shieldicon from "../../../assets/images/shieldicon.png";
import balance from "../../../assets/images/balanceicon.png";
import headphone from "../../../assets/images/headphoneicon.png";
import upgrowicon from "../../../assets/images/upgrowicon.png";

export default function Whyselectussection() {
  return (
    <div className="whyselectus-section-main">
      <div className="whyselectus-section-container">
        <div className="whyselectus-section-title-main">
          <h1>BENEFIT FROM THE WORLD’S NO.1 ONLINE FINANCIAL DERIVATIVES BROKER</h1>
          <h2>Why Over 1 Million Clients Choose Forex Voyager Limited</h2>
          <p>We have a long history of delivering exceptional and profitable trading experiences by providing unique trading accounts, instant execution, cutting-edge platforms, and the tightest pricing and liquidity.</p>
        </div>

        <div className="whyselectus-cards-grid-main">
          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={shieldicon} alt="shieldicon" />
            </div>
            <h3>Heavily Regulated By 15 Financial Regulators</h3>
            <p>Subsidiaries regulated by ASIC, AUSTRAC, BAFIN, CIMA, ESCA, CySEC, FSC, FMA, MAS, TFG and VFSC.</p>
            <div className="whyselectus-cards-bottom-line"></div>
          </div>

          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={upgrowicon} alt="shieldicon" />
            </div>
            <h3>Daily Turnover
              US$12.1Billion</h3>
            <p>Record Breaking Financial performance in 2022</p>
            <div className="whyselectus-cards-bottom-line whyselectus-cards-bottom-line-sc"></div>
          </div>

          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={balance} alt="shieldicon" />
            </div>
            <h3>Leverage
              Up To 500:1</h3>
            <p>We provide one of the highest levels of leverage in the market, helping traders to multiply their potential profits.</p>
            <div className="whyselectus-cards-bottom-line whyselectus-cards-bottom-line-trd"></div>
          </div>

          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={headphone} alt="shieldicon" />
            </div>
            <h3>Customer
              Service</h3>
            <p>Enjoy assistance from our 24/7/365 customer service desk</p>
            <div className="whyselectus-cards-bottom-line whyselectus-cards-bottom-line-frth"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
