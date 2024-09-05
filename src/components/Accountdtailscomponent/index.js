import React from 'react'
import "./accountdetailscomponent.scss"
import Accdetailsdotedimage from "../../assets/images/accdetailsdotedimage.webp"

function Accoundetails({ title, details = [] }) {
    return (
        <div className='accounts-details-main'>
            <div className='accounts-details-container'>
                <div className='standard-title'>
                    <h1 data-aos="fade-down">{title}</h1>
                    <span></span>
                </div>
                <div className='accounts-details-box-line-one-main'>
                    {details.map((detail, index) => (
                        <div
                            className='accounts-details-box-line-one'
                            id={`accounts-details-box-line-${index + 1}`}
                            key={index}
                        >
                            <img src={Accdetailsdotedimage} alt="Detail Icon" />
                            <p data-aos="fade-down">{detail.text} <span>{detail.highlight}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accoundetails;