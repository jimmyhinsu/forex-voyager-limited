import React from "react";
import Slider from "react-slick";
import "./Accountsectionsslider.scss";
import Upcharticon from "../../../../assets/svg/upcharticon";
import standerdicon from "../../../../assets/images/standerdicon.png";
import proicon from "../../../../assets/images/proicon.png";
import ecnicon from "../../../../assets/images/ecnicon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Accountsectionslider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1100,
        centerMode: true,
        centerPadding: "20%",
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="accountsection-slide-container">
      <Slider {...settings}>
        <div>
          <div className="accounts-card-grid-vol1">
            <div className="accounts-card-grid-vol1-topline"></div>
            <div className="planicon-div">
              <img src={standerdicon} alt="standerdicon" />
            </div>

            <div className="card-data">
              <h1>
                <span>Standard</span> Account
              </h1>

              <p>An account with no commissions that is ideal for novice traders wishing to begin trading.Standard accounts provide consistent spreads and immediate execution.</p>
            </div>

            <div className="card-last-details">
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Minimum Initial Deposit of <span>$50</span>
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Spreads from <span>1.7</span> pips
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Leverage up to <span>1:500</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="accounts-card-grid-vol1">
            <div className="accounts-card-grid-vol1-topline-sc"></div>
            <div className="planicon-div-sc">
              <img src={proicon} alt="proicon" />
            </div>

            <div className="card-data">
              <h1>
                <span>Pro</span> Account
              </h1>

              <p>For traders who want to benefit from tight spreads, rapid execution, and no commissions, the Pro account is a good option.</p>
            </div>

            <div className="card-last-details">
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Minimum Initial Deposit of <span>$1000</span>
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Spreads from <span>1.0</span> pips
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Leverage up to <span>1:500</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="accounts-card-grid-vol1">
            <div className="accounts-card-grid-vol1-topline-trd"></div>
            <div className="planicon-div-trd">
              <img src={ecnicon} alt="ecnicon" />
            </div>

            <div className="card-data">
              <h1>
                <span>ECN</span> Account
              </h1>

              <p>Traders seeking instantaneous execution and raw spreads are better off with an ECN account.</p>
            </div>

            <div className="card-last-details">
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Minimum Initial Deposit of <span>$10000</span>
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Spreads from <span>0.5</span> pips
                </p>
              </div>
              <div className="minimum-div">
                <Upcharticon />
                <p>
                  Leverage up to <span>1:500</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
