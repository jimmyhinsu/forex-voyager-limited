import React from "react";
import "./brokersprogramsections.scss";
import Slideicon from "../../../assets/svg/slideicon";
import homelbsections from "../../../assets/images/homeIbSectionImage.webp";

export default function Brokersprogramsections({ id }) {
  return (
    <div className="brokersprogramsections-main" id={id}>
      <div className="brokersprogramsections-container">
        <div className="brokersprogramsections-grid-main">
          <div className="brokersprogramsections-grid-item1">
            <h1>Announcing the Institutional Program and Brokers</h1>
            <p>With the largest industry rebates and commissions, you can boost your profits.</p>
            <span>The institutional programs offered by Forex Voyager Limited are specifically designed to fit your business and include White Label, Prime of Primes, Affiliate Program, Introducing Broker, and Franchise Partner.</span>
            <div className="become-ib-button-main-alignment">
              <div className="become-ib-button">
                <button>
                  <span>Become an IB</span>
                  <Slideicon />
                </button>
              </div>
            </div>
          </div>
          <div className="brokersprogramsections-grid-item2">
            <img src={homelbsections} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
}
