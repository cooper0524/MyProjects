import React, { useState, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/logoWithText.png";
import memoryLogo from "../assets/memoryLogo.png";
import simplistLogo from "../assets/simplistLogo.png";
import NavItem from "../common/NavItem";
import { auth } from "../services/firebase";
import { CartContext } from "../contexts/CartContext";
import useFetchUser from "../customHook/useFetchUser";

const NavBar = () => {
  const authUser = useFetchUser();
  const { itemCount } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      id="navbar"
      bg="white"
      expand="lg"
      expanded={expanded}
      className="mr-auto navbar-fixed-top"
    >
      <Container>
        <Navbar.Brand onClick={() => setExpanded(false)}>
          <Link to={"/"} className="navbar-brand">
            <img
              src={logo}
              alt="bluxury-catering"
              width="300"
              height="70"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            id="navbarNavDropdown"
            className="ml-auto"
            onClick={() => setExpanded(false)}
          >
            <NavItem
              imgSrc={memoryLogo}
              alt="memoryLogo"
              title={"逆光記憶"}
              path={"逆光記憶"}
            />
            <NavItem
              imgSrc={simplistLogo}
              alt="simplistLogo"
              title={"響粹"}
              path={"響粹"}
            />

            <NavItem title={"品牌故事"} path={"品牌故事"} />
            <NavItem title={"安心食材"} path={"安心食材"} />

            {!authUser && (
              <React.Fragment>
                <Link
                  className="nav-item nav-link"
                  style={{ paddingRight: "30px" }}
                  to="/登入"
                >
                  登入
                </Link>
              </React.Fragment>
            )}
            {authUser && (
              <React.Fragment>
                <a
                  className="nav-item nav-link"
                  style={{ paddingRight: "30px" }}
                  href="/"
                  onClick={() => {
                    auth.signOut().then(() => {
                      localStorage.clear();
                    });
                  }}
                >
                  登出
                </a>
              </React.Fragment>
            )}
            {itemCount > 0 ? (
              <NavItem
                title={
                  <i
                    className="fa fa-shopping-cart fa-lg"
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  >
                    ({itemCount})
                  </i>
                }
                path={"購物車"}
              />
            ) : (
              <NavItem
                title={
                  <i
                    className="fa fa-shopping-cart fa-lg"
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  />
                }
                path={"購物車"}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
