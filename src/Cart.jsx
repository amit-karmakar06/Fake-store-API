// Cart.jsx
import React, { useContext } from "react";
import { ItemsContext } from "./items";

export const CartItem = () => {
  const { cart } = useContext(ItemsContext);

  return (
    <div
      style={{
        // display: 'flex',
        width: "190px",
        overflow: "hidden",
        backgroundColor: "white",
        color: "black",
        borderRadius: "30px",
        // alignItems: 'center'
        listStyle: "none",
      }}
    >
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img
                src={item.image}
                style={{
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                  marginBottom: "1rem",
                }}
                alt={item.title}
              />
              <p>
                {item.title} - ${item.price}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
