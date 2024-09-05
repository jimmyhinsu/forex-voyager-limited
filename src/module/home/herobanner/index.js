import React from "react";
import "./herobanner.scss";
import metatrade5 from "../../../assets/images/meta-5.svg";
import Slideicon from "../../../assets/svg/slideicon";

export default function Herobanner({ id }) {
  return (
    <>
      <div className="herobannermain" id={id}>
        <div className="herobannercontent">
          <div className="text">
            <h2 data-aos="fade-down">
              <span>Money </span> Enriches Life's  <span>Possibilities</span>
            </h2>
          </div>

          <p data-aos="fade-down">Become part of a global trading community and boost your portfolio.</p>

          <div className="button">
            <button data-aos="fade-down">
              Strating Trading
              <Slideicon />
            </button>
          </div>

          <div className="demo-ib-button">
            <div className="demoaccount">
              <button data-aos="fade-down">
                Demo Account
                <Slideicon />
              </button>
            </div>
            <div className="demoaccount">
              <button data-aos="fade-down">
                IB/Institutional Offers
                <Slideicon />
              </button>
            </div>
          </div>

          <div className="metatraders">
            {/* <div className='tradeicon'>
                            <img src={metatrade4} alt="error" />

                        </div> */}
            <div className="tradeicon" >
              <img src={metatrade5} alt="error" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
