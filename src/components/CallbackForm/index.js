import React, { useState, useEffect, useMemo } from "react";
import "./callbackfrom.scss";
import Formdropdownicon from "../../assets/svg/formdropdownicon";
import { Link } from "react-router-dom";

import USFlag from "../../assets/icons/usa.png";
import UKFlag from "../../assets/icons/uk.png";
import INFlag from "../../assets/icons/india.png";
import BNFlag from "../../assets/icons/bangladesh.png";
import PKFlag from "../../assets/icons/pakistan.png";
import CHNFlag from "../../assets/icons/china.png";
import SRLNFlag from "../../assets/icons/sri-lanka.png";
import NPFlag from "../../assets/icons/nepal.png";

export default function Callbackfrom() {
  const [selectedRegion, setSelectedRegion] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("+1 ");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const regions = useMemo(
    () => [
      { code: "IN", image: INFlag, name: "India", numberCode: "+91" },
      { code: "NP", image: NPFlag, name: "Nepal", numberCode: "+977" },
      { code: "BN", image: BNFlag, name: "Bangla Desh", numberCode: "+880" },
      { code: "PK", image: PKFlag, name: "Pakistan", numberCode: "+92" },
      { code: "CHN", image: CHNFlag, name: "China", numberCode: "+86" },
      { code: "SRLN", image: SRLNFlag, name: "Sri Lanka", numberCode: "+94" },
      { code: "UK", image: UKFlag, name: "United Kingdom", numberCode: "+44" },
      { code: "US", image: USFlag, name: "United States", numberCode: "+1" },
    ],
    []
  );

  useEffect(() => {
    const autoSelectRegion = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const response = await fetch(`https://api.ipgeolocation.io/reverse-geocode?apiKey=YOUR_API_KEY&lat=${position.coords.latitude}&long=${position.coords.longitude}`);
              const data = await response.json();
              const countryCode = data.country_code2; // <--------  Adjust based on the API response
              const region = regions.find((r) => r.code === countryCode) || regions.find((r) => r.code === "US");
              setSelectedRegion(region.code);
              setPhoneNumber(region.numberCode + " ");
            } catch (error) {
              console.error("Error fetching location:", error);
              const defaultRegion = regions.find((r) => r.code === "US");
              setSelectedRegion(defaultRegion.code);
              setPhoneNumber(defaultRegion.numberCode + " ");
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            const defaultRegion = regions.find((r) => r.code === "US");
            setSelectedRegion(defaultRegion.code);
            setPhoneNumber(defaultRegion.numberCode + " ");
          }
        );
      } else {
        //<---------------- Geolocation not supported
        const defaultRegion = regions.find((r) => r.code === "US");
        setSelectedRegion(defaultRegion.code);
        setPhoneNumber(defaultRegion.numberCode + " ");
      }
    };

    autoSelectRegion();
  }, [regions]); //<------------- Add `regions` to the dependency array

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (region) => {
    setSelectedRegion(region.code);
    setIsDropdownOpen(false);
    const currentPhone = phoneNumber.split(" ")[1] || "";
    setPhoneNumber(region.numberCode + " " + currentPhone);
  };

  const handlePhoneNumberChange = (e) => {
    const currentRegion = regions.find((r) => r.code === selectedRegion);
    const input = e.target.value.replace(/^\+\d+\s/, "");
    if (/^\d*$/.test(input)) {
      setPhoneNumber(currentRegion.numberCode + " " + input);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //<-------------- Add your form submission logic here
  };

  const isFormValid = firstName && lastName && email && message && /^\d+$/.test(phoneNumber.replace(/^\+\d+\s/, ""));

  const currentRegion = regions.find((r) => r.code === selectedRegion);

  return (
    <div className="callback-form-main">
      <form onSubmit={handleSubmit}>
        <div className="name-inputs-main">
          <input type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="name-inputs-main">
          <input type="text" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="telephone-input-main">
            <div className="region-select-main" onClick={toggleDropdown}>
              <img src={currentRegion.image} alt={selectedRegion} className="region-flag" />
              <Formdropdownicon />
            </div>
            <input
              type="tel"
              placeholder={`Phone Number (${currentRegion.numberCode})`}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              pattern="[0-9]*"
              className={`phone-input ${/^\d+$/.test(phoneNumber.replace(/^\+\d+\s/, "")) ? "" : "invalid"}`}
            />
            {isDropdownOpen && (
              <div className="dropdown-list">
                {regions.map((region) => (
                  <div className="form-dropdowncontent" key={region.code} onClick={() => handleSelect(region)}>
                    <img src={region.image} alt={region.code} className="region-flag" />
                    <span className="region-name-txt">{region.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="textarea-main">
          <label>Message*</label>
          <textarea placeholder="Type your message here" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div className="terms-lin-main">
          <p>
            By submitting this form, you agree to receive emails from MultiBank Group in accordance with our <Link to={"/contactus"}>Terms & Conditions</Link>, <Link to={"/contactus"}>Privacy Policy</Link>, and{" "}
            <Link to={"/contactus"}>Cookie Policy</Link>.
          </p>
          <div className="submit-button">
            <button type="submit" disabled={!isFormValid} className={`submit-btn ${!isFormValid ? "disabled" : "active"}`}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
