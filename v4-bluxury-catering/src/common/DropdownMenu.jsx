import React from "react";
import { Link, NavLink } from "react-router-dom";

const DropdownMenu = ({ title, items }) => {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title}
      </Link>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {items.map((item) => (
          <NavLink
            key={item}
            className="dropdown-item"
            to={`/${title}/${item}`}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </li>
  );
};

export default DropdownMenu;
