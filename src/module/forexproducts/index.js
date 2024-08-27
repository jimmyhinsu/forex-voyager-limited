import React, { useState } from 'react'
import './forex.scss';
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
import whatisforex from '../../assets/images/what-is-forex.webp';
import tradewith from '../../assets/images/trade-with-mb.webp';

export default function Forexproducts() {
    const [activeButton, setActiveButton] = useState("Forex");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <div className="product-section-main-forex">
                <div className="product-container">
                    <div className="product-title-main">
                        <div className="product-title-main-alignment">
                            <div className="product-buttons-changer">
                                <button onClick={() => handleButtonClick("Forex")} className={activeButton === "Forex" ? "activebutton" : ""}>
                                    Forex
                                </button>
                                <button onClick={() => handleButtonClick("Metals")} className={activeButton === "Metals" ? "activebutton" : ""}>
                                    Metals
                                </button>
                                <button onClick={() => handleButtonClick("Shares")} className={activeButton === "Shares" ? "activebutton" : ""}>
                                    Shares
                                </button>
                                <button onClick={() => handleButtonClick("Indices")} className={activeButton === "Indices" ? "activebutton" : ""}>
                                    Indices
                                </button>
                                <button onClick={() => handleButtonClick("Commodities")} className={activeButton === "Commodities" ? "activebutton" : ""}>
                                    Commodities
                                </button>
                                <button onClick={() => handleButtonClick("Digital Assets")} className={activeButton === "Digital Assets" ? "activebutton" : ""}>
                                    Digital Assets
                                </button>
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

            <div className='section-mt'>
                <div className='bgliner-color'>
                    <div className='container'>
                        <div className='what-forex'>
                            <div className='forex-text'>
                                <h3>What is <span> Forex </span>?</h3>
                                <div className='forex-peragraph'>
                                    <p>Forex is the largest financial market in the world with a daily turnover of approximately $7.5 Trillion. It operates through a global network of banks, companies and individuals who constantly buy and sell currencies from each other.</p>

                                    <p>The Foreign Exchange market has no physical location and operates 24 hours a day. Refer to our Trading Hours and be informed on the relevant dates and trading sessions.</p>

                                    <p>Forex Voyage offers Forex major, cross and exotic pairs to trade in the Forex markets with deep liquidity. Benefit from the best trading tools and cutting-edge MetaTrader 4 and MetaTrader 5 trading platforms, available on all our accounts.</p>
                                </div>
                            </div>
                            <div className='what-is-img'>
                                <img src={whatisforex} alt="error" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='trade-forex'>
                <div className='container'>
                    <div className='trade-grid'>
                        <div className='start-trading'>
                            <h3>Trade Forex With</h3>
                            <span>Forex Voyager</span>
                            <p>Start trading with Forex Voyager on over 55 Forex pairs with the tightest spreads in the industry.</p>
                        </div>
                        <div className='trade-with-mb'>
                            <img src={tradewith} alt="error" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-seaction'>
                <div className='conatiner'>
                    <div className='cards-grid'>
                        <div className="whyselectus-cards-grid-items1">
                            <span>Spreads</span>
                            <div className="whyselectus-cards-bottom-line-sc"></div>
                            <p>Starting from 0.0 Pips, Forex voyager offers one of the most competitive spreads in the market.</p>
                        </div>

                        <div className="whyselectus-cards-grid-items1">
                            <span>Leverage</span>
                            <div className="whyselectus-cards-bottom-line"></div>
                            <p>With up to 500:1 leverage, users can increase their buying power, making a difference to the affordability of their trades.</p>
                        </div>

                        <div className="whyselectus-cards-grid-items1">
                            <span>55+ Currency Pairs</span>
                            <div className="whyselectus-cards-bottom-line-trd"></div>
                            <p>There is a wide number of currency pairs, and they are classified into major, minor, and exotic currency pairs.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Gotonext />
            <Wanttoget />
        </>
    )
}
