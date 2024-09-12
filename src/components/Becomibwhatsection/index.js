import React from 'react'
import "./becomibwhatsection.scss"

import withdrawalicon from "../../assets/icons/withdrawal.png"
import swapicon from "../../assets/icons/switch.png"
import lowpriceicon from "../../assets/icons/low-price.png"
import graphicon from "../../assets/icons/graph.png"

function BecomeibWhatsection() {
    return (
        <div className='becomeib-what-section-main'>
            <div className="becomeib-what-section-container">
                <div className='what-sets-us-tile'>
                    <h1 data-aos="fade-down">What Sets Us Apart:
                        <br />
                        Reasons for Client Preference</h1>

                    <button data-aos="flip-right">Become a Partner</button>
                </div>

                <div className='becomeib-what-section-cards-main'>
                    <div className='becomeib-what-section-cards-items'>
                        <div className='becomeib-what-section-cards-items-content'>
                            <div className='withdrawalicon-main'>
                                <img src={withdrawalicon} alt="withdrawalicon" data-aos="flip-right" />
                            </div>
                            <p data-aos="fade-down">Fastest Withdrawal</p>
                        </div>
                    </div>
                    <div className='becomeib-what-section-cards-items'>
                        <div className='becomeib-what-section-cards-items-content'>
                            <div className='withdrawalicon-main'>
                                <img src={swapicon} alt="swapicon" data-aos="flip-right" />
                            </div>
                            <p data-aos="fade-down">No swap</p>
                        </div>
                    </div>
                    <div className='becomeib-what-section-cards-items'>
                        <div className='becomeib-what-section-cards-items-content'>
                            <div className='withdrawalicon-main'>
                                <img src={lowpriceicon} alt="lowpriceicon" data-aos="flip-right" />
                            </div>
                            <p data-aos="fade-down">No Commission</p>
                        </div>
                    </div>
                    <div className='becomeib-what-section-cards-items'>
                        <div className='becomeib-what-section-cards-items-content'>
                            <div className='withdrawalicon-main'>
                                <img src={graphicon} alt="graphicon" data-aos="flip-right" />
                            </div>
                            <p data-aos="fade-down">Low Spread</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeibWhatsection;