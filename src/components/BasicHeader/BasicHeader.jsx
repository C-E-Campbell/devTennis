import React from "react";
import "./BasicHeader.scss";
import { Link } from "react-router-dom";

import babolat from "../../assets/babolat-logo-min.png";
import wilson from "../../assets/wilson-logo-min.png";
import adidas from "../../assets/Adidas-Logo-min.png";
import prince from "../../assets/prince-logo-min.png";

export default function BasicHeader() {
  return (
    <header>
      <Link to="/">Home</Link>
      <div className="LogoBox">
        <img src={babolat} alt="babolat" />
        <img src={wilson} alt="wilson" />
        <img src={adidas} alt="adidas" />
        <img src={prince} alt="prince" />
      </div>
    </header>
  );
}
