import React from 'react'
import './whyforexvoyager.scss';
import Gotonext from '../home/gotonext';
import Wanttoget from '../home/wanttoget';
import banner from '../../assets/images/banner.webp';

export default function Whyforexvoyager() {
    return (
        <>
            <div className='whyforex-bg'>
                <div className='container'>
                    <div className='whyforex-flex'>
                        <div className='whyforex-detail'>
                            <h1>Why <span>Forex Voyager Limited</span></h1>
                            <p>Since our inception, we have successfully stamped our authority in the world of trading. Along the way, we have pioneered and shaped the foreign exchange industry and continue to create exemplary products, services, and trading platforms.</p>
                        </div>
                        <div className='whyforex-flex-img'>
                            <img src={banner} alt="error" />
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
                                <h4>Lucrative Brokers Program</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>We collaborate with professionals and partners through our Introducing Brokers Program, providing them with commission and rebate structures unheard of in the industry.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>2</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Funds withdrawal within 24 hours</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Funds withdrawal has been made easy and accessible for the benefit of our investors.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>3</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Cutting-edge trading platform</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>State-of-the-art trading platforms that are designed and developed to provide stability and enable real-time trading.</p>
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
                                <p>Trade over 20,000 instruments including Forex, Metals, Shares, Indices, Commodities & Cryptocurrencies.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>5</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Instant and stable nano-second execution</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Zero Commission Trading. Negative Balance Protection. No requotes and No Rejections, and No Restrictions on EA.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>6</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Superior financial services</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Proficient Multilingual 24/7 Customer Service. Free MAM, PAMM, EA, VPS and API.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>7</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Security of funds</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>Since our companies are heavily regulated, we are expected to uphold strict rules and obligations, allowing clients the highest level of funds security.</p>
                            </div>
                        </div>

                        <div className='establish-grid-details'>
                            <div className='number'>
                                <h3>8</h3>
                            </div>
                            <div className='lucrative'>
                                <h4>Record-breaking financial performance</h4>
                            </div>
                            <div className='wecollaborate'>
                                <p>With a turnover of over US$ 6.8 Trillion in 2023, exceeding all previous record years, we deliver results that instill confidence.</p>
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
                                <p>We serve an international demographic of clients in collaboration with affiliates from our 25+ offices located within the financial centers of the world.</p>
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
