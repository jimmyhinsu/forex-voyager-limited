import React, { useState } from 'react'
import './forex.scss';
import commodities from "../../../src/assets/images/invest in commodities.webp";
import cyrpto from "../../../src/assets/images/invest in degital.png";
import forexheader from "../../../src/assets/images/invest in forex.png";
import gold from "../../../src/assets/images/invest in metlas.png";
import indices from "../../../src/assets/images/invest in indices.png";
import shares from "../../../src/assets/images/invest in shares.webp";
import Slideicon from "../../assets/svg/slideicon";
import Gotonext from '../home/gotonext';
// import Wanttoget from '../home/wanttoget';
import Benefitfrom from '../../components/benefitfrom';
import whatisforex from '../../assets/images/what is forex.png';
import tradewith from '../../assets/images/trade exchange.png';
import { Link } from 'react-router-dom';

export default function Forex() {
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
                                    <h1 data-aos="fade-down">
                                        Invest in <span>Forex</span>
                                    </h1>
                                    <p data-aos="fade-down">Take advantage of the narrowest spreads in the market as you trade over 55 main, cross, and exotic Forex pairs.</p>
                                    <div className="up-and-down-boxes-changer" id="up-and-down-boxes-changer-web">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Up to 1:500</h3>
                                            <span data-aos="fade-down">Highest levels of leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0.0* Pips</h3>
                                            <span data-aos="fade-down">Tightest spreads in the industry</span>
                                        </div>
                                    </div>

                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button data-aos="fade-down">Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button data-aos="fade-down">Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Forex" && (
                                <>
                                    <div className="productimags">
                                        <img src={forexheader} alt="forexheader" data-aos="flip-right" />
                                    </div>
                                    <div className="up-and-down-boxes-changer" id="up-and-down-boxes-changer-mobile">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Up to 1:500</h3>
                                            <span data-aos="fade-down">Highest levels of leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0.0* Pips</h3>
                                            <span data-aos="fade-down">Tightest spreads in the industry</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Metals" && (
                                <div className="content-metals">
                                    <h1 data-aos="fade-down">
                                        Invest in <span>Metals</span>
                                    </h1>
                                    <p data-aos="fade-down">
                                        By trading metals like gold and silver, you may diversify your portfolio and uncover fresh trading opportunities. With an unmatched global network of the most well-known producers, traders, buyers, and speculators in the precious metals market, Forex Voyager Limited offers unparalleled expertise for seamless trading.
                                    </p>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-web-metals">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">2 Cents</h3>
                                            <span data-aos="fade-down">Tightest spreads on Gold</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1 Cent</h3>
                                            <span data-aos="fade-down">Tightest spreads on Silver</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1 Cent</h3>
                                            <span data-aos="fade-down">Tightest spreads on Silver</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button data-aos="fade-down">Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button data-aos="fade-down">Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Metals" && (
                                <>
                                    <div className="productimags">
                                        <img src={gold} alt="forexheader" data-aos="flip-right" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-mobile-metals">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">2 Cents</h3>
                                            <span data-aos="fade-down">Tightest spreads on Gold</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1 Cent</h3>
                                            <span data-aos="fade-down">Tightest spreads on Silver</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1 Cent</h3>
                                            <span data-aos="fade-down">Tightest spreads on Silver</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Shares" && (
                                <div className="content-shares">
                                    <h1 data-aos="fade-down">
                                        Invest in <span>Shares</span>
                                    </h1>
                                    <p data-aos="fade-down">Purchase and sell shares of more than 20,000 of the biggest global corporations' stocks that are listed on the world's leading stock exchanges according to market capitalization, with as little as 5% margin.</p>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-web-shares">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">20,000+</h3>
                                            <span data-aos="fade-down">Tightest</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1:20</h3>
                                            <span data-aos="fade-down">Level of Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button data-aos="fade-down">Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button data-aos="fade-down">Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Shares" && (
                                <>
                                    <div className="productimags">
                                        <img src={shares} alt="forexheader" data-aos="flip-right" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-mobile-shares">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">20,000+</h3>
                                            <span data-aos="fade-down">Tightest</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1:20</h3>
                                            <span data-aos="fade-down">Level of Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeButton === "Indices" && (
                                <div className="content-indices">
                                    <h1 data-aos="fade-down">
                                        Invest in <span>Indices</span>
                                    </h1>
                                    <p data-aos="fade-down">Get immediate access to and trade important global stock exchange indices, such as the Dow Jones 30, German DAX 40, and NASDAQ 100.</p>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-web-indices">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1:100</h3>
                                            <span data-aos="fade-down">Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Tightest Spreads</h3>
                                            <span data-aos="fade-down">The lowest spreads in the market</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button data-aos="fade-down">Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button data-aos="fade-down">Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeButton === "Indices" && (
                                <>
                                    <div className="productimags">
                                        <img src={indices} alt="forexheader" data-aos="flip-right" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-mobile-indices">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">1:100</h3>
                                            <span data-aos="fade-down">Leverage</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Tightest Spreads</h3>
                                            <span data-aos="fade-down">The lowest spreads in the market</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Commodities" && (
                                <div className="content-commodities">
                                    <h1 data-aos="fade-down">
                                        Invest in <span>Commodities</span>
                                    </h1>
                                    <p data-aos="fade-down">Trade commodities to diversify your portfolio, such as grains and energy. To get a good return on your investment, take advantage of changes in the global commodity market's supply and demand..</p>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-web-commodities">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Tightest Spreads</h3>
                                            <span data-aos="fade-down">At Zero Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Low Margin</h3>
                                            <span data-aos="fade-down">On All Commodities</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button data-aos="fade-down">Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button data-aos="fade-down">Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeButton === "Commodities" && (
                                <>
                                    <div className="productimags">
                                        <img src={commodities} alt="forexheader" data-aos="flip-right" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-th" id="up-and-down-boxes-changer-mobile-commodities">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Tightest Spreads</h3>
                                            <span data-aos="fade-down">At Zero Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">Low Margin</h3>
                                            <span data-aos="fade-down">On All Commodities</span>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeButton === "Digital Assets" && (
                                <div className="content-digital-assets">
                                    <h1 data-aos="fade-down">
                                        Invest in <span>Digital Assets</span>
                                    </h1>
                                    <p data-aos="fade-down">
                                        With Forex Voyager Limited, you can invest in the most well-known cryptocurrencies, such as Bitcoin, Ethereum, Ripple, and others, and benefit from this market's large price swings. This is best suited for seasoned traders who prefer to trade aggressively.
                                    </p>
                                    <div className="up-and-down-boxes-changer-frth" id="up-and-down-boxes-changer-web-digital">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">{"<20ms"}</h3>
                                            <span data-aos="fade-down">Stable and nanosecond execution</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">UP TO 1:20</h3>
                                            <span data-aos="fade-down">Leverage on cryptocurrencies</span>
                                        </div>
                                    </div>
                                    <div className='start-open-buttons'>
                                        <div className='start'>
                                            <button data-aos="fade-down">Start Tranding Now
                                                <Slideicon />
                                            </button>
                                        </div>
                                        <div className='open'>
                                            <button data-aos="fade-down">Open Demo Account</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeButton === "Digital Assets" && (
                                <>
                                    <div className="productimags">
                                        <img src={cyrpto} alt="forexheader" data-aos="flip-right" />
                                    </div>
                                    <div className="up-and-down-boxes-changer-frth" id="up-and-down-boxes-changer-mobile-digital">
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">{"<20ms"}</h3>
                                            <span>Stable and nanosecond execution</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">0%</h3>
                                            <span data-aos="fade-down">Commission</span>
                                        </div>
                                        <div className="up-and-down-box-changer">
                                            <h3 data-aos="fade-down">UP TO 1:20</h3>
                                            <span data-aos="fade-down">Leverage on cryptocurrencies</span>
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
                                <h3 data-aos="fade-down">What is <span> Forex </span>?</h3>
                                <div className='forex-peragraph'>
                                    <p data-aos="fade-down">With a daily turnover of over $7.5 trillion, forex is the biggest financial market globally. It functions via an international network of banks, businesses, and private citizens who exchange currencies on a regular basis.</p>

                                    <p data-aos="fade-down">The Foreign exchange market is open around-the-clock and lacks a physical presence. To find out the pertinent dates and trading sessions, see our Trading Hours.</p>

                                    <p data-aos="fade-down">With extensive liquidity, Forex Voyage provides trading in major, cross, and exotic pairings on the Forex markets. Enjoy the most advanced trading platforms, MetaTrader 5, together with the greatest trading tools, on all of our accounts.</p>
                                </div>
                            </div>
                            <div className='what-is-img'>
                                <img src={whatisforex} alt="error" data-aos="flip-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='trade-forex'>
                <div className='container'>
                    <div className='trade-grid'>
                        <div className='start-trading'>
                            <h3 data-aos="fade-down">Trade Forex With</h3>
                            <span data-aos="fade-down">Forex Voyager</span>
                            <p data-aos="fade-down">With the narrowest spreads in the market, start trading on over 55 Forex pairs with Forex Voyager.</p>
                        </div>
                        <div className='trade-with-mb'>
                            <img src={tradewith} alt="error" data-aos="flip-right" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-seaction'>
                <div className='conatiner'>
                    <div className='cards-grid'>
                        <div className="whyselectus-cards-grid-items1">
                            <span data-aos="fade-down">Distributes</span>
                            <div className="whyselectus-cards-bottom-line-sc"></div>
                            <p data-aos="fade-down">Forex Voyager has one of the most competitive spreads available, with starting prices as low as 0.0 pip.</p>
                        </div>

                        <div className="whyselectus-cards-grid-items1">
                            <span data-aos="fade-down">Leverage</span>
                            <div className="whyselectus-cards-bottom-line"></div>
                            <p data-aos="fade-down"> Users can raise their buying power with up to 1:500 leverage, which affects how affordable their trades are.</p>
                        </div>

                        <div className="whyselectus-cards-grid-items1">
                            <span data-aos="fade-down">55+ Currency Pairs</span>
                            <div className="whyselectus-cards-bottom-line-trd"></div>
                            <p data-aos="fade-down">Major, minor, and exotic currency pairs are among the many different types of currency pairs that exist.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Gotonext />
            {/* <Wanttoget /> */}
        </>
    )
}
