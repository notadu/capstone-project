import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/facebook.svg?react";
import InstaIcon from "../../assets/instagram.svg?react";
import logoImg from "../../assets/lemon.png";
import TwitterIcon from "../../assets/twitter.svg?react";
import { ROUTES } from "../../constants/routes";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link to={ROUTES.home} className="footer-logo">
            <img src={logoImg} alt="Little Lemon Logo" />
            <span>Little Lemon</span>
          </Link>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to={ROUTES.home}>Home</Link>
              </li>
              <li>
                <Link to={ROUTES.about}>About</Link>
              </li>
              <li>
                <Link to={ROUTES.menu}>Menu</Link>
              </li>
              <li>
                <Link to={ROUTES.booking}>Reservations</Link>
              </li>
              <li>
                <Link to={ROUTES.orderOnline}>Order Online</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4>Contact</h4>
            <address>
              123 Lemon St.
              <br />
              Citrus City, CA 90000
              <br />
              <a href="tel:+1234567890">(123) 456-7890</a>
              <br />
              <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </address>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstaIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
