import React from "react";
import "./header.scss";
import Headertopline from "../../components/Headercontactline";
import Headermain from "./Header";
import Mobileheader from "../../components/Mobileheader";

function Header() {
  return (
    <div>
      <header>
        <Headertopline />
        <Headermain />
        <Mobileheader />
      </header>
    </div>
  );
}

export default Header;
