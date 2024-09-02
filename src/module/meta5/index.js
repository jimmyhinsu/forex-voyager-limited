import React from 'react'
import './meta5.scss';
import Gotonext from '../home/gotonext';
import Wanttoget from '../home/wanttoget';
import Accountssection from '../home/Accountssections';
import bannermt5 from '../../assets/images/banner-mt5.webp';
import Slideicon from "../../assets/svg/slideicon";
import whatismeta from '../../assets/images/what-is-mt5.webp';
import downloadapp from '../../assets/images/download-mt5.webp';
import meta5svg from '../../assets/svg/logo-mt5.svg';
import google from '../../assets/icons/playstore.png';
import Appleicon from '../../assets/svg/appleicon';

export default function Meta5() {
    return (
        <>
            <div className='strip-bg-colored'>
                <div className='conatiner'>
                    <div className='mttradingplatform'>
                        <div className='platformstrader'>
                            <div className='span-platfrom'>
                                <span>PLATFORMS</span>
                            </div>
                            <div className='trading-text'>
                                <h2><span>MT5</span> Trading Platform</h2>
                            </div>
                            <div className='traderline1'>
                                <p>The trading platform MetaTrader 5 (MT5) satisfies the increasing needs of traders and brokers.</p>
                            </div>
                            <div className='traderline2'>
                                <p>In addition to offering all the functionality offered by the MT4 platform, the MT5 platform also has expanded scripting tools for custom indicators and expert advisors, as well as increased trading functionalities.</p>
                            </div>
                            <div className='trader-button'>
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

                        <div className='bannermt5'>
                            <img src={bannermt5} alt="error" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='white-background'>
                <div className='container'>
                    <div className='downloadapp-grid'>
                        <div className='meta5app-detail'>
                            <div className='meta5-svg'>
                                <img src={meta5svg} alt="error" />
                            </div>
                            <h3><span>Download MT5</span> Trading Platform</h3>
                            <p>Select a download type as per your device operating system and your account regulation.</p>
                            <div className='apps-button'>
                                <div className='appstore-buton-main'>
                                    <a href="https://apps.apple.com/us/app/metatrader-5/id413251709" target='__blank'>
                                        <button>
                                            <div className='apple-icon-flex'>
                                                <div className='apple-icon'>
                                                    <Appleicon />
                                                </div>
                                                <div className='appstore'>
                                                    <p>Download on the </p>
                                                    <span>App Store</span>
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                </div>

                                <div className='appstore-buton-main'>
                                    <a href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d6380119913593281231%26server%3dMEXGlobalFinancial-Demo%252cMEXGlobalFinancial-Real" target='__blank'>
                                        <button>
                                            <div className='apple-icon-flex'>
                                                <div className='apple-icon'>
                                                    <img src={google} alt="error" />
                                                </div>
                                                <div className='appstore'>
                                                    <p>Get It on</p>
                                                    <span>Google Play</span>
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='downloadapp-img'>
                            <img src={downloadapp} alt="error" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='blue-bg-main'>
                <div className='conatiner'>
                    <div className='white-bg-color'>
                        <div className='whatismeta5'>
                            <div className='meta5-pera'>
                                <div className='whatis'>
                                    <h2>What is <span>MT5</span>?</h2>
                                </div>
                                <p>With just one trading platform, MT5 provides you with access to our wide range of asset classes, which include FX, equities, indices, cryptocurrencies, metals, and commodities.</p>

                                <div className='withcomplete'>
                                    <span>Whether you're a veteran trader or just starting out, Forex Voyager elevates the MT5 experience with its extensive access to sophisticated trade types and state-of-the-art analytical tools. The MT5 platform's primary advantage is that traders are not limited to utilizing the integrated analytical tools.</span>
                                </div>
                            </div>

                            <div className='meta-trader-img'>
                                <img src={whatismeta} alt="error" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            < Accountssection />
            <Gotonext />
            <Wanttoget />
        </>
    )
}
