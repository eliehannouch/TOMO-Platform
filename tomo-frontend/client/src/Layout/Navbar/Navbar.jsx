import React, { useState } from "react";
import "./navbar.css";
import TomeLogo from "../../assets/TomeLogo.png";
import Hamburger from "../../hamburger/Hamburger";
import XHamburger from "../../hamburger/XHamburger";

const links = [
  { name: "Stories", href: "/stories" },
  { name: "Imaginary Futures", href: "/imaginary" },
  { name: "Our Methodology", href: "/methodology" },
  { name: "Join Us", href: "/joinUs" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar1">
      <div className="container1">
        <div>
          <a href="/">
            <img src={TomeLogo} alt="TomeLogo" />
          </a>
        </div>
        <div
          className="menu-icon"
          onClick={handleShowNavbar}
          style={{ marginRight: "30px" }}
        >
          {showNavbar === true ? <XHamburger /> : <Hamburger />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {links.map((link,i) => (
              <li key={i} onClick={() => setShowNavbar(false)}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
