import React from "react";
import { NavLink } from "react-router-dom";
import Line from "../Line";
import "./sidebar.css";

export default function SidebarMenu({ openMenu, setOpenMenu }) {
  return (
    <div className={`${openMenu ? "sidebar" : "hide"}`}>
      <button onClick={() => setOpenMenu(false)} className="close-button">
        &#x2715;
      </button>
      <NavLink
        to="/"
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        Home
      </NavLink>
      <Line />
      <NavLink
        to="/about"
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        About us
      </NavLink>
      <Line />
      <NavLink
        to="/workshop"
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        Workshop
      </NavLink>
      <Line />
      <NavLink
        to="/temple"
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        Vastu temple
      </NavLink>
      <Line />
      <NavLink
        to="/gallery"
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        Gallery
      </NavLink>
      <Line />
      <NavLink
        to="/contact-us"
        className="sidebar-item"
        onClick={() => setOpenMenu(false)}
      >
        Contact us
      </NavLink>
    </div>
  );
}
