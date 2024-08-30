import React, { useState } from 'react'
import './ecn.scss';

import Slideicon from '../../assets/svg/slideicon';

import Standardicon from "../../assets/images/standardicon.svg"
import Proicon from "../../assets/images/proicon.svg"
import Encicon from "../../assets/images/ecnicon.svg"

import Standardaccmaimage from "../../assets/images/standardaccmaimage.png";
import Proaccmaimage from "../../assets/images/proaccmaimage.png";
import Ecnaccmaimage from "../../assets/images/ecnaccmaimage.png";
import { Link } from 'react-router-dom';
import Accoundetails from '../../components/Accountdtailscomponent';
import Gotonext from '../home/gotonext';
import Wanttoget from '../home/wanttoget';

export default function Ecn() {

  const [activeButton, setActiveButton] = useState("ecnacc");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const accountDetailsData = {
    title: "ECN Account Includes:",
    details: [
      { text: "Trading Platform:", highlight: "MT4, MT5" },
      { text: "Minimum initial deposit of", highlight: "$10,000" },
      { text: "Spreads from pips", highlight: "0.0" },
      { text: "Leverage up to from", highlight: "1:500" },
      { text: "Social Trading", highlight: "" },
      { text: "24/7 technical and account support", highlight: "" },
      { text: "Multilingual customer service", highlight: "" }
    ]
  };
  return (
    <>
      <div className="standard-acc-section-main" >
        <div className="standard-acc-container">
          <div className="standard-acc-title-main">
            <div className="standard-acc-title-main-alignment">
              <div className="standard-acc-buttons-changer">
                <Link to={"/standard"}>
                  <button onClick={() => handleButtonClick("Standard")} className={activeButton === "Standard" ? "activebutton" : ""}>
                    <img src={Standardicon} alt="Standardicon" />Standard Account
                  </button>
                </Link>
                <Link to={"/pro"}>
                  <button onClick={() => handleButtonClick("proacc")} className={activeButton === "proacc" ? "activebutton" : ""}>
                    <img src={Proicon} alt="Proicon" />Pro Account
                  </button>
                </Link>
                <Link to={"/ecn"}>
                  <button onClick={() => handleButtonClick("ecnacc")} className={activeButton === "ecnacc" ? "activebutton" : ""}>
                    <img src={Encicon} alt="Encicon" />ECN Account
                  </button>
                </Link>
              </div>
            </div>
            <div className="standard-acc-content">
              {activeButton === "Standard" && (
                <div className="content-Standard">
                  <h1>
                    <span>Standard</span>  Account
                  </h1>
                  <p>A commission-free account that is perfect for new traders looking to start investing. Standard accounts offer instant execution, stable spreads.</p>
                  <div className='standard-open-buttons'>
                    <div className='start'>
                      <button>Start Tranding Now
                        <Slideicon />
                      </button>
                    </div>
                    <div className='open'>
                      <button>Open Demo Account</button>
                    </div>
                  </div>
                </div>
              )}
              {activeButton === "Standard" && (
                <>
                  <div className="standard-accimags">
                    <img src={Standardaccmaimage} alt="Standardaccmaimage" />
                  </div>

                </>
              )}
              {activeButton === "proacc" && (
                <div className="content-Standard">
                  <h1>
                    <span>Standard</span>  Account
                  </h1>
                  <p>A commission-free account that is perfect for new traders looking to start investing. Standard accounts offer instant execution, stable spreads.</p>
                  <div className='standard-open-buttons'>
                    <div className='start'>
                      <button>Start Tranding Now
                        <Slideicon />
                      </button>
                    </div>
                    <div className='open'>
                      <button>Open Demo Account</button>
                    </div>
                  </div>
                </div>
              )}{activeButton === "proacc" && (
                <>
                  <div className="standard-accimags">
                    <img src={Proaccmaimage} alt="Proaccmaimage" />
                  </div>

                </>
              )}
              {activeButton === "ecnacc" && (
                <div className="content-Standard">
                  <h1>
                    <span>ECN </span>  Account
                  </h1>
                  <p>An ECN account is best-suited for traders looking for raw spreads and instant execution.</p>
                  <div className='standard-open-buttons'>
                    <div className='start'>
                      <button>Start Tranding Now
                        <Slideicon />
                      </button>
                    </div>
                    <div className='open'>
                      <button>Open Demo Account</button>
                    </div>
                  </div>
                </div>
              )}{activeButton === "ecnacc" && (
                <>
                  <div className="standard-accimags">
                    <img src={Ecnaccmaimage} alt="Ecnaccmaimage" />
                  </div>

                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Accoundetails title={accountDetailsData.title} details={accountDetailsData.details} />
      <div className="standard-acc-section-main" >
        <div className="standard-acc-container">
          <div className='open-sc-main'>
            <div className='open-sc'>
              <button>Compare Account Types</button>
            </div>
          </div>
        </div>
      </div>
      <Gotonext />
      <Wanttoget />
    </>
  )
}
