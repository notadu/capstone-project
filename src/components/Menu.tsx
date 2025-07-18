import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    description: "Fresh salad with feta cheese and olives.",
    price: "$12.99",
  },
  {
    id: 2,
    name: "Bruschetta",
    description: "Grilled bread with tomato and basil.",
    price: "$8.99",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description: "Sweet and tangy lemon dessert.",
    price: "$6.99",
  },
];

const Menu: React.FC = () => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
