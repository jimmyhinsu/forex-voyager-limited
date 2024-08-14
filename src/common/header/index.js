import React from "react";
import "./header.scss";
import Headertopline from "../../components/Headercontactline";
import Headermain from "./Header";

function Header() {
  return (
    <div>
      <header>
        <Headertopline />
        <Headermain />
      </header>
    </div>
  );
}

export default Header;
