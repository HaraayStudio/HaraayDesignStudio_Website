import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import styles from "../styles/NavbarMain.module.scss"; // Import SCSS for styles
import logo from "../assets/Hlogo.png";
import Icons from "../components/Icons";

const NavbarMain = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the navigation menu
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  // Close the navbar when a menu item is clicked
  const closeMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div className={styles.navigation}>
      <img className={styles.logo} src={logo} alt="Hlogo" />
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="nav-toggle"
        checked={isExpanded}
        onChange={toggleMenu}
      />
      <label htmlFor="nav-toggle" className={styles.navigation__button}>
        <h6> MENU</h6>
        <span
          className={styles.navigation__icon}
          aria-label="toggle navigation menu"
        ></span>
      </label>

      <div className={styles.navigation__background2}></div>
      <nav className={styles.navigation__nav} role="navigation">
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navigation__item}>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link
              }
              onClick={closeMenu}
            >
              Work
            </NavLink>
          </li>
          <li className={styles.navigation__item}>
            <NavLink
              to="/expertise"
              className={({ isActive }) =>
                isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link
              }
              onClick={closeMenu}
            >
              Expertise
            </NavLink>
          </li>
          <li className={styles.navigation__item}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link
              }
              onClick={closeMenu}
            >
              About Haraay
            </NavLink>
          </li>
          <li className={styles.navigation__item}>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link
              }
              onClick={closeMenu}
            >
              Blogs
            </NavLink>
          </li>
          <li className={styles.navigation__item}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link
              }
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className={styles.navsocial}>
          <div className={styles.navinforbox}>
            <Icons.TbMailFilled className={styles.iconstyle} title="Home" />
            <h2>hello@haraaydesignstudio.com</h2>
          </div>
          <div className={styles.navinforbox}>
            <Icons.FaLocationDot className={styles.iconstyle} title="Home" />
            <h2>
              Right, near Royal Enfield, Bhusari Colony, Kothrud, Pune,
              Maharashtra 411038
            </h2>
          </div>
          <div className={styles.socialicons}>
            <Icons.Instagram className={styles.siconstyle} title="Home" />
            <Icons.Linkedin className={styles.siconstyle} title="Home" />
            <Icons.Facebook className={styles.siconstyle} title="Home" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
