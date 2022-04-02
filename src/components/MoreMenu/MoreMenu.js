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
          {renderMoreNavLink("/ashram", "Ashram")}
          <Line />
          {renderMoreNavLink("/blogs", "Blogs")}
          <Line />
          {renderMoreNavLink("/books", "Books")}
          <Line />
          {renderMoreNavLink("/courses", "Courses")}
          <Line />
          {renderMoreNavLink("/gallery", "Videos")}
          <Line />
          {renderMoreNavLink("/donations", "Donations")}
        </div>
      </CSSTransition>
    </div>
  );
}

export function Accordian({ showAccordian, setShowAccordian, setOpenMenu }) {
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
      onClick={() => setShowAccordian((prev) => !prev)}
    >
      <span
        className={showAccordian ? "active" : ""}
        style={{ fontSize: "2rem" }}
      >
        Sri Guruji
      </span>
      <CSSTransition
        in={showAccordian}
        timeout={500}
        classNames="more-menu-transition"
        unmountOnExit
        onEnter={() => setShowAccordian(true)}
        onExited={() => setShowAccordian(false)}
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
