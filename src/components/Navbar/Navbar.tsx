import { useCallback, useContext, useState } from "react";

import { NavLink } from "react-router-dom";

import HamburgerIcon from "../../assets/hamburger-menu.svg?react";
import { ROUTES } from "../../constants/routes";
import { AuthContext } from "../../context/AuthContext";

import "./Navbar.css";

const LINKS = [
  {
    name: "Home",
    url: ROUTES.home,
  },
  {
    name: "About",
    url: ROUTES.about,
  },
  {
    name: "Menu",
    url: ROUTES.menu,
  },
  {
    name: "Reservations",
    url: ROUTES.booking,
  },
  {
    name: "Order online",
    url: ROUTES.orderOnline,
  },
];

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = useCallback(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  const handleLogout = useCallback(() => setLoggedIn(false), [setLoggedIn]);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <button className="navbar-toggle-btn" onClick={handleMenuToggle}>
        <HamburgerIcon />
      </button>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          {LINKS.map((item) => (
            <li key={item.name} className="navbar-item">
              <NavLink
                onClick={handleItemClick}
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item.url}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className="navbar-item">
            {loggedIn ? (
              <button
                className="button"
                onClick={() => {
                  handleLogout();
                  handleItemClick();
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink
                className="navbar-link"
                to={ROUTES.login}
                onClick={handleItemClick}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
