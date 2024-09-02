import React from "react";
import "./whyselectussection.scss";

// import shieldicon from "../../../assets/images/shieldicon.png";
import balance from "../../../assets/images/balanceicon.png";
import headphone from "../../../assets/images/headphoneicon.png";
import upgrowicon from "../../../assets/images/upgrowicon.png";

export default function Whyselectussection({ id }) {
  return (
    <div className="whyselectus-section-main" id={id}>
      <div className="whyselectus-section-container">
        <div className="whyselectus-section-title-main">
          <h1>BENEFIT FROM THE WORLD’S NO.1 ONLINE FINANCIAL DERIVATIVES BROKER</h1>
          <h2>The Reasons Over A Million Customers Select Forex Voyager Limited</h2>
          <p>Our lengthy history of providing distinctive trading accounts, fast execution, state-of-the-art platforms, tightest pricing and liquidity, and unique trading experiences has allowed us to consistently deliver great and successful trading experiences.</p>
        </div>

        <div className="whyselectus-cards-grid-main">
          {/* <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={shieldicon} alt="shieldicon" />
            </div>
            <h3>Heavily Regulated By 15 Financial Regulators</h3>
            <p>Subsidiaries regulated by ASIC, AUSTRAC, BAFIN, CIMA, ESCA, CySEC, FSC, FMA, MAS, TFG and VFSC.</p>
            <div className="whyselectus-cards-bottom-line"></div>
          </div> */}

          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={upgrowicon} alt="shieldicon" />
            </div>
            <h3>Daily Revenue of $12.1 billion USD</h3>
            <p>Record Breaking Financial performance in 2022</p>
            <div className="whyselectus-cards-bottom-line whyselectus-cards-bottom-line-sc"></div>
          </div>

          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={balance} alt="shieldicon" />
            </div>
            <h3>Leverage Up To 1:500</h3>
            <p>We provide one of the highest levels of leverage in the market, helping traders to multiply their potential profits.</p>
            <div className="whyselectus-cards-bottom-line whyselectus-cards-bottom-line-trd"></div>
          </div>

          <div className="whyselectus-cards-grid-items1">
            <div className="whyselectus-cards-icons">
              <img src={headphone} alt="shieldicon" />
            </div>
            <h3>Client Support</h3>
            <p>Enjoy assistance from our 24/7/365 Client Support desk</p>
            <div className="whyselectus-cards-bottom-line whyselectus-cards-bottom-line-frth"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
