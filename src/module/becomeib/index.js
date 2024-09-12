import React from 'react'
import './becomeib.scss';
import { Link } from 'react-router-dom';

export default function Becomeib() {
    return (
        <>
            <div className='partnerib-mian'>
                <div className='container'>
                    <div className='partnerib-back-img'>
                        <div className='section-st'>
                            <h1>Team up with Forex Voyager as a partner(IB)
                                and let's make things awesome together!</h1>
                            <p>Forex Voyager Introducing Broker (IB) Program Rewards Individuals & Businesses for Introducing New Clients.</p>

                            <p>Our experienced forex brokers will help visionary individuals and institutions in setting up their own business and Introducing Broker. With our extensive experience in the Forex Industry, you can take the trading experience of your customers to the next level with an innovative platform, dedicated support, low commissions, and precise order execution. Choose the Best Forex Trading Broker Platform to enhance your trading success.</p>

                            <Link to={"/"}>
                                <div className='beomeib'>
                                    <button>Become a Partner</button>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
