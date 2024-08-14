import React from 'react'
import "./gotonext.scss";
import stripedCard from "../../../assets/images/striped-background-card.webp"
import Whyforexicon from "../../../assets/images/why-multibank.webp"
import accountfunding from "../../../assets/images/account-funding.webp";
import support from "../../../assets/images/support.webp";

export default function Gotonext() {
    return (
        <>
            <div className='container1'>
                <div className='choose-where'>
                    <div className='title'>
                        <h2>Choose Where To Go Next</h2>
                    </div>
                    <div className='three-next-img-grid'>
                        <div className='whychoose-main'>
                            <div className='whychoose'>
                                <h3>Why ForexVoyager Limited</h3>
                                <div className="stripedCard">
                                    <img src={stripedCard} alt="stripedCard" />
                                </div>
                            </div>
                            <div className="Whyforexicon">
                                <img src={Whyforexicon} alt="Whyforexicon" />
                            </div>
                        </div>

                        <div className='whychoose-main'>
                            <div className='whychoose'>
                                <h3>Account Funding</h3>
                                <div className="stripedCard">
                                    <img src={stripedCard} alt="stripedCard" />
                                </div>
                            </div>
                            <div className="Whyforexicon">
                                <img src={accountfunding} alt="Whyforexicon" />
                            </div>
                        </div>

                        <div className='whychoose-main'>
                            <div className='whychoose'>
                                <h3>Support</h3>
                                <div className="stripedCard">
                                    <img src={stripedCard} alt="stripedCard" />
                                </div>
                            </div>
                            <div className="Whyforexicon">
                                <img src={support} alt="Whyforexicon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
