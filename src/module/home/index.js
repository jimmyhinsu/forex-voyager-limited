import React from "react";
import "./home.scss";
import Herobanner from "./herobanner";
import Platforms from "./platforms";
import Ourproductslidesection from "./Product";
import Brokersprogramsections from "./Brokersprogramsections";
import Wanttoget from "./wanttoget";
import Accountssection from "./Accountssections";
import Gotonext from "./gotonext";
import Whyselectussection from "./whyselectussection";

export default function Home() {
  return (
    <>
      <Herobanner id="about" />
      <Ourproductslidesection id="products" />
      <Platforms id="platforms" />
      <Accountssection id="accounts" />
      <Brokersprogramsections id="tools" />
      <Whyselectussection id="partnership" />
      <Gotonext />
      <Wanttoget />
      
    </>
  );
}
