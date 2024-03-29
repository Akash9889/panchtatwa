import React from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

export default function DesktopMoreMenu({
  showMore,
  setShowMore,
  setOpenMenu,
}) {
  const history = useLocation();
  React.useEffect(() => {
    setShowMore(false);
  }, [history.pathname]);

  const renderMoreNavLink = (to, path) => {
    return (
      <NavLink
        to={to}
        className="desktop-more-menu-item"
        onClick={() => setOpenMenu(false)}
      >
        {path}
      </NavLink>
    );
  };

  return (
    <div
      className="desktop-more-menu-container"
      onClick={() => setShowMore((prev) => !prev)}
    >
      <CSSTransition
        in={showMore}
        timeout={300}
        classNames="desktop-more-menu-transition"
        unmountOnExit
        onEnter={() => setShowMore(true)}
        onExited={() => setShowMore(false)}
      >
        <div
          className="desktop-more-menu 
         desktop-more-menu-transition"
        >
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/media", "Media")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/classes", "Classes")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/donations", "Donations")}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
