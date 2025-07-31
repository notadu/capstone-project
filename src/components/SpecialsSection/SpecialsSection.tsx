import { Link } from "react-router-dom";

import { CURRENCY } from "../../constants/common";
import { MENU_ITEMS } from "../../constants/menu";
import Card from "../SpecialsCard";

import "./SpecialsSection.css";

const SpecialsSection = () => {
  return (
    <section className="specials">
      <div className="container">
        <div className="specials-header">
          <h3 className="subtitle">This week specials!</h3>
          <Link to="/menu" role="button" className="button call-to-action">
            Online Menu
          </Link>
        </div>
        <ul className="specials-list">
          {MENU_ITEMS.map((dish) => (
            <li key={dish.id}>
              <Card
                id={dish.id}
                name={dish.name}
                price={`${dish.price}${CURRENCY}`}
                description={dish.description}
                image={`/images/${dish.name.toLowerCase().replace(" ", "-")}.jpg`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default SpecialsSection;
