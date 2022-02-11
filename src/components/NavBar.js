import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import TitleWithLogo from "./TitleWithLogo";
import Line from "./Line";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="App-header">
      <TitleWithLogo />
      <nav>
        <NavLink to="/" className="App-nav-item">
          Home
        </NavLink>
        <Line />
        <NavLink to="/about" className="App-nav-item">
          About us
        </NavLink>
        <Line />
        <NavLink to="/workshop" className="App-nav-item">
          Workshop
        </NavLink>
        <Line />
        <NavLink to="/temple" className="App-nav-item">
          Vastu temple
        </NavLink>
        <Line />
        <NavLink to="/gallery" className="App-nav-item">
          Gallery
        </NavLink>
        <Line />
        <NavLink to="/contact-us" className="App-nav-item">
          Contact us
        </NavLink>
      </nav>
      <button className="hambergur-menu" onClick={() => setOpenMenu(true)}>
        &#9776;
      </button>
      {openMenu && (
        <SidebarMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}
    </header>
  );
}
