import React from 'react'
import './whyforexvoyager.scss';
import Gotonext from '../home/gotonext';
import Wanttoget from '../home/wanttoget';
import banner from '../../assets/images/banner.webp';
import advantage1 from '../../assets/images/advantage1.webp';
import advantage2 from '../../assets/images/advantage2.webp';
import advantage3 from '../../assets/images/advantage3.webp';
import advantage4 from '../../assets/images/advantage4.webp';
import stripedcard from '../../assets/images/striped-background-card.webp';
import cs1 from '../../assets/images/cs1.webp';
import cs2 from '../../assets/images/cs2.webp';
import cs3 from '../../assets/images/cs3.webp';
import cs4 from '../../assets/images/cs4.webp';
import cs5 from '../../assets/images/cs5.webp';
import cs6 from '../../assets/images/cs6.webp';


export default function Whyforexvoyager() {
    return (
        <>
            <div className='whyforex-bg'>
                <div className='container'>
                    <div className='whyforex-flex'>
                        <div className='whyforex-detail'>
                            <h1>Why <span>Forex Voyager Limited</span></h1>
                            <p>We have effectively established our dominance in the trading industry since our founding. We have paved the way for the foreign exchange business and are still producing top-notch goods, services, and trading platforms.</p>
                        </div>
                        <div className='whyforex-flex-img'>
                            <img src={banner} alt="error" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='features-advantages'>
                <div className='container'>
                    <div className='whyforex-feat'>
                        <h3>FEATURES</h3>
                    </div>
                    <h2>Forex Voyager Limited Advantages</h2>


                    <div className='four-img-grid'>
                        <div className='whychoose'>
                            <h3>Heavily Regulated</h3>
                            <div className="Whyforexicon">
                                <img src={advantage1} alt="Whyforexicon" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div>

                        <div className='whychoose'>
                            <h3>Paid-Up Capital Of Over US$ 322 Million</h3>
                            <div className="Whyforexicon">
                                <img src={advantage2} alt="Whyforexicon" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div>

                        <div className='whychoose'>
                            <h3>Full ECN Model With Spreads Starting From 0.0* Pips</h3>
                            <div className="Whyforexicon">
                                <img src={advantage3} alt="Whyforexicon" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div>

                        <div className='whychoose'>
                            <h3>The Highest Level Of Leverage Up To 500:1</h3>
                            <div className="Whyforexicon">
                                <img src={advantage4} alt="Whyforexicon" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='established-bgcolor'>
                <div className='container'>
                    <div className='forex-esta'>
                        <h2><span>Forex Voyager Limited</span>
                            <br />
                            Established in 2017
                        </h2>
                    </div>

                    <div className='established-grid'>
                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>1</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Profitable Brokers Program</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Through our Introducing Brokers Program, we work with professionals and partners, offering them compensation and rebate structures that are unparalleled in the industry.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>2</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Money withdrawal in a day</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>We have streamlined the process of withdrawing funds for the convenience of our investors.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>3</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Modern trading platform</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>cutting-edge trading systems that are made with stability and real-time trading functionality in mind.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>4</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>State of the art products</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Trade more than 20,000 items, such as shares, commodities, forex, metals, indices, and cryptocurrencies.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>5</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Fast and reliable execution in nanoseconds</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>No Commission Exchange. Protection against Negative Balance. No requotes, rejections, or limitations on EA were allowed.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>6</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Exceptional financial services</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Skilled, multilingual customer support available 24/7. Free VPS, API, EA, MAM, and PAMM.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>7</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Money security</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>We are expected to adhere to stringent regulations and requirements because our companies are highly regulated, giving our clients the highest level of financial protection.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>8</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>financial success that breaks records</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Delivering earnings that inspire trust, we surpass all prior record years with a turnover of nearly US$ 6.8 trillion in 2023.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>9</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Global presence in leading financial hubs</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Working with affiliates, we provide services to a global clientele from our more than 25 locations situated in global financial hubs.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='white-bg'>
                <div className='container'>
                    <div className='dedicated'>
                        <h2>Committed <span> Client Support</span></h2>
                        <p>A group of skilled, multilingual workers who speak more than 12 languages well are on call around-the-clock.</p>
                    </div>

                    <div className='dedicated-grid'>
                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs1} alt="error" />
                                </div>
                                <div className='service'>
                                    <p>IT and operational support including service desk, onboarding, configuration, and cash management.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs2} alt="error" />
                                </div>
                                <div className='service'>
                                    <p>Sales and marketing assistance, encompassing tutorials, films, seminars, and instructional resources.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs3} alt="error" />
                                </div>
                                <div className='service'>
                                    <p>Numerous funding options, such as Skrill, Visa, Mastercard, Neteller, and Crypto.</p>
                                </div>
                            </div>
                        </div>


                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs4} alt="error" />
                                </div>
                                <div className='service'>
                                    <p>online financial news available in several languages in real time.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs5} alt="error" />
                                </div>
                                <div className='service'>
                                    <p>Fast account opening and funding are available around-the-clock.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs6} alt="error" />
                                </div>
                                <div className='service'>
                                    <p>corporate and regulatory backing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Gotonext />
            <Wanttoget />
        </>
    )
}
