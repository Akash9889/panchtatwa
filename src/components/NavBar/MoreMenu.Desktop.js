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
            {renderMoreNavLink("/ashram", "Ashram")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/blogs", "Blogs")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/books", "Books")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/courses", "Courses")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/gallery", "Videos")}
          </div>
          <div className="desktop-line-link-wrapper">
            {renderMoreNavLink("/donations", "Donations")}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
