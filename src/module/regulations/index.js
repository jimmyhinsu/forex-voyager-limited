import React from 'react'
import './regulations.scss';
import Gotonext from '../home/gotonext';
// import Wanttoget from '../home/wanttoget';
import fscm from '../../assets/icons/flaaag.png';
import Slideicon from "../../assets/svg/slideicon";
import Regulationsbackgorund from "../../assets/images/page-header-bg.webp";


import pdf from "../../assets/pdf/Forexvoyager.pdf";



export default function Regulations() {
  return (
    <>
      <div className='regulations-bg'>
        <div className='regulations-backgorund-main'>
          <img src={Regulationsbackgorund} alt="Regulationsbackgorund" />
        </div>
        <div className='container'>
          <div className='regulations-title'>
            <div className='regulations-txt-main'>
              <div className='regulations-txt'>
                <div className='regulations-txt'>
                  <h1 className='regulations-txt' data-aos="fade-down">Regulations</h1>
                </div>
              </div>
            </div>
            {/* <div className='regulated-pera'>
              <p>Forex Voyager is comprised of several entities that are heavily regulated across 5 continents by 15 financial regulators. This ensures that our clients get full transparency and security of funds.
                <br />
                <br />
                Learn more about our various regulated entities
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className='fscm-main'>
        <div className='continer'>
          <div className='fscm-buttonflex'>
            <div className='fscm-button'>
              <div className='fscm-icon'>
                <img src={fscm} alt="error" data-aos="flip-left" />
              </div>
              {/* <div className='fscm-name'>
                <p>FSCM</p>
              </div> */}
            </div>
          </div>

          <div className='fscm-content-main'>
            <div className='fscm-contentbox'>
              <div className='fscm-icon-cont'>
                <img src={fscm} alt="error" data-aos="flip-left" />
              </div>

              {/* <div className='mexfm'>
                <h2>  MEXFM Securities</h2>
              </div> */}

              <div className='mexfm-pera'>
                <p data-aos="fade-up-left">Registered Address:  Ground Floor, The Sotheby Building, Rodney Village,Rodney Bay, Gros-Islet, SAINT Lucia P.O Box 838, Castries, Saint Lucia.
                  Registration Number: 2024-00486</p>
              </div>

              <div className="viewlicense">
                <a href={pdf} target='__blank'>
                  <button data-aos="fade-up-left">
                    View License
                    <Slideicon />
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Gotonext />
      {/* <Wanttoget /> */}



    </>
  )
}
