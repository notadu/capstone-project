import { CURRENCY } from "../../constants/common";
import { MENU_ITEMS } from "../../constants/menu";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu container">
      <h1 className="title">Menu</h1>
      <ul className="menu-list">
        {MENU_ITEMS.map((item) => (
          <li className="menu-item" key={item.id}>
            <img
              src={`/images/${item.name.toLowerCase().replace(" ", "-")}.jpg`}
              alt={item.name}
            />
            <div>
              <h2>{item.name}</h2>
              <p className="paragraph-text">{item.description}</p>
              <span className="highlights-text">
                {item.price}
                {CURRENCY}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
