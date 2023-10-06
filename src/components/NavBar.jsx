import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">
      {/* bouton ouvrir le menu */}
      <div
        className="open_menu yellow"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
        <span>Menu</span>
      </div>

      {/* logo  */}
      <div className="image_container">
        <Link to="/Home">
          <img className="logo" src={logo} alt="logo Vertical art" />
        </Link>
      </div>

      {/* navbar : les liens */}
      <nav className="navBar" id={menuOpen ? "open" : ""}>

        {/* bouton fermer le menu */}
        <span className="span_btn yellow">
          <FontAwesomeIcon
            className="close_btn_style"
            icon={faXmark}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </span>
        <ul className="navBar_ul">
          <li>
            <NavLink to="/" className="link home">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/NosSalles" className="link">
              nos salles
            </NavLink>
          </li>
          <li>
            <NavLink to="/EscaladeParis" className="link">
              escalade paris
            </NavLink>
          </li>
          <li>
            <NavLink to="/News" className="link">
              news
            </NavLink>
          </li>
          <li>
            <NavLink to="/Recrutement" className="link">
              recrutement
            </NavLink>
          </li>
          <li>
            <NavLink to="/DevenirFranchise" className="link">
              devenir franchisé
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* contact nav */}
      <nav className="contact_nav" id={menuOpen ? "open" : ""}>
        <ul className="contact_nav_link">
          <li>
            <i>fb</i>
          </li>
          <li>
            <i>insta</i>
          </li>
          <li>
            <i>yt</i>
          </li>
          <li>
            <i>in</i>
          </li>
        </ul>
        <Link className="shop" to="/Shop">
          Shop now
        </Link>
      </nav>
    </nav>
  );
}
