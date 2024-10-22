import React, { useState } from "react";
import "./standard.scss";
import Slideicon from "../../assets/svg/slideicon";

import Standardicon from "../../assets/images/standerdicon.png";
import Proicon from "../../assets/images/proicon.png";
import Encicon from "../../assets/images/ecnicon.png";

import Standardaccmaimage from "../../assets/images/standardaccmaimage.png";
import Proaccmaimage from "../../assets/images/pro account.png";
import Ecnaccmaimage from "../../assets/images/ecnaccmaimage.png";
import { Link } from "react-router-dom";
import Accoundetails from "../../components/Accountdtailscomponent";
import Gotonext from "../home/gotonext";
// import Wanttoget from '../home/wanttoget';

export default function Standard() {
  const [activeButton, setActiveButton] = useState("Standard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const accountDetailsData = {
    title: "Standard Account Includes:",
    details: [
      { text: "Trading Platform:", highlight: "MT5" },
      { text: "Minimum initial deposit of", highlight: "$50" },
      { text: "Spreads from pips", highlight: "1.5" },
      { text: "Leverage up to from", highlight: "1:500" },
      { text: "Social Trading", highlight: "" },
      { text: "24/7 technical and account support", highlight: "" },
      { text: "Multilingual client support", highlight: "" },
    ],
  };
  return (
    <>
      <div className="standard-acc-section-main">
        <div className="standard-acc-container">
          <div className="standard-acc-title-main">
            <div className="standard-acc-title-main-alignment">
              <div className="standard-acc-buttons-changer">
                <Link to={"/standard"}>
                  <button
                    onClick={() => handleButtonClick("Standard")}
                    className={
                      activeButton === "Standard" ? "activebutton" : ""
                    }
                  >
                    <img src={Standardicon} alt="Standardicon" />
                    Standard Account
                  </button>
                </Link>
                <Link to={"/pro"}>
                  <button
                    onClick={() => handleButtonClick("proacc")}
                    className={activeButton === "proacc" ? "activebutton" : ""}
                  >
                    <img src={Proicon} alt="Proicon" />
                    Pro Account
                  </button>
                </Link>
                <Link to={"/ecn"}>
                  <button
                    onClick={() => handleButtonClick("ecnacc")}
                    className={activeButton === "ecnacc" ? "activebutton" : ""}
                  >
                    <img src={Encicon} alt="Encicon" />
                    ECN Account
                  </button>
                </Link>
              </div>
            </div>
            <div className="standard-acc-content">
              {activeButton === "Standard" && (
                <div className="content-Standard">
                  <h1 data-aos="fade-down">
                    <span>Standard</span> Account
                  </h1>
                  <p data-aos="fade-down">
                    An account with no commissions that is ideal for novice
                    traders wishing to begin trading. Standard accounts provide
                    consistent spreads and immediate execution.
                  </p>
                  <div className="standard-open-buttons">
                    <div className="start">
                      <a
                        href="https://clients.forexvoyager.com/"
                        target="__blank"
                      >
                        <button data-aos="fade-down">
                          Start Tranding Now
                          <Slideicon />
                        </button>
                      </a>
                    </div>
                    <div className="open">
                      <a
                        href="https://clients.forexvoyager.com/"
                        target="__blank"
                      >
                        <button data-aos="fade-down">Open Demo Account</button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {activeButton === "Standard" && (
                <>
                  <div className="standard-accimags">
                    <img
                      src={Standardaccmaimage}
                      alt="Standardaccmaimage"
                      data-aos="flip-right"
                    />
                  </div>
                </>
              )}
              {activeButton === "proacc" && (
                <div className="content-Standard">
                  <h1 data-aos="fade-down">
                    <span>Pro</span> Account
                  </h1>
                  <p data-aos="fade-down">
                    {" "}
                    The Pro account is a fantastic choice for traders who wish
                    to take advantage of tight spreads, quick execution, and no
                    commission.
                  </p>
                  <div className="standard-open-buttons">
                    <div className="start">
                      <a
                        href="https://clients.forexvoyager.com/"
                        target="__blank"
                      >
                        <button data-aos="fade-down">
                          Start Tranding Now
                          <Slideicon />
                        </button>
                      </a>
                    </div>
                    <div className="open">
                      <a
                        href="https://clients.forexvoyager.com/"
                        target="__blank"
                      >
                        <button data-aos="fade-down">Open Demo Account</button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {activeButton === "proacc" && (
                <>
                  <div className="standard-accimags">
                    <img
                      src={Proaccmaimage}
                      alt="Proaccmaimage"
                      data-aos="flip-right"
                    />
                  </div>
                </>
              )}
              {activeButton === "ecnacc" && (
                <div className="content-Standard">
                  <h1 data-aos="fade-down">
                    <span>ECN</span> Account
                  </h1>
                  <p data-aos="fade-down">
                    Traders seeking instantaneous execution and raw spreads are
                    better off with an ECN account.
                  </p>
                  <div className="standard-open-buttons">
                    <div className="start">
                      <a
                        href="https://clients.forexvoyager.com/"
                        target="__blank"
                      >
                        <button data-aos="fade-down">
                          Start Tranding Now
                          <Slideicon />
                        </button>
                      </a>
                    </div>
                    <div className="open">
                      <a
                        href="https://clients.forexvoyager.com/"
                        target="__blank"
                      >
                        <button data-aos="fade-down">Open Demo Account</button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {activeButton === "ecnacc" && (
                <>
                  <div className="standard-accimags">
                    <img
                      src={Ecnaccmaimage}
                      alt="Ecnaccmaimage"
                      data-aos="flip-right"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Accoundetails
        title={accountDetailsData.title}
        details={accountDetailsData.details}
      />

      {/* <div className="standard-acc-section-main" >
                <div className="standard-acc-container">
                    <div className='open-sc-main'>
                        <div className='open-sc'>
                            <button>Compare Account Types</button>
                        </div>
                    </div>
                </div>
            </div> */}

      <Gotonext />
      {/* <Wanttoget /> */}
    </>
  );
}
