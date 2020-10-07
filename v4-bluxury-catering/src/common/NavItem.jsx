import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ imgSrc, alt, title, path }) => {
  return (
    <NavLink
      key={title}
      id="navItems"
      className="nav-item nav-link"
      to={`${path}`}
    >
      {imgSrc && <img src={imgSrc} alt={alt} width="40px" />}

      {title}
    </NavLink>
  );
};

export default NavItem;
