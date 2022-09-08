import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "../Sidebar/SidebarMenu";
import TitleWithLogo from "../TitleWithLogo";
import Line from "../Line/Line";
import "./navbar.css";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

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
        <NavLink to="/vastu-purush" className="App-nav-item">
          Vastu Purush
        </NavLink>
        <Line />
        <div className="dropdown">
          <button className="dropbtn">Teachings</button>
          <div className="dropdown-content">
            <NavLink to="./classes" className="hover-menu-item">
              Classes
            </NavLink>
            <NavLink to="./workshops" className="hover-menu-item">
              Workshops
            </NavLink>
          </div>
        </div>
        <Line />
        <div className="dropdown">
          <button className="dropbtn">Media</button>
          <div className="dropdown-content">
            <NavLink to="./gurupurnima" className="hover-menu-item">
              Gurupurnima
            </NavLink>
            <NavLink to="./events" className="hover-menu-item">
              Events
            </NavLink>
            <NavLink to="./dignitaries" className="hover-menu-item">
              Dignitaries
            </NavLink>
            <NavLink to="./book-launch" className="hover-menu-item">
              Book Launch
            </NavLink>
            <NavLink to="./consultancies" className="hover-menu-item">
              Consultancies
            </NavLink>
          </div>
        </div>
        <Line />
        <NavLink to="/ashram" className="App-nav-item">
          Ashram
        </NavLink>
        <Line />
        <NavLink to="/books" className="App-nav-item">
          Books
        </NavLink>

        <Line />
        <NavLink to="/donations" className="App-nav-item">
          Donations
        </NavLink>
        <Line />
        <NavLink to="/contact-us" className="App-nav-item">
          Contact Us
        </NavLink>
      </nav>
      <button className="hambergur-menu" onClick={() => setOpenMenu(true)}>
        &#9776;
      </button>
      <SidebarMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
}
