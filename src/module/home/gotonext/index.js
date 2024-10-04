import React from 'react'
import "./gotonext.scss";
import stripedCard from "../../../assets/images/striped-background-card.webp"
import Whyforexicon from "../../../assets/images/why-multibank.webp"
// import accountfunding from "../../../assets/images/account-funding.webp";
import support from "../../../assets/images/support.webp";
import { Link } from 'react-router-dom';

export default function Gotonext() {
    return (
        <>
            <div className='container1'>
                <div className='choose-where'>
                    <div className='title'>
                        <h2 data-aos="fade-down">Choose Where To Go Next</h2>
                    </div>

                    <div className='three-next-img-grid'>
                        <Link to={'/whyForexVoyager'}>
                            <div className='whychoose-main'>
                                <div className='whychoose'>
                                    <h3 data-aos="fade-right">Why ForexVoyeger Limited</h3>
                                    <div className="stripedCard">
                                        <img src={stripedCard} alt="stripedCard" />
                                    </div>
                                </div>
                                <div className="Whyforexicon">
                                    <img src={Whyforexicon} alt="Whyforexicon" data-aos="flip-right" />
                                </div>
                            </div>
                        </Link>

                        {/* <div className='whychoose-main'>
                            <div className='whychoose'>
                                <h3 data-aos="fade-right">Account Funding</h3>
                                <div className="stripedCard">
                                    <img src={stripedCard} alt="stripedCard" />
                                </div>
                            </div>
                            <div className="Whyforexicon">
                                <img src={accountfunding} alt="Whyforexicon" data-aos="flip-right" />
                            </div>
                        </div> */}

                        <Link to={'/contactus'}>
                            <div className='whychoose-main'>
                                <div className='whychoose'>
                                    <h3 data-aos="fade-right">Support</h3>
                                    <div className="stripedCard">
                                        <img src={stripedCard} alt="stripedCard" />
                                    </div>
                                </div>
                                <div className="Whyforexicon">
                                    <img src={support} alt="Whyforexicon" data-aos="flip-right" />
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
