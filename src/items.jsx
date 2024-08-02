// items.jsx
import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilterItems = (text) => {
    const newFilteredItems = items.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
    console.log(newFilteredItems);
    setFilteredItems(newFilteredItems);
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        cart,
        setCart,
        filteredItems,
        handleFilterItems,
        setFilteredItems
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
