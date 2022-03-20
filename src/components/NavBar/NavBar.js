import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "../Sidebar/SidebarMenu";
import TitleWithLogo from "../TitleWithLogo";
import Line from "../Line/Line";
import "./navbar.css";
import DesktopMoreMenu from "./MoreMenu.Desktop";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <header className="App-header">
      <TitleWithLogo />
      <nav>
        <div className="dropdown">
          <button className="dropbtn">Sri Guruji</button>
          <div className="dropdown-content">
            <NavLink to="./journey" className="hover-menu-item">
              My Journey
            </NavLink>
            <NavLink to="./path" className="hover-menu-item">
              My Path
            </NavLink>
            <NavLink to="./destination" className="hover-menu-item">
              My Destination
            </NavLink>
          </div>
        </div>
        <Line />
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
        <Line />
        <div className="navbar-more-menu-container">
          <span
            className={showMore ? "active App-nav-item" : "App-nav-item"}
            onClick={() => setShowMore((prev) => !prev)}
          >
            More
          </span>
          <DesktopMoreMenu
            showMore={showMore}
            setShowMore={setShowMore}
            setOpenMenu={setOpenMenu}
          />
        </div>
      </nav>
      <button className="hambergur-menu" onClick={() => setOpenMenu(true)}>
        &#9776;
      </button>
      <SidebarMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
}
