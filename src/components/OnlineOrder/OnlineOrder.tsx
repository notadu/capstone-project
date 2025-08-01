import { useMemo, useState } from "react";

import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { string, object, array } from "yup";

import { MENU_ITEMS } from "../../constants/menu";

import "./OnlineOrder.css";

type MenuItem = {
  id: string;
  name: string;
  price: number;
};

type OrderItem = {
  dish: MenuItem;
  quantity: number;
};

const Order = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const initialOrderItems = useMemo(() => {
    const existingMenuItem = location.state?.orderItemId
      ? MENU_ITEMS.find((item) => item.id === location.state.orderItemId)
      : null;

    if (existingMenuItem) {
      return [
        {
          dish: existingMenuItem,
          quantity: 1,
        },
      ];
    }
    return [] as OrderItem[];
  }, [location.state?.orderItemId]);

  const formik = useFormik({
    initialValues: {
      name: "",
      order: initialOrderItems,
    },
    validationSchema: object({
      name: string().required("Required"),
      order: array().min(1, "Please add at least one item to your order"),
    }),
    onSubmit: () => {
      if (formik.values.order.length) {
        setSubmitted(true);
      }
    },
  });

  const addToOrder = (menuItem: MenuItem) => {
    const getUpdatedOrder = () => {
      const existing = formik.values.order.find(
        (orderItem) => orderItem.dish.id === menuItem.id,
      );
      if (existing) {
        return formik.values.order.map((orderItem) =>
          orderItem.dish.id === menuItem.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        );
      }
      return [...formik.values.order, { dish: menuItem, quantity: 1 }];
    };

    formik.setFieldValue("order", getUpdatedOrder());
  };

  const removeFromOrder = (menuItemId: string) => {
    formik.setFieldValue(
      "order",
      formik.values.order
        .map((orderItem) =>
          orderItem.dish.id === menuItemId
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem,
        )
        .filter((o) => o.quantity > 0),
    );
  };

  const total = useMemo(
    () =>
      formik.values.order.reduce((sum, orderItem) => {
        return sum + orderItem.dish.price * orderItem.quantity;
      }, 0),
    [formik.values.order],
  );

  if (submitted) {
    return (
      <div className="order container">
        <h1 className="title">The food is ordered!</h1>
        <p>Thank you for your order, {formik.values.name}!</p>
        <p>Your food will be ready soon.</p>
      </div>
    );
  }

  return (
    <div className="order container">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Online Order</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}

        <h2>Menu</h2>
        <ul className="order-list">
          {MENU_ITEMS.map((item) => (
            <li className="order-list-item" key={item.id}>
              {item.name} - ${item.price}{" "}
              <button type="button" onClick={() => addToOrder(item)}>
                Add
              </button>
            </li>
          ))}
        </ul>
        <h2>Your Order</h2>
        {formik.values.order.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <ul className="order-list">
            {formik.values.order.map((o) => (
              <li key={o.dish.id} className="order-list-item">
                <span>
                  {o.dish.name} x {o.quantity} = ${o.dish.price * o.quantity}
                </span>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => removeFromOrder(o.dish.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${total}</h3>
        <button type="submit" disabled={!formik.isValid || !formik.dirty}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;
