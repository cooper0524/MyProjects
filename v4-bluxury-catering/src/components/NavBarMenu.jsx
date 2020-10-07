import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../common/DropdownMenu";
import logo from "../assets/logoWithText.png";
import NavItem from "../common/NavItem";

const NavBarMenu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light justify-content-between"
      expanded={expanded}
    >
      <Link className="navbar-brand" to="/home">
        <img src={logo} alt="bluxury-catering" width="250" height="60" />
      </Link>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul
          className="navbar-nav ml-auto "
          id="navbarItems"
          onClick={() => setExpanded(false)}
        >
          <NavItem title={"逆光記憶"} path={"逆光記憶"} />
          <NavItem title={"響粹"} path={"響粹"} />
          <DropdownMenu
            title={"品牌故事"}
            items={["藍穎餐飲", "逆光記憶", "響粹"]}
          />
          <DropdownMenu
            title={"安心食材"}
            items={["麵粉", "乳製品", "生鮮肉品", "生鮮蔬菜"]}
          />
          <NavItem
            title={
              <i
                className="fa fa-shopping-cart"
                aria-hidden="true"
                style={({ cursor: "pointer" }, { fontSize: "40px" })}
              />
            }
            path={"購物車"}
          />
        </ul>
      </div>
    </nav>
  );
};

export default NavBarMenu;
