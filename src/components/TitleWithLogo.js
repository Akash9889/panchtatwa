import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function TitleWithLogo() {
  const history = useNavigate();
  return (
    <div className="App-logo-container" onClick={() => history("/")}>
      <img loading="lazy" className="App-logo" src={logo} alt="" />
    </div>
  );
}
