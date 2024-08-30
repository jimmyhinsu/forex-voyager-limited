import React, { useState } from 'react'
import './commodities.scss';
import commodities from "../../../src/assets/images/img-commoditiesHeader.webp";
import cyrpto from "../../../src/assets/images/img-cyrptoCurrencyHeader.webp";
import forexheader from "../../../src/assets/images/img-forexHeader.webp";
import gold from "../../../src/assets/images/img-goldHeader.webp";
import indices from "../../../src/assets/images/img-indicesHeader-2.webp";
import shares from "../../../src/assets/images/img-sharesHeader.webp";
import Slideicon from "../../../src/assets/svg/slideicon";
import Gotonext from '../home/gotonext';
import Wanttoget from '../home/wanttoget';
import Benefitfrom from '../../components/benefitfrom';
import { Link } from 'react-router-dom';

export default function Commodities() {
    const [activeButton, setActiveButton] = useState("Commodities");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <>
            <div className="product-section-main-commodities">
                <div className="product-container">
                    <div className="product-title-main">
                        <div className="product-title-main-alignment">
                            <div className="product-buttons-changer">
                                <Link to={"/Forex"}>
                                    <button onClick={() => handleButtonClick("Forex")} className={activeButton === "Forex" ? "activebutton" : ""}>
                                        Forex
                                    </button>
                                </Link>
                                <Link to={"/metals"}>
                                    <button onClick={() => handleButtonClick("Metals")} className={activeButton === "Metals" ? "activebutton" : ""}>
                                        Metals
                                    </button>
                                </Link>
                                <Link to={"/shares"}>
                                    <button onClick={() => handleButtonClick("Shares")} className={activeButton === "Shares" ? "activebutton" : ""}>
                                        Shares
                                    </button>
                                </Link>
                                <Link to={"/indices"}>
                                    <button onClick={() => handleButtonClick("Indices")} className={activeButton === "Indices" ? "activebutton" : ""}>
                                        Indices
                                    </button>
                                </Link>
                                <Link to={"/commodities"}>
                                    <button onClick={() => handleButtonClick("Commodities")} className={activeButton === "Commodities" ? "activebutton" : ""}>
                                        Commodities
                                    </button>
                                </Link>
                                <Link to={"/cryptocurrencies"}>
                                    <button onClick={() => handleButtonClick("Digital Assets")} className={activeButton === "Digital Assets" ? "activebutton" : ""}>
                                        Digital Assets
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="product-content">
                            {activeButton === "Forex" && (
                                <div className="content-forex">
                                    <h1>
                                        Invest in <span>Forex</span>
                                    </h1>
                                    <p>Trade over 55 major, cross, and exotic Forex pairs, and benefit from the tightest spreads in the industry.</p>
                                    <div className="up-and-down-boxes-changer" id="up-and-down-boxes-changer-web">
                                        <div className="up-and-down-box-changer">
                                            <h3>Up to 500:1</h3>
                                            <span>Highest levels of leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0.0* Pips</h3>
                                            <span>Tightest spreads in the industry</span>
                                        </div>
                                    </div>

                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button>Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button>Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Forex" && (
                                <>
                                    <div className="productimags">
                                        <img src={forexheader} alt="forexheader" />
                                    </div>
                                    <div className="up-and-down-boxes-changer" id="up-and-down-boxes-changer-mobile">
                                        <div className="up-and-down-box-changer">
                                            <h3>Up to 500:1</h3>
                                            <span>Highest levels of leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0.0* Pips</h3>
                                            <span>Tightest spreads in the industry</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Metals" && (
                                <div className="content-metals">
                                    <h1>
                                        Invest in <span>Metals</span>
                                    </h1>
                                    <p>
                                        Diversify your portfolio by trading metals, such as gold and silver and unmask new trading opportunities. With a worldwide network of the most prominent precious metal dealers, producers, consumers, and speculators in the industry,
                                        Forex Voyager Limited brings unrivaled experience for smooth trading.
                                    </p>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-web-metals">
                                        <div className="up-and-down-box-changer">
                                            <h3>2 Cents</h3>
                                            <span>Tightest spreads on Gold</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>1 Cent</h3>
                                            <span>Tightest spreads on Silver</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>1 Cent</h3>
                                            <span>Tightest spreads on Silver</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button>Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button>Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Metals" && (
                                <>
                                    <div className="productimags">
                                        <img src={gold} alt="forexheader" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-mobile-metals">
                                        <div className="up-and-down-box-changer">
                                            <h3>2 Cents</h3>
                                            <span>Tightest spreads on Gold</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>1 Cent</h3>
                                            <span>Tightest spreads on Silver</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>1 Cent</h3>
                                            <span>Tightest spreads on Silver</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Shares" && (
                                <div className="content-shares">
                                    <h1>
                                        Invest in <span>Shares</span>
                                    </h1>
                                    <p>Buy and Sell shares on over 20,000 equities of the largest multinational companies listed on the top stock exchanges in the world in market capitalization with margins as low as 5%.</p>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-web-shares">
                                        <div className="up-and-down-box-changer">
                                            <h3>20,000+</h3>
                                            <span>Tightest</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>20:1</h3>
                                            <span>Level of Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button>Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button>Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Shares" && (
                                <>
                                    <div className="productimags">
                                        <img src={shares} alt="forexheader" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-mobile-shares">
                                        <div className="up-and-down-box-changer">
                                            <h3>20,000+</h3>
                                            <span>Tightest</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>20:1</h3>
                                            <span>Level of Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeButton === "Indices" && (
                                <div className="content-indices">
                                    <h1>
                                        Invest in <span>Indices</span>
                                    </h1>
                                    <p>Gain instant access and trade major stock exchange indices from across the globe, including NASDAQ 100, German DAX 40, Dow Jones 30, and more.</p>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-web-indices">
                                        <div className="up-and-down-box-changer">
                                            <h3>100:1</h3>
                                            <span>Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>Tightest Spreads</h3>
                                            <span>The lowest spreads in the market</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button>Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button>Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeButton === "Indices" && (
                                <>
                                    <div className="productimags">
                                        <img src={indices} alt="forexheader" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-mobile-indices">
                                        <div className="up-and-down-box-changer">
                                            <h3>100:1</h3>
                                            <span>Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>Tightest Spreads</h3>
                                            <span>The lowest spreads in the market</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Commodities" && (
                                <div className="content-commodities">
                                    <h1>
                                        Invest in <span>Commodities</span>
                                    </h1>
                                    <p>Trade commodities such as energies and grains and diversify your portfolio. Capitalize on supply and demand trends in the global commodity market to generate strong returns on your investment.</p>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-web-commodities">
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>Tightest Spreads</h3>
                                            <span>At Zero Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>Low Margin</h3>
                                            <span>On All Commodities</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button>Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button>Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeButton === "Commodities" && (
                                <>
                                    <div className="productimags">
                                        <img src={commodities} alt="forexheader" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-mobile-commodities">
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>Tightest Spreads</h3>
                                            <span>At Zero Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>Low Margin</h3>
                                            <span>On All Commodities</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Digital Assets" && (
                                <div className="content-digital-assets">
                                    <h1>
                                        Invest in <span>Digital Assets</span>
                                    </h1>
                                    <p>
                                        Invest in the most popular cryptocurrencies like Bitcoin, Ethereum, Ripple, etc. with Forex Voyager Limited and take advantage of this volatile market with significant pricing shifts, suitable for experienced traders who have an
                                        aggressive trading approach.
                                    </p>
                                    <div className="up-and-down-boxes-changer-frth" id="up-and-down-boxes-changer-web-digital">
                                        <div className="up-and-down-box-changer">
                                            <h3>{"<20ms"}</h3>
                                            <span>Stable and nanosecond execution</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>UP TO 20:1</h3>
                                            <span>Leverage on cryptocurrencies</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button>Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button>Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Digital Assets" && (
                                <>
                                    <div className="productimags">
                                        <img src={cyrpto} alt="forexheader" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-frth" id="up-and-down-boxes-changer-mobile-digital">
                                        <div className="up-and-down-box-changer">
                                            <h3>{"<20ms"}</h3>
                                            <span>Stable and nanosecond execution</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>0%</h3>
                                            <span>Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3>UP TO 20:1</h3>
                                            <span>Leverage on cryptocurrencies</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Benefitfrom />
            <Gotonext />
            <Wanttoget />
        </>
    )
}
