import "../../styles/Header/Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navLinkClass = "nav-link";
  const navLinkActiveClass = "nav-link active";

  return (
    <nav className="note-app__navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to="catatan-aktif"
            className={({ isActive }) => {
              return isActive ? navLinkActiveClass : navLinkClass;
            }}
          >
            Catatan Aktif
          </NavLink>
        </li>
        <li>
          <NavLink
            to="catatan-arsip"
            className={({ isActive }) => {
              return isActive ? navLinkActiveClass : navLinkClass;
            }}
          >
            Catatan Arsip
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
