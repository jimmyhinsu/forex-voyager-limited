import React from 'react'
import './whyforexvoyager.scss';
import Gotonext from '../home/gotonext';
// import Wanttoget from '../home/wanttoget';
import banner from '../../assets/images/banner.png';
// import advantage1 from '../../assets/images/security.png';
import advantage2 from '../../assets/images/money and finance.png';
import advantage3 from '../../assets/images/3d-growth-png.png';
import advantage4 from '../../assets/images/advantage.png';
import stripedcard from '../../assets/images/striped-background-card.webp';
import cs1 from '../../assets/images/headphone.png';
import cs2 from '../../assets/images/cs-2.png';
import cs3 from '../../assets/images/cs3.png';
import cs4 from '../../assets/images/cs-4.png';
import cs5 from '../../assets/images/clock-png.png';
// import cs6 from '../../assets/images/cs6.png';


export default function Whyforexvoyager() {
    return (
        <>
            <div className='whyforex-bg'>
                <div className='container'>
                    <div className='whyforex-flex'>
                        <div className='whyforex-detail'>
                            <h1 data-aos="fade-down">Why <span>Forex Voyeger Limited</span></h1>
                            <p data-aos="fade-down">We have effectively established our dominance in the trading industry since our founding. We have paved the way for the foreign exchange business and are still producing top-notch goods, services, and trading platforms.</p>
                        </div>
                        <div className='whyforex-flex-img'>
                            <img src={banner} alt="error" data-aos="flip-left" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='features-advantages'>
                <div className='container'>
                    <div className='whyforex-feat'>
                        <h3 data-aos="fade-down">FEATURES</h3>
                    </div>
                    <h2 data-aos="fade-down">Forex Voyeger Limited Advantages</h2>


                    <div className='four-img-grid'>
                        {/* <div className='whychoose'>
                            <h3 data-aos="fade-down-right">Heavily Regulated</h3>
                            <div className="Whyforexicon">
                                <img src={advantage1} alt="Whyforexicon" data-aos="flip-right" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div> */}

                        <div className='whychoose'>
                            <h3 data-aos="fade-down-right">Paid-Up Capital Of Over Millions USD</h3>
                            <div className="Whyforexicon">
                                <img src={advantage2} alt="Whyforexicon" data-aos="flip-right" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div>

                        <div className='whychoose'>
                            <h3 data-aos="fade-down-right">Full ECN Model With Spreads Starting From 0.0* Pips</h3>
                            <div className="Whyforexicon">
                                <img src={advantage3} alt="Whyforexicon" data-aos="flip-right" />
                            </div>
                            <div className="stripedCard">
                                <img src={stripedcard} alt="stripedCard" />
                            </div>
                        </div>

                        <div className='whychoose'>
                            <h3 data-aos="fade-down-right">The Highest Level Of Leverage Up To 1:500</h3>
                            <div className="Whyforexicon">
                                <img src={advantage4} alt="Whyforexicon" data-aos="flip-right" />
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
                        <h2 data-aos="fade-down"><span>Forex Voyeger Limited</span>
                            <br />
                            Established in 2024
                        </h2>
                    </div>

                    <div className='established-grid'>
                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>1</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Profitable Brokers Program</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">Through our Introducing Brokers Program, we work with professionals and partners, offering them compensation and rebate structures that are unparalleled in the industry.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>2</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Money withdrawal in a day</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">We have streamlined the process of withdrawing funds for the convenience of our investors.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>3</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Modern trading platform</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">cutting-edge trading systems that are made with stability and real-time trading functionality in mind.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>4</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">State of the art products</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">Trade more than 20,000 items, such as shares, commodities, forex, metals, indices, and cryptocurrencies.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>5</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Fast and reliable execution in nanoseconds</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">No Commission Exchange. Protection against Negative Balance. No requotes, rejections, or limitations on EA were allowed.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>6</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Exceptional financial services</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">Skilled, multilingual customer support available 24/7. Free VPS, API, EA, MAM, and PAMM.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>7</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Money security</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">We are expected to adhere to stringent regulations and requirements because our companies are highly regulated, giving our clients the highest level of financial protection.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>8</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">financial success that breaks records</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">Delivering earnings that inspire trust, we surpass all prior record years with a turnover of nearly Millions USD in 2024.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>9</h3>
                            </div>
                            <div className='lucrative'>
                                <h4 data-aos="fade-right">Global presence in leading financial hubs</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p data-aos="fade-right">Working with affiliates, we provide services to a global clientele from our more than 3 locations situated in global financial hubs.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='white-bg'>
                <div className='container'>
                    <div className='dedicated'>
                        <h2 data-aos="fade-down">Committed <span> Client Support</span></h2>
                        <p data-aos="fade-down">A group of skilled, multilingual workers who speak more than 12 languages well are on call around-the-clock.</p>
                    </div>

                    <div className='dedicated-grid'>
                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs1} alt="error" data-aos="flip-right" />
                                </div>
                                <div className='service'>
                                    <p data-aos="fade-right">IT and operational support including service desk, onboarding, configuration, and cash management.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs2} alt="error" data-aos="flip-right" />
                                </div>
                                <div className='service'>
                                    <p data-aos="fade-right">Sales and marketing assistance, encompassing tutorials, films, seminars, and instructional resources.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs3} alt="error" data-aos="flip-right" />
                                </div>
                                <div className='service'>
                                    <p data-aos="fade-right">Numerous funding options, such as Skrill, Visa, Mastercard, Neteller, and Crypto.</p>
                                </div>
                            </div>
                        </div>


                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs4} alt="error" data-aos="flip-right" />
                                </div>
                                <div className='service'>
                                    <p data-aos="fade-right">online financial news available in several languages in real time.</p>
                                </div>
                            </div>
                        </div>

                        <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs5} alt="error" data-aos="flip-right" />
                                </div>
                                <div className='service'>
                                    <p data-aos="fade-right">Fast account opening and funding are available around-the-clock.</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className='linear-darkbox'>
                            <div className='img-sideline-flex'>
                                <div className='six-img'>
                                    <img src={cs6} alt="error" data-aos="flip-right" />
                                </div>
                                <div className='service'>
                                    <p data-aos="fade-right">corporate and regulatory backing.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <Gotonext />
            {/* <Wanttoget /> */}
        </>
    )
}
