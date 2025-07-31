import React from "react";

import "./SpecialsCard.css";
import { Link } from "react-router-dom";

import DeliveryIcon from "../../assets/delivery.svg?react";
import { ROUTES } from "../../constants/routes";

type CardProps = {
  id: string;
  image?: string;
  name: string;
  price: string | number;
  description: string;
};

const SpecialsCard: React.FC<CardProps> = ({
  id,
  image,
  name,
  price,
  description,
}) => (
  <div className="specials-card">
    <img src={image} alt={name} className="specials-card-image" />
    <div className="specials-card-content">
      <div className="specials-card-header">
        <h3 className="specials-card-title">{name}</h3>
        <span className="highlights-text">{price}</span>
      </div>
      <p className="paragraph-text">{description}</p>
      <Link
        className="specials-order-link"
        type="button"
        to={ROUTES.orderOnline}
        state={{ orderItemId: id }}
      >
        <span>Order a delivery</span>
        <DeliveryIcon />
      </Link>
    </div>
  </div>
);

export default SpecialsCard;
