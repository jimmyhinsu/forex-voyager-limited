import React from "react";
import "../platforms/platforms.scss";
import meta5 from "../../../assets/images/meta-5.svg";
import Slideicon from "../../../assets/svg/slideicon";
import metaplat from "../../../assets/images/meta-5.png";

function Platforms({ id }) {
  return (
    <>
      <div className="platforms" id={id}>
        <div className="backimg">
          <div className="mainplatformdiv">
            <div className="container">
              <div className="platformsheading">
                <h1>Platforms</h1>
              </div>

              <div className="exploreour">
                <h2>Experience our Mobile Trading Platforms</h2>
              </div>

              <div className='mt4-mt5-grid'>
                <div className='platform-grid-items1'>
                  <div className='platform-title'>
                    <h4>
                      MT5 <span> PLATFORMS </span>
                    </h4>
                  </div>
                  <p>Trade over 20,000 assets on the renowned MT4 and MT5 Mobile Platforms with instantaneous nanosecond execution, including forex, metals, shares, indices, commodities, and cryptocurrencies.</p>
                  <div className='platforms-two-img'>
                    <div className='meta4'>
                      <img src={meta5} alt="error" />
                    </div>
                  </div>
                  <div className='Learn-more'>
                    <button>Learn More
                      <Slideicon />
                    </button>
                  </div>
                </div>

                <div className='platfromsimages'>
                  <img src={metaplat} alt="error" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platforms;
