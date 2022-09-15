import "../../styles/Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="note-app__header">
      <Link to="/" className="note-app__brand">
        Catatan App
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
