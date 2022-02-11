import React from "react";
import { NavLink } from "react-router-dom";
import Line from "./Line";

export default function SidebarMenu({ openMenu, setOpenMenu }) {
  return (
    <div className={`${openMenu ? "sidebar" : "hide"}`}>
      <button onClick={() => setOpenMenu(false)} className="close-button">
        &#x2715;
      </button>
      <NavLink to="/" className="sidebar-item">
        Home
      </NavLink>
      <Line />
      <NavLink to="/about" className="sidebar-item">
        About us
      </NavLink>
      <Line />
      <NavLink to="/workshop" className="sidebar-item">
        Workshop
      </NavLink>
      <Line />
      <NavLink to="/temple" className="sidebar-item">
        Vastu temple
      </NavLink>
      <Line />
      <NavLink to="/gallery" className="sidebar-item">
        Gallery
      </NavLink>
      <Line />
      <NavLink to="/contact-us" className="sidebar-item">
        Contact us
      </NavLink>
    </div>
  );
}
