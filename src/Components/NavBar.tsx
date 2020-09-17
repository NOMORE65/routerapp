import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>NavBar</h1>
      <ul>
        <li>
          <NavLink to="/Home" activeStyle={{ fontWeight: "bold" }} exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            activeStyle={{ fontWeight: "bold" }}
            exact={true}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Discover"
            activeStyle={{ fontWeight: "bold" }}
            exact={true}
          >
            Discover
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
