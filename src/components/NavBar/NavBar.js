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
          <button className="dropbtn">Events</button>
          <div className="dropdown-content">
            <NavLink to="./gurupurnima" className="hover-menu-item">
              Gurupurnima
            </NavLink>
            <NavLink to="./diwali-milan" className="hover-menu-item">
              Diwali Milan
            </NavLink>
            <NavLink to="./international-events" className="hover-menu-item">
              International Events
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
