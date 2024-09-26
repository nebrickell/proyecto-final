import React, { useState, useEffect } from "react";
import Logo from "./Images/logopng.png";
import "./App.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faUtensils,
  faTicket,
  faBasketShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import Option from "./Components/Option";

const navItems = [
  { href: "home", icon: faHouse, label: "Home" },
  { href: "about-More", icon: faCircleInfo, label: "About" },
  { href: "#menu", icon: faUtensils, label: "Menu" },
  { href: "#reservations", icon: faTicket, label: "Reservations" },
  { href: "#order", icon: faBasketShopping, label: "Order Online" },
  { href: "#login", icon: faUser, label: "Login" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const threshold = 70;
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    setOpenSignIn(true);
  };

  const handleOptionClick = () => {
    setOpenOption(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > threshold) {
        setIsHidden(true);
      } else if (currentScrollY < prevScrollY) {
        setIsHidden(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <nav
        className={`nav ${isOpen ? "nav-open" : ""} ${
          isHidden ? "nav-hidden" : ""
        }`}
        aria-label="Main navigation"
        role="navigation"
      >
        <div className={`wrapper ${isOpen ? "wrapper-open" : ""}`}>
          <img
            src={Logo}
            alt="Little Lemon Logo"
            className="logo"
            onClick={() => {
              window.location.href = "/home";
            }}
            style={{ cursor: "pointer" }}
            aria-label="Navigate to homepage"
          />
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} style={{ cursor: "pointer" }}>
                <a
                  href={item.href}
                  onClick={
                    item.label === "Login"
                      ? handleLoginClick
                      : item.label === "Reservations"
                      ? handleOptionClick
                      : undefined
                  }
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="menu-toggle"
            onClick={toggleDrawer}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <Divider className={`${isOpen ? "menu-divider" : ""}`} />
        <div className={`menu_drawer ${isOpen ? "open" : ""}`} role="menu">
          <ul className="nav-links-drawer">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  onClick={
                    item.label === "Login"
                      ? handleLoginClick
                      : item.label === "Reservations"
                      ? handleOptionClick
                      : undefined
                  }
                  aria-label={`Navigate to ${item.label}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="icon-spacing" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Render SignIn dialog */}
      <SignIn open={openSignIn} onClose={() => setOpenSignIn(false)} />
      {/* Render Option dialog */}
      <Option open={openOption} onClose={() => setOpenOption(false)} />
    </>
  );
}

export default Nav;
