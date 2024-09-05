import React from "react";
import "./accountssection.scss";
import Upcharticon from "../../../assets/svg/upcharticon";
import standerdicon from "../../../assets/images/standerdicon.png";
import proicon from "../../../assets/images/proicon.png";
import ecnicon from "../../../assets/images/ecnicon.png";
import Accountsectionslider from "./Accountsectionsslider";

export default function Accountssection({ id }) {
  return (
    <div className="accounts-sections-main" id={id}>
      <div className="accounts-sections-container">
        <div className="accounts-sections-title-text-main">
          <h1 data-aos="fade-down">ACCOUNTS</h1>
          <h2 data-aos="fade-down">Choose a Trading Account That Fits Your Style</h2>
        </div>
        <div className="accounts-card-grid-main">
          <div className="accounts-card-grid-vol1">
            <div className="accounts-card-grid-vol1-topline"></div>
            <div className="planicon-div">
              <img data-aos="flip-right" src={standerdicon} alt="standerdicon" />
            </div>

            <div className="card-data">
              <h1 data-aos="flip-right">
                <span>Standard</span> Account
              </h1>

              <p data-aos="flip-right">An account with no commissions that is ideal for novice traders wishing to begin trading.Standard accounts provide consistent spreads and immediate execution.</p>
            </div>

            <div className="card-last-details">
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Minimum Initial Deposit of <span>$50</span>
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Spreads from <span>1.5</span> pips
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Leverage up to <span>1:500</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accounts-card-grid-vol1">
            <div className="accounts-card-grid-vol1-topline-sc"></div>
            <div className="planicon-div-sc">
              <img src={proicon} alt="proicon" data-aos="flip-right" />
            </div>

            <div className="card-data">
              <h1 data-aos="flip-right">
                <span>Pro</span> Account
              </h1>

              <p data-aos="flip-right">For traders who want to benefit from tight spreads, rapid execution, and no commissions, the Pro account is a good option.</p>
            </div>

            <div className="card-last-details">
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Minimum Initial Deposit of <span>$1000</span>
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Spreads from <span>0.8</span> pips
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Leverage up to <span>1:500</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accounts-card-grid-vol1">
            <div className="accounts-card-grid-vol1-topline-trd"></div>
            <div className="planicon-div-trd">
              <img src={ecnicon} alt="ecnicon" data-aos="flip-right" />
            </div>

            <div className="card-data">
              <h1 data-aos="flip-right">
                <span>ECN</span> Account
              </h1>

              <p data-aos="flip-right">Traders seeking instantaneous execution and raw spreads are better off with an ECN account.</p>
            </div>

            <div className="card-last-details">
              <div className="minimum-div">
                <Upcharticon />
                <p data-aos="flip-right">
                  Minimum Initial Deposit of <span>$10000</span>
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Spreads from <span>0.0</span> pips
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon data-aos="flip-right" />
                <p data-aos="flip-right">
                  Leverage up to <span>1:500</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Accountsectionslider />
      </div>
    </div>
  );
}
