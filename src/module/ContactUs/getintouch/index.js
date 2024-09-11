import React, { useState } from "react";
import "./getintouch.scss";
import stripedCard from "../../../assets/images/striped-background-card.webp";
import Whatsappicon from "../../../assets/icons/whatsappicon.webp";
import Messageicon from "../../../assets/icons/messageicon.webp";
import Callbackicon from "../../../assets/icons/callbackicon.webp";
import Callicon from "../../../assets/icons/24callicon.webp";
import Callbackfrom from "../../../components/CallbackForm";

export default function Getintouch() {
  const [activeIndex, setActiveIndex] = useState(2);
  // const [activeButton, setActiveButton] = useState("");

  // const handleButtonClick = (button) => {
  //   setActiveButton(button);
  // };

  return (
    <>
      <div className="get-in-touch">
        <div className="container">
          <div className="title-get">
            <h1 data-aos="fade-down">Get in touch</h1>
            <p data-aos="fade-down">Contact us with any questions or if you’d like more information about MultiBank Group’s products and services.</p>
          </div>
          <div className="contact-social-boxes-main">
            <div className={`whychoose-main ${activeIndex === 0 ? "active" : ""}`} onClick={() => setActiveIndex(0)}>
              <div className="whychoose">
                <p data-aos="fade-right">Send a message through</p>
                <h3 data-aos="fade-right">Whatsapp</h3>
                <div className="stripedCard">
                  <img src={stripedCard} alt="stripedCard" />
                </div>
              </div>
              <div className="Whyforexicon">
                <img src={Whatsappicon} alt="Whatsappicon" />
              </div>
            </div>

            <div className={`whychoose-main ${activeIndex === 1 ? "active" : ""}`} onClick={() => setActiveIndex(1)}>
              <div className="whychoose">
                <p data-aos="fade-right">24/7 Client Support through</p>
                <h3 data-aos="fade-right">Live Chat</h3>
                <div className="stripedCard">
                  <img src={stripedCard} alt="stripedCard" />
                </div>
              </div>
              <div className="Whyforexicon">
                <img src={Messageicon} alt="Messageicon" />
              </div>
            </div>

            <div className={`whychoose-main ${activeIndex === 2 ? "active" : ""}`} onClick={() => setActiveIndex(2)}>
              <div className="whychoose">
                <p data-aos="fade-right">Fill our short form and get a</p>
                <h3 data-aos="fade-right">Call Back</h3>
                <div className="stripedCard">
                  <img src={stripedCard} alt="stripedCard" />
                </div>
              </div>
              <div className="Whyforexicon">
                <img src={Callbackicon} alt="Callbackicon" />
              </div>
            </div>

            <div className={`whychoose-main ${activeIndex === 3 ? "active" : ""}`} onClick={() => setActiveIndex(3)}>
              <div className="whychoose">
                <p data-aos="fade-right">We’re available 24/7</p>
                <h3 data-aos="fade-right">Call us now</h3>
                <div className="stripedCard">
                  <img src={stripedCard} alt="stripedCard" />
                </div>
              </div>
              <div className="Whyforexicon">
                <img src={Callicon} alt="Callicon" />
              </div>
            </div>
          </div>

          <div className="contact-social-boxe-clicked-data">
            {activeIndex === 0 && (
              <>
                {/* <button onClick={() => handleButtonClick("Whatsapp")} className={activeButton === "Whatsapp" ? "activebutton" : ""}>
                  {activeButton === "Whatsapp" && <p>Additional content for Whatsapp</p>}
                  <button>
                    <p>Additional content for Whatsapp</p>
                  </button>
                </button> */}
                <Callbackfrom />
              </>
            )}
            {activeIndex === 1 && (
              <>
                {/* <button onClick={() => handleButtonClick("LiveChat")} className={activeButton === "LiveChat" ? "activebutton" : ""}>
                  {activeButton === "LiveChat" && <p>Additional content for Live Chat</p>}
                  <button>
                    <p>Additional content for Live Chat</p>
                  </button>
                </button> */}
                <Callbackfrom />
              </>
            )}
            {activeIndex === 2 && (
              <>
                {/* <button onClick={() => handleButtonClick("Callback")} className={activeButton === "Callback" ? "activebutton" : ""}>
                  {activeButton === "Callback" && <p>Additional content for Call Back</p>}
                </button> */}
                <Callbackfrom />
              </>
            )}
            {activeIndex === 3 && (
              <>
                {/* <button onClick={() => handleButtonClick("CallNow")} className={activeButton === "CallNow" ? "activebutton" : ""}>
                  {activeButton === "CallNow" && <p>Additional content for Call Now</p>}
                  <button>
                    <p>Additional content for Call Now</p>
                  </button>
                </button> */}
                <Callbackfrom />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
