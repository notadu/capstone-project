import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.png";
import { ROUTES } from "../../constants/routes";
import Navbar from "../Navbar";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={ROUTES.home} className="logo">
          <img src={logoImg} alt="Little Lemon Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
