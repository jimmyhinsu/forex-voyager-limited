import React from 'react'
import "./becomibbenefitssection.scss"
import profilesvgrepocom from "../../assets/svg/profile-svgrepo-com.svg"
import rocketsvgicon from "../../assets/svg/rocket-svgrepo-com.svg"
import analyticssvgrepocom from "../../assets/svg/analytics-svgrepo-com.svg"
import loudspeakericon from "../../assets/svg/office-megaphone-speaker-loudspeaker-announce-svgrepo-com.svg"
import businessdealsvgrepocom from "../../assets/svg/business-deal-svgrepo-com.svg"

function Becomibbenefitssection() {
    return (
        <div className='becomib-benefits-section'>
            <div className='becomib-benefits-section-container'>
                <div className='becomib-benefits-section-content'>
                    <h1 data-aos="fade-down">Benefits Of Becoming Introducing&nbsp; Broker With Forex Voyager</h1>
                    <p data-aos="fade-down">Unlock a world of advantages by becoming an Introducing Broker with Forex Voyager. Enjoy generous commission structures, industry recognition, continuous market evolution, and the opportunity to empower traders with everyday rewards. Join us in reshaping the future of trading partnerships with the Best Broker Trading Platform.</p>
                </div>
                <div className='becomib-benefits-section-content-sc'>
                    <div className='becomib-benefits-section-content-sc-box-main-one'>
                        <div className='becomib-benefits-section-content-sc-box'>
                            <div className='becomib-benefits-section-content-sc-box-content-img' data-aos="flip-right">
                                <img src={profilesvgrepocom} alt="profilesvgrepocom" data-aos="flip-right" />
                            </div>
                            <div>
                                <p data-aos="fade-down">Multi-tier up to 5 levels</p>
                                <span data-aos="fade-down">As an IB you could have up to 5 sub levels of referral traders</span>
                            </div>
                        </div>

                        <div className='becomib-benefits-section-content-sc-box'>
                            <div className='becomib-benefits-section-content-sc-box-content-img' data-aos="flip-right">
                                <img src={rocketsvgicon} alt="rocketsvgicon" />
                            </div>
                            <div>
                                <p data-aos="fade-down">Easy to get Started</p>
                                <span data-aos="fade-down">No mountains of paperwork to sign or difficult IT implementation required</span>
                            </div>
                        </div>
                    </div>

                    <div className='becomib-benefits-section-content-sc-box-main-two'>
                        <div className='becomib-benefits-section-content-sc-box'>
                            <div className='becomib-benefits-section-content-sc-box-content-img' data-aos="flip-right">
                                <img src={analyticssvgrepocom} alt="analyticssvgrepocom" />
                            </div>
                            <div>
                                <p data-aos="fade-down">Personalized service</p>
                                <span data-aos="fade-down">A personal IB account manager would be assigned to support you</span>
                            </div>
                        </div>
                        <div className='becomib-benefits-section-content-sc-box'>
                            <div className='becomib-benefits-section-content-sc-box-content-img' data-aos="flip-right">
                                <img src={loudspeakericon} alt="loudspeakericon" />
                            </div>
                            <div>
                                <p data-aos="fade-down">Promotion Support</p>
                                <span data-aos="fade-down">Frequent promotional events for IB to attract and convert clients</span>
                            </div>
                        </div>
                        <div className='becomib-benefits-section-content-sc-box'>
                            <div className='becomib-benefits-section-content-sc-box-content-img' data-aos="flip-right">
                                <img src={businessdealsvgrepocom} alt="businessdealsvgrepocom" />
                            </div>
                            <div>
                                <p data-aos="fade-down">Fast Payout Settlement</p>
                                <span data-aos="fade-down">As an IB the payment should be fast</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Becomibbenefitssection;