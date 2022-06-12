import React from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import Line from "../Line/Line";
import "./moreMenu.css";

export default function MoreMenu({ showMore, setShowMore, setOpenMenu }) {
  const renderMoreNavLink = (to, path) => {
    return (
      <NavLink
        to={to}
        className="more-menu-item"
        onClick={() => setOpenMenu(false)}
      >
        {path}
      </NavLink>
    );
  };

  return (
    <div
      className="more-menu-container"
      onClick={() => setShowMore((prev) => !prev)}
    >
      <span className={showMore ? "active" : ""}>More</span>
      <CSSTransition
        in={showMore}
        timeout={500}
        classNames="more-menu-transition"
        unmountOnExit
        onEnter={() => setShowMore(true)}
        onExited={() => setShowMore(false)}
      >
        <div className="more-menu more-menu-transition">
          {renderMoreNavLink("/media", "Media")}
          <Line />
          {renderMoreNavLink("/blogs", "Blogs")}
          <Line />
          {renderMoreNavLink("/classes", "Classes")}
          <Line />
          {renderMoreNavLink("/gallery", "Videos")}
          <Line />
          {renderMoreNavLink("/donations", "Donations")}
        </div>
      </CSSTransition>
    </div>
  );
}

export function SriGurujiAccordian({
  showSriGurujiAccordian,
  setShowSriGurujiAccordian,
  setOpenMenu,
}) {
  const renderMoreNavLink = (to, path) => {
    return (
      <NavLink
        to={to}
        className="more-menu-item"
        onClick={() => setOpenMenu(false)}
      >
        {path}
      </NavLink>
    );
  };

  return (
    <div
      style={{ padding: "20px 20px 0px 20px", color: "#404349" }}
      onClick={() => setShowSriGurujiAccordian((prev) => !prev)}
    >
      <span
        className={showSriGurujiAccordian ? "active" : ""}
        style={{ fontSize: "2rem" }}
      >
        Sri Guruji
      </span>
      <CSSTransition
        in={showSriGurujiAccordian}
        timeout={500}
        classNames="more-menu-transition"
        unmountOnExit
        onEnter={() => setShowSriGurujiAccordian(true)}
        onExited={() => setShowSriGurujiAccordian(false)}
      >
        <div
          className="more-menu more-menu-transition"
          style={{ paddingBottom: "0px" }}
        >
          {renderMoreNavLink("/journey", "My Journey")}
          <Line />
          {renderMoreNavLink("/path", "My path")}
          <Line />
          {renderMoreNavLink("/destination", "My Destination")}
        </div>
      </CSSTransition>
    </div>
  );
}

export function TeachingsAccordian({
  showTeachingAccordian,
  setShowTeachingAccordian,
  setOpenMenu,
}) {
  const renderMoreNavLink = (to, path) => {
    return (
      <NavLink
        to={to}
        className="more-menu-item"
        onClick={() => setOpenMenu(false)}
      >
        {path}
      </NavLink>
    );
  };

  return (
    <div
      style={{ padding: "20px 20px 0px 20px", color: "#404349" }}
      onClick={() => setShowTeachingAccordian((prev) => !prev)}
    >
      <span
        className={showTeachingAccordian ? "active" : ""}
        style={{ fontSize: "2rem" }}
      >
        Teachings
      </span>
      <CSSTransition
        in={showTeachingAccordian}
        timeout={500}
        classNames="more-menu-transition"
        unmountOnExit
        onEnter={() => setShowTeachingAccordian(true)}
        onExited={() => setShowTeachingAccordian(false)}
      >
        <div
          className="more-menu more-menu-transition"
          style={{ paddingBottom: "0px" }}
        >
          {renderMoreNavLink("/classes", "Classes")}
          <Line />
          {renderMoreNavLink("/workshops", "Workshops")}
        </div>
      </CSSTransition>
    </div>
  );
}

export function EventsAccordian({
  showEventsAccordian,
  setShowEventsAccordian,
  setOpenMenu,
}) {
  const renderMoreNavLink = (to, path) => {
    return (
      <NavLink
        to={to}
        className="more-menu-item"
        onClick={() => setOpenMenu(false)}
      >
        {path}
      </NavLink>
    );
  };

  return (
    <div
      style={{ padding: "20px 20px 0px 20px", color: "#404349" }}
      onClick={() => setShowEventsAccordian((prev) => !prev)}
    >
      <span
        className={showEventsAccordian ? "active" : ""}
        style={{ fontSize: "2rem" }}
      >
        Media
      </span>
      <CSSTransition
        in={showEventsAccordian}
        timeout={500}
        classNames="more-menu-transition"
        unmountOnExit
        onEnter={() => setShowEventsAccordian(true)}
        onExited={() => setShowEventsAccordian(false)}
      >
        <div
          className="more-menu more-menu-transition"
          style={{ paddingBottom: "0px" }}
        >
          {renderMoreNavLink("/gurupurnima", "Gurupurnima")}
          <Line />
          {renderMoreNavLink("/events", "Events")}
          <Line />
          {renderMoreNavLink("/dignitaries", "Dignitaries")}
          <Line />
          {renderMoreNavLink("/book-launch", "Book Launch")}
          <Line />
          {renderMoreNavLink("/consultancies", " Consultancies")}
        </div>
      </CSSTransition>
    </div>
  );
}
