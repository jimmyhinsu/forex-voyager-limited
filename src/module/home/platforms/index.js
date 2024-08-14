import React from "react";
import "../platforms/platforms.scss";
import backgroundimg from "../../../assets/images/striped-background-colored.webp";
import meta5 from "../../../assets/images/meta-5.svg";
import Slideicon from "../../../assets/svg/slideicon";

function Platforms({ id }) {
  return (
    <>
      <div className="platforms" id={id}>
        <div className="backimg">
          <div className="backgroundimg-alignment">
            <img src={backgroundimg} alt="error" />
          </div>
          <div className="mainplatformdiv">
            <div className="container">
              <div className="platformsheading">
                <h1>Platforms</h1>
              </div>

              <div className="exploreour">
                <h2>Explore our Mobile Trading Platforms</h2>
              </div>

              <div className='mt4-mt5-grid'>
                <div className='platform-grid-items1'>
                  <div className='platform-title'>
                    <h4>
                      MT5 <span> PLATFORMS </span>
                    </h4>
                  </div>
                  <p>Trade over 20,000 instruments including forex, metals, shares, indices, commodities & cryptocurrencies on award-winning MT4 and MT5 Mobile Platforms with instant nano-second execution.</p>
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
