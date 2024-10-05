import React from "react";
import "./wanttoget.scss";
import Wewantbackground from "../../../assets/svg/wewantbackground";
import Rocketicon from "../../../assets/images/rocket.webp";
import Slideicon from "../../../assets/svg/slideicon";
import { Link } from "react-router-dom";

export default function Wanttoget() {
  return (
    <>
      <div className="container">
        <div className="mainbox-color">
          <div className="wewantbackground">
            <Wewantbackground />
          </div>
          <div className="rocket-icon">
            <img src={Rocketicon} alt="Rocketicon" />
          </div>
          <div className="getstart">
            <div className="wantto">
              <h3>Want to get started?</h3>
            </div>
            <div className="joinbutton">
              <Link to={"/contactus"}>
                <button>
                  Join Forex Voyager Limited
                  <Slideicon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
