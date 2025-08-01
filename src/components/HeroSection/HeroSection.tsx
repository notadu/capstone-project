import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h2 className="title">Little Lemon</h2>
          <h3 className="subtitle">Chicago</h3>
          <p className="description">
            Experience the taste of the Mediterranean with our chef’s specials
            and seasonal ingredients.
          </p>
          <Link
            to={ROUTES.booking}
            role="button"
            className="button call-to-action"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/restauranfood.jpg" alt="Delicious food" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
