import React from "react";
import "./brokersprogramsections.scss";
import Slideicon from "../../../assets/svg/slideicon";
import homelbsections from "../../../assets/images/homeIbSectionImage.webp";

export default function Brokersprogramsections() {
  return (
    <div className="brokersprogramsections-main">
      <div className="brokersprogramsections-container">
        <div className="brokersprogramsections-grid-main">
          <div className="brokersprogramsections-grid-item1">
            <h1>Introducing Brokers & Institutional Program</h1>
            <p>Increase your profits with the highest rebates & commissions in the industry.</p>
            <span>Forex Voyager Limited Institutional Programs include Introducing Broker, Affiliate Program, White Label, Prime of Primes & Franchise Partner, all exclusively tailored to suit your business.</span>
            <div className="become-ib-button-main-alignment">
              <div className="become-ib-button">
                <button>
                  <span>Become an IB</span>
                  <Slideicon />
                </button>
              </div>
            </div>
          </div>
          <div className="brokersprogramsections-grid-item2" >
            <img src={homelbsections} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
}
