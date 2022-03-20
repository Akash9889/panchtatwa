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
