import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Line from "../Line/Line";
import MoreMenu from "../MoreMenu/MoreMenu";
import "./sidebar.css";

export default function SidebarMenu({ openMenu, setOpenMenu }) {
  const [showMore, setShowMore] = useState(false);

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
        {/* <div
          className="more-menu-container"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <span className={showMore ? "active" : ""}>More</span>
          <CSSTransition
            in={showMore}
            timeout={500}
            classNames="more-menu-transition"
            // unmountOnExit
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
        </div> */}
      </div>
    </CSSTransition>
  );
}
