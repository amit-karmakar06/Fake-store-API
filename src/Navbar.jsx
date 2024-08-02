import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "./items";

export const Navbar = () => {
  const { cart, setFilteredItems, items } = useContext(ItemsContext);

  const handleClick = (e) => {
    const category = e.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.category.toLowerCase().includes(category)
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <ul>
        <li className="button">
          <Link to="/cart" style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}>Cart ({cart.length})</Link>
        </li>
      </ul>
      <select style={{
          padding: "0.5rem 1rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
          // backgroundColor: "#fff",
          cursor: "pointer",
          fontSize: "1rem",
          outline: "none",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          marginLeft: "1rem",
        }} name="dropdown" onChange={handleClick}>
        <option value="">Select Category</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};
