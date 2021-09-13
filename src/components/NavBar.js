import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaThLarge, FaVideo } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="top_header_container">
      <div className="top_header">
        <div className="virtual_card_flex">
          <h1>Virtual cards</h1>
          <FaVideo
            style={{ marginLeft: "1.4rem", marginTop: "1rem", color: "blue" }}
          />
          <p
            style={{
              marginTop: "1rem",
              fontSize: ".8rem",
              marginLeft: ".5rem",
              color: "blue",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Learn more
          </p>
        </div>
        <div>
          <button className="virtual_btn">+ Virtual card</button>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="active_navbar"
              className="navLink-1"
              to="/your"
            >
              Your
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active_navbar"
              className="navLink"
              to="/"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active_navbar"
              className="navLink"
              to="/blocked"
            >
              Blocked
            </NavLink>
          </li>
        </ul>
        <div className="navBar_icon">
          <FaThLarge style={{ marginRight: "1.5rem", color: "grey" }} />
          <FaBars style={{ color: "grey" }} />
        </div>
      </nav>
      <div className="navbar_line"></div>
    </div>
  );
};

export default NavBar;
