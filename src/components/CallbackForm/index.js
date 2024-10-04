import React, { useState, useEffect, useMemo, useRef } from "react";
import "./callbackfrom.scss";
import Formdropdownicon from "../../assets/svg/formdropdownicon";
import { Link } from "react-router-dom";

// <------- dropdown sr & cr icon -------> 
import Searcicon from "../../assets/svg/searcicon";
import Closeicon from "../../assets/svg/closeicon";

// <------- Import regions from the separate file -------> 
import { regions } from "../regioniconsandcodes/regions";

export default function Callbackfrom() {
  const [selectedRegion, setSelectedRegion] = useState("AE");
  const [phoneNumber, setPhoneNumber] = useState("+971 ");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dropdownRef = useRef(null);

  const memoizedRegions = useMemo(() => regions, []);

  useEffect(() => {
    const defaultRegion = memoizedRegions.find((r) => r.code === "AE");

    if (defaultRegion) {
      setSelectedRegion(defaultRegion.code);
      setPhoneNumber(defaultRegion.numberCode + " ");
    }
  }, [memoizedRegions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
    const inputValue = e.target.value;

    const cleanedInput = inputValue.replace(/[^+\d\s]/g, "");

    const currentRegion = memoizedRegions.find((r) => r.code === selectedRegion);

    const inputWithoutCode = cleanedInput.replace(/^\+\d+\s*/, "");

    if (inputWithoutCode === "") {
      setPhoneNumber(currentRegion.numberCode + " ");
      return;
    }

    if (!cleanedInput.startsWith(currentRegion.numberCode)) {
      setPhoneNumber(currentRegion.numberCode + " " + inputWithoutCode);
    } else {
      setPhoneNumber(cleanedInput);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    console.log(formData);

    const mailtoLink = `mailto:Info@forexvoyeger.com?subject=Callback%20Request&body=First%20Name:%20${encodeURIComponent(
      firstName
    )}%0ALast%20Name:%20${encodeURIComponent(
      lastName
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0APhone%20Number:%20${encodeURIComponent(
      phoneNumber
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("+971 ");
    setMessage("");
  };

  const currentRegion = memoizedRegions.find((r) => r.code === selectedRegion);

  const filteredRegions = useMemo(() => {
    const filtered = memoizedRegions.filter((region) =>
      region.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const uniqueRegions = Array.from(new Set(filtered.map((r) => r.code))).map(
      (code) => filtered.find((r) => r.code === code)
    );

    return uniqueRegions;
  }, [memoizedRegions, searchTerm]);

  return (
    <div className="callback-form-main">
      <form onSubmit={handleSubmit}>
        <div className="name-inputs-main">
          <input
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name*"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="name-inputs-main">
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="telephone-input-main">
            <div className="region-select-main" onClick={toggleDropdown}>
              <img
                src={currentRegion.image}
                alt={selectedRegion}
                className="region-flag"
              />
              <Formdropdownicon />
            </div>
            <input
              required
              type="tel"
              placeholder={`Phone Number (${currentRegion.numberCode})`}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="phone-input"
              pattern="^\+?\d{1,3}\s?\d{0,}$"
              title="Phone number should start with a '+' followed by the country code and phone number."
            />

            {isDropdownOpen && (
              <div className="dropdown-list" ref={dropdownRef}>
                <div className="country-search">
                  <input
                    type="text"
                    placeholder="Search country"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="searchicon">
                    <Searcicon />
                  </div>
                  {searchTerm && (
                    <div className="clear-search" onClick={() => setSearchTerm("")}>
                      <Closeicon />
                    </div>
                  )}
                </div>
                {filteredRegions.length > 0 ? (
                  <div className="country-suggestion-main">
                    {filteredRegions.map((region) => (
                      <div
                        className="form-dropdowncontent"
                        key={region.code}
                        onClick={() => handleSelect(region)}
                      >
                        <img
                          src={region.image}
                          alt={region.code}
                          className="region-flag"
                        />
                        <span className="region-name-txt">{region.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="nocountryfound">
                    <span>No Country found.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="textarea-main">
          <label>Message * </label>
          <textarea
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="terms-lin-main">
          <p data-aos="fade-down">
            By submitting this form, you agree to receive emails from Forex
            Voyeger Limited in accordance with our{" "}
            <Link to={"/terms"}>Terms & Conditions</Link> and{" "}
            <Link to={"/privacypage"}>Privacy Policy</Link>.
          </p>
        </div>

        <div className="submit-button">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
