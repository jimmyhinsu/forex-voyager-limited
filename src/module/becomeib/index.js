import React from 'react'
import './becomeib.scss';
import { Link } from 'react-router-dom';
import percntage from "../../assets/icons/discount.png";
import profile from '../../assets/icons/usher-man-with-tie.png';
import up from '../../assets/icons/up-arrow.png';
import gift from '../../assets/icons/gift.png';
import BecomeibWhatsection from '../../components/Becomibwhatsection';
import Becomibbenefitssection from '../../components/becomibbenefitssection';
import Becomanpartner from '../../components/Becomanpartner';

export default function Becomeib() {
    return (
        <>
            <div className='partnerib-mian'>
                <div className='container'>
                    <div className='partnerib-back-img'>
                        <div className='section-st'>
                            <h1 data-aos="fade-down">Team up with Forex Voyager as a partner(IB)
                                and let's make things awesome together!</h1>
                            <p data-aos="fade-right">Forex Voyager Introducing Broker (IB) Program Rewards Individuals & Businesses for Introducing New Clients.</p>

                            <p data-aos="fade-right">Our experienced forex brokers will help visionary individuals and institutions in setting up their own business and Introducing Broker. With our extensive experience in the Forex Industry, you can take the trading experience of your customers to the next level with an innovative platform, dedicated support, low commissions, and precise order execution. Choose the Best Forex Trading Broker Platform to enhance your trading success.</p>

                            <Link to={"/"}>
                                <div className='beomeib' data-aos="flip-right">
                                    <button>Become a Partner</button>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className='partnering-perks'>
                <div className='conatiner'>
                    <div className='common-section'>
                        <h2 data-aos="fade-down">
                            Partnering Perks: Commission Riches, Award-Winning <br />
                            Trust, Market Evolution, and Daily Win Rewards!
                        </h2>

                        <div className='rewards-boxes'>
                            <div className='icon-text'>
                                <div className='details-rewards'>
                                    <img src={percntage} alt="error" data-aos="flip-right" />

                                    <p data-aos="fade-down">Commission up to 80% spread revshare</p>
                                </div>

                            </div>

                            <div className='icon-text'>
                                <div className='details-rewards'>
                                    <img src={profile} alt="error" data-aos="flip-right" />
                                    <p data-aos="fade-down">Reputable Broker With 40+ Industry awards</p>
                                </div>
                            </div>

                            <div className='icon-text'>
                                <div className='details-rewards'>
                                    <img src={up} alt="error" data-aos="flip-right" />
                                    <p data-aos="fade-down">Evolving everyday in the market</p>
                                </div>
                            </div>

                            <div className='icon-text'>
                                <div className='details-rewards'>
                                    <img src={gift} alt="error" data-aos="flip-right" />
                                    <p data-aos="fade-down">Trade and Win Rewards Everyday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BecomeibWhatsection />
            <Becomibbenefitssection />
            <Becomanpartner />
        </>
    )
}
