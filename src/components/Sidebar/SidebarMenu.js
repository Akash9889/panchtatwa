import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Line from "../Line/Line";
import MoreMenu, { Accordian } from "../MoreMenu/MoreMenu";
import "./sidebar.css";

export default function SidebarMenu({ openMenu, setOpenMenu }) {
  const [showMore, setShowMore] = useState(false);
  const [showAccordian, setShowAccordian] = useState(false);

  useEffect(() => {
    if (setOpenMenu) setShowMore(false);
  }, [openMenu]);

  const renderNavLink = (to, path) => {
    return (
      <NavLink
        to={to}
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        {path}
      </NavLink>
    );
  };

  return (
    <CSSTransition
      in={openMenu}
      timeout={300}
      classNames="sidebar-transition"
      // unmountOnExit
      onEnter={() => setOpenMenu(true)}
      onExited={() => setOpenMenu(false)}
    >
      <div className="sidebar sidebar-transition">
        <button onClick={() => setOpenMenu(false)} className="close-button">
          &#x2715;
        </button>
        <Accordian
          showAccordian={showAccordian}
          setShowAccordian={setShowAccordian}
          setOpenMenu={setOpenMenu}
        />
        <Line />
        {renderNavLink("/", "Home")}
        <Line />
        {renderNavLink("/about", "About us")}
        <Line />
        {renderNavLink("/workshop", "Workshop")}
        <Line />
        {renderNavLink("/temple", "Vastu temple")}
        <Line />
        {renderNavLink("/gallery", "Gallery")}
        <Line />
        {renderNavLink("/contact-us", "Contact us")}
        <Line />
        <MoreMenu
          showMore={showMore}
          setShowMore={setShowMore}
          setOpenMenu={setOpenMenu}
        />
      </div>
    </CSSTransition>
  );
}
