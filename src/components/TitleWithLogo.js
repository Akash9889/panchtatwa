import React from "react";
import logo from "../assets/images/logo.png";
import title from "../assets/images/title-panchtatwa.png";

export default function TitleWithLogo() {
  return (
    <div className="App-logo-container">
      <img className="App-logo" src={logo} alt="" />
      <img className="App-heading" src={title} alt="Panchtatwa" />
    </div>
  );
}
