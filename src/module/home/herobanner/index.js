import React from 'react'
import "./herobanner.scss"
import metatrade4 from "../../../assets/images/meta-4.svg";
import metatrade5 from "../../../assets/images/meta-5.svg";
import Slideicon from '../../../assets/svg/slideicon';


export default function Herobanner() {
    return (
        <>
            <div className='herobannermain'>
                <div className='herobannercontent'>
                    <div className='text'>
                        <h2><span>Life is </span> Better
                            with <span>Money</span></h2>
                    </div>

                    <p>Join millions of investors and take your portfolio to new heights.</p>

                    <div className='button'>
                        <button>Strating Trading<Slideicon /></button>
                    </div>

                    <div className='demo-ib-button'>
                        <div className='demoaccount'>
                            <button>Demo Account
                                <Slideicon />
                            </button>
                        </div>
                        <div className='demoaccount'>
                            <button>IB/Institutional Offers
                                <Slideicon />
                            </button>
                        </div>
                    </div>

                    <div className='metatraders'>
                        {/* <div className='tradeicon'>
                            <img src={metatrade4} alt="error" />

                        </div> */}
                        <div className='tradeicon'>
                            <img src={metatrade5} alt="error" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
