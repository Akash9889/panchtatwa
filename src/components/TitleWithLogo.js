import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import title from "../assets/images/title-panchtatwa.png";

export default function TitleWithLogo() {
  const history = useNavigate();
  return (
    <div className="App-logo-container" onClick={() => history("/")}>
      <img className="App-logo" src={logo} alt="" />
      {/* <img className="App-heading" src={title} alt="Panchtatwa" /> */}
    </div>
  );
}
