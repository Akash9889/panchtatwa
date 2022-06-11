import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Line from "../Line/Line";
import MoreMenu, {
  SriGurujiAccordian,
  TeachingsAccordian,
  EventsAccordian,
} from "../MoreMenu/MoreMenu";
import "./sidebar.css";

export default function SidebarMenu({ openMenu, setOpenMenu }) {
  const [showMore, setShowMore] = useState(false);
  const [showSriGurujiAccordian, setShowSriGurujiAccordian] = useState(false);
  const [showTeachingAccordian, setShowTeachingAccordian] = useState(false);
  const [showEventsAccordian, setShowEventsAccordian] = useState(false);

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
        <SriGurujiAccordian
          showSriGurujiAccordian={showSriGurujiAccordian}
          setShowSriGurujiAccordian={setShowSriGurujiAccordian}
          setOpenMenu={setOpenMenu}
        />
        <Line />
        {renderNavLink("/vastu-purush", "Vastu Purush")}
        <Line />
        <TeachingsAccordian
          showTeachingAccordian={showTeachingAccordian}
          setShowTeachingAccordian={setShowTeachingAccordian}
          setOpenMenu={setOpenMenu}
        />
        <Line />
        <EventsAccordian
          showEventsAccordian={showEventsAccordian}
          setShowEventsAccordian={setShowEventsAccordian}
          setOpenMenu={setOpenMenu}
        />
        <Line />
        {renderNavLink("/ashram", "Ashram")}
        <Line />
        {renderNavLink("/books", "Books")}
        <Line />
        {renderNavLink("/donations", "Donations")}
        <Line />
        {renderNavLink("/contact-us", "Contact us")}
        <Line />
        {/* <MoreMenu
          showMore={showMore}
          setShowMore={setShowMore}
          setOpenMenu={setOpenMenu}
        /> */}
      </div>
    </CSSTransition>
  );
}
